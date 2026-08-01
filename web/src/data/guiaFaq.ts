/**
 * FAQ do Guia do Product Designer.
 * @see docs/guia-faq.md
 */

export type GuiaFaqCategoryId =
  | 'carreira'
  | 'estudos'
  | 'portfolio'
  | 'vagas'
  | 'guia'

export type GuiaFaqItem = {
  id: string
  categoryId: GuiaFaqCategoryId
  question: string
  answer: string[]
}

export type GuiaFaqCategory = {
  id: GuiaFaqCategoryId
  emoji: string
  title: string
}

export const guiaFaqCategories: GuiaFaqCategory[] = [
  { id: 'carreira', emoji: '🚀', title: 'Carreira' },
  { id: 'estudos', emoji: '📚', title: 'Estudos' },
  { id: 'portfolio', emoji: '💼', title: 'Portfólio' },
  { id: 'vagas', emoji: '🎯', title: 'Vagas e entrevistas' },
  { id: 'guia', emoji: '✨', title: 'Sobre o Guia' },
]

export const guiaFaqEditorialOrder: Record<
  GuiaFaqCategoryId,
  readonly string[]
> = {
  carreira: [
    'o-que-faz-um-product-designer',
    'diferenca-ux-ui-pd',
    'preciso-saber-codigo',
    'areas-do-product-design',
  ],
  estudos: [
    'preciso-de-faculdade',
    'por-onde-comecar',
    'quanto-tempo-para-primeira-vaga',
    'curso-ou-autodidata',
  ],
  portfolio: [
    'o-que-colocar-no-portfolio',
    'quantos-cases',
    'projeto-ficticio-vale',
    'como-contar-um-case',
  ],
  vagas: [
    'como-conseguir-primeira-vaga',
    'o-que-esperam-de-junior',
    'como-me-preparar-para-entrevista',
    'vaga-pede-experiencia',
  ],
  guia: [
    'o-que-e-o-guia',
    'guia-substitui-curso',
    'como-usar-trilhas',
    'glossario-e-faq',
  ],
}

