import {
  workflow,
  node,
  trigger,
  merge,
  expr,
  newCredential,
} from '@n8n/workflow-sdk';

const API_URL =
  'https://apigw.solides.com.br/jobs/v3/portal-vacancies-new';

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
    name: 'Start Sólides fetch',
    parameters: {
      mode: 'manual',
      includeOtherFields: false,
      assignments: {
        assignments: [
          { id: 'kickoff-flag', name: 'ok', value: true, type: 'boolean' },
        ],
      },
    },
  },
});

const fetchDesigner = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch designer',
    parameters: {
      method: 'GET',
      url: API_URL,
      authentication: 'none',
      sendQuery: true,
      queryParameters: {
        parameters: [
          { name: 'title', value: 'designer' },
          { name: 'page', value: '1' },
        ],
      },
      options: {
        timeout: 60000,
        pagination: {
          pagination: {
            paginationMode: 'updateAParameterInEachRequest',
            parameters: {
              parameters: [
                {
                  type: 'qs',
                  name: 'page',
                  value: '={{ $response.body.data.currentPage + 1 }}',
                },
              ],
            },
            paginationCompleteWhen: 'other',
            completeExpression:
              '={{ $response.body.data.currentPage >= $response.body.data.totalPages }}',
            limitPagesFetched: true,
            maxRequests: 45,
            requestInterval: 250,
          },
        },
      },
    },
  },
});

const fetchUxDesigner = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch ux designer',
    parameters: {
      method: 'GET',
      url: API_URL,
      authentication: 'none',
      sendQuery: true,
      queryParameters: {
        parameters: [
          { name: 'title', value: 'ux designer' },
          { name: 'page', value: '1' },
        ],
      },
      options: {
        timeout: 60000,
        pagination: {
          pagination: {
            paginationMode: 'updateAParameterInEachRequest',
            parameters: {
              parameters: [
                {
                  type: 'qs',
                  name: 'page',
                  value: '={{ $response.body.data.currentPage + 1 }}',
                },
              ],
            },
            paginationCompleteWhen: 'other',
            completeExpression:
              '={{ $response.body.data.currentPage >= $response.body.data.totalPages }}',
            limitPagesFetched: true,
            maxRequests: 5,
            requestInterval: 250,
          },
        },
      },
    },
  },
});

const fetchProductDesigner = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch product designer',
    parameters: {
      method: 'GET',
      url: API_URL,
      authentication: 'none',
      sendQuery: true,
      queryParameters: {
        parameters: [
          { name: 'title', value: 'product designer' },
          { name: 'page', value: '1' },
        ],
      },
      options: {
        timeout: 60000,
        pagination: {
          pagination: {
            paginationMode: 'updateAParameterInEachRequest',
            parameters: {
              parameters: [
                {
                  type: 'qs',
                  name: 'page',
                  value: '={{ $response.body.data.currentPage + 1 }}',
                },
              ],
            },
            paginationCompleteWhen: 'other',
            completeExpression:
              '={{ $response.body.data.currentPage >= $response.body.data.totalPages }}',
            limitPagesFetched: true,
            maxRequests: 3,
            requestInterval: 250,
          },
        },
      },
    },
  },
});

const fetchUiDesigner = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch ui designer',
    parameters: {
      method: 'GET',
      url: API_URL,
      authentication: 'none',
      sendQuery: true,
      queryParameters: {
        parameters: [
          { name: 'title', value: 'ui designer' },
          { name: 'page', value: '1' },
        ],
      },
      options: {
        timeout: 60000,
        pagination: {
          pagination: {
            paginationMode: 'updateAParameterInEachRequest',
            parameters: {
              parameters: [
                {
                  type: 'qs',
                  name: 'page',
                  value: '={{ $response.body.data.currentPage + 1 }}',
                },
              ],
            },
            paginationCompleteWhen: 'other',
            completeExpression:
              '={{ $response.body.data.currentPage >= $response.body.data.totalPages }}',
            limitPagesFetched: true,
            maxRequests: 3,
            requestInterval: 250,
          },
        },
      },
    },
  },
});

const combineSearches = merge({
  version: 3.2,
  config: {
    name: 'Combine searches',
    parameters: { mode: 'append', numberInputs: 4 },
  },
});

const mapAndDedupe = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Map and dedupe Sólides',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const MAX_AGE_MS = 60 * 24 * 60 * 60 * 1000;
const byId = new Map();

function stripHtml(html) {
  return String(html || '').replace(/<[^>]+>/g, ' ').replace(/\\s+/g, ' ').trim();
}

