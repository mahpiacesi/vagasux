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
  const raw = row['Inscrições aberta até'] ?? row['Inscricoes aberta ate'];
  if (!raw) return null;
  const start = raw.start ?? raw;
  const d = new Date(start);
  return Number.isNaN(d.getTime()) ? null : d;
}

const out = [];
for (const item of items) {
  const row = item.json || {};
  const pageId = String(row.id || '').trim();
  if (!pageId) continue;

  const company = pickString(row.Empresa);
  const title = pickString(row['Função'] ?? row.Funcao);
  const url = normalizeUrl(row['Link da vaga/empresa']);
  let skipReason = null;

  if (!company) skipReason = 'missing_company';
  else if (!title) skipReason = 'missing_title';
  else if (!url) skipReason = 'missing_url';

  const deadline = parseDeadline(row);
  if (deadline && deadline.getTime() < Date.now()) {
    skipReason = skipReason || 'deadline_passed';
  }

  out.push({
    json: {
      source: 'VagasUX',
      source_job_id: pageId,
      company,
      title,
      description: pickString(row['Descrição'] ?? row.Descricao) || null,
      url,
      location: pickString(row['Localização'] ?? row.Localizacao) || null,
      published_at: row['Data da inclusão'] ?? row.createdTime ?? row.created_time ?? null,
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

const upsertJob = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Upsert job',
    credentials: { supabaseApi: { id: 'VtBtjog6BXvbtAno', name: 'Supabase account' } },
    retryOnFail: true,
    maxTries: 3,
    waitBetweenTries: 1000,
    parameters: {
      method: 'POST',
      url: 'https://xbvspzwjjjtkvecseoog.supabase.co/rest/v1/rpc/upsert_collector_job',
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'supabaseApi',
      sendHeaders: true,
      headerParameters: {
        parameters: [
          { name: 'Content-Type', value: 'application/json' },
          { name: 'Prefer', value: 'return=representation' },
        ],
      },
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: expr(
        "{{ JSON.stringify({ p_source: $json.source, p_source_job_id: String($json.source_job_id), p_company: $json.company, p_title: $json.title, p_description: $json.description || null, p_url: $json.url, p_location: $json.location || null, p_published_at: $json.published_at || null }) }}",
      ),
      options: { timeout: 30000 },
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
  .to(upsertJob);
