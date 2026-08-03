#!/usr/bin/env node
/**
 * Exporta newsletters da view Notion "Conteúdos em Design" (Tipo = Newsletter)
 * para web/src/data/guiaNewsletters.ts
 *
 * Uso:
 *   node tools/scripts/export-guia-newsletters.mjs
 *   node tools/scripts/export-guia-newsletters.mjs [snapshot.json] [images-manifest.json]
 *
 * snapshot.json — { results: [...] } como retornado pelo Notion MCP SQL query
 * images-manifest.json (opcional) — { "pageId32hex": "https://..." } URLs temporárias do notion-fetch
 *   Quando informado, baixa imagens para web/public/guia/newsletters/{pageId}.{ext}
 * Imagens já existentes em public/guia/newsletters/ também são detectadas automaticamente.
 */

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
} from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const OUT = join(ROOT, 'web/src/data/guiaNewsletters.ts')
const IMAGES_DIR = join(ROOT, 'web/public/guia/newsletters')
const DEFAULT_SNAPSHOT = join(__dirname, 'newsletters-notion.snapshot.json')
const DEFAULT_MANIFEST = join(__dirname, 'newsletters-images.manifest.json')

function parseJsonArray(value) {
  if (!value) return []
  if (Array.isArray(value)) return value
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function notionPageId(url) {
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1].toLowerCase() : ''
}

function extFromUrl(url) {
  try {
    const pathname = new URL(url).pathname
    const ext = extname(pathname).slice(1).toLowerCase()
    if (['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(ext)) return ext
  } catch {
    /* ignore */
  }
  return 'png'
}

function extFromContentType(contentType) {
  const map = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg',
    'image/gif': 'gif',
    'image/webp': 'webp',
    'image/svg+xml': 'svg',
  }
  return map[contentType?.split(';')[0]?.trim()] ?? 'png'
}

function downloadImage(url, destPath) {
  try {
    execFileSync(
      'curl',
      ['-fsSL', '-o', destPath, '-w', '%{content_type}', url],
      { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 },
    )
    return true
  } catch {
    return false
  }
}

function downloadImageWithExt(url, pageId) {
  const existing = existingImageExt(pageId)
  if (existing) return existing

  const ext = extFromUrl(url)
  const dest = join(IMAGES_DIR, `${pageId}.${ext}`)
  try {
    const contentType = execFileSync(
      'curl',
      ['-fsSL', '-o', dest, '-w', '%{content_type}', url],
      { encoding: 'utf8', maxBuffer: 10 * 1024 * 1024 },
    ).trim()
    if (!existsSync(dest) || readFileSync(dest).length === 0) {
      return null
    }
    const resolvedExt = extFromContentType(contentType)
    if (resolvedExt !== ext) {
      const renamed = join(IMAGES_DIR, `${pageId}.${resolvedExt}`)
      if (dest !== renamed) {
        writeFileSync(renamed, readFileSync(dest))
        execFileSync('rm', ['-f', dest])
      }
      return resolvedExt
    }
    return ext
  } catch {
    return null
  }
}

function existingImageExt(pageId) {
  if (!existsSync(IMAGES_DIR)) return null
  for (const file of readdirSync(IMAGES_DIR)) {
    const base = file.replace(/\.[^.]+$/, '')
    if (base === pageId) {
      return file.slice(base.length + 1)
    }
  }
  return null
}

function stripMarkdown(title) {
  return String(title).replace(/\*\*/g, '').trim()
}

function mapNewsletter(row, imageExtById) {
  const id = notionPageId(row.url)
  const authors = parseJsonArray(row['Autor(a)'])
  const context = parseJsonArray(row.Contexto)
  const languages = parseJsonArray(row['Língua'])
  const url = row['Onde encontrar?']?.trim() || ''

  const item = {
    id,
    title: stripMarkdown(row.Nome?.trim() || 'Sem título'),
    authors,
    context,
    languages,
    url,
  }

  if (row.createdTime) {
    item.addedAt = String(row.createdTime).trim().replace(' ', 'T')
  }

  const ext = imageExtById.get(id)
  if (ext) {
    item.imageUrl = `/guia/newsletters/${id}.${ext}`
  }

  return item
}

function emitTs(newsletters) {
  const header = `/** Snapshot from Notion database "Conteúdos em Design" (Tipo = Newsletter). */
/** Regenerar: node tools/scripts/export-guia-newsletters.mjs */

export type GuiaNewsletter = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
  /** Capa baixada do Notion (opcional). */
  imageUrl?: string
  /** Data de criação no Notion — ordenação do preview. */
  addedAt?: string
}

/** Newsletter oficial da VagasUX — sempre primeiro na listagem. */
export const GUIA_FEATURED_NEWSLETTER_ID = 'aa4cb080c5774edda987a7ac45d0a2a3'

export const guiaNewsletters: GuiaNewsletter[] = `

  const sorted = [...newsletters].sort((a, b) =>
    a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }),
  )

  const helpers = `
/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaNewsletterContextTags(): string[] {
  const tags = new Set<string>()
  for (const newsletter of guiaNewsletters) {
    for (const tag of newsletter.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaNewslettersByContext(
  newsletters: GuiaNewsletter[],
  contextTag: string | null,
): GuiaNewsletter[] {
  if (!contextTag) return newsletters
  return newsletters.filter((newsletter) => newsletter.context.includes(contextTag))
}

/** Separa a newsletter em destaque das demais, mantendo a ordem original do restante. */
export function splitGuiaFeaturedNewsletter(newsletters: GuiaNewsletter[]): {
  featured: GuiaNewsletter | null
  rest: GuiaNewsletter[]
} {
  const featured =
    newsletters.find((newsletter) => newsletter.id === GUIA_FEATURED_NEWSLETTER_ID) ??
    null
  const rest = newsletters.filter(
    (newsletter) => newsletter.id !== GUIA_FEATURED_NEWSLETTER_ID,
  )
  return { featured, rest }
}
`

  return `${header}${JSON.stringify(sorted, null, 2)}\n${helpers}`
}

const snapshotPath = process.argv[2] || DEFAULT_SNAPSHOT
const manifestPath = process.argv[3] || DEFAULT_MANIFEST

const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
const rows = (raw.results ?? raw).filter((r) => r.Tipo === 'Newsletter')

mkdirSync(IMAGES_DIR, { recursive: true })

const imageExtById = new Map()

/** Detect existing downloaded images */
for (const row of rows) {
  const id = notionPageId(row.url)
  const ext = existingImageExt(id)
  if (ext) imageExtById.set(id, ext)
}

/** Download from optional manifest */
if (existsSync(manifestPath)) {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  for (const [pageId, imageUrl] of Object.entries(manifest)) {
    if (!imageUrl || typeof imageUrl !== 'string') continue
    const ext = downloadImageWithExt(imageUrl, pageId)
    if (ext) imageExtById.set(pageId, ext)
  }
}

const newsletters = rows.map((row) => mapNewsletter(row, imageExtById))
writeFileSync(OUT, emitTs(newsletters), 'utf8')

const withImages = newsletters.filter((n) => n.imageUrl).length
console.log(`Wrote ${newsletters.length} newsletters (${withImages} with images) to ${OUT}`)
