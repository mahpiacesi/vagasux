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
  /** Nome alternativo (outro idioma ou forma expandida da sigla) */
  alternate: string
  usageNote?: string
}

/**
 * Verbete do glossário. Template enxuto.
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
  /** O que é? Incluir termos relacionados inline quando fizer sentido */
  whatIs: string[]
  /** Você provavelmente vai ouvir */
  youWillHear: string[]
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
  interface: {
    prototipos: 'Prototipação',
    estrutura: 'Estrutura e layout',
    visual: 'Elementos visuais',
    sistema: 'Sistema e componentes',
  },
  pesquisa: {
    conceitos: 'Conceitos',
    metodos: 'Métodos de pesquisa',
    analise: 'Análise e síntese',
  },
}

/**
 * Ordem recomendada de leitura (prioridade para quem está começando).
 * Novos verbetes entram no fim do subgrupo correspondente.
 */
export const guiaGlossarioEditorialOrder: Partial<
  Record<GuiaGlossarioCategoryId, readonly string[]>
> = {
  fundamentos: [
    // Áreas e disciplinas: do macro (PD) ao específico
    'product-design',
    'product-designer',
    'ux',
    'ui',
    'ux-designer',
    'ui-designer',
    'ux-research',
    'design-de-interacao',
    'content-design',
    'arquitetura-da-informacao',
    'design-visual',
    'service-design',
    'customer-experience',
    'hci',
    // Mentalidade: base → frameworks → ferramentas de pensamento
    'hcd',
    'usabilidade',
    'interacao',
    'iteracao',
    'design-thinking',
    'double-diamond',
    'lean-ux',
    'heuristicas-de-usabilidade',
    // Pessoas e contexto: quem usa → quem decide
    'pessoa-usuaria',
    'persona',
    'stakeholder',
    'cliente',
    'negocio',
    'squad',
  ],
  produto: [
    // conceitos — modelos e definições de produto
    'produto',
    'produto-digital',
    'problema',
    'solucao',
    'white-label',
    'mvp',
    'feature',
    // processo
    'discovery',
    'delivery',
    'hipotese',
    'validacao',
    // entregas
    'roadmap',
    'prd',
  ],
  interface: [
    'wireframe',
    'mockup',
    'prototipo',
    'layout',
    'grid',
    'auto-layout',
    'tipografia',
    'cor',
    'iconografia',
    'espacamento',
    'hierarquia-visual',
    'component',
    'variant',
    'estado',
    'design-system',
    'design-token',
    'ui-kit',
    'pattern',
  ],
  pesquisa: [
    'pesquisa-qualitativa',
    'pesquisa-quantitativa',
    'recrutamento',
    'participante',
    'entrevista',
    'teste-de-usabilidade',
    'questionario',
    'card-sorting',
    'tree-testing',
    'observacao-contextual',
    'sintese',
    'insight',
    'mapa-de-afinidade',
    'mapa-de-empatia',
    'roteiro-de-pesquisa',
    'mapa-de-jornada',
  ],
}

/** Verbetes planejados (sem conteúdo ainda). IDs devem bater com guiaGlossarioEditorialOrder. */
export const guiaGlossarioBacklogNotes: Partial<
  Record<GuiaGlossarioCategoryId, Record<string, string>>
> = {}

function getGuiaGlossarioEditorialIndex(entry: GuiaGlossarioEntry): number {
  const order = guiaGlossarioEditorialOrder[entry.categoryId]
  if (!order) return Number.MAX_SAFE_INTEGER
  const index = order.indexOf(entry.id)
  return index === -1 ? Number.MAX_SAFE_INTEGER : index
}

function getGuiaGlossarioCategoryIndex(
  categoryId: GuiaGlossarioCategoryId,
): number {
  return guiaGlossarioCategories.findIndex(
    (category) => category.id === categoryId,
  )
}

export function compareGuiaGlossarioEntriesEditorially(
  a: GuiaGlossarioEntry,
  b: GuiaGlossarioEntry,
): number {
  if (a.categoryId !== b.categoryId) {
    return (
      getGuiaGlossarioCategoryIndex(a.categoryId) -
      getGuiaGlossarioCategoryIndex(b.categoryId)
    )
  }

  const indexA = getGuiaGlossarioEditorialIndex(a)
  const indexB = getGuiaGlossarioEditorialIndex(b)
  if (indexA !== indexB) return indexA - indexB

  return a.term.localeCompare(b.term, 'pt-BR')
}

export function sortGuiaGlossarioEntriesEditorially(
  entries: GuiaGlossarioEntry[],
): GuiaGlossarioEntry[] {
  return [...entries].sort(compareGuiaGlossarioEntriesEditorially)
}

export type GuiaGlossarioSortMode = 'recomendada' | 'alfabetica'

export const guiaGlossarioSortModeLabels: Record<GuiaGlossarioSortMode, string> =
  {
    recomendada: 'Contextual',
    alfabetica: 'Alfabética',
  }

export function parseGuiaGlossarioSortMode(
  value: string | null,
): GuiaGlossarioSortMode {
  return value === 'alfabetica' ? 'alfabetica' : 'recomendada'
}

export function compareGuiaGlossarioEntriesAlphabetically(
  a: GuiaGlossarioEntry,
  b: GuiaGlossarioEntry,
): number {
  if (a.categoryId !== b.categoryId) {
    return (
      getGuiaGlossarioCategoryIndex(a.categoryId) -
      getGuiaGlossarioCategoryIndex(b.categoryId)
    )
  }

  return a.term.localeCompare(b.term, 'pt-BR')
}

export function sortGuiaGlossarioEntries(
  entries: GuiaGlossarioEntry[],
  sortMode: GuiaGlossarioSortMode = 'recomendada',
): GuiaGlossarioEntry[] {
  const compare =
    sortMode === 'alfabetica'
      ? compareGuiaGlossarioEntriesAlphabetically
      : compareGuiaGlossarioEntriesEditorially

  return [...entries].sort(compare)
}

