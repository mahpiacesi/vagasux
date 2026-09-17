import {
  guiaTemas,
  guiaTipos,
  guiaTrilhas,
} from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'
import {
  communityHashes,
  guiaHashes,
  routes,
  superSite,
} from '@/lib/siteLinks'

export const SITE_ORIGIN = superSite.origin

/** Social covers in `web/public/og`. Not shown as page UI. */
const ogImages = {
  home: '/og/home.png',
  comunidade: '/og/comunidade.png',
  mentoria: '/og/mentoria.png',
  voluntariado: '/og/voluntariado.png',
  parcerias: '/og/parcerias.png',
  guia: '/og/guia.png',
  cursos: '/og/cursos.png',
  oportunidades: '/og/oportunidades.png',
  curadoria: '/og/vagas-para-iniciantes.png',
  guilda: '/og/guilda.png',
} as const

/** Cover kept for a future in-app /publicar-vaga page. */
export const reservedOgImages = {
  publicarVaga: '/og/publicar-vaga.png',
} as const

export type SeoChangefreq =
  | 'always'
  | 'hourly'
  | 'daily'
  | 'weekly'
  | 'monthly'
  | 'yearly'

export type SeoRoute = {
  path: string
  title: string
  /** Meta description / Open Graph only. Not rendered as visible page copy. */
  description: string
  /** When false, the page stays out of sitemap.xml and sends robots noindex. */
  index: boolean
  changefreq?: SeoChangefreq
  priority?: number
  ogType?: 'website' | 'article'
  image?: string
  jsonLd?: Record<string, unknown>
}

export type SeoRedirect = {
  source: string
  destination: string
  permanent?: boolean
}

const DEDICATED_THEME_PATH: Record<string, string> = {
  fundamentos: guiaRoutes.fundamentos,
  ferramentas: guiaRoutes.ferramentas,
}

function page(
  path: string,
  title: string,
  description: string,
  extras: Partial<Omit<SeoRoute, 'path' | 'title' | 'description'>> = {},
): SeoRoute {
  return {
    path,
    title,
    description,
    index: extras.index ?? true,
    changefreq: extras.changefreq ?? 'weekly',
    priority: extras.priority ?? 0.6,
    ogType: extras.ogType ?? 'website',
    image: extras.image,
    jsonLd: extras.jsonLd,
  }
}

