import {
  workflow,
  node,
  trigger,
  expr,
} from '@n8n/workflow-sdk';

const TENANTS = ['contabilizei', 'queroeducacao'];
const CAREER_API_URL = 'https://api.inhire.app/job-posts/public/pages';

const manualTrigger = trigger({
  type: 'n8n-nodes-base.manualTrigger',
  version: 1,
  config: { name: 'When clicking Execute workflow' },
});

const subworkflowTrigger = trigger({
  type: 'n8n-nodes-base.executeWorkflowTrigger',
  version: 1.2,
  config: {
    name: 'When Executed by Another Workflow',
    parameters: { inputSource: 'passthrough' },
  },
});

const kickoff = node({
  type: 'n8n-nodes-base.set',
  version: 3.4,
  config: {
    name: 'Start InHire fetch',
    parameters: {
      mode: 'manual',
      includeOtherFields: false,
      assignments: {
        assignments: [
          { id: 'tenantCount', name: 'tenant_count', value: TENANTS.length, type: 'number' },
        ],
      },
    },
  },
});

const buildTenantQueue = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Build InHire tenant queue',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `return ${JSON.stringify(TENANTS)}.map((tenant) => ({ json: { tenant } }));`,
    },
  },
});

const fetchCareerPage = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch public career page',
    onError: 'continueRegularOutput',
    retryOnFail: true,
    maxTries: 2,
    waitBetweenTries: 1500,
    parameters: {
      method: 'GET',
      url: CAREER_API_URL,
      authentication: 'none',
      sendHeaders: true,
      headerParameters: {
        parameters: [
          { name: 'X-Tenant', value: expr('{{ $json.tenant }}') },
          { name: 'Accept', value: 'application/json' },
        ],
      },
      options: { timeout: 60000 },
    },
  },
});

const buildJobPageQueue = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Build InHire job page queue',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const tenantsByName = {
  Contabilizei: 'contabilizei',
  Qeevo: 'queroeducacao',
};

return items.flatMap((item) => {
  const page = item.json ?? {};
  const tenant = tenantsByName[page.tenantName];
  const jobs = Array.isArray(page.jobsPage) ? page.jobsPage : [];
  if (!tenant) return [];
  return jobs
    .filter((job) => job?.jobId && String(job.status || '').toLowerCase() === 'published')
    .map((job) => ({ json: { tenant, job_id: String(job.jobId) } }));
});`,
    },
  },
});

const fetchJobPage = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch public job page',
    onError: 'continueRegularOutput',
    retryOnFail: true,
    maxTries: 2,
    waitBetweenTries: 500,
    parameters: {
      method: 'GET',
      url: expr(`${CAREER_API_URL}/{{ $json.job_id }}`),
      authentication: 'none',
      sendHeaders: true,
      headerParameters: {
        parameters: [
          { name: 'X-Tenant', value: expr('{{ $json.tenant }}') },
          { name: 'Accept', value: 'application/json' },
        ],
      },
      options: {
        timeout: 60000,
        batching: {
          batch: {
            batchSize: 1,
            batchInterval: 250,
          },
        },
      },
    },
  },
});

const mapAndDedupe = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Map and dedupe InHire jobs',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const MAX_AGE_MS = 60 * 24 * 60 * 60 * 1000;
const tenantsByName = {
  Contabilizei: 'contabilizei',
  Qeevo: 'queroeducacao',
};
const byId = new Map();

function decodeHtml(value) {
  const namedEntities = {
    aacute: 'á', agrave: 'à', acirc: 'â', atilde: 'ã',
    ccedil: 'ç', eacute: 'é', ecirc: 'ê', iacute: 'í',
    oacute: 'ó', ocirc: 'ô', otilde: 'õ', uacute: 'ú',
    Aacute: 'Á', Agrave: 'À', Acirc: 'Â', Atilde: 'Ã',
    Ccedil: 'Ç', Eacute: 'É', Ecirc: 'Ê', Iacute: 'Í',
    Oacute: 'Ó', Ocirc: 'Ô', Otilde: 'Õ', Uacute: 'Ú',
  };
  return String(value || '')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/gi, '<')
    .replace(/&gt;/gi, '>')
    .replace(/&([A-Za-z]+);/g, (entity, name) => namedEntities[name] || entity)
    .replace(/锚/g, 'ê')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\\s+/g, ' ')
    .trim();
}

function normalizeTitle(value) {
  return String(value || '')
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .toLowerCase();
}

function isRelevant(title) {
  const value = normalizeTitle(title);
  const excluded = /\\b(vendedor|vendedora|auxiliar administrativo|apoio de loja|operador de loja|caixa|estoquista|consultor de vendas|sobrancelh|unha|barbeir|cabelo|estetic|manicure|pedicure|micropigment|interior(es)?|design de ambientes|moveis planejados|mobiliario|decorador de interiores)\\b/.test(value);
  const designRole = /\\b(designer|design grafico|designer grafico|design de produto|design ops|design system|ux writer|content designer|product designer|visual designer|graphic designer|web designer|motion designer|service designer|interaction designer|art director|diretor de arte|ux|ui|research|pesquisa)\\b/.test(value);
  const leadershipOrSupport = /\\b(coordenador|coordenadora|gerente|lider|lead|head|supervisor|supervisora|especialista|analista|assistente|estagio|estagiario|estagiaria)\\b.*\\b(ux|ui|design|research|pesquisa)\\b|\\b(ux|ui|design|research|pesquisa)\\b.*\\b(coordenador|coordenadora|gerente|lider|lead|head|supervisor|supervisora|especialista|analista|assistente|estagio|estagiario|estagiaria)\\b/.test(value);
  return !excluded && (designRole || leadershipOrSupport);
}

function mapWorkModel(value) {
  const model = normalizeTitle(value);
  if (/remot|home office/.test(model)) return 'remote';
  if (/hibrid/.test(model)) return 'hybrid';
  if (/presencial|on.?site/.test(model)) return 'onsite';
  return 'unknown';
}

for (const item of items) {
  const job = item.json || {};
  const jobId = String(job.jobId || '').trim();
  if (jobId) byId.set(jobId, job);
}

return Array.from(byId.values()).map((job) => {
  const jobId = String(job.jobId);
  const tenant = tenantsByName[job.tenantName];
  const title = decodeHtml(job.displayName);
  const publishedAt = job.lastPublishedAt || job.publishedAt || job.createdAt || null;
  const publishedMs = publishedAt ? new Date(publishedAt).getTime() : NaN;
  let skipReason = null;
  if (!tenant) skipReason = 'unknown_tenant';
  else if (!title) skipReason = 'missing_title';
  else if (!isRelevant(title)) skipReason = 'not_design_related';
  else if (!Number.isNaN(publishedMs) && Date.now() - publishedMs > MAX_AGE_MS) skipReason = 'older_than_60_days';

  return {
    json: {
      source: 'InHire',
      source_job_id: tenant + ':' + jobId,
      company: String(job.tenantName || 'Empresa').trim(),
      title,
      description: decodeHtml(job.description) || null,
      url: 'https://' + tenant + '.inhire.app/job/' + encodeURIComponent(jobId),
      location: String(job.location || '').trim() || null,
      published_at: publishedAt,
      work_model: mapWorkModel(job.workplaceType),
      skip: Boolean(skipReason),
      skip_reason: skipReason,
    },
  };
});`,
    },
  },
});