export const guiaGlossarioEntries: GuiaGlossarioEntry[] = [
  // Fundamentos: areas-disciplinas
  {
    id: 'arquitetura-da-informacao',
    term: 'Arquitetura da Informação',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Information Architecture',
    },
    whatIs: [
      'Organiza, nomeia e estrutura conteúdos em produtos digitais para que a pessoa usuária encontre o que precisa sem se perder. Pense em menus, categorias, rótulos e hierarquia de telas.',
      'Product Designers e pessoas de UX Research colaboram nessa área quando definem como um app ou site apresenta informação de forma clara e previsível.',
    ],
    youWillHear: [
      '"Precisamos revisar a arquitetura da informação antes de desenhar as telas."',
      '"A pessoa usuária não achou a funcionalidade. Pode ser problema de arquitetura da informação."',
    ],
  },
  {
    id: 'content-design',
    term: 'Content Design',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Design de Conteúdo',
      usageNote:
        'No Brasil, muitas vagas ainda usam UX Writing para o mesmo tipo de trabalho. Os dois nomes convivem no mercado.',
    },
    whatIs: [
      'Cuida dos textos dentro de produtos digitais: títulos, botões, mensagens de erro, instruções e microtextos que orientam a pessoa usuária. No mercado, esse material também costuma ser chamado de copy.',
      'Prioriza clareza, confiança e ajudar a pessoa usuária a completar a tarefa sem travar.',
    ],
    youWillHear: [
      '"Esse botão precisa de um copy mais claro."',
      '"Vamos passar essas telas com Content Design antes do handoff."',
    ],
  },
  {
    id: 'customer-experience',
    term: 'CX',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Customer Experience',
      usageNote:
        'CX aparece em empresas que olham a jornada completa da pessoa, incluindo atendimento, loja física e canais fora do app.',
    },
    whatIs: [
      'A experiência que uma pessoa tem com uma marca ou empresa em todos os pontos de contato. Pode incluir suporte, loja, redes sociais e comunicação pós-venda.',
      'UX e CX se cruzam quando o produto digital faz parte de uma experiência maior. Em conversas de equipe, CX costuma vir de Marketing, Atendimento ou Estratégia.',
    ],
    youWillHear: [
      '"Precisamos alinhar a UX do app com a estratégia de CX da marca."',
      '"O time de CX quer entender a jornada completa, incluindo fora do app."',
    ],
  },
  {
    id: 'design-de-interacao',
    term: 'Design de Interação',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Interaction Design',
      usageNote:
        'Em vagas internacionais, a sigla IxD também aparece, mas no Brasil o termo completo é mais comum.',
    },
    whatIs: [
      'Projeta como a pessoa usuária interage com um produto digital: o que acontece quando ela toca, clica, arrasta ou preenche um campo.',
      'Foca no comportamento e no fluxo entre as ações: respostas do sistema, transições e sequência de passos.',
    ],
    youWillHear: [
      '"Esse fluxo precisa de um design de interação mais claro."',
      '"Vamos revisar as interações desse formulário antes de polir o visual."',
    ],
  },
  {
    id: 'design-visual',
    term: 'Design Visual',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    whatIs: [
      'Cria a identidade visual de um produto: cores, tipografia, ícones, espaçamento e hierarquia do que aparece na tela.',
      'UI Designers e Product Designers usam design visual para deixar interfaces claras, consistentes e alinhadas à marca. Visual mal resolvido atrapalha a leitura e a usabilidade.',
    ],
    youWillHear: [
      '"O design visual desse componente ainda não está alinhado ao restante do produto."',
      '"Antes de desenvolver, vamos fechar o design visual dessa tela."',
    ],
  },
  {
    id: 'hci',
    term: 'HCI',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Interação Humano-Computador',
      usageNote:
        'Frequente em cursos, artigos e empresas com raiz acadêmica. Em vagas e conversas de produto, costuma aparecer como UX ou HCD.',
    },
    whatIs: [
      'Campo de estudo sobre como pessoas interagem com computadores e sistemas digitais. Muitos conceitos de UX saíram daqui.',
    ],
    youWillHear: [
      '"Meu mestrado foi em HCI, mas hoje trabalho como Product Designer."',
      '"Esse paper de HCI fala sobre usabilidade de interfaces."',
    ],
  },
  {
    id: 'product-design',
    term: 'Product Design',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    whatIs: [
      'Cria e evolui produtos digitais, unindo estratégia, pesquisa, experiência da pessoa usuária (UX) e interface (UI) para resolver problemas e gerar valor.',
    ],
    youWillHear: [
      '"Vamos envolver Product Design desde o início do projeto."',
      '"O time de Product Design está trabalhando nessa funcionalidade."',
    ],
  },
  {
    id: 'product-designer',
    term: 'Product Designer',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    whatIs: [
      'Pessoa responsável por projetar a experiência de um produto digital. Trabalha desde a compreensão do problema até a criação e validação de soluções, colaborando com áreas como Produto, Engenharia e Pesquisa.',
    ],
    youWillHear: [
      '"A pessoa Product Designer vai validar esse fluxo antes do desenvolvimento."',
      '"Vamos alinhar essa decisão com Product Design."',
    ],
  },
  {
    id: 'service-design',
    term: 'Service Design',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Design de Serviços',
      usageNote:
        'Os dois nomes convivem em vagas e materiais da área.',
    },
    whatIs: [
      'Projeta serviços completos, mapeando todas as etapas que a pessoa passa, incluindo momentos fora da tela: fila, atendimento, entrega, suporte.',
      'Product Designers encontram Service Design em empresas de saúde, bancos, varejo e logística, em que a experiência vai além do app.',
    ],
    youWillHear: [
      '"Esse projeto envolve service design além da interface do app."',
      '"Precisamos mapear o serviço ponta a ponta, do app ao atendimento."',
    ],
  },
  {
    id: 'ui',
    term: 'UI',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'User Interface',
      usageNote:
        'UI é uma das siglas mais usadas no mercado. Quase sempre aparece junto com UX em vagas e conversas de equipe.',
    },
    whatIs: [
      'Camada visual e interativa de um produto digital: telas, botões, cores, tipografia, ícones e componentes que a pessoa usuária vê e toca.',
      'Cobre como cada tela funciona e se apresenta. Na prática, Product Designers costumam trabalhar UX e UI juntos.',
    ],
    youWillHear: [
      '"A UX desse fluxo está ok, mas a UI ainda precisa de refinamento."',
      '"Vamos alinhar UI com o design system antes de entregar."',
    ],
  },
  {
    id: 'ui-designer',
    term: 'UI Designer',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Designer de Interface',
      usageNote:
        'Também aparece como Designer de Interfaces ou Designer Visual em algumas vagas.',
    },
    whatIs: [
      'Pessoa especializada em criar interfaces digitais: layout, componentes, estados visuais e consistência com a marca e o design system.',
      'Ela trabalha próximo de Product Designers, UX Designers e Engenharia para garantir que o visual seja claro, viável de desenvolver e agradável de usar.',
    ],
    youWillHear: [
      '"A pessoa UI Designer vai montar as telas finais desse fluxo."',
      '"Precisamos de alguém com foco em UI para esse projeto."',
    ],
  },
  {
    id: 'ux',
    term: 'UX',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'User Experience',
      usageNote:
        'No mercado de tecnologia, UX é a forma mais comum de se referir à experiência de uso.',
    },
    whatIs: [
      'Tudo o que a pessoa sente, pensa e consegue fazer ao usar um produto digital: se entende o fluxo, completa a tarefa ou desiste no meio do caminho.',
      'Boas decisões de UX consideram contexto, objetivo da pessoa usuária e limites do negócio. Na prática, Product Designers costumam trabalhar UX e UI juntos.',
    ],
    youWillHear: [
      '"Precisamos melhorar a UX desse fluxo de cadastro."',
      '"Antes de polir a interface, vamos validar a UX com pessoas usuárias."',
    ],
  },
  {
    id: 'ux-designer',
    term: 'UX Designer',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Designer de Experiência',
      usageNote:
        'Muitas vagas no Brasil pedem UX/UI Designer no mesmo perfil. Quando isso acontece, o escopo costuma ser parecido com o de Product Design.',
    },
    whatIs: [
      'Pessoa focada em projetar a experiência de uso de um produto digital: entender a pessoa usuária, mapear fluxos, testar ideias e melhorar a jornada.',
    ],
    youWillHear: [
      '"A pessoa UX Designer vai conduzir o teste de usabilidade dessa versão."',
      '"A vaga é UX Designer, mas pede Figma e UI também."',
    ],
  },
  {
    id: 'ux-research',
    term: 'UX Research',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      alternate: 'Pesquisa em UX',
      usageNote:
        'Também aparece como User Research ou Pesquisa com Usuários em vagas e materiais em português. O cargo costuma ser UX Researcher.',
    },
    whatIs: [
      'Estuda pessoas usuárias para entender necessidades, comportamentos e dificuldades antes e durante o desenvolvimento de um produto.',
      'Product Designers colaboram com UX Researchers e muitas vezes fazem pesquisa no próprio dia a dia. Entrevistas, testes e síntese de dados ficam na categoria Pesquisa deste glossário.',
    ],
    youWillHear: [
      '"Precisamos de uma pessoa de UX Research antes de fechar essa solução."',
      '"A UX Researcher vai recrutar participantes para o estudo."',
    ],
  },

  // Fundamentos: mentalidade
  {
    id: 'design-thinking',
    term: 'Design Thinking',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    whatIs: [
      'Forma de resolver problemas colocando a pessoa usuária no centro, explorando várias ideias antes de fechar uma solução.',
      'Em empresas, aparece em workshops com post-its, protótipos rápidos e conversas entre áreas. Costuma ajudar o time a destravar desafios complexos.',
    ],
    youWillHear: [
      '"Vamos fazer um workshop de design thinking para entender o problema."',
      '"Essa etapa segue a lógica de design thinking: divergir antes de convergir."',
    ],
  },
  {
    id: 'double-diamond',
    term: 'Double Diamond',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    originalName: {
      alternate: 'Duplo Diamante',
      usageNote:
        'O nome em português aparece em alguns materiais, mas Double Diamond continua o mais usado em empresas e cursos.',
    },
    whatIs: [
      'Modelo visual com quatro fases: descobrir, definir, desenvolver e entregar. Bons projetos alternam exploração ampla e foco em uma direção.',
      'Ajuda a explicar a ordem do trabalho: primeiro se explora o problema, depois se explora a solução.',
    ],
    youWillHear: [
      '"Estamos no primeiro diamante, ainda descobrindo o problema."',
      '"Depois de definir, entramos no segundo diamante para explorar soluções."',
    ],
  },
  {
    id: 'hcd',
    term: 'HCD',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    originalName: {
      alternate: 'Human-Centered Design',
      usageNote:
        'Também aparece como UCD (User-Centered Design) ou design centrado no usuário em materiais mais antigos.',
    },
    whatIs: [
      'Abordagem de criar produtos a partir das necessidades reais de pessoas usuárias, testando ideias cedo e ajustando com feedback.',
      'É a base de como Product Designers pensam: entender antes de desenhar, validar antes de escalar.',
    ],
    youWillHear: [
      '"Esse projeto segue uma abordagem HCD."',
      '"Precisamos de mais pesquisa para manter o processo centrado na pessoa usuária."',
    ],
  },
  {
    id: 'heuristicas-de-usabilidade',
    term: 'Heurísticas de usabilidade',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    originalName: {
      alternate: 'Usability Heuristics',
      usageNote:
        'As dez heurísticas de Jakob Nielsen são a referência mais citada em UX no mundo.',
    },
    whatIs: [
      'Princípios que ajudam a avaliar se uma interface é fácil de usar. A lista mais conhecida é a de Jakob Nielsen, com dez regras como dar feedback claro, prevenir erros e manter consistência.',
      'Product Designers usam essas heurísticas para revisar telas, dar feedback e conversar com o time sobre melhorias.',
    ],
    youWillHear: [
      '"Essa tela quebra a heurística de visibilidade do status do sistema."',
      '"Vamos revisar o fluxo com as heurísticas de Nielsen."',
    ],
  },
  {
    id: 'interacao',
    term: 'Interação',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    whatIs: [
      'O que acontece quando a pessoa usuária faz algo no produto: toca, clica, arrasta, preenche um campo ou confirma uma ação.',
      'Cada tela reúne vários pontos de interação. Design de Interação define como cada um funciona.',
    ],
    youWillHear: [
      '"Essa interação está confusa, a pessoa usuária não entendeu o próximo passo."',
      '"Vamos mapear as interações desse fluxo antes de polir o visual."',
    ],
  },
  {
    id: 'iteracao',
    term: 'Iteração',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    whatIs: [
      'Repetir o trabalho com melhorias a cada rodada: prototipar, testar, ajustar e testar de novo.',
      'Mentalidade central em Product Design: produtos bons raramente nascem certos na primeira versão.',
    ],
    youWillHear: [
      '"Precisamos de mais uma iteração nesse fluxo."',
      '"Na próxima iteração a gente inclui o feedback do teste."',
    ],
  },
  {
    id: 'lean-ux',
    term: 'Lean UX',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    whatIs: [
      'Forma de trabalhar em Product Design com ciclos curtos de conversa, protótipo e teste com o time. Aprende rápido o que funciona antes de investir meses em uma solução errada.',
    ],
    youWillHear: [
      '"Nesse projeto vamos seguir Lean UX, com protótipos rápidos."',
      '"Lean UX pede iterar com foco, com pesquisa envolvida."',
    ],
  },
  {
    id: 'usabilidade',
    term: 'Usabilidade',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    originalName: {
      alternate: 'Usability',
      usageNote:
        'Um dos conceitos mais citados em conversas de UX e em vagas de Product Design.',
    },
    whatIs: [
      'Quão fácil e intuitivo é usar um produto digital. Uma interface usável deixa claro o que fazer, ajuda a pessoa a completar a tarefa e não exige esforço desnecessário.',
      'Product Designers pensam em usabilidade ao desenhar fluxos, rótulos e feedbacks. Testes com pessoas usuárias, na categoria Pesquisa, mostram onde a usabilidade está falhando.',
    ],
    youWillHear: [
      '"A usabilidade desse formulário está ruim, muita gente erra no mesmo campo."',
      '"Antes de lançar, vamos checar usabilidade com um teste rápido."',
    ],
  },

  // Fundamentos: pessoas-contexto
  {
    id: 'cliente',
    term: 'Cliente',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Quem contrata, paga ou decide pela compra de um produto ou serviço. Às vezes coincide com a pessoa usuária; às vezes são pessoas diferentes.',
      'Em produtos B2B, agências ou plataformas white-label, quem usa no dia a dia pode ser diferente de quem assina o contrato. Product Designers precisam entender os dois lados.',
    ],
    youWillHear: [
      '"O cliente pediu essa funcionalidade, mas a pessoa usuária não usa."',
      '"Precisamos apresentar a proposta para o cliente na sexta."',
    ],
  },
  {
    id: 'negocio',
    term: 'Negócio',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Neste contexto, a perspectiva de metas, receita, custos, estratégia e viabilidade de um produto digital.',
      'Product Designers equilibram necessidades da pessoa usuária com objetivos do negócio e priorizam o que a empresa consegue investir agora.',
    ],
    youWillHear: [
      '"Essa solução é boa para UX, mas o negócio não prioriza agora."',
      '"Precisamos alinhar design com objetivos de negócio."',
    ],
  },
  {
    id: 'pessoa-usuaria',
    term: 'Pessoa usuária',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Quem usa um produto ou serviço digital no dia a dia. Na VagasUX preferimos esse termo; no mercado, "usuário" e "user" ainda aparecem o tempo todo e significam a mesma coisa.',
    ],
    youWillHear: [
      '"Quem é a pessoa usuária principal desse produto?"',
      '"Precisamos recrutar usuários para o teste."',
    ],
  },
  {
    id: 'persona',
    term: 'Persona',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Personagem fictício baseado em pesquisa, com nome, contexto, objetivos e dores de uma pessoa usuária representativa. Product Designers usam persona para alinhar o time sobre para quem projetam e priorizam decisões.',
      'Público-alvo descreve um segmento amplo de mercado; persona dá rosto e contexto a um perfil dentro dele.',
    ],
    youWillHear: [
      '"Vamos revisar a persona antes de desenhar esse fluxo."',
      '"Essa decisão faz sentido para a nossa persona principal?"',
    ],
  },
  {
    id: 'squad',
    term: 'Squad',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    originalName: {
      alternate: 'Equipe',
      usageNote:
        'Termo popularizado por modelos de organização como o do Spotify. No Brasil, time ou squad aparecem com a mesma ideia.',
    },
    whatIs: [
      'Time enxuto e multidisciplinar responsável por uma parte do produto ou por uma entrega. Costuma reunir Product Design, Produto, Engenharia e outras áreas conforme a necessidade.',
      'Trabalhar em squad significa decidir perto de quem pesquisa, desenha, desenvolve e mede resultados.',
    ],
    youWillHear: [
      '"Qual squad vai pegar essa funcionalidade?"',
      '"No nosso squad tem Product Designer, dev e PM."',
    ],
  },
  {
    id: 'stakeholder',
    term: 'Stakeholder',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    originalName: {
      alternate: 'Parte Interessada',
      usageNote:
        'No mercado brasileiro de tecnologia, stakeholder costuma aparecer no original em inglês.',
    },
    whatIs: [
      'Qualquer pessoa ou grupo com interesse ou influência sobre um projeto: liderança, Produto, Engenharia, Marketing, jurídico, suporte ou cliente.',
      'Product Designers alinham expectativas com stakeholders e priorizam o que impacta a pessoa usuária.',
    ],
    youWillHear: [
      '"Vamos apresentar essa proposta para os stakeholders."',
      '"O stakeholder pediu prazo menor, precisamos negociar escopo."',
    ],
  },

  // Interface: prototipação
  {
    id: 'wireframe',
    term: 'Wireframe',
    categoryId: 'interface',
    subgroup: 'prototipos',
    originalName: {
      alternate: 'Esqueleto de tela',
      usageNote:
        'Wireframe é o termo mais usado em empresas e ferramentas como Figma, mesmo no Brasil.',
    },
    whatIs: [
      'Representação simples de uma tela ou fluxo, com caixas, rótulos e hierarquia, sem cores finais nem visual polido. Product Designers usam wireframe para validar estrutura antes de investir em detalhe visual.',
      'Costuma ser preto e branco ou tons de cinza. Pode ser feito no Figma, no papel ou em ferramentas de prototipação.',
    ],
    youWillHear: [
      '"Vamos desenhar o wireframe desse fluxo antes de partir para o visual."',
      '"O wireframe está aprovado, agora partimos para o mockup."',
    ],
  },
  {
    id: 'mockup',
    term: 'Mockup',
    categoryId: 'interface',
    subgroup: 'prototipos',
    originalName: {
      alternate: 'Maquete visual',
      usageNote:
        'Mockup também aparece como mock-up ou maquete de interface em materiais em português.',
    },
    whatIs: [
      'Representação estática de uma tela com visual mais próximo do produto final: cores, tipografia, imagens e componentes definidos. Ainda sem interação clicável como um protótipo funcional.',
      'Product Designers usam mockup para alinhar direção visual com o time e stakeholders antes do desenvolvimento.',
    ],
    youWillHear: [
      '"Precisamos fechar o mockup do celular dessa home antes do handoff."',
      '"O mockup ficou alinhado com a marca, falta validar o fluxo."',
    ],
  },
  {
    id: 'prototipo',
    term: 'Protótipo',
    categoryId: 'interface',
    subgroup: 'prototipos',
    originalName: {
      alternate: 'Prototype',
      usageNote:
        'Protótipo interativo ou clicável também aparece como prototype ou protótipo de alta fidelidade.',
    },
    whatIs: [
      'Versão navegável de um fluxo ou tela, com cliques, transições e caminhos simulados. Product Designers usam protótipo para testar ideias com pessoas usuárias antes do desenvolvimento.',
      'Pode evoluir a partir de wireframe ou mockup quando o time adiciona navegação e interação para validar a experiência.',
    ],
    youWillHear: [
      '"Vamos montar um protótipo clicável para o teste de usabilidade."',
      '"O protótipo desse fluxo já está com a navegação linkada."',
    ],
  },

  // Interface: estrutura e layout
  {
    id: 'layout',
    term: 'Layout',
    categoryId: 'interface',
    subgroup: 'estrutura',
    whatIs: [
      'Organização dos elementos na tela: onde ficam header, conteúdo, ações e navegação. Define ritmo, alinhamento e prioridade do que a pessoa usuária vê primeiro.',
      'Product Designers ajustam layout ao pensar em desktop, tablet e mobile. Grid e auto layout ajudam a manter consistência entre telas.',
    ],
    youWillHear: [
      '"O layout dessa listagem está apertado no mobile."',
      '"Vamos revisar o layout antes de fechar os componentes."',
    ],
  },
  {
    id: 'grid',
    term: 'Grid',
    categoryId: 'interface',
    subgroup: 'estrutura',
    originalName: {
      alternate: 'Grade de layout',
      usageNote:
        'Grid é o termo mais usado em Figma, design system e conversas de UI.',
    },
    whatIs: [
      'Sistema de colunas e margens que alinha elementos na tela. Ajuda a manter consistência entre páginas e breakpoints.',
      'Product Designers usam grid no Figma e documentam no design system quantas colunas cada tamanho de tela usa.',
    ],
    youWillHear: [
      '"Essa tela segue grid de 12 colunas no desktop."',
      '"Precisamos alinhar esse bloco ao grid do design system."',
    ],
  },
  {
    id: 'auto-layout',
    term: 'Auto Layout',
    categoryId: 'interface',
    subgroup: 'estrutura',
    originalName: {
      alternate: 'Layout automático',
      usageNote:
        'Recurso do Figma; o nome em inglês é o que aparece na ferramenta e no mercado.',
    },
    whatIs: [
      'Recurso do Figma que organiza elementos em fila ou coluna e redimensiona o container conforme o conteúdo muda. Facilita botões, cards e listas que crescem ou encolhem.',
      'Product Designers usam auto layout para entregar componentes mais flexíveis e próximos do comportamento real na implementação.',
    ],
    youWillHear: [
      '"Coloca auto layout nesse card para o texto não quebrar o componente."',
      '"Esse botão precisa de auto layout para funcionar com copy maior."',
    ],
  },

  // Interface: sistema e componentes
  {
    id: 'design-system',
    term: 'Design System',
    categoryId: 'interface',
    subgroup: 'sistema',
    originalName: {
      alternate: 'Sistema de design',
      usageNote:
        'Design System continua no original em inglês na maioria das empresas de tecnologia no Brasil.',
    },
    whatIs: [
      'Conjunto de componentes, padrões, tokens e documentação que guiam como um produto digital se parece e se comporta. Garante consistência entre telas, times e releases.',
      'Product Designers e UI Designers contribuem ao criar, usar e evoluir o design system. Em squads enxutas, a biblioteca costuma viver no Figma; empresas maiores podem ter time dedicado.',
    ],
    youWillHear: [
      '"Esse botão já existe no design system, vamos reutilizar."',
      '"Precisamos atualizar o design system antes de lançar essa feature."',
    ],
  },
  {
    id: 'component',
    term: 'Componente',
    categoryId: 'interface',
    subgroup: 'sistema',
    whatIs: [
      'Peça reutilizável de interface: botão, campo de texto, card, modal e outros elementos que se repetem no produto.',
      'Faz parte do design system. Alterar um componente base reflete em todas as telas que o usam.',
    ],
    youWillHear: [
      '"Usa o componente de input do design system."',
      '"Esse card precisa virar componente para o time inteiro usar."',
    ],
  },
  {
    id: 'variant',
    term: 'Variant',
    categoryId: 'interface',
    subgroup: 'sistema',
    originalName: {
      alternate: 'Variante',
      usageNote:
        'Variant e variante aparecem no Figma e em design systems para versões de um mesmo componente.',
    },
    whatIs: [
      'Versão de um componente com visual ou comportamento diferente: botão primário e secundário, card compacto e expandido, input com erro e input padrão.',
      'Product Designers nomeiam variants no Figma para o time escolher a opção certa sem redesenhar do zero.',
    ],
    youWillHear: [
      '"Usa a variant secundária do botão nessa tela."',
      '"Faltou mapear a variant de erro nesse componente."',
    ],
  },
  {
    id: 'estado',
    term: 'Estado',
    categoryId: 'interface',
    subgroup: 'sistema',
    originalName: {
      alternate: 'State',
      usageNote:
        'State também aparece em specs e handoff quando o assunto é comportamento visual do componente.',
    },
    whatIs: [
      'Situação visual de um elemento em um momento de uso: padrão, hover, pressed, disabled, focus, loading e error.',
      'Product Designers desenham estados para o componente funcionar em condições reais. Estados incompletos geram dúvida na implementação.',
    ],
    youWillHear: [
      '"Faltou o estado disabled nesse botão."',
      '"Vamos revisar os estados de hover e focus desse input."',
    ],
  },
  {
    id: 'design-token',
    term: 'Design Token',
    categoryId: 'interface',
    subgroup: 'sistema',
    originalName: {
      alternate: 'Token de design',
      usageNote:
        'Design token continua no original em inglês na maioria dos design systems.',
    },
    whatIs: [
      'Valor nomeado de design: cor, espaçamento, raio de borda, tipografia. Exemplo: color-primary-500 ou spacing-md.',
      'Product Designers definem tokens no design system; Engenharia traduz para código. A implementação técnica entra na categoria Desenvolvimento.',
    ],
    youWillHear: [
      '"Esse azul precisa virar token no design system."',
      '"Vamos alinhar spacing com os tokens antes do handoff."',
    ],
  },
  {
    id: 'ui-kit',
    term: 'UI Kit',
    categoryId: 'interface',
    subgroup: 'sistema',
    originalName: {
      alternate: 'Kit de interface',
      usageNote:
        'UI Kit é o nome mais comum em Figma Community, vagas e materiais de Product Design.',
    },
    whatIs: [
      'Conjunto de componentes e estilos prontos para montar telas de um produto. Pode ser biblioteca interna, arquivo do Figma ou base antes de um design system completo.',
      'Product Designers reutilizam UI kit para ganhar velocidade. Design system costuma ser a evolução documentada e governada desse conjunto.',
    ],
    youWillHear: [
      '"Vamos partir do UI kit da marca nesse projeto."',
      '"Esse UI kit já tem input, modal e tabela prontos."',
    ],
  },
  {
    id: 'pattern',
    term: 'Pattern',
    categoryId: 'interface',
    subgroup: 'sistema',
    originalName: {
      alternate: 'Padrão de interface',
      usageNote:
        'Pattern library ou UI pattern também aparecem em design systems maduros.',
    },
    whatIs: [
      'Solução recorrente para um problema de interface: login, empty state, onboarding, confirmação de exclusão, paginação.',
      'Product Designers consultam patterns para resolver casos comuns com consistência. Podem virar componentes ou composições no design system.',
    ],
    youWillHear: [
      '"Esse empty state segue o pattern do design system."',
      '"Precisamos de um pattern de confirmação para ações destrutivas."',
    ],
  },

  // Interface: elementos visuais
  {
    id: 'tipografia',
    term: 'Tipografia',
    categoryId: 'interface',
    subgroup: 'visual',
    originalName: {
      alternate: 'Typography',
    },
    whatIs: [
      'Escolha e uso de fontes, tamanhos, pesos e espaçamento entre letras e linhas na interface. Afeta leitura, hierarquia e sensação da marca na tela.',
      'Product Designers definem escala tipográfica no design system: título, corpo, legenda e labels.',
    ],
    youWillHear: [
      '"A tipografia dessa tela está pequena demais para mobile."',
      '"Vamos alinhar a tipografia com o design system."',
    ],
  },
  {
    id: 'cor',
    term: 'Cor',
    categoryId: 'interface',
    subgroup: 'visual',
    originalName: {
      alternate: 'Color',
      usageNote:
        'Paleta de cores e color tokens são expressões comuns no mesmo contexto.',
    },
    whatIs: [
      'Uso de cores na interface: marca, feedback, estados e contraste. Inclui primária, secundária, neutros, sucesso, erro e aviso.',
      'Product Designers documentam cores como tokens no design system para manter consistência entre telas e plataformas.',
    ],
    youWillHear: [
      '"Essa cor de erro não está no token do design system."',
      '"Vamos revisar contraste de cor nesse botão."',
    ],
  },
  {
    id: 'iconografia',
    term: 'Iconografia',
    categoryId: 'interface',
    subgroup: 'visual',
    originalName: {
      alternate: 'Iconography',
    },
    whatIs: [
      'Conjunto de ícones usados no produto: navegação, ações, status e reforço de texto. Precisa ser clara, consistente e legível em tamanhos pequenos.',
      'Product Designers escolhem biblioteca de ícones ou desenham set customizado alinhado ao design system.',
    ],
    youWillHear: [
      '"Esse ícone não comunica a ação, vamos trocar."',
      '"A iconografia precisa seguir o mesmo stroke do design system."',
    ],
  },
  {
    id: 'espacamento',
    term: 'Espaçamento',
    categoryId: 'interface',
    subgroup: 'visual',
    originalName: {
      alternate: 'Spacing',
      usageNote:
        'Spacing scale e spacing token aparecem em specs e design systems.',
    },
    whatIs: [
      'Distâncias entre elementos: padding interno, margin entre blocos e respiro da tela. Escala de espaçamento deixa a interface organizada e previsível.',
      'Product Designers usam múltiplos de 4 ou 8 px e registram os valores como tokens. Auto layout no Figma ajuda a aplicar spacing com consistência.',
    ],
    youWillHear: [
      '"O spacing entre esses cards está inconsistente."',
      '"Usa spacing-md do token nesse padding."',
    ],
  },
  {
    id: 'hierarquia-visual',
    term: 'Hierarquia visual',
    categoryId: 'interface',
    subgroup: 'visual',
    whatIs: [
      'Ordem de importância do que aparece na tela, guiada por tamanho, peso, cor, contraste e posição. Mostra o que a pessoa usuária deve ler ou fazer primeiro.',
      'Product Designers ajustam hierarquia visual com tipografia, spacing e componentes para deixar fluxos mais claros.',
    ],
    youWillHear: [
      '"A hierarquia visual dessa tela está plana, tudo compete por atenção."',
      '"Precisamos reforçar hierarquia visual no CTA principal."',
    ],
  },

  // Pesquisa: conceitos
  {
    id: 'pesquisa-qualitativa',
    term: 'Pesquisa qualitativa',
    categoryId: 'pesquisa',
    subgroup: 'conceitos',
    whatIs: [
      'Busca entender motivações, contexto e comportamento por meio de conversas, observação e materiais abertos. Respostas costumam ser textuais e interpretativas, não só números.',
      'Product Designers usam pesquisa qualitativa em discovery, entrevistas e testes para aprofundar o porquê por trás de uma dor ou decisão.',
    ],
    youWillHear: [
      '"Precisamos de pesquisa qualitativa antes de fechar o escopo."',
      '"Esse insight veio de uma rodada qualitativa com cinco participantes."',
    ],
  },
  {
    id: 'pesquisa-quantitativa',
    term: 'Pesquisa quantitativa',
    categoryId: 'pesquisa',
    subgroup: 'conceitos',
    whatIs: [
      'Coleta dados em escala para medir frequência, preferência ou comportamento com números. Questionários, analytics e surveys entram aqui.',
      'Product Designers combinam pesquisa quantitativa com qualitativa: números mostram o tamanho do problema; conversas explicam o motivo.',
    ],
    youWillHear: [
      '"Vamos validar essa hipótese com pesquisa quantitativa."',
      '"O survey mostrou que 60% abandonam nessa etapa."',
    ],
  },
  {
    id: 'recrutamento',
    term: 'Recrutamento',
    categoryId: 'pesquisa',
    subgroup: 'conceitos',
    whatIs: [
      'Processo de encontrar e convidar pessoas usuárias certas para participar de um estudo. Define perfil, canal, critérios de inclusão e quantidade de participantes.',
      'Product Designers e UX Researchers alinham recrutamento ao objetivo da pesquisa: perfil errado distorce o resultado.',
    ],
    youWillHear: [
      '"O recrutamento ainda não fechou, faltam duas pessoas do perfil enterprise."',
      '"Quem cuida do recrutamento para o teste de usabilidade?"',
    ],
  },
  {
    id: 'participante',
    term: 'Participante',
    categoryId: 'pesquisa',
    subgroup: 'conceitos',
    whatIs: [
      'Pessoa usuária convidada a contribuir em um estudo: entrevista, teste, questionário ou observação. Também aparece como respondente em formulários.',
      'Product Designers tratam participantes com clareza sobre objetivo, tempo e uso dos dados. Recrutamento define quem entra e quantos são necessários.',
    ],
    youWillHear: [
      '"Precisamos de mais um participante com esse perfil."',
      '"O participante travou na mesma tarefa que vimos na entrevista anterior."',
    ],
  },

  // Pesquisa: métodos
  {
    id: 'entrevista',
    term: 'Entrevista',
    categoryId: 'pesquisa',
    subgroup: 'metodos',
    originalName: {
      alternate: 'Entrevista com usuários',
      usageNote:
        'User interview também aparece em materiais e vagas em inglês.',
    },
    whatIs: [
      'Conversa guiada para entender contexto, rotina, dores e expectativas de uma pessoa usuária. Pode ser exploratória, de validação ou de aprofundamento.',
      'Product Designers conduzem entrevistas com roteiro flexível, ouvem mais do que falam e registram citações e padrões para a síntese.',
    ],
    youWillHear: [
      '"Vamos fazer três entrevistas antes de desenhar o fluxo."',
      '"Na entrevista de ontem, duas pessoas citaram a mesma dificuldade."',
    ],
  },
  {
    id: 'teste-de-usabilidade',
    term: 'Teste de usabilidade',
    categoryId: 'pesquisa',
    subgroup: 'metodos',
    originalName: {
      alternate: 'Usability test',
      usageNote:
        'Teste moderado e teste não moderado são variações comuns desse método.',
    },
    whatIs: [
      'Sessão em que uma pessoa usuária tenta completar tarefas reais em um protótipo ou produto, enquanto o time observa onde trava, erra ou hesita.',
      'Product Designers preparam tarefas, conduzem ou moderam a sessão e registram achados para priorizar melhorias.',
    ],
    youWillHear: [
      '"Marcamos teste de usabilidade para quinta com cinco participantes."',
      '"No teste de usabilidade, ninguém achou o botão de salvar."',
    ],
  },
  {
    id: 'questionario',
    term: 'Questionário',
    categoryId: 'pesquisa',
    subgroup: 'metodos',
    originalName: {
      alternate: 'Survey',
      usageNote:
        'Survey aparece em ferramentas, relatórios e vagas em inglês.',
    },
    whatIs: [
      'Formulário com perguntas fechadas ou abertas aplicado a muitas pessoas usuárias. Serve para medir satisfação, preferência, frequência ou validar hipóteses em escala.',
      'Product Designers usam questionário quando precisam de volume de respostas. Perguntas claras e objetivas aumentam a qualidade dos dados.',
    ],
    youWillHear: [
      '"Vamos disparar um questionário depois do lançamento."',
      '"O survey rodou com duzentas respostas na semana passada."',
    ],
  },
  {
    id: 'card-sorting',
    term: 'Card Sorting',
    categoryId: 'pesquisa',
    subgroup: 'metodos',
    originalName: {
      alternate: 'Ordenação de cartões',
      usageNote:
        'Card sort e card sorting aparecem em ferramentas de pesquisa e em conversas de arquitetura da informação.',
    },
    whatIs: [
      'Método em que pessoas usuárias agrupam rótulos ou itens do produto do jeito que faz sentido para elas. Ajuda a definir menus, categorias e arquitetura da informação.',
      'Product Designers usam card sorting aberto ou fechado para validar como organizar conteúdo antes de fechar a navegação.',
    ],
    youWillHear: [
      '"Precisamos de um card sorting antes de redesenhar o menu."',
      '"No card sort, todo mundo juntou configurações e conta no mesmo grupo."',
    ],
  },
  {
    id: 'tree-testing',
    term: 'Tree Testing',
    categoryId: 'pesquisa',
    subgroup: 'metodos',
    originalName: {
      alternate: 'Teste de árvore',
      usageNote:
        'Tree test costuma aparecer em ferramentas de pesquisa em inglês.',
    },
    whatIs: [
      'Teste em que pessoas usuárias navegam por uma estrutura de menus em texto, sem visual da interface, para achar onde ficaria um item. Valida se a arquitetura da informação funciona.',
      'Product Designers usam tree testing depois de card sorting ou quando a navegação já está definida em outline.',
    ],
    youWillHear: [
      '"O tree test mostrou que ninguém acha Relatórios no menu atual."',
      '"Vamos rodar tree testing antes de implementar a nova IA."',
    ],
  },
  {
    id: 'observacao-contextual',
    term: 'Observação contextual',
    categoryId: 'pesquisa',
    subgroup: 'metodos',
    originalName: {
      alternate: 'Contextual inquiry',
      usageNote:
        'Shadowing também aparece quando o foco é acompanhar a rotina real de uso.',
    },
    whatIs: [
      'Acompanhamento de uma pessoa usuária no ambiente real de uso: escritório, loja ou app no dia a dia. Mostra comportamento que entrevista sozinha nem sempre revela.',
      'Product Designers observam tarefas reais, fazem perguntas no momento certo e capturam fricções que a pessoa nem verbaliza espontaneamente.',
    ],
    youWillHear: [
      '"Na observação contextual, vimos que elas anotam o código em papel."',
      '"Precisamos de shadowing com operadores de loja, não só entrevista."',
    ],
  },

  // Pesquisa: análise e síntese
  {
    id: 'sintese',
    term: 'Síntese',
    categoryId: 'pesquisa',
    subgroup: 'analise',
    whatIs: [
      'Etapa de organizar dados brutos de pesquisa em padrões, temas e conclusões acionáveis. Inclui agrupar citações, notas de teste e respostas de questionário.',
      'Product Designers sintetizam para transformar horas de estudo em decisões claras para produto e interface. Mapa de afinidade é uma ferramenta comum nessa fase.',
    ],
    youWillHear: [
      '"A síntese do ciclo de entrevistas fica pronta na sexta."',
      '"Depois da síntese, ficou claro que o onboarding é o gargalo."',
    ],
  },
  {
    id: 'insight',
    term: 'Insight',
    categoryId: 'pesquisa',
    subgroup: 'analise',
    whatIs: [
      'Descoberta relevante sobre pessoa usuária, comportamento ou problema, que muda ou reforça uma decisão de produto. Vai além de anedota: costuma aparecer em mais de uma fonte ou sessão.',
      'Product Designers documentam insights na síntese e ligam cada um a implicações práticas: o que desenhar, priorizar ou testar depois.',
    ],
    youWillHear: [
      '"Esse insight veio de três entrevistas e do teste de usabilidade."',
      '"Precisamos transformar insight em hipótese testável."',
    ],
  },
  {
    id: 'mapa-de-afinidade',
    term: 'Mapa de afinidade',
    categoryId: 'pesquisa',
    subgroup: 'analise',
    originalName: {
      alternate: 'Affinity map',
      usageNote:
        'Affinity diagram e affinity mapping também aparecem em materiais em inglês.',
    },
    whatIs: [
      'Técnica de agrupar notas, citações e observações em temas comuns, geralmente em mural físico ou digital. Ajuda o time a ver padrões depois de entrevistas e testes.',
      'Product Designers usam mapa de afinidade na síntese para sair de dados soltos e chegar em clusters que viram insights.',
    ],
    youWillHear: [
      '"Vamos montar o affinity map depois das cinco entrevistas."',
      '"No mapa de afinidade, três grupos falavam de confiança no pagamento."',
    ],
  },
  {
    id: 'mapa-de-empatia',
    term: 'Mapa de empatia',
    categoryId: 'pesquisa',
    subgroup: 'analise',
    originalName: {
      alternate: 'Empathy map',
      usageNote:
        'Empathy mapping também aparece em workshops e materiais em inglês.',
    },
    whatIs: [
      'Quadro que organiza o que uma pessoa usuária pensa, sente, diz e faz em torno de um objetivo ou contexto. Ajuda o time a sintetizar pesquisa antes de desenhar soluções.',
      'Product Designers usam mapa de empatia depois de entrevistas ou observação. Persona, na categoria Fundamentos, resume quem é a pessoa; o mapa de empatia aprofunda motivações e barreiras de um momento específico.',
    ],
    youWillHear: [
      '"Vamos montar um empathy map com o que saiu das entrevistas."',
      '"O mapa de empatia mostrou medo de errar na hora de pagar."',
    ],
  },
  {
    id: 'roteiro-de-pesquisa',
    term: 'Roteiro de pesquisa',
    categoryId: 'pesquisa',
    subgroup: 'analise',
    whatIs: [
      'Guia de perguntas e tópicos para conduzir entrevista ou sessão de pesquisa com consistência entre participantes. Não é script rígido: permite aprofundar respostas interessantes.',
      'Product Designers preparam roteiro alinhado ao objetivo do estudo e revisam depois de cada sessão para ajustar o que falta explorar.',
    ],
    youWillHear: [
      '"Manda o roteiro de pesquisa antes da entrevista de amanhã."',
      '"Faltou pergunta sobre contexto de uso no roteiro."',
    ],
  },
  {
    id: 'mapa-de-jornada',
    term: 'Mapa de jornada',
    categoryId: 'pesquisa',
    subgroup: 'analise',
    originalName: {
      alternate: 'User journey map',
      usageNote:
        'Customer journey e journey map também aparecem em materiais de CX e produto.',
    },
    whatIs: [
      'Visualização das etapas que uma pessoa usuária percorre para atingir um objetivo: touchpoints, ações, pensamentos, dores e oportunidades em cada fase.',
      'Product Designers constroem mapa de jornada com base em pesquisa para alinhar o time sobre onde intervenções de produto e interface fazem mais diferença.',
    ],
    youWillHear: [
      '"O mapa de jornada mostra que a maior fricção é depois do pagamento."',
      '"Vamos atualizar a journey com o que saiu das entrevistas."',
    ],
  },

  // Produto: conceitos
  {
    id: 'produto',
    term: 'Produto',
    categoryId: 'produto',
    subgroup: 'conceitos',
    whatIs: [
      'Algo criado para resolver uma necessidade de pessoas usuárias e gerar valor para um negócio. Pode ser digital, físico ou uma combinação dos dois.',
      'Product Designers atuam em produto digital: definem problemas, desenham soluções e acompanham se a experiência entrega o prometido.',
    ],
    youWillHear: [
      '"Qual é o produto que estamos construindo aqui?"',
      '"Essa decisão precisa fazer sentido para produto e negócio."',
    ],
  },
  {
    id: 'produto-digital',
    term: 'Produto digital',
    categoryId: 'produto',
    subgroup: 'conceitos',
    whatIs: [
      'Software, app, site ou plataforma online que pessoas usam para completar tarefas. Inclui interfaces, fluxos, dados e regras de negócio acessíveis por tela.',
      'Product Designers projetam a experiência desse produto: da descoberta do problema até o lançamento e evolução contínua.',
    ],
    youWillHear: [
      '"Estamos evoluindo o produto digital, não só trocando o visual."',
      '"Essa feature entra no produto digital na próxima release."',
    ],
  },
  {
    id: 'problema',
    term: 'Problema',
    categoryId: 'produto',
    subgroup: 'conceitos',
    whatIs: [
      'Dificuldade, fricção ou necessidade real que um produto se propõe a resolver. Bom problema parte de evidência: pesquisa, dados ou padrão recorrente no suporte.',
      'Product Designers ajudam o time a formular o problema antes de pular para solução. Entrevistas e métodos da categoria Pesquisa alimentam essa etapa.',
    ],
    youWillHear: [
      '"Qual problema estamos resolvendo de verdade?"',
      '"A solução está bonita, mas o problema ainda não está claro."',
    ],
  },
  {
    id: 'solucao',
    term: 'Solução',
    categoryId: 'produto',
    subgroup: 'conceitos',
    whatIs: [
      'Resposta desenhada para um problema identificado: fluxo, tela, funcionalidade ou mudança no produto. Só faz sentido depois de entender a dor e validar se ataca a causa certa.',
      'Product Designers exploram várias soluções em protótipos e testes antes de o time comprometer engenharia em escala.',
    ],
    youWillHear: [
      '"Essa solução resolve a dor ou só mascara o sintoma?"',
      '"Vamos comparar duas soluções no teste antes de escolher."',
    ],
  },
  {
    id: 'white-label',
    term: 'White-label',
    categoryId: 'produto',
    subgroup: 'conceitos',
    originalName: {
      alternate: 'Marca branca',
      usageNote:
        'White-label continua no original em inglês em B2B, fintech e plataformas no Brasil.',
    },
    whatIs: [
      'Produto ou plataforma genérica construída por uma empresa e revendida por outras com marca própria. Quem compra personaliza identidade; a base tecnológica costuma ser compartilhada.',
      'Product Designers em white-label equilibram customização do cliente com consistência da plataforma. Cliente e pessoa usuária, em Fundamentos, ajudam a separar quem compra de quem usa no dia a dia.',
    ],
    youWillHear: [
      '"Esse fluxo é white-label, cada cliente quer a logo deles."',
      '"A plataforma é white-label, mas a experiência precisa parecer da marca do parceiro."',
    ],
  },
  {
    id: 'mvp',
    term: 'MVP',
    categoryId: 'produto',
    subgroup: 'conceitos',
    originalName: {
      alternate: 'Minimum Viable Product',
      usageNote:
        'Produto mínimo viável também aparece em português, mas MVP é o termo mais usado em squads e roadmaps.',
    },
    whatIs: [
      'Versão enxuta de um produto com o mínimo necessário para testar uma hipótese com pessoas usuárias reais e aprender rápido. Escopo intencional, não produto incompleto por falta de planejamento.',
      'Product Designers ajudam a definir o que entra no MVP e o que fica fora, priorizando o que valida valor antes de expandir funcionalidades.',
    ],
    youWillHear: [
      '"Vamos lançar um MVP em duas semanas para validar demanda."',
      '"Isso não entra no MVP, fica para a v2."',
    ],
  },
  {
    id: 'feature',
    term: 'Feature',
    categoryId: 'produto',
    subgroup: 'conceitos',
    originalName: {
      alternate: 'Funcionalidade',
      usageNote:
        'Feature é o termo mais comum em squads, roadmaps e ferramentas de gestão em inglês.',
    },
    whatIs: [
      'Capacidade específica dentro de um produto: login social, exportar PDF, filtro avançado. No dia a dia, muita gente fala funcionalidade em português com o mesmo sentido.',
      'Product Designers desenham a experiência da feature, alinham com PM e Engenharia e validam se resolve o problema antes do release.',
    ],
    youWillHear: [
      '"Essa feature entra no próximo sprint ou no trimestre que vem?"',
      '"O cliente pediu a funcionalidade, mas precisamos checar impacto em UX."',
    ],
  },

  // Produto: processo
  {
    id: 'discovery',
    term: 'Discovery',
    categoryId: 'produto',
    subgroup: 'processo',
    originalName: {
      alternate: 'Descoberta de produto',
      usageNote:
        'Discovery continua no original em inglês na maioria das empresas de tecnologia no Brasil.',
    },
    whatIs: [
      'Fase em que o time explora o problema, entende contexto e testa direções antes de comprometer escopo grande de desenvolvimento. Inclui pesquisa, síntese e protótipos rápidos.',
      'Product Designers lideram ou participam forte do discovery. Métodos de pesquisa ficam na categoria Pesquisa; aqui o foco é a etapa do processo de produto.',
    ],
    youWillHear: [
      '"Ainda estamos em discovery, não dá para prometer prazo de entrega."',
      '"Precisamos de mais discovery antes de priorizar essa feature."',
    ],
  },
  {
    id: 'delivery',
    term: 'Delivery',
    categoryId: 'produto',
    subgroup: 'processo',
    originalName: {
      alternate: 'Entrega de produto',
      usageNote:
        'Delivery aparece em contraste com discovery em squads ágeis e materiais de Product Management.',
    },
    whatIs: [
      'Fase em que o time constrói, implementa e lança a solução validada no discovery. Engenharia entra forte; design detalha specs, acompanha qualidade e mede resultado pós-lançamento.',
      'Product Designers cuidam para a experiência acordada chegar intacta na implementação e acompanham ajustes depois do release.',
    ],
    youWillHear: [
      '"Discovery fechou, agora entramos em delivery."',
      '"No delivery, o foco é shippar com qualidade."',
    ],
  },
  {
    id: 'hipotese',
    term: 'Hipótese',
    categoryId: 'produto',
    subgroup: 'processo',
    whatIs: [
      'Suposição testável sobre pessoa usuária, problema ou solução. Exemplo: se simplificarmos o checkout, mais pessoas completam a compra.',
      'Product Designers transformam insights de pesquisa em hipóteses claras e ajudam a definir como validá-las antes de investir escopo grande.',
    ],
    youWillHear: [
      '"Qual é a hipótese que estamos testando nesse protótipo?"',
      '"A hipótese não se confirmou, voltamos para discovery."',
    ],
  },
  {
    id: 'validacao',
    term: 'Validação',
    categoryId: 'produto',
    subgroup: 'processo',
    whatIs: [
      'Processo de checar se uma ideia, fluxo ou feature resolve o problema de verdade antes ou depois do lançamento. Pode ser teste de usabilidade, MVP, questionário ou métrica de uso.',
      'Product Designers participam da validação com protótipos e testes. Métodos específicos ficam na categoria Pesquisa; aqui o foco é confirmar ou refutar uma hipótese de produto.',
    ],
    youWillHear: [
      '"Precisamos de validação antes de colocar isso no roadmap."',
      '"A validação com usuários matou essa direção."',
    ],
  },

  // Produto: entregas
  {
    id: 'roadmap',
    term: 'Roadmap',
    categoryId: 'produto',
    subgroup: 'entregas',
    originalName: {
      alternate: 'Roteiro de produto',
      usageNote:
        'Roadmap continua no original em inglês na maioria das empresas de tecnologia.',
    },
    whatIs: [
      'Visão de médio prazo do que o produto vai construir e quando: features, melhorias e iniciativas alinhadas a objetivos de negócio. Pode ser trimestral, por tema ou por outcome.',
      'Product Designers contribuem ao estimar esforço de UX, dependências de design system e priorizar o que impacta a pessoa usuária.',
    ],
    youWillHear: [
      '"Essa feature está no roadmap do Q3."',
      '"O roadmap mudou, vamos repriorizar discovery."',
    ],
  },
  {
    id: 'prd',
    term: 'PRD',
    categoryId: 'produto',
    subgroup: 'entregas',
    originalName: {
      alternate: 'Product Requirements Document',
      usageNote:
        'Documento de requisitos de produto também aparece em português em empresas maiores.',
    },
    whatIs: [
      'Documento que descreve o que uma feature ou iniciativa deve fazer: contexto, objetivo, escopo, critérios de sucesso e requisitos. PM costuma liderar; design e engenharia contribuem.',
      'Product Designers alimentam o PRD com fluxos, estados, edge cases e links para protótipos no Figma. Nem todo time usa PRD formal; em squads enxutas, o spec pode viver no ticket ou no próprio Figma.',
    ],
    youWillHear: [
      '"Manda o link do PRD antes da planning."',
      '"O PRD ainda não tem critério de aceite para esse fluxo."',
    ],
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
  sortMode: GuiaGlossarioSortMode = 'recomendada',
): GuiaGlossarioEntry[] {
  return sortGuiaGlossarioEntries(
    guiaGlossarioEntries.filter((entry) => entry.categoryId === categoryId),
    sortMode,
  )
}

