#!/usr/bin/env node
/**
 * Scrape relatos das páginas VagasUX (site original) e gera
 * tools/scripts/relatos-cursos-chat.snapshot.md
 */
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const OUT = join(__dirname, 'relatos-cursos-chat.snapshot.md')
const CURSOS_JSON = process.argv[2] || '/tmp/cursos-with-feedback.json'
const BASE = 'https://vagasux.com.br/guia-do-product-designer/cursos/abertos'

/** Slug overrides quando slugify(title) não bate com o site. */
const SLUG_OVERRIDES = {
  'Belas Artes': 'belas-artes',
  'Cel.Lep - Estação Hack': 'cellep-estacao-hack',
  'Curso de Figma (FEUX)': 'curso-de-figma',
  'Design Circuit (AJ)': 'design-circuit',
  'ECDD - Instituto Infnet': 'ecdd-instituto-infnet',
  'IDI - Instituto de Desenho Instrucional': 'idi',
  'Interact Design Foundation (IDF)': 'idf',
  'Métricas de UX para produtos e serviços digitais (Guilherme de Paula)':
    'mtricas-de-ux-para-produtos-e-servios-digitais-guilherme-de-paula',
  'UI Expert (Lucas Assis)': 'ui-expert',
  'uiBoost (Gilberto Prado)': 'uiboost',
  'UX Design e Research (UXNOW)': 'ux-design-e-research-ux-now',
  'UX Designer Academy (Georgia Demas)': 'ux-designer-academy',
  'UX Unicórnio': 'unicornio',
  'UX/UI à prova de balas (Gabriel Silvestri)': 'uxui-a-prova-de-balas',
  'UX4 Tecnologia (UX4BI)': 'ux4',
}

