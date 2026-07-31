import {
  workflow,
  node,
  trigger,
  newCredential,
  expr,
} from '@n8n/workflow-sdk';

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
    name: 'Start VagasUX fetch',
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

const fetchCuratedJobs = node({
  type: 'n8n-nodes-base.notion',
  version: 2.2,
  config: {
    name: 'Fetch curated jobs',
    credentials: { notionApi: newCredential('Notion account') },
    parameters: {
      resource: 'databasePage',
      operation: 'getAll',
      databaseId: {
        __rl: true,
        mode: 'id',
        value: '875a7396-c095-474c-9a45-d8543ee03fdb',
        cachedResultName: 'Vagas para iniciantes',
      },
      returnAll: true,
      simple: true,
      filterType: 'none',
    },
  },
});

const mapCuratedJobs = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Map curated jobs',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `function pickString(value) {
  if (value == null) return '';
  if (typeof value === 'string') return value.trim();
  if (typeof value === 'number') return String(value);
  if (Array.isArray(value)) return value.map(pickString).filter(Boolean).join(', ');
  if (typeof value === 'object') {
    if (value.name) return String(value.name).trim();
    if (value.plain_text) return String(value.plain_text).trim();
  }
  return String(value).trim();
}

function normalizeUrl(raw) {
  const url = String(raw || '').trim();
  if (!url) return '';
  try {
    const u = new URL(url);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((p) => u.searchParams.delete(p));
    u.hash = '';
    let out = u.toString();
    if (out.endsWith('/')) out = out.slice(0, -1);
    return out;
  } catch {
    return url;
  }
}

function parseDeadline(row) {
  const raw = row.property_inscri_es_aberta_at ?? row['Inscrições aberta até'] ?? row['Inscricoes aberta ate'];
  if (!raw) return null;
  const start = raw.start ?? raw;
  const d = new Date(start);
  return Number.isNaN(d.getTime()) ? null : d;
}

function stripDiacritics(value) {
  return String(value || '').normalize('NFD').replace(/[\\u0300-\\u036f]/g, '');
}

function mapWorkModel(raw) {
  const label = stripDiacritics(pickString(raw)).toLowerCase();
  if (!label) return null;
  if (label === 'nao informado' || label === 'unknown') return 'unknown';
  if (label === 'remoto' || label === 'remote') return 'remote';
  if (label.startsWith('hibrid') || label === 'hybrid') return 'hybrid';
  if (label === 'presencial' || label === 'onsite') return 'onsite';
  return null;
}

const out = [];
for (const item of items) {
  const row = item.json || {};
  const pageId = String(row.id || '').trim();
  if (!pageId) continue;

  const company = pickString(row.property_empresa ?? row.Empresa ?? row.name);
  const title = pickString(row.property_fun_o ?? row['Função'] ?? row.Funcao);
  const url = normalizeUrl(row.property_link_da_vaga_empresa ?? row['Link da vaga/empresa']);
  let skipReason = null;

  if (!company) skipReason = 'missing_company';
  else if (!title) skipReason = 'missing_title';
  else if (!url) skipReason = 'missing_url';

  const deadline = parseDeadline(row);
  if (deadline && deadline.getTime() < Date.now()) {
    skipReason = skipReason || 'deadline_passed';
  }

  const workModel = mapWorkModel(
    row.property_formato ?? row.Formato ?? row['Formato de trabalho'] ?? row['Modelo de trabalho'],
  );

  out.push({
    json: {
      source: 'VagasUX',
      source_job_id: pageId,
      company,
      title,
      description: pickString(row.property_descri_o ?? row['Descrição'] ?? row.Descricao) || null,
      url,
      location: pickString(row.property_localiza_o ?? row['Localização'] ?? row.Localizacao) || null,
      work_model: workModel,
      published_at: row.property_data_da_inclus_o ?? row['Data da inclusão'] ?? row.createdTime ?? row.created_time ?? null,
      skip: Boolean(skipReason),
      skip_reason: skipReason,
    },
  });
}

return out;`,
    },
  },
});

const keepValidJobs = node({
  type: 'n8n-nodes-base.filter',
  version: 2.3,
  config: {
    name: 'Keep valid jobs',
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
    credentials: { supabaseApi: { id: 'VtBtjog6BXvbtAno', name: 'Supabase account' } },
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
    source: 'VagasUX',
    job_count: $('Build upsert batch').first()?.json?.job_count ?? 0,
    batch: summary,
  },
}];`,
    },
  },
});

export default workflow('collector-vagasux', 'Collector VagasUX')
  .add(manualTrigger)
  .to(kickoff)
  .add(subworkflowTrigger)
  .to(kickoff)
  .add(kickoff)
  .to(fetchCuratedJobs)
  .to(mapCuratedJobs)
  .to(keepValidJobs)
  .to(buildUpsertBatch)
  .to(upsertJobsBatch)
  .to(summarizeBatch);
