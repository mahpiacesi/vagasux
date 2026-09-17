import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
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
    assert.ok(
      getSeoRoute('/guia/trilhas/entender-o-basico')?.title.includes(
        'Entender o básico',
      ),
    )
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
  })
})
