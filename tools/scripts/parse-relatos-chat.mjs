/**
 * Parser dos relatos colados no chat (formato VagasUX / Notion).
 * Uso: node tools/scripts/parse-relatos-chat.mjs [snapshot.md]
 */

import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'
import { normalizeRelatoText } from './parse-curso-relatos-page.mjs'

const __dirname = dirname(fileURLToPath(import.meta.url))
const DEFAULT_INPUT = join(__dirname, 'relatos-cursos-chat.snapshot.md')

/** Título da seção → curso.id (Notion page id). */
export const SECTION_TO_CURSO_ID = {
  'relatos alura': '1061fe3b9e2e4360ad65793b7aaab059',
  alura: '1061fe3b9e2e4360ad65793b7aaab059',
  'relatos awari': '386b924bc1c34840907e7f06405b5bdd',
  awari: '386b924bc1c34840907e7f06405b5bdd',
  'relatos cubos academy': 'd123aee3b5744a7a8e5ca6d56120de6e',
  'cubos academy': 'd123aee3b5744a7a8e5ca6d56120de6e',
  'design circuit': '06ebb7cfe8a240669d56dec3b307f3ef',
  'design circuit (aj)': '06ebb7cfe8a240669d56dec3b307f3ef',
  'cubos academy': 'd123aee3b5744a7a8e5ca6d56120de6e',
  'design circuit (aj)': '06ebb7cfe8a240669d56dec3b307f3ef',
  'cel.lep - estacao hack': '61346788115141e8ae5361e944bae50d',
  'interact design foundation (idf)': 'e7cd3716c574419ab234f5e5f8809105',
  'metricas de ux para produtos e servicos digitais (guilherme de paula)':
    '6e7b817c756e4553bbd9ed4f0b6cca02',
  'ui expert (lucas assis)': '33a796e3a91648f0a9fce3ab006a462f',
  'ux design e research (uxnow)': '8b816aa8a8fa47be9b5c0385d5bfa0c8',
  'ux designer academy (georgia demas)': 'ff78d7dccd684fee89a5591f4cd04a5b',
  'ux/ui a prova de balas (gabriel silvestri)': '2216d55f6f50461dac728fd39cd240b6',
  'ux4 tecnologia (ux4bi)': '3e2ceb97056e439db85da5707e5b53e1',
  'idi - instituto de desenho instrucional': '46f66e54017645febeeb96594b69187f',
  'ecdd - instituto infnet': '2e9c5a6e978a47f7abce20b403c0e65d',
  'curso de figma (feux)': 'c5e7bed067c94b319edad67e127d5473',
  'design ops lab': '1b08cbb0d90480588e52c9840e4300ba',
  'gama academy': '57fa45d5d9204c79b3b45ce56c3e5b4f',
  'anhembi morumbi': 'c04935a0181f4d33b5109152c4a7370a',
  digitalhouse: '4dac8ebf5dd4491bbd11f437b8d40ca2',
  'how bootcamps': 'a929376b91fe4f769ac73128a5e1e231',
  mergo: 'bfad14b97f3a4cbaacf7a38dd69e0774',
  thestarter: 'b492db04bde5445aa8e06798350656c3',
  'ux change academy': '7cc60ffc16f848ac8ee37515281ecd84',
  'ux design e research (uxnow)': '8b816aa8a8fa47be9b5c0385d5bfa0c8',
  'ux designer academy (georgia demas)': 'ff78d7dccd684fee89a5591f4cd04a5b',
  'uxcopy.school': 'b90f3de9aebb4e3f8073061608a7470a',
  'anhembi morumbi': 'c04935a0181f4d33b5109152c4a7370a',
  'belas artes': 'b6d3b3f5d1c44d5fad46633c76de19dc',
  btx: 'f111d5c8fc0342aba1d86085d5ada5f2',
  'cel.lep - estação hack': '61346788115141e8ae5361e944bae50d',
  coderhouse: 'ee1a43214491453c945bce06b09682a1',
  coursera: '3d06072b1f0e40a0a507e3d80ecb26a1',
  'relatos google': '3d06072b1f0e40a0a507e3d80ecb26a1',
  cursae: '4f1ee0064e98450fbe3cf4f1cdfbcf0a',
  'curso de figma (feux)': 'c5e7bed067c94b319edad67e127d5473',
  ebac: 'bf5f18c67d824d3e860a1e6508964081',
  'ecdd - instituto infnet': '2e9c5a6e978a47f7abce20b403c0e65d',
  fluxe: '7c2515dcec764f52a7e78d6fb1f38305',
  fmu: '4abbb969b37b416c808a40c8c185b377',
  'gama academy': '57fa45d5d9204c79b3b45ce56c3e5b4f',
  growdev: '5a0f0f7073f543459aa2ae1519d92085',
  'idi - instituto de desenho instrucional': '46f66e54017645febeeb96594b69187f',
  igti: '95d7e46f3c774d84a95cee0cebb98d2c',
  impacta: 'ad9e2f9406fb49b2b9c13df4409fea53',
  idf: 'e7cd3716c574419ab234f5e5f8809105',
  ironhack: 'a05184eca9c449999c53f5fd13b9b5ce',
  mentorama: '94ee026e83fa4b21b1de43ae8f88d2e8',
  'métricas de ux para produtos e serviços digitais (guilherme de paula)':
    '6e7b817c756e4553bbd9ed4f0b6cca02',
  panamericana: '68e86335403a42a9b04098086b220628',
  pucmg: '1b08cbb0d9048081b7e1c5be93530ede',
  pucrs: '429eda9af86f4628a067bc20ca4ac1f8',
  tera: '2e2cd553ba8c4d94a86188b32fa2c95e',
  udemy: '12d24cb6e5724f54ade48a62a4987d68',
  'ui expert (lucas assis)': '33a796e3a91648f0a9fce3ab006a462f',
  'ui lab': 'eb2265e960e443409c999f2f04a16bc0',
  'ui pro': 'd05fdc881c7841478c5fe23b3be926f4',
  'uiboost (gilberto prado)': '4b8316658ce044f6a8a009990ab73cd6',
  uniasselvi: 'a26670d2d73e4ae88741dba673aa9792',
  uniritter: '3e63f3b936dd4477bb899c1af3dc94bd',
  unopar: 'feec4c2eb5a044cbb213549c7c3422e4',
  'ux unicórnio': 'be93969e668b4d3ab2fec58d4b8de976',
  'ux unicornio': 'be93969e668b4d3ab2fec58d4b8de976',
  'relatos mba': 'be93969e668b4d3ab2fec58d4b8de976',
  'relatos cursos': 'be93969e668b4d3ab2fec58d4b8de976',
  'ux/ui à prova de balas (gabriel silvestri)': '2216d55f6f50461dac728fd39cd240b6',
  'ux4 tecnologia (ux4bi)': '3e2ceb97056e439db85da5707e5b53e1',
}

