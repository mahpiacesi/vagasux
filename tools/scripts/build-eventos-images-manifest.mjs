#!/usr/bin/env node
/**
 * Extrai URLs de imagem de arquivos notion-fetch salvos em _fetches-eventos/
 * e grava eventos-images.manifest.json
 */
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const FETCH_DIR = join(__dirname, '_fetches-eventos')
const OUT = join(__dirname, 'eventos-images.manifest.json')

function extractImageUrl(text) {
  const match = String(text).match(/!\[\]\((https?:\/\/[^)]+)\)/)
  return match ? match[1] : null
}

function pageIdFromFetch(data) {
  const url = data.url || data.metadata?.url || ''
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1].toLowerCase() : null
}

const manifest = {}

if (existsSync(FETCH_DIR)) {
  for (const file of readdirSync(FETCH_DIR)) {
    if (!file.endsWith('.json')) continue
    const raw = JSON.parse(readFileSync(join(FETCH_DIR, file), 'utf8'))
    const text = raw.text || raw.content || JSON.stringify(raw)
    const id = pageIdFromFetch(raw) || file.replace(/\.json$/, '')
    const url = extractImageUrl(text)
    if (id && url) manifest[id] = url
  }
}

writeFileSync(OUT, JSON.stringify(manifest, null, 2), 'utf8')
console.log(`Wrote ${Object.keys(manifest).length} image URLs to ${OUT}`)
