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
      { id: 'ready', title: 'Como saber se estou pronta para buscar minha primeira vaga?', description: 'Entenda quais sinais ajudam a decidir seu próximo passo.', type: 'FAQ', to: `${guiaRoutes.faq}#preparado-integrar-equipe` },
      { id: 'junior-skills', title: 'Quais habilidades uma pessoa júnior precisa desenvolver?', description: 'Veja o equilíbrio entre prática, repertório e habilidades de colaboração.', type: 'FAQ', to: `${guiaRoutes.faq}#habilidades-junior` },
    ],
  },
  {
    number: '02',
    title: 'Entenda que vaga você está procurando',
    description: 'Nem toda vaga de Product Design é igual.',
    introduction: 'Uma vaga pode focar em UI, discovery, pesquisa ou evolução de produtos existentes. Entender as diferenças ajuda a ler oportunidades que façam sentido para o seu momento.',
    note: 'Você não precisa cumprir 100% dos requisitos para se candidatar. Use a descrição como referência, não como uma prova que precisa passar.',
    contents: [
      { id: 'job-types', title: 'Como identificar uma vaga que faz sentido?', description: 'Conheça diferenças de contexto, escopo e nível de entrada.', type: 'FAQ', to: `${guiaRoutes.faq}#rotina-contextos-diversos` },
      { id: 'junior-market', title: 'Como funciona o mercado para pessoas iniciantes?', description: 'Entenda portas de entrada e o que empresas costumam procurar.', type: 'FAQ', to: `${guiaRoutes.faq}#mercado-sem-faculdade` },
      { id: 'opportunities', title: 'Onde encontrar vagas de Product Design?', description: 'Explore oportunidades publicadas pela VagasUX.', type: 'Vagas', to: '/oportunidades#vagas' },
    ],
  },
  {
    number: '03',
    title: 'Prepare sua apresentação',
    description: 'Seu material não precisa contar tudo sobre você.',
    introduction: 'Currículo, LinkedIn e portfólio ajudam uma pessoa recrutadora a entender rapidamente quem você é, o que sabe fazer e que tipo de oportunidade busca.',
    contents: [
      { id: 'cv-including', title: 'Como montar um currículo para Product Design?', description: 'Saiba o que incluir para criar um CV claro e relevante.', type: 'FAQ', to: `${guiaRoutes.faq}#cv-o-que-incluir` },
      { id: 'cv-ats', title: 'Como adaptar o currículo para uma vaga?', description: 'Use palavras-chave e uma estrutura compatível com ATS.', type: 'FAQ', to: `${guiaRoutes.faq}#cv-simples-vs-chamativo` },
      { id: 'linkedin', title: 'Como organizar seu LinkedIn para buscar vagas?', description: 'Ajuste título, resumo, experiências e links para sua trajetória.', type: 'FAQ', to: `${guiaRoutes.faq}#linkedin-perfil-competitivo` },
      { id: 'portfolio', title: 'Como apresentar experiências anteriores na transição?', description: 'Conecte sua trajetória ao trabalho que quer construir agora.', type: 'FAQ', to: `${guiaRoutes.faq}#linkedin-transicao-carreira` },
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
      { id: 'job-warning', title: 'Como reconhecer uma vaga cilada?', description: 'Saiba o que observar antes de investir tempo em um processo.', type: 'FAQ', to: `${guiaRoutes.faq}#vagas-cilada-protecao` },
      { id: 'applications', title: 'Como organizar suas candidaturas?', description: 'Crie um processo simples para acompanhar oportunidades e retornos.', type: 'FAQ', to: `${guiaRoutes.faq}#nenhuma-resposta-empresas` },
    ],
  },
  {
    number: '05',
    title: 'Conheça as pessoas',
    description: 'Networking não precisa começar pedindo emprego.',
    introduction: 'Conhecer pessoas da área ajuda você a entender trajetórias, descobrir empresas e aprender como o mercado funciona. Comece com curiosidade e troca genuína.',
    contents: [
      { id: 'networking', title: 'Como começar a fazer networking em Design?', description: 'Use o LinkedIn para criar relações profissionais com respeito.', type: 'FAQ', to: `${guiaRoutes.faq}#networking-linkedin` },
      { id: 'community', title: 'Como participar de comunidades e eventos?', description: 'Encontre espaços para acompanhar conversas e conhecer pessoas.', type: 'Tema', to: guiaRoutes.tipo('eventos') },
      { id: 'volunteer', title: 'Como pedir feedback sobre seu trabalho?', description: 'Use experiências práticas e colaboração para construir repertório.', type: 'Trilha', to: '/voluntariado' },
    ],
  },
  {
    number: '06',
    title: 'Passe pelo processo seletivo',
    description: 'O processo seletivo também é parte do trabalho.',
    introduction: 'Entrevistas também ajudam você a entender se aquela empresa, time e forma de trabalhar fazem sentido para você.',
    contents: [
      { id: 'interview', title: 'Como me portar em uma entrevista?', description: 'Prepare uma conversa clara sobre sua trajetória e interesses.', type: 'FAQ', to: `${guiaRoutes.faq}#como-portar-entrevista` },
      { id: 'tell-me', title: 'Como falar sobre mim?', description: 'Organize sua apresentação sem decorar um roteiro artificial.', type: 'FAQ', to: `${guiaRoutes.faq}#como-falar-sobre-mim` },
      { id: 'case', title: 'Como apresentar um case?', description: 'Conte sua participação, decisões e aprendizados com clareza.', type: 'FAQ', to: `${guiaRoutes.faq}#por-que-testes-seletivos` },
      { id: 'interview-guide', title: 'Como responder perguntas de entrevista de UX?', description: 'Material da Nielsen Norman Group sobre respostas e storytelling.', type: 'Tema', to: 'https://www.nngroup.com/articles/answer-ux-job-interview-questions/', external: true },
    ],
  },
  {
    number: '07',
    title: 'Depois da entrevista',
    description: 'O processo não termina quando a entrevista acaba.',
    introduction: 'Você pode receber um sim, um não ou não receber resposta. Transforme cada processo em aprendizado sempre que possível.',
    note: 'Sua primeira vaga não precisa ser perfeita. Ela precisa ser uma oportunidade em que você consiga aprender, contribuir e continuar construindo sua carreira.',
    contents: [
      { id: 'feedback', title: 'Como pedir feedback depois de um processo?', description: 'Entenda como abordar retornos com respeito e objetividade.', type: 'FAQ', to: `${guiaRoutes.faq}#case-sem-retorno` },
      { id: 'rejection', title: 'O que fazer quando você recebe um não?', description: 'Use o retorno para avaliar seu próximo passo sem se culpar.', type: 'FAQ', to: `${guiaRoutes.faq}#case-reprovado-o-que-fazer` },
      { id: 'first-job', title: 'Quando aceitar sua primeira oportunidade?', description: 'Conheça pontos importantes para avaliar uma proposta e seu contexto.', type: 'FAQ', to: `${guiaRoutes.faq}#quando-escolher-clt-ou-pj` },
    ],
  },
]
