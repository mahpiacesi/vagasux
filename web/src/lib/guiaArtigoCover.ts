import type { GuiaArtigo } from '@/data/guiaArtigos'
import { isMediumCdnImageUrl } from '@/lib/mediumCover'

export function resolveArtigoCoverUrl(artigo: GuiaArtigo): string | null {
  if (!artigo.imageUrl) return null

  if (
    artigo.mediumCover ||
    isMediumCdnImageUrl(artigo.imageUrl) ||
    artigo.imageUrl.startsWith('http')
  ) {
    return artigo.imageUrl
  }

  return artigo.imageUrl
}
