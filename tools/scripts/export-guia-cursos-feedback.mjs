#!/usr/bin/env node
/**
 * Exporta relatos aprovados da database Notion "Relatos de cursos"
 * para web/src/data/guiaCursoFeedback.ts
 *
 * Uso:
 *   node tools/scripts/export-guia-cursos-feedback.mjs
 *   node tools/scripts/export-guia-cursos-feedback.mjs [relatos-snapshot.json] [cursos.ts]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const OUT = join(ROOT, 'web/src/data/guiaCursoFeedback.ts')
const DEFAULT_SNAPSHOT = join(__dirname, 'relatos-notion.snapshot.json')
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

function mapRelato(row) {
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

function emitTs(byCourse) {
  const header = `/** Snapshot from Notion database "Relatos de cursos" (Categorizado = Sim). */
/** Regenerar: node tools/scripts/export-guia-cursos-feedback.mjs */

export type GuiaCursoRelato = {
  id: string
  text: string
  author?: string
  receivedAt?: string
}

/** Relatos aprovados indexados por curso.id (Notion page id da escola). */
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

const snapshotPath = process.argv[2] || DEFAULT_SNAPSHOT
const cursosPath = process.argv[3] || DEFAULT_CURSOS
const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
const rows = (raw.results ?? raw).filter((row) => row.Categorizado === 'Sim')
const cursos = loadCursos(cursosPath)

const byCourse = {}
const unmatched = []

for (const row of rows) {
  const relato = mapRelato(row)
  if (!relato) continue

  const cursoId = matchCursoId(row['Escola / Curso'], cursos)
  if (!cursoId) {
    unmatched.push(row['Escola / Curso'])
    continue
  }

  if (!byCourse[cursoId]) byCourse[cursoId] = []
  byCourse[cursoId].push(relato)
}

writeFileSync(OUT, emitTs(byCourse), 'utf8')

const courseCount = Object.keys(byCourse).length
const relatoCount = Object.values(byCourse).reduce((sum, list) => sum + list.length, 0)
console.log(
  `Wrote ${relatoCount} relatos for ${courseCount} cursos to ${OUT}`,
)
if (unmatched.length > 0) {
  console.warn('Unmatched relatos:', unmatched.join(', '))
}