const staticPages: SeoRoute[] = [
  page(
    routes.home,
    'VagasUX · Curadoria de conteúdos e vagas em UX',
    'Curadoria de conteúdos e vagas em UX para todos os níveis, todos mesmo.',
    {
      priority: 1,
      changefreq: 'weekly',
      image: ogImages.home,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'VagasUX',
        url: `${SITE_ORIGIN}/`,
        inLanguage: 'pt-BR',
      },
    },
  ),
  page(
    routes.comunidade,
    'VagasUX · Comunidade',
    'Torne-se um Vaguiner e faça parte da comunidade VagasUX, com conteúdos, oportunidades, desafios e conexões para quem vive UX, UI e Product Design.',
    { priority: 0.8, image: ogImages.comunidade },
  ),
  page(
    routes.mentoria,
    'VagasUX · Mentoria',
    'Mentoria em UX, UI e Product Design para quem busca orientação de carreira, desenvolvimento profissional e apoio para definir os próximos passos.',
    { priority: 0.7, image: ogImages.mentoria },
  ),
  page(
    routes.mentorado,
    'VagasUX · Solicitar mentoria',
    'Formulário para solicitar uma conversa de mentoria com pessoas voluntárias da VagasUX.',
    { index: false },
  ),
  page(
    routes.pessoaMentora,
    'VagasUX · Candidatura de pessoa mentora',
    'Formulário para quem quer entrar na lista de interesse de pessoas mentoras da VagasUX.',
    { index: false },
  ),
  page(
    routes.guilda,
    'VagasUX · Guilda do Vaguiner',
    'Comunidade exclusiva da VagasUX, com encontros, mentoria e acompanhamento para quem está construindo carreira em UX.',
    { priority: 0.8, image: ogImages.guilda },
  ),
  page(
    routes.voluntariado,
    'VagasUX · Voluntariado',
    'Conheça as frentes, o time e como contribuir com a VagasUX no ritmo que você tem.',
    { priority: 0.7, image: ogImages.voluntariado },
  ),
  page(
    routes.parcerias,
    'VagasUX · Parcerias',
    'Empresas e escolas que apoiam a VagasUX com conteúdos, descontos e oportunidades para a comunidade.',
    { priority: 0.6, image: ogImages.parcerias },
  ),
  page(
    routes.guia,
    'VagasUX · Guia do Product Designer',
    'Guia de UX, UI e Product Design para iniciantes, com conteúdos e materiais sobre carreira, portfólio, pesquisa, interface e mercado de design.',
    { priority: 0.9, image: ogImages.guia },
  ),
  page(
    guiaRoutes.busca,
    'VagasUX · Guia · Busca',
    'Resultados de busca do Guia do Product Designer.',
    { index: false },
  ),
  page(
    guiaRoutes.fundamentos,
    'VagasUX · Guia · Fundamentos',
    'Cor, grid, tipografia, iconografia, ilustração e motion para começar em Product Design.',
    { priority: 0.8 },
  ),
  page(
    guiaRoutes.ferramentas,
    'VagasUX · Guia · Ferramentas',
    'Figma e outras ferramentas de criação, quadro de ideias e utilitários para o dia a dia em Product Design.',
    { priority: 0.8 },
  ),
  page(
    guiaRoutes.cursos,
    'VagasUX · Guia · Cursos',
    'Avaliações de cursos e especializações de UX, UI e Product Design com relatos da comunidade sobre conteúdos, experiências de aprendizado e custo-benefício.',
    { priority: 0.8, image: ogImages.cursos },
  ),
  page(
    guiaRoutes.cursosPublicarRelato,
    'VagasUX · Guia · Publicar relato de curso',
    'Envie um relato sobre um curso de Product Design, UX ou UI para a curadoria da VagasUX.',
    { index: false },
  ),
  page(
    guiaRoutes.faq,
    'VagasUX · Guia · FAQ',
    'Perguntas frequentes sobre carreira em Product Design, respondidas pela comunidade VagasUX.',
    { priority: 0.8 },
  ),
  page(
    guiaRoutes.glossario,
    'VagasUX · Guia · Glossário do Product Designer',
    'Termos de UX, UI, produto e carreira explicados em linguagem direta, no Guia da VagasUX.',
    { priority: 0.7 },
  ),
  page(
    routes.codigoDeConduta,
    'VagasUX · Código de conduta',
    'Diretrizes para um ambiente seguro, respeitoso e alinhado aos objetivos da comunidade VagasUX.',
    { priority: 0.3, changefreq: 'yearly' },
  ),
  page(
    routes.termosEPoliticas,
    'VagasUX · Termos e Políticas',
    'Regras de uso da plataforma, divulgação de vagas, curadoria editorial e publicação de feedbacks de cursos.',
    { priority: 0.3, changefreq: 'yearly' },
  ),
  page(
    routes.oportunidades,
    'VagasUX · Mural de vagas',
    'Encontre vagas e oportunidades em UX, UI e Product Design com nosso buscador, que reúne diariamente novas vagas de diversas plataformas, além de oportunidades indicadas pela comunidade VagasUX.',
    { priority: 0.8, changefreq: 'daily', image: ogImages.oportunidades },
  ),
  page(
    routes.curadoria,
    'VagasUX · Curadoria de vagas para iniciantes',
    'Encontre vagas de estágio, trainee e júnior em UX, UI e Product Design. Uma curadoria de oportunidades para quem está começando a carreira em design e tecnologia.',
    { priority: 0.8, changefreq: 'daily', image: ogImages.curadoria },
  ),
]

const trilhaTitleOverrides: Record<string, string> = {
  'entender-o-basico':
    'Entender o básico | Guia do Product Designer | VagasUX',
}

const trilhaPages: SeoRoute[] = guiaTrilhas.map((trilha) =>
  page(
    guiaRoutes.trilha(trilha.id),
    trilhaTitleOverrides[trilha.id] ?? `VagasUX · Guia · ${trilha.title}`,
    trilha.id === 'entender-o-basico'
      ? 'Uma trilha para quem está começando em Product Design. Entenda a área, conheça o processo e descubra por onde começar.'
      : trilha.description,
    { priority: 0.8 },
  ),
)

