const AMAZON_HOST_PATTERN =
  /(?:amazon\.(?:com(?:\.br)?|co\.uk|de|fr|es|it|ca|com\.mx|in|co\.jp)|amzn\.to|link\.amazon)/i

/** ASIN: 10 chars — ISBN-10 numérico ou Kindle (B + 9 alfanum.) */
const ASIN_PATTERN = /^[0-9A-Z]{10}$/i

/**
 * Extrai o ASIN de URLs Amazon comuns:
 * - /dp/ASIN, /gp/product/ASIN, /ebook/dp/ASIN
 * - query ?ASIN= ou &creativeASIN=
 * - link.amazon/ASIN (atalho interno)
 */
export function extractAmazonAsin(url: string): string | null {
  if (!url || !AMAZON_HOST_PATTERN.test(url)) return null

  try {
    const parsed = new URL(url.startsWith('http') ? url : `https://${url}`)

    const fromQuery =
      parsed.searchParams.get('ASIN') ??
      parsed.searchParams.get('creativeASIN') ??
      parsed.searchParams.get('asin')
    if (fromQuery && ASIN_PATTERN.test(fromQuery)) return fromQuery.toUpperCase()

    const segments = parsed.pathname.split('/').filter(Boolean)
    for (let i = 0; i < segments.length; i++) {
      const segment = segments[i]
      if (
        (segment === 'dp' ||
          segment === 'product' ||
          segment === 'gp' ||
          segment === 'ebook') &&
        segments[i + 1] &&
        ASIN_PATTERN.test(segments[i + 1])
      ) {
        return segments[i + 1].toUpperCase()
      }
      if (ASIN_PATTERN.test(segment)) return segment.toUpperCase()
    }

    if (parsed.hostname === 'link.amazon' && segments[0] && ASIN_PATTERN.test(segments[0])) {
      return segments[0].toUpperCase()
    }
  } catch {
    return null
  }

  return null
}

/**
 * Monta URL de capa a partir do link Amazon.
 * Padrão estável: m.media-amazon.com/images/P/{ASIN}.jpg
 * (equivalente ao legado images-na.ssl-images-amazon.com/images/P/{ASIN}.jpg)
 */
export function amazonCoverUrl(
  amazonUrl: string,
  size: '_SL250_' | '_SL500_' = '_SL500_',
): string | null {
  const asin = extractAmazonAsin(amazonUrl)
  if (!asin) return null

  if (size === '_SL500_') {
    return `https://m.media-amazon.com/images/P/${asin}.jpg`
  }

  return `https://m.media-amazon.com/images/P/${asin}.01.${size}.jpg`
}
