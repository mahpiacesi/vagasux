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
}

const NEW_JOB_MAX_AGE_MS = 3 * 24 * 60 * 60 * 1000

export function labelSeniority(value: string | null | undefined) {
  if (!value) return null
  return seniorityLabels[value] ?? value
}

export function labelWorkModel(value: string | null | undefined) {
  if (!value || value === 'unknown') return null
  return workModelLabels[value] ?? value
}

export function labelSource(value: string | null | undefined) {
  if (!value) return null
  return sourceLabels[value] ?? value
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
