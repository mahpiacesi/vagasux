#!/usr/bin/env node
/** Save notion-fetch MCP response {url,text} to _fetches-cursos-relatos/{id}.json */
import { writeFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '_fetches-cursos-relatos')
mkdirSync(OUT, { recursive: true })

const raw = process.argv[2]
if (!raw) {
  console.error('Usage: node save-notion-fetch-inline.mjs \'<json>\'')
  process.exit(1)
}

const data = JSON.parse(raw)
const url = data.url || ''
const text = data.text || ''
const id = (url.match(/([a-f0-9]{32})/i)?.[1] || '').toLowerCase()
if (!id) {
  console.error('No page id in url', url)
  process.exit(1)
}

const dest = join(OUT, `${id}.json`)
const payload = { url: url.replace(/\?pvs=\d+/, ''), text }
writeFileSync(dest, JSON.stringify(payload, null, 2) + '\n')
console.log(JSON.stringify({ id, dest, bytes: Buffer.byteLength(JSON.stringify(payload), 'utf8') }))
