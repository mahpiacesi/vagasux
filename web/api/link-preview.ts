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
  'https://styles.refero.design/',
  'https://learnprompting.org/pt/docs/introduction',
  'https://futuretools.io/',
  'https://quillbot.com/',
  'https://punkmetrics.com/skills-de-design-para-claude-code/',
  'http://guidetouxr.com/',
  'https://www.uxlibrary.org/',
  'https://lawsofux.com/',
  'https://www.reallygoodux.io/',
  'https://littlebigdetails.com/',
  'https://medium.com/aela/jornada-do-usu%C3%A1rio-o-que-%C3%A9-e-sua-import%C3%A2ncia-em-ux-design-f8ac0cb025ca',
  'https://medium.com/aela/teste-de-usabilidade-o-que-voc%C3%AA-precisa-saber-39a36343d9a6',
  'https://maze.design/',
  'https://www.useberry.com/',
  'https://www.userlytics.com/',
  'https://uxpressia.com/',
  'https://toolbox.hyperisland.com/',
  'https://www.designkit.org/methods.html',
  'https://usepastel.com/',
  'https://userbitapp.com/',
  'https://answerthepublic.com/',
  'https://brasil.uxdesign.cc/open-card-sorter-em-busca-de-uma-ferramenta-de-card-sorting-para-chamar-de-nossa-b821a41d3fa4',
  'https://dovetailapp.com/',
  'https://www.hubspot.com/make-my-persona',
  'https://talebook.io/',
  'https://pt.surveymonkey.com/mp/sample-size-calculator/',
  'https://brasil.uxdesign.cc/ux-writing-o-que-%C3%A9-e-por-onde-come%C3%A7ar-ace250650187',
  'https://brasil.uxdesign.cc/ux-writing-muito-al%C3%A9m-das-palavras-9669af8ed76e',
  'https://medium.com/uxcopy-co/as-muitas-poss%C3%ADveis-facetas-de-ux-writing-4ce32648c6c1',
  'https://medium.com/@camilagaidarji/ux-writing-copywriting-e-web-writing-s%C3%A3o-escritas-completamente-diferentes-4e3d516abc33',
  'https://goodmicrocopy.com/',
  'https://medium.com/@aleperiardux/como-criar-um-portf%C3%B3lio-de-ux-writer-em-2025-passo-a-passo-com-dicas-exemplos-e-links-%C3%BAteis-862780a291a8',
  'https://brasil.uxdesign.cc/como-a-colabora%C3%A7%C3%A3o-d%C3%A1-vida-as-palavras-fbb5c5a59659',
  'https://www.speakhuman.today/',
  'https://dailyuxwriting.com/',
  'https://clarice.ai/',
  'https://brasil.uxdesign.cc/reposit%C3%B3rio-de-ux-writing-conte%C3%BAdos-e-refer%C3%AAncias-da-%C3%A1rea-em-um-s%C3%B3-lugar-a201dcf22a41',
  'https://docs.google.com/spreadsheets/d/1Vbz0oagCqE3a2jUu0kblfBEz8mEXSSsQuAJIHnCmNyc/edit?usp=sharing',
  'https://blog.usejournal.com/a-mega-list-of-ux-writing-resources-d9f200d6dfde',
  'https://uxdesign.cc/best-ux-writing-portfolios-2019-update-7e6a066631af',
  'https://codelabs.developers.google.com/codelabs/material-communication-guidance?utm_source=google-io21&utm_medium=referral&utm_campaign=io21-resources#0',
  'https://medium.com/@paulodasilva233/guias-de-voz-tom-em-portugues-db47f7624ab1',
  'https://medium.com/design-contaazul/como-come%C3%A7amos-a-estruturar-ux-writing-na-conta-azul-com-um-guia-de-reda%C3%A7%C3%A3o-5dd516315ee3',
  'https://medium.com/vindi/voz-e-tom-da-vindi-como-come%C3%A7amos-a-construir-o-nosso-guia-11c1692c15da',
  'https://docs.google.com/spreadsheets/d/1vXDJ4CcRSCP_FGgdrAJgcKdU9KuR7gFDyWfMH3JFrJ0/edit?usp=sharing',
  'https://www.nngroup.com/articles/design-systems-101/',
  'https://www.figma.com/blog/design-systems-101-what-is-a-design-system/',
  'https://medium.com/meiuca/2-seu-design-system-%C3%A9-um-produto-1018e81be045',
  'https://medium.com/airbnb-design/building-a-visual-language-behind-the-scenes-of-our-airbnb-design-system-224748775e4e',
  'https://medium.com/quintoandar-design/construindo-design-systems-inclusivos-11143a16b2fb',
  'https://medium.com/meiuca/3-o-que-%C3%A9-design-ops-muita-coisa-5d23bafcc7bd',
  'https://documenting.design/',
  'https://principles.design/',
  'https://designsystemchecklist.com/',
  'https://www.uiguideline.com/',
  'https://www.zeroheight.com/',
  'https://www.supernova.io/',
  'https://storybook.js.org/',
  'https://specifyapp.com/',
  'https://www.duetds.com/designers/',
  'https://www.designsystems.com/',
  'https://designsystemsrepo.com/',
  'https://designsystemsbrasileiros.com/',
  'https://heydesign.systems/',
  'https://www.carbondesignsystem.com/',
  'https://polaris.shopify.com/',
  'https://atlassian.design/',
  'https://spectrum.adobe.com/',
  'https://contaazul.design/',
  'https://bold.bridge.ufsc.br/pt/',
  'https://playbook.ebay.com/',
  'https://whocanuse.com/',
  'https://learnui.design/tools/accessible-color-generator.html?colors=ff9f2f',
  'http://projects.susielu.com/viz-palette',
  'http://contrast-grid.eightshapes.com/',
  'https://colourcontrast.cc/',
  'https://leonardocolor.io/#',
  'https://colorffy.com/',
  'https://www.shadegenerator.com/',
  'https://www.radix-ui.com/colors',
  'https://colors.muz.li/',
  'https://colorleap.app/home',
  'https://picular.co/',
  'https://material.io/tools/color/#!/',
  'https://colourco.de/',
  'http://paletton.com/',
  'https://duotone.shapefactory.co/',
  'https://colorsupplyyy.com/app/',
  'https://flatuicolors.com/',
  'https://www.webdesignrankings.com/resources/lolcolors/',
  'https://colormixer.web.app/',
  'https://color.adobe.com/pt/',
  'https://coolors.co/',
  'https://hihayk.github.io/scale/',
  'https://www.mshr.app/create/new',
  'https://csshero.org/mesher/',
  'https://uigradients.com/',
  'https://mycolor.space/',
  'https://cssgradient.io/',
  'https://www.grabient.com/',
  'https://mobilepalette.colorion.co/',
  'https://sketchsheets.com/',
  'https://gridprint.in/',
  'https://sneakpeekit.com/',
  'https://uiprint.co/',
  'https://www.typewolf.com/',
  'https://fontjoy.com/',
  'https://fonts.google.com/',
  'https://fonts.adobe.com/',
  'https://www.fontsquirrel.com/',
  'https://prowebtype.com/',
  'https://type.method.ac/',
  'https://justmytype.co/',
  'https://fontsinuse.com/',
  'https://uncut.wtf/',
  'https://www.youtube.com/playlist?list=PLKbAmHQYDSaNodtj4fMHb3BJBOag7JC81',
  'https://thenounproject.com/',
  'https://www.streamlineicons.com/',
  'https://iconic.app/',
  'https://fonts.google.com/icons',
  'https://fontawesome.com/',
  'https://heroicons.com/',
  'https://orioniconlibrary.com/',
  'https://icomoon.io/',
  'https://icons8.com/line-awesome',
  'https://nucleoapp.com/',
  'https://www.flaticon.com/',
  'https://fontello.com/',
  'https://iconset.io/',
  'https://storytale.io/',
  'https://blush.design/',
  'https://www.figma.com/community/file/842934129022914364',
  'https://www.ls.graphics/illustrations',
  'https://control.rocks/',
  'https://icons8.com/illustrations',
  'https://undraw.co/illustrations',
  'https://www.drawkit.io/',
  'https://www.humaaans.com/',
  'https://stubborn.fun/',
  'https://fresh-folk.com/',
  'https://www.opendoodles.com/',
  'https://www.openpeeps.com/',
  'https://products.ls.graphics/wrrooom',
  'https://www.pixeltrue.com/free-illustrations',
  'https://sapiens.ui8.net/',
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