export function getAllGuiaGlossarioEntriesSorted(
  sortMode: GuiaGlossarioSortMode = 'recomendada',
): GuiaGlossarioEntry[] {
  return sortGuiaGlossarioEntries(guiaGlossarioEntries, sortMode)
}

export function searchGuiaGlossarioEntries(
  query: string,
  sortMode: GuiaGlossarioSortMode = 'recomendada',
): GuiaGlossarioEntry[] {
  const normalized = query.trim().toLowerCase()
  if (!normalized) return getAllGuiaGlossarioEntriesSorted(sortMode)

  return getAllGuiaGlossarioEntriesSorted(sortMode).filter(
    (entry) =>
      entry.term.toLowerCase().includes(normalized) ||
      entry.id.toLowerCase().includes(normalized) ||
      entry.originalName?.alternate.toLowerCase().includes(normalized) ||
      entry.whatIs.some((p) => p.toLowerCase().includes(normalized)),
  )
}


export function groupGuiaGlossarioEntriesByCategory(
  entries: GuiaGlossarioEntry[],
  sortMode: GuiaGlossarioSortMode = 'recomendada',
): Map<GuiaGlossarioCategoryId, GuiaGlossarioEntry[]> {
  const grouped = new Map<GuiaGlossarioCategoryId, GuiaGlossarioEntry[]>()

  for (const category of guiaGlossarioCategories) {
    grouped.set(category.id, [])
  }

  for (const entry of entries) {
    grouped.get(entry.categoryId)?.push(entry)
  }

  for (const [categoryId, list] of grouped) {
    grouped.set(categoryId, sortGuiaGlossarioEntries(list, sortMode))
  }

  return grouped
}

