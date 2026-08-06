/** Internal app routes (this site). */
export const routes = {
  home: '/',
  comunidade: '/comunidade',
  guilda: '/guilda',
  voluntariado: '/voluntariado',
  oportunidades: '/oportunidades',
  curadoria: '/vagas-para-iniciantes',
  codigoDeConduta: '/codigo-de-conduta',
  termosEPoliticas: '/termos-e-politicas',
  parcerias: '/parcerias',
  guia: '/guia',
} as const

export const termosHashes = {
  cookies: 'cookies',
} as const

export const contact = {
  email: 'vagasux@gmail.com',
} as const

export const analyticsPrivacy = {
  microsoftClarity:
    'https://privacy.microsoft.com/pt-br/privacystatement',
  googleAnalytics: 'https://policies.google.com/privacy',
} as const

export const parceriasContact = {
  subject: 'Parceria VagasUX',
  mailto: `mailto:${contact.email}?subject=${encodeURIComponent('Parceria VagasUX')}`,
  /** Browser compose — reliable when no local mail client is configured. */
  webCompose: `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contact.email)}&su=${encodeURIComponent('Parceria VagasUX')}`,
} as const

export const parceriasHashes = {
  parceiros: 'parceiros',
  comoApoiar: 'como-apoiar',
  contato: 'contato-parceria',
} as const

export const routeHashes = {
  formasDeParticipar: 'formas-de-participar',
} as const

export const forms = {
  voluntarios: 'https://forms.gle/vqyLwPfA42LYv6ZV6',
} as const

export const mediaKit = {
  parcerias:
    'https://docs.google.com/presentation/d/15Ax1lQu3crbUgSKsmMtS9ChH2Tjx5Jw0HSxvQfR8GKI/edit?usp=sharing',
} as const

/** External community destinations until in-app routes exist. */
export const externalCommunity = {
  guilda: routes.guilda,
} as const

export const communityHashes = {
  canaisAbertos: 'canais-abertos',
} as const

export const guildaHashes = {
  problema: 'problema',
  beneficios: 'beneficios',
  comoFunciona: 'como-funciona',
  depoimentos: 'depoimentos',
  planos: 'planos',
  faq: 'faq',
} as const

export const voluntariadoHashes = {
  comoESer: 'como-e-ser',
  time: 'time',
  comoFazerParte: 'como-fazer-parte',
} as const

export const guiaHashes = {
  trilhas: 'trilhas',
  temas: 'temas',
  cursos: 'cursos',
  tipos: 'tipos',
  ajuda: 'ajuda',
} as const

/**
 * Pages that still live on the Super/Notion site.
 * Keep vagasux.com.br intact while we migrate in parallel.
 */
export const superSite = {
  origin: 'https://vagasux.com.br',
  guia: routes.guia,
  guiaLegacy: 'https://vagasux.com.br/guia-do-product-designer',
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
