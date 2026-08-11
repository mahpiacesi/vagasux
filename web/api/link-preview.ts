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
  'https://www.figma.com/best-practices/',
  'https://awesomefigmatips.com/',
  'https://www.figma.com/resource-library/design-basics/',
  'https://www.figma.com/best-practices/tips-and-tricks/',
  'https://www.figma.com/best-practices/team-file-organization/',
  'https://www.figma.com/release-notes/',
  'https://www.figma.com/community',
  'https://www.cursae.com.br/play-course/figma-criando-interfaces-do-zero-ate-o-prototipo-final/introducao-ao-figma',
  'https://friends.figma.com/',
  'https://friends.figma.com/sao-paulo/',
  'https://x.com/figma',
  'https://www.figma.com/blog/',
  'https://config.figma.com/',
  'https://framer.com/',
  'https://icons8.com.br/lunacy',
  'https://webflow.com/',
  'https://www.sketch.com/',
  'https://www.axure.com/',
  'https://www.uxpin.com/',
  'http://marvelapp.com/',
  'https://penpot.app/',
  'https://www.protopie.io/',
  'https://www.canva.com/pt_br/',
  'https://chatgpt.com/pt-BR/',
  'https://gemini.google.com/',
  'https://claude.ai/login',
  'https://copilot.microsoft.com/',
  'https://www.perplexity.ai/',
  'https://www.deepseek.com/',
  'https://cursor.com/',
  'https://claude.com/product/claude-code',
  'https://v0.app/',
  'https://lovable.dev/pt-br',
  'https://bolt.new/',
  'https://n8n.io/',
  'https://www.make.com/en',
  'https://zapier.com/',
  'https://pipedream.com/',
  'https://kling.ai/',
  'https://hailuoai.video/',
  'https://www.synthesia.io/pt-br',
  'https://www.bing.com/images/create/ai-image-generator',
  'https://lumalabs.ai/app',
  'https://lensa.app/',
  'https://tomeapp.ai/',
  'https://pair.withgoogle.com/guidebook/',
  'https://www.openui.com/',
  'https://ui.shadcn.com/',
  'https://learnprompting.org/pt/docs/introduction',
  'https://futuretools.io/',
  'https://quillbot.com/',
  'https://punkmetrics.com/skills-de-design-para-claude-code/',
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

async function getUnfurlImage(sourceUrl: string) {
  try {
    const params = new URLSearchParams({ url: sourceUrl, meta: 'true' })
    const response = await fetch(`https://api.microlink.io/?${params}`, {
      signal: AbortSignal.timeout(8000),
    })
    if (!response.ok) return null

    const data = (await response.json()) as {
      data?: { image?: { url?: unknown } }
    }

    return typeof data.data?.image?.url === 'string'
      ? data.data.image.url
      : null
  } catch {
    return null
  }
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

  let imageUrl: string | null = null

  try {
    const fetchedPage = await fetch(sourceUrl, {
      headers: {
        Accept: 'text/html,application/xhtml+xml',
        'User-Agent': 'VagasUX Link Preview/1.0',
      },
      signal: AbortSignal.timeout(5000),
    })

    if (fetchedPage.ok) {
      imageUrl = getOpenGraphImage(
        await fetchedPage.text(),
        fetchedPage.url,
      )
    }
  } catch {}

  if (!imageUrl) imageUrl = await getUnfurlImage(sourceUrl)

  sendJson(
    serverResponse,
    { imageUrl },
    imageUrl
      ? 'public, s-maxage=86400, stale-while-revalidate=604800'
      : 'public, s-maxage=3600',
  )
}
