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

/** Ambiguous generic design roles default to Gráfico (social, print, marketing). */
export const DEFAULT_DISCIPLINE: JobDiscipline = 'visual_graphic'

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

function headlineText(input: {
  title?: unknown
  area?: unknown
  role?: unknown
}): string {
  return normalizeJobText([input.title, input.area, input.role].filter(Boolean).join(' '))
}

/** Motion only when explicit in title, role or primary area — never from description alone. */
const MOTION_HEADLINE =
  /\b(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)\b/

const VISUAL_HEADLINE =
  /\b(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual|visual\/graphic|brand design|marketing design|design de marketing|design digital|digital design|web design|design web|comunicacao visual|social media|redes sociais|design para midias|performance design|design criativo|designer criativo|designer digital|estagiario de design|estagio em design|material grafico|pecas graficas|midia digital|design de comunicacao|design de conteudo criativo)\b/

const VISUAL_DESCRIPTION =
  /\b(redes sociais|social media|instagram|stories|reels|tiktok|facebook ads|google ads|midia paga|performance|crm|e-mail marketing|email marketing|material grafico|pecas graficas|comunicacao visual|identidade visual|branding|impresso|print|folder|banner|flyer|catalogo|packaging|embalagem|campanha publicitaria|marketing digital|materiais de marketing)\b/

const PRODUCT_HEADLINE =
  /\b(product design|product designer|ux\/ui|ui\/ux|design de produto|designer de produto|product ux|design system|design de experiencia digital)\b/

function descriptionText(input: { description?: unknown }): string {
  const description =
    typeof input.description === 'string'
      ? input.description.slice(0, 4000)
      : String(input.description ?? '')

  return normalizeJobText(description)
}

/** Description mentions social, print, branding, etc. */
function hasGraphicDescriptionFocus(input: { description?: unknown }): boolean {
  return VISUAL_DESCRIPTION.test(descriptionText(input))
}

/** Scope is purely product/UI/UX in headline — not hybrid or generic designer. */
function isExclusiveUiUxProductScope(input: {
  title?: unknown
  area?: unknown
  role?: unknown
}): boolean {
  const headline = headlineText(input)
  const area = normalizeJobText(input.area)
  const role = normalizeJobText(input.role)

  if (/product/.test(headline) && /visual|graphic|grafico|brand|marketing|comunicacao|social/.test(headline)) {
    return false
  }
  if (area && /product/.test(area) && /visual|graphic|grafico|brand|marketing|comunicacao/.test(area)) {
    return false
  }

  if (PRODUCT_HEADLINE.test(headline) && !VISUAL_HEADLINE.test(headline)) return true
  if (
    /\b(product designer|design de produto|designer de produto)\b/.test(headline) &&
    !/grafico|graphic|visual|brand|marketing|social/.test(headline)
  ) {
    return true
  }
  if (area && /\bproduct design\b/.test(area) && !/visual|graphic|grafico|brand|marketing|comunicacao/.test(area)) {
    return true
  }
  if (role && /\bproduct designer\b/.test(role) && !/grafico|graphic|visual|brand|marketing/.test(role)) {
    return true
  }

  return false
}

function isMotionJob(input: {
  title?: unknown
  area?: unknown
  role?: unknown
}): boolean {
  const headline = headlineText(input)
  const area = normalizeJobText(input.area)
  const title = normalizeJobText(input.title)

  if (!MOTION_HEADLINE.test(headline)) return false

  // Hybrid visual/motion: motion only when title/role says motion designer
  if (/\bvisual\/motion\b|\bmotion\/visual\b|\bgraphic\/motion\b|\bgr[aá]fico\/motion\b/.test(area)) {
    return /\bmotion designer\b|\bmotion design\b/.test(title)
  }

  if (/visual|graphic|brand|marketing|comunicacao/.test(area) && !/\bmotion design\b|\bmotion designer\b/.test(area)) {
    return /\bmotion designer\b/.test(title) || /\bmotion designer\b/.test(normalizeJobText(input.role))
  }

  return true
}