function slugify(title) {
  return title
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .replace(/\(.*?\)/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

function slugFor(title) {
  return SLUG_OVERRIDES[title] ?? slugify(title)
}

function sectionHeader(title, isFirst) {
  if (isFirst) return 'Relatos Alura'
  return title
}

function cleanRelatoText(text) {
  return text
    .replace(/Siga a VagasUX por aí[\s\S]*$/i, '')
    .replace(/\nQuem organiza[\s\S]*$/i, '')
    .trim()
}

function normalizeRelatoBlocks(relatos) {
  const normalized = []
  for (const block of relatos) {
    const parts = block
      .replace(/([^\n])Inclu[ií]do em/gi, '$1\n\nIncluído em')
      .replace(/(Inclu[ií]do em[^\n]*?\d{4})(?=[A-Za-zÀ-ú])/gi, '$1\n')
      .split(/\n\n(?=Inclu[ií]do em\s*:?\s*\d)/i)
      .map((part) => cleanRelatoText(part.trim()))
      .filter((t) => t.length >= 15)
    normalized.push(...parts)
  }
  return normalized
}

function extractRelatos(markdown) {
  const idx = markdown.search(/### Relatos/i)
  if (idx === -1) return []

  let section = markdown.slice(idx)
  const stopMatch = section.slice(1).search(/\n### (?!Relatos)/)
  if (stopMatch !== -1) section = section.slice(0, stopMatch + 1)

  section = section.replace(/([^\n])Inclu[ií]do em/gi, '$1\n\nIncluído em')

  // Prefer blockquote format (> Incluído em ...)
  const blockquoteRelatos = []
  const lines = section.split('\n')
  let current = null

  for (const line of lines) {
    const trimmed = line.trim()
    if (!trimmed) continue
    if (/^#{1,3}\s/.test(trimmed) && !/^>\s/.test(trimmed)) {
      if (/^### Relatos/i.test(trimmed)) continue
      if (/^### Relatos (MBA|Google|cursos)/i.test(trimmed)) {
        if (current) {
          blockquoteRelatos.push(current.trim())
          current = null
        }
        continue
      }
      if (current) {
        blockquoteRelatos.push(current.trim())
        current = null
      }
      break
    }

    if (trimmed.startsWith('>')) {
      if (current) blockquoteRelatos.push(current.trim())
      current = trimmed.slice(1).trim()
      continue
    }

    if (current) current += `\n${trimmed}`
  }

  if (current) blockquoteRelatos.push(current.trim())
  const fromBlockquotes = normalizeRelatoBlocks(blockquoteRelatos)
  if (fromBlockquotes.length > 0) return fromBlockquotes

  // Plain-text format from VagasUX SSR (Incluído em DD/MM/YYYY without >)
  const relatos = []
  const re =
    /(Inclu[ií]do em\s*:?\s*\d{1,2}\/\d{1,2}\/\d{4}[\s\S]*?)(?=\n\nInclu[ií]do em\s*:?\s*\d|\n*$)/gi
  let match
  while ((match = re.exec(section)) !== null) {
    const text = cleanRelatoText(match[1].trim())
    if (text.length >= 15) relatos.push(text)
  }

  // Undated relato paragraphs (e.g. some Design Circuit entries)
  const withoutDated = section.replace(re, '')
  for (const block of withoutDated.split(/\n{2,}/)) {
    const text = cleanRelatoText(
      block
        .replace(/^#{1,3}\s+Relatos[^\n]*\n?/i, '')
        .replace(/^Aqui você encontra[\s\S]*?Publicar relato\s*/i, '')
        .trim(),
    )
    if (text.length < 40) continue
    if (/^Inclu[ií]do em/i.test(text)) continue
    if (/^(Quem organiza|Termos|Siga a VagasUX)/i.test(text)) continue
    relatos.push(text)
  }

  return relatos
}

async function fetchPage(slug) {
  const url = `${BASE}/${slug}`
  const res = await fetch(url, {
    headers: { 'User-Agent': 'vagasux-relatos-scraper/1.0' },
  })
  if (!res.ok) throw new Error(`${res.status} ${url}`)
  return res.text()
}

function htmlToMarkdown(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<h3[^>]*>([\s\S]*?)<\/h3>/gi, '\n### $1\n')
    .replace(/<h4[^>]*>([\s\S]*?)<\/h4>/gi, '\n#### $1\n')
    .replace(/<\/p>/gi, '\n')
    .replace(/<\/h[1-6]>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/\n{3,}/g, '\n\n')
}

async function main() {
  const courses = JSON.parse(readFileSync(CURSOS_JSON, 'utf8'))
  const stopIdx = courses.findIndex((c) => c.title.startsWith('UX4 Tecnologia'))
  const subset = courses.slice(0, stopIdx + 1)

  const sections = []
  const failures = []

  for (let i = 0; i < subset.length; i += 1) {
    const { title } = subset[i]
    const slug = slugFor(title)
    try {
      const html = await fetchPage(slug)
      const md = htmlToMarkdown(html)
      const relatos = extractRelatos(md)
      if (relatos.length === 0) {
        failures.push({ title, slug, reason: 'no relatos' })
        continue
      }
      sections.push({
        header: sectionHeader(title, i === 0),
        body: relatos.join('\n\n'),
      })
      process.stderr.write(`OK ${title} (${relatos.length})\n`)
    } catch (err) {
      failures.push({ title, slug, reason: String(err.message || err) })
      process.stderr.write(`FAIL ${title}: ${err.message}\n`)
    }
  }

  const markdown = sections
    .map(({ header, body }) => `${header}\n\n${body}`)
    .join('\n\n---\n\n')

  writeFileSync(OUT, markdown.endsWith('\n') ? markdown : `${markdown}\n`, 'utf8')

  const bytes = Buffer.byteLength(markdown, 'utf8')
  console.log(
    JSON.stringify(
      {
        bytes,
        sections: sections.length,
        failures,
        out: OUT,
      },
      null,
      2,
    ),
  )
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