const SUBSECTION_SKIP = /^relatos (mba|cursos|google)$/i
const SEPARATOR = /^-{3,}$/
const INCLUIDO_RE =
  /^Inclu[ií]do em\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})(?:\s+por\s+([^|\n]+?))?(?:\s*\|[^\n]*)?\s*$/i
const META_PREFIX_RE =
  /^(?:Relato referente ao curso|Referente ao curso|Relato sobre o curso|Curso|Sobre o curso de)[^\n]*\n?/i

function normalizeSection(title) {
  return String(title ?? '')
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .replace(/^relatos\s+/, 'relatos ')
}

function resolveCursoId(sectionTitle) {
  const norm = normalizeSection(sectionTitle)
  if (SECTION_TO_CURSO_ID[norm]) return SECTION_TO_CURSO_ID[norm]
  const withoutRelatos = norm.replace(/^relatos\s+/, '')
  if (SECTION_TO_CURSO_ID[withoutRelatos]) return SECTION_TO_CURSO_ID[withoutRelatos]
  return null
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

function cleanBody(text) {
  let body = text.trim()
  body = body.replace(META_PREFIX_RE, '')
  body = body.replace(/^Inclu[ií]do em[^\n]*\n?/i, '')
  return body.trim()
}

function isSectionHeader(line) {
  const trimmed = line.trim()
  if (!trimmed || SEPARATOR.test(trimmed)) return false
  if (SUBSECTION_SKIP.test(trimmed)) return true
  if (/^relatos\s+/i.test(trimmed)) return true
  if (INCLUIDO_RE.test(trimmed)) return false
  if (/^(Prós|Contras|Conclusão|Pontos altos|Pontos positivos|Pontos negativos):?\s*$/i.test(trimmed))
    return false
  if (trimmed.length > 80) return false
  if (/^[•\-]\s/.test(trimmed)) return false
  return resolveCursoId(trimmed) !== null
}

function splitSections(raw) {
  const lines = raw.replace(/\r\n/g, '\n').split('\n')
  const sections = []
  let currentTitle = null
  let currentLines = []

  const flush = () => {
    if (currentTitle && currentLines.join('\n').trim()) {
      sections.push({ title: currentTitle, body: currentLines.join('\n').trim() })
    }
    currentLines = []
  }

  for (const line of lines) {
    if (SEPARATOR.test(line.trim())) {
      flush()
      currentTitle = null
      continue
    }
    if (isSectionHeader(line)) {
      flush()
      currentTitle = line.trim()
      continue
    }
    if (currentTitle) currentLines.push(line)
  }
  flush()
  return sections
}

function extractDatedRelatos(sectionBody, cursoId) {
  const relatos = []
  const re =
    /Inclu[ií]do em\s*:?\s*(\d{1,2}\/\d{1,2}\/\d{4})(?:\s+por\s+([^|\n]+?))?(?:\s*\|[^\n]*)?\s*\n([\s\S]*?)(?=\nInclu[ií]do em\s*:?\s*\d|\n*$)/gi

  let match
  while ((match = re.exec(sectionBody)) !== null) {
    const [, date, author, rawText] = match
    const text = cleanBody(rawText)
    if (text.length < 15) continue
    const receivedAt = parseBrDate(date)
    relatos.push({
      id: relatoId(cursoId, text, receivedAt),
      text,
      ...(author?.trim() ? { author: author.trim() } : {}),
      ...(receivedAt ? { receivedAt } : {}),
    })
  }
  return relatos
}

function extractUndatedRelatos(sectionBody, cursoId, datedTexts) {
  const relatos = []
  const withoutDated = sectionBody.replace(
    /Inclu[ií]do em\s*:?\s*\d{1,2}\/\d{1,2}\/\d{4}[\s\S]*?(?=\nInclu[ií]do em\s*:?\s*\d|\n*$)/gi,
    '\n',
  )

  for (const block of withoutDated.split(/\n{2,}/)) {
    const text = cleanBody(block)
    if (text.length < 40) continue
    if (datedTexts.has(normalizeRelatoText(text))) continue
    relatos.push({
      id: relatoId(cursoId, text, undefined),
      text,
    })
  }
  return relatos
}

export function parseRelatosChatMarkdown(raw) {
  const sections = splitSections(raw)
  const byCourse = new Map()

  for (const { title, body } of sections) {
    const cursoId = resolveCursoId(title)
    if (!cursoId) continue

    const dated = extractDatedRelatos(body, cursoId)
    const datedTexts = new Set(dated.map((r) => normalizeRelatoText(r.text)))
    const undated = extractUndatedRelatos(body, cursoId, datedTexts)
    const merged = [...dated, ...undated]

    if (merged.length === 0) continue
    const existing = byCourse.get(cursoId) ?? []
    byCourse.set(cursoId, [...existing, ...merged])
  }

  const results = [...byCourse.entries()]
    .map(([cursoId, relatos]) => {
      const seen = new Set()
      const unique = []
      for (const relato of relatos) {
        const key = normalizeRelatoText(relato.text)
        if (seen.has(key)) continue
        seen.add(key)
        unique.push(relato)
      }
      unique.sort((a, b) => (b.receivedAt ?? '').localeCompare(a.receivedAt ?? ''))
      return { cursoId, relatos: unique }
    })
    .sort((a, b) => a.cursoId.localeCompare(b.cursoId))

  return { results }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const inputPath = process.argv[2] || DEFAULT_INPUT
  const raw = readFileSync(inputPath, 'utf8')
  const parsed = parseRelatosChatMarkdown(raw)
  const total = parsed.results.reduce((sum, e) => sum + e.relatos.length, 0)
  console.log(JSON.stringify(parsed, null, 2))
  console.error(`Parsed ${total} relatos in ${parsed.results.length} cursos from ${inputPath}`)
}
