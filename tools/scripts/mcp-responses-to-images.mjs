#!/usr/bin/env node
/** Extract first ![](url) from MCP {url,text}[] and download immediately. */
import { writeFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

const responses = JSON.parse(process.argv[2])
const map = {}
for (const r of responses) {
  const id = r.url.match(/([a-f0-9]{32})/i)[1].toLowerCase()
  const m = String(r.text).match(/!\[\]\((https?:\/\/[^)]+)\)/)
  if (m) map[id] = m[1]
  else console.warn('NO IMAGE', id)
}
const tmp = join(__dirname, '_batch-tmp-urls.json')
writeFileSync(tmp, JSON.stringify(map, null, 2) + '\n')
execFileSync('node', [join(__dirname, 'ingest-url-map.mjs'), tmp], { stdio: 'inherit' })