function normalizeTitle(title) {
  return String(title || '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

function isRelevant(title) {
  const t = normalizeTitle(title);
  const excluded =
    /\\b(vendedor|vendedora|auxiliar administrativo|apoio de loja|operador de loja|caixa|estoquista|consultor de vendas)\\b/.test(t);
  const designRole =
    /\\b(designer|design grafico|designer grafico|design de produto|carreira de design|design ops|design system|ux writer|content designer|product designer|visual designer|graphic designer|web designer|motion designer|service designer|interaction designer|art director|diretor de arte|ux|ui|research|pesquisa)\\b/.test(t);
  const leadershipOrSupport =
    (
      /\\b(coordenador|coordenadora|gerente|lider|lead|head|supervisor|supervisora|especialista|analista|assistente|estagio|estagiario|estagiaria)\\b.*\\b(ux|ui|design|research|pesquisa)\\b/.test(t)
      ||
      /\\b(ux|ui|design|research|pesquisa)\\b.*\\b(coordenador|coordenadora|gerente|lider|lead|head|supervisor|supervisora|especialista|analista|assistente|estagio|estagiario|estagiaria)\\b/.test(t)
    );
  return !excluded && (designRole || leadershipOrSupport);
}

function mapWorkModel(job) {
  if (job.homeOffice === true) return 'remote';
  const type = String(job.jobType || '').toLowerCase();
  if (type.includes('remot') || type.includes('home')) return 'remote';
  if (type.includes('hibrid')) return 'hybrid';
  if (type.includes('presencial') || type.includes('onsite')) return 'onsite';
  return 'unknown';
}

function mapLocation(job) {
  const city = job.city?.name || '';
  const state = job.state?.code || job.state?.name || '';
  const parts = [city, state].filter(Boolean);
  if (parts.length) return parts.join(', ');
  if (job.homeOffice) return 'Remota';
  return null;
}

function canonicalUrl(job) {
  const redirect = String(job.redirectLink || '').trim();
  if (redirect) return redirect.split('?')[0];
  const id = String(job.id || '').trim();
  return id ? 'https://vagas.solides.com.br/vaga/' + id : '';
}

for (const item of items) {
  const rows = Array.isArray(item.json?.data?.data) ? item.json.data.data : [];
  for (const job of rows) {
    if (!job?.id) continue;
    byId.set(String(job.id), job);
  }
}

const out = [];
for (const job of byId.values()) {
  const title = String(job.title || '').trim();
  if (!title) continue;

  let skipReason = null;
  if (!isRelevant(title)) skipReason = 'not_design_related';

  const publishedAt = job.createdAt || null;
  const publishedMs = publishedAt ? new Date(publishedAt).getTime() : NaN;
  const withinAge = Number.isNaN(publishedMs) ? true : (Date.now() - publishedMs) <= MAX_AGE_MS;
  if (!withinAge) skipReason = skipReason || 'older_than_60_days';

  const url = canonicalUrl(job);
  if (!url) skipReason = skipReason || 'missing_url';

  const company = String(job.companyName || 'Empresa').trim();

  out.push({
    json: {
      source: 'Sólides',
      source_job_id: String(job.id),
      company,
      title,
      description: stripHtml(job.description) || null,
      url,
      location: mapLocation(job),
      published_at: publishedAt,
      work_model: mapWorkModel(job),
      skip: Boolean(skipReason),
      skip_reason: skipReason,
    },
  });
}

return out;`,
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

return [{
  json: {
    job_count: jobs.length,
    jobs,
  },
}];`,
    },
  },
});

const upsertJobsBatch = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Upsert jobs batch',
    credentials: { supabaseApi: newCredential('Supabase account') },
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
      headerParameters: {
        parameters: [{ name: 'Content-Type', value: 'application/json' }],
      },
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
const summary = payload.total != null
  ? payload
  : (payload.ok != null ? payload : { raw: payload });

return [{
  json: {
    source: 'Sólides',
    job_count: $('Build upsert batch').first()?.json?.job_count ?? 0,
    batch: summary,
  },
}];`,
    },
  },
});

export default workflow('collector-solides', 'Collector Sólides')
  .add(manualTrigger)
  .to(kickoff)
  .add(subworkflowTrigger)
  .to(kickoff)
  .add(kickoff)
  .to(fetchDesigner.to(combineSearches.input(0)))
  .add(kickoff)
  .to(fetchUxDesigner.to(combineSearches.input(1)))
  .add(kickoff)
  .to(fetchProductDesigner.to(combineSearches.input(2)))
  .add(kickoff)
  .to(fetchUiDesigner.to(combineSearches.input(3)))
  .add(combineSearches)
  .to(mapAndDedupe)
  .to(keepRelevantJobs)
  .to(buildUpsertBatch)
  .to(upsertJobsBatch)
  .to(summarizeBatch);
