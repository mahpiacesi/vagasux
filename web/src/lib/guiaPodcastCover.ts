import type { GuiaPodcast } from '@/data/guiaPodcasts'
import { isAnchorCoverUrl, isAnchorShowUrl } from '@/lib/anchorCover'
import {
  fetchSpotifyShowCoverUrl,
  isSpotifyScdnImageUrl,
  isSpotifyShowUrl,
} from '@/lib/spotifyCover'

/**
 * Resolve capa do podcast:
 * - Spotify → i.scdn.co/image/
 * - Anchor → cloudfront.net (Spotify for Creators)
 * - Demais → imagem local do Notion
 */
export function resolvePodcastCoverUrl(podcast: GuiaPodcast): string | null {
  if (isSpotifyShowUrl(podcast.url)) {
    if (podcast.imageUrl && isSpotifyScdnImageUrl(podcast.imageUrl)) {
      return podcast.imageUrl
    }
    return null
  }

  if (isAnchorShowUrl(podcast.url)) {
    if (podcast.imageUrl && isAnchorCoverUrl(podcast.imageUrl)) {
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
