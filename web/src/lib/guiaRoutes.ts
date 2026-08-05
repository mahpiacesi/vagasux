/** Guia internal routes: trilhas, temas, tipos. */
export const guiaRoutes = {
  home: '/guia',
  /** Volta à seção "Por tipo de conteúdo", opcionalmente com aba selecionada. */
  homeTipos: (tipoId?: string) =>
    tipoId ? `/guia?tipo=${encodeURIComponent(tipoId)}#tipos` : '/guia#tipos',
  /** Volta à seção dedicada de cursos na home do Guia. */
  homeCursos: '/guia#cursos',
  cursos: '/guia/cursos',
  trilha: (slug: string) => `/guia/trilhas/${slug}`,
  tema: (slug: string) => `/guia/tema/${slug}`,
  tipo: (slug: string) => `/guia/tipo/${slug}`,
  faq: '/guia/faq',
  glossario: '/guia/glossario',
} as const

export type GuiaRouteSection = 'trilhas' | 'tema' | 'tipo' | 'cursos' | 'faq' | 'glossario'
