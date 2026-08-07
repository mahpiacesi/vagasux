/**
 * Extrai relatos publicados (blockquotes) das páginas de curso no Notion.
 */

/** Normaliza textos salvos com \\n literal em vez de quebras reais. */
export function normalizePageText(raw) {
  const text = String(raw ?? '')
  if (text.includes('\\n') && text.split('\n').length < 8) {
    return text
      .replace(/\\n/g, '\n')
      .replace(/\\t/g, '\t')
      .replace(/\\"/g, '"')
      .replace(/\\\\/g, '\\')
  }
  return text
}

function stripNotionMarkup(raw) {
  return String(raw ?? '')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<empty-block\/>/gi, '')
    .replace(/<[^>]+>/g, '')
    .replace(/\\</g, '<')
    .replace(/\\>/g, '>')
    .replace(/\\\|/g, '|')
    .replace(/\\n/g, '\n')
    .replace(/\u00a0/g, ' ')
    .replace(/\n{3,}/g, '\n\n')
    .trim()
}

function parseBrDate(value) {
  const match = String(value).match(/(\d{1,2})\/(\d{1,2})\/(\d{4})/)
  if (!match) return undefined
  const [, d, m, y] = match
  return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}T00:00:00Z`
}

function relatoId(cursoId, text, receivedAt) {
  const base = `${cursoId}:${receivedAt ?? ''}:${text.slice(0, 96)}`
  let hash = 0
  for (let i = 0; i < base.length; i += 1) {
    hash = (hash * 31 + base.charCodeAt(i)) >>> 0
  }
  return hash.toString(16).padStart(8, '0')
}

function cleanRelatoBody(text) {
  let body = text
  body = body.replace(/^Inclu[ií]do em[^\n]*\n?/i, '')
  body = body.replace(
    /^Referente ao curso:[^\n]*\n?|^Relato referente ao curso[^\n]*\n?|^Relato sobre o curso[^\n]*\n?|^Relato sobre os cursos[^\n]*\n?|^Curso:[^\n]*\n?/i,
    '',
  )
  return body.trim()
}

function parseBlockquote(raw, cursoId) {
  const plain = stripNotionMarkup(raw)
  if (!plain) return null

  const receivedAt = parseBrDate(
    plain.match(/Inclu[ií]do em[^0-9]*(\d{1,2}\/\d{1,2}\/\d{4})/i)?.[1] ?? '',
  )

  const author =
    plain.match(/Inclu[ií]do em[^|\n]*\bpor\s+([A-Za-zÀ-ú][A-Za-zÀ-ú\s.'-]{0,40})/i)?.[1]?.trim() ??
    plain.match(/\bpor\s+([A-Za-zÀ-ú][A-Za-zÀ-ú\s.'-]{0,40})\s*\|/i)?.[1]?.trim()

  const text = cleanRelatoBody(plain)
  if (!text || text.length < 15) return null

  return {
    id: relatoId(cursoId, text, receivedAt),
    text,
    ...(author ? { author } : {}),
    ...(receivedAt ? { receivedAt } : {}),
  }
}

function isStructuralLine(trimmed) {
  if (/^### Relatos/i.test(trimmed)) return false
  return (
    trimmed.startsWith('</column>') ||
    trimmed.startsWith('</columns>') ||
    trimmed.startsWith('</content>') ||
    trimmed.startsWith('### ') ||
    trimmed.startsWith('---') ||
    trimmed.startsWith('<synced_block') ||
    trimmed.startsWith('<callout') ||
    trimmed.startsWith('<column') ||
    trimmed.startsWith('![](')
  )
}

function extractBlockquoteChunks(section) {
  const chunks = []
  let current = null

  for (const line of section.split('\n')) {
    const trimmed = line.trim()
    if (!trimmed || trimmed === '<empty-block/>') continue
    if (isStructuralLine(trimmed)) {
      if (current) {
        chunks.push(current)
        current = null
      }
      continue
    }

    if (trimmed.startsWith('>')) {
      if (current) chunks.push(current)
      current = trimmed.slice(1).trim()
      continue
    }

    if (current) {
      current += `\n${trimmed}`
    }
  }

  if (current) chunks.push(current)
  return chunks
}

export function parseRelatosFromNotionPageText(pageText, cursoId) {
  const contentMatch = normalizePageText(pageText).match(/<content>([\s\S]*?)<\/content>/i)
  if (!contentMatch) return []

  const relatosIdx = contentMatch[1].search(/### Relatos/i)
  if (relatosIdx === -1) return []

  const section = contentMatch[1].slice(relatosIdx)
  return extractBlockquoteChunks(section)
    .map((chunk) => parseBlockquote(chunk, cursoId))
    .filter(Boolean)
}

export function normalizeRelatoText(text) {
  return String(text ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

export function mergeRelatos(existing, incoming) {
  const merged = [...existing]
  const seen = new Set(existing.map((r) => normalizeRelatoText(r.text)))

  for (const relato of incoming) {
    const key = normalizeRelatoText(relato.text)
    if (seen.has(key)) continue
    seen.add(key)
    merged.push(relato)
  }

  return merged.sort((a, b) => (b.receivedAt ?? '').localeCompare(a.receivedAt ?? ''))
}

export function enrichRelatoFromDb(pageRelato, dbRelato) {
  return {
    ...pageRelato,
    ...(dbRelato.author && !pageRelato.author ? { author: dbRelato.author } : {}),
    ...(dbRelato.receivedAt && !pageRelato.receivedAt
      ? { receivedAt: dbRelato.receivedAt }
      : {}),
  }
}
