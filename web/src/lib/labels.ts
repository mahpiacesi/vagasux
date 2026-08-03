import { parseBrazilianState } from './location'
import { cleanInfojobsCompany } from './infojobs'

const seniorityLabels: Record<string, string> = {
  intern: 'Estágio',
  trainee: 'Trainee',
  junior: 'Júnior',
  mid: 'Pleno',
  senior: 'Sênior',
  lead: 'Liderança',
  unknown: 'Nível',
}

const workModelLabels: Record<string, string> = {
  remote: 'Remota',
  hybrid: 'Híbrida',
  onsite: 'Presencial',
  unknown: 'Modelo',
}

const sourceLabels: Record<string, string> = {
  Gupy: 'Gupy',
  Remotar: 'Remotar',
  Greenhouse: 'Greenhouse',
  Sólides: 'Sólides',
  Solides: 'Sólides',
  InfoJobs: 'InfoJobs',
  VagasUX: 'VagasUX',
}

const NEW_JOB_MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000

function stripDiacritics(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function normalizeText(value: string) {
  return stripDiacritics(value).replace(/\s+/g, ' ').trim().toLowerCase()
}

function isRemoteLocation(value: string) {
  const normalized = normalizeText(value)
  return /^(remote|remoto|remota)$/i.test(normalized)
}

export type ResolvedWorkModel = 'remote' | 'hybrid' | 'onsite'

function inferWorkModelFromText(text: string): ResolvedWorkModel | null {
  if (!text) return null

  if (/\b(hibrid\w*|hybrid\w*)\b/.test(text)) return 'hybrid'
  if (/\b\d+\s*x?\s*(no\s+)?escritor/i.test(text)) return 'hybrid'
  if (/\b(um|uma|\d+)\s+dias?(\s+por\s+semana)?\s+presencial/.test(text)) {
    return 'hybrid'
  }
  if (/\batuacao\s+hibrid/.test(text)) return 'hybrid'

  if (/#\s*remot/i.test(text)) return 'remote'
  if (
    /\b(100%\s+)?(trabalho\s+)?(remote|remoto|remota)\b/.test(text) &&
    !/\b(hibrid\w*|hybrid\w*)\b/.test(text)
  ) {
    return 'remote'
  }

  if (/#\s*presencial\b/.test(text)) return 'onsite'
  if (/\bpresencial\b/.test(text) && !/\b(hibrid\w*|hybrid\w*)\b/.test(text)) {
    return 'onsite'
  }

  return null
}

function inferWorkModelFromLocation(location: string): ResolvedWorkModel | null {
  const normalized = normalizeText(location)

  if (/^(remote|remoto|remota)$/.test(normalized)) return 'remote'
  if (/\b(hibrid\w*|hybrid\w*)\b/.test(normalized)) return 'hybrid'
  if (/\b(remote|remoto|remota)\b/.test(normalized)) return 'remote'
  if (/\be regiao\b/.test(normalized)) return 'onsite'
  if (/\b(presencial|onsite)\b/.test(normalized)) return 'onsite'

  return null
}

/** Prefer work_model; infer from description/location only when work_model is null (legacy). */
export function resolveWorkModel(
  workModel: string | null | undefined,
  location: string | null | undefined,
  description?: string | null | undefined,
): ResolvedWorkModel | null {
  if (workModel === 'unknown') return null
  if (workModel) return workModel as ResolvedWorkModel

  if (description) {
    const fromDescription = inferWorkModelFromText(normalizeText(description))
    if (fromDescription) return fromDescription
  }

  if (location) {
    return inferWorkModelFromLocation(location)
  }

  return null
}

export function resolveIsInternational(
  isInternational: boolean | null | undefined,
  location: string | null | undefined,
): boolean | null {
  if (isInternational != null) return isInternational
  if (!location) return null

  const normalized = normalizeText(location)

  if (
    /\b(internacional|international|global|worldwide|eua|usa|europe|latam)\b/.test(
      normalized,
    )
  ) {
    return true
  }

  if (
    /\be regiao\b/.test(normalized) ||
    /\b(remote|remoto|remota)\b/.test(normalized)
  ) {
    return false
  }

  return null
}

export function labelSeniority(value: string | null | undefined) {
  if (!value || value === 'unknown') return null
  return seniorityLabels[value] ?? value
}

export function labelWorkModel(value: string | null | undefined) {
  if (!value || value === 'unknown') return null
  return workModelLabels[value] ?? value
}

export function resolveWorkModelLabel(
  workModel: string | null | undefined,
  location: string | null | undefined,
  description?: string | null | undefined,
) {
  const resolved = resolveWorkModel(workModel, location, description)
  if (!resolved) return null
  return workModelLabels[resolved] ?? null
}

export function labelSource(value: string | null | undefined) {
  if (!value) return null
  return sourceLabels[value] ?? value
}

export function displayCompany(value: string | null | undefined) {
  return cleanInfojobsCompany(value)
}

function isRegionShorthand(location: string) {
  return /^[A-Za-z]{2}\s+e\s+regi[aã]o$/i.test(location.trim())
}

/** Location for the subtitle — never repeat Remote/Remoto when the Remota badge already covers it. */
export function displayLocation(
  location: string | null | undefined,
  workModelLabel: string | null | undefined,
) {
  if (!location) return null
  const cleaned = location.replace(/\uFFFD/g, '').replace(/\s+/g, ' ').trim()
  if (!cleaned) return null

  if (isRegionShorthand(cleaned)) {
    const state = parseBrazilianState(cleaned)
    if (state) return state
  }

  if (isRemoteLocation(cleaned)) {
    return workModelLabel ? null : 'Remota'
  }
  return cleaned
}

export function isNewJob(capturedAt: string | null | undefined) {
  if (!capturedAt) return false
  const captured = new Date(capturedAt).getTime()
  if (Number.isNaN(captured)) return false
  return Date.now() - captured <= NEW_JOB_MAX_AGE_MS
}

export function formatCapturedAt(capturedAt: string | null | undefined) {
  if (!capturedAt) return null
  const date = new Date(capturedAt)
  if (Number.isNaN(date.getTime())) return null
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  })
}

export function formatJobListedAt(
  job: { captured_at: string; published_at: string | null },
  variant: 'captured' | 'mapped' = 'captured',
) {
  const value =
    variant === 'mapped'
      ? job.published_at ?? job.captured_at
      : job.captured_at
  return formatCapturedAt(value)
}
