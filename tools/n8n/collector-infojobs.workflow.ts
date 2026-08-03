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
    name: 'Start InfoJobs fetch',
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

const buildFetchQueue = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Build fetch queue',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const terms = ['designer', 'ux-designer', 'design-grafico', 'product-designer', 'ui-designer'];
const maxPages = 8;
const fragmentApi = 'https://www.infojobs.com.br/mf-publicarea/VacancyList/GetVacancyListFragment';
const out = [];

for (const term of terms) {
  for (let page = 1; page <= maxPages; page += 1) {
    const searchUrl = page === 1
      ? 'https://www.infojobs.com.br/vagas-de-emprego-' + term + '.aspx'
      : 'https://www.infojobs.com.br/vagas-de-emprego-' + term + '.aspx?page=' + page;
    out.push({
      json: {
        term,
        page,
        search_url: searchUrl,
        fragment_url: fragmentApi + '?url=' + encodeURIComponent(searchUrl),
      },
    });
  }
}

return out;`,
    },
  },
});

const fetchFragment = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Fetch vacancy fragment',
    onError: 'continueRegularOutput',
    retryOnFail: true,
    maxTries: 2,
    waitBetweenTries: 1500,
    parameters: {
      method: 'GET',
      url: expr('{{ $json.fragment_url }}'),
      authentication: 'none',
      sendHeaders: true,
      headerParameters: {
        parameters: [
          {
            name: 'User-Agent',
            value:
              'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
          },
          { name: 'Accept', value: 'application/json, text/plain, */*' },
          { name: 'Accept-Language', value: 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7' },
          { name: 'Referer', value: expr('{{ $json.search_url }}') },
        ],
      },
      options: {
        timeout: 60000,
        batching: {
          batch: {
            batchSize: 1,
            batchInterval: 400,
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
    name: 'Map and dedupe InfoJobs',
    parameters: {
      mode: 'runOnceForAllItems',
      language: 'javaScript',
      jsCode: `const MAX_AGE_MS = 60 * 24 * 60 * 60 * 1000;
const BASE_URL = 'https://www.infojobs.com.br';
const byId = new Map();

function decodeHtml(value) {
  return String(value || '')
    .replace(/&#x([0-9A-Fa-f]+);/g, (_, hex) => String.fromCharCode(parseInt(hex, 16)))
    .replace(/&amp;/g, '&')
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/\\s+/g, ' ')
    .trim();
}

function cleanCompanyName(value) {
  return decodeHtml(String(value || 'Empresa'))
    .replace(/\\s*Este selo indica que a empresa foi verificada pelo Infojobs[^.]*\\.?\\s*(Saiba o que isso significa\\.?\\s*)?/gi, '')
    .replace(/\\s+/g, ' ')
    .trim() || 'Empresa';
}

function stripInfojobsVerificationBadgeHtml(html) {
  return String(html || '')
    .replace(/<span[^>]*(?:data-bs-title|title)="[^"]*selo indica[^"]*"[^>]*>[\\s\\S]*?<\\/span>/gi, '')
    .replace(/<span[^>]*>[\\s\\S]*?Este selo indica[\\s\\S]*?<\\/span>/gi, '');
}

function extractCompanyName(rawHtml) {
  return cleanCompanyName(stripInfojobsVerificationBadgeHtml(rawHtml).replace(/<[^>]+>/g, ' '));
}

