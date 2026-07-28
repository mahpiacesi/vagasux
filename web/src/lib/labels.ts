const seniorityLabels: Record<string, string> = {
  intern: 'Estágio',
  junior: 'Júnior',
  mid: 'Pleno',
  senior: 'Sênior',
  lead: 'Lead',
  unknown: 'Nível —',
}

const workModelLabels: Record<string, string> = {
  remote: 'Remota',
  hybrid: 'Híbrida',
  onsite: 'Presencial',
  unknown: 'Modelo —',
}

const sourceLabels: Record<string, string> = {
  Gupy: 'Gupy',
  Remotar: 'Remotar',
  Greenhouse: 'Greenhouse',
  Sólides: 'Sólides',
  Solides: 'Sólides',
  InfoJobs: 'InfoJobs',
  VagasUX: 'Curada',
}

const NEW_JOB_MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000

function stripDiacritics(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

function normalizeLocation(value: string) {
  return stripDiacritics(value).trim().toLowerCase()
}

function isRemoteLocation(value: string) {
  const normalized = normalizeLocation(value)
  return /^(remote|remoto|remota)$/i.test(normalized)
}

export type ResolvedWorkModel = 'remote' | 'hybrid' | 'onsite'

/** Prefer work_model; infer from location text when collectors leave it empty. */
export function resolveWorkModel(
  workModel: string | null | undefined,
  location: string | null | undefined,
): ResolvedWorkModel | null {
  if (workModel && workModel !== 'unknown') {
    return workModel as ResolvedWorkModel
  }

  if (!location) return null

  const normalized = normalizeLocation(location)

  if (/^(remote|remoto|remota)$/.test(normalized)) return 'remote'
  if (/\b(hibrid|hybrid)\w*/.test(normalized)) return 'hybrid'
  if (/\b(remote|remoto|remota)\b/.test(normalized)) return 'remote'
  if (/\be regiao\b/.test(normalized)) return 'onsite'
  if (/\b(presencial|onsite)\b/.test(normalized)) return 'onsite'

  return null
}

export function resolveIsInternational(
  isInternational: boolean | null | undefined,
  location: string | null | undefined,
): boolean | null {
  if (isInternational != null) return isInternational
  if (!location) return null

  const normalized = normalizeLocation(location)

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

/** Prefer work_model; if missing, infer Remota from location "Remote". */
export function resolveWorkModelLabel(
  workModel: string | null | undefined,
  location: string | null | undefined,
) {
  const resolved = resolveWorkModel(workModel, location)
  if (!resolved) return null
  return workModelLabels[resolved] ?? null
}

export function labelSource(value: string | null | undefined) {
  if (!value) return null
  return sourceLabels[value] ?? value
}

/** Location for the subtitle — never repeat Remote/Remoto when the Remota badge already covers it. */
export function displayLocation(
  location: string | null | undefined,
  workModelLabel: string | null | undefined,
) {
  if (!location) return null
  const cleaned = location.replace(/\uFFFD/g, '').replace(/\s+/g, ' ').trim()
  if (!cleaned) return null
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
