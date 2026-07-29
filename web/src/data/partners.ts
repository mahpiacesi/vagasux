export type Partner = {
  slug: string
  name: string
  logo: string
}

const logoModules = import.meta.glob<string>('@/assets/partners/active/*', {
  eager: true,
  import: 'default',
})

function logoForSlug(slug: string): string {
  const entry = Object.entries(logoModules).find(([path]) =>
    path.includes(`/${slug}.`),
  )
  return entry?.[1] ?? ''
}

/** Snapshot from Notion database e3db2f99-fd47-4740-aeac-75524dbd67fd (Status = Ativo) */
const activePartnerNames: { slug: string; name: string }[] = [
  { slug: 'akilomba', name: 'Akilomba' },
  { slug: 'banco-carrefour', name: 'Banco Carrefour' },
  { slug: 'beatriz-miranda', name: 'Beatriz Miranda' },
  { slug: 'cdx26', name: 'CDX26 Caipira Design Experience' },
  { slug: 'design-dende', name: 'Design & Dendê' },
  { slug: 'design-circuit', name: 'Design Circuit' },
  { slug: 'design-estrategico', name: 'Design Estratégico — Gabriel Pinheiro' },
  { slug: 'designops-lab', name: 'DesignOps Lab' },
  { slug: 'floripa-design-days', name: 'Floripa Design Days' },
  { slug: 'eros-sester', name: 'Eros Sester' },
  { slug: 'alura-fiap-pm3', name: 'Alura / FIAP / PM3' },
  { slug: 'casa-do-codigo', name: 'Casa do Código' },
  { slug: 'pcamp', name: 'PCamp' },
  { slug: 'pm3-summit', name: 'PM3 Summit' },
  { slug: 'house-of-research', name: 'House of Research' },
  { slug: 'husky', name: 'Husky' },
  { slug: 'mergo', name: 'Mergo' },
  { slug: 'dexconf', name: 'DEXCONF' },
  { slug: 'novatec', name: 'Novatec' },
  { slug: 'josias-oliveira', name: 'Josias Oliveira' },
  { slug: 'programaria', name: 'PrograMaria' },
  { slug: 'save-me-teacher', name: 'Save me teacher' },
  { slug: 'thestarter', name: 'TheStarter' },
  { slug: 'uxco', name: 'UXCO' },
  { slug: 'uxconfbr', name: 'UXCONF BR' },
  { slug: 'uxnow', name: 'UX Design e Research (UXNOW)' },
  { slug: 'ux-writing-101', name: 'UX WRITING 101' },
]

export const partners: Partner[] = activePartnerNames.map((partner) => ({
  ...partner,
  logo: logoForSlug(partner.slug),
}))