const temaPages: SeoRoute[] = guiaTemas
  .filter((tema) => !DEDICATED_THEME_PATH[tema.id])
  .map((tema) =>
    page(
      guiaRoutes.tema(tema.id),
      `VagasUX · Guia · ${tema.title}`,
      `Referências de ${tema.title} no Guia do Product Designer da VagasUX.`,
      { priority: 0.7 },
    ),
  )

const tipoPages: SeoRoute[] = guiaTipos.map((tipo) =>
  page(
    guiaRoutes.tipo(tipo.id),
    `VagasUX · Guia · ${tipo.title}`,
    tipo.description ??
      `${tipo.title} de design, produto e UX curados pela comunidade VagasUX.`,
    { priority: 0.7 },
  ),
)

export const seoRoutes: SeoRoute[] = [
  ...staticPages,
  ...trilhaPages,
  ...temaPages,
  ...tipoPages,
]

const seoRouteByPath = new Map(seoRoutes.map((entry) => [entry.path, entry]))

function redirect(source: string, destination: string): SeoRedirect {
  return { source, destination }
}

/**
 * Permanent redirects from Super/Notion URLs and retired aliases
 * to the current canonical route. More specific paths come first.
 */
export const seoRedirects: SeoRedirect[] = [
  redirect('/guia-do-product-designer/faq-tira-duvidas', guiaRoutes.faq),
  redirect(
    '/guia-do-product-designer/cursos/publicar-relato',
    guiaRoutes.cursosPublicarRelato,
  ),
  redirect('/guia-do-product-designer/cursos', guiaRoutes.cursos),
  redirect(
    '/guia-do-product-designer/carreira/portfolio',
    guiaRoutes.trilha('portfolio'),
  ),
  redirect(
    '/guia-do-product-designer/carreira/freelancer',
    guiaRoutes.trilha('freelancer'),
  ),
  redirect(
    '/guia-do-product-designer/carreira/carreira-internacional',
    guiaRoutes.trilha('vagas-internacionais'),
  ),
  redirect(
    '/guia-do-product-designer/carreira/voluntariado',
    guiaRoutes.trilha('voluntariado'),
  ),
  redirect(
    '/guia-do-product-designer/carreira/currculo',
    guiaRoutes.trilha('primeira-vaga'),
  ),
  redirect(
    '/guia-do-product-designer/carreira/curriculo',
    guiaRoutes.trilha('primeira-vaga'),
  ),
  redirect(
    '/guia-do-product-designer/carreira/transicoes',
    guiaRoutes.trilha('primeira-vaga'),
  ),
  redirect(
    '/guia-do-product-designer/carreira',
    `${guiaRoutes.home}#${guiaHashes.trilhas}`,
  ),
  redirect(
    '/guia-do-product-designer/sobre-a-area',
    guiaRoutes.trilha('entender-o-basico'),
  ),
  redirect(
    '/guia-do-product-designer/primeiros-passos',
    guiaRoutes.trilha('entender-o-basico'),
  ),
  redirect('/guia-do-product-designer/recursos/ui', guiaRoutes.tema('ui')),
  redirect(
    '/guia-do-product-designer/recursos/acessibilidade',
    guiaRoutes.tema('acessibilidade'),
  ),
  redirect(
    '/guia-do-product-designer/recursos/diversidade',
    guiaRoutes.tema('diversidade'),
  ),
  redirect(
    '/guia-do-product-designer/recursos/design-system',
    guiaRoutes.tema('design-system'),
  ),
  redirect(
    '/guia-do-product-designer/recursos/metricas',
    guiaRoutes.tema('metricas'),
  ),
  redirect('/guia-do-product-designer/recursos/ia', guiaRoutes.tema('ia')),
  redirect(
    '/guia-do-product-designer/recursos/writing',
    guiaRoutes.tema('content-design'),
  ),
  redirect(
    '/guia-do-product-designer/recursos/ferramentas',
    guiaRoutes.ferramentas,
  ),
  redirect(
    '/guia-do-product-designer/recursos/quadro-de-ideias',
    guiaRoutes.ferramentas,
  ),
  redirect(
    '/guia-do-product-designer/recursos/utilitarios',
    guiaRoutes.ferramentas,
  ),
  redirect(
    '/guia-do-product-designer/recursos/geradores',
    guiaRoutes.ferramentas,
  ),
  redirect(
    '/guia-do-product-designer/recursos/gravacoes',
    guiaRoutes.ferramentas,
  ),
  redirect(
    '/guia-do-product-designer/recursos/bancos-de-imagens',
    guiaRoutes.ferramentas,
  ),
  redirect(
    '/guia-do-product-designer/recursos/organizacao-gerenciamento',
    guiaRoutes.ferramentas,
  ),
  redirect(
    '/guia-do-product-designer/recursos/cores',
    guiaRoutes.fundamentos,
  ),
  redirect(
    '/guia-do-product-designer/recursos/grids',
    guiaRoutes.fundamentos,
  ),
  redirect(
    '/guia-do-product-designer/recursos/tipografia',
    guiaRoutes.fundamentos,
  ),
  redirect(
    '/guia-do-product-designer/recursos/icones',
    guiaRoutes.fundamentos,
  ),
  redirect(
    '/guia-do-product-designer/recursos/ilustracoes',
    guiaRoutes.fundamentos,
  ),
  redirect(
    '/guia-do-product-designer/recursos/animacao',
    guiaRoutes.fundamentos,
  ),
  redirect('/guia-do-product-designer/recursos/ux', guiaRoutes.home),
  redirect(
    '/guia-do-product-designer/recursos',
    `${guiaRoutes.home}#${guiaHashes.temas}`,
  ),
  redirect(
    '/guia-do-product-designer/conteudos/videos',
    guiaRoutes.tipo('videos'),
  ),
  redirect(
    '/guia-do-product-designer/conteudos/livros',
    guiaRoutes.tipo('livros'),
  ),
  redirect(
    '/guia-do-product-designer/conteudos/podcasts',
    guiaRoutes.tipo('podcasts'),
  ),
  redirect(
    '/guia-do-product-designer/conteudos/newsletters',
    guiaRoutes.tipo('newsletters'),
  ),
  redirect('/guia-do-product-designer/conteudos/artigos', guiaRoutes.home),
  redirect(
    '/guia-do-product-designer/conteudos',
    `${guiaRoutes.home}#${guiaHashes.tipos}`,
  ),
  redirect(
    '/guia-do-product-designer/eventos',
    guiaRoutes.tipo('eventos'),
  ),
  redirect(
    '/guia-do-product-designer/trilhas',
    `${guiaRoutes.home}#${guiaHashes.trilhas}`,
  ),
  redirect(
    '/guia-do-product-designer/perfis-para-seguir/grupos-no-whatsapp',
    `${routes.comunidade}#${communityHashes.canaisAbertos}`,
  ),
  redirect('/guia-do-product-designer/perfis-para-seguir', guiaRoutes.home),
  redirect('/guia-do-product-designer', guiaRoutes.home),
  redirect('/guia-do-product-designer/:path+', guiaRoutes.home),
  redirect('/cursos', guiaRoutes.cursos),
  redirect('/guia/tipo/cursos', guiaRoutes.cursos),
  redirect('/eventos', guiaRoutes.tipo('eventos')),
  redirect('/perfis-para-seguir', guiaRoutes.home),
  redirect('/guia/tipo/canais', guiaRoutes.home),
  redirect('/guia/tipo/artigos', guiaRoutes.home),
  redirect('/glossario', guiaRoutes.glossario),
  redirect('/primeiros-passos', guiaRoutes.trilha('entender-o-basico')),
  redirect('/trilhas/primeiros-passos', guiaRoutes.trilha('entender-o-basico')),
  redirect('/trilhas/portfolio-iniciante', guiaRoutes.trilha('portfolio')),
  redirect('/trilhas/ux-research-basics', guiaRoutes.tema('research')),
  redirect('/trilhas/design-systems-101', guiaRoutes.tema('design-system')),
  redirect('/a-comunidade', routes.comunidade),
  redirect('/iniciantes-em-design/apenas-mentores', routes.mentoria),
  redirect('/iniciantes-em-design', routes.curadoria),
  redirect('/quem-organiza', routes.voluntariado),
  redirect('/termos-e-polticas', routes.termosEPoliticas),
  redirect('/guia/tema/fundamentos', guiaRoutes.fundamentos),
  redirect('/guia/tema/ferramentas', guiaRoutes.ferramentas),
  redirect(
    '/vagas-para-iniciantes/apenas-vagas-remoto',
    `${routes.curadoria}?workModel=remote`,
  ),
  redirect(
    '/vagas-para-iniciantes/apenas-vagas-em-sp',
    `${routes.curadoria}?state=SP`,
  ),
  redirect(
    '/vagas-para-iniciantes/apenas-vagas-no-rj',
    `${routes.curadoria}?state=RJ`,
  ),
  redirect(
    '/vagas-para-iniciantes/apenas-vagas-em-mg',
    `${routes.curadoria}?state=MG`,
  ),
  redirect(
    '/vagas-para-iniciantes/apenas-vagas-de-estgio',
    `${routes.curadoria}?seniority=intern`,
  ),
  redirect(
    '/vagas-para-iniciantes/apenas-vagas-de-estagio',
    `${routes.curadoria}?seniority=intern`,
  ),
  redirect('/vagas-para-iniciantes/:path+', routes.curadoria),
  redirect(
    '/oportunidades/vagas-remotas',
    `${routes.oportunidades}?workModel=remote`,
  ),
  redirect(
    '/oportunidades/vagas-em-so-paulo-sp',
    `${routes.oportunidades}?state=SP`,
  ),
  redirect(
    '/oportunidades/vagas-no-rio-de-janeiro-rj',
    `${routes.oportunidades}?state=RJ`,
  ),
  redirect(
    '/oportunidades/vagas-em-minas-gerais-mg',
    `${routes.oportunidades}?state=MG`,
  ),
  redirect(
    '/oportunidades/apenas-vagas-em-portugal',
    `${routes.oportunidades}?market=international`,
  ),
  redirect(
    '/oportunidades/apenas-vagas-de-product-designer',
    `${routes.oportunidades}?discipline=ux`,
  ),
  redirect(
    '/oportunidades/apenas-vagas-de-ui-designer',
    `${routes.oportunidades}?discipline=ui`,
  ),
  redirect(
    '/oportunidades/apenas-vagas-de-ux-designer',
    `${routes.oportunidades}?discipline=ux`,
  ),
  redirect(
    '/oportunidades/apenas-vagas-de-ux-research',
    `${routes.oportunidades}?discipline=ux_research`,
  ),
  redirect(
    '/oportunidades/vagas-de-design-system-e-ops',
    `${routes.oportunidades}?discipline=design_ops`,
  ),
  redirect(
    '/oportunidades/vagas-de-ux-writing',
    `${routes.oportunidades}?discipline=content_design`,
  ),
  redirect('/oportunidades/:path+', routes.oportunidades),
]

