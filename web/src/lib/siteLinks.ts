/** Internal app routes (this site). */
export const routes = {
  home: '/',
  oportunidades: '/oportunidades',
  comunidade: '/a-comunidade',
  quemOrganiza: '/quem-organiza',
  parcerias: '/parcerias',
  apoie: '/apoie-a-iniciativa',
  codigoDeConduta: '/codigo-de-conduta',
} as const

/**
 * Pages / assets that still live on the Super/Notion site
 * (or external tools) while we migrate in parallel.
 */
export const superSite = {
  origin: 'https://vagasux.com.br',
  guia: 'https://vagasux.com.br/guia-do-product-designer',
  iniciantes: 'https://vagasux.com.br/vagas-para-iniciantes',
  baseIniciantes: 'https://vagasux.com.br/iniciantes-em-design',
  publicar: 'https://vagasux.com.br/publicar-vaga',
  seletivas: 'https://vagasux.com.br/a-comunidade/seletivas-e-descontos',
  hallContratados: 'https://vagasux.com.br/a-comunidade/hall-dos-contratados',
  panorama: 'https://vagasux.com.br/a-comunidade/panorama',
} as const

export const externalSupport = {
  apoiaSe: 'https://apoia.se/vagasux',
  pix: 'https://nubank.com.br/pagar/2263/5bTyrhPEwh',
  lojinha: 'https://www.colab55.com/@vagasux',
  mah: 'https://avely.me/mahpiacesi',
  telegramCanal: 'https://t.me/guiadoproductdesigner',
} as const
