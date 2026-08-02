/**
 * Job discipline labels and helpers for mural filters.
 * Keep taxonomy in sync with tools/n8n/jobDiscipline.ts and jobs.discipline CHECK.
 */

export const JOB_DISCIPLINES = [
  'product_design',
  'ux',
  'ui',
  'ux_research',
  'content_design',
  'design_ops',
  'visual_graphic',
  'motion',
] as const

export type JobDiscipline = (typeof JOB_DISCIPLINES)[number]

export type DisciplineFilter = 'all' | JobDiscipline

export const DEFAULT_DISCIPLINE: JobDiscipline = 'product_design'

export const disciplineLabels: Record<JobDiscipline, string> = {
  product_design: 'Product Design',
  ux: 'UX',
  ui: 'UI',
  ux_research: 'Pesquisa',
  content_design: 'Content Design',
  design_ops: 'Design Ops',
  visual_graphic: 'Gráfico',
  motion: 'Motion',
}

export const disciplineFilterOptions: { id: JobDiscipline; label: string }[] =
  JOB_DISCIPLINES.map((id) => ({
    id,
    label: disciplineLabels[id],
  }))

function normalizeJobText(value: unknown): string {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

function jobText(input: {
  title?: unknown
  area?: unknown
  role?: unknown
  description?: unknown
}): string {
  const description =
    typeof input.description === 'string'
      ? input.description.slice(0, 4000)
      : String(input.description ?? '')

  return normalizeJobText(
    [input.title, input.area, input.role, description].filter(Boolean).join(' '),
  )
}

export function parseDiscipline(value: unknown): JobDiscipline | null {
  const normalized = String(value ?? '').trim()
  if (!normalized || normalized === 'other') return null
  return (JOB_DISCIPLINES as readonly string[]).includes(normalized)
    ? (normalized as JobDiscipline)
    : null
}

export function inferDisciplineFromJob(input: {
  title?: unknown
  area?: unknown
  role?: unknown
  description?: unknown
}): JobDiscipline {
  const text = jobText(input)

  if (
    /\b(user research|ux research|pesquisa com usu|ux researcher|design researcher|research designer|pesquisador)\b/.test(
      text,
    )
  ) {
    return 'ux_research'
  }

  if (
    /\b(content design|ux writing|ux writer|content designer|design de conteudo|redator ux|technical writer)\b/.test(
      text,
    )
  ) {
    return 'content_design'
  }

  if (/\b(design ops|design operations|designops|design program manager)\b/.test(text)) {
    return 'design_ops'
  }

  if (
    /\b(motion designer|motion design|animador ui|ui animation|animacao ui|lottie|micro-?interac)\b/.test(
      text,
    )
  ) {
    return 'motion'
  }

  if (
    /\b(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual|visual\/graphic|brand design|marketing design|design de marketing|design digital|digital design|web design|design web|comunicacao visual|social media design|design para midias|performance design)\b/.test(
      text,
    )
  ) {
    return 'visual_graphic'
  }

  if (
    /\b(ui designer|designer de interface|designer ui|ui design|interface designer)\b/.test(
      text,
    ) &&
    !/\b(ux\/ui|ui\/ux|product design|product designer)\b/.test(text)
  ) {
    return 'ui'
  }

  if (
    /\b(ux designer|designer de experiencia|user experience designer|ux design|service design|design de servico|instructional design|design instrucional|learning design)\b/.test(
      text,
    ) &&
    !/\b(ux\/ui|ui\/ux|product design|product designer)\b/.test(text)
  ) {
    return 'ux'
  }

  if (
    /\b(product design|product designer|ux\/ui|ui\/ux|design de produto|designer de produto|product ux)\b/.test(
      text,
    )
  ) {
    return 'product_design'
  }

  const area = normalizeJobText(input.area)
  if (area) {
    if (/product/.test(area)) return 'product_design'
    if (/research|pesquisa/.test(area)) return 'ux_research'
    if (/content|writing/.test(area)) return 'content_design'
    if (/ops|operations/.test(area)) return 'design_ops'
    if (/motion|animation/.test(area)) return 'motion'
    if (/graphic|visual|brand|marketing|digital|web|comunicacao|performance/.test(area)) {
      return 'visual_graphic'
    }
    if (/interface|^ui|\/ui/.test(area)) return 'ui'
    if (/experience|service|instructional|learning|ux|cx/.test(area)) return 'ux'
  }

  const role = normalizeJobText(input.role)
  if (role) {
    if (/grafico|graphic|visual|brand|marketing|digital|web/.test(role)) {
      return 'visual_graphic'
    }
    if (/product/.test(role)) return 'product_design'
    if (/research|pesquisa/.test(role)) return 'ux_research'
    if (/content|writing/.test(role)) return 'content_design'
    if (/motion/.test(role)) return 'motion'
    if (/interface|^ui/.test(role)) return 'ui'
    if (/ux|experiencia|service/.test(role)) return 'ux'
  }

  if (
    /\b(editor de videos?|video editor|videomaker|audiovisual|edicao de video|producao audiovisual)\b/.test(
      text,
    ) &&
    !/\b(motion designer|motion design|animador ui|ui animation|animacao ui)\b/.test(text)
  ) {
    return 'visual_graphic'
  }

  if (
    /\b(designer|design\b)/.test(text) &&
    !/\b(interior|industrial|moda|fashion|som|sound|acustico|paisag|lighting)\b/.test(text)
  ) {
    return DEFAULT_DISCIPLINE
  }

  return DEFAULT_DISCIPLINE
}

export function resolveDiscipline(input: {
  discipline?: unknown
  title?: unknown
  area?: unknown
  role?: unknown
  description?: unknown
}): JobDiscipline {
  return parseDiscipline(input.discipline) ?? inferDisciplineFromJob(input)
}

export function labelDiscipline(input: {
  discipline?: unknown
  title?: unknown
  area?: unknown
  role?: unknown
  description?: unknown
}): string {
  return disciplineLabels[resolveDiscipline(input)]
}
