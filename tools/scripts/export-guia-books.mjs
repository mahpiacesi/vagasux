#!/usr/bin/env node
/**
 * Exporta livros da view "Livros" do Notion para web/src/data/guiaBooks.ts
 *
 * Uso (com dados JSON da view):
 *   node tools/scripts/export-guia-books.mjs /path/to/livros.json
 *
 * O JSON deve ter formato { results: [...] } como retornado pelo Notion MCP view query.
 */

import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '../..')
const OUT = join(ROOT, 'web/src/data/guiaBooks.ts')

function slugify(text) {
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '')
    .slice(0, 60)
}

function parseJsonArray(value) {
  if (!value) return []
  if (Array.isArray(value)) return value
  try {
    const parsed = JSON.parse(value)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}

function notionPageId(url) {
  const match = String(url).match(/([a-f0-9]{32})/i)
  return match ? match[1] : slugify(String(url))
}

/** Normaliza URL do Notion para formato /p/{id} quando vier só com o id. */
function normalizeNotionUrl(url) {
  const raw = String(url)
  if (/notion\.com\/p\//i.test(raw)) return raw
  const id = notionPageId(raw)
  return id ? `https://app.notion.com/p/${id}` : raw
}

function mapBook(row) {
  const id = notionPageId(normalizeNotionUrl(row.url))
  const authors = parseJsonArray(row['Autor(a)'])
  const context = parseJsonArray(row.Contexto)
  const languages = parseJsonArray(row['Língua'])
  const url = row['Onde encontrar?']?.trim() || ''

  const item = {
    id,
    title: row.Nome?.trim() || 'Sem título',
    authors,
    context,
    languages,
    url,
  }

  if (row.createdTime) {
    item.addedAt = String(row.createdTime).trim().replace(' ', 'T')
  }

  return item
}

function emitTs(books) {
  const header = `/** Snapshot from Notion database "Conteúdos em Design" (view Livros). */
/** Regenerar: node tools/scripts/export-guia-books.mjs <livros.json> */
/** Capas manuais (Amazon I/…, links externos): web/src/data/guiaBookCoverOverrides.ts */

export type GuiaBook = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
  /** Capa explícita quando o export do Notion incluir (opcional). Overrides em guiaBookCoverOverrides.ts */
  coverUrl?: string
  /** Data de criação no Notion — ordenação do preview. */
  addedAt?: string
}

export const guiaBooks: GuiaBook[] = `

  const sorted = [...books].sort((a, b) =>
    a.title.localeCompare(b.title, 'pt-BR', { sensitivity: 'base' }),
  )

  const helpers = `
/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaBookContextTags(): string[] {
  const tags = new Set<string>()
  for (const book of guiaBooks) {
    for (const tag of book.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaBooksByContext(
  books: GuiaBook[],
  contextTag: string | null,
): GuiaBook[] {
  if (!contextTag) return books
  return books.filter((book) => book.context.includes(contextTag))
}
`

  return `${header}${JSON.stringify(sorted, null, 2)}\n${helpers}`
}

const inputPath = process.argv[2]
if (!inputPath) {
  console.error('Usage: node export-guia-books.mjs <livros.json>')
  process.exit(1)
}

const raw = JSON.parse(readFileSync(inputPath, 'utf8'))
const rows = raw.results ?? raw
const books = rows.filter((r) => r.Tipo === 'Livro').map(mapBook)

writeFileSync(OUT, emitTs(books), 'utf8')
console.log(`Wrote ${books.length} books to ${OUT}`)
