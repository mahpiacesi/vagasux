import type { Job } from '../types/job'

const UF_TO_STATE: Record<string, string> = {
  AC: 'Acre',
  AL: 'Alagoas',
  AP: 'Amapá',
  AM: 'Amazonas',
  BA: 'Bahia',
  CE: 'Ceará',
  DF: 'Distrito Federal',
  ES: 'Espírito Santo',
  GO: 'Goiás',
  MA: 'Maranhão',
  MT: 'Mato Grosso',
  MS: 'Mato Grosso do Sul',
  MG: 'Minas Gerais',
  PA: 'Pará',
  PB: 'Paraíba',
  PR: 'Paraná',
  PE: 'Pernambuco',
  PI: 'Piauí',
  RJ: 'Rio de Janeiro',
  RN: 'Rio Grande do Norte',
  RS: 'Rio Grande do Sul',
  RO: 'Rondônia',
  RR: 'Roraima',
  SC: 'Santa Catarina',
  SP: 'São Paulo',
  SE: 'Sergipe',
  TO: 'Tocantins',
}

/** Longest names first so "Rio Grande do Sul" wins over "Rio Grande do Norte". */
const STATE_NAMES = Object.values(UF_TO_STATE).sort((a, b) => b.length - a.length)

function stripDiacritics(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function normalizeText(value: string) {
  return stripDiacritics(value).replace(/\s+/g, ' ').trim().toLowerCase()
}

function stateFromUf(uf: string) {
  return UF_TO_STATE[uf.toUpperCase()] ?? null
}

/** Parse a job location string into a Brazilian state name, when possible. */
export function parseBrazilianState(location: string | null | undefined): string | null {
  if (!location) return null

  const cleaned = location.replace(/\uFFFD/g, '').replace(/\s+/g, ' ').trim()
  if (!cleaned) return null

  const normalized = normalizeText(cleaned)

  if (/^(remote|remot\w*|home office)$/.test(normalized)) return null
  if (/\b(exterior|internacional|international|worldwide|global)\b/.test(normalized)) {
    return null
  }

  const regionMatch = normalized.match(/^([a-z]{2})\s+e\s+regiao$/)
  if (regionMatch) return stateFromUf(regionMatch[1])

  const ufSuffix = cleaned.match(/,\s*([A-Za-z]{2})\s*$/)
  if (ufSuffix) return stateFromUf(ufSuffix[1])

  for (const stateName of STATE_NAMES) {
    if (normalized.includes(normalizeText(stateName))) return stateName
  }

  return null
}

/** Unique Brazilian state names present in a job list, sorted for display. */
export function collectBrazilianStates(jobs: Job[]): string[] {
  const states = new Set<string>()
  for (const job of jobs) {
    const state = parseBrazilianState(job.location)
    if (state) states.add(state)
  }
  return [...states].sort((a, b) => a.localeCompare(b, 'pt-BR'))
}
