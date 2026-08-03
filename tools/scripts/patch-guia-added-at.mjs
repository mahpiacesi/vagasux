#!/usr/bin/env node
/**
 * Adiciona addedAt aos arquivos guia*.ts a partir de snapshots com createdTime,
 * sem re-executar exports pesados (Medium, Spotify, etc.).
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')

const TARGETS = [
  {
    snapshot: join(__dirname, 'artigos-notion.snapshot.json'),
    out: join(ROOT, 'web/src/data/guiaArtigos.ts'),
    typeName: 'GuiaArtigo',
    arrayName: 'guiaArtigos',
  },
  {
    snapshot: join(__dirname, 'podcasts-notion.snapshot.json'),
    out: join(ROOT, 'web/src/data/guiaPodcasts.ts'),
    typeName: 'GuiaPodcast',
    arrayName: 'guiaPodcasts',
  },
  {
    snapshot: join(__dirname, 'livros-notion.snapshot.json'),
    out: join(ROOT, 'web/src/data/guiaBooks.ts'),
    typeName: 'GuiaBook',
    arrayName: 'guiaBooks',
  },
]

function notionPageId(url) {
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1].toLowerCase() : ''
}

function addedAtFromRow(row) {
  if (!row.createdTime) return null
  return String(row.createdTime).trim().replace(' ', 'T')
}

function ensureTypeHasAddedAt(source, typeName) {
  const typeBlock = new RegExp(
    `(export type ${typeName} = \\{[\\s\\S]*?)(\\n\\})`,
  )
  if (!source.includes('addedAt?: string')) {
    source = source.replace(
      typeBlock,
      `$1\n  /** Data de criação no Notion — ordenação do preview. */\n  addedAt?: string$2`,
    )
  }
  return source
}

function patchArrayItems(source, addedAtById) {
  return source.replace(
    /(\{\s*\n\s*"id": "([a-f0-9]{32})"[\s\S]*?)(\n\s*\})/g,
    (match, prefix, id, suffix) => {
      const addedAt = addedAtById.get(id)
      if (!addedAt) return match
      if (match.includes('"addedAt"')) {
        return match.replace(
          /"addedAt": "[^"]+"/,
          `"addedAt": "${addedAt}"`,
        )
      }
      return `${prefix},\n    "addedAt": "${addedAt}"${suffix}`
    },
  )
}

for (const target of TARGETS) {
  const snapshot = JSON.parse(readFileSync(target.snapshot, 'utf8'))
  const rows = snapshot.results ?? snapshot
  const addedAtById = new Map()

  for (const row of rows) {
    const id = notionPageId(row.url ?? row.id ?? '')
    const addedAt = addedAtFromRow(row)
    if (id && addedAt) addedAtById.set(id, addedAt)
  }

  let source = readFileSync(target.out, 'utf8')
  source = ensureTypeHasAddedAt(source, target.typeName)
  source = patchArrayItems(source, addedAtById)
  writeFileSync(target.out, source, 'utf8')
  console.log(
    `Patched ${addedAtById.size} addedAt entries in ${target.out}`,
  )
}
