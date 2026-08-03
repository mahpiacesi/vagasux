const SPOTIFY_SHOW_PATTERN = /open\.spotify\.com\/show\/([a-zA-Z0-9]+)/i

/** URL canônica do show (sem query). */
export function normalizeSpotifyShowUrl(url: string): string | null {
  const id = extractSpotifyShowId(url)
  return id ? `https://open.spotify.com/show/${id}` : null
}

export function isSpotifyShowUrl(url: string): boolean {
  return SPOTIFY_SHOW_PATTERN.test(url)
}

export function extractSpotifyShowId(url: string): string | null {
  const match = url.match(SPOTIFY_SHOW_PATTERN)
  return match ? match[1] : null
}

/** Converte thumbnail do oEmbed (300px) para capa maior em i.scdn.co. */
export function spotifyCoverUrlFromOEmbedThumbnail(thumbnailUrl: string): string | null {
  const hash = thumbnailUrl.split('/image/').pop()
  if (!hash) return null

  const largeHash = hash.replace(/(ab676563)00005f1f/i, '$10000ba8a')
  return `https://i.scdn.co/image/${largeHash}`
}

export function isSpotifyScdnImageUrl(url: string): boolean {
  return /(?:i\.scdn\.co|spotifycdn\.com)\/image\//i.test(url)
}

/**
 * Busca capa via oEmbed (CORS * no Spotify).
 * Usado no cliente quando a capa ainda não foi resolvida no export.
 */
export async function fetchSpotifyShowCoverUrl(showUrl: string): Promise<string | null> {
  const canonical = normalizeSpotifyShowUrl(showUrl)
  if (!canonical) return null

  try {
    const response = await fetch(
      `https://open.spotify.com/oembed?url=${encodeURIComponent(canonical)}`,
    )
    if (!response.ok) return null

    const data = (await response.json()) as { thumbnail_url?: string }
    if (!data.thumbnail_url) return null

    return spotifyCoverUrlFromOEmbedThumbnail(data.thumbnail_url)
  } catch {
    return null
  }
}
