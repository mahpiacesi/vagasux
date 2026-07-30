/** Name-only fallback when Supabase is unreachable. Logos come from Storage via n8n sync. */
export type FallbackPartnerName = {
  slug: string
  name: string
}

/** Snapshot from Notion database 6ef3390c137d4e9c9d9a7863f2ada4a6 (Status = Ativo) */
export const fallbackPartnerNames: FallbackPartnerName[] = [
  { slug: 'akilomba', name: 'Akilomba' },
  { slug: 'banco-carrefour', name: 'Banco Carrefour' },
  { slug: 'beatriz-miranda', name: 'Beatriz Miranda' },
  { slug: 'cdx26', name: 'CDX26 Caipira Design Experience' },
  { slug: 'design-dende', name: 'Design & Dendê' },
  { slug: 'design-circuit', name: 'Design Circuit' },
  { slug: 'design-estrategico', name: 'Design Estratégico de Gabriel Pinheiro' },
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
  { slug: 'programaria', name: 'PrograMaria' },
  { slug: 'save-me-teacher', name: 'Save me teacher' },
  { slug: 'thestarter', name: 'TheStarter' },
  { slug: 'uxco', name: 'UXCO' },
  { slug: 'uxconfbr', name: 'UXCONF BR' },
  { slug: 'uxnow', name: 'UX Design e Research (UXNOW)' },
  { slug: 'ux-writing-101', name: 'UX WRITING 101' },
]
