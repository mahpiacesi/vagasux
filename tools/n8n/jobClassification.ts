/**
 * Shared scope rules for VagasUX job classification.
 * Keep in sync with the Enrichment workflow (n8n) Apply enrichment node
 * and collector title filters (Gupy, InfoJobs, Sólides).
 */

export function normalizeJobText(value: unknown): string {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}

/** Real design-career wording (not shopping "Rio Design", etc.). */
export const EXPLICIT_DESIGN_CAREER =
  /\b(de design|designer|design ops|design system|design de produto|product design|graphic design|visual design|motion design|ux design|ui design|design lead|head of design|gerente de design|coordenadora de design|coordenador de design|carreira de design|design grafico|designer grafico|ux writer|content designer|product designer|visual designer|graphic designer|web designer|motion designer|service designer|interaction designer|art director|diretor de arte|ux|ui|research|pesquisa)\b/

/** Shopping / venue names that contain the word "Design". */
export const VENUE_DESIGN_NAME =
  /\b(rio design|shopping .* design|design barra|design leak|boulevard .* design)\b/

/** Retail store roles (not design leadership). */
export const RETAIL_STORE_ROLE =
  /\b(gerente de loja|gerente \| |vendedor|vendedora|operador de loja|supervisor de loja|consultor de vendas|auxiliar de loja|apoio de loja|caixa|estoquista)\b/

export function hasExplicitDesignCareer(text: string): boolean {
  return EXPLICIT_DESIGN_CAREER.test(text)
}

export function isVenueDesignName(text: string): boolean {
  return VENUE_DESIGN_NAME.test(text)
}

/** Retail / shopping-center listings mistaken for design because of "Design" in the venue name. */
export function isRetailStoreFalsePositive(input: {
  title?: unknown
  role?: unknown
  area?: unknown
  description?: unknown
}): boolean {
  const description =
    typeof input.description === 'string'
      ? input.description.slice(0, 3000)
      : String(input.description ?? '')

  const text = normalizeJobText(
    [input.title, input.role, input.area, description].filter(Boolean).join(' '),
  )

  const explicit = hasExplicitDesignCareer(text)

  if (isVenueDesignName(text) && !explicit) return true
  if (RETAIL_STORE_ROLE.test(text) && !explicit) return true

  return false
}

const MOTION_KEEP =
  /\b(motion designer|motion design|animador ui|ui animation|animacao ui)\b/

const VIDEO_EDITING =
  /\b(?:editor(?:\s*\(a\))?|editora)\s+de\s+videos?(?:\s+curtos)?\b|\bvideo\s+editors?\b|\bvideomakers?\b|\bvideo\s+makers?\b|\bedicao\s+de\s+videos?\b|\bvideo\s+editing\b|\banalista\s+audiovisual\b|\bproducao\s+audiovisual\b/

/** Beauty, fashion pattern/styling — not digital product / UX / graphic design. */
const OUT_OF_SCOPE_HEADLINE =
  /\b(sobrancelhas?|designer de sobrancelhas?|modelistas?|assistente de estilo|estilistas?|designer de moda|design de moda)\b/

/** True when the listing is audiovisual post-production, not product/UI motion design. */
export function isVideoEditingRole(input: {
  title?: unknown
  role?: unknown
  area?: unknown
}): boolean {
  const text = normalizeJobText([input.title, input.role, input.area].filter(Boolean).join(' '))

  if (MOTION_KEEP.test(text)) return false

  return VIDEO_EDITING.test(text)
}

/** CAD/engineering, beauty, industrial/furniture — not digital product / UX design careers. */
const NON_DESIGN_CAREER =
  /\b(product design lead engineer|design lead engineer|design engineer|engenheiro de design|engenharia mecanica|engenharia de materiais|graduacao em arquitetura|formacao em arquitetura|bacharelado em arquitetura|siemens nx|\(nx\)|\bnx cad\b|catia|solidworks|solid edge|sketchup|autocad|promob|inventor|creo|pro engineer|projetista e designer|\bprojetista\b|designer de produtos industrial|design de produtos industrial|design de moveis|designer de moveis|design industrial\b|ferramental|desenvolvedor.*front.?end|front.?end.*desenvolvedor|desenvolvedor.*\bui\b|sobrancelhas?|designer de sobrancelhas?|depilador|micropigment|consultora de beleza|designer de unha|manicure|barbeir)\b/

export function isInfoJobsSource(source: unknown): boolean {
  return normalizeJobText(source) === 'infojobs'
}

