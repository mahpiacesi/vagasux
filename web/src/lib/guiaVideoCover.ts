import type { GuiaVideo } from '@/data/guiaVideos'
import {
  extractYoutubeVideoId,
  isYoutubeThumbnailUrl,
  youtubeThumbnailUrl,
} from '@/lib/youtubeCover'

export function resolveVideoCoverUrl(video: GuiaVideo): string | null {
  if (video.imageUrl && (isYoutubeThumbnailUrl(video.imageUrl) || video.imageUrl.startsWith('http'))) {
    return video.imageUrl
  }

  if (video.youtubeVideoId) {
    return youtubeThumbnailUrl(video.youtubeVideoId)
  }

  const videoId = extractYoutubeVideoId(video.url)
  if (videoId) {
    return youtubeThumbnailUrl(videoId)
  }

  return video.imageUrl ?? null
}
