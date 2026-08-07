import { guiaTemaUxLinkSections } from '../src/data/guiaTemaUxLinks'

const allowedUrls = new Set(
  guiaTemaUxLinkSections.flatMap((section) =>
    section.links.map((link) => link.url),
  ),
)

function getAttribute(tag: string, attribute: string) {
  const match = tag.match(
    new RegExp(`${attribute}\\s*=\\s*["']([^"']+)["']`, 'i'),
  )
  return match?.[1]?.trim() ?? null
}

function getOpenGraphImage(html: string, pageUrl: string) {
  const metaTags = html.match(/<meta\b[^>]*>/gi) ?? []

  for (const tag of metaTags) {
    const key = getAttribute(tag, 'property') ?? getAttribute(tag, 'name')
    if (key?.toLowerCase() !== 'og:image') continue

    const content = getAttribute(tag, 'content')
    if (!content) continue

    try {
      return new URL(content, pageUrl).href
    } catch {
      return null
    }
  }

  for (const tag of metaTags) {
    const key = getAttribute(tag, 'property') ?? getAttribute(tag, 'name')
    if (key?.toLowerCase() !== 'twitter:image') continue

    const content = getAttribute(tag, 'content')
    if (!content) continue

    try {
      return new URL(content, pageUrl).href
    } catch {
      return null
    }
  }

  return null
}

export default async function handler(request: Request) {
  if (request.method !== 'GET') {
    return new Response('Method not allowed', { status: 405 })
  }

  const sourceUrl = new URL(
    request.url,
    'https://vagasux.vercel.app',
  ).searchParams.get('url')
  if (!sourceUrl || !allowedUrls.has(sourceUrl)) {
    return new Response('Link não autorizado', { status: 400 })
  }

  try {
    const response = await fetch(sourceUrl, {
      headers: {
        Accept: 'text/html,application/xhtml+xml',
        'User-Agent': 'VagasUX Link Preview/1.0',
      },
      signal: AbortSignal.timeout(5000),
    })

    if (!response.ok) {
      return Response.json(
        { imageUrl: null },
        { headers: { 'Cache-Control': 'public, s-maxage=3600' } },
      )
    }

    const imageUrl = getOpenGraphImage(await response.text(), response.url)

    return Response.json(
      { imageUrl },
      {
        headers: {
          'Cache-Control':
            'public, s-maxage=86400, stale-while-revalidate=604800',
        },
      },
    )
  } catch {
    return Response.json(
      { imageUrl: null },
      { headers: { 'Cache-Control': 'public, s-maxage=3600' } },
    )
  }
}
