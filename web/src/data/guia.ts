export type GuiaContentType =
  | 'artigo'
  | 'video'
  | 'curso'
  | 'livro'
  | 'newsletter'
  | 'evento'
  | 'ferramenta'

export type GuiaDifficulty = 'iniciante' | 'intermediario' | 'avancado'

export type GuiaLearningPath = {
  id: string
  emoji: string
  title: string
  description: string
}

export type GuiaTopic = {
  id: string
  title: string
}

export type GuiaArea = {
  id: string
  title: string
  description: string
  emoji: string
  topics: GuiaTopic[]
}

export type GuiaTrail = {
  id: string
  title: string
  description: string
  level: GuiaDifficulty
  duration: string
  contentCount: number
  /** 0–100; estrutura pronta para progresso futuro */
  progress: number
}

export type GuiaContentItem = {
  id: string
  title: string
  type: GuiaContentType
  category: string
  difficulty: GuiaDifficulty
  duration?: string
}

export const guiaLearningPaths: GuiaLearningPath[] = [
  {
    id: 'comecando',
    emoji: '🚀',
    title: 'Estou começando',
    description: 'Entenda o que é PD, o mercado e por onde estudar.',
  },
  {
    id: 'primeira-vaga',
    emoji: '💼',
    title: 'Quero minha primeira vaga',
    description: 'Currículo, LinkedIn, entrevistas e processos seletivos.',
  },
  {
    id: 'portfolio',
    emoji: '🎒',
    title: 'Quero montar meu portfólio',
    description: 'Cases, narrativa e o que mostrar sendo iniciante.',
  },
  {
    id: 'ui',
    emoji: '🎨',
    title: 'Quero aprender UI',
    description: 'Interface, tipografia, cores, componentes e Figma.',
  },
  {
    id: 'research',
    emoji: '🔍',
    title: 'Quero aprender UX Research',
    description: 'Discovery, entrevistas, testes de usabilidade e síntese.',
  },
  {
    id: 'design-systems',
    emoji: '🧩',
    title: 'Quero aprender Design Systems',
    description: 'Tokens, bibliotecas, documentação e governança.',
  },
  {
    id: 'explorar',
    emoji: '📚',
    title: 'Explorar todo o Guia',
    description: 'Navegue por áreas, trilhas e centenas de curadorias.',
  },
]

export const guiaAreas: GuiaArea[] = [
  {
    id: 'comecar',
    emoji: '🌱',
    title: 'Começar',
    description: 'Fundamentos para quem está dando os primeiros passos.',
    topics: [
      { id: 'o-que-e-pd', title: 'O que é Product Design' },
      { id: 'glossario', title: 'Glossário' },
      { id: 'como-estudar', title: 'Como estudar' },
      { id: 'mercado', title: 'Mercado' },
      { id: 'areas-atuacao', title: 'Áreas de atuação' },
    ],
  },
  {
    id: 'aprender',
    emoji: '📖',
    title: 'Aprender',
    description: 'Conteúdos por tema: UX, UI, research, conteúdo e mais.',
    topics: [
      { id: 'ux', title: 'UX' },
      { id: 'ui', title: 'UI' },
      { id: 'research', title: 'UX Research' },
      { id: 'content-design', title: 'Content Design' },
      { id: 'discovery', title: 'Discovery' },
    ],
  },
  {
    id: 'ferramentas',
    emoji: '🛠️',
    title: 'Ferramentas',
    description: 'Guias e recursos sobre as ferramentas mais usadas.',
    topics: [
      { id: 'figma', title: 'Figma' },
      { id: 'figjam', title: 'FigJam' },
      { id: 'miro', title: 'Miro' },
      { id: 'notion', title: 'Notion' },
      { id: 'maze', title: 'Maze' },
      { id: 'hotjar', title: 'Hotjar' },
    ],
  },
  {
    id: 'carreira',
    emoji: '💼',
    title: 'Carreira',
    description: 'Do portfólio à entrevista — tudo para avançar na profissão.',
    topics: [
      { id: 'portfolio', title: 'Portfólio' },
      { id: 'curriculo', title: 'Currículo' },
      { id: 'linkedin', title: 'LinkedIn' },
      { id: 'entrevistas', title: 'Entrevistas' },
      { id: 'primeiro-emprego', title: 'Primeiro emprego' },
      { id: 'transicao', title: 'Transição de carreira' },
    ],
  },
  {
    id: 'conteudos',
    emoji: '🗂️',
    title: 'Conteúdos',
    description: 'Artigos, vídeos, cursos, livros e newsletters curados.',
    topics: [
      { id: 'artigos', title: 'Artigos' },
      { id: 'videos', title: 'Vídeos' },
      { id: 'cursos', title: 'Cursos' },
      { id: 'livros', title: 'Livros' },
      { id: 'newsletters', title: 'Newsletters' },
      { id: 'podcasts', title: 'Podcasts' },
    ],
  },
  {
    id: 'comunidade',
    emoji: '🤝',
    title: 'Comunidade',
    description: 'Eventos, grupos e espaços para trocar com outras pessoas.',
    topics: [
      { id: 'eventos', title: 'Eventos' },
      { id: 'comunidades', title: 'Comunidades' },
      { id: 'mentorias', title: 'Mentorias' },
      { id: 'networking', title: 'Networking' },
    ],
  },
]

