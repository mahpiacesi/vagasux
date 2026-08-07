import type { IncomingMessage, ServerResponse } from 'node:http'

const allowedUrls = new Set([
  'https://cantunsee.space/',
  'https://mobbin.com/',
  'https://screensdesign.com/',
  'https://pageflows.com/',
  'https://webframe.xyz/',
  'https://theappfuel.com/',
  'https://chamjo.design/',
  'https://pttrns.com/',
  'https://land-book.com/',
  'https://scrnshts.club/',
  'https://interfaceingame.com/',
  'https://www.unsection.com/',
  'https://refero.design/',
  'https://element.eleme.io/#/en-US',
  'https://collectui.com/',
  'https://www.producthunt.com/',
  'https://designmunk.com/',
  'https://www.lapa.ninja/',
])

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

function sendJson(
  response: ServerResponse,
  body: { imageUrl: string | null },
  cacheControl: string,
  statusCode = 200,
) {
  response.statusCode = statusCode
  response.setHeader('Content-Type', 'application/json; charset=utf-8')
  response.setHeader('Cache-Control', cacheControl)
  response.end(JSON.stringify(body))
}

export default async function handler(
  request: IncomingMessage,
  serverResponse: ServerResponse,
) {
  if (request.method !== 'GET') {
    serverResponse.statusCode = 405
    serverResponse.end('Method not allowed')
    return
  }

  const sourceUrl = new URL(
    request.url ?? '/',
    `https://${request.headers.host ?? 'vagasux.vercel.app'}`,
  ).searchParams.get('url')
  if (!sourceUrl || !allowedUrls.has(sourceUrl)) {
    serverResponse.statusCode = 400
    serverResponse.end('Link não autorizado')
    return
  }

  try {
    const fetchedPage = await fetch(sourceUrl, {
      headers: {
        Accept: 'text/html,application/xhtml+xml',
        'User-Agent': 'VagasUX Link Preview/1.0',
      },
      signal: AbortSignal.timeout(5000),
    })

    if (!fetchedPage.ok) {
      sendJson(
        serverResponse,
        { imageUrl: null },
        'public, s-maxage=3600',
      )
      return
    }

    const imageUrl = getOpenGraphImage(
      await fetchedPage.text(),
      fetchedPage.url,
    )

    sendJson(
      serverResponse,
      { imageUrl },
      'public, s-maxage=86400, stale-while-revalidate=604800',
    )
  } catch {
    sendJson(
      serverResponse,
      { imageUrl: null },
      'public, s-maxage=3600',
    )
  }
}
