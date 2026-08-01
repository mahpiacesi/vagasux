export type GuiaGlossarioCategoryId =
  | 'fundamentos'
  | 'interface'
  | 'pesquisa'
  | 'produto'
  | 'metodos-ageis'
  | 'desenvolvimento'
  | 'acessibilidade'
  | 'ia-para-designers'

export type GuiaGlossarioOriginalName = {
  english: string
  portuguese: string
  /** Por que o mercado mantém o termo em inglês */
  usageNote?: string
}

/**
 * Verbete do glossário — template enxuto.
 * @see docs/guia-glossario.md
 */
export type GuiaGlossarioEntry = {
  /** Âncora HTML na página única (#ux, #mvp…) */
  id: string
  /** Título como o mercado utiliza */
  term: string
  categoryId: GuiaGlossarioCategoryId
  /** Subgrupo dentro da categoria (ex.: areas-disciplinas) */
  subgroup?: string
  originalName?: GuiaGlossarioOriginalName
  /** O que é? — incluir termos relacionados inline quando fizer sentido */
  whatIs: string[]
  /** Você provavelmente vai ouvir */
  youWillHear: string[]
  /** Links opcionais para conceitos distintos (2–4) */
  seeAlso?: string[]
}

export type GuiaGlossarioCategory = {
  id: GuiaGlossarioCategoryId
  emoji: string
  title: string
}

export const guiaGlossarioCategories: GuiaGlossarioCategory[] = [
  { id: 'fundamentos', emoji: '🚀', title: 'Fundamentos' },
  { id: 'interface', emoji: '🎨', title: 'Interface' },
  { id: 'pesquisa', emoji: '🔍', title: 'Pesquisa' },
  { id: 'produto', emoji: '📈', title: 'Produto' },
  { id: 'metodos-ageis', emoji: '🤝', title: 'Métodos Ágeis' },
  { id: 'desenvolvimento', emoji: '💻', title: 'Desenvolvimento' },
  { id: 'acessibilidade', emoji: '♿', title: 'Acessibilidade' },
  { id: 'ia-para-designers', emoji: '🤖', title: 'IA para Designers' },
]

/** Rótulos de subgrupos por categoria */
export const guiaGlossarioSubgroupLabels: Partial<
  Record<GuiaGlossarioCategoryId, Record<string, string>>
> = {
  fundamentos: {
    'areas-disciplinas': 'Áreas e disciplinas',
    mentalidade: 'Mentalidade',
    'pessoas-contexto': 'Pessoas e contexto',
  },
  produto: {
    conceitos: 'Conceitos',
    processo: 'Processo',
    entregas: 'Entregas',
  },
}

export const guiaGlossarioEntries: GuiaGlossarioEntry[] = [
  {
    id: 'product-design',
    term: 'Product Design',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    whatIs: [
      'Product Design é a disciplina que cria e evolui produtos digitais, unindo estratégia, pesquisa, experiência da pessoa usuária (UX) e interface (UI) para resolver problemas e gerar valor.',
    ],
    youWillHear: [
      '"Vamos envolver Product Design desde o início do projeto."',
      '"O time de Product Design está trabalhando nessa funcionalidade."',
    ],
    seeAlso: ['product-designer', 'ux', 'ui'],
  },
  {
    id: 'product-designer',
    term: 'Product Designer',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    whatIs: [
      'Product Designer é a pessoa responsável por projetar a experiência de um produto digital. Ela trabalha desde a compreensão do problema até a criação e validação de soluções, colaborando com áreas como Produto, Engenharia e Pesquisa.',
    ],
    youWillHear: [
      '"A pessoa Product Designer vai validar esse fluxo antes do desenvolvimento."',
      '"Vamos alinhar essa decisão com Product Design."',
    ],
    seeAlso: ['product-design', 'ux'],
  },
  {
    id: 'ux',
    term: 'UX',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'User Experience',
      portuguese: 'Experiência da Pessoa Usuária',
      usageNote:
        'No mercado de tecnologia, UX é a forma mais comum de se referir à experiência de uso. Quase ninguém fala "experiência da pessoa usuária" no dia a dia das equipes.',
    },
    whatIs: [
      'UX (User Experience) é tudo o que a pessoa sente, pensa e consegue fazer ao usar um produto digital. Não é só visual: inclui se ela entende o fluxo, completa a tarefa ou desiste no meio do caminho. Está ligada à UI (interface), mas vai além da aparência das telas.',
    ],
    youWillHear: [
      '"Precisamos melhorar a UX desse fluxo de cadastro."',
      '"Antes de polir a interface, vamos validar a UX com usuários."',
      '"Essa feature resolve o problema de negócio, mas a UX ainda está confusa."',
    ],
    seeAlso: ['ui', 'product-design'],
  },
]

