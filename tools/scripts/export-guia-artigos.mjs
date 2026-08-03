#!/usr/bin/env node
/**
 * Exporta artigos da view Notion "Conteúdos em Design" (Tipo = Artigo)
 * para web/src/data/guiaArtigos.ts
 *
 * Capas: og:image do Medium (miro.medium.com) quando acessível;
 * fallback para imagem da página Notion em web/public/guia/artigos/.
 *
 * Uso:
 *   node tools/scripts/export-guia-artigos.mjs
 *   node tools/scripts/export-guia-artigos.mjs [snapshot.json] [images-manifest.json]
 */

import {
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
  readdirSync,
  unlinkSync,
} from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const OUT = join(ROOT, 'web/src/data/guiaArtigos.ts')
const IMAGES_DIR = join(ROOT, 'web/public/guia/artigos')
const DEFAULT_SNAPSHOT = join(__dirname, 'artigos-notion.snapshot.json')
const DEFAULT_MANIFEST = join(__dirname, 'artigos-notion-images.manifest.json')
const FEATURED_ARTIGO_ID = '3b18cbb0d90480199280f8ca24f04d38'
const FETCH_DELAY_MS = 2500
const JINA_READER_PREFIX = 'https://r.jina.ai/'

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

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

function stripMarkdown(title) {
  return String(title).replace(/\*\*/g, '').trim()
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

function removeLocalCover(pageId) {
  const ext = existingImageExt(pageId)
  if (!ext) return
  try {
    unlinkSync(join(IMAGES_DIR, `${pageId}.${ext}`))
  } catch {
    /* ignore */
  }
}

function downloadImageWithExt(url, pageId) {
  const existing = existingImageExt(pageId)
  if (existing) return existing

  mkdirSync(IMAGES_DIR, { recursive: true })
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

function fetchPageHtml(url) {
  return execFileSync(
    'curl',
    ['-fsSL', '-A', 'Mozilla/5.0 (compatible; VagasUX-Export/1.0)', url],
    { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 },
  )
}

function extractOgImageFromHtml(html) {
  const match =
    html.match(/property="og:image" content="([^"]+)"/) ??
    html.match(/name="twitter:image:src" content="([^"]+)"/) ??
    html.match(/name="twitter:image" content="([^"]+)"/)
  return match?.[1] ?? null
}

