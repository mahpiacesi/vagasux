import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { describe, it } from 'node:test'
import {
  assertSeoCatalogInvariants,
  getSeoRoute,
  listIndexableSeoRoutes,
  listPrerenderPaths,
  renderRobotsTxt,
  renderSitemapXml,
  renderVercelJson,
  seoRedirects,
  seoRoutes,
} from '../src/data/seoCatalog'

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
})
