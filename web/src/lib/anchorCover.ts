const ANCHOR_SHOW_PATTERN = /anchor\.fm\/([a-zA-Z0-9_-]+)/i

export function isAnchorShowUrl(url: string): boolean {
  return ANCHOR_SHOW_PATTERN.test(url)
}

export function normalizeAnchorShowUrl(url: string): string | null {
  const match = url.match(ANCHOR_SHOW_PATTERN)
  return match ? `https://anchor.fm/${match[1]}` : null
}

export function isAnchorCoverUrl(url: string): boolean {
  return /cloudfront\.net\/(?:production|staging)\/podcast_/i.test(url)
}
