#!/usr/bin/env node
/**
 * Exporta eventos da database Notion "Eventos"
 * para web/src/data/guiaEventos.ts
 *
 * Uso:
 *   node tools/scripts/export-guia-eventos.mjs
 *   node tools/scripts/export-guia-eventos.mjs [snapshot.json]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const OUT = join(ROOT, 'web/src/data/guiaEventos.ts')
const DEFAULT_SNAPSHOT = join(__dirname, 'eventos-notion.snapshot.json')
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

function mapEvento(row) {
  const id = notionPageId(row.url)
  const themes = parseJsonArray(row.Tema)
  const languages = parseJsonArray(row['Língua'])
  const url = row['Inscrição / Acesso']?.trim() || ''

  const item = {
    id,
    title: row.Name?.trim() || 'Sem título',
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
const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
const rows = raw.results ?? raw
const eventos = rows.map(mapEvento)

writeFileSync(OUT, emitTs(eventos), 'utf8')
console.log(`Wrote ${eventos.length} eventos to ${OUT}`)
