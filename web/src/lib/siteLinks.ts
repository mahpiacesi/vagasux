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
} as const

/** Official community entry points (from vagasux.com.br/a-comunidade). */
export const communityChannels = {
  whatsappAvisos: 'https://www.whatsapp.com/channel/0029VaolXJkId7nHWZAPTz0P',
  whatsappModeracao: 'https://chat.whatsapp.com/DJwdSS9jmH4FK8iCAH5XG4',
  whatsappDamas: 'https://chat.whatsapp.com/F8GrEhy2ubYAafWZzsiOmk',
  whatsappGrupo1: 'https://chat.whatsapp.com/JfHSbF6yz0fHXYEEUSX28h',
  whatsappGrupo2: 'https://chat.whatsapp.com/E9vTTALO6lAD4DdTELQZma',
  telegramCanal: 'https://t.me/vagasux',
  telegramConversas: 'https://t.me/guiadoproductdesigner',
  discord: 'https://discord.gg/NmsWUzCmN4',
} as const