/** Listing should not appear on VagasUX (even if title contains "design"). */
export function isNonDesignCareerJob(input: {
  title?: unknown
  role?: unknown
  area?: unknown
  description?: unknown
  source?: unknown
}): boolean {
  const description =
    typeof input.description === 'string'
      ? input.description.slice(0, 4000)
      : String(input.description ?? '')

  const text = normalizeJobText(
    [input.title, input.role, input.area, description].filter(Boolean).join(' '),
  )

  if (NON_DESIGN_CAREER.test(text)) return true
  if (OUT_OF_SCOPE_HEADLINE.test(normalizeJobText([input.title, input.role, input.area].filter(Boolean).join(' ')))) {
    return true
  }
  if (isVideoEditingRole(input)) return true

  // InfoJobs card snippets often lack body text — title-only CAD/engineering bait.
  if (isInfoJobsSource(input.source)) {
    const title = normalizeJobText(input.title)
    if (
      /\b(product design lead engineer|design engineer|\(nx\)|designer de produtos industrial|design de moveis|projetista|desenvolvedor.*ui|sobrancelhas?|consultora de beleza)\b/.test(
        title,
      )
    ) {
      return true
    }
  }

  return false
}

/** n8n-friendly guard for Apply enrichment (non-design career false positives). */
export const NON_DESIGN_CAREER_GUARD_JS = `
function normalizeJobText(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

const nonDesignText = normalizeJobText(\`\${job.title} \${ai.role ?? ''} \${ai.area ?? ''} \${description} \${job.source ?? ''}\`);
const nonDesignCareer =
  /\\b(product design lead engineer|design lead engineer|design engineer|engenheiro de design|engenharia mecanica|engenharia de materiais|graduacao em arquitetura|formacao em arquitetura|bacharelado em arquitetura|siemens nx|\\(nx\\)|\\bnx cad\\b|catia|solidworks|inventor|creo|pro engineer|projetista e designer|\\bprojetista\\b|designer de produtos industrial|design de produtos industrial|design de moveis|designer de moveis|design industrial\\b|desenvolvedor.*front.?end|front.?end.*desenvolvedor|desenvolvedor.*\\bui\\b|sobrancelhas?|designer de sobrancelhas?|depilador|micropigment|consultora de beleza|designer de unha|manicure|barbeir)\\b/.test(nonDesignText)
  || /\\b(sobrancelhas?|designer de sobrancelhas?|modelistas?|assistente de estilo|estilistas?|designer de moda|design de moda)\\b/.test(normalizeJobText(\`\${job.title} \${ai.role ?? ''} \${ai.area ?? ''}\`))
  || (
    !/\\b(motion designer|motion design|animador ui|ui animation|animacao ui)\\b/.test(normalizeJobText(\`\${job.title} \${ai.role ?? ''} \${ai.area ?? ''}\`))
    && /\\b(?:editor(?:\\s*\\(a\\))?|editora)\\s+de\\s+videos?(?:\\s+curtos)?\\b|\\bvideo\\s+editors?\\b|\\bvideomakers?\\b|\\bvideo\\s+makers?\\b|\\bedicao\\s+de\\s+videos?\\b|\\bvideo\\s+editing\\b|\\banalista\\s+audiovisual\\b|\\bproducao\\s+audiovisual\\b/.test(normalizeJobText(\`\${job.title} \${ai.role ?? ''} \${ai.area ?? ''}\`))
  )
  || (
    normalizeJobText(job.source) === 'infojobs'
    && /\\b(product design lead engineer|design engineer|\\(nx\\)|designer de produtos industrial|design de moveis|projetista|desenvolvedor.*ui|sobrancelhas?|consultora de beleza)\\b/.test(normalizeJobText(job.title))
  );
`.trim()

/** Gupy collector: title passes design relevance filter. */
export function isGupyDesignRelevantTitle(rawTitle: unknown): boolean {
  const title = normalizeJobText(rawTitle)

  const excluded =
    /\b(vendedor|vendedora|auxiliar administrativo|apoio de loja|operador de loja|caixa|estoquista|consultor de vendas)\b/.test(
      title,
    )

  const explicit = hasExplicitDesignCareer(title)
  const venue = isVenueDesignName(title)
  const retail = RETAIL_STORE_ROLE.test(title)
  const venueOnly = venue && !/\b(de design|designer|gerente de design|coordenador de design)\b/.test(title)

  const designRole = explicit && !venueOnly

  const leadershipOrSupport =
    /\b(coordenador|coordenadora|gerente|lider|lead|head|supervisor|supervisora|especialista|analista|assistente|estagio|estagiario|estagiaria)\b/.test(
      title,
    ) &&
    explicit &&
    !venueOnly

  return (designRole || leadershipOrSupport) && !excluded && !retail
}

