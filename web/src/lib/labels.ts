const seniorityLabels: Record<string, string> = {
  intern: 'Estágio',
  junior: 'Júnior',
  mid: 'Pleno',
  senior: 'Sênior',
  lead: 'Lead',
  unknown: 'Nível —',
}

const workModelLabels: Record<string, string> = {
  remote: 'Remoto',
  hybrid: 'Híbrido',
  onsite: 'Presencial',
  unknown: 'Modelo —',
}

export function labelSeniority(value: string | null | undefined) {
  if (!value) return null
  return seniorityLabels[value] ?? value
}

export function labelWorkModel(value: string | null | undefined) {
  if (!value) return null
  return workModelLabels[value] ?? value
}