export const guiaGlossarioCategoryLabels: Record<GuiaGlossarioCategoryId, string> =
  Object.fromEntries(
    guiaGlossarioCategories.map((c) => [c.id, c.title]),
  ) as Record<GuiaGlossarioCategoryId, string>

export function getGuiaGlossarioEntryById(
  id: string,
): GuiaGlossarioEntry | undefined {
  return guiaGlossarioEntries.find((entry) => entry.id === id)
}

export function getGuiaGlossarioCategoryById(
  id: GuiaGlossarioCategoryId,
): GuiaGlossarioCategory | undefined {
  return guiaGlossarioCategories.find((category) => category.id === id)
}

export function getGuiaGlossarioEntriesByCategory(
  categoryId: GuiaGlossarioCategoryId,
): GuiaGlossarioEntry[] {
  return guiaGlossarioEntries
    .filter((entry) => entry.categoryId === categoryId)
    .sort((a, b) => a.term.localeCompare(b.term, 'pt-BR'))
}

export function getAllGuiaGlossarioEntriesSorted(): GuiaGlossarioEntry[] {
  return [...guiaGlossarioEntries].sort((a, b) =>
    a.term.localeCompare(b.term, 'pt-BR'),
  )
}

export function searchGuiaGlossarioEntries(query: string): GuiaGlossarioEntry[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return getAllGuiaGlossarioEntriesSorted()

  return getAllGuiaGlossarioEntriesSorted().filter(
    (entry) =>
      entry.term.toLowerCase().includes(normalized) ||
      entry.id.toLowerCase().includes(normalized) ||
      entry.originalName?.english.toLowerCase().includes(normalized) ||
      entry.originalName?.portuguese.toLowerCase().includes(normalized) ||
      entry.whatIs.some((p) => p.toLowerCase().includes(normalized)),
  )
}

export function resolveGuiaGlossarioSeeAlso(
  slugs: string[] | undefined,
): GuiaGlossarioEntry[] {
  if (!slugs?.length) return []
  return slugs
    .map((slug) => getGuiaGlossarioEntryById(slug))
    .filter((entry): entry is GuiaGlossarioEntry => entry !== undefined)
}

export function groupGuiaGlossarioEntriesByCategory(
  entries: GuiaGlossarioEntry[],
): Map<GuiaGlossarioCategoryId, GuiaGlossarioEntry[]> {
  const grouped = new Map<GuiaGlossarioCategoryId, GuiaGlossarioEntry[]>()

  for (const category of guiaGlossarioCategories) {
    grouped.set(category.id, [])
  }

  for (const entry of entries) {
    grouped.get(entry.categoryId)?.push(entry)
  }

  for (const [categoryId, list] of grouped) {
    grouped.set(
      categoryId,
      list.sort((a, b) => a.term.localeCompare(b.term, 'pt-BR')),
    )
  }

  return grouped
}

export type GuiaGlossarioSubgroupGroup = {
  subgroupId: string | null
  label: string | null
  entries: GuiaGlossarioEntry[]
}

/** Agrupa verbetes por subgrupo dentro de uma categoria, na ordem editorial */
export function groupGuiaGlossarioEntriesBySubgroup(
  entries: GuiaGlossarioEntry[],
  categoryId: GuiaGlossarioCategoryId,
): GuiaGlossarioSubgroupGroup[] {
  const labels = guiaGlossarioSubgroupLabels[categoryId]
  if (!labels) {
    return [{ subgroupId: null, label: null, entries }]
  }

  const order = Object.keys(labels)
  const buckets = new Map<string, GuiaGlossarioEntry[]>()
  const ungrouped: GuiaGlossarioEntry[] = []

  for (const entry of entries) {
    if (entry.subgroup && labels[entry.subgroup]) {
      const list = buckets.get(entry.subgroup) ?? []
      list.push(entry)
      buckets.set(entry.subgroup, list)
    } else {
      ungrouped.push(entry)
    }
  }

  const groups: GuiaGlossarioSubgroupGroup[] = order
    .filter((id) => buckets.has(id))
    .map((id) => ({
      subgroupId: id,
      label: labels[id] ?? null,
      entries: (buckets.get(id) ?? []).sort((a, b) =>
        a.term.localeCompare(b.term, 'pt-BR'),
      ),
    }))

  if (ungrouped.length > 0) {
    groups.push({
      subgroupId: null,
      label: null,
      entries: ungrouped.sort((a, b) => a.term.localeCompare(b.term, 'pt-BR')),
    })
  }

  return groups
}
