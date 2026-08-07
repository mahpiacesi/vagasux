#!/usr/bin/env node
/**
 * Exporta relatos publicados para web/src/data/guiaCursoFeedback.ts
 *
 * Fontes (merge + dedupe):
 * 1. Database Notion "Relatos de cursos" (Categorizado = Sim)
 * 2. Blockquotes nas páginas dos cursos (relatos-cursos-pages.snapshot.json)
 *
 * Uso:
 *   node tools/scripts/export-guia-cursos-feedback.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import {
  mergeRelatos,
  enrichRelatoFromDb,
  normalizeRelatoText,
} from './parse-curso-relatos-page.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const OUT = join(ROOT, 'web/src/data/guiaCursoFeedback.ts')
const DEFAULT_DB_SNAPSHOT = join(__dirname, 'relatos-notion.snapshot.json')
const DEFAULT_PAGES_SNAPSHOT = join(__dirname, 'relatos-cursos-pages.snapshot.json')
const DEFAULT_CURSOS = join(ROOT, 'web/src/data/guiaCursos.ts')

/** Overrides quando o título do relato não bate com Escola do curso. */
const MANUAL_MATCHES = [
  { pattern: /design ops strategy/i, cursoId: '1b08cbb0d90480588e52c9840e4300ba' },
  { pattern: /design systems.*starter/i, cursoId: 'b492db04bde5445aa8e06798350656c3' },
  { pattern: /infnet/i, cursoId: '2e9c5a6e978a47f7abce20b403c0e65d' },
  {
    pattern: /puc - design centrado/i,
    cursoId: '429eda9af86f4628a067bc20ca4ac1f8',
  },
  {
    pattern: /puc minas - pós/i,
    cursoId: '49db936d5b174305a07edbeb8785358d',
  },
  {
    pattern: /udemy - métricas/i,
    cursoId: '6e7b817c756e4553bbd9ed4f0b6cca02',
  },
  { pattern: /ui\s*boost|uiboost/i, cursoId: '4b8316658ce044f6a8a009990ab73cd6' },
]

function notionPageId(url) {
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1].toLowerCase() : ''
}

function normalize(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
}

function loadCursos(cursosPath) {
  const source = readFileSync(cursosPath, 'utf8')
  const match = source.match(/export const guiaCursos: GuiaCurso\[\] = (\[[\s\S]*?\])\n\n\/\*\* Tags/)
  if (!match) throw new Error(`Could not parse guiaCursos from ${cursosPath}`)
  return JSON.parse(match[1])
}

function matchCursoId(relatoTitle, cursos) {
  for (const { pattern, cursoId } of MANUAL_MATCHES) {
    if (pattern.test(relatoTitle)) return cursoId
  }

  const normRelato = normalize(relatoTitle)
  if (!normRelato) return null

  for (const curso of cursos) {
    if (normalize(curso.title) === normRelato) return curso.id
  }

  let bestId = null
  let bestScore = 0

  for (const curso of cursos) {
    const normCurso = normalize(curso.title)
    if (!normCurso) continue

    let score = 0
    if (normRelato.startsWith(normCurso)) {
      score = normCurso.length + 100
    } else if (normRelato.includes(normCurso)) {
      score = normCurso.length
    } else if (normCurso.includes(normRelato)) {
      score = normRelato.length
    }

    if (score > bestScore) {
      bestScore = score
      bestId = curso.id
    }
  }

  return bestScore >= 4 ? bestId : null
}

function mapDbRelato(row) {
  const text = String(row.Relato ?? '').trim()
  if (!text) return null

  const author = String(row['Seu nome'] ?? '').trim()
  const receivedAt = String(row['Recebido em'] ?? '').trim().replace(' ', 'T')

  return {
    id: notionPageId(row.url),
    text,
    ...(author ? { author } : {}),
    ...(receivedAt ? { receivedAt } : {}),
  }
}

function loadPageRelatos(pagesSnapshotPath) {
  if (!existsSync(pagesSnapshotPath)) return []

  const raw = JSON.parse(readFileSync(pagesSnapshotPath, 'utf8'))
  return raw.results ?? raw
}

