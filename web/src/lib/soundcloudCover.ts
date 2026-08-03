const SOUNDCLOUD_PATTERN = /soundcloud\.com\/([a-zA-Z0-9_-]+)/i

export function isSoundCloudUrl(url: string): boolean {
  return SOUNDCLOUD_PATTERN.test(url)
}

/** Canonicaliza para página do perfil/show (soundcloud.com/{slug}). */
export function normalizeSoundCloudShowUrl(url: string): string | null {
  const match = url.match(SOUNDCLOUD_PATTERN)
  return match ? `https://soundcloud.com/${match[1]}` : null
}

export function isSoundCloudCoverUrl(url: string): boolean {
  return /sndcdn\.com\//i.test(url)
}
