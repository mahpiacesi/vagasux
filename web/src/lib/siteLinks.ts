/** Internal app routes (this site). */
export const routes = {
  home: '/',
  comunidade: '/comunidade',
  voluntariado: '/voluntariado',
  oportunidades: '/oportunidades',
  curadoria: '/vagas-para-iniciantes',
  codigoDeConduta: '/codigo-de-conduta',
  termosEPoliticas: '/termos-e-politicas',
} as const

export const contact = {
  email: 'vagasux@gmail.com',
} as const

export const routeHashes = {
  formasDeParticipar: 'formas-de-participar',
} as const

export const forms = {
  voluntarios: 'https://forms.gle/vqyLwPfA42LYv6ZV6',
} as const

/** External community destinations until in-app routes exist. */
export const externalCommunity = {
  guilda: 'https://vagasux.framer.website/',
} as const

export const communityHashes = {
  canaisAbertos: 'canais-abertos',
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
  termos: 'https://vagasux.com.br/termos-e-polticas',
} as const

export const communityShops = {
  colab55: 'https://www.colab55.com/@vagasux',
  umapenca: 'https://umapenca.com/vagasux/',
  products: {
    canecaChuvaDeVagas:
      'https://www.colab55.com/@vagasux/mugs/chuva-de-vagas',
    camisetaLuteJuniorPreta:
      'https://www.colab55.com/@vagasux/tees/lute-como-um-junior-preta',
    camisetaJuniorIniciante:
      'https://www.colab55.com/@vagasux/tees/junior-iniciante',
    bolsaGuia:
      'https://www.colab55.com/@vagasux/totebags/guia-do-product-designer',
  },
} as const