function isVisualGraphicJob(input: {
  title?: unknown
  area?: unknown
  role?: unknown
  description?: unknown
}): boolean {
  const headline = headlineText(input)
  const text = jobText(input)
  const area = normalizeJobText(input.area)

  if (VISUAL_HEADLINE.test(headline)) return true

  if (area) {
    if (/graphic|visual|grafico|brand|marketing|comunicacao|performance|crm/.test(area)) return true
    if (/product/.test(area) && /visual|graphic|grafico|brand|marketing|comunicacao/.test(area)) return true
  }

  if (hasGraphicDescriptionFocus(input) && !isExclusiveUiUxProductScope(input)) return true

  if (VISUAL_DESCRIPTION.test(text) && !isExclusiveUiUxProductScope(input)) return true

  return false
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
  const headline = headlineText(input)
  const area = normalizeJobText(input.area)
  const role = normalizeJobText(input.role)

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

  // Description with graphic/social/print focus beats product when scope is not exclusive UI/UX
  if (hasGraphicDescriptionFocus(input) && !isExclusiveUiUxProductScope(input)) {
    return 'visual_graphic'
  }

  if (area) {
    if (/research|pesquisa/.test(area)) return 'ux_research'
    if (/content|writing/.test(area)) return 'content_design'
    if (/ops|operations/.test(area)) return 'design_ops'
    if (/product/.test(area)) {
      if (/visual|graphic|grafico|brand|marketing|comunicacao/.test(area)) return 'visual_graphic'
      if (hasGraphicDescriptionFocus(input) && !isExclusiveUiUxProductScope(input)) {
        return 'visual_graphic'
      }
      return 'product_design'
    }
    if (/\bmotion design\b|\bmotion designer\b/.test(area)) {
      return isMotionJob(input) ? 'motion' : 'visual_graphic'
    }
    if (/graphic|visual|brand|marketing|comunicacao|performance|crm/.test(area)) {
      return 'visual_graphic'
    }
    if (/interface|^ui|\/ui/.test(area)) return 'ui'
    if (/experience|service|instructional|learning|ux|cx/.test(area) && !/visual|graphic/.test(area)) {
      return 'ux'
    }
  }

  if (isMotionJob(input)) return 'motion'

  if (PRODUCT_HEADLINE.test(headline)) return 'product_design'

  if (isVisualGraphicJob(input)) return 'visual_graphic'

  if (
    /\b(ui designer|designer de interface|designer ui|ui design|interface designer)\b/.test(headline) &&
    !/\b(ux\/ui|ui\/ux|product design|product designer)\b/.test(headline)
  ) {
    return 'ui'
  }

  if (
    /\b(ux designer|designer de experiencia|user experience designer|ux design|service design|design de servico|instructional design|design instrucional|learning design|ux-ui|ux ui|ui-ux|ui ux)\b/.test(
      headline,
    ) &&
    !/\b(ux\/ui|ui\/ux|product design|product designer)\b/.test(headline)
  ) {
    return 'ux'
  }

  if (role) {
    if (/product/.test(role) && !/visual|graphic|marketing/.test(role)) return 'product_design'
    if (/grafico|graphic|visual|brand|marketing|digital|web|criativo|comunicacao/.test(role)) {
      return 'visual_graphic'
    }
    if (/\bmotion designer\b|\bmotion design\b/.test(role)) return 'motion'
    if (/research|pesquisa/.test(role)) return 'ux_research'
    if (/content|writing/.test(role)) return 'content_design'
    if (/interface|^ui/.test(role)) return 'ui'
    if (/ux|experiencia|service/.test(role)) return 'ux'
  }

  if (
    /\b(editor de videos?|video editor|videomaker|audiovisual|edicao de video|producao audiovisual)\b/.test(
      text,
    ) &&
    !MOTION_HEADLINE.test(headline)
  ) {
    return 'visual_graphic'
  }

  const venueOrRetailFalsePositive =
    (/\b(rio design|shopping .* design|design barra|design leak)\b/.test(text) &&
      !/\b(de design|designer|gerente de design|coordenador de design)\b/.test(text)) ||
    (/\b(gerente de loja|gerente \| |vendedor|vendedora|operador de loja|supervisor de loja)\b/.test(
      text,
    ) &&
      !/\b(de design|designer|gerente de design|coordenador de design)\b/.test(text))

  if (venueOrRetailFalsePositive) return DEFAULT_DISCIPLINE

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
  const inferred = inferDisciplineFromJob(input)
  const parsed = parseDiscipline(input.discipline)
  if (!parsed) return inferred

  // Heuristics override IA when buckets conflitam (motion inflado, product vs graphic)
  if (parsed === 'motion' && inferred !== 'motion') return inferred
  if (
    parsed === 'product_design' &&
    hasGraphicDescriptionFocus(input) &&
    !isExclusiveUiUxProductScope(input)
  ) {
    return 'visual_graphic'
  }
  if (parsed === 'product_design' && inferred === 'visual_graphic') return inferred
  if (
    parsed === 'product_design' &&
    (inferred === 'ux' ||
      inferred === 'ui' ||
      inferred === 'motion' ||
      inferred === 'ux_research' ||
      inferred === 'content_design' ||
      inferred === 'design_ops')
  ) {
    return inferred
  }

  return parsed
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
