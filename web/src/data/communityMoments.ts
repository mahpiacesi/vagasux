export type CommunityMoment = {
  id: string
  caption: string
  /** Absolute URL or path under /public — leave empty until Mah sends the photo */
  src?: string
  alt: string
}

/**
 * Photo slots for the community page.
 * Fill `src` when assets are ready (e.g. /community/voluntarios-01.jpg).
 */
export const communityMoments: CommunityMoment[] = [
  {
    id: 'voluntarios',
    caption: 'Primeira reunião como voluntários',
    alt: 'Time de voluntários da VagasUX reunido',
  },
  {
    id: 'encontro',
    caption: 'Encontros e troca na comunidade',
    alt: 'Pessoas da comunidade VagasUX em um encontro',
  },
  {
    id: 'live',
    caption: 'Lives e conteúdos ao vivo',
    alt: 'Transmissão ao vivo da comunidade VagasUX',
  },
]
