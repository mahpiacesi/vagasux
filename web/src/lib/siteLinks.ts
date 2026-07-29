/** Internal app routes (this site). */
export const routes = {
  home: '/',
  comunidade: '/comunidade',
  oportunidades: '/oportunidades',
  curadoria: '/vagas-para-iniciantes',
} as const

/**
 * Pages that still live on the Super/Notion site.
 * Keep vagasux.com.br intact while we migrate in parallel.
 */
export const superSite = {
  origin: 'https://vagasux.com.br',
  guia: 'https://vagasux.com.br/guia-do-product-designer',
  comunidade: 'https://vagasux.com.br/a-comunidade',
  iniciantes: 'https://vagasux.com.br/vagas-para-iniciantes',
  baseIniciantes: 'https://vagasux.com.br/iniciantes-em-design',
  publicar: 'https://vagasux.com.br/publicar-vaga',
  mentoria: 'https://vagasux.com.br/iniciantes-em-design/apenas-mentores',
  parcerias: 'https://vagasux.com.br/parcerias',
  apoie: 'https://apoia.se/vagasux',
  quemOrganiza: 'https://vagasux.com.br/quem-organiza',
} as const

export const communityShops = {
  colab55: 'https://www.colab55.com/@vagasux',
  umapenca: 'https://umapenca.com/vagasux/',
} as const