/** @deprecated Use seoRedirects. Kept so existing notes keep working. */
export const guiaLegacyRedirects = seoRedirects

export function canonicalUrl(path: string): string {
  if (path === '/') return `${SITE_ORIGIN}/`
  return `${SITE_ORIGIN}${path}`
}

export function getSeoRoute(pathname: string): SeoRoute | undefined {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  return seoRouteByPath.get(normalized)
}

/** First matching Vercel-style redirect for a pathname (no query string). */
export function matchSeoRedirect(pathname: string): SeoRedirect | undefined {
  const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  for (const redirect of seoRedirects) {
    if (redirect.source === normalized) return redirect
    const wildcard = redirect.source.match(/^(.*)\/:path([+*])$/)
    if (!wildcard) continue
    const prefix = wildcard[1]
    const includeRoot = wildcard[2] === '*'
    if (includeRoot && normalized === prefix) return redirect
    if (normalized.startsWith(`${prefix}/`)) return redirect
  }
}

export function listIndexableSeoRoutes(): SeoRoute[] {
  return seoRoutes.filter((entry) => entry.index)
}

/** Paths written as static HTML at build time. */
export function listPrerenderPaths(): string[] {
  return listIndexableSeoRoutes().map((entry) => entry.path)
}

export function distFileForPrerenderPath(path: string): string {
  if (path === '/') return 'index.html'
  return `${path.replace(/^\//, '')}/index.html`
}

