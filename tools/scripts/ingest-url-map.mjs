#!/usr/bin/env node
/** Download newsletter images from { pageId: imageUrl } JSON map. */
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'
import { dirname, join, extname } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const IMAGES_DIR = join(__dirname, '../../web/public/guia/newsletters')
const FETCHES_DIR = join(__dirname, '_fetches')
const MANIFEST = join(__dirname, 'newsletters-images.manifest.json')

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
  if (existsSync(dest) && readFileSync(dest).length > 0) return ext
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

const mapPath = process.argv[2]
if (!mapPath) {
  console.error('usage: ingest-url-map.mjs urls.json')
  process.exit(1)
}

const entries = JSON.parse(readFileSync(mapPath, 'utf8'))
mkdirSync(IMAGES_DIR, { recursive: true })
mkdirSync(FETCHES_DIR, { recursive: true })
const manifest = existsSync(MANIFEST)
  ? JSON.parse(readFileSync(MANIFEST, 'utf8'))
  : {}

let ok = 0
for (const [id, url] of Object.entries(entries)) {
  const fetch = {
    url: `https://app.notion.com/p/${id}`,
    text: `![](${url})`,
  }
  writeFileSync(join(FETCHES_DIR, `${id}.json`), JSON.stringify(fetch) + '\n')
  manifest[id] = url
  if (download(url, id)) {
    ok++
    console.log('OK', id)
  } else {
    console.warn('FAIL', id)
  }
}

writeFileSync(MANIFEST, JSON.stringify(manifest, null, 2) + '\n')
const onDisk = readdirSync(IMAGES_DIR).filter((f) => !f.startsWith('.')).length
console.log(`Downloaded ${ok}/${Object.keys(entries).length}. Total on disk: ${onDisk}`)
