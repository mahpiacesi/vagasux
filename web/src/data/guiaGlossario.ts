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
 * Verbete do glossário — espelha a estrutura obrigatória do guia editorial.
 * @see docs/guia-glossario.md
 */
export type GuiaGlossarioEntry = {
  /** Âncora HTML na página única (#ux, #mvp…) */
  id: string
  /** Título como o mercado utiliza */
  term: string
  categoryId: GuiaGlossarioCategoryId
  originalName?: GuiaGlossarioOriginalName
  /** O que é? — 1 a 3 parágrafos */
  whatIs: string[]
  /** Em outras palavras */
  inOtherWords: string
  /** Exemplo prático */
  example: string
  /** Você provavelmente vai ouvir */
  youWillHear: string[]
  /** Por que isso importa? */
  whyItMatters: string
  /** 3–6 slugs de verbetes relacionados */
  seeAlso: string[]
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

/** Verbete piloto — referência de estrutura editorial */
export const guiaGlossarioEntries: GuiaGlossarioEntry[] = [
  {
    id: 'ux',
    term: 'UX',
    categoryId: 'fundamentos',
    originalName: {
      english: 'User Experience',
      portuguese: 'Experiência da Pessoa Usuária',
      usageNote:
        'No mercado de tecnologia, UX é a forma mais comum de se referir à experiência de uso de um produto. Quase ninguém fala "experiência da pessoa usuária" no dia a dia das equipes.',
    },
    whatIs: [
      'UX (User Experience) é tudo o que a pessoa sente, pensa e consegue fazer ao usar um produto digital. Não é só visual: inclui se ela entende o fluxo, se consegue completar uma tarefa, se sente confiança ou frustração.',
      'Product Designers trabalham UX ao desenhar fluxos, telas, textos e interações pensando na pessoa que vai usar o produto de verdade, não só no layout bonito.',
    ],
    inOtherWords:
      'UX é o "como é usar" um app, site ou sistema. Se a pessoa se perde, não acha um botão ou desiste no meio do caminho, a UX daquele produto precisa melhorar.',
    example:
      'Você abre um app de banco para pagar um boleto. Se em três toques você conclui o pagamento, a UX está funcionando. Se você precisa ligar no suporte porque não achou a opção, algo na UX falhou.',
    youWillHear: [
      '"Precisamos melhorar a UX desse fluxo de cadastro."',
      '"Antes de polir a interface, vamos validar a UX com usuários."',
      '"Essa feature resolve o problema de negócio, mas a UX ainda está confusa."',
    ],
    whyItMatters:
      'UX é um dos pilares do Product Design. Entender o termo te ajuda a participar de conversas com produto, engenharia e negócio, e a defender decisões com foco na pessoa usuária, não só no visual.',
    seeAlso: ['ui', 'usabilidade', 'teste-de-usabilidade'],
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
      entry.originalName?.portuguese.toLowerCase().includes(normalized),
  )
}

export function resolveGuiaGlossarioSeeAlso(
  slugs: string[],
): GuiaGlossarioEntry[] {
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
