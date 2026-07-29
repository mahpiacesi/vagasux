import {
  workflow,
  node,
  trigger,
  newCredential,
  expr,
  splitInBatches,
  nextBatch,
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
    name: 'Start partners fetch',
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

const fetchPartners = node({
  type: 'n8n-nodes-base.notion',
  version: 2.2,
  config: {
    name: 'Fetch partners',
    credentials: { notionApi: newCredential('Notion account') },
    parameters: {
      resource: 'databasePage',
      operation: 'getAll',
      databaseId: {
        __rl: true,
        mode: 'id',
        value: '6ef3390c137d4e9c9d9a7863f2ada4a6',
        cachedResultName: 'Parceiros',
      },
      returnAll: true,
      simple: true,
      filterType: 'none',
    },
  },
});

const mapPartners = node({
  type: 'n8n-nodes-base.code',
  version: 2,
  config: {
    name: 'Map active partners',
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

function stripMarkdown(value) {
  return pickString(value).replace(/\\*\\*/g, '').trim();
}

function slugify(value) {
  return stripMarkdown(value)
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function pickStatus(row) {
  return pickString(
    row.property_status ?? row.Status ?? row.status ?? row['Status'],
  );
}

function pickLogoFile(row) {
  const raw =
    row.property_logo ??
    row.Logo ??
    row.logo ??
    row['Logo'];

  if (!raw) return null;

  if (Array.isArray(raw)) {
    const first = raw[0];
    if (!first) return null;
    if (typeof first === 'string') return { url: first, name: 'logo' };
    return {
      url: first.url || first.file?.url || first.external?.url || '',
      name: first.name || first.file?.name || 'logo',
    };
  }

  if (typeof raw === 'object') {
    return {
      url: raw.url || raw.file?.url || raw.external?.url || '',
      name: raw.name || raw.file?.name || 'logo',
    };
  }

  if (typeof raw === 'string') return { url: raw, name: 'logo' };
  return null;
}

function extFromName(name, url) {
  const source = String(name || url || '').toLowerCase();
  const match = source.match(/\\.([a-z0-9]+)(?:\\?|$)/);
  if (match) return match[1];
  if (source.includes('svg')) return 'svg';
  if (source.includes('png')) return 'png';
  if (source.includes('webp')) return 'webp';
  if (source.includes('jpg') || source.includes('jpeg')) return 'jpg';
  return 'png';
}

const out = [];
for (const item of items) {
  const row = item.json || {};
  const pageId = String(row.id || '').trim();
  if (!pageId) continue;

  const status = pickStatus(row);
  if (status !== 'Ativo') continue;

  const name = stripMarkdown(row.property_name ?? row.Name ?? row.name);
  if (!name) continue;

  const slug = slugify(name);
  if (!slug) continue;

  const logo = pickLogoFile(row);
  const logoUrl = logo?.url ? String(logo.url).trim() : '';
  const logoExt = logoUrl ? extFromName(logo?.name, logoUrl) : 'png';
  const siteUrl = pickString(row.property_site ?? row.Site ?? row.site) || null;

  out.push({
    json: {
      notion_page_id: pageId,
      name,
      slug,
      site_url: siteUrl,
      logo_source_url: logoUrl || null,
      logo_ext: logoExt,
      logo_storage_path: \`\${slug}.\${logoExt}\`,
      skip: !logoUrl,
      skip_reason: logoUrl ? null : 'missing_logo',
    },
  });
}

return out;`,
    },
  },
});

const deactivateAll = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Deactivate all partners',
    credentials: { supabaseApi: { id: 'VtBtjog6BXvbtAno', name: 'Supabase account' } },
    executeOnce: true,
    parameters: {
      method: 'POST',
      url: 'https://xbvspzwjjjtkvecseoog.supabase.co/rest/v1/rpc/deactivate_all_partners',
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'supabaseApi',
      sendHeaders: true,
      headerParameters: {
        parameters: [{ name: 'Content-Type', value: 'application/json' }],
      },
      sendBody: true,
      contentType: 'json',
      specifyBody: 'json',
      jsonBody: '{}',
      options: { timeout: 30000 },
    },
  },
});

const keepWithLogo = node({
  type: 'n8n-nodes-base.filter',
  version: 2.3,
  config: {
    name: 'Keep partners with logo',
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

const downloadLogo = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Download logo',
    parameters: {
      method: 'GET',
      url: expr('{{ $json.logo_source_url }}'),
      options: {
        response: {
          response: {
            responseFormat: 'file',
            outputPropertyName: 'logo_file',
          },
        },
        timeout: 60000,
      },
    },
  },
});

const uploadLogo = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Upload logo',
    credentials: { supabaseApi: { id: 'VtBtjog6BXvbtAno', name: 'Supabase account' } },
    parameters: {
      method: 'POST',
      url: expr(
        "{{ 'https://xbvspzwjjjtkvecseoog.supabase.co/storage/v1/object/partner-logos/' + $json.logo_storage_path }}",
      ),
      authentication: 'predefinedCredentialType',
      nodeCredentialType: 'supabaseApi',
      sendHeaders: true,
      headerParameters: {
        parameters: [
          {
            name: 'Content-Type',
            value: expr('{{ $binary.logo_file.mimeType || "application/octet-stream" }}'),
          },
          { name: 'x-upsert', value: 'true' },
        ],
      },
      sendBody: true,
      contentType: 'binaryData',
      inputDataFieldName: 'logo_file',
      options: { timeout: 60000 },
    },
  },
});

const upsertPartner = node({
  type: 'n8n-nodes-base.httpRequest',
  version: 4.4,
  config: {
    name: 'Upsert partner',
    credentials: { supabaseApi: { id: 'VtBtjog6BXvbtAno', name: 'Supabase account' } },
    retryOnFail: true,
    maxTries: 3,
    waitBetweenTries: 1000,
    parameters: {
      method: 'POST',
      url: 'https://xbvspzwjjjtkvecseoog.supabase.co/rest/v1/rpc/upsert_partner',
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
        "{{ JSON.stringify({ p_notion_page_id: String($json.notion_page_id), p_slug: $json.slug, p_name: $json.name, p_logo_url: 'https://xbvspzwjjjtkvecseoog.supabase.co/storage/v1/object/public/partner-logos/' + $json.logo_storage_path, p_site_url: $json.site_url || null }) }}",
      ),
      options: { timeout: 30000 },
    },
  },
});

const batchPartners = splitInBatches({
  version: 3,
  config: {
    name: 'Process partners',
    parameters: { batchSize: 1 },
  },
});

export default workflow('collector-partners', 'Collector Parceiros')
  .add(manualTrigger)
  .to(kickoff)
  .add(subworkflowTrigger)
  .to(kickoff)
  .add(kickoff)
  .to(fetchPartners)
  .to(mapPartners)
  .to(deactivateAll)
  .to(keepWithLogo)
  .to(batchPartners.onEachBatch(downloadLogo.to(uploadLogo).to(upsertPartner).to(nextBatch(batchPartners))));