export function applyPrerenderHtml(
  template: string,
  path: string,
  appHtml: string,
): string {
  const entry = getSeoRoute(path)
  const title =
    entry?.title ?? 'VagasUX · Curadoria de conteúdos e vagas em UX'
  const description =
    entry?.description ??
    'Acreditamos que oportunidades transformam carreiras. Por isso, reunimos vagas, conteúdos e recursos em um só lugar.'
  const url = canonicalUrl(entry?.path ?? path)
  const robots = entry?.index === false ? 'noindex,follow' : 'index,follow'
  const ogType = entry?.ogType ?? 'website'
  const image = entry?.image
    ? entry.image.startsWith('http')
      ? entry.image
      : `${SITE_ORIGIN}${entry.image}`
    : undefined

  let html = stripPrerenderHead(template)
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${escapeXml(title)}</title>`)
  html = replaceOrInsertMeta(html, 'name', 'description', description)

  const extras = [
    `<meta name="robots" content="${escapeXml(robots)}" />`,
    `<link rel="canonical" href="${escapeXml(url)}" />`,
    `<meta property="og:title" content="${escapeXml(title)}" />`,
    `<meta property="og:description" content="${escapeXml(description)}" />`,
    `<meta property="og:url" content="${escapeXml(url)}" />`,
    `<meta property="og:type" content="${escapeXml(ogType)}" />`,
    `<meta property="og:locale" content="pt_BR" />`,
    `<meta property="og:site_name" content="VagasUX" />`,
    `<meta name="twitter:card" content="${image ? 'summary_large_image' : 'summary'}" />`,
    `<meta name="twitter:title" content="${escapeXml(title)}" />`,
    `<meta name="twitter:description" content="${escapeXml(description)}" />`,
  ]

  if (image) {
    extras.push(`<meta property="og:image" content="${escapeXml(image)}" />`)
    extras.push(`<meta name="twitter:image" content="${escapeXml(image)}" />`)
  }

  if (entry?.jsonLd) {
    extras.push(
      `<script type="application/ld+json" data-seo-jsonld="true">${JSON.stringify(entry.jsonLd).replaceAll('<', '\\u003c')}</script>`,
    )
  }

  html = html.replace(/<\/head>/i, `    ${extras.join('\n    ')}\n  </head>`)
  return replaceRoot(html, appHtml)
}

function stripPrerenderHead(html: string): string {
  return html
    .replace(/\s*<meta name="robots"[^>]*>/gi, '')
    .replace(/\s*<link rel="canonical"[^>]*>/gi, '')
    .replace(/\s*<meta property="og:[^"]+"[^>]*>/gi, '')
    .replace(/\s*<meta name="twitter:[^"]+"[^>]*>/gi, '')
    .replace(
      /\s*<script type="application\/ld\+json"[^>]*data-seo-jsonld[^>]*>[\s\S]*?<\/script>/gi,
      '',
    )
}

function replaceRoot(html: string, appHtml: string): string {
  if (!/<div id="root">/i.test(html)) {
    throw new Error('Vite HTML template is missing <div id="root">')
  }
  const next = html.replace(
    /<div id="root">[\s\S]*<\/div>(\s*)<\/body>/i,
    `<div id="root">${appHtml}</div>$1</body>`,
  )
  if (next === html) {
    throw new Error('Could not replace #root in Vite HTML template')
  }
  return next
}

function replaceOrInsertMeta(
  html: string,
  attr: 'name' | 'property',
  key: string,
  content: string,
): string {
  const pattern = new RegExp(
    `<meta[^>]*${attr}=["']${key}["'][^>]*>`,
    'gi',
  )
  const tag = `<meta ${attr}="${key}" content="${escapeXml(content)}" />`
  const next = html.replace(pattern, tag)
  if (next !== html) return next
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`)
}

export function renderSitemapXml(): string {
  const urls = listIndexableSeoRoutes()
    .map((entry) => {
      const changefreq = entry.changefreq ?? 'weekly'
      const priority = (entry.priority ?? 0.5).toFixed(1)
      return `  <url>
    <loc>${escapeXml(canonicalUrl(entry.path))}</loc>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    })
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`
}

export function renderRobotsTxt(): string {
  const disallowed = seoRoutes
    .filter((entry) => !entry.index)
    .map((entry) => `Disallow: ${entry.path}`)
    .concat('Disallow: /dev/')

  return `User-agent: *
