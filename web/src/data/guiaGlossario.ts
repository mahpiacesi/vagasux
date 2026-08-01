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
    'publico-alvo',
    'stakeholder',
    'cliente',
    'negocio',
    'squad',
  ],
}

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
    recomendada: 'Recomendada',
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
    id: 'publico-alvo',
    term: 'Público-alvo',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Persona é um personagem fictício baseado em pesquisa, com nome, contexto e objetivos. Em Product Design e UX, é a forma usual de representar para quem se projeta o produto.',
      'Público-alvo descreve o segmento que um produto ou campanha quer alcançar, com características como idade, região, profissão ou comportamento. Persona detalha um perfil dentro desse segmento; os dois se complementam.',
    ],
    youWillHear: [
      '"Qual é o publico-alvo desse app?"',
      '"O marketing definiu o publico-alvo, agora precisamos validar com pesquisa."',
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
