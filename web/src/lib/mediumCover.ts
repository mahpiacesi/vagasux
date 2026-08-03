const MEDIUM_HOST_PATTERNS = [
  /(^|\.)medium\.com$/i,
  /(^|\.)uxdesign\.cc$/i,
  /(^|\.)brasil\.uxdesign\.cc$/i,
  /(^|\.)uxplanet\.org$/i,
  /(^|\.)coletivoux\.com$/i,
]

export function isMediumArticleUrl(url: string): boolean {
  if (!url) return false
  try {
    const hostname = new URL(url).hostname.replace(/^www\./, '')
    return MEDIUM_HOST_PATTERNS.some((pattern) => pattern.test(hostname))
  } catch {
    return false
  }
}

export function isMediumCdnImageUrl(url: string): boolean {
  return /miro\.medium\.com\//i.test(url)
}