const keepRelevantJobs = node({
  type: 'n8n-nodes-base.filter',
  version: 2.3,
  config: {
    name: 'Keep relevant jobs',
    parameters: {
      looseTypeValidation: true,
      conditions: {
        combinator: 'and',
        options: {
          caseSensitive: true,
          leftValue: '',
          typeValidation: 'loose',
          version: 2,
        },
        conditions: [
          {
            id: 'keep-not-skip',
            leftValue: expr('{{ $json.skip }}'),
            rightValue: '',
            operator: {
              type: 'boolean',
              operation: 'false',
              singleValue: true,
            },
          },
        ],
      },
    },
  },
});

const buildUpsertBatch = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Build upsert batch',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const jobs = items.map((item) => ({
  source: item.json.source,
  source_job_id: String(item.json.source_job_id),
  company: item.json.company,
  title: item.json.title,
  description: item.json.description || null,
  url: item.json.url,
  location: item.json.location || null,
  published_at: item.json.published_at || null,
  work_model: item.json.work_model || null,
}));

return [{ json: { job_count: jobs.length, jobs } }];`,
    },
  },
});

const upsertJobsBatch = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Upsert jobs batch',
    credentials: { supabaseApi: { id: '8toznvZZsRHqeeOs', name: 'Supabase account' } },
    onError: 'continueRegularOutput',
    retryOnFail: true,
    maxTries: 2,
    waitBetweenTries: 2000,
    parameters: {
      method: 'POST',
      url: 'https://xbvspzwjjjtkvecseoog.supabase.co/rest/v1/rpc/upsert_collector_jobs_batch',
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'supabaseApi',
      sendHeaders: true,
      headerParameters: { parameters: [{ name: 'Content-Type', value: 'application/json' }] },
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: expr('{{ JSON.stringify({ p_jobs: $json.jobs }) }}'),
      options: { timeout: 120000 },
    },
  },
});

const summarizeBatch = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Summarize batch',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const payload = items[0]?.json ?? {};
return [{
  json: {
    source: 'InHire',
    tenants: ${JSON.stringify(TENANTS)},
    job_count: $('Build upsert batch').first()?.json?.job_count ?? 0,
    batch: payload.total != null ? payload : (payload.ok != null ? payload : { raw: payload }),
  },
}];`,
    },
  },
});

export default workflow('collector-inhire', 'Collector InHire')
  .add(manualTrigger)
  .to(kickoff)
  .add(subworkflowTrigger)
  .to(kickoff)
  .add(kickoff)
  .to(buildTenantQueue)
  .to(fetchCareerPage)
  .add(fetchCareerPage)
  .to(buildJobPageQueue)
  .to(fetchJobPage)
  .to(mapAndDedupe)
  .to(keepRelevantJobs)
  .to(buildUpsertBatch)
  .to(upsertJobsBatch)
  .to(summarizeBatch);
