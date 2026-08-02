/**
 * Job discipline taxonomy for mural filters.
 * Keep in sync with web/src/lib/discipline.ts and supabase CHECK on jobs.discipline.
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

export const DEFAULT_DISCIPLINE: JobDiscipline = 'product_design'

export function normalizeJobText(value: unknown): string {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
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
  const description =
    typeof input.description === 'string'
      ? input.description.slice(0, 4000)
      : String(input.description ?? '')

  const text = normalizeJobText(
    [input.title, input.area, input.role, description].filter(Boolean).join(' '),
  )

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

/** Inline JS for n8n Apply enrichment (must stay in sync with inferDisciplineFromJob). */
export const RESOLVE_DISCIPLINE_JS = `
const DEFAULT_DISCIPLINE = 'product_design';

function normalizeJobText(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

function parseDiscipline(value) {
  const normalized = String(value ?? '').trim();
  if (!normalized || normalized === 'other') return null;
  return ["product_design","ux","ui","ux_research","content_design","design_ops","visual_graphic","motion"].includes(normalized) ? normalized : null;
}

function inferDisciplineFromJob(input) {
  const description = typeof input.description === 'string'
    ? input.description.slice(0, 4000)
    : String(input.description ?? '');
  const text = normalizeJobText([input.title, input.area, input.role, description].filter(Boolean).join(' '));

  if (/\\b(user research|ux research|pesquisa com usu|ux researcher|design researcher|research designer|pesquisador)\\b/.test(text)) return 'ux_research';
  if (/\\b(content design|ux writing|ux writer|content designer|design de conteudo|redator ux|technical writer)\\b/.test(text)) return 'content_design';
  if (/\\b(design ops|design operations|designops|design program manager)\\b/.test(text)) return 'design_ops';
  if (/\\b(motion designer|motion design|animador ui|ui animation|animacao ui|lottie|micro-?interac)\\b/.test(text)) return 'motion';
  if (/\\b(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual|visual\\/graphic|brand design|marketing design|design de marketing|design digital|digital design|web design|design web|comunicacao visual|social media design|design para midias|performance design)\\b/.test(text)) return 'visual_graphic';
  if (/\\b(ui designer|designer de interface|designer ui|ui design|interface designer)\\b/.test(text) && !/\\b(ux\\/ui|ui\\/ux|product design|product designer)\\b/.test(text)) return 'ui';
  if (/\\b(ux designer|designer de experiencia|user experience designer|ux design|service design|design de servico|instructional design|design instrucional|learning design)\\b/.test(text) && !/\\b(ux\\/ui|ui\\/ux|product design|product designer)\\b/.test(text)) return 'ux';
  if (/\\b(product design|product designer|ux\\/ui|ui\\/ux|design de produto|designer de produto|product ux)\\b/.test(text)) return 'product_design';

  const area = normalizeJobText(input.area);
  if (area) {
    if (/product/.test(area)) return 'product_design';
    if (/research|pesquisa/.test(area)) return 'ux_research';
    if (/content|writing/.test(area)) return 'content_design';
    if (/ops|operations/.test(area)) return 'design_ops';
    if (/motion|animation/.test(area)) return 'motion';
    if (/graphic|visual|brand|marketing|digital|web|comunicacao|performance/.test(area)) return 'visual_graphic';
    if (/interface|^ui|\\/ui/.test(area)) return 'ui';
    if (/experience|service|instructional|learning|ux|cx/.test(area)) return 'ux';
  }

  const role = normalizeJobText(input.role);
  if (role) {
    if (/grafico|graphic|visual|brand|marketing|digital|web/.test(role)) return 'visual_graphic';
    if (/product/.test(role)) return 'product_design';
    if (/research|pesquisa/.test(role)) return 'ux_research';
    if (/content|writing/.test(role)) return 'content_design';
    if (/motion/.test(role)) return 'motion';
    if (/interface|^ui/.test(role)) return 'ui';
    if (/ux|experiencia|service/.test(role)) return 'ux';
  }

  if (/\\b(editor de videos?|video editor|videomaker|audiovisual|edicao de video|producao audiovisual)\\b/.test(text) && !/\\b(motion designer|motion design|animador ui|ui animation|animacao ui)\\b/.test(text)) return 'visual_graphic';
  if (/\\b(designer|design\\b)/.test(text) && !/\\b(interior|industrial|moda|fashion|som|sound|acustico|paisag|lighting)\\b/.test(text)) return DEFAULT_DISCIPLINE;
  return DEFAULT_DISCIPLINE;
}

function resolveDiscipline(input) {
  return parseDiscipline(input.discipline) ?? inferDisciplineFromJob(input);
}
`.trim()
