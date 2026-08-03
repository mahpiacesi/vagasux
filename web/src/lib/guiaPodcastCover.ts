import type { GuiaPodcast } from '@/data/guiaPodcasts'
import { isAnchorCoverUrl, isAnchorShowUrl } from '@/lib/anchorCover'
import { isApplePodcastCoverUrl, isApplePodcastUrl } from '@/lib/applePodcastCover'
import {
  isSoundCloudCoverUrl,
  isSoundCloudUrl,
} from '@/lib/soundcloudCover'
import {
  fetchSpotifyShowCoverUrl,
  isSpotifyScdnImageUrl,
  isSpotifyShowUrl,
} from '@/lib/spotifyCover'

/**
 * Resolve capa do podcast:
 * - Spotify → i.scdn.co/image/
 * - Anchor → cloudfront.net
 * - Apple Podcasts → mzstatic.com
 * - SoundCloud → sndcdn.com
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

  if (isApplePodcastUrl(podcast.url)) {
    if (podcast.imageUrl && isApplePodcastCoverUrl(podcast.imageUrl)) {
      return podcast.imageUrl
    }
    return null
  }

  if (isSoundCloudUrl(podcast.url)) {
    if (podcast.imageUrl && isSoundCloudCoverUrl(podcast.imageUrl)) {
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
