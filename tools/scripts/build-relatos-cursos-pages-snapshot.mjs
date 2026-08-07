#!/usr/bin/env node
/**
 * Gera relatos-cursos-pages.snapshot.json a partir do chat colado pela Mah.
 *
 * Uso:
 *   node tools/scripts/build-relatos-cursos-pages-snapshot.mjs
 *   node tools/scripts/build-relatos-cursos-pages-snapshot.mjs [chat.md]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { parseRelatosChatMarkdown } from './parse-relatos-chat.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DEFAULT_CHAT = join(__dirname, 'relatos-cursos-chat.snapshot.md')
const OUT = join(__dirname, 'relatos-cursos-pages.snapshot.json')

const chatPath = process.argv[2] || DEFAULT_CHAT
const raw = readFileSync(chatPath, 'utf8')
const { results } = parseRelatosChatMarkdown(raw)

writeFileSync(OUT, `${JSON.stringify({ results }, null, 2)}\n`, 'utf8')

const total = results.reduce((sum, entry) => sum + entry.relatos.length, 0)
console.log(`Wrote ${total} relatos for ${results.length} cursos to ${OUT}`)
