import type { GuiaTrilhaPrimeiraVagaStage } from '@/data/guiaTrilhaPrimeiraVaga'

export type GuiaTrilhaPortfolioStage = Omit<GuiaTrilhaPrimeiraVagaStage, 'contents'> & {
  contents: (Omit<GuiaTrilhaPrimeiraVagaStage['contents'][number], 'type'> & {
    type: string
  })[]
}

export const guiaTrilhaPortfolioStages: GuiaTrilhaPortfolioStage[] = [
  {
    number: '01',
    title: 'Entenda o que seu portfólio precisa mostrar',
    description: 'Seu portfólio conta como você trabalha. 👀',
    introduction: 'Ele reúne uma seleção do seu trabalho e ajuda quem está conhecendo você a entender seu repertório, seu raciocínio e a forma como você resolve problemas.',
    guidance: [
      { title: 'Dê contexto', description: 'Apresente o cenário, o problema, o objetivo e sua participação. Essas informações ajudam a pessoa a entender o que veio antes das telas.' },
      { title: 'Conte o caminho', description: 'Selecione as etapas que tiveram impacto no resultado. Pesquisas, hipóteses, explorações, testes e iterações podem fazer parte da narrativa.' },
      { title: 'Explique suas escolhas', description: 'Conte quais alternativas foram consideradas, o que influenciou cada caminho e como você chegou às soluções apresentadas.' },
      { title: 'Mostre o resultado', description: 'Apresente o que foi desenvolvido e, quando existirem, os resultados alcançados. Compartilhe também os principais aprendizados.' },
    ],
    nextStep: 'Escolha um trabalho que você gostaria de apresentar e reúna materiais que ajudem a contar essa história.',
    contents: [
      { id: 'aela-dicas', title: '6 dicas essenciais para montar seu portfólio de UX Design', description: 'Pontos de partida para selecionar projetos e apresentar seu processo.', type: 'Artigo', to: 'https://medium.com/aela/6-dicas-essenciais-para-montar-seu-portf%C3%B3lio-de-ux-design-205e551b3aa3', external: true },
      { id: 'estrutura-case', title: 'Como estruturar um case para portfólio de UX/UI', description: 'Guia para organizar seu case e tornar sua contribuição mais clara.', type: 'Artigo', to: 'https://brasil.uxdesign.cc/como-estruturar-um-case-para-portf%C3%B3lio-de-ux-ui-e-impressionar-recrutadores-62266ee50839', external: true },
      { id: 'dribbble-hiring', title: 'The ultimate guide to getting hired in UX design', description: 'Referência sobre apresentação profissional e busca por oportunidades em UX.', type: 'Artigo', to: 'https://dribbble.com/stories/2020/03/11/ultimate-guide-getting-hired-ux-design', external: true },
    ],
  },
  {
    number: '02',
    title: 'Encontre ou crie seu primeiro projeto',
    description: 'Seu primeiro case pode começar de vários lugares.',
    introduction: 'Cursos, faculdade, desafios, estudos autorais, freelas, voluntariado e experiências profissionais podem render um bom material para o portfólio.',
    guidance: [
      { title: 'Faça um inventário', description: 'Liste trabalhos de Design que você já realizou, mesmo aqueles que parecem pequenos ou ainda estão incompletos.' },
      { title: 'Procure uma boa história', description: 'Busque algo que tenha um problema, uma investigação, algumas escolhas e um resultado para apresentar. Um trabalho simples pode render um ótimo case quando existe um caminho interessante por trás dele.' },
      { title: 'Ainda não tem nenhum projeto?', description: 'Crie um estudo autoral. Escolha um problema que desperte sua curiosidade, pesquise o contexto e desenvolva uma proposta enquanto registra suas descobertas e escolhas.' },
      { title: 'Guarde os bastidores', description: 'Salve referências, rascunhos, versões, pesquisas, feedbacks e outros materiais ao longo do trabalho. Eles serão úteis quando chegar a hora de escrever o case.' },
    ],
    nextStep: 'Escolha o trabalho que vai entrar no seu portfólio ou defina o tema do seu primeiro projeto autoral.',
    contents: [
      { id: 'reflexao-portfolio', title: 'Uma reflexão sobre portfólios, cursos e anseios por empregos', description: 'Reflexão sobre o papel do portfólio durante a formação e a busca por trabalho.', type: 'Artigo', to: 'https://medium.com/ux-user-experience-design-em-portugues/uma-reflex%C3%A3o-sobre-portfolios-cursos-e-anseios-por-empregos-9b19cf51d03', external: true },
      { id: 'sem-experiencia', title: 'Como montar um portfólio de UX se eu ainda não trabalho com UX?', description: 'Caminhos para criar cases antes da primeira experiência profissional na área.', type: 'Artigo', to: 'https://brasil.uxdesign.cc/como-montar-um-portf%C3%B3lio-de-ux-se-eu-ainda-n%C3%A3o-trabalho-com-ux-c5ec6434de20', external: true },
    ],
  },
  {
    number: '03',
    title: 'Transforme seu projeto em um case',
    description: 'Agora vamos organizar essa história.',
    introduction: 'Um bom case conduz quem está lendo pelo trabalho e deixa claras as relações entre contexto, investigação, escolhas e resultado.',
    guidance: [
      { title: 'Comece pelo cenário', description: 'Explique o que estava acontecendo, qual problema precisava ser resolvido, qual era o objetivo e quem estava envolvido.' },
      { title: 'Selecione o que importa', description: 'Você não precisa colocar cada etapa que aconteceu. Escolha pesquisas, explorações, testes e outras partes que ajudem a explicar a evolução do trabalho.' },
      { title: 'Dê espaço para o raciocínio', description: 'Mostre momentos em que você precisou analisar informações, comparar alternativas ou mudar de direção. Explique o que levou cada escolha.' },
      { title: 'Feche a história', description: 'Apresente a solução, os resultados quando existirem e aquilo que você aprendeu durante a experiência.' },
    ],
    tip: { title: 'Uma estrutura para começar', description: 'Contexto → Problema → Objetivo → Caminho → Escolhas → Solução → Aprendizados. Use essa sequência como ponto de partida e adapte conforme a história do seu trabalho.' },
    nextStep: 'Escreva o primeiro rascunho do seu case. Priorize colocar as ideias no papel antes de pensar na parte visual.',
    contents: [
      { id: 'project-portfolio-canvas', title: 'Project Portfolio Canvas', description: 'Canvas e ferramentas como Hype Doc para estruturar e desenvolver seus cases.', type: 'Ferramenta', to: 'https://projectportfoliocanvas.com/', external: true },
      { id: 'tifolio', title: 'Tifolio', description: 'Briefings para você engajar no próximo projeto e criar material para o portfólio.', type: 'Briefing', to: 'https://www.tifolio.com.br/', external: true },
      { id: 'canvas-portfolio-ux', title: 'Canvas Portfólio UX', description: 'Modelo para estruturar seu portfólio e organizar a narrativa dos projetos.', type: 'Artigo', to: 'https://www.linkedin.com/pulse/canvas-portf%25C3%25B3lio-ux-um-modelo-para-estruturar-de-do-grochewski/', external: true },
      { id: 'ux-tools-challenges', title: 'UX Tools Challenges', description: 'Desafios de UX e Product Design para exercitar seu processo.', type: 'Desafio', to: 'https://www.uxtools.co/challenges', external: true },
      { id: 'sharpen', title: 'Sharpen', description: 'Gerador de desafios para praticar produtos, telas e decisões de design.', type: 'Desafio', to: 'https://sharpen.design/', external: true },
      { id: 'what-should-i-design', title: 'What Should I Design?', description: 'Prompts aleatórios para sair do papel e criar um novo projeto.', type: 'Desafio', to: 'http://www.whatshouldidesign.com/', external: true },
      { id: 'product-design-exercise', title: 'Weekly UX/Product Design Exercise', description: 'Exercícios semanais para praticar raciocínio e resolução de problemas.', type: 'Desafio', to: 'https://productdesigninterview.com/weekly-ux-product-design-exercise', external: true },
      { id: 'designercize', title: 'Designercize', description: 'Exercícios curtos para manter a prática de design em movimento.', type: 'Desafio', to: 'https://designercize.com/', external: true },
      { id: 'briefsup', title: 'BriefsUp', description: 'Briefings fictícios para iniciar projetos e montar estudos de caso.', type: 'Briefing', to: 'https://www.briefsup.com/', external: true },
      { id: 'design-assignments', title: 'Design Assignments', description: 'Coleção de tarefas para praticar diferentes problemas de design.', type: 'Desafio', to: 'https://www.designassignments.com/', external: true },
      { id: 'goodbrief', title: 'Goodbrief', description: 'Gerador de briefings para criar projetos autorais com direção clara.', type: 'Briefing', to: 'https://goodbrief.io/', external: true },
      { id: 'drawerrr', title: 'Drawerrr', description: 'Desafios de produto para exercitar ideias e soluções de interface.', type: 'Desafio', to: 'https://drawerrr.com/', external: true },
      { id: 'ui-coach', title: 'UI Coach', description: 'Exercícios guiados para praticar design de interfaces.', type: 'Desafio', to: 'https://www.uicoach.io/', external: true },
      { id: 'briefz', title: 'Briefz', description: 'Briefings de design para desenvolver projetos do início ao fim.', type: 'Briefing', to: 'https://www.briefz.biz/', external: true },
      { id: 'fake-clients', title: 'Fake Clients', description: 'Clientes fictícios e desafios de UX para começar um case.', type: 'Briefing', to: 'https://fakeclients.com/ux', external: true },
    ],
  },
  {
    number: '04',
    title: 'Monte seu portfólio',
    description: 'Seu primeiro case está pronto? Bora colocar no ar. 🚀',
    introduction: 'Agora é hora de escolher onde apresentar seu trabalho e criar uma experiência simples para quem vai navegar por ele.',
    guidance: [
      { title: 'Escolha onde publicar', description: 'Notion, Behance, Framer, Adobe Portfolio, Webflow, Wix e outras ferramentas podem funcionar para começar. Considere seu tempo, familiaridade e o tipo de apresentação que você quer criar.' },
      { title: 'Crie uma estrutura', description: 'Uma primeira versão pode reunir apresentação, cases, sobre e contato.' },
      { title: 'Facilite o caminho', description: 'Deixe os trabalhos fáceis de encontrar e mantenha a navegação consistente. Links para currículo, LinkedIn e contato também devem estar acessíveis.' },
      { title: 'Cuide dos detalhes', description: 'Revise textos, imagens, hierarquia, espaçamento e links. Confira também como tudo funciona em diferentes tamanhos de tela.' },
    ],
    nextStep: 'Escolha uma ferramenta e coloque no ar uma primeira versão com sua apresentação, um case e uma forma de contato.',
    contents: [
      { id: 'onde-criar', title: 'Onde criar portfólio de design?', description: 'Análise de formatos, plataformas e referências para publicar seu portfólio.', type: 'Artigo', to: 'https://brasil.uxdesign.cc/onde-criar-portf%C3%B3lio-de-design-an%C3%A1lise-e-refer%C3%AAncias-a77a3c08b8c8', external: true },
      { id: 'framer', title: 'Framer', description: 'Plataforma visual para criar e publicar sites de portfólio.', type: 'Plataforma', to: 'https://framer.com/', external: true },
      { id: 'uxfolio', title: 'UXfolio', description: 'Ferramenta focada em criar e apresentar cases de UX.', type: 'Plataforma', to: 'https://uxfol.io/', external: true },
      { id: 'webflow', title: 'Webflow', description: 'Construtor visual para sites com maior liberdade de layout.', type: 'Plataforma', to: 'https://webflow.com/', external: true },
      { id: 'super', title: 'Super', description: 'Forma de publicar um site a partir de páginas do Notion.', type: 'Plataforma', to: 'https://super.so/', external: true },
      { id: 'bubble', title: 'Bubble', description: 'Plataforma no-code para criar experiências digitais e sites.', type: 'Plataforma', to: 'https://bubble.io/', external: true },
      { id: 'adobe-portfolio', title: 'Adobe Portfolio', description: 'Criador de sites e portfólios integrado ao ecossistema Adobe.', type: 'Plataforma', to: 'https://portfolio.adobe.com/sites', external: true },
      { id: 'semplice', title: 'Semplice', description: 'Construtor de portfólios para pessoas que querem mais controle visual.', type: 'Plataforma', to: 'https://www.semplice.com/', external: true },
      { id: 'squarespace', title: 'Squarespace', description: 'Modelos e recursos para publicar um site de portfólio.', type: 'Plataforma', to: 'https://pt.squarespace.com/', external: true },
      { id: 'readymag', title: 'Readymag', description: 'Editor visual para projetos editoriais e portfólios experimentais.', type: 'Plataforma', to: 'https://readymag.com/', external: true },
      { id: 'wix', title: 'Wix', description: 'Construtor de sites com modelos para portfólios.', type: 'Plataforma', to: 'https://pt.wix.com/', external: true },
    ],
  },
  {
    number: '05',
    title: 'Revise e coloque para rodar',
    description: 'Portfólio publicado. Agora ele pode evoluir com você. 👀',
    introduction: 'A primeira versão abre espaço para feedback, ajustes e novos trabalhos. Use essas experiências para deixar sua apresentação cada vez mais alinhada ao momento da sua carreira.',
    guidance: [
      { title: 'Peça outros olhares', description: 'Mostre seu portfólio para pessoas de Design, Produto ou outras áreas e peça feedback sobre a clareza do conteúdo, seu papel e suas escolhas. Uma mentoria também pode ser um ótimo espaço para receber uma visão mais direcionada e descobrir pontos que você pode melhorar.' },
      { title: 'Descubra os pontos confusos', description: 'Preste atenção nas partes que geram dúvidas ou precisam de muita explicação. Reescreva, reorganize ou simplifique quando necessário.' },
      { title: 'Faça uma revisão técnica', description: 'Confira links, imagens, ortografia, navegação, responsividade, carregamento e informações de contato.' },
      { title: 'Continue atualizando', description: 'Novas experiências podem trazer materiais melhores para sua apresentação. Adicione trabalhos relevantes, revise os antigos e mantenha tudo alinhado ao que você quer buscar.' },
      { title: 'Coloque para circular', description: 'Adicione o endereço ao currículo, LinkedIn e outros espaços profissionais. Compartilhe com sua rede e use nas candidaturas.' },
    ],
    nextStep: 'Envie seu portfólio para alguém de confiança, anote os principais pontos do feedback e faça uma primeira rodada de ajustes.',
    contents: [
      { id: 'brazilians-who-design', title: 'Brazilians Who Design', description: 'Portfólios de pessoas brasileiras que trabalham com design.', type: 'Referência', to: 'https://brazilianswho.design/', external: true },
      { id: 'design-do-brasil', title: 'Design do Brasil', description: 'Seleção de portfólios e trabalhos de design brasileiros.', type: 'Referência', to: 'https://designdobrasil.co/', external: true },
      { id: 'rafa-luve', title: 'Portfolio Examples', description: 'Coleção de exemplos de portfólios para analisar e salvar.', type: 'Referência', to: 'https://rafa-luve.raindrop.page/portfolio-examples-57795513', external: true },
      { id: 'vagasux-news-april', title: 'VagasUX News: Fólio', description: 'Edição da VagasUX News com referências e conversas sobre portfólio.', type: 'Newsletter', to: 'https://vagasux.substack.com/p/vagasux-news-23-abril-folio', external: true },
      { id: 'vagasux-news-may', title: 'VagasUX News: The Portfolio', description: 'Edição da VagasUX News dedicada a portfólio e apresentação profissional.', type: 'Newsletter', to: 'https://vagasux.substack.com/p/vagasux-news-24-may-the-portfolio', external: true },
    ],
  },
]
