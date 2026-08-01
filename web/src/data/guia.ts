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
  url: string
  /** ISO date — usado para ordenar recents na home */
  addedAt: string
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

export const guiaCuratedItems: GuiaCuratedItem[] = [
  {
    id: 'art-1',
    title: 'O que faz um Product Designer?',
    url: 'https://medium.com/vagas-ux',
    addedAt: '2026-07-28',
    tipos: ['artigos'],
    temas: ['ux'],
    trilhas: ['entender-o-basico'],
    difficulty: 'iniciante',
    duration: '8 min',
  },
  {
    id: 'art-2',
    title: 'Guia de entrevistas em UX',
    url: 'https://medium.com/vagas-ux',
    addedAt: '2026-07-22',
    tipos: ['artigos'],
    temas: ['carreira'],
    trilhas: ['primeira-vaga'],
    difficulty: 'intermediario',
    duration: '12 min',
  },
  {
    id: 'art-3',
    title: 'Como escrever um case study enxuto',
    url: 'https://medium.com/vagas-ux',
    addedAt: '2026-07-15',
    tipos: ['artigos'],
    temas: ['carreira'],
    trilhas: ['portfolio'],
    difficulty: 'iniciante',
    duration: '10 min',
  },
  {
    id: 'art-4',
    title: 'Heurísticas de usabilidade na prática',
    url: 'https://medium.com/vagas-ux',
    addedAt: '2026-07-08',
    tipos: ['artigos'],
    temas: ['ux'],
    trilhas: ['ui'],
    difficulty: 'iniciante',
    duration: '14 min',
  },
  {
    id: 'vid-1',
    title: 'Como montar um portfólio júnior',
    url: 'https://www.youtube.com/@vagasux',
    addedAt: '2026-07-26',
    tipos: ['videos'],
    temas: ['carreira'],
    trilhas: ['portfolio'],
    difficulty: 'iniciante',
    duration: '24 min',
  },
  {
    id: 'vid-2',
    title: 'Introdução a Design Systems',
    url: 'https://www.youtube.com/@vagasux',
    addedAt: '2026-07-18',
    tipos: ['videos'],
    temas: ['design-systems'],
    trilhas: [],
    difficulty: 'intermediario',
    duration: '18 min',
  },
  {
    id: 'vid-3',
    title: 'Teste de usabilidade moderado — passo a passo',
    url: 'https://www.youtube.com/@vagasux',
    addedAt: '2026-07-10',
    tipos: ['videos'],
    temas: ['ux-research'],
    trilhas: ['research'],
    difficulty: 'intermediario',
    duration: '32 min',
  },
  {
    id: 'cur-1',
    title: 'Figma para iniciantes',
    url: 'https://www.figma.com/community',
    addedAt: '2026-07-27',
    tipos: ['cursos'],
    temas: ['figma', 'ui'],
    trilhas: ['ui'],
    difficulty: 'iniciante',
    duration: '3 h',
  },
  {
    id: 'cur-2',
    title: 'UX Research do zero',
    url: 'https://www.coursera.org',
    addedAt: '2026-07-20',
    tipos: ['cursos'],
    temas: ['ux-research'],
    trilhas: ['research'],
    difficulty: 'iniciante',
    duration: '8 h',
  },
  {
    id: 'cur-3',
    title: 'Content Design para interfaces',
    url: 'https://www.domestika.org',
    addedAt: '2026-07-12',
    tipos: ['cursos'],
    temas: ['content-design'],
    trilhas: ['content-design'],
    difficulty: 'iniciante',
    duration: '5 h',
  },
  {
    id: 'liv-1',
    title: "Don't Make Me Think",
    url: 'https://www.amazon.com.br',
    addedAt: '2026-07-24',
    tipos: ['livros'],
    temas: ['ux'],
    trilhas: ['entender-o-basico'],
    difficulty: 'iniciante',
  },
  {
    id: 'liv-2',
    title: 'The Design of Everyday Things',
    url: 'https://www.amazon.com.br',
    addedAt: '2026-07-14',
    tipos: ['livros'],
    temas: ['ux'],
    trilhas: ['entender-o-basico'],
    difficulty: 'iniciante',
  },
  {
    id: 'liv-3',
    title: 'Sprint — Jake Knapp',
    url: 'https://www.amazon.com.br',
    addedAt: '2026-07-05',
    tipos: ['livros'],
    temas: ['discovery'],
    trilhas: ['research'],
    difficulty: 'intermediario',
  },
  {
    id: 'pod-1',
    title: 'UX Talks — Ep. Design para iniciantes',
    url: 'https://open.spotify.com',
    addedAt: '2026-07-25',
    tipos: ['podcasts'],
    temas: ['ux'],
    trilhas: ['entender-o-basico'],
    difficulty: 'iniciante',
    duration: '45 min',
  },
  {
    id: 'pod-2',
    title: 'Layers — Carreira em Product Design',
    url: 'https://open.spotify.com',
    addedAt: '2026-07-16',
    tipos: ['podcasts'],
    temas: ['carreira'],
    trilhas: ['primeira-vaga'],
    difficulty: 'iniciante',
    duration: '52 min',
  },
  {
    id: 'pod-3',
    title: 'Research em produto — entrevistas que funcionam',
    url: 'https://open.spotify.com',
    addedAt: '2026-07-09',
    tipos: ['podcasts'],
    temas: ['ux-research'],
    trilhas: ['research'],
    difficulty: 'intermediario',
    duration: '38 min',
  },
  {
    id: 'news-1',
    title: 'UX Collective — Newsletter semanal',
    url: 'https://uxdesign.cc',
    addedAt: '2026-07-29',
    tipos: ['newsletters'],
    temas: ['ux'],
    trilhas: [],
    difficulty: 'iniciante',
  },
  {
    id: 'news-2',
    title: 'Product Talk — Marty Cagan',
    url: 'https://www.svpg.com',
    addedAt: '2026-07-21',
    tipos: ['newsletters'],
    temas: ['discovery'],
    trilhas: [],
    difficulty: 'intermediario',
  },
  {
    id: 'news-3',
    title: 'Lenny\'s Newsletter',
    url: 'https://www.lennysnewsletter.com',
    addedAt: '2026-07-11',
    tipos: ['newsletters'],
    temas: ['carreira'],
    trilhas: [],
    difficulty: 'intermediario',
  },
  {
    id: 'evt-1',
    title: 'Friends of Figma — São Paulo',
    url: 'https://friends.figma.com',
    addedAt: '2026-07-30',
    tipos: ['eventos'],
    temas: ['figma'],
    trilhas: [],
    difficulty: 'iniciante',
  },
  {
    id: 'evt-2',
    title: 'UX Conf BR 2026',
    url: 'https://uxconf.com.br',
    addedAt: '2026-07-23',
    tipos: ['eventos'],
    temas: ['ux'],
    trilhas: [],
    difficulty: 'iniciante',
  },
  {
    id: 'evt-3',
    title: 'Papo de Vaguiner — Encontro mensal',
    url: 'https://vagasux.com.br',
    addedAt: '2026-07-17',
    tipos: ['eventos'],
    temas: ['carreira'],
    trilhas: [],
    difficulty: 'iniciante',
  },
  {
    id: 'can-1',
    title: 'VagasUX no Instagram',
    url: 'https://instagram.com/vagasux',
    addedAt: '2026-07-28',
    tipos: ['canais'],
    temas: ['carreira'],
    trilhas: [],
    difficulty: 'iniciante',
  },
  {
    id: 'can-2',
    title: 'Grupo Telegram — Guia do PD',
    url: 'https://t.me/guiadoproductdesigner',
    addedAt: '2026-07-19',
    tipos: ['canais'],
    temas: ['ux'],
    trilhas: ['entender-o-basico'],
    difficulty: 'iniciante',
  },
  {
    id: 'can-3',
    title: 'Canal UX Now no YouTube',
    url: 'https://www.youtube.com',
    addedAt: '2026-07-13',
    tipos: ['canais'],
    temas: ['ux'],
    trilhas: [],
    difficulty: 'iniciante',
  },
]

/** Destaques fixos na seção “Populares” */
export const guiaPopularContent: GuiaCuratedItem[] = [
  'art-1',
  'vid-1',
  'art-2',
  'cur-1',
  'liv-1',
  'vid-2',
]
  .map((id) => guiaCuratedItems.find((item) => item.id === id))
  .filter((item): item is GuiaCuratedItem => item !== undefined)

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

const RECENT_PREVIEW_LIMIT = 3

export function getRecentCuratedByTipo(
  tipoId: string,
  limit = RECENT_PREVIEW_LIMIT,
): GuiaCuratedItem[] {
  return guiaCuratedItems
    .filter((item) => item.tipos.includes(tipoId))
    .sort(
      (a, b) =>
        new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime(),
    )
    .slice(0, limit)
}
