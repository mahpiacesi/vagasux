/**
 * Legacy Super/Notion paths → new Guia routes.
 * Used in vercel.json; keep in sync when adding routes.
 */
export const guiaLegacyRedirects = [
  { source: '/cursos', destination: '/guia/tipo/cursos' },
  { source: '/eventos', destination: '/guia/tipo/eventos' },
  {
    source: '/perfis-para-seguir',
    destination: '/guia/tipo/canais',
  },
  { source: '/glossario', destination: '/guia/glossario' },
  {
    source: '/guia-do-product-designer/faq-tira-duvidas',
    destination: '/guia/faq',
  },
  {
    source: '/primeiros-passos',
    destination: '/guia/trilhas/entender-o-basico',
  },
  {
    source: '/trilhas/portfolio-iniciante',
    destination: '/guia/trilhas/portfolio',
  },
  {
    source: '/trilhas/ux-research-basics',
    destination: '/guia/trilhas/research',
  },
  {
    source: '/trilhas/design-systems-101',
    destination: '/guia/trilhas/content-design',
  },
  {
    source: '/trilhas/primeiros-passos',
    destination: '/guia/trilhas/entender-o-basico',
  },
] as const
