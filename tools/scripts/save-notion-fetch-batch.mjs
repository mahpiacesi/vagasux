#!/usr/bin/env node
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, '_fetches-cursos-relatos')
mkdirSync(OUT, { recursive: true })

const batch = JSON.parse(readFileSync(process.argv[2], 'utf8'))
for (const item of batch) {
  const url = item.url || ''
  const text = item.text || ''
  const id = (url.match(/([a-f0-9]{32})/i)?.[1] || '').toLowerCase()
  if (!id) continue
  writeFileSync(
    join(OUT, `${id}.json`),
    JSON.stringify({ url: `https://app.notion.com/p/${id}`, text }, null, 2) + '\n',
  )
  console.log('saved', id)
}