Allow: /

${disallowed.join('\n')}

Sitemap: ${SITE_ORIGIN}/sitemap.xml
`
}

export function renderVercelJson(): string {
  const redirects = seoRedirects.map((redirect) => ({
    source: redirect.source,
    destination: redirect.destination,
    permanent: redirect.permanent ?? true,
  }))

  return `${JSON.stringify(
    {
      redirects,
      rewrites: [{ source: '/(.*)', destination: '/index.html' }],
    },
    null,
    2,
  )}\n`
}

export function assertSeoCatalogInvariants(): void {
  const paths = seoRoutes.map((entry) => entry.path)
  const duplicatePaths = duplicates(paths)
  if (duplicatePaths.length > 0) {
    throw new Error(`SEO catalog has duplicate paths: ${duplicatePaths.join(', ')}`)
  }

  const sources = seoRedirects.map((entry) => entry.source)
  const duplicateSources = duplicates(sources)
  if (duplicateSources.length > 0) {
    throw new Error(`SEO redirects have duplicate sources: ${duplicateSources.join(', ')}`)
  }

  for (const trilha of guiaTrilhas) {
    const path = guiaRoutes.trilha(trilha.id)
    if (!seoRouteByPath.has(path)) {
      throw new Error(`Missing SEO route for trilha ${trilha.id}`)
    }
  }

  for (const tema of guiaTemas) {
    const canonical = DEDICATED_THEME_PATH[tema.id] ?? guiaRoutes.tema(tema.id)
    if (!seoRouteByPath.has(canonical)) {
      throw new Error(`Missing SEO route for tema ${tema.id} (${canonical})`)
    }
  }

  for (const tipo of guiaTipos) {
    const path = guiaRoutes.tipo(tipo.id)
    if (!seoRouteByPath.has(path)) {
      throw new Error(`Missing SEO route for tipo ${tipo.id}`)
    }
  }

  const sitemapPaths = new Set(listIndexableSeoRoutes().map((entry) => entry.path))
  for (const entry of seoRoutes) {
    if (!entry.index && sitemapPaths.has(entry.path)) {
      throw new Error(`noindex route leaked into sitemap: ${entry.path}`)
    }
  }

  const perfis = seoRedirects.find((entry) => entry.source === '/perfis-para-seguir')
  if (perfis?.destination !== guiaRoutes.home) {
    throw new Error('/perfis-para-seguir must redirect to /guia')
  }

  const researchBasics = seoRedirects.find(
    (entry) => entry.source === '/trilhas/ux-research-basics',
  )
  if (researchBasics?.destination !== guiaRoutes.tema('research')) {
    throw new Error('/trilhas/ux-research-basics must redirect to /guia/tema/research')
  }

  const designSystems = seoRedirects.find(
    (entry) => entry.source === '/trilhas/design-systems-101',
  )
  if (designSystems?.destination !== guiaRoutes.tema('design-system')) {
    throw new Error('/trilhas/design-systems-101 must redirect to /guia/tema/design-system')
  }

  const portfolio = matchSeoRedirect(
    '/guia-do-product-designer/carreira/portfolio',
  )
  if (portfolio?.destination !== guiaRoutes.trilha('portfolio')) {
    throw new Error(
      'old Guia portfolio URL must redirect to /guia/trilhas/portfolio',
    )
  }

  const remoteJobs = matchSeoRedirect(
    '/vagas-para-iniciantes/apenas-vagas-remoto',
  )
  if (remoteJobs?.destination !== `${routes.curadoria}?workModel=remote`) {
    throw new Error(
      'Apenas vagas remoto must redirect to /vagas-para-iniciantes?workModel=remote',
    )
  }

  const unknownGuia = matchSeoRedirect(
    '/guia-do-product-designer/conteudos/lista/qualquer-item',
  )
  if (unknownGuia?.destination !== guiaRoutes.home) {
    throw new Error('unknown Guia Super URLs must fall back to /guia')
  }
}

function duplicates(values: string[]): string[] {
  const seen = new Set<string>()
  const extra = new Set<string>()
  for (const value of values) {
    if (seen.has(value)) extra.add(value)
    seen.add(value)
  }
  return [...extra]
}

function escapeXml(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}
