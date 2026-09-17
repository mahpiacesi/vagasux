import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  canonicalUrl,
  getSeoRoute,
  SITE_ORIGIN,
} from '@/data/seoCatalog'

const NOT_FOUND_TITLE = 'VagasUX · Página não encontrada'
const NOT_FOUND_DESCRIPTION =
  'Parece que ela se perdeu no caminho. Calce sua galocha e volte para a VagasUX para continuar explorando vagas, conteúdos, mentorias e desafios.'

export function SeoHead() {
  const { pathname } = useLocation()

  useEffect(() => {
    const entry = getSeoRoute(pathname)
    const title = entry?.title ?? NOT_FOUND_TITLE
    const description = entry?.description ?? NOT_FOUND_DESCRIPTION
    const url = canonicalUrl(entry?.path ?? pathname)
    const indexable = entry?.index ?? false
    const ogType = entry?.ogType ?? 'website'

    document.title = title
    setMeta('name', 'description', description)
    setMeta('name', 'robots', indexable ? 'index,follow' : 'noindex,follow')
    setLink('canonical', url)
    setMeta('property', 'og:title', title)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', ogType)
    setMeta('property', 'og:locale', 'pt_BR')
    setMeta('property', 'og:site_name', 'VagasUX')
    setMeta('name', 'twitter:card', entry?.image ? 'summary_large_image' : 'summary')
    setMeta('name', 'twitter:title', title)
    setMeta('name', 'twitter:description', description)

    if (entry?.image) {
      const image = entry.image.startsWith('http')
        ? entry.image
        : `${SITE_ORIGIN}${entry.image}`
      setMeta('property', 'og:image', image)
      setMeta('name', 'twitter:image', image)
    } else {
      removeMeta('property', 'og:image')
      removeMeta('name', 'twitter:image')
    }

    setJsonLd(entry?.jsonLd)
  }, [pathname])

  return null
}

function setMeta(
  attr: 'name' | 'property',
  key: string,
  content: string,
) {
  const selector = `meta[${attr}="${key}"]`
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attr, key)
    document.head.append(element)
  }
  element.content = content
}

function removeMeta(attr: 'name' | 'property', key: string) {
  document.head.querySelector(`meta[${attr}="${key}"]`)?.remove()
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`)
  if (!element) {
    element = document.createElement('link')
    element.rel = rel
    document.head.append(element)
  }
  element.href = href
}

function setJsonLd(data: Record<string, unknown> | undefined) {
  const existing = document.head.querySelectorAll('script[data-seo-jsonld]')
  existing.forEach((node) => node.remove())
  if (!data) return
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.dataset.seoJsonld = 'true'
  script.textContent = JSON.stringify(data)
  document.head.append(script)
}
