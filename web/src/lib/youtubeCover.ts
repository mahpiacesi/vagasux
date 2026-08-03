const YOUTUBE_VIDEO_PATTERNS = [
  /youtu\.be\/([a-zA-Z0-9_-]{11})/i,
  /[?&]v=([a-zA-Z0-9_-]{11})/i,
  /youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/i,
  /youtube\.com\/shorts\/([a-zA-Z0-9_-]{11})/i,
]

export function isYoutubeVideoUrl(url: string): boolean {
  return extractYoutubeVideoId(url) !== null
}

export function extractYoutubeVideoId(url: string): string | null {
  if (!url) return null
  for (const pattern of YOUTUBE_VIDEO_PATTERNS) {
    const match = url.match(pattern)
    if (match?.[1]) return match[1]
  }
  return null
}

export function isYoutubeThumbnailUrl(url: string): boolean {
  return /i\.ytimg\.com\/vi\//i.test(url)
}

/** Thumbnail estável do YouTube (hqdefault = 480×360). */
export function youtubeThumbnailUrl(
  videoUrlOrId: string,
  quality: 'hqdefault' | 'mqdefault' | 'maxresdefault' = 'hqdefault',
): string | null {
  const videoId =
    videoUrlOrId.length === 11 && !videoUrlOrId.includes('/')
      ? videoUrlOrId
      : extractYoutubeVideoId(videoUrlOrId)

  if (!videoId) return null
  return `https://i.ytimg.com/vi/${videoId}/${quality}.jpg`
}

export function youtubeWatchUrl(videoId: string): string {
  return `https://www.youtube.com/watch?v=${videoId}`
}
