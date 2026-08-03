#!/usr/bin/env node
/**
 * Exporta podcasts da view Notion "Conteúdos em Design" (Tipo = Podcast)
 * para web/src/data/guiaPodcasts.ts
 *
 * Uso:
 *   node tools/scripts/export-guia-podcasts.mjs
 *   node tools/scripts/export-guia-podcasts.mjs [snapshot.json] [images-manifest.json]
 *
 * snapshot.json — { results: [...] } como retornado pelo Notion MCP SQL query
 * images-manifest.json (opcional) — { "pageId32hex": "https://..." } URLs temporárias do notion-fetch
 *   Quando informado, baixa imagens para web/public/guia/podcasts/{pageId}.{ext}
 * Imagens já existentes em public/guia/podcasts/ também são detectadas automaticamente.
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
const OUT = join(ROOT, 'web/src/data/guiaPodcasts.ts')
const IMAGES_DIR = join(ROOT, 'web/public/guia/podcasts')
const DEFAULT_SNAPSHOT = join(__dirname, 'podcasts-notion.snapshot.json')
const DEFAULT_MANIFEST = join(__dirname, 'podcasts-images.manifest.json')

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

function isSpotifyShowUrl(url) {
  return /open\.spotify\.com\/show\//i.test(url)
}

function normalizeSpotifyShowUrl(url) {
  const match = String(url).match(/open\.spotify\.com\/show\/([a-zA-Z0-9]+)/i)
  return match ? `https://open.spotify.com/show/${match[1]}` : null
}

function fetchPageHtml(url) {
  return execFileSync(
    'curl',
    ['-fsSL', '-A', 'Mozilla/5.0 (compatible; VagasUX-Export/1.0)', url],
    { encoding: 'utf8', maxBuffer: 5 * 1024 * 1024 },
  )
}

/** Capa dinâmica via og:image da página do show no Spotify. */
function fetchSpotifyCoverUrl(showUrl) {
  const canonical = normalizeSpotifyShowUrl(showUrl)
  if (!canonical) return null

  try {
    const html = fetchPageHtml(canonical)
    const match = html.match(/property="og:image" content="([^"]+)"/)
    const imageUrl = match?.[1]
    return imageUrl && /scdn\.co\/image\//i.test(imageUrl) ? imageUrl : null
  } catch {
    return null
  }
}

function isAnchorShowUrl(url) {
  return /anchor\.fm\//i.test(url)
}

function normalizeAnchorShowUrl(url) {
  const match = String(url).match(/anchor\.fm\/([a-zA-Z0-9_-]+)/i)
  return match ? `https://anchor.fm/${match[1]}` : null
}

/** Capa dinâmica via og:image da página do podcast no Anchor. */
function fetchAnchorCoverUrl(showUrl) {
  const canonical = normalizeAnchorShowUrl(showUrl)
  if (!canonical) return null

  try {
    const html = fetchPageHtml(canonical)
    const match = html.match(/property="og:image" content="([^"]+)"/)
    const imageUrl = match?.[1]
    return imageUrl && /cloudfront\.net/i.test(imageUrl) ? imageUrl : null
  } catch {
    return null
  }
}

function mapPodcast(row, imageExtById) {
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

  if (isSpotifyShowUrl(url)) {
    const spotifyCover = fetchSpotifyCoverUrl(url)
    if (spotifyCover) item.imageUrl = spotifyCover
  } else if (isAnchorShowUrl(url)) {
    const anchorCover = fetchAnchorCoverUrl(url)
    if (anchorCover) item.imageUrl = anchorCover
  } else {
    const ext = imageExtById.get(id)
    if (ext) item.imageUrl = `/guia/podcasts/${id}.${ext}`
  }

  return item
}

function emitTs(podcasts) {
  const header = `/** Snapshot from Notion database "Conteúdos em Design" (Tipo = Podcast). */
/** Regenerar: node tools/scripts/export-guia-podcasts.mjs */

export type GuiaPodcast = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
  /** Capa: Spotify i.scdn.co, Anchor cloudfront ou Notion local. */
  imageUrl?: string
}

/** Podcast oficial da VagasUX — sempre primeiro na listagem. */
export const GUIA_FEATURED_PODCAST_ID = 'd6e7427f47554528b60632c419832106'

export const guiaPodcasts: GuiaPodcast[] = `

  const sorted = [...podcasts].sort((a, b) =>
    a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }),
  )

  const helpers = `
/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaPodcastContextTags(): string[] {
  const tags = new Set<string>()
  for (const podcast of guiaPodcasts) {
    for (const tag of podcast.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaPodcastsByContext(
  podcasts: GuiaPodcast[],
  contextTag: string | null,
): GuiaPodcast[] {
  if (!contextTag) return podcasts
  return podcasts.filter((podcast) => podcast.context.includes(contextTag))
}

/** Separa o podcast em destaque dos demais, mantendo a ordem original do restante. */
export function splitGuiaFeaturedPodcast(podcasts: GuiaPodcast[]): {
  featured: GuiaPodcast | null
  rest: GuiaPodcast[]
} {
  const featured =
    podcasts.find((podcast) => podcast.id === GUIA_FEATURED_PODCAST_ID) ?? null
  const rest = podcasts.filter((podcast) => podcast.id !== GUIA_FEATURED_PODCAST_ID)
  return { featured, rest }
}
`

  return `${header}${JSON.stringify(sorted, null, 2)}\n${helpers}`
}

const snapshotPath = process.argv[2] || DEFAULT_SNAPSHOT
const manifestPath = process.argv[3] || DEFAULT_MANIFEST

const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
const rows = (raw.results ?? raw).filter((r) => r.Tipo === 'Podcast')

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

const podcasts = rows.map((row) => mapPodcast(row, imageExtById))
writeFileSync(OUT, emitTs(podcasts), 'utf8')

const withImages = podcasts.filter((p) => p.imageUrl).length
console.log(`Wrote ${podcasts.length} podcasts (${withImages} with images) to ${OUT}`)