export const guiaTrails: GuiaTrail[] = [
  {
    id: 'primeiros-passos',
    title: 'Primeiros passos em Product Design',
    description:
      'Uma trilha guiada do zero ao entendimento das principais áreas e ferramentas.',
    level: 'iniciante',
    duration: '6 h',
    contentCount: 18,
    progress: 0,
  },
  {
    id: 'portfolio-iniciante',
    title: 'Monte seu primeiro portfólio',
    description:
      'Do case study à publicação — o essencial para mostrar seu trabalho.',
    level: 'iniciante',
    duration: '4 h',
    contentCount: 12,
    progress: 0,
  },
  {
    id: 'ux-research-basics',
    title: 'Fundamentos de UX Research',
    description:
      'Entrevistas, testes de usabilidade e como transformar dados em insights.',
    level: 'intermediario',
    duration: '5 h',
    contentCount: 15,
    progress: 0,
  },
  {
    id: 'design-systems-101',
    title: 'Design Systems na prática',
    description:
      'Componentes, tokens, documentação e colaboração com engenharia.',
    level: 'intermediario',
    duration: '7 h',
    contentCount: 20,
    progress: 0,
  },
]

export const guiaPopularContent: GuiaContentItem[] = [
  {
    id: '1',
    title: 'O que faz um Product Designer?',
    type: 'artigo',
    category: 'Começar',
    difficulty: 'iniciante',
    duration: '8 min',
  },
  {
    id: '2',
    title: 'Como montar um portfólio júnior',
    type: 'video',
    category: 'Carreira',
    difficulty: 'iniciante',
    duration: '24 min',
  },
  {
    id: '3',
    title: 'Guia de entrevistas em UX',
    type: 'artigo',
    category: 'Carreira',
    difficulty: 'intermediario',
    duration: '12 min',
  },
  {
    id: '4',
    title: 'Figma para iniciantes',
    type: 'curso',
    category: 'Ferramentas',
    difficulty: 'iniciante',
    duration: '3 h',
  },
  {
    id: '5',
    title: "Don't Make Me Think",
    type: 'livro',
    category: 'Aprender',
    difficulty: 'iniciante',
  },
  {
    id: '6',
    title: 'Introdução a Design Systems',
    type: 'video',
    category: 'Aprender',
    difficulty: 'intermediario',
    duration: '18 min',
  },
]

export const guiaSearchSuggestions = [
  'Portfólio júnior',
  'Figma',
  'Entrevista UX',
  'Design System',
  'UX Research',
  'Primeira vaga',
  'Glossário',
  'Case study',
] as const

export const guiaSearchCategories = [
  'Começar',
  'Carreira',
  'Ferramentas',
  'Trilhas',
  'Artigos',
  'Vídeos',
] as const

export const guiaContentTypeLabels: Record<GuiaContentType, string> = {
  artigo: 'Artigo',
  video: 'Vídeo',
  curso: 'Curso',
  livro: 'Livro',
  newsletter: 'Newsletter',
  evento: 'Evento',
  ferramenta: 'Ferramenta',
}

export const guiaDifficultyLabels: Record<GuiaDifficulty, string> = {
  iniciante: 'Iniciante',
  intermediario: 'Intermediário',
  avancado: 'Avançado',
}
