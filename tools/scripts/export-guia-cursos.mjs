#!/usr/bin/env node
/**
 * Exporta cursos da database Notion "Cursos"
 * para web/src/data/guiaCursos.ts
 *
 * Uso:
 *   node tools/scripts/export-guia-cursos.mjs
 *   node tools/scripts/export-guia-cursos.mjs [snapshot.json]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const OUT = join(ROOT, 'web/src/data/guiaCursos.ts')
const DEFAULT_SNAPSHOT = join(__dirname, 'cursos-notion.snapshot.json')

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

function normalizeUrl(raw) {
  const value = String(raw ?? '').trim()
  if (!value) return ''
  if (/^https?:\/\//i.test(value)) return value
  return `https://${value}`
}

/** "🐣 Curso / Bootcamp" → "Curso / Bootcamp" */
function normalizeLevel(raw) {
  const value = String(raw ?? '').trim()
  if (!value) return value
  return value
    .replace(/^[\p{Emoji}\p{Emoji_Presentation}\p{Extended_Pictographic}\u200d\s]+/gu, '')
    .trim()
}

function normalizeModality(raw) {
  const value = String(raw ?? '').trim()
  if (value === 'Online/EAD') return 'Online'
  return value
}

function isPartner(raw) {
  return String(raw ?? '').includes('Sim')
}

function hasFeedback(raw) {
  return String(raw ?? '').includes('👍')
}

function mapCurso(row) {
  const id = notionPageId(row.url)
  const url = normalizeUrl(row.Acesso?.trim() || row['Inscrição / Acesso']?.trim() || '')

  const item = {
    id,
    title: row.Escola?.trim() || 'Sem título',
    url,
    cost: parseJsonArray(row.Custo),
    modality: parseJsonArray(row.Modalidade).map(normalizeModality),
    levels: parseJsonArray(row['Nível']).map(normalizeLevel),
    themes: parseJsonArray(row.Tema),
    languages: parseJsonArray(row['Língua']),
    isPartner: isPartner(row['Parceiro?']),
    hasFeedback: hasFeedback(row['Feedback?']),
  }

  if (row.createdTime) {
    item.addedAt = String(row.createdTime).trim().replace(' ', 'T')
  }

  return item
}

function emitTs(cursos) {
  const header = `/** Snapshot from Notion database "Cursos". */
/** Regenerar: node tools/scripts/export-guia-cursos.mjs */

export type GuiaCurso = {
  id: string
  title: string
  url: string
  cost: string[]
  modality: string[]
  levels: string[]
  /** Temas do curso (Notion multi_select). */
  themes: string[]
  languages: string[]
  /** Parceiro oficial VagasUX. */
  isPartner: boolean
  /** Tem relatos da comunidade (Fase 2). */
  hasFeedback: boolean
  /** Data de criação no Notion — ordenação do preview. */
  addedAt?: string
}

export const guiaCursos: GuiaCurso[] = `

  const sorted = [...cursos].sort((a, b) =>
    a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }),
  )

  const helpers = `
/** Tags de Tema únicas, ordenadas (Notion multi_select). */
export function getGuiaCursoThemeTags(): string[] {
  const tags = new Set<string>()
  for (const curso of guiaCursos) {
    for (const tag of curso.themes) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaCursosByTheme(
  cursos: GuiaCurso[],
  themeTag: string | null,
): GuiaCurso[] {
  if (!themeTag) return cursos
  return cursos.filter((curso) => curso.themes.includes(themeTag))
}
`

  return `${header}${JSON.stringify(sorted, null, 2)}\n${helpers}`
}

const snapshotPath = process.argv[2] || DEFAULT_SNAPSHOT
const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
const rows = raw.results ?? raw

const cursos = rows.map(mapCurso)
writeFileSync(OUT, emitTs(cursos), 'utf8')

const partners = cursos.filter((c) => c.isPartner).length
const withFeedback = cursos.filter((c) => c.hasFeedback).length
console.log(
  `Wrote ${cursos.length} cursos (${partners} parceiros, ${withFeedback} com relatos) to ${OUT}`,
)