function emitTs(byCourse) {
  const header = `/** Relatos publicados (form + blockquotes das páginas de curso). */
/** Regenerar: node tools/scripts/export-guia-cursos-feedback.mjs */

export type GuiaCursoRelato = {
  id: string
  text: string
  author?: string
  receivedAt?: string
}

/** Relatos indexados por curso.id (Notion page id da escola). */
export const guiaCursoFeedbackByCourse: Record<string, GuiaCursoRelato[]> = `

  const helpers = `
export function getRelatosForCurso(cursoId: string): GuiaCursoRelato[] {
  return guiaCursoFeedbackByCourse[cursoId] ?? []
}

export function getGuiaCursoFeedbackStats() {
  const courseIds = Object.keys(guiaCursoFeedbackByCourse)
  const totalRelatos = courseIds.reduce(
    (sum, id) => sum + guiaCursoFeedbackByCourse[id].length,
    0,
  )
  return { coursesWithFeedback: courseIds.length, totalRelatos }
}
`

  const sortedEntries = Object.entries(byCourse).sort(([a], [b]) => a.localeCompare(b))
  const sortedByCourse = Object.fromEntries(
    sortedEntries.map(([id, relatos]) => [
      id,
      [...relatos].sort((a, b) =>
        (b.receivedAt ?? '').localeCompare(a.receivedAt ?? ''),
      ),
    ]),
  )

  return `${header}${JSON.stringify(sortedByCourse, null, 2)}\n${helpers}`
}

function mergeDbIntoPages(byCourse, dbByCourse) {
  for (const [cursoId, dbRelatos] of Object.entries(dbByCourse)) {
    const pageRelatos = byCourse[cursoId] ?? []
    const dbByText = new Map(dbRelatos.map((r) => [normalizeRelatoText(r.text), r]))

    const enrichedPages = pageRelatos.map((relato) => {
      const dbMatch = dbByText.get(normalizeRelatoText(relato.text))
      return dbMatch ? enrichRelatoFromDb(relato, dbMatch) : relato
    })

    const merged = mergeRelatos(enrichedPages, dbRelatos)
    if (merged.length > 0) byCourse[cursoId] = merged
  }

  for (const [cursoId, dbRelatos] of Object.entries(dbByCourse)) {
    if (!byCourse[cursoId]) byCourse[cursoId] = dbRelatos
  }
}

const dbSnapshotPath = process.argv[2] || DEFAULT_DB_SNAPSHOT
const pagesSnapshotPath = process.argv[3] || DEFAULT_PAGES_SNAPSHOT
const cursosPath = process.argv[4] || DEFAULT_CURSOS

const dbRaw = JSON.parse(readFileSync(dbSnapshotPath, 'utf8'))
const dbRows = (dbRaw.results ?? dbRaw).filter((row) => row.Categorizado === 'Sim')
const cursos = loadCursos(cursosPath)

const byCourse = {}
const dbByCourse = {}
const unmatched = []

for (const row of dbRows) {
  const relato = mapDbRelato(row)
  if (!relato) continue

  const cursoId = matchCursoId(row['Escola / Curso'], cursos)
  if (!cursoId) {
    unmatched.push(row['Escola / Curso'])
    continue
  }

  if (!dbByCourse[cursoId]) dbByCourse[cursoId] = []
  dbByCourse[cursoId].push(relato)
}

for (const entry of loadPageRelatos(pagesSnapshotPath)) {
  if (entry.relatos?.length > 0) byCourse[entry.cursoId] = entry.relatos
}

mergeDbIntoPages(byCourse, dbByCourse)

writeFileSync(OUT, emitTs(byCourse), 'utf8')

const courseCount = Object.keys(byCourse).length
const relatoCount = Object.values(byCourse).reduce((sum, list) => sum + list.length, 0)
console.log(
  `Wrote ${relatoCount} relatos for ${courseCount} cursos to ${OUT}`,
)
if (unmatched.length > 0) {
  console.warn('Unmatched DB relatos:', unmatched.join(', '))
}
