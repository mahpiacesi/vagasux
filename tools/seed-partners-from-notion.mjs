#!/usr/bin/env node
/**
 * One-off seed: Notion active partners → Supabase `partners` table.
 * Uses local assets as logo URLs (GitHub raw) when n8n is unavailable.
 *
 * Usage:
 *   node tools/seed-partners-from-notion.mjs [--dry-run]
 */

const GITHUB_RAW_BASE =
  'https://raw.githubusercontent.com/mahpiacesi/vagasux/cursor/partners-notion-sync-a8a9/web/src/assets/partners/active'

/** Active partners from Notion (2026-07-29) — all have Logo property filled */
const NOTION_PARTNERS = [
  { url: 'https://app.notion.com/2968cbb0d9048019b0a0ddcb9426fe79', name: 'Akilomba', site: 'https://www.even3.com.br/akilomba2025-626384?cp=VAGASUX' },
  { url: 'https://app.notion.com/d05ec6cb23a14c25827b82097c361580', name: 'Alura/FIAP/PM3', site: 'https://www.alura.com.br/' },
  { url: 'https://app.notion.com/2f88cbb0d904806da720dc5ee486bc14', name: 'Banco Carrefour', site: 'https://www.carrefoursolucoes.com.br/' },
  { url: 'https://app.notion.com/2b68cbb0d904808da088c2b025a48a8e', name: 'Beatriz Miranda', site: 'https://beamirandaclasses.framer.website/' },
  { url: 'https://app.notion.com/1d78cbb0d9048033b012c66085038412', name: 'Casa do Código', site: 'https://parceiro.casadocodigo.com.br/' },
  { url: 'https://app.notion.com/31b8cbb0d90480a8a75afc5cba36ac39', name: 'CDX26 Caipira Design Experience', site: 'https://www.instagram.com/cdx.conf/' },
  { url: 'https://app.notion.com/27e8cbb0d90480cdbb45d230686f4f31', name: 'Design & Dendê', site: 'https://www.even3.com.br/festival-designdende-579267/' },
  { url: 'https://app.notion.com/65c237f258804774ae9b936a64070b67', name: 'Design Circuit', site: 'https://www.designcircuit.co/dc/' },
  { url: 'https://app.notion.com/67062fc43ce4428dad00a2a4da5d7d08', name: 'Design Estratégico - Gabriel Pinheiro', site: 'https://punkmetrics.com/courses/design-estrategico/#saiba-mais' },
  { url: 'https://app.notion.com/d107c2a253c24455b3b6c8d02b5c819b', name: 'DesignOps Lab', site: 'https://cursos.designopslab.com/' },
  { url: 'https://app.notion.com/31f8cbb0d90480a19147e8238a34f7da', name: 'DEXCONF', site: 'https://www.sympla.com.br/evento/dexconf-2026/3304679?d=vagasux' },
  { url: 'https://app.notion.com/98ae5ba8add9483ebb62da424def6fdd', name: 'Eros Sester', site: 'https://hotmart.com/pt-br/marketplace/produtos/antropologia-inovacao-e-ux-design-trazendo-a-etnografia-para-mais-perto-do-seu-dia-a-dia/H91956086I' },
  { url: 'https://app.notion.com/2b68cbb0d90480c0a66edd91bd21b256', name: 'Floripa Design Days', site: 'https://www.sympla.com.br/evento/floripa-design-days-2026-fdd26/2888984' },
  { url: 'https://app.notion.com/2928cbb0d904805fb1cac4ff8cd4a1b0', name: 'House of Research', site: null },
  { url: 'https://app.notion.com/2bc60429194a4e1aae9c18adf262c7e1', name: 'Husky', site: 'https://www.husky.io/?ref=vagasux' },
  { url: 'https://app.notion.com/c470aea3b294476bbcd8c4e034e15107', name: 'Mergo', site: 'https://www.mergo.com.br/' },
  { url: 'https://app.notion.com/1667593d6ef44a6da37f192ccd16460e', name: 'Novatec', site: 'https://www.novatec.com.br/' },
  { url: 'https://app.notion.com/2a88cbb0d9048057a774e28ded27e79d', name: 'PCamp', site: 'https://www.productcamp.com.br/' },
  { url: 'https://app.notion.com/33c8cbb0d90480a2a7cdff57ee3cce94', name: 'PM3 Summit', site: 'https://pm3summit.com.br/' },
  { url: 'https://app.notion.com/2898cbb0d904800ca832f797a0301644', name: 'PrograMaria', site: 'https://www.programaria.org/' },
  { url: 'https://app.notion.com/27c8cbb0d90480e6af8ee6ec597397f9', name: 'Save me teacher', site: 'https://savemeteacher.com/metodo-save-me-teacher-comunidade-vagasux' },
  { url: 'https://app.notion.com/be7efd4b102b4194b8aab26556a7d36c', name: 'TheStarter', site: 'https://www.thestarter.io/' },
  { url: 'https://app.notion.com/4f4fdb61f6ba4231b32b7f01bd57af84', name: 'UX Design e Research (UXNOW)', site: 'https://uxnow.com.br/curso-ux-design-e-research/' },
  { url: 'https://app.notion.com/2568cbb0d904801aba93fc8e13c5a940', name: 'UX WRITING 101', site: 'https://teehschwarz.com/uxw101/' },
  { url: 'https://app.notion.com/2f88cbb0d90480fcbe8bc64247d6c027', name: 'UXCO', site: 'https://hotm.io/vagasux-uxco' },
  { url: 'https://app.notion.com/b05232c7a36342e3b62cf99c47ca7125', name: 'UXCONFBR', site: 'https://www.uxconf.com.br/' },
]

