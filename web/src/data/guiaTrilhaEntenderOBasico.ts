import { guiaRoutes } from '@/lib/guiaRoutes'

export type GuiaTrilhaContent = {
  id: string
  title: string
  description: string
  type: 'Glossário' | 'FAQ' | 'Tema' | 'Ferramentas' | 'Cursos' | 'Trilha' | 'Vagas'
  to: string
}

export type GuiaTrilhaStage = {
  number: string
  title: string
  description: string
  contents: GuiaTrilhaContent[]
}

export const guiaTrilhaEntenderOBasicoStages: GuiaTrilhaStage[] = [
  {
    number: '01',
    title: 'Entendendo Product Design',
    description:
      'Comece entendendo o que é Product Design, quem trabalha nessa área e como ela se conecta ao universo de tecnologia.',
    contents: [
      { id: 'product-design', title: 'O que é Product Design?', description: 'Entenda a disciplina e como ela une experiência, negócio e tecnologia.', type: 'Glossário', to: `${guiaRoutes.glossario}#product-design` },
      { id: 'product-designer', title: 'O que faz uma pessoa Product Designer?', description: 'Conheça o papel, responsabilidades e colaboração no dia a dia.', type: 'Glossário', to: `${guiaRoutes.glossario}#product-designer` },
      { id: 'ui-ux-pd', title: 'UX, UI e Product Design: qual a diferença?', description: 'Veja como os papéis se complementam ao criar produtos digitais.', type: 'FAQ', to: `${guiaRoutes.faq}#diferenca-ui-ux-pd` },
      { id: 'market', title: 'Como funciona o mercado de Product Design?', description: 'Descubra caminhos de entrada e o que observar nas oportunidades.', type: 'FAQ', to: `${guiaRoutes.faq}#mercado-sem-faculdade` },
    ],
  },
  {
    number: '02',
    title: 'Conhecendo o processo',
    description:
      'Entenda como problemas são investigados, soluções são construídas e produtos evoluem.',
    contents: [
      { id: 'discovery', title: 'O que é Discovery?', description: 'Conheça a etapa de entender o problema antes de decidir uma solução.', type: 'Glossário', to: `${guiaRoutes.glossario}#discovery` },
      { id: 'delivery', title: 'O que é Delivery?', description: 'Entenda como uma solução sai da ideia e chega às pessoas usuárias.', type: 'Glossário', to: `${guiaRoutes.glossario}#delivery` },
      { id: 'routine', title: 'Como designers trabalham com Produto e Engenharia?', description: 'Veja como a rotina muda entre empresas, agências e consultorias.', type: 'FAQ', to: `${guiaRoutes.faq}#rotina-contextos-diversos` },
      { id: 'problem-solution', title: 'Como um problema vira uma solução?', description: 'Explore a relação entre problema, hipótese, validação e entrega.', type: 'Glossário', to: `${guiaRoutes.glossario}#problema` },
    ],
  },
  {
    number: '03',
    title: 'Explorando as principais áreas',
    description:
      'Conheça as diferentes disciplinas que fazem parte do trabalho de Product Design.',
    contents: [
      { id: 'research', title: 'UX Research', description: 'Aprenda como a pesquisa aproxima o produto das pessoas usuárias.', type: 'Tema', to: guiaRoutes.tema('research') },
      { id: 'ui', title: 'UI Design', description: 'Explore referências para construir interfaces consistentes.', type: 'Tema', to: guiaRoutes.tema('ui') },
      { id: 'content', title: 'UX Writing e Content Design', description: 'Conheça a área que estrutura conteúdos dentro de produtos.', type: 'Tema', to: guiaRoutes.tema('content-design') },
      { id: 'design-system', title: 'Design Systems', description: 'Entenda como componentes e padrões dão consistência ao produto.', type: 'Tema', to: guiaRoutes.tema('design-system') },
      { id: 'accessibility', title: 'Acessibilidade', description: 'Descubra como criar experiências que incluam mais pessoas.', type: 'Tema', to: guiaRoutes.tema('acessibilidade') },
    ],
  },
  {
    number: '04',
    title: 'Começando na prática',
    description:
      'Agora que você já conhece o básico, descubra como transformar esse conhecimento em próximos passos.',
    contents: [
      { id: 'tools', title: 'Ferramentas que Product Designers usam', description: 'Conheça ferramentas para criar, colaborar e organizar seu trabalho.', type: 'Ferramentas', to: guiaRoutes.ferramentas },
      { id: 'courses', title: 'Como começar a estudar Product Design?', description: 'Encontre cursos para avançar no seu ritmo.', type: 'Cursos', to: guiaRoutes.cursos },
      { id: 'portfolio', title: 'Como montar um portfólio?', description: 'Continue para a trilha que ajuda a estruturar seus cases.', type: 'Trilha', to: guiaRoutes.trilha('portfolio') },
      { id: 'prepare', title: 'Como se preparar para o mercado?', description: 'Confira habilidades e referências para se candidatar com mais clareza.', type: 'FAQ', to: `${guiaRoutes.faq}#habilidades-junior` },
      { id: 'opportunities', title: 'Como encontrar a primeira oportunidade?', description: 'Explore vagas e caminhos para começar sua carreira.', type: 'Vagas', to: '/oportunidades#vagas' },
    ],
  },
]