export type GuiaGlossarioSubgroupGroup = {
  subgroupId: string | null
  label: string | null
  entries: GuiaGlossarioEntry[]
}

/** Agrupa verbetes por subgrupo dentro de uma categoria */
export function groupGuiaGlossarioEntriesBySubgroup(
  entries: GuiaGlossarioEntry[],
  categoryId: GuiaGlossarioCategoryId,
  sortMode: GuiaGlossarioSortMode = 'recomendada',
): GuiaGlossarioSubgroupGroup[] {
  if (sortMode === 'alfabetica') {
    return [
      {
        subgroupId: null,
        label: null,
        entries: sortGuiaGlossarioEntries(entries, 'alfabetica'),
      },
    ]
  }

  const labels = guiaGlossarioSubgroupLabels[categoryId]
  if (!labels) {
    return [
      {
        subgroupId: null,
        label: null,
        entries: sortGuiaGlossarioEntries(entries, 'recomendada'),
      },
    ]
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
      entries: sortGuiaGlossarioEntries(buckets.get(id) ?? [], 'recomendada'),
    }))

  if (ungrouped.length > 0) {
    groups.push({
      subgroupId: null,
      label: null,
      entries: sortGuiaGlossarioEntries(ungrouped, 'recomendada'),
    })
  }

  return groups
}
