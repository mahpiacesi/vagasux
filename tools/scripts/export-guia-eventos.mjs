#!/usr/bin/env node
/**
 * Exporta eventos da database Notion "Eventos"
 * para web/src/data/guiaEventos.ts
 *
 * Uso:
 *   node tools/scripts/export-guia-eventos.mjs
 *   node tools/scripts/export-guia-eventos.mjs [snapshot.json] [images-manifest.json]
 *
 * images-manifest.json (opcional) — { "pageId32hex": "https://..." }
 * Imagens já existentes em public/guia/eventos/ também são detectadas automaticamente.
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
const OUT = join(ROOT, 'web/src/data/guiaEventos.ts')
const IMAGES_DIR = join(ROOT, 'web/public/guia/eventos')
const DEFAULT_SNAPSHOT = join(__dirname, 'eventos-notion.snapshot.json')
const DEFAULT_MANIFEST = join(__dirname, 'eventos-images.manifest.json')
const FEATURED_EVENTO_ID = '1848cbb0d9048002b672cccfe159c293'

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

/** "🎤Conferência" → "Conferência" */
function normalizeEventType(raw) {
  const value = String(raw ?? '').trim()
  if (!value) return 'Evento'
  if (value.includes('Hackathon')) return 'Hackathon'
  if (value.includes('Meetup')) return 'Meetup'
  if (value.includes('Conferência') || value.includes('Conferencia')) return 'Conferência'
  return value.replace(/^[\p{Emoji}\p{Emoji_Presentation}\p{Extended_Pictographic}\u200d\s]+/gu, '').trim() || 'Evento'
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

function mapEvento(row, imageExtById) {
  const id = notionPageId(row.url)
  const themes = parseJsonArray(row.Tema)
  const languages = parseJsonArray(row['Língua'])
  const url = row['Inscrição / Acesso']?.trim() || ''

  const item = {
    id,
    title: stripMarkdown(row.Name?.trim() || 'Sem título'),
    organizer: row.Iniciativa?.trim() || '',
    eventType: normalizeEventType(row.Tipo),
    location: row.Localização?.trim() || '',
    cost: row.Custo?.trim() || '',
    themes,
    languages,
    url,
  }

  if (row.createdTime) {
    item.addedAt = String(row.createdTime).trim().replace(' ', 'T')
  }

  const ext = imageExtById.get(id)
  if (ext) {
    item.imageUrl = `/guia/eventos/${id}.${ext}`
  }

  return item
}

function emitTs(eventos) {
  const header = `/** Snapshot from Notion database "Eventos". */
/** Regenerar: node tools/scripts/export-guia-eventos.mjs */

export type GuiaEventoLocation = 'Online' | 'Presencial' | 'Híbrido'
export type GuiaEventoCost = 'Gratuito' | 'Pago' | 'Freemium'
export type GuiaEventoType = 'Hackathon' | 'Meetup' | 'Conferência' | 'Evento'

export type GuiaEvento = {
  id: string
  title: string
  organizer: string
  eventType: GuiaEventoType
  location: GuiaEventoLocation | string
  cost: GuiaEventoCost | string
  /** Temas do evento (Notion multi_select). */
  themes: string[]
  languages: string[]
  url: string
  /** Capa baixada do Notion (opcional). */
  imageUrl?: string
  /** Data de criação no Notion — ordenação do preview. */
  addedAt?: string
}

/** Meetup oficial da VagasUX — sempre primeiro na listagem. */
export const GUIA_FEATURED_EVENTO_ID = '${FEATURED_EVENTO_ID}'

export const guiaEventos: GuiaEvento[] = `

  const sorted = [...eventos].sort((a, b) =>
    a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }),
  )

  const helpers = `
/** Tags de Tema únicas, ordenadas (Notion multi_select). */
export function getGuiaEventoThemeTags(): string[] {
  const tags = new Set<string>()
  for (const evento of guiaEventos) {
    for (const tag of evento.themes) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaEventosByTheme(
  eventos: GuiaEvento[],
  themeTag: string | null,
): GuiaEvento[] {
  if (!themeTag) return eventos
  return eventos.filter((evento) => evento.themes.includes(themeTag))
}

/** Separa o evento em destaque das demais, mantendo a ordem original do restante. */
export function splitGuiaFeaturedEvento(eventos: GuiaEvento[]): {
  featured: GuiaEvento | null
  rest: GuiaEvento[]
} {
  const featured =
    eventos.find((evento) => evento.id === GUIA_FEATURED_EVENTO_ID) ?? null
  const rest = eventos.filter((evento) => evento.id !== GUIA_FEATURED_EVENTO_ID)
  return { featured, rest }
}
`

  return `${header}${JSON.stringify(sorted, null, 2)}\n${helpers}`
}

const snapshotPath = process.argv[2] || DEFAULT_SNAPSHOT
const manifestPath = process.argv[3] || DEFAULT_MANIFEST

const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
const rows = raw.results ?? raw

mkdirSync(IMAGES_DIR, { recursive: true })

const imageExtById = new Map()

for (const row of rows) {
  const id = notionPageId(row.url)
  const ext = existingImageExt(id)
  if (ext) imageExtById.set(id, ext)
}

if (existsSync(manifestPath)) {
  const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
  for (const [pageId, imageUrl] of Object.entries(manifest)) {
    if (!imageUrl || typeof imageUrl !== 'string') continue
    const ext = downloadImageWithExt(imageUrl, pageId)
    if (ext) imageExtById.set(pageId, ext)
  }
}

const eventos = rows.map((row) => mapEvento(row, imageExtById))
writeFileSync(OUT, emitTs(eventos), 'utf8')

const withImages = eventos.filter((e) => e.imageUrl).length
console.log(`Wrote ${eventos.length} eventos (${withImages} with images) to ${OUT}`)
