#!/usr/bin/env node
/**
 * Consolida páginas { results: [{ url, createdTime }] } em manifest { pageId: ISO }.
 * Uso: node tools/scripts/build-created-times-manifest.mjs page1.json page2.json ...
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'conteudos-created-times.manifest.json')

function notionPageId(url) {
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1].toLowerCase() : ''
}

const manifest = {}
const inputs = process.argv.slice(2)

if (inputs.length === 0) {
  console.error(
    'Usage: node build-created-times-manifest.mjs <notion-page.json> ...',
  )
  process.exit(1)
}

for (const inputPath of inputs) {
  const raw = JSON.parse(readFileSync(inputPath, 'utf8'))
  const rows = raw.results ?? raw
  for (const row of rows) {
    const id = notionPageId(row.url)
    if (id && row.createdTime) {
      manifest[id] = String(row.createdTime).trim().replace(' ', 'T')
    }
  }
}

writeFileSync(OUT, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8')
console.log(`Wrote ${Object.keys(manifest).length} entries to ${OUT}`)
