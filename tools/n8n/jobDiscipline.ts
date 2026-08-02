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
  'other',
] as const

export type JobDiscipline = (typeof JOB_DISCIPLINES)[number]

export function normalizeJobText(value: unknown): string {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

export function parseDiscipline(value: unknown): JobDiscipline | null {
  const normalized = String(value ?? '').trim()
  return (JOB_DISCIPLINES as readonly string[]).includes(normalized)
    ? (normalized as JobDiscipline)
    : null
}

export function inferDisciplineFromJob(input: {
  title?: unknown
  area?: unknown
  role?: unknown
}): JobDiscipline {
  const text = normalizeJobText(
    [input.title, input.area, input.role].filter(Boolean).join(' '),
  )

  if (
    /\b(editor de videos?|editor de videos curtos|video editor|videomaker|video maker|analista audiovisual|edicao de video|video editing)\b/.test(
      text,
    ) &&
    !/\b(motion designer|motion design|animador ui|ui animation|animacao ui)\b/.test(
      text,
    )
  ) {
    return 'other'
  }

  if (
    /\b(user research|ux research|pesquisa com usu|ux researcher|design researcher|research designer|pesquisador)\b/.test(
      text,
    )
  ) {
    return 'ux_research'
  }

  if (
    /\b(content design|ux writing|ux writer|content designer|design de conteudo|redator ux)\b/.test(
      text,
    )
  ) {
    return 'content_design'
  }

  if (/\b(design ops|design operations|designops)\b/.test(text)) {
    return 'design_ops'
  }

  if (
    /\b(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)\b/.test(
      text,
    )
  ) {
    return 'motion'
  }

  if (
    /\b(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual)\b/.test(
      text,
    )
  ) {
    return 'visual_graphic'
  }

  if (
    /\b(ui designer|designer de interface|designer ui|ui design)\b/.test(text) &&
    !/\b(ux\/ui|ui\/ux|product design|product designer)\b/.test(text)
  ) {
    return 'ui'
  }

  if (
    /\b(ux designer|designer de experiencia|user experience designer|ux design)\b/.test(
      text,
    ) &&
    !/\b(ux\/ui|ui\/ux|product design|product designer)\b/.test(text)
  ) {
    return 'ux'
  }

  if (
    /\b(product design|product designer|ux\/ui|ui\/ux|design de produto|designer de produto)\b/.test(
      text,
    )
  ) {
    return 'product_design'
  }

  const area = normalizeJobText(input.area)
  if (/\bproduct design\b/.test(area)) return 'product_design'
  if (/\b(ux research|pesquisa)\b/.test(area)) return 'ux_research'
  if (/\b(grafico|graphic|visual|branding)\b/.test(area)) return 'visual_graphic'
  if (/\b(content|ux writing)\b/.test(area)) return 'content_design'
  if (/\b(motion)\b/.test(area)) return 'motion'
  if (/\b(ui|interface)\b/.test(area)) return 'ui'
  if (/\b(ux|experiencia)\b/.test(area)) return 'ux'

  return 'other'
}

export function resolveDiscipline(input: {
  discipline?: unknown
  title?: unknown
  area?: unknown
  role?: unknown
}): JobDiscipline {
  return parseDiscipline(input.discipline) ?? inferDisciplineFromJob(input)
}

/** n8n-friendly helpers for Apply enrichment. */
export const DISCIPLINE_ALLOW_JS = `new Set(${JSON.stringify([...JOB_DISCIPLINES])})`

export const RESOLVE_DISCIPLINE_JS = `
function parseDiscipline(value) {
  const normalized = String(value ?? '').trim();
  return ${JSON.stringify([...JOB_DISCIPLINES])}.includes(normalized) ? normalized : null;
}

function inferDisciplineFromJob(input) {
  const text = normalizeJobText([input.title, input.area, input.role].filter(Boolean).join(' '));

  if (/\\b(editor de videos?|editor de videos curtos|video editor|videomaker|video maker|analista audiovisual|edicao de video|video editing)\\b/.test(text) &&
      !/\\b(motion designer|motion design|animador ui|ui animation|animacao ui)\\b/.test(text)) {
    return 'other';
  }
  if (/\\b(user research|ux research|pesquisa com usu|ux researcher|design researcher|research designer|pesquisador)\\b/.test(text)) {
    return 'ux_research';
  }
  if (/\\b(content design|ux writing|ux writer|content designer|design de conteudo|redator ux)\\b/.test(text)) {
    return 'content_design';
  }
  if (/\\b(design ops|design operations|designops)\\b/.test(text)) {
    return 'design_ops';
  }
  if (/\\b(motion designer|motion design|animador ui|ui animation|animacao ui|lottie)\\b/.test(text)) {
    return 'motion';
  }
  if (/\\b(designer grafico|design grafico|graphic designer|visual designer|branding designer|designer visual|diretor de arte|design editorial|identidade visual)\\b/.test(text)) {
    return 'visual_graphic';
  }
  if (/\\b(ui designer|designer de interface|designer ui|ui design)\\b/.test(text) && !/\\b(ux\\/ui|ui\\/ux|product design|product designer)\\b/.test(text)) {
    return 'ui';
  }
  if (/\\b(ux designer|designer de experiencia|user experience designer|ux design)\\b/.test(text) && !/\\b(ux\\/ui|ui\\/ux|product design|product designer)\\b/.test(text)) {
    return 'ux';
  }
  if (/\\b(product design|product designer|ux\\/ui|ui\\/ux|design de produto|designer de produto)\\b/.test(text)) {
    return 'product_design';
  }

  const area = normalizeJobText(input.area);
  if (/\\bproduct design\\b/.test(area)) return 'product_design';
  if (/\\b(ux research|pesquisa)\\b/.test(area)) return 'ux_research';
  if (/\\b(grafico|graphic|visual|branding)\\b/.test(area)) return 'visual_graphic';
  if (/\\b(content|ux writing)\\b/.test(area)) return 'content_design';
  if (/\\b(motion)\\b/.test(area)) return 'motion';
  if (/\\b(ui|interface)\\b/.test(area)) return 'ui';
  if (/\\b(ux|experiencia)\\b/.test(area)) return 'ux';
  return 'other';
}

function resolveDiscipline(input) {
  return parseDiscipline(input.discipline) ?? inferDisciplineFromJob(input);
}
`.trim()
