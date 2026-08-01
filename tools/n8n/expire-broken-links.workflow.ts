import {
  workflow,
  node,
  trigger,
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
    name: 'Start link check',
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

const fetchRecentPublished = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch recent published jobs',
    credentials: { supabaseApi: { id: '8toznvZZsRHqeeOs', name: 'Supabase account' } },
    onError: 'continueRegularOutput',
    parameters: {
      method: 'GET',
      url: expr(
        '{{ "https://xbvspzwjjjtkvecseoog.supabase.co/rest/v1/jobs?status=eq.published&select=id,url,source,source_job_id,title&url=not.is.null&order=updated_at.desc&limit=250&published_at=gte." + $now.minus({ days: 14 }).toISO() }}',
      ),
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'supabaseApi',
      options: { timeout: 60000 },
    },
  },
});

const buildCheckQueue = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Build check queue',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const rows = Array.isArray(items[0]?.json)
  ? items[0].json
  : (Array.isArray(items) ? items.map((item) => item.json).flat() : []);

const out = [];
for (const row of rows) {
  const url = String(row?.url || '').trim();
  if (!url.startsWith('http')) continue;
  out.push({
    json: {
      id: row.id,
      url,
      source: row.source,
      source_job_id: row.source_job_id,
      title: row.title,
    },
  });
}

return out.length ? out : [{ json: { skip: true, reason: 'no_jobs_to_check' } }];`,
    },
  },
});

const skipWhenEmpty = node({
  type: 'n8n-nodes-base.filter',
  version: 2.3,
  config: {
    name: 'Skip when empty',
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
            id: 'has-url',
            leftValue: expr('{{ $json.url }}'),
            rightValue: '',
            operator: { type: 'string', operation: 'notEmpty', singleValue: true },
          },
        ],
      },
    },
  },
});

const checkUrl = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Check job URL',
    onError: 'continueRegularOutput',
    retryOnFail: false,
    parameters: {
      method: 'GET',
      url: expr('{{ $json.url }}'),
      authentication: 'none',
      sendHeaders: true,
      headerParameters: {
        parameters: [
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (compatible; VagasUX-LinkCheck/1.0; +https://vagasux.com.br)',
          },
          { name: 'Accept', value: 'text/html,application/xhtml+xml' },
        ],
      },
      options: {
        timeout: 15000,
        redirect: { redirect: { followRedirects: true, maxRedirects: 5 } },
        response: { response: { fullResponse: true, neverError: true } },
        batching: {
          batch: {
            batchSize: 1,
            batchInterval: 350,
          },
        },
      },
    },
  },
});

const classifyBrokenLinks = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Classify broken links',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `function isBroken(statusCode, error) {
  if (statusCode === 404 || statusCode === 410) return true;
  const blob = String(error?.message || error?.code || error?.description || '');
  if (/status code 404|status code 410/i.test(blob)) return true;
  if (/ENOTFOUND|ECONNREFUSED|ETIMEDOUT|EAI_AGAIN|Could not resolve|getaddrinfo|ERR_BAD_REQUEST.*404/i.test(blob)) return true;
  return false;
}

const broken = [];
const inputs = $('Build check queue').all();
for (let i = 0; i < items.length; i++) {
  const base = inputs[i]?.json ?? {};
  const statusCode = items[i].json?.statusCode ?? items[i].json?.status;
  const error = items[i].json?.error;
  if (!base.id) continue;
  if (isBroken(statusCode, error)) {
    broken.push({
      id: base.id,
      url: base.url,
      source: base.source,
      source_job_id: base.source_job_id,
      title: base.title,
      status_code: statusCode ?? null,
      error: error?.message || null,
    });
  }
}

return [{
  json: {
    checked: items.length,
    broken_count: broken.length,
    broken,
  },
}];`,
    },
  },
});

const expireBroken = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Expire broken jobs',
    credentials: { supabaseApi: { id: '8toznvZZsRHqeeOs', name: 'Supabase account' } },
    onError: 'continueRegularOutput',
    parameters: {
      method: 'POST',
      url: 'https://xbvspzwjjjtkvecseoog.supabase.co/rest/v1/rpc/expire_jobs_by_ids',
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'supabaseApi',
      sendHeaders: true,
      headerParameters: {
        parameters: [{ name: 'Content-Type', value: 'application/json' }],
      },
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: expr(
        '{{ JSON.stringify({ p_job_ids: ($json.broken || []).map((row) => row.id) }) }}',
      ),
      options: { timeout: 60000 },
    },
  },
});

const summarize = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Summarize link check',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const classified = $('Classify broken links').first()?.json ?? {};
const expiredCount = items[0]?.json;
const expired = typeof expiredCount === 'number' ? expiredCount : Number(expiredCount) || 0;

return [{
  json: {
    checked: classified.checked ?? 0,
    broken_count: classified.broken_count ?? 0,
    expired,
    broken: classified.broken ?? [],
  },
}];`,
    },
  },
});

export default workflow('expire-broken-links', 'Expire broken links')
  .add(manualTrigger)
  .to(kickoff)
  .add(subworkflowTrigger)
  .to(kickoff)
  .add(kickoff)
  .to(fetchRecentPublished)
  .to(buildCheckQueue)
  .to(skipWhenEmpty)
  .to(checkUrl)
  .to(classifyBrokenLinks)
  .to(expireBroken)
  .to(summarize);