/** Hero image a partir do markdown do jina.ai (medium.com bloqueia fetch direto). */
function extractHeroFromJinaMarkdown(text) {
  const urls = [...text.matchAll(/https:\/\/miro\.medium\.com\/[^\s)"']+/g)].map(
    (match) => match[0],
  )
  const hero = urls.find(
    (url) =>
      /resize:fit:\d+/i.test(url) &&
      !/resize:fill:(?:32|40|48|56|64|76|120|152|240|304):/i.test(url),
  )
  return hero ?? null
}

function fetchViaJinaReader(articleUrl) {
  try {
    const text = execFileSync(
      'curl',
      ['-fsSL', '-A', 'Mozilla/5.0 (compatible; VagasUX-Export/1.0)', `${JINA_READER_PREFIX}${articleUrl}`],
      { encoding: 'utf8', maxBuffer: 8 * 1024 * 1024 },
    )
    return extractOgImageFromHtml(text) ?? extractHeroFromJinaMarkdown(text)
  } catch {
    return null
  }
}

function isMediumHost(url) {
  try {
    const host = new URL(url).hostname.toLowerCase()
    return host === 'medium.com' || host.endsWith('.medium.com')
  } catch {
    return /medium\.com/i.test(url)
  }
}

/** Capa via og:image; medium.com usa jina.ai quando o fetch direto retorna 403. */
function fetchMediumOgImage(articleUrl) {
  try {
    const ogImage = extractOgImageFromHtml(fetchPageHtml(articleUrl))
    if (ogImage) return ogImage
  } catch {
    /* direct fetch failed — try jina for medium.com */
  }

  if (isMediumHost(articleUrl)) {
    return fetchViaJinaReader(articleUrl)
  }

  return null
}

function isVagasuxPublication(url, channels) {
  if (/medium\.com\/vagas-ux\b/i.test(url)) return true
  return channels.some((channel) => /vagasux/i.test(channel))
}

function mapArtigo(row, imageExtById, mediumOgById) {
  const id = notionPageId(row.url)
  const authors = parseJsonArray(row['Autor(a)'])
  const context = parseJsonArray(row.Contexto)
  const languages = parseJsonArray(row['Língua'])
  const channels = parseJsonArray(row['Editora/Canal'])
  const url = row['Onde encontrar?']?.trim() || ''

  const item = {
    id,
    title: stripMarkdown(row.Nome?.trim() || 'Sem título'),
    authors,
    context,
    languages,
    channels,
    url,
    vagasuxPublication: isVagasuxPublication(url, channels),
  }

  const mediumOg = mediumOgById.get(id)
  if (mediumOg) {
    item.imageUrl = mediumOg
    item.mediumCover = true
  } else {
    const ext = imageExtById.get(id)
    if (ext) {
      item.imageUrl = `/guia/artigos/${id}.${ext}`
    }
  }

  return item
}

function emitTs(articles) {
  const header = `/** Snapshot Notion "Conteúdos em Design" (Artigo). */
/** Regenerar: node tools/scripts/export-guia-artigos.mjs */

export type GuiaArtigo = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  /** Editora/Canal do Notion (ex.: Medium, UX Collective). */
  channels: string[]
  url: string
  /** Capa og:image do Medium (miro.medium.com) ou local em /guia/artigos/. */
  imageUrl?: string
  /** Capa veio do og:image do artigo no Medium. */
  mediumCover?: boolean
  /** Publicado no Medium da VagasUX. */
  vagasuxPublication?: boolean
}

/** Artigo em destaque — publicação oficial VagasUX no Medium. */
export const GUIA_FEATURED_ARTIGO_ID = '${FEATURED_ARTIGO_ID}'

export const guiaArtigos: GuiaArtigo[] = `

  const sorted = [...articles].sort((a, b) =>
    a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }),
  )

  const helpers = `
/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaArtigoContextTags(): string[] {
  const tags = new Set<string>()
  for (const artigo of guiaArtigos) {
    for (const tag of artigo.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaArtigosByContext(
  articles: GuiaArtigo[],
  contextTag: string | null,
): GuiaArtigo[] {
  if (!contextTag) return articles
  return articles.filter((artigo) => artigo.context.includes(contextTag))
}

/** Separa o artigo em destaque dos demais, mantendo a ordem original do restante. */
export function splitGuiaFeaturedArtigo(articles: GuiaArtigo[]): {
  featured: GuiaArtigo | null
  rest: GuiaArtigo[]
} {
  const featured =
    articles.find((artigo) => artigo.id === GUIA_FEATURED_ARTIGO_ID) ?? null
  const rest = articles.filter((artigo) => artigo.id !== GUIA_FEATURED_ARTIGO_ID)
  return { featured, rest }
}
`

  return `${header}${JSON.stringify(sorted, null, 2)}\n${helpers}`
}

async function main() {
  const snapshotPath = process.argv[2] || DEFAULT_SNAPSHOT
  const manifestPath = process.argv[3] || DEFAULT_MANIFEST
  const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
  const rows = (raw.results ?? raw).filter((r) => r.Tipo === 'Artigo')

  let notionManifest = {}
  if (existsSync(manifestPath)) {
    notionManifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  }

  const mediumOgById = new Map()
  const imageExtById = new Map()

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i]
    const id = notionPageId(row.url)
    const url = row['Onde encontrar?']?.trim() || ''
    if (!id || !url) continue

    if (i > 0) await sleep(FETCH_DELAY_MS)

    const title = stripMarkdown(row.Nome?.trim() || id)
    process.stderr.write(`[${i + 1}/${rows.length}] ${title.slice(0, 50)}… `)

    const ogImage = fetchMediumOgImage(url)
    if (ogImage) {
      mediumOgById.set(id, ogImage)
      removeLocalCover(id)
      process.stderr.write('Medium og\n')
      continue
    }

    process.stderr.write('local fallback\n')

    const notionImage = notionManifest[id]
    if (notionImage) {
      const ext = downloadImageWithExt(notionImage, id)
      if (ext) imageExtById.set(id, ext)
    }
  }

  const articles = rows.map((row) => mapArtigo(row, imageExtById, mediumOgById))

  writeFileSync(OUT, emitTs(articles), 'utf8')

  const withThumbs = articles.filter((a) => a.imageUrl).length
  const mediumCount = articles.filter((a) => a.mediumCover).length
  const localCount = withThumbs - mediumCount
  console.log(
    `Wrote ${articles.length} artigos (${withThumbs} with covers: ${mediumCount} Medium og, ${localCount} Notion local) to ${OUT}`,
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
