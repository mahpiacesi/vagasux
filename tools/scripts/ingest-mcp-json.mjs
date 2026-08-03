#!/usr/bin/env node
/** Extract ![](url) from MCP {url,text} responses and download immediately. */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMAGES = join(__dirname, '../../web/public/guia/newsletters')
const FETCHES = join(__dirname, '_fetches')
const MANIFEST = join(__dirname, 'newsletters-images.manifest.json')

function pid(url) {
  return url.match(/([a-f0-9]{32})/i)[1].toLowerCase()
}
function extract(text) {
  const m = String(text).match(/!\[\]\((https?:\/\/[^)]+)\)/)
  return m ? m[1] : null
}
function extFromUrl(url) {
  try {
    const e = extname(new URL(url).pathname).slice(1).toLowerCase()
    return ['png','jpg','jpeg','gif','webp','svg'].includes(e) ? e.replace('jpeg','jpg') : 'png'
  } catch { return 'png' }
}
function download(url, id) {
  const ext = extFromUrl(url)
  const dest = join(IMAGES, `${id}.${ext}`)
  if (existsSync(dest) && readFileSync(dest).length > 0) return ext
  try {
    execFileSync('curl', ['-fsSL', '-o', dest, url], { stdio: 'pipe', maxBuffer: 20*1024*1024 })
    return existsSync(dest) && readFileSync(dest).length > 0 ? ext : null
  } catch { return null }
}

const input = process.argv[2]
if (!input) {
  console.error('usage: ingest-mcp-json.mjs responses.json  (array of {url,text})')
  process.exit(1)
}

const responses = JSON.parse(readFileSync(input, 'utf8'))
mkdirSync(IMAGES, { recursive: true })
mkdirSync(FETCHES, { recursive: true })
const manifest = existsSync(MANIFEST) ? JSON.parse(readFileSync(MANIFEST, 'utf8')) : {}
let ok = 0
for (const r of responses) {
  const id = pid(r.url)
  const img = extract(r.text)
  if (!img) { console.warn('NO', id); continue }
  const fetch = { url: r.url, text: r.text }
  writeFileSync(join(FETCHES, `${id}.json`), JSON.stringify(fetch) + '\n')
  manifest[id] = img
  if (download(img, id)) { ok++; console.log('OK', id) } else console.warn('FAIL', id)
}
writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')
console.log(`Done ${ok}/${responses.length}, total images: ${readdirSync(IMAGES).length}`)
