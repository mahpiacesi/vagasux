import { guiaRoutes } from '@/lib/guiaRoutes'
import type { GuiaTrilhaStage } from '@/data/guiaTrilhaEntenderOBasico'

export type GuiaTrilhaPrimeiraVagaStage = GuiaTrilhaStage & {
  introduction: string
  essentials?: string[]
  note?: string
}

export const guiaTrilhaPrimeiraVagaStages: GuiaTrilhaPrimeiraVagaStage[] = [
  {
    number: '01',
    title: 'Antes de começar a procurar',
    description: 'Você não precisa estar pronta para começar.',
    introduction: 'Não existe um momento em que você domina tudo e só então começa a procurar uma vaga. Entenda o que já consegue apresentar, identifique o que precisa desenvolver e comece a se movimentar.',
    essentials: ['Uma base de conhecimento em Product Design', 'Projetos que mostrem como você pensa', 'Currículo e perfil profissional atualizados', 'Disposição para aprender durante o processo'],
    contents: [
      { id: 'junior-levels', title: 'Entendendo níveis de designers iniciantes', description: 'Vídeo da curadoria VagasUX para entender expectativas de posições de entrada.', type: 'Referência', to: 'https://vagasux.com.br/guia-do-product-designer/carreira', external: true },
      { id: 'cv-checklist', title: '10 coisas que não podem faltar no seu currículo', description: 'Checklist criado pela recrutadora Hana Chiarelli para a comunidade VagasUX.', type: 'VagasUX', to: 'https://vagasux.com.br/guia-do-product-designer/trilhas/10-coisas-que-no-podem-faltar-no-seu-currculo', external: true },
    ],
  },
  {
    number: '02',
    title: 'Entenda que vaga você está procurando',
    description: 'Nem toda vaga de Product Design é igual.',
    introduction: 'Uma vaga pode focar em UI, discovery, pesquisa ou evolução de produtos existentes. Entender as diferenças ajuda a ler oportunidades que façam sentido para o seu momento.',
    note: 'Você não precisa cumprir 100% dos requisitos para se candidatar. Use a descrição como referência, não como uma prova que precisa passar.',
    contents: [
      { id: 'opportunities', title: 'Onde encontrar vagas de Product Design?', description: 'Explore oportunidades publicadas pela VagasUX.', type: 'Vagas', to: '/oportunidades#vagas' },
      { id: 'career-hubs', title: 'Plataformas e comunidades para acompanhar', description: 'A curadoria VagasUX reúne plataformas de vagas, comunidades e iniciativas para quem está buscando oportunidade.', type: 'VagasUX', to: 'https://vagasux.com.br/guia-do-product-designer/carreira', external: true },
    ],
  },
  {
    number: '03',
    title: 'Prepare sua apresentação',
    description: 'Seu material não precisa contar tudo sobre você.',
    introduction: 'Currículo, LinkedIn e portfólio ajudam uma pessoa recrutadora a entender rapidamente quem você é, o que sabe fazer e que tipo de oportunidade busca.',
    essentials: ['Nome, cidade, contato e link direto para o portfólio', 'Cargo ou área desejada e um resumo profissional objetivo', 'Experiência e projetos com ações, entregas e resultados', 'Formação, cursos, idiomas e habilidades relevantes para a vaga'],
    contents: [
      { id: 'vagasux-cv', title: 'Currículo para UX, UI e Product Design', description: 'O passo a passo da VagasUX: conteúdo essencial, hierarquia, palavras de ação e o que deixar de fora.', type: 'VagasUX', to: 'https://vagasux.com.br/guia-do-product-designer/carreira/currculo', external: true },
      { id: 'cv-ats', title: 'Como estruturar um currículo de UX', description: 'Guia prático sobre currículo simples, palavras-chave e leitura por ATS.', type: 'Referência', to: 'https://blog.uxfol.io/ux-resume-layout/', external: true },
      { id: 'portfolio', title: 'O que recrutadores procuram em um portfólio de UX', description: 'Use seus cases para mostrar contexto, decisões, colaboração e impacto — não apenas telas bonitas.', type: 'Referência', to: 'https://blog.uxfol.io/ux-designer-portfolio/', external: true },
      { id: 'linkedin', title: 'Perfil de LinkedIn e carta de apresentação', description: 'Complete sua apresentação com palavras-chave, links acessíveis e uma mensagem personalizada para cada aplicação.', type: 'VagasUX', to: 'https://vagasux.com.br/guia-do-product-designer/carreira/currculo', external: true },
    ],
  },
  {
    number: '04',
    title: 'Comece a procurar vagas',
    description: 'Procurar vaga também é uma habilidade.',
    introduction: 'Quanto melhor você entende onde procurar, como avaliar uma vaga e como organizar sua busca, menos ela depende de enviar candidaturas no automático.',
    note: 'Quantidade não é estratégia. Use cada processo para entender o mercado e melhorar sua próxima candidatura.',
    contents: [
      { id: 'jobs-board', title: 'Como pesquisar oportunidades?', description: 'Use o mural para explorar vagas e aplicar filtros.', type: 'Vagas', to: '/oportunidades#vagas' },
      { id: 'career-hubs-list', title: 'Outros lugares para encontrar oportunidades', description: 'Veja a seleção da VagasUX de plataformas, comunidades e iniciativas de carreira.', type: 'VagasUX', to: 'https://vagasux.com.br/guia-do-product-designer/carreira', external: true },
      { id: 'job-warning', title: 'Como reconhecer uma vaga cilada?', description: 'Use este apoio da FAQ para observar sinais antes de investir tempo em um processo.', type: 'FAQ', to: `${guiaRoutes.faq}#vagas-cilada-protecao` },
    ],
  },
  {
    number: '05',
    title: 'Conheça as pessoas',
    description: 'Networking não precisa começar pedindo emprego.',
    introduction: 'Conhecer pessoas da área ajuda você a entender trajetórias, descobrir empresas e aprender como o mercado funciona. Comece com curiosidade e troca genuína.',
    contents: [
      { id: 'community', title: 'Como participar de comunidades e eventos?', description: 'Encontre espaços para acompanhar conversas e conhecer pessoas.', type: 'Tema', to: guiaRoutes.tipo('eventos') },
      { id: 'volunteer', title: 'Encontre experiências de voluntariado', description: 'A curadoria VagasUX indica iniciativas e plataformas para ganhar experiência colaborando com impacto.', type: 'VagasUX', to: 'https://vagasux.com.br/guia-do-product-designer/carreira', external: true },
      { id: 'networking', title: 'Networking no LinkedIn', description: 'Se precisar de um ponto de partida, use a FAQ para abordar novas conexões com respeito.', type: 'FAQ', to: `${guiaRoutes.faq}#networking-linkedin` },
    ],
  },
  {
    number: '06',
    title: 'Passe pelo processo seletivo',
    description: 'O processo seletivo também é parte do trabalho.',
    introduction: 'Entrevistas também ajudam você a entender se aquela empresa, time e forma de trabalhar fazem sentido para você.',
    contents: [
      { id: 'interview-guide', title: 'Como responder perguntas de entrevista de UX?', description: 'Material da Nielsen Norman Group sobre respostas e storytelling.', type: 'Referência', to: 'https://www.nngroup.com/articles/answer-ux-job-interview-questions/', external: true },
      { id: 'case', title: 'Como apresentar um case na entrevista', description: 'Estruture a apresentação com contexto, papel no projeto, decisões e aprendizados.', type: 'Referência', to: 'https://blog.uxfol.io/ux-portfolio-presentation/', external: true },
      { id: 'interview', title: 'Entrevistas e testes seletivos', description: 'A FAQ complementa a preparação para a conversa e para desafios de processo.', type: 'FAQ', to: `${guiaRoutes.faq}#como-portar-entrevista` },
    ],
  },
  {
    number: '07',
    title: 'Depois da entrevista',
    description: 'O processo não termina quando a entrevista acaba.',
    introduction: 'Você pode receber um sim, um não ou não receber resposta. Transforme cada processo em aprendizado sempre que possível.',
    note: 'Sua primeira vaga não precisa ser perfeita. Ela precisa ser uma oportunidade em que você consiga aprender, contribuir e continuar construindo sua carreira.',
    contents: [
      { id: 'feedback', title: 'Como pedir feedback depois de um processo?', description: 'Use este apoio da FAQ para abordar retornos com respeito e objetividade.', type: 'FAQ', to: `${guiaRoutes.faq}#case-sem-retorno` },
      { id: 'opportunities-next', title: 'Continue acompanhando oportunidades', description: 'Mantenha uma rotina sustentável de busca e use o mural para encontrar sua próxima aplicação.', type: 'Vagas', to: '/oportunidades#vagas' },
    ],
  },
]
