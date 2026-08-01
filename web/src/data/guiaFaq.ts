/**
 * FAQ do Guia do Product Designer.
 * @see docs/guia-faq.md
 */

import { guiaFaqItems } from './guiaFaqItems'

export type GuiaFaqCategoryId =
  | 'geral'
  | 'preparacao'
  | 'processos-seletivos'
  | 'conhecimentos'
  | 'contratacao'
  | 'guia'

export type GuiaFaqSeeAlso = {
  term: string
  glossarioId: string
}

export type GuiaFaqItem = {
  id: string
  categoryId: GuiaFaqCategoryId
  subgroup: string
  question: string
  answer: string[]
  seeAlso?: GuiaFaqSeeAlso[]
}

export type GuiaFaqCategory = {
  id: GuiaFaqCategoryId
  emoji: string
  title: string
}

export const guiaFaqCategories: GuiaFaqCategory[] = [
  { id: 'geral', emoji: '☕', title: 'Geral' },
  { id: 'preparacao', emoji: '🏋️', title: 'Preparação' },
  { id: 'processos-seletivos', emoji: '💼', title: 'Processos seletivos' },
  { id: 'conhecimentos', emoji: '📚', title: 'Conhecimentos' },
  { id: 'contratacao', emoji: '🕵️', title: 'Contratação' },
  { id: 'guia', emoji: '✨', title: 'Sobre o Guia' },
]

export const guiaFaqSubgroupLabels: Partial<
  Record<GuiaFaqCategoryId, Record<string, string>>
> = {
  geral: {
    rotina: 'Rotina',
    squads: 'Squads',
    junior: 'Nível júnior',
    remoto: 'Trabalho remoto',
  },
  preparacao: {
    linkedin: 'LinkedIn',
    cv: 'CV / Currículo',
    portfolio: 'Portfólio',
  },
  'processos-seletivos': {
    entrevistas: 'Entrevistas',
    desafios: 'Desafios',
    feedbacks: 'Feedbacks',
  },
  conhecimentos: {
    habilidades: 'Habilidades',
    formacao: 'Faculdade e cursos',
  },
  contratacao: {
    clt: 'CLT',
    mei: 'MEI',
    comparativo: 'Comparativo CLT x PJ',
  },
}

export { guiaFaqItems }

export type GuiaFaqSubgroupGroup = {
  subgroupId: string | null
  label: string | null
  items: GuiaFaqItem[]
}

function getGuiaFaqEditorialIndex(item: GuiaFaqItem): number {
  const index = guiaFaqItems.findIndex((candidate) => candidate.id === item.id)
  return index === -1 ? Number.MAX_SAFE_INTEGER : index
}

function getGuiaFaqSubgroupIndex(
  categoryId: GuiaFaqCategoryId,
  subgroup: string,
): number {
  const labels = guiaFaqSubgroupLabels[categoryId]
  if (!labels) return Number.MAX_SAFE_INTEGER
  const keys = Object.keys(labels)
  const index = keys.indexOf(subgroup)
  return index === -1 ? Number.MAX_SAFE_INTEGER : index
}

function getGuiaFaqCategoryIndex(categoryId: GuiaFaqCategoryId): number {
  return guiaFaqCategories.findIndex((category) => category.id === categoryId)
}

export function compareGuiaFaqItemsEditorially(
  a: GuiaFaqItem,
  b: GuiaFaqItem,
): number {
  if (a.categoryId !== b.categoryId) {
    return (
      getGuiaFaqCategoryIndex(a.categoryId) -
      getGuiaFaqCategoryIndex(b.categoryId)
    )
  }

  const subgroupA = getGuiaFaqSubgroupIndex(a.categoryId, a.subgroup)
  const subgroupB = getGuiaFaqSubgroupIndex(b.categoryId, b.subgroup)
  if (subgroupA !== subgroupB) return subgroupA - subgroupB

  const indexA = getGuiaFaqEditorialIndex(a)
  const indexB = getGuiaFaqEditorialIndex(b)
  if (indexA !== indexB) return indexA - indexB

  return a.question.localeCompare(b.question, 'pt-BR')
}

export function getGuiaFaqItemById(id: string): GuiaFaqItem | undefined {
  return guiaFaqItems.find((item) => item.id === id)
}

export function getAllGuiaFaqItemsSorted(): GuiaFaqItem[] {
  return [...guiaFaqItems].sort(compareGuiaFaqItemsEditorially)
}

export function searchGuiaFaqItems(query: string): GuiaFaqItem[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return getAllGuiaFaqItemsSorted()

  return getAllGuiaFaqItemsSorted().filter(
    (item) =>
      item.question.toLowerCase().includes(normalized) ||
      item.id.toLowerCase().includes(normalized) ||
      item.answer.some((paragraph) =>
        paragraph.toLowerCase().includes(normalized),
      ) ||
      item.seeAlso?.some((link) =>
        link.term.toLowerCase().includes(normalized),
      ),
  )
}

export function groupGuiaFaqItemsByCategory(
  items: GuiaFaqItem[],
): Map<GuiaFaqCategoryId, GuiaFaqItem[]> {
  const grouped = new Map<GuiaFaqCategoryId, GuiaFaqItem[]>()

  for (const category of guiaFaqCategories) {
    grouped.set(category.id, [])
  }

  for (const item of items) {
    grouped.get(item.categoryId)?.push(item)
  }

  for (const category of guiaFaqCategories) {
    grouped.set(
      category.id,
      [...(grouped.get(category.id) ?? [])].sort(compareGuiaFaqItemsEditorially),
    )
  }

  return grouped
}

export function groupGuiaFaqItemsBySubgroup(
  items: GuiaFaqItem[],
  categoryId: GuiaFaqCategoryId,
): GuiaFaqSubgroupGroup[] {
  const labels = guiaFaqSubgroupLabels[categoryId]
  if (!labels) {
    return [
      {
        subgroupId: null,
        label: null,
        items: [...items].sort(compareGuiaFaqItemsEditorially),
      },
    ]
  }

  const order = Object.keys(labels)
  const buckets = new Map<string, GuiaFaqItem[]>()
  const ungrouped: GuiaFaqItem[] = []

  for (const item of items) {
    if (labels[item.subgroup]) {
      const list = buckets.get(item.subgroup) ?? []
      list.push(item)
      buckets.set(item.subgroup, list)
    } else {
      ungrouped.push(item)
    }
  }

  const groups: GuiaFaqSubgroupGroup[] = order
    .filter((id) => buckets.has(id))
    .map((id) => ({
      subgroupId: id,
      label: labels[id] ?? null,
      items: [...(buckets.get(id) ?? [])].sort(compareGuiaFaqItemsEditorially),
    }))

  if (ungrouped.length > 0) {
    groups.push({
      subgroupId: null,
      label: null,
      items: ungrouped.sort(compareGuiaFaqItemsEditorially),
    })
  }

  return groups
}
