import assert from 'node:assert/strict'
import { existsSync, readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'
import {
  assertSeoCatalogInvariants,
  applyPrerenderHtml,
  distFileForPrerenderPath,
  getSeoRoute,
  listIndexableSeoRoutes,
  listPrerenderPaths,
  matchSeoRedirect,
  renderRobotsTxt,
  renderSitemapXml,
  renderVercelJson,
  reservedOgImages,
  seoRedirects,
  seoRoutes,
} from '../src/data/seoCatalog'
import { parseJobFiltersFromSearchParams } from '../src/lib/jobSearchParams'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')

describe('seo catalog', () => {
  it('passes invariants', () => {
    assert.doesNotThrow(() => assertSeoCatalogInvariants())
  })

  it('looks up public and noindex routes', () => {
    assert.equal(getSeoRoute('/guia/faq')?.index, true)
    assert.equal(getSeoRoute('/guia/busca')?.index, false)
    assert.equal(getSeoRoute('/mentoria/mentorado')?.index, false)
    assert.equal(
      getSeoRoute('/')?.description,
      'Curadoria de conteúdos e vagas em UX para todos os níveis, todos mesmo.',
    )
    assert.equal(
      getSeoRoute('/comunidade')?.description,
      'Torne-se um Vaguiner e faça parte da comunidade VagasUX, com conteúdos, oportunidades, desafios e conexões para quem vive UX, UI e Product Design.',
    )
    assert.equal(
      getSeoRoute('/guia')?.description,
      'Guia de UX, UI e Product Design para iniciantes, com conteúdos e materiais sobre carreira, portfólio, pesquisa, interface e mercado de design.',
    )
    assert.equal(
      getSeoRoute('/vagas-para-iniciantes')?.description,
      'Encontre vagas de estágio, trainee e júnior em UX, UI e Product Design. Uma curadoria de oportunidades para quem está começando a carreira em design e tecnologia.',
    )
    assert.equal(
      getSeoRoute('/oportunidades')?.description,
      'Encontre vagas e oportunidades em UX, UI e Product Design com nosso buscador, que reúne diariamente novas vagas de diversas plataformas, além de oportunidades indicadas pela comunidade VagasUX.',
    )
    assert.equal(
      getSeoRoute('/mentoria')?.description,
      'Mentoria em UX, UI e Product Design para quem busca orientação de carreira, desenvolvimento profissional e apoio para definir os próximos passos.',
    )
    assert.equal(
      getSeoRoute('/guia/cursos')?.description,
      'Avaliações de cursos e especializações de UX, UI e Product Design com relatos da comunidade sobre conteúdos, experiências de aprendizado e custo-benefício.',
    )
    assert.equal(getSeoRoute('/')?.image, '/og/home.png')
    assert.equal(getSeoRoute('/comunidade')?.image, '/og/comunidade.png')
    assert.equal(getSeoRoute('/guia')?.image, '/og/guia.png')
    assert.equal(
      getSeoRoute('/vagas-para-iniciantes')?.image,
      '/og/vagas-para-iniciantes.png',
    )
    assert.equal(getSeoRoute('/oportunidades')?.image, '/og/oportunidades.png')
    assert.equal(getSeoRoute('/mentoria')?.image, '/og/mentoria.png')
    assert.equal(getSeoRoute('/guia/cursos')?.image, '/og/cursos.png')
    assert.equal(getSeoRoute('/parcerias')?.image, '/og/parcerias.png')
    assert.equal(getSeoRoute('/voluntariado')?.image, '/og/voluntariado.png')
    assert.equal(getSeoRoute('/guilda')?.image, '/og/guilda.png')
    assert.equal(
      getSeoRoute('/sobre')?.title,
      'Sobre a VagasUX | Comunidade de UX, Produto e Design',
    )
    assert.equal(
      getSeoRoute('/sobre')?.description,
      'A VagasUX nasceu como curadoria de vagas e cresceu com a comunidade. Conheça a história, o propósito e quem constrói um espaço de UX, Produto e Design.',
    )
    assert.equal(getSeoRoute('/sobre')?.image, '/og/sobre.png')
    assert.equal(getSeoRoute('/guia/faq')?.image, undefined)
    assert.equal(reservedOgImages.publicarVaga, '/og/publicar-vaga.png')
    assert.ok(
      getSeoRoute('/guia/trilhas/entender-o-basico')?.title.includes(
        'Entender o básico',
      ),
    )
  })

  it('keeps OG cover files for catalog routes and reserved pages', () => {
    for (const entry of seoRoutes) {
      if (!entry.image) continue
      assert.ok(
        entry.image.startsWith('/og/'),
        `${entry.path} image should be a local /og asset`,
      )
      assert.ok(
        existsSync(join(root, 'public', entry.image)),
        `missing ${entry.image}`,
      )
    }
    assert.ok(existsSync(join(root, 'public', reservedOgImages.publicarVaga)))
  })

  it('keeps prerender paths aligned with the sitemap', () => {
    const sitemap = renderSitemapXml()
    const prerender = listPrerenderPaths()
    assert.ok(prerender.includes('/guia'))
    assert.ok(!prerender.includes('/guia/busca'))
    assert.ok(sitemap.includes('https://vagasux.com.br/guia/faq'))
    assert.ok(!sitemap.includes('/guia/busca'))
    assert.equal(prerender.length, listIndexableSeoRoutes().length)
  })

  it('maps relevant Super URLs to current pages', () => {
    const bySource = Object.fromEntries(
      seoRedirects.map((entry) => [entry.source, entry.destination]),
    )
    assert.equal(bySource['/a-comunidade'], '/comunidade')
    assert.equal(bySource['/quem-organiza'], '/voluntariado')
    assert.equal(bySource['/iniciantes-em-design'], '/vagas-para-iniciantes')
    assert.equal(
      bySource['/iniciantes-em-design/apenas-mentores'],
      '/mentoria',
    )
    assert.equal(bySource['/perfis-para-seguir'], '/guia')
    assert.equal(bySource['/guia-do-product-designer/cursos'], '/guia/cursos')
    assert.equal(
      matchSeoRedirect('/guia-do-product-designer/carreira/portfolio')
        ?.destination,
      '/guia/trilhas/portfolio',
    )
    assert.equal(
      matchSeoRedirect('/guia-do-product-designer/carreira/freelancer')
        ?.destination,
      '/guia/trilhas/freelancer',
    )
    assert.equal(
      matchSeoRedirect(
        '/guia-do-product-designer/carreira/carreira-internacional',
      )?.destination,
      '/guia/trilhas/vagas-internacionais',
    )
    assert.equal(
      matchSeoRedirect('/guia-do-product-designer/carreira/voluntariado')
        ?.destination,
      '/guia/trilhas/voluntariado',
    )
    assert.equal(
      matchSeoRedirect('/guia-do-product-designer/carreira/currculo')
        ?.destination,
      '/guia/trilhas/primeira-vaga',
    )
    assert.equal(
      matchSeoRedirect('/guia-do-product-designer/carreira/transicoes')
        ?.destination,
      '/guia/trilhas/primeira-vaga',
    )
    assert.equal(
      matchSeoRedirect('/guia-do-product-designer/primeiros-passos')
        ?.destination,
      '/guia/trilhas/entender-o-basico',
    )
    assert.equal(
      matchSeoRedirect(
        '/guia-do-product-designer/perfis-para-seguir/grupos-no-whatsapp',
      )?.destination,
      '/comunidade#canais-abertos',
    )
    assert.equal(
      matchSeoRedirect('/vagas-para-iniciantes/apenas-vagas-remoto')
        ?.destination,
      '/vagas-para-iniciantes?workModel=remote',
    )
    assert.equal(
      matchSeoRedirect('/vagas-para-iniciantes/apenas-vagas-em-sp')
        ?.destination,
      '/vagas-para-iniciantes?state=SP',
    )
    assert.equal(
      matchSeoRedirect('/vagas-para-iniciantes/apenas-vagas-de-estgio')
        ?.destination,
      '/vagas-para-iniciantes?seniority=intern',
    )
    assert.equal(
      matchSeoRedirect('/oportunidades/vagas-remotas')?.destination,
      '/oportunidades?workModel=remote',
    )
    assert.equal(
      matchSeoRedirect('/vagas-para-iniciantes/em-aberto/saba')?.destination,
      '/vagas-para-iniciantes',
    )
    assert.equal(matchSeoRedirect('/vagas-para-iniciantes'), undefined)
    assert.equal(matchSeoRedirect('/oportunidades'), undefined)
    assert.equal(
      matchSeoRedirect('/guia-do-product-designer/conteudos/lista/foo')
        ?.destination,
      '/guia',
    )
  })

  it('parses mural filter query params from Super landing pages', () => {
    const remote = parseJobFiltersFromSearchParams(
      new URLSearchParams('workModel=remote'),
    )
    assert.equal(remote.workModel, 'remote')
    const sp = parseJobFiltersFromSearchParams(new URLSearchParams('state=SP'))
    assert.equal(sp.state, 'São Paulo')
    const intern = parseJobFiltersFromSearchParams(
      new URLSearchParams('seniority=intern'),
    )
    assert.equal(intern.seniority, 'intern')
  })

  it('keeps generated artifacts in sync', () => {
    assert.equal(
      readFileSync(join(root, 'vercel.json'), 'utf8'),
      renderVercelJson(),
    )
    assert.equal(
      readFileSync(join(root, 'public/sitemap.xml'), 'utf8'),
      renderSitemapXml(),
    )
    assert.equal(
      readFileSync(join(root, 'public/robots.txt'), 'utf8'),
      renderRobotsTxt(),
    )
    assert.ok(seoRoutes.length > 20)
  })

  it('injects catalog metas and markup into the Vite HTML shell', () => {
    assert.equal(distFileForPrerenderPath('/'), 'index.html')
    assert.equal(distFileForPrerenderPath('/guia/faq'), 'guia/faq/index.html')
    const html = applyPrerenderHtml(
      `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta name="description" content="fallback" />
    <title>Fallback</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,
      '/guia/faq',
      '<h1>FAQ Tira-Dúvidas</h1>',
    )
    assert.match(html, /<title>VagasUX · Guia · FAQ<\/title>/)
    assert.match(html, /content="index,follow"/)
    assert.match(html, /rel="canonical" href="https:\/\/vagasux.com.br\/guia\/faq"/)
    assert.match(html, /<div id="root"><h1>FAQ Tira-Dúvidas<\/h1><\/div>/)
    assert.match(html, /og:title/)
    assert.match(html, /twitter:card" content="summary"/)
    assert.doesNotMatch(html, /og:image/)
    const home = applyPrerenderHtml(
      `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta name="description" content="fallback" />
    <title>Fallback</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`,
      '/',
      '<h1>Home</h1>',
    )
    assert.match(
      home,
      /property="og:image" content="https:\/\/vagasux.com.br\/og\/home.png"/,
    )
    assert.match(home, /twitter:card" content="summary_large_image"/)
  })

  it('replaces previous prerender tags instead of stacking them', () => {
    const shell = `<!doctype html>
<html lang="pt-BR">
  <head>
    <meta name="description" content="fallback" />
    <title>Fallback</title>
  </head>
  <body>
    <div id="root"></div>
  </body>
</html>
`
    const home = applyPrerenderHtml(shell, '/', '<div><h1>Home</h1></div>')
    const faq = applyPrerenderHtml(home, '/guia/faq', '<h1>FAQ Tira-Dúvidas</h1>')
    assert.equal(faq.match(/rel="canonical"/g)?.length, 1)
    assert.equal(faq.match(/property="og:title"/g)?.length, 1)
    assert.equal(faq.match(/data-seo-jsonld/g), null)
    assert.match(faq, /rel="canonical" href="https:\/\/vagasux.com.br\/guia\/faq"/)
    assert.match(faq, /<title>VagasUX · Guia · FAQ<\/title>/)
    assert.match(faq, /<div id="root"><h1>FAQ Tira-Dúvidas<\/h1><\/div>/)
    assert.doesNotMatch(faq, /rel="canonical" href="https:\/\/vagasux.com.br\/"/)
    assert.doesNotMatch(faq, /og:image/)
    assert.match(faq, /twitter:card" content="summary"/)
  })
})
