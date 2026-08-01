export type GuiaDifficulty = 'iniciante' | 'intermediario' | 'avancado'

export type GuiaTrilha = {
  id: string
  emoji: string
  title: string
  description: string
  /** Metadados opcionais — reaproveitados das trilhas sequenciais futuras */
  level?: GuiaDifficulty
  duration?: string
  contentCount?: number
}

export type GuiaTema = {
  id: string
  title: string
  emoji?: string
}

export type GuiaTipo = {
  id: string
  title: string
  description?: string
}

/** Item curado — tags cruzam trilhas, temas e tipos */
export type GuiaCuratedItem = {
  id: string
  title: string
  trilhas: string[]
  temas: string[]
  tipos: string[]
  difficulty: GuiaDifficulty
  duration?: string
}

export const guiaTrilhas: GuiaTrilha[] = [
  {
    id: 'entender-o-basico',
    emoji: '🚀',
    title: 'Entender o básico',
    description:
      'O que é Product Design, como é o mercado e por onde começar.',
    level: 'iniciante',
    duration: '6 h',
    contentCount: 18,
  },
  {
    id: 'primeira-vaga',
    emoji: '💼',
    title: 'Conseguir minha primeira vaga',
    description: 'Currículo, LinkedIn, entrevistas e processos seletivos.',
    level: 'iniciante',
  },
  {
    id: 'portfolio',
    emoji: '🎒',
    title: 'Montar meu portfólio',
    description: 'Cases, narrativa e como se destacar.',
    level: 'iniciante',
    duration: '4 h',
    contentCount: 12,
  },
  {
    id: 'ui',
    emoji: '🎨',
    title: 'Aprender UI',
    description: 'Interface, tipografia, cores, componentes e Figma.',
    level: 'iniciante',
  },
  {
    id: 'research',
    emoji: '🔍',
    title: 'Aprender UX Research',
    description:
      'Discovery, entrevistas, testes de usabilidade e síntese.',
    level: 'intermediario',
    duration: '5 h',
    contentCount: 15,
  },
  {
    id: 'content-design',
    emoji: '🧩',
    title: 'Aprender Content Design',
    description:
      'Microcopy, tom de voz, UX writing e conteúdo em interfaces de produto.',
    level: 'iniciante',
  },
  {
    id: 'explorar',
    emoji: '📚',
    title: 'Explorar todo o Guia',
    description: 'Navegue por temas, tipos de conteúdo e centenas de curadorias.',
  },
]

export const guiaTemas: GuiaTema[] = [
  { id: 'ux', title: 'UX', emoji: '🧭' },
  { id: 'ui', title: 'UI', emoji: '🎨' },
  { id: 'ux-research', title: 'UX Research', emoji: '🔍' },
  { id: 'content-design', title: 'Content Design', emoji: '✍️' },
  { id: 'discovery', title: 'Discovery', emoji: '💡' },
  { id: 'figma', title: 'Figma', emoji: '🖊️' },
  { id: 'miro', title: 'Miro', emoji: '📋' },
  { id: 'notion', title: 'Notion', emoji: '📝' },
  { id: 'design-systems', title: 'Design Systems', emoji: '🧩' },
  { id: 'ia', title: 'IA', emoji: '🤖' },
  { id: 'carreira', title: 'Carreira', emoji: '💼' },
]

export const guiaTipos: GuiaTipo[] = [
  { id: 'artigos', title: 'Artigos' },
  { id: 'videos', title: 'Vídeos' },
  { id: 'cursos', title: 'Cursos' },
  { id: 'livros', title: 'Livros' },
  { id: 'podcasts', title: 'Podcasts' },
  { id: 'newsletters', title: 'Newsletters' },
  { id: 'eventos', title: 'Eventos' },
  {
    id: 'canais',
    title: 'Canais',
    description: 'Perfis, grupos e comunidades para seguir',
  },
]

export const guiaPopularContent: GuiaCuratedItem[] = [
  {
    id: '1',
    title: 'O que faz um Product Designer?',
    tipos: ['artigos'],
    temas: ['ux'],
    trilhas: ['entender-o-basico'],
    difficulty: 'iniciante',
    duration: '8 min',
  },
  {
    id: '2',
    title: 'Como montar um portfólio júnior',
    tipos: ['videos'],
    temas: ['carreira'],
    trilhas: ['portfolio'],
    difficulty: 'iniciante',
    duration: '24 min',
  },
  {
    id: '3',
    title: 'Guia de entrevistas em UX',
    tipos: ['artigos'],
    temas: ['carreira'],
    trilhas: ['primeira-vaga'],
    difficulty: 'intermediario',
    duration: '12 min',
  },
  {
    id: '4',
    title: 'Figma para iniciantes',
    tipos: ['cursos'],
    temas: ['figma', 'ui'],
    trilhas: ['ui'],
    difficulty: 'iniciante',
    duration: '3 h',
  },
  {
    id: '5',
    title: "Don't Make Me Think",
    tipos: ['livros'],
    temas: ['ux'],
    trilhas: ['entender-o-basico'],
    difficulty: 'iniciante',
  },
  {
    id: '6',
    title: 'Introdução a Design Systems',
    tipos: ['videos'],
    temas: ['design-systems'],
    trilhas: [],
    difficulty: 'intermediario',
    duration: '18 min',
  },
]

export const guiaSearchSuggestions = [
  'Portfólio júnior',
  'Figma',
  'Entrevista UX',
  'UX Research',
  'Primeira vaga',
  'FAQ',
  'Case study',
] as const

export const guiaSearchCategories = [
  'Trilhas',
  'Temas',
  'Tipos',
  'Artigos',
  'Vídeos',
] as const

export const guiaTipoLabels: Record<string, string> = Object.fromEntries(
  guiaTipos.map((tipo) => [tipo.id, tipo.title]),
)

export const guiaDifficultyLabels: Record<GuiaDifficulty, string> = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
}

export function getGuiaTrilhaById(id: string): GuiaTrilha | undefined {
  return guiaTrilhas.find((trilha) => trilha.id === id)
}

export function getGuiaTemaById(id: string): GuiaTema | undefined {
  return guiaTemas.find((tema) => tema.id === id)
}

export function getGuiaTipoById(id: string): GuiaTipo | undefined {
  return guiaTipos.find((tipo) => tipo.id === id)
}
