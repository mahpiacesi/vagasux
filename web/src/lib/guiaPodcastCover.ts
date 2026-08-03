import type { GuiaPodcast } from '@/data/guiaPodcasts'
import {
  fetchSpotifyShowCoverUrl,
  isSpotifyScdnImageUrl,
  isSpotifyShowUrl,
} from '@/lib/spotifyCover'

/**
 * Resolve capa do podcast:
 * - Spotify → URL i.scdn.co/image/ (export ou oEmbed)
 * - Demais → imagem local do Notion
 */
export function resolvePodcastCoverUrl(podcast: GuiaPodcast): string | null {
  if (isSpotifyShowUrl(podcast.url)) {
    if (podcast.imageUrl && isSpotifyScdnImageUrl(podcast.imageUrl)) {
      return podcast.imageUrl
    }
    return null
  }

  return podcast.imageUrl ?? null
}

export async function resolvePodcastCoverUrlAsync(
  podcast: GuiaPodcast,
): Promise<string | null> {
  const sync = resolvePodcastCoverUrl(podcast)
  if (sync) return sync

  if (isSpotifyShowUrl(podcast.url)) {
    return fetchSpotifyShowCoverUrl(podcast.url)
  }

  return null
}
