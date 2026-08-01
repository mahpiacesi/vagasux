/** Guia internal routes: trilhas, temas, tipos. */
export const guiaRoutes = {
  home: '/guia',
  trilha: (slug: string) => `/guia/trilhas/${slug}`,
  tema: (slug: string) => `/guia/tema/${slug}`,
  tipo: (slug: string) => `/guia/tipo/${slug}`,
  faq: '/guia/comecar/faq',
  glossario: '/guia/comecar/glossario',
  glossarioTerm: (slug: string) => `/guia/comecar/glossario/${slug}`,
} as const

export type GuiaRouteSection = 'trilhas' | 'tema' | 'tipo' | 'comecar'
