#!/usr/bin/env node
/**
 * Download partner logos from Notion Logo property → web/src/assets/partners/active/{slug}.{ext}
 *
 * Requires NOTION_API_KEY with access to the Parceiros database.
 * Notion MCP returns file:// URIs without signed download URLs; this script uses the REST API.
 *
 * Usage:
 *   NOTION_API_KEY=secret_... node tools/sync-partner-logos.mjs [--dry-run]
 */

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const NOTION_API_KEY = process.env.NOTION_API_KEY
const DATABASE_ID = '6ef3390c137d4e9c9d9a7863f2ada4a6'
const NOTION_VERSION = '2022-06-28'

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

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const OUT_DIR = path.join(__dirname, '../web/src/assets/partners/active')
const dryRun = process.argv.includes('--dry-run')

function slugify(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function resolveSlug(name) {
  const base = slugify(name)
  return SLUG_OVERRIDES[base] ?? base
}

function extFromName(name, url) {
  const source = String(name || url || '').toLowerCase()
  const match = source.match(/\.([a-z0-9]+)(?:\?|$)/)
  if (match) return match[1]
  if (source.includes('svg')) return 'svg'
  if (source.includes('webp')) return 'webp'
  if (source.includes('jpg') || source.includes('jpeg')) return 'jpg'
  if (source.includes('png')) return 'png'
  return 'png'
}

function pickLogoFile(logoProp) {
  if (!logoProp?.files?.length) return null
  const file = logoProp.files[0]
  if (file.type === 'file' && file.file?.url) {
    return { url: file.file.url, name: file.name || 'logo' }
  }
  if (file.type === 'external' && file.external?.url) {
    return { url: file.external.url, name: file.name || 'logo' }
  }
  return null
}

async function notionFetch(pathname, options = {}) {
  const res = await fetch(`https://api.notion.com/v1${pathname}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${NOTION_API_KEY}`,
      'Notion-Version': NOTION_VERSION,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })
  if (!res.ok) {
    const body = await res.text()
    throw new Error(`Notion API ${res.status}: ${body}`)
  }
  return res.json()
}

async function queryActivePartners() {
  const pages = []
  let cursor

  do {
    const body = {
      filter: {
        and: [
          { property: 'Status', status: { equals: 'Ativo' } },
        ],
      },
      page_size: 100,
    }
    if (cursor) body.start_cursor = cursor

    const data = await notionFetch(`/databases/${DATABASE_ID}/query`, {
      method: 'POST',
      body: JSON.stringify(body),
    })

    pages.push(...data.results)
    cursor = data.has_more ? data.next_cursor : null
  } while (cursor)

  return pages
}

async function downloadFile(url, destPath) {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const buf = Buffer.from(await res.arrayBuffer())
  fs.writeFileSync(destPath, buf)
  return buf.length
}

async function main() {
  if (!NOTION_API_KEY) {
    console.error('ERROR: NOTION_API_KEY is required.')
    console.error('Create an integration at https://www.notion.so/my-integrations and share the Parceiros database with it.')
    process.exit(1)
  }

  if (!dryRun) fs.mkdirSync(OUT_DIR, { recursive: true })

  const pages = await queryActivePartners()
  console.log(`Found ${pages.length} active partners in Notion`)

  const results = { ok: [], failed: [], skipped: [] }

  for (const page of pages) {
    const nameProp = page.properties?.Name
    const name =
      nameProp?.type === 'title'
        ? nameProp.title.map((t) => t.plain_text).join('').trim()
        : ''
    const slug = resolveSlug(name)
    const logo = pickLogoFile(page.properties?.Logo)

    if (!name || !slug) {
      results.skipped.push({ pageId: page.id, reason: 'missing_name' })
      continue
    }
    if (!logo?.url) {
      results.skipped.push({ name, slug, reason: 'missing_logo' })
      continue
    }

    const ext = extFromName(logo.name, logo.url)
    const filename = `${slug}.${ext}`
    const dest = path.join(OUT_DIR, filename)

    if (!dryRun) {
      for (const existing of fs.readdirSync(OUT_DIR)) {
        if (existing.startsWith(`${slug}.`)) {
          fs.unlinkSync(path.join(OUT_DIR, existing))
        }
      }
    }

    if (dryRun) {
      console.log(`[dry-run] ${name} → ${filename} (${logo.name})`)
      results.ok.push({ name, slug, filename, ext, bytes: 0, dryRun: true })
      continue
    }

    try {
      const bytes = await downloadFile(logo.url, dest)
      console.log(`OK  ${filename} (${bytes} bytes) ← ${logo.name}`)
      results.ok.push({ name, slug, filename, ext, bytes })
    } catch (err) {
      console.error(`FAIL ${name} (${slug}): ${err.message}`)
      results.failed.push({ name, slug, error: err.message })
    }
  }

  const byExt = results.ok.reduce((acc, r) => {
    acc[r.ext] = (acc[r.ext] || 0) + 1
    return acc
  }, {})

  console.log('\n--- Summary ---')
  console.log(`Downloaded: ${results.ok.length}/${pages.length}`)
  console.log(`Failed: ${results.failed.length}`)
  console.log(`Skipped: ${results.skipped.length}`)
  if (Object.keys(byExt).length) {
    console.log('Formats:', Object.entries(byExt).map(([e, n]) => `${e}=${n}`).join(', '))
  }
  if (results.failed.length) {
    console.log('Failures:', results.failed.map((f) => f.name).join(', '))
  }

  process.exit(results.failed.length ? 1 : 0)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
