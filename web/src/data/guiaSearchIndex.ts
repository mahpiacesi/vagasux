import { guiaCuratedItems, guiaTemas, guiaTipos, guiaTrilhas } from '@/data/guia'
import { guiaBooks } from '@/data/guiaBooks'
import { guiaCursos } from '@/data/guiaCursos'
import { guiaGlossarioEntries } from '@/data/guiaGlossario'
import { guiaArtigos } from '@/data/guiaArtigos'
import { guiaFaqItems } from '@/data/guiaFaqItems'
import { guiaTemaUxLinkSections } from '@/data/guiaTemaUxLinks'
import { guiaTemaIaLinkSections } from '@/data/guiaTemaIaLinks'
import { guiaTemaContentDesignLinkSections } from '@/data/guiaTemaContentDesignLinks'
import { guiaTemaResearchLinkSections } from '@/data/guiaTemaResearchLinks'
import { guiaTemaDesignSystemLinks } from '@/data/guiaTemaDesignSystemLinks'
import { guiaTemaAccessibilityLinks } from '@/data/guiaTemaAccessibilityLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { guiaSearchAnchor } from '@/lib/guiaSearchAnchor'

export type GuiaSearchResult = {
  id: string
  title: string
  category: string
  to: string
  external?: boolean
  keywords: string
  snippet?: string
}

const categoryLabels: Record<string, string> = {
  artigos: 'Artigos',
  videos: 'Vídeos',
  cursos: 'Cursos',
  livros: 'Livros',
  podcasts: 'Podcasts',
  newsletters: 'Newsletters',
  canais: 'Canais',
  eventos: 'Eventos',
}

const themeRoute = (id: string) =>
  id === 'fundamentos'
    ? guiaRoutes.fundamentos
    : id === 'ferramentas'
      ? guiaRoutes.ferramentas
      : guiaRoutes.tema(id)

const indexedLinks = (
  sectionGroups: { title?: string; links: { title: string; url: string; description?: string }[] }[],
  to: string,
  category: string,
) => sectionGroups.flatMap((section, sectionIndex) =>
  section.links.map((item, itemIndex) => ({
    id: `${category}-${sectionIndex}-${itemIndex}`,
    title: item.title,
    category,
    to:
      category === 'Recursos de Research' && section.title
        ? `${to}#${guiaSearchAnchor(section.title)}`
        : to,
    keywords: `${item.title} ${item.description ?? ''}`,
    snippet: item.description,
  })),
)

export const guiaSearchIndex: GuiaSearchResult[] = [
  ...guiaTrilhas.map((item) => ({
    id: `trilha-${item.id}`,
    title: item.title,
    category: 'Trilha',
    to: guiaRoutes.trilha(item.id),
    keywords: `${item.title} ${item.description}`,
    snippet: item.description,
  })),
  ...guiaTemas.map((item) => ({
    id: `tema-${item.id}`,
    title: item.title,
    category: 'Tema',
    to: themeRoute(item.id),
    keywords: `${item.title} ${item.id}`,
    snippet: `Tema do Guia sobre ${item.title}.`,
  })),
  ...guiaTipos.map((item) => ({
    id: `tipo-${item.id}`,
    title: item.title,
    category: 'Tipo',
    to: item.id === 'cursos' ? guiaRoutes.cursos : guiaRoutes.tipo(item.id),
    keywords: `${item.title} ${item.description ?? ''}`,
    snippet: item.description,
  })),
  ...guiaCuratedItems.map((item) => ({
    id: `conteudo-${item.id}`,
    title: item.title,
    category: categoryLabels[item.tipos[0] ?? ''] ?? 'Conteúdo',
    to: item.url,
    external: true,
    keywords: `${item.title} ${item.temas.join(' ')} ${item.trilhas.join(' ')}`,
    snippet: item.temas.join(', '),
  })),
  ...guiaBooks.map((item) => ({
    id: `livro-${item.id}`,
    title: item.title,
    category: 'Livros',
    to: item.url,
    external: true,
    keywords: `${item.title} ${item.authors.join(' ')} ${item.context.join(' ')}`,
    snippet: `${item.authors.join(', ')} · ${item.context.join(', ')}`,
  })),
  ...guiaCursos.map((item) => ({
    id: `curso-${item.id}`,
    title: item.title,
    category: 'Cursos',
    to: item.url,
    external: true,
    keywords: `${item.title} ${item.themes.join(' ')} ${item.levels.join(' ')}`,
    snippet: `${item.themes.join(', ')} · ${item.levels.join(', ')}`,
  })),
  ...guiaGlossarioEntries.map((item) => ({
    id: `glossario-${item.id}`,
    title: item.term,
    category: 'Glossário',
    to: `${guiaRoutes.glossario}#${item.id}`,
    keywords: `${item.term} ${item.originalName?.alternate ?? ''} ${item.whatIs.join(' ')}`,
    snippet: item.whatIs[0],
  })),
  ...guiaArtigos.map((item) => ({
    id: `artigo-${item.id}`,
    title: item.title,
    category: 'Artigos',
    to: item.url,
    external: true,
    keywords: `${item.title} ${item.authors.join(' ')} ${item.context.join(' ')}`,
    snippet: `${item.authors.join(', ')} · ${item.context.join(', ')}`,
  })),
  ...guiaFaqItems.map((item) => ({
    id: `faq-${item.id}`,
    title: item.question,
    category: 'FAQ',
    to: `${guiaRoutes.faq}#${item.id}`,
    keywords: `${item.question} ${item.answer.join(' ')}`,
    snippet: item.answer[0],
  })),
  ...indexedLinks(guiaTemaUxLinkSections, guiaRoutes.tema('ui'), 'Recursos de UI'),
  ...indexedLinks(guiaTemaIaLinkSections, guiaRoutes.tema('ia'), 'Recursos de IA'),
  ...indexedLinks(guiaTemaContentDesignLinkSections, guiaRoutes.tema('content-design'), 'Recursos de Content Design'),
  ...indexedLinks(guiaTemaResearchLinkSections, guiaRoutes.tema('research'), 'Recursos de Research'),
  ...indexedLinks(guiaTemaDesignSystemLinks, guiaRoutes.tema('design-system'), 'Recursos de Design System'),
  ...indexedLinks(guiaTemaAccessibilityLinks, guiaRoutes.tema('acessibilidade'), 'Recursos de Acessibilidade'),
]

export function searchGuia(query: string, limit = 8): GuiaSearchResult[] {
  const terms = query.toLocaleLowerCase('pt-BR').trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return []

  const matches = guiaSearchIndex
    .filter((item) => {
      const text = `${item.title} ${item.keywords}`.toLocaleLowerCase('pt-BR')
      return terms.every((term) => text.includes(term))
    }).map((item) => ({ ...item, snippet: buildSnippet(item.keywords, terms) ?? item.snippet }))

  const byCategory = new Map<string, number>()
  return matches.filter((item) => {
    const count = byCategory.get(item.category) ?? 0
    if (count >= 3) return false
    byCategory.set(item.category, count + 1)
    return true
  }).slice(0, limit)
}

function buildSnippet(text: string, terms: string[]): string | null {
  const normalized = text.toLocaleLowerCase('pt-BR')
  const index = normalized.indexOf(terms[0] ?? '')
  if (index < 0) return null
  const start = Math.max(0, index - 70)
  const end = Math.min(text.length, index + 130)
  return `${start ? '…' : ''}${text.slice(start, end)}${end < text.length ? '…' : ''}`
}
