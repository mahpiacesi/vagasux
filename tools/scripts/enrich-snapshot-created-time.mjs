#!/usr/bin/env node
/**
 * Enriquece snapshots Notion com createdTime a partir de um manifest { pageId32: ISO }.
 * Uso: node tools/scripts/enrich-snapshot-created-time.mjs [manifest.json] [snapshot.json...]
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DEFAULT_MANIFEST = join(__dirname, 'conteudos-created-times.manifest.json')

function notionPageId(url) {
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1].toLowerCase() : ''
}

function normalizeCreatedTime(value) {
  return String(value).trim().replace(' ', 'T')
}

function enrichSnapshot(snapshotPath, manifest) {
  const raw = JSON.parse(readFileSync(snapshotPath, 'utf8'))
  const rows = raw.results ?? raw
  let enriched = 0

  for (const row of rows) {
    const id = notionPageId(row.url ?? row.id ?? '')
    const createdTime = manifest[id]
    if (createdTime) {
      row.createdTime = createdTime.includes(' ')
        ? createdTime
        : createdTime.replace('T', ' ').replace(/Z$/, 'Z')
      enriched++
    }
  }

  writeFileSync(snapshotPath, `${JSON.stringify(raw, null, 2)}\n`, 'utf8')
  console.log(`Enriched ${enriched}/${rows.length} rows in ${snapshotPath}`)
}

const manifestPath = process.argv[2] || DEFAULT_MANIFEST
const snapshotPaths =
  process.argv.slice(3).length > 0
    ? process.argv.slice(3)
    : [
        join(__dirname, 'artigos-notion.snapshot.json'),
        join(__dirname, 'podcasts-notion.snapshot.json'),
        join(__dirname, 'livros-notion.snapshot.json'),
      ]

const manifest = JSON.parse(readFileSync(manifestPath, 'utf8'))
for (const snapshotPath of snapshotPaths) {
  enrichSnapshot(snapshotPath, manifest)
}
