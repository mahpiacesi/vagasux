#!/usr/bin/env node
/**
 * Gera relatos-cursos-pages.snapshot.json a partir de fetches colados localmente.
 * Uso: node tools/scripts/build-relatos-cursos-pages-snapshot.mjs [fetch-dir]
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { parseRelatosFromNotionPageText } from './parse-curso-relatos-page.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FETCH_DIR = process.argv[2] || join(__dirname, '_fetches-cursos-relatos')
const OUT = join(__dirname, 'relatos-cursos-pages.snapshot.json')

if (!existsSync(FETCH_DIR)) {
  console.error(`Fetch dir not found: ${FETCH_DIR}`)
  process.exit(1)
}

const results = readdirSync(FETCH_DIR)
  .filter((file) => file.endsWith('.json'))
  .map((file) => {
    const cursoId = file.replace(/\.json$/, '')
    const raw = JSON.parse(readFileSync(join(FETCH_DIR, file), 'utf8'))
    const relatos = parseRelatosFromNotionPageText(raw.text ?? '', cursoId)
    return relatos.length > 0 ? { cursoId, relatos } : null
  })
  .filter(Boolean)
  .sort((a, b) => a.cursoId.localeCompare(b.cursoId))

writeFileSync(OUT, `${JSON.stringify({ results }, null, 2)}\n`, 'utf8')

const total = results.reduce((sum, entry) => sum + entry.relatos.length, 0)
console.log(`Wrote ${total} relatos for ${results.length} cursos to ${OUT}`)