/** n8n-friendly guard for Apply enrichment (retail / venue false positives). */
export const RETAIL_FALSE_POSITIVE_GUARD_JS = `
function normalizeJobText(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

const retailText = normalizeJobText(\`\${job.title} \${ai.role ?? ''} \${ai.area ?? ''} \${description}\`);
const explicitDesign =
  /\\b(de design|designer|design ops|design system|design de produto|product design|graphic design|visual design|motion design|ux design|ui design|design lead|head of design|gerente de design|coordenador de design|product designer|ux designer|ui designer|ux|ui|research|pesquisa)\\b/.test(retailText);
const venueDesign =
  /\\b(rio design|shopping .* design|design barra|design leak|boulevard .* design)\\b/.test(retailText);
const retailRole =
  /\\b(gerente de loja|gerente \\| |vendedor|vendedora|operador de loja|supervisor de loja|consultor de vendas|auxiliar de loja|apoio de loja|caixa|estoquista)\\b/.test(retailText);
const retailFalsePositive =
  (venueDesign && !explicitDesign) || (retailRole && !explicitDesign);
`.trim()

/** n8n-friendly copy of isVideoEditingRole for Code nodes. */
export const VIDEO_EDITING_GUARD_JS = `
function normalizeJobText(value) {
  return String(value ?? '')
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\\u0300-\\u036f]/g, '');
}

const classifyText = normalizeJobText(\`\${job.title} \${ai.role ?? ''} \${ai.area ?? ''}\`);
const motionKeep = /\\b(motion designer|motion design|animador ui|ui animation|animacao ui)\\b/.test(classifyText);
const videoEditing =
  !motionKeep &&
  /\\b(?:editor(?:\\s*\\(a\\))?|editora)\\s+de\\s+videos?(?:\\s+curtos)?\\b|\\bvideo\\s+editors?\\b|\\bvideomakers?\\b|\\bvideo\\s+makers?\\b|\\bedicao\\s+de\\s+videos?\\b|\\bvideo\\s+editing\\b|\\banalista\\s+audiovisual\\b|\\bproducao\\s+audiovisual\\b/.test(classifyText);
`.trim()

/** Inline IIFE for Gupy collector Edit Fields → isRelevant. */
export const GUPY_IS_RELEVANT_JS = `={{
  (() => {
    const title = ($json.name || '')
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\\u0300-\\u036f]/g, '');

    const excluded =
      /\\b(vendedor|vendedora|auxiliar administrativo|apoio de loja|operador de loja|caixa|estoquista|consultor de vendas|sobrancelhas?|modelistas?|assistente de estilo|estilistas?|designer de moda|design de moda)\\b/.test(title)
      || (
        !/\\b(motion designer|motion design)\\b/.test(title)
        && /\\b(?:editor(?:\\s*\\(a\\))?|editora)\\s+de\\s+videos?\\b|\\bvideo\\s+editors?\\b|\\bvideomakers?\\b|\\bedicao\\s+de\\s+videos?\\b/.test(title)
      );

    const explicitDesign =
      /\\b(de design|designer|design ops|design system|design de produto|product design|graphic design|visual design|motion design|ux design|ui design|design lead|head of design|gerente de design|coordenadora de design|coordenador de design|carreira de design|design grafico|designer grafico|ux writer|content designer|product designer|visual designer|graphic designer|web designer|motion designer|service designer|interaction designer|art director|diretor de arte|ux|ui|research|pesquisa)\\b/.test(title);

    const venueDesign =
      /\\b(rio design|shopping .* design|design barra|design leak|boulevard .* design)\\b/.test(title);

    const retailTitle =
      /\\b(gerente de loja|gerente \\| |vendedor|vendedora|operador de loja|supervisor de loja|consultor de vendas|auxiliar de loja|apoio de loja|caixa|estoquista)\\b/.test(title);

    const venueOnly = venueDesign && !/\\b(de design|designer|gerente de design|coordenador de design)\\b/.test(title);

    const designRole = explicitDesign && !venueOnly;

    const leadershipOrSupport =
      /\\b(coordenador|coordenadora|gerente|lider|lead|head|supervisor|supervisora|especialista|analista|assistente|estagio|estagiario|estagiaria)\\b/.test(title)
      && explicitDesign
      && !venueOnly;

    return (designRole || leadershipOrSupport) && !excluded && !retailTitle;
  })()
}}`
