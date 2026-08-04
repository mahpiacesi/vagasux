#!/usr/bin/env node
/** Process MCP notion-fetch responses for eventos: download images to public/guia/eventos/ */
import { writeFileSync, readFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FETCHES_DIR = join(__dirname, '_fetches-eventos')
const MANIFEST = join(__dirname, 'eventos-images.manifest.json')
const IMAGES_DIR = join(__dirname, '../../web/public/guia/eventos')

function extractImageUrl(text) {
  const m = String(text).match(/!\[\]\((https?:\/\/[^)]+)\)/)
  return m ? m[1] : null
}
function pageId(url) {
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1].toLowerCase() : null
}
function extFromUrl(url) {
  try {
    const e = extname(new URL(url).pathname).slice(1).toLowerCase()
    return ['png', 'jpg', 'jpeg', 'gif', 'webp', 'svg'].includes(e)
      ? e.replace('jpeg', 'jpg')
      : 'png'
  } catch {
    return 'png'
  }
}
function download(url, id) {
  const ext = extFromUrl(url)
  const dest = join(IMAGES_DIR, `${id}.${ext}`)
  try {
    execFileSync('curl', ['-fsSL', '-o', dest, url], {
      stdio: 'pipe',
      maxBuffer: 20 * 1024 * 1024,
    })
    if (!existsSync(dest) || readFileSync(dest).length === 0) return null
    return ext
  } catch {
    try {
      execFileSync('rm', ['-f', dest])
    } catch {}
    return null
  }
}

const input = process.argv[2]
if (!input) {
  console.error('usage: process-eventos-mcp-batch.mjs responses.json')
  process.exit(1)
}

const raw = JSON.parse(readFileSync(input, 'utf8'))
const responses = Array.isArray(raw) ? raw : [raw]
mkdirSync(FETCHES_DIR, { recursive: true })
mkdirSync(IMAGES_DIR, { recursive: true })

const manifest = existsSync(MANIFEST)
  ? JSON.parse(readFileSync(MANIFEST, 'utf8'))
  : {}

let ok = 0
for (const resp of responses) {
  const url = resp.url || resp.metadata?.url
  const text = resp.text || ''
  const id = pageId(url)
  const imageUrl = extractImageUrl(text)
  if (!id || !imageUrl) continue

  writeFileSync(join(FETCHES_DIR, `${id}.json`), JSON.stringify(resp), 'utf8')
  manifest[id] = imageUrl
  const ext = download(imageUrl, id)
  if (ext) {
    ok++
    console.log(`OK ${id}.${ext}`)
  } else {
    console.error(`FAIL ${id}`)
  }
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2), 'utf8')
console.log(`Downloaded ${ok}/${responses.length} images`)
