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

/** Ambiguous roles default to Product — VagasUX is UX/product focused. */
export const DEFAULT_DISCIPLINE: JobDiscipline = 'product_design'

export const disciplineLabels: Record<JobDiscipline, string> = {
  product_design: 'Product Design',
  ux: 'UX',
  ui: 'UI',
  ux_research: 'Pesquisa',
  content_design: 'Content Design',
  design_ops: 'Ops & Strategy',
  visual_graphic: 'Visual & Graphic',
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
  /\b(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual|visual\/graphic|brand design|marketing design|design de marketing|design digital|digital design|web design|design web|comunicacao visual|social media|redes sociais|design para midias|performance design|design criativo|designer criativo|designer digital|estagiario de design|estagio em design|material grafico|pecas graficas|midia digital|design de comunicacao|design de conteudo criativo|artes graficas|analista em artes)\b/

const UI_HEADLINE =
  /\b(ui designer|designer de interface|designer ui|ui design|interface designer|designer de ui)\b/

const UX_HEADLINE =
  /\b(ux designer|designer de experiencia|user experience designer|ux design|service design|design de servico|designer ux|designer de ux)\b/

const OPS_STRATEGY_HEADLINE =
  /\b(design ops|design operations|designops|design program manager|design strategist|strategic designer|design strategy|estrategista de design|head of design|director of design|design director|chief design officer|design operations manager|design operation specialist|design program lead|design excellence|design governance|design maturity)\b/

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

function isGenericDesignerTitle(title: string): boolean {
  const t = title.replace(/\s+/g, ' ').trim()
  return /^designer(\s*[-–|]\s*(pj|clt|freela|freelance|pleno|pl|junior|jr|senior|sr|júnior|sênior))?\.?\s*$/i.test(t)
}

function isUiJob(input: {
  title?: unknown
  area?: unknown
  role?: unknown
}): boolean {
  const headline = headlineText(input)
  const area = normalizeJobText(input.area)
  const role = normalizeJobText(input.role)

  if (
    /\b(ux\/ui|ui\/ux|ux designer|ux design|designer ux|designer de ux|product design|product designer)\b/.test(
      headline,
    )
  ) {
    return false
  }

  if (UI_HEADLINE.test(headline)) return true

  if (area && /^ui design$|^interface design$|\bui design\b/.test(area) && !/ux/.test(area)) {
    return true
  }

  if (
    role &&
    /\b(ui designer|designer ui|designer de interface|interface designer)\b/.test(role) &&
    !/ux/.test(role)
  ) {
    return true
  }

  return false
}

function isUxJob(input: {
  title?: unknown
  area?: unknown
  role?: unknown
}): boolean {
  const headline = headlineText(input)
  const area = normalizeJobText(input.area)
  const role = normalizeJobText(input.role)
  const title = normalizeJobText(input.title)
  const titleRole = `${title} ${role}`.trim()

  if (
    /\b(ux designer|designer ux|designer de ux|designer de experiencia)\b/.test(titleRole) &&
    !/\b(ui designer|designer ui|designer de interface)\b/.test(titleRole)
  ) {
    return true
  }

  if (/\b(ux\/ui|ui\/ux|product design|product designer)\b/.test(headline)) return false
  if (UI_HEADLINE.test(headline) && !UX_HEADLINE.test(headline)) return false

  if (UX_HEADLINE.test(headline)) return true

  if (area && /ux|experience|service/.test(area) && !/visual|graphic|ui design|^ui\b/.test(area)) {
    return true
  }

  if (role && /\b(ux designer|designer ux|designer de ux|designer de experiencia)\b/.test(role)) {
    return true
  }

  return false
}

function isOpsStrategyJob(input: {
  title?: unknown
  area?: unknown
  role?: unknown
  description?: unknown
}): boolean {
  const text = jobText(input)
  const headline = headlineText(input)
  const area = normalizeJobText(input.area)
  const role = normalizeJobText(input.role)

  if (OPS_STRATEGY_HEADLINE.test(text) || OPS_STRATEGY_HEADLINE.test(headline)) return true

  if (area && /ops|operations|strategy|strategic|program/.test(area) && /design/.test(area)) {
    return true
  }

  if (role && /design ops|designops|design program|design strategist|head of design|design director/.test(role)) {
    return true
  }

  return false
}

function isHybridProductGraphicArea(area: string): boolean {
  return /product/.test(area) && /visual|graphic|grafico|brand|marketing|comunicacao/.test(area)
}

/** Clearly graphic — not hybrid/ambiguous product+visual (product wins those for VagasUX). */
function isClearlyGraphicJob(input: {
  title?: unknown
  area?: unknown
  role?: unknown
  description?: unknown
}): boolean {
  const headline = headlineText(input)
  const area = normalizeJobText(input.area)
  const role = normalizeJobText(input.role)
  const title = normalizeJobText(input.title)

  if (VISUAL_HEADLINE.test(headline)) return true
  if (role && /grafico|graphic|visual|brand|marketing|comunicacao|criativo/.test(role)) return true

  if (area) {
    if (isHybridProductGraphicArea(area)) return false
    if (/graphic|visual|grafico|brand|marketing|comunicacao|performance|crm/.test(area)) return true
  }

  // Description-driven graphic: social/print focus when headline is not exclusive product/UI/UX
  if (hasGraphicDescriptionFocus(input) && !isExclusiveUiUxProductScope(input)) {
    if (area && isHybridProductGraphicArea(area)) return false
    if (/grafico|graphic|visual|brand|marketing|social/.test(title)) return true
    if (/\bdesigner\b/.test(title) && !/product|ux\/ui|ui\/ux|product designer/.test(title)) {
      return true
    }
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
  return isClearlyGraphicJob(input)
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

  if (isOpsStrategyJob(input)) return 'design_ops'

  if (area) {
    if (/research|pesquisa/.test(area)) return 'ux_research'
    if (/content|writing/.test(area)) return 'content_design'
    if (/ops|operations|strategy|strategic|program/.test(area) && /design/.test(area)) {
      return 'design_ops'
    }
    if (/product/.test(area)) return 'product_design'
    if (/\bmotion design\b|\bmotion designer\b/.test(area)) {
      return isMotionJob(input) ? 'motion' : 'visual_graphic'
    }
    if (/graphic|visual|grafico|brand|marketing|comunicacao|performance|crm|artes graficas/.test(area)) {
      return 'visual_graphic'
    }
    if (/ux\/ui|ui\/ux/.test(area)) {
      const titleRole = `${normalizeJobText(input.title)} ${normalizeJobText(input.role)}`.trim()
      if (
        /\b(ui designer|designer ui|designer de interface|interface designer)\b/.test(titleRole) &&
        !/\b(ux designer|designer ux|designer de ux)\b/.test(titleRole)
      ) {
        return 'ui'
      }
      if (
        /\b(ux designer|designer ux|designer de ux|designer de experiencia)\b/.test(titleRole) &&
        !/\b(ui designer|designer ui|designer de interface)\b/.test(titleRole)
      ) {
        return 'ux'
      }
      if (isUiJob(input)) return 'ui'
      if (isUxJob(input)) return 'ux'
      return 'product_design'
    }
    if (/^ui design$|^interface design$|\bui design\b/.test(area) && !/ux/.test(area)) return 'ui'
    if (/experience|service|instructional|learning|\bux\b|cx/.test(area) && !/visual|graphic|ui design/.test(area)) {
      return 'ux'
    }
  }

  if (isMotionJob(input)) return 'motion'

  if (PRODUCT_HEADLINE.test(headline)) return 'product_design'

  if (isVisualGraphicJob(input)) return 'visual_graphic'

  if (isUiJob(input)) return 'ui'

  if (isUxJob(input)) return 'ux'

  if (role) {
    if (/product/.test(role) && !/visual|graphic|marketing/.test(role)) return 'product_design'
    if (/grafico|graphic|visual|brand|marketing|digital|web|criativo|comunicacao|artes graficas/.test(role)) {
      return 'visual_graphic'
    }
    if (/\bmotion designer\b|\bmotion design\b/.test(role)) return 'motion'
    if (/research|pesquisa/.test(role)) return 'ux_research'
    if (/content|writing/.test(role)) return 'content_design'
    if (/design ops|designops|design program|design strategist|head of design|design director/.test(role)) {
      return 'design_ops'
    }
    if (/\b(ui designer|designer ui|designer de interface|interface designer)\b/.test(role) && !/ux/.test(role)) {
      return 'ui'
    }
    if (/\b(ux designer|designer ux|designer de ux|designer de experiencia)\b/.test(role)) return 'ux'
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

  const titleNorm = normalizeJobText(input.title).replace(/\s+/g, ' ').trim()
  if (isGenericDesignerTitle(titleNorm) && !isExclusiveUiUxProductScope(input)) {
    return DEFAULT_DISCIPLINE
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
  const inferred = inferDisciplineFromJob(input)
  const parsed = parseDiscipline(input.discipline)
  if (!parsed) return inferred

  // Heuristics override IA (motion inflado; product > graphic em casos híbridos/ambíguos)
  if (parsed === 'motion' && inferred !== 'motion') return inferred
  if (parsed === 'ui' && inferred !== 'ui') return inferred
  if (parsed === 'visual_graphic' && inferred === 'product_design') return 'product_design'
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