function normalizeTitle(title) {
  return decodeHtml(title)
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

function isNonDesignTitle(title) {
  const t = normalizeTitle(title);
  return /\\b(product design lead engineer|design lead engineer|design engineer|\\(nx\\)|designer de produtos industrial|design de moveis|designer de moveis|projetista e designer|\\bprojetista\\b|desenvolvedor.*front.?end|desenvolvedor.*\\bui\\b|designer de sobrancelh|consultora de beleza|depilador.*designer)\\b/.test(t);
}

function isRelevant(title) {
  const t = normalizeTitle(title);
  if (isNonDesignTitle(t)) return false;
  const excluded =
    /\\b(vendedor|vendedora|auxiliar administrativo|apoio de loja|operador de loja|caixa|estoquista|consultor de vendas|sobrancelh|unha|barbeir|cabelo|estetic|manicure|pedicure|micropigment|interior(es)?|design de ambientes|moveis planejados|mobiliario|decorador de interiores)\\b/.test(t);
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

function mapWorkModel(title, location, cardHtml) {
  const blob = normalizeTitle(title + ' ' + location + ' ' + decodeHtml(cardHtml));
  if (/\\b(home office|remot|teletrabalho|100% remoto|trabalho remoto)\\b/.test(blob)) return 'remote';
  if (/\\b(hibrid|híbrid)\\b/.test(blob)) return 'hybrid';
  if (/\\b(presencial|on-?site)\\b/.test(blob)) return 'onsite';
  return 'unknown';
}

function extractCardDescription(block) {
  let text = decodeHtml(String(block || '')
    .replace(/<script[\\s\\S]*?<\\/script>/gi, '')
    .replace(/<style[\\s\\S]*?<\\/style>/gi, '')
    .replace(/<[^>]+>/g, ' '))
    .replace(/\\s+/g, ' ')
    .trim();
  text = text
    .replace(/\\s*Este selo indica que a empresa foi verificada pelo Infojobs[^.]*\\.?\\s*(Saiba o que isso significa\\.?\\s*)?/gi, '')
    .replace(/\\s*NOVA\\s+/gi, ' ')
    .replace(/\\s+/g, ' ')
    .trim();
  if (text.length < 50) return null;
  return text.slice(0, 3000);
}

function parseCards(fragmentHtml) {
  const html = String(fragmentHtml || '');
  const cards = [];
  const cardRegex = /data-id="(\\d+)"[^>]*data-href="([^"]+)"[\\s\\S]*?js_vacancyTitle">\\s*([\\s\\S]*?)\\s*<\\/h2>/g;
  let match;
  while ((match = cardRegex.exec(html)) !== null) {
    const [, id, href, rawTitle] = match;
    const start = Math.max(0, match.index - 200);
    const end = Math.min(html.length, match.index + 2500);
    const block = html.slice(start, end);
    const dateMatch = block.match(/class="js_date" data-value="([^"]+)"/);
    const locationMatch = block.match(/<div class="mb-8">\\s*([^<]+)/);
    const companyMatch = block.match(/<div class="text-body">\\s*<a[^>]*>\\s*([\\s\\S]*?)\\s*<\\/a>/);
    const company = extractCompanyName(companyMatch?.[1] || 'Empresa');
    cards.push({
      id,
      href,
      title: decodeHtml(rawTitle),
      publishedAt: dateMatch?.[1] ? dateMatch[1].replace(/\\//g, '-') : null,
      location: decodeHtml(locationMatch?.[1] || ''),
      company,
      block,
    });
  }
  return cards;
}

for (const item of items) {
  const fragmentHtml = item.json?.listFragmentHTML;
  if (!fragmentHtml) continue;
  for (const card of parseCards(fragmentHtml)) {
    if (!card.id) continue;
    byId.set(String(card.id), card);
  }
}

const out = [];
for (const card of byId.values()) {
  const title = String(card.title || '').trim();
  if (!title) continue;

  let skipReason = null;
  if (!isRelevant(title)) skipReason = 'not_design_related';

  const publishedAt = card.publishedAt || null;
  const publishedMs = publishedAt ? new Date(publishedAt).getTime() : NaN;
  const withinAge = Number.isNaN(publishedMs) ? true : (Date.now() - publishedMs) <= MAX_AGE_MS;
  if (!withinAge) skipReason = skipReason || 'older_than_60_days';

  const href = String(card.href || '').trim();
  const url = href.startsWith('http') ? href.split('?')[0] : BASE_URL + href.split('?')[0];
  if (!url || url === BASE_URL) skipReason = skipReason || 'missing_url';

  out.push({
    json: {
      source: 'InfoJobs',
      source_job_id: String(card.id),
      company: cleanCompanyName(String(card.company || 'Empresa').trim()),
      title,
      description: extractCardDescription(card.block),
      url,
      location: card.location || null,
      published_at: publishedAt,
      work_model: mapWorkModel(title, card.location, card.block),
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
    source: 'InfoJobs',
    job_count: $('Build upsert batch').first()?.json?.job_count ?? 0,
    batch: summary,
  },
}];`,
    },
  },
});

export default workflow('collector-infojobs', 'Collector InfoJobs')
  .add(manualTrigger)
  .to(kickoff)
  .add(subworkflowTrigger)
  .to(kickoff)
  .add(kickoff)
  .to(buildFetchQueue)
  .to(fetchFragment)
  .to(mapAndDedupe)
  .to(keepRelevantJobs)
  .to(buildUpsertBatch)
  .to(upsertJobsBatch)
  .to(summarizeBatch);