export const guiaFaqItems: GuiaFaqItem[] = [
  // Carreira
  {
    id: 'o-que-faz-um-product-designer',
    categoryId: 'carreira',
    question: 'O que faz um Product Designer?',
    answer: [
      'Product Designer conecta necessidade da pessoa usuária, objetivo de negócio e viabilidade técnica para desenhar experiências digitais. Pesquisa, define fluxos, prototipa interfaces, valida com pessoas reais e acompanha a implementação.',
      'No dia a dia, isso pode incluir discovery, wireframe, teste de usabilidade, spec para dev e iteração com produto e engenharia. O escopo varia por empresa e senioridade.',
    ],
  },
  {
    id: 'diferenca-ux-ui-pd',
    categoryId: 'carreira',
    question: 'Qual a diferença entre UX, UI e Product Design?',
    answer: [
      'UX foca na experiência: fluxo, usabilidade, pesquisa e problema a resolver. UI foca na camada visual da interface: layout, tipografia, cor e componentes.',
      'Product Design costuma abranger os dois e a visão de produto: priorização, métrica, hipótese e entrega em squad. No mercado brasileiro os títulos se sobrepõem; leia a descrição da vaga.',
    ],
  },
  {
    id: 'preciso-saber-codigo',
    categoryId: 'carreira',
    question: 'Preciso saber código para ser Product Designer?',
    answer: [
      'Não é obrigatório, mas ajuda entender o básico de front, responsivo e limites de implementação. Isso melhora handoff, conversa com dev e decisões de layout.',
      'Para júnior, o foco costuma ser pesquisa, prototipação e raciocínio de produto. Código vira diferencial conforme você evolui.',
    ],
  },
  {
    id: 'areas-do-product-design',
    categoryId: 'carreira',
    question: 'Quais áreas existem dentro de Product Design?',
    answer: [
      'UX Research, UI, Content Design, Design de interação, Design System, Service Design e especializações por produto (fintech, saúde, B2B). Muitas pessoas começam generalistas e aprofundam depois.',
      'Explore trilhas e conteúdos do Guia por tema para sentir qual área combina mais com você.',
    ],
  },

  // Estudos
  {
    id: 'preciso-de-faculdade',
    categoryId: 'estudos',
    question: 'Preciso de faculdade para trabalhar com Product Design?',
    answer: [
      'Não é regra absoluta. Muitas vagas pedem formação ou experiência equivalente, mas portfólio, processo de raciocínio e fit cultural pesam muito, principalmente em júnior.',
      'Faculdade em Design, Computação, Psicologia ou áreas afins pode acelerar base teórica e networking. Autodidatas entram com estudo consistente, prática e projetos bem documentados.',
    ],
  },
  {
    id: 'por-onde-comecar',
    categoryId: 'estudos',
    question: 'Por onde começar a estudar Product Design?',
    answer: [
      'Comece entendendo o básico: o que é UX, como funciona um processo de discovery e o que vai num case de portfólio. A trilha Entender o básico no Guia organiza esse primeiro passo.',
      'Intercale teoria curta com prática: refaça uma tela que você usa todo dia, documente problema, solução e aprendizado. Consistência importa mais que consumir conteúdo sem parar.',
    ],
  },
  {
    id: 'quanto-tempo-para-primeira-vaga',
    categoryId: 'estudos',
    question: 'Quanto tempo leva para conseguir a primeira vaga?',
    answer: [
      'Não existe prazo fixo. Depende de ritmo de estudo, qualidade do portfólio, região, momento do mercado e rede de contatos. Algumas pessoas levam meses; outras, mais de um ano.',
      'Foque em sinais concretos: cases publicados, feedback em comunidade, simulações de entrevista e candidaturas com processo documentado. Compare seu progresso com você mesma, não com highlight de rede social.',
    ],
  },
  {
    id: 'curso-ou-autodidata',
    categoryId: 'estudos',
    question: 'Curso pago ou estudo por conta própria?',
    answer: [
      'Os dois caminhos funcionam. Curso estruturado ajuda quem precisa de cronograma e mentoria. Autodidata com curadoria do Guia, livros e prática exige mais disciplina, mas é viável.',
      'Independentemente do caminho, pratique com projetos reais ou fictícios bem contados e busque feedback de pessoas que já trabalham na área.',
    ],
  },

  // Portfólio
  {
    id: 'o-que-colocar-no-portfolio',
    categoryId: 'portfolio',
    question: 'O que colocar no portfólio de júnior?',
    answer: [
      'Mostre processo, não só telas bonitas: contexto, problema, hipótese, o que você pesquisou, alternativas descartadas, solução e resultado ou aprendizado.',
      'Inclua 2 a 4 cases com profundidade. Redesign de app conhecido, melhoria de fluxo real ou projeto de curso bem narrado valem se a história for clara.',
    ],
  },
  {
    id: 'quantos-cases',
    categoryId: 'portfolio',
    question: 'Quantos cases preciso no portfólio?',
    answer: [
      'Dois cases sólidos já permitem conversa em processo seletivo. Três ou quatro dão variedade sem dispersar. Qualidade e clareza na narrativa vencem quantidade.',
      'Se só tem um case pronto, aprofunde esse antes de correr para o próximo.',
    ],
  },
  {
    id: 'projeto-ficticio-vale',
    categoryId: 'portfolio',
    question: 'Projeto fictício vale no portfólio?',
    answer: [
      'Sim, desde que honesto. Deixe claro que é estudo ou redesign não oficial e mostre raciocínio como faria em produto real.',
      'Evite só copiar telas de referência. Recrutadores querem ver como você pensa, pesquisa e decide.',
    ],
  },
  {
    id: 'como-contar-um-case',
    categoryId: 'portfolio',
    question: 'Como contar um case de Product Design?',
    answer: [
      'Estrutura simples: contexto, problema, papel da pessoa usuária, o que você fez (pesquisa, ideação, prototipação, teste), solução e resultado ou próximo passo.',
      'Use imagens de apoio, mas priorize texto claro. Se teve limitação (prazo, escopo, dados), mencione o que faria diferente hoje.',
    ],
  },

  // Vagas e entrevistas
  {
    id: 'como-conseguir-primeira-vaga',
    categoryId: 'vagas',
    question: 'Como conseguir a primeira vaga em Product Design?',
    answer: [
      'Portfólio claro, candidaturas consistentes e presença em comunidade. Use o mural de vagas da VagasUX, adapte currículo por vaga e peça feedback antes de enviar case.',
      'Networking ajuda, mas não substitui processo: documente aprendizados a cada entrevista e itere portfólio com base no que o mercado pede.',
    ],
  },
  {
    id: 'o-que-esperam-de-junior',
    categoryId: 'vagas',
    question: 'O que o mercado espera de um júnior?',
    answer: [
      'Curiosidade, comunicação, base de UX/UI, vontade de aprender e capacidade de receber feedback. Não se espera domínio total de produto ou pesquisa avançada.',
      'Mostre como você pensa, como colabora em squad e como documenta decisões. Atitude e clareza contam tanto quanto ferramenta.',
    ],
  },
  {
    id: 'como-me-preparar-para-entrevista',
    categoryId: 'vagas',
    question: 'Como me preparar para entrevista de Product Design?',
    answer: [
      'Revise seus cases em voz alta, prepare histórias de conflito, feedback e aprendizado, e estude a empresa antes. Leve perguntas sobre time, processo e expectativa do papel.',
      'Testes práticos podem pedir melhoria de fluxo ou critério de interface. Durma bem, compartilhe raciocínio em tempo real e seja honesta sobre o que ainda está aprendendo.',
    ],
  },
  {
    id: 'vaga-pede-experiencia',
    categoryId: 'vagas',
    question: 'E quando a vaga pede experiência que eu ainda não tenho?',
    answer: [
      'Muitas descrições são lista de desejos. Se você cobre 60 a 70% e o resto é aprendizado rápido, candidate-se mesmo assim com case que mostre potencial.',
      'Projetos pessoais, freelas, voluntariado e redesign documentado contam como experiência prática se bem narrados.',
    ],
  },

  // Sobre o Guia
  {
    id: 'o-que-e-o-guia',
    categoryId: 'guia',
    question: 'O que é o Guia do Product Designer da VagasUX?',
    answer: [
      'Curadoria gratuita de trilhas, conteúdos, glossário e FAQ para quem está entrando ou reorganizando estudos em Product Design. A VagasUX reúne o que importa para você não se perder no excesso de link.',
      'O Guia complementa vagas, comunidade e outros produtos da VagasUX. É ponto de partida, não encerramento da jornada.',
    ],
  },
  {
    id: 'guia-substitui-curso',
    categoryId: 'guia',
    question: 'O Guia substitui um curso?',
    answer: [
      'Não. O Guia organiza caminhos e explica linguagem do mercado. Curso ou mentoria trazem exercício guiado, feedback individual e ritmo estruturado.',
      'Use o Guia para navegar, o glossário para traduzir termos e trilhas para sequenciar estudo. Combine com prática e troca na comunidade.',
    ],
  },
  {
    id: 'como-usar-trilhas',
    categoryId: 'guia',
    question: 'Como usar as trilhas do Guia?',
    answer: [
      'Escolha a trilha alinhada ao seu momento: entender o básico, portfólio, research ou content design. Siga na ordem sugerida ou pule o que já domina.',
      'Marque o que leu, aplique em projeto real e volte quando precisar aprofundar. Trilha é roteiro, não checklist rígida.',
    ],
  },
  {
    id: 'glossario-e-faq',
    categoryId: 'guia',
    question: 'Qual a diferença entre glossário e FAQ?',
    answer: [
      'Glossário traduz termos e siglas do mercado de Product Design. FAQ responde dúvidas de carreira, estudo, portfólio e vagas.',
      'Começou a ouvir uma sigla na entrevista? Glossário. Travou numa decisão de carreira? FAQ. Os dois se complementam.',
    ],
  },
]

function getGuiaFaqEditorialIndex(item: GuiaFaqItem): number {
  const order = guiaFaqEditorialOrder[item.categoryId]
  const index = order.indexOf(item.id)
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
