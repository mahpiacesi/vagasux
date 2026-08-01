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
 * Verbete do glossário. Template enxuto.
 * @see docs/guia-glossário.md
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
  /** Links opcionais para conceitos distintos (2 a 4) */
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
  // Fundamentos: areas-disciplinas
  {
    id: 'arquitetura-da-informacao',
    term: 'Arquitetura da Informação',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'Information Architecture',
      portuguese: 'Arquitetura da Informação',
    },
    whatIs: [
      'Arquitetura da Informação é a disciplina que organiza, nomeia e estrutura conteúdos em produtos digitais para que a pessoa usuária encontre o que precisa sem se perder. Pense em menus, categorias, rótulos e hierarquia de telas.',
      'Product Designers e pessoas de UX Research colaboram nessa área quando definem como um app ou site apresenta informação de forma clara e previsível.',
    ],
    youWillHear: [
      '"Precisamos revisar a arquitetura da informação antes de desenhar as telas."',
      '"A pessoa usuária não achou a funcionalidade. Pode ser problema de arquitetura da informação."',
    ],
    seeAlso: ['ux', 'usabilidade', 'pessoa-usuaria'],
  },
  {
    id: 'content-design',
    term: 'Content Design',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'Content Design',
      portuguese: 'Design de Conteúdo',
      usageNote:
        'No Brasil, muitas vagas ainda usam UX Writing para o mesmo tipo de trabalho. Os dois nomes convivem no mercado.',
    },
    whatIs: [
      'Content Design é a disciplina que cuida dos textos dentro de produtos digitais: títulos, botões, mensagens de erro, instruções e microtextos que orientam a pessoa usuária. Também é chamado de UX Writing em muitas empresas.',
      'O objetivo não é escrever bonito, e sim escrever de um jeito que a pessoa entenda o que fazer, confie no produto e complete a tarefa sem travar.',
    ],
    youWillHear: [
      '"Esse botão precisa de um copy mais claro."',
      '"Vamos passar essas telas com Content Design antes do handoff."',
      '"A vaga pede UX Writing, mas o escopo é bem de Content Design."',
    ],
    seeAlso: ['ux', 'ui', 'usabilidade'],
  },
  {
    id: 'customer-experience',
    term: 'CX',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'Customer Experience',
      portuguese: 'Experiência do Cliente',
      usageNote:
        'CX aparece em empresas que olham a jornada completa da pessoa, incluindo atendimento, loja física e canais fora do app.',
    },
    whatIs: [
      'CX (Customer Experience) é a experiência que uma pessoa tem com uma marca ou empresa em todos os pontos de contato, não só no app ou site. Pode incluir suporte, loja, redes sociais e comunicação pós-venda.',
      'UX e CX se cruzam quando o produto digital faz parte de uma experiência maior. Em conversas de equipe, CX costuma vir de Marketing, Atendimento ou Estratégia.',
    ],
    youWillHear: [
      '"Precisamos alinhar a UX do app com a estratégia de CX da marca."',
      '"O time de CX quer entender a jornada completa, não só o digital."',
      '"Essa mudança no produto impacta a experiência do cliente como um todo."',
    ],
    seeAlso: ['ux', 'service-design', 'pessoa-usuaria'],
  },
  {
    id: 'design-de-interacao',
    term: 'Design de Interação',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'Interaction Design',
      portuguese: 'Design de Interação',
      usageNote:
        'Em vagas internacionais, a sigla IxD também aparece, mas no Brasil o termo completo é mais comum.',
    },
    whatIs: [
      'Design de Interação é a disciplina que projeta como a pessoa usuária interage com um produto digital: o que acontece quando ela toca, clica, arrasta ou preenche um campo.',
      'Está ligado à UI, mas o foco aqui é o comportamento e o fluxo entre as ações, não só a aparência visual dos elementos.',
    ],
    youWillHear: [
      '"Esse fluxo precisa de um design de interação mais claro."',
      '"Vamos revisar as interações desse formulário antes de polir o visual."',
      '"A pessoa usuária travou nesse passo. Pode ser problema de interação."',
    ],
    seeAlso: ['interacao', 'ui', 'ux'],
  },
  {
    id: 'design-visual',
    term: 'Design Visual',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    whatIs: [
      'Design Visual é a competência de criar a identidade visual de um produto: cores, tipografia, ícones, espaçamento e hierarquia do que aparece na tela.',
      'UI Designers e Product Designers usam design visual para deixar interfaces claras, consistentes e alinhadas à marca. Não é enfeite: visual mal resolvido atrapalha a leitura e a usabilidade.',
    ],
    youWillHear: [
      '"O design visual desse componente ainda não está alinhado ao restante do produto."',
      '"Antes de desenvolver, vamos fechar o design visual dessa tela."',
      '"Essa vaga pede forte em design visual e UI."',
    ],
    seeAlso: ['ui', 'ui-designer', 'usabilidade'],
  },
  {
    id: 'hci',
    term: 'HCI',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'Human-Computer Interaction',
      portuguese: 'Interação Humano-Computador',
      usageNote:
        'Termo mais comum em contexto acadêmico e em materiais mais antigos. No dia a dia de produto, UX e HCD aparecem com muito mais frequência.',
    },
    whatIs: [
      'HCI (Human-Computer Interaction) é o campo de estudo sobre como pessoas interagem com computadores e sistemas digitais. Muitos conceitos de UX sairam daqui.',
      'Se você ouvir HCI em uma conversa hoje, provavelmente é em curso, artigo ou empresa com raiz acadêmica. Para vagas de Product Design, UX e HCD costumam ser os termos do mercado.',
    ],
    youWillHear: [
      '"Meu mestrado foi em HCI, mas hoje trabalho como Product Designer."',
      '"Esse paper de HCI fala sobre usabilidade de interfaces."',
      '"A empresa tem um time de pesquisa em HCI."',
    ],
    seeAlso: ['hcd', 'ux', 'design-de-interacao'],
  },
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
    seeAlso: ['product-design', 'ux', 'ux-designer'],
  },
  {
    id: 'service-design',
    term: 'Service Design',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'Service Design',
      portuguese: 'Design de Serviços',
      usageNote:
        'Em português, Design de Serviços também aparece, mas Service Design continua comum em vagas e materiais da área.',
    },
    whatIs: [
      'Service Design é a disciplina que projeta serviços completos, mapeando todas as etapas que a pessoa passa, incluindo momentos fora da tela: fila, atendimento, entrega, suporte.',
      'Product Designers encontram Service Design em empresas de saúde, bancos, varejo e logística, onde o app é só uma parte da experiência.',
    ],
    youWillHear: [
      '"Esse projeto envolve service design, não é só interface."',
      '"Precisamos mapear o serviço ponta a ponta, não apenas o fluxo do app."',
      '"A pessoa de Service Design vai facilitar o workshop de jornada."',
    ],
    seeAlso: ['customer-experience', 'ux', 'product-design'],
  },
  {
    id: 'ui',
    term: 'UI',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'User Interface',
      portuguese: 'Interface da Pessoa Usuária',
      usageNote:
        'UI é uma das siglas mais usadas no mercado. Quase sempre aparece junto com UX em vagas e conversas de equipe.',
    },
    whatIs: [
      'UI (User Interface) é a camada visual e interativa de um produto digital: telas, botões, cores, tipografia, ícones e componentes que a pessoa usuária vê e toca.',
      'Enquanto UX olha a experiência completa, UI foca em como cada tela funciona e se apresenta. Na prática, Product Designers costumam trabalhar os dois juntos.',
    ],
    youWillHear: [
      '"A UX desse fluxo está ok, mas a UI ainda precisa de refinamento."',
      '"Vamos alinhar UI com o design system antes de entregar."',
      '"Essa vaga pede forte em UI e design visual."',
    ],
    seeAlso: ['ux', 'design-visual', 'design-de-interacao'],
  },
  {
    id: 'ui-designer',
    term: 'UI Designer',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'UI Designer',
      portuguese: 'Designer de Interface',
      usageNote:
        'Também aparece como Designer de Interfaces ou Designer Visual em algumas vagas.',
    },
    whatIs: [
      'UI Designer é a pessoa especializada em criar interfaces digitais: layout, componentes, estados visuais e consistência com a marca e o design system.',
      'Ela trabalha próximo de Product Designers, UX Designers e Engenharia para garantir que o visual seja claro, viável de desenvolver e agradável de usar.',
    ],
    youWillHear: [
      '"A pessoa UI Designer vai montar as telas finais desse fluxo."',
      '"Precisamos de alguém com foco em UI para esse projeto."',
      '"O UI Designer revisou os estados de hover e disabled."',
    ],
    seeAlso: ['ui', 'design-visual', 'ux-designer'],
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
      'UX (User Experience) é tudo o que a pessoa sente, pensa e consegue fazer ao usar um produto digital. Não é só visual: inclui se ela entende o fluxo, completa a tarefa ou desiste no meio do caminho.',
      'Está ligada à UI (interface), mas vai além da aparência das telas. Boas decisões de UX consideram contexto, objetivo da pessoa usuária e limites do negócio.',
    ],
    youWillHear: [
      '"Precisamos melhorar a UX desse fluxo de cadastro."',
      '"Antes de polir a interface, vamos validar a UX com pessoas usuárias."',
      '"Essa feature resolve o problema de negócio, mas a UX ainda está confusa."',
    ],
    seeAlso: ['ui', 'product-design', 'usabilidade'],
  },
  {
    id: 'ux-designer',
    term: 'UX Designer',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'UX Designer',
      portuguese: 'Designer de Experiência',
      usageNote:
        'Muitas vagas no Brasil pedem UX/UI Designer no mesmo perfil, mesmo quando o escopo é de Product Design.',
    },
    whatIs: [
      'UX Designer é a pessoa focada em projetar a experiência de uso de um produto digital: entender a pessoa usuária, mapear fluxos, testar ideias e melhorar a jornada.',
      'No mercado brasileiro, vagas de UX Designer muitas vezes pedem também UI no mesmo perfil. Quando isso acontece, o escopo costuma ser parecido com o de Product Designer.',
    ],
    youWillHear: [
      '"A pessoa UX Designer vai conduzir o teste de usabilidade dessa versão."',
      '"A vaga é UX Designer, mas pede Figma e UI também."',
      '"Vamos envolver UX Design antes de priorizar essa feature."',
    ],
    seeAlso: ['ux', 'product-designer', 'ui-designer'],
  },
  {
    id: 'ux-research',
    term: 'UX Research',
    categoryId: 'fundamentos',
    subgroup: 'areas-disciplinas',
    originalName: {
      english: 'UX Research',
      portuguese: 'Pesquisa em UX',
      usageNote:
        'Também aparece como User Research ou Pesquisa com Usuários em vagas e materiais em português.',
    },
    whatIs: [
      'UX Research é a disciplina que estuda pessoas usuárias para entender necessidades, comportamentos e dificuldades antes e durante o desenvolvimento de um produto.',
      'Product Designers colaboram com UX Research, e muitas vezes fazem pesquisa no próprio dia a dia. Entrevistas, testes e síntese de dados ficam na categoria Pesquisa deste glossário.',
    ],
    youWillHear: [
      '"Precisamos de UX Research antes de fechar essa solução."',
      '"A pessoa de UX Research vai recrutar participantes para o estudo."',
      '"Esse dado veio de uma rodada de UX Research."',
    ],
    seeAlso: ['pessoa-usuaria', 'usabilidade', 'product-design'],
  },

  // Fundamentos: mentalidade
  {
    id: 'design-thinking',
    term: 'Design Thinking',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    whatIs: [
      'Design Thinking é uma forma de resolver problemas colocando a pessoa usuária no centro, explorando várias ideias antes de fechar uma solução.',
      'Em empresas, aparece em workshops com post-its, protótipos rápidos e conversas entre áreas diferentes. Não é a única forma de trabalhar, mas é uma mentalidade comum quando o time precisa destravar um desafio complexo.',
    ],
    youWillHear: [
      '"Vamos fazer um workshop de design thinking para entender o problema."',
      '"Essa etapa segue a lógica de design thinking: divergir antes de convergir."',
      '"Design thinking não substitui pesquisa, mas ajuda a organizar ideias."',
    ],
    seeAlso: ['hcd', 'double-diamond', 'lean-ux'],
  },
  {
    id: 'double-diamond',
    term: 'Double Diamond',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    originalName: {
      english: 'Double Diamond',
      portuguese: 'Duplo Diamante',
      usageNote:
        'O nome em inglês é o mais usado em empresas e cursos, mesmo no Brasil.',
    },
    whatIs: [
      'Double Diamond é um modelo visual com quatro fases: descobrir, definir, desenvolver e entregar. Ele mostra que bons projetos alternam momentos de abrir possibilidades e momentos de focar em uma direção.',
      'Ajuda a explicar por que Product Design não começa desenhando tela. Primeiro se explora o problema, depois se explora a solução.',
    ],
    youWillHear: [
      '"Estamos no primeiro diamante, ainda descobrindo o problema."',
      '"Depois de definir, entramos no segundo diamante para explorar soluções."',
      '"O Double Diamond ajuda a explicar a fase do projeto para stakeholders."',
    ],
    seeAlso: ['design-thinking', 'lean-ux', 'product-design'],
  },
  {
    id: 'hcd',
    term: 'HCD',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    originalName: {
      english: 'Human-Centered Design',
      portuguese: 'Design Centrado na Pessoa Usuária',
      usageNote:
        'Também aparece como UCD (User-Centered Design) ou design centrado no usuário em materiais mais antigos.',
    },
    whatIs: [
      'HCD (Human-Centered Design) é a abordagem de criar produtos a partir das necessidades reais de pessoas usuárias, testando ideias cedo e ajustando com feedback.',
      'No Brasil, a ideia costuma ser traduzida como design centrado na pessoa usuária. É a base de como Product Designers pensam: entender antes de desenhar, validar antes de escalar.',
    ],
    youWillHear: [
      '"Esse projeto segue uma abordagem HCD."',
      '"Precisamos de mais pesquisa para manter o processo centrado na pessoa usuária."',
      '"Design centrado no usuário ainda aparece em docs antigos, mas a lógica é a mesma."',
    ],
    seeAlso: ['design-thinking', 'pessoa-usuaria', 'ux'],
  },
  {
    id: 'heuristicas-de-usabilidade',
    term: 'Heurísticas de usabilidade',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    originalName: {
      english: 'Usability Heuristics',
      portuguese: 'Heurísticas de Usabilidade',
      usageNote:
        'As dez heurísticas de Jakob Nielsen são a referência mais citada em UX no mundo.',
    },
    whatIs: [
      'Heurísticas de usabilidade são princípios que ajudam a avaliar se uma interface é fácil de usar. A lista mais conhecida é a de Jakob Nielsen, com dez regras como dar feedback claro, prevenir erros e manter consistência.',
      'Product Designers usam essas heurísticas para revisar telas, dar feedback e conversar com o time sobre melhorias. A aplicação prática em auditoria de interface fica na categoria Pesquisa.',
    ],
    youWillHear: [
      '"Essa tela quebra a heurística de visibilidade do status do sistema."',
      '"Vamos revisar o fluxo com as heurísticas de Nielsen."',
      '"Antes do teste, faz sentido uma checagem heurística rápida."',
    ],
    seeAlso: ['usabilidade', 'ux', 'ui'],
  },
  {
    id: 'interacao',
    term: 'Interação',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    whatIs: [
      'Interação é o que acontece quando a pessoa usuária faz algo no produto: toca, clica, arrasta, preenche um campo ou confirma uma ação.',
      'Cada tela é um conjunto de pontos de interação. Design de Interação cuida de como esses momentos funcionam. Não confunda com iteração, que é repetir e melhorar o trabalho ao longo do tempo.',
    ],
    youWillHear: [
      '"Essa interação está confusa, a pessoa usuária não entendeu o próximo passo."',
      '"Vamos mapear as interações desse fluxo antes de polir o visual."',
      '"O botão precisa de uma interação mais clara."',
    ],
    seeAlso: ['iteracao', 'design-de-interacao', 'ui'],
  },
  {
    id: 'iteracao',
    term: 'Iteração',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    whatIs: [
      'Iteração é repetir o trabalho com melhorias a cada rodada: prototipar, testar, ajustar e testar de novo.',
      'É uma mentalidade central em Product Design. Produtos bons raramente nascem certos na primeira versão. Não é a mesma coisa que interação, que é o que a pessoa usuária faz na tela.',
    ],
    youWillHear: [
      '"Precisamos de mais uma iteração nesse fluxo."',
      '"Na próxima iteração a gente inclui o feedback do teste."',
      '"Lean UX pede iteração rápida com o time."',
    ],
    seeAlso: ['interacao', 'lean-ux', 'design-thinking'],
  },
  {
    id: 'lean-ux',
    term: 'Lean UX',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    whatIs: [
      'Lean UX é uma forma de trabalhar em Product Design com ciclos curtos, menos documento pesado e mais conversa, protótipo e teste com o time.',
      'Combina mentalidade de aprendizado contínuo com práticas ágeis. A ideia é aprender rápido o que funciona antes de investir meses em uma solução errada.',
    ],
    youWillHear: [
      '"Nesse projeto vamos seguir Lean UX, com protótipos rápidos."',
      '"Lean UX não significa pular pesquisa, é iterar com foco."',
      '"O time de produto já trabalha com mentalidade Lean UX."',
    ],
    seeAlso: ['iteracao', 'design-thinking', 'product-design'],
  },
  {
    id: 'usabilidade',
    term: 'Usabilidade',
    categoryId: 'fundamentos',
    subgroup: 'mentalidade',
    originalName: {
      english: 'Usability',
      portuguese: 'Usabilidade',
      usageNote:
        'Usabilidade é um dos conceitos mais citados em conversas de UX e em vagas de Product Design.',
    },
    whatIs: [
      'Usabilidade é o quão fácil e intuitivo é usar um produto digital. Uma interface usável deixa claro o que fazer, ajuda a pessoa a completar a tarefa e não exige esforço desnecessário.',
      'Product Designers pensam em usabilidade ao desenhar fluxos, rótulos e feedbacks. Testes com pessoas usuárias, na categoria Pesquisa, mostram onde a usabilidade está falhando.',
    ],
    youWillHear: [
      '"A usabilidade desse formulário está ruim, muita gente erra no mesmo campo."',
      '"Antes de lançar, vamos checar usabilidade com um teste rápido."',
      '"Essa mudança melhora usabilidade sem alterar o visual todo."',
    ],
    seeAlso: ['ux', 'heuristicas-de-usabilidade', 'pessoa-usuaria'],
  },

  // Fundamentos: pessoas-contexto
  {
    id: 'cliente',
    term: 'Cliente',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Cliente é quem contrata, paga ou decide pela compra de um produto ou serviço. Em muitos casos, cliente e pessoa usuária são a mesma pessoa. Em outros, não.',
      'Em produtos B2B, agências ou plataformas white-label, quem usa no dia a dia pode ser diferente de quem assina o contrato. Product Designers precisam entender os dois lados.',
    ],
    youWillHear: [
      '"O cliente pediu essa funcionalidade, mas a pessoa usuária não usa."',
      '"Precisamos apresentar a proposta para o cliente na sexta."',
      '"Nesse projeto, o cliente é interno, o time de operações."',
    ],
    seeAlso: ['pessoa-usuaria', 'stakeholder', 'negocio'],
  },
  {
    id: 'negocio',
    term: 'Negócio',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Negócio, neste contexto, é a perspectiva de metas, receita, custos, estratégia e viabilidade de um produto digital.',
      'Product Designers equilibram necessidades da pessoa usuária com objetivos do negócio. Nem toda ideia boa para a experiência faz sentido para a empresa agora.',
    ],
    youWillHear: [
      '"Essa solução é boa para UX, mas o negócio não prioriza agora."',
      '"Precisamos alinhar design com objetivos de negócio."',
      '"O time de negócio quer entender o impacto dessa mudança."',
    ],
    seeAlso: ['stakeholder', 'cliente', 'product-design'],
  },
  {
    id: 'pessoa-usuaria',
    term: 'Pessoa usuária',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Pessoa usuária é quem usa um produto ou serviço digital no dia a dia. No VagasUX usamos esse termo em vez de "usuário" por ser mais inclusivo e claro.',
      'No mercado, "usuário" e "user" ainda aparecem o tempo todo em vagas, ferramentas e conversas. Significam a mesma coisa neste contexto.',
    ],
    youWillHear: [
      '"Quem é a pessoa usuária principal desse produto?"',
      '"Precisamos recrutar usuários para o teste."',
      '"Essa decisão beneficia o negócio, mas prejudica a pessoa usuária."',
    ],
    seeAlso: ['publico-alvo', 'stakeholder', 'ux'],
  },
  {
    id: 'publico-alvo',
    term: 'Público-alvo',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    whatIs: [
      'Público-alvo é o grupo de pessoas que um produto ou campanha quer alcançar, descrito por características como idade, região, profissão ou comportamento.',
      'Diferente de persona, que é um personagem fictício baseado em pesquisa. Público-alvo é mais amplo e segmentado. Os dois conceitos se complementam.',
    ],
    youWillHear: [
      '"Qual é o publico-alvo desse app?"',
      '"O marketing definiu o publico-alvo, agora precisamos validar com pesquisa."',
      '"Essa feature faz sentido para o nosso publico-alvo?"',
    ],
    seeAlso: ['pessoa-usuaria', 'negocio', 'ux-research'],
  },
  {
    id: 'squad',
    term: 'Squad',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    originalName: {
      english: 'Squad',
      portuguese: 'Equipe / Squad',
      usageNote:
        'Termo popularizado por modelos de organização como o do Spotify. No Brasil, time ou squad aparecem com a mesma ideia.',
    },
    whatIs: [
      'Squad é um time enxuto e multidisciplinar responsável por uma parte do produto ou por uma entrega. Costuma reunir Product Design, Produto, Engenharia e outras áreas conforme a necessidade.',
      'Trabalhar em squad significa estar próximo das decisões do dia a dia, com menos distância entre quem pesquisa, desenha, desenvolve e mede resultados.',
    ],
    youWillHear: [
      '"Qual squad vai pegar essa funcionalidade?"',
      '"No nosso squad tem Product Designer, dev e PM."',
      '"Vamos alinhar isso no squad antes de subir para a liderança."',
    ],
    seeAlso: ['stakeholder', 'product-designer', 'negocio'],
  },
  {
    id: 'stakeholder',
    term: 'Stakeholder',
    categoryId: 'fundamentos',
    subgroup: 'pessoas-contexto',
    originalName: {
      english: 'Stakeholder',
      portuguese: 'Parte Interessada',
      usageNote:
        'Stakeholder é usado no original em inglês na maioria das empresas de tecnologia no Brasil.',
    },
    whatIs: [
      'Stakeholder é qualquer pessoa ou grupo com interesse ou influência sobre um projeto: liderança, Produto, Engenharia, Marketing, jurídico, suporte ou cliente.',
      'Product Designers precisam alinhar expectativas com stakeholders sem perder de vista a pessoa usuária. Nem todo pedido de stakeholder vira prioridade de design.',
    ],
    youWillHear: [
      '"Vamos apresentar essa proposta para os stakeholders."',
      '"O stakeholder pediu prazo menor, precisamos negociar escopo."',
      '"Quem são os stakeholders desse projeto?"',
    ],
    seeAlso: ['cliente', 'negocio', 'pessoa-usuaria'],
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