const SLUG_OVERRIDES = {
  'alura-fiap-pm3': 'alura-fiap-pm3',
  'cdx26-caipira-design-experience': 'cdx26',
  'design-dende': 'design-dende',
  'design-estrategico-gabriel-pinheiro': 'design-estrategico',
  'dexconf': 'dexconf',
  'floripa-design-days': 'floripa-design-days',
  'programaria': 'programaria',
  'save-me-teacher': 'save-me-teacher',
  'ux-design-e-research-uxnow': 'uxnow',
  'ux-writing-101': 'ux-writing-101',
  'uxconfbr': 'uxconfbr',
}

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function notionPageId(url) {
  const match = url.match(/([0-9a-f]{32})$/i)
  if (!match) return url
  const id = match[1]
  return `${id.slice(0, 8)}-${id.slice(8, 12)}-${id.slice(12, 16)}-${id.slice(16, 20)}-${id.slice(20)}`
}

function sqlEscape(value) {
  return value.replace(/'/g, "''")
}

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const assetsDir = path.join(__dirname, '../web/src/assets/partners/active')
const assetFiles = fs.existsSync(assetsDir)
  ? fs.readdirSync(assetsDir)
  : []

const dryRun = process.argv.includes('--dry-run')
const rows = []

for (const partner of NOTION_PARTNERS) {
  const baseSlug = slugify(partner.name)
  const slug = SLUG_OVERRIDES[baseSlug] ?? baseSlug
  const asset = assetFiles.find((file) => file.startsWith(`${slug}.`))
  if (!asset) {
    console.warn(`WARN: no local asset for ${partner.name} (${slug})`)
    continue
  }
  const ext = asset.split('.').pop()
  rows.push({
    notion_page_id: notionPageId(partner.url),
    slug,
    name: partner.name,
    logo_url: `${GITHUB_RAW_BASE}/${slug}.${ext}`,
    site_url: partner.site,
  })
}

console.log(`Prepared ${rows.length}/${NOTION_PARTNERS.length} partners for seed`)

const sql = [
  'select public.deactivate_all_partners();',
  ...rows.map(
    (row) =>
      `select public.upsert_partner('${sqlEscape(row.notion_page_id)}', '${sqlEscape(row.slug)}', '${sqlEscape(row.name)}', '${sqlEscape(row.logo_url)}', ${row.site_url ? `'${sqlEscape(row.site_url)}'` : 'null'});`,
  ),
  'select count(*)::int as active_count from public.partners where is_active = true;',
].join('\n')

if (dryRun) {
  console.log(sql)
  process.exit(0)
}

console.log(sql)
