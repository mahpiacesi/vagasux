import {
  guiaTemas,
  guiaTipos,
  guiaTrilhas,
} from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes, superSite } from '@/lib/siteLinks'

export const SITE_ORIGIN = superSite.origin

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
    'Acreditamos que oportunidades transformam carreiras. Por isso, reunimos vagas, conteúdos e recursos em um só lugar.',
    {
      priority: 1,
      changefreq: 'weekly',
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
    'A maior comunidade de UX design do Brasil. Participe como membro, pessoa voluntária ou apoiadora.',
    { priority: 0.8 },
  ),
  page(
    routes.mentoria,
    'VagasUX · Mentoria',
    'Uma conversa individual com pessoas voluntárias da VagasUX para tirar dúvidas e refletir sobre o próximo passo em design.',
    { priority: 0.7 },
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
    { priority: 0.8 },
  ),
  page(
    routes.voluntariado,
    'VagasUX · Voluntariado',
    'Conheça as frentes, o time e como contribuir com a VagasUX no ritmo que você tem.',
    { priority: 0.7 },
  ),
  page(
    routes.parcerias,
    'VagasUX · Parcerias',
    'Empresas e escolas que apoiam a VagasUX com conteúdos, descontos e oportunidades para a comunidade.',
    { priority: 0.6 },
  ),
  page(
    routes.guia,
    'VagasUX · Guia do Product Designer',
    'Centenas de conteúdos curados para você aprender no seu ritmo, com trilhas, busca e caminhos para quem está começando.',
    { priority: 0.9 },
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
    'Curadoria de cursos de Product Design, UX e UI, com relatos de quem já fez.',
    { priority: 0.8 },
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
    'Mural de vagas de UX, Produto e Design da comunidade VagasUX. Só oportunidades publicadas, sem o ruído.',
    { priority: 0.8, changefreq: 'daily' },
  ),
  page(
    routes.curadoria,
    'VagasUX · Curadoria de vagas para iniciantes',
    'Estágio, trainee e júnior em UX e Product Design. Cada vaga passa pelo olhar de uma pessoa voluntária.',
    { priority: 0.8, changefreq: 'daily' },
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

/**
 * Permanent redirects from Super/Notion URLs and retired aliases
 * to the current canonical route. More specific paths come first.
 */
export const seoRedirects: SeoRedirect[] = [
  {
    source: '/guia-do-product-designer/faq-tira-duvidas',
    destination: guiaRoutes.faq,
  },
  {
    source: '/guia-do-product-designer/cursos/publicar-relato',
    destination: guiaRoutes.cursosPublicarRelato,
  },
  {
    source: '/guia-do-product-designer/cursos',
    destination: guiaRoutes.cursos,
  },
  {
    source: '/guia-do-product-designer',
    destination: guiaRoutes.home,
  },
  {
    source: '/guia-do-product-designer/:path*',
    destination: guiaRoutes.home,
  },
  { source: '/cursos', destination: guiaRoutes.cursos },
  { source: '/guia/tipo/cursos', destination: guiaRoutes.cursos },
  { source: '/eventos', destination: guiaRoutes.tipo('eventos') },
  { source: '/perfis-para-seguir', destination: guiaRoutes.home },
  { source: '/guia/tipo/canais', destination: guiaRoutes.home },
  { source: '/guia/tipo/artigos', destination: guiaRoutes.home },
  { source: '/glossario', destination: guiaRoutes.glossario },
  {
    source: '/primeiros-passos',
    destination: guiaRoutes.trilha('entender-o-basico'),
  },
  {
    source: '/trilhas/primeiros-passos',
    destination: guiaRoutes.trilha('entender-o-basico'),
  },
  {
    source: '/trilhas/portfolio-iniciante',
    destination: guiaRoutes.trilha('portfolio'),
  },
  {
    source: '/trilhas/ux-research-basics',
    destination: guiaRoutes.tema('research'),
  },
  {
    source: '/trilhas/design-systems-101',
    destination: guiaRoutes.tema('design-system'),
  },
  { source: '/a-comunidade', destination: routes.comunidade },
  { source: '/iniciantes-em-design/apenas-mentores', destination: routes.mentoria },
  { source: '/iniciantes-em-design', destination: routes.curadoria },
  { source: '/quem-organiza', destination: routes.voluntariado },
  { source: '/termos-e-polticas', destination: routes.termosEPoliticas },
  {
    source: '/guia/tema/fundamentos',
    destination: guiaRoutes.fundamentos,
  },
  {
    source: '/guia/tema/ferramentas',
    destination: guiaRoutes.ferramentas,
  },
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

export function listIndexableSeoRoutes(): SeoRoute[] {
  return seoRoutes.filter((entry) => entry.index)
}

/** Paths the future prerender step should visit at build time. */
export function listPrerenderPaths(): string[] {
  return listIndexableSeoRoutes().map((entry) => entry.path)
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
