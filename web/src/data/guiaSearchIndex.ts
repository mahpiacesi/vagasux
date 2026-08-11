import { guiaCuratedItems, guiaTemas, guiaTipos, guiaTrilhas } from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'

export type GuiaSearchResult = {
  id: string
  title: string
  category: string
  to: string
  external?: boolean
  keywords: string
}

const themeRoute = (id: string) =>
  id === 'fundamentos'
    ? guiaRoutes.fundamentos
    : id === 'ferramentas'
      ? guiaRoutes.ferramentas
      : guiaRoutes.tema(id)

export const guiaSearchIndex: GuiaSearchResult[] = [
  ...guiaTrilhas.map((item) => ({
    id: `trilha-${item.id}`,
    title: item.title,
    category: 'Trilha',
    to: guiaRoutes.trilha(item.id),
    keywords: `${item.title} ${item.description}`,
  })),
  ...guiaTemas.map((item) => ({
    id: `tema-${item.id}`,
    title: item.title,
    category: 'Tema',
    to: themeRoute(item.id),
    keywords: `${item.title} ${item.id}`,
  })),
  ...guiaTipos.map((item) => ({
    id: `tipo-${item.id}`,
    title: item.title,
    category: 'Tipo',
    to: item.id === 'cursos' ? guiaRoutes.cursos : guiaRoutes.tipo(item.id),
    keywords: `${item.title} ${item.description ?? ''}`,
  })),
  ...guiaCuratedItems.map((item) => ({
    id: `conteudo-${item.id}`,
    title: item.title,
    category: item.tipos[0] ?? 'Conteúdo',
    to: item.url,
    external: true,
    keywords: `${item.title} ${item.temas.join(' ')} ${item.trilhas.join(' ')}`,
  })),
]

export function searchGuia(query: string): GuiaSearchResult[] {
  const terms = query.toLocaleLowerCase('pt-BR').trim().split(/\s+/).filter(Boolean)
  if (!terms.length) return []

  return guiaSearchIndex
    .filter((item) => {
      const text = `${item.title} ${item.keywords}`.toLocaleLowerCase('pt-BR')
      return terms.every((term) => text.includes(term))
    })
    .slice(0, 8)
}
