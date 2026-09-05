import type { GuiaTrilhaStage } from '@/data/guiaTrilhaEntenderOBasico'

export type GuiaTrilhaPortfolioStage = Omit<GuiaTrilhaStage, 'contents'> & {
  introduction: string
  contents: (Omit<GuiaTrilhaStage['contents'][number], 'type'> & {
    type: string
  })[]
}

export const guiaTrilhaPortfolioStages: GuiaTrilhaPortfolioStage[] = [
  {
    number: '01',
    title: 'Entenda o que faz um bom portfólio',
    description: 'Comece pelos cases e pela história que você quer contar.',
    introduction: 'Um portfólio ajuda quem o acessa a entender como você pensa, toma decisões e trabalha em cada projeto. Mostre contexto, processo, colaboração, aprendizados e o impacto que foi possível gerar.',
    contents: [
      { id: 'aela-dicas', title: '6 dicas essenciais para montar seu portfólio de UX Design', description: 'Pontos de partida para selecionar projetos e apresentar seu processo.', type: 'Artigo', to: 'https://medium.com/aela/6-dicas-essenciais-para-montar-seu-portf%C3%B3lio-de-ux-design-205e551b3aa3', external: true },
      { id: 'estrutura-case', title: 'Como estruturar um case para portfólio de UX/UI', description: 'Guia para organizar seu case e tornar sua contribuição mais clara.', type: 'Artigo', to: 'https://brasil.uxdesign.cc/como-estruturar-um-case-para-portf%C3%B3lio-de-ux-ui-e-impressionar-recrutadores-62266ee50839', external: true },
      { id: 'dribbble-hiring', title: 'The ultimate guide to getting hired in UX design', description: 'Referência sobre apresentação profissional e busca por oportunidades em UX.', type: 'Artigo', to: 'https://dribbble.com/stories/2020/03/11/ultimate-guide-getting-hired-ux-design', external: true },
    ],
  },
  {
    number: '02',
    title: 'Construa mesmo no começo',
    description: 'Você não precisa esperar uma experiência formal para começar.',
    introduction: 'Projetos de curso, desafios autorais, voluntariado e estudos de caso podem mostrar sua forma de trabalhar. Escolha problemas que façam sentido para você e conte com honestidade o que foi pesquisado, criado e aprendido.',
    contents: [
      { id: 'reflexao-portfolio', title: 'Uma reflexão sobre portfólios, cursos e anseios por empregos', description: 'Reflexão sobre o papel do portfólio durante a formação e a busca por trabalho.', type: 'Artigo', to: 'https://medium.com/ux-user-experience-design-em-portugues/uma-reflex%C3%A3o-sobre-portfolios-cursos-e-anseios-por-empregos-9b19cf51d03', external: true },
      { id: 'sem-experiencia', title: 'Como montar um portfólio de UX se eu ainda não trabalho com UX?', description: 'Caminhos para criar cases antes da primeira experiência profissional na área.', type: 'Artigo', to: 'https://brasil.uxdesign.cc/como-montar-um-portf%C3%B3lio-de-ux-se-eu-ainda-n%C3%A3o-trabalho-com-ux-c5ec6434de20', external: true },
    ],
  },
  {
    number: '03',
    title: 'Encontre um desafio para praticar',
    description: 'Transforme referências e briefs em projetos que você pode desenvolver.',
    introduction: 'Use desafios para praticar etapas específicas ou criar um case completo. Defina um recorte possível, registre suas decisões e reserve espaço para revisar o que você aprendeu ao longo do caminho.',
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
    title: 'Escolha onde publicar',
    description: 'Priorize uma plataforma que você consiga manter atualizada.',
    introduction: 'O melhor lugar para publicar é aquele que deixa seus cases fáceis de acessar e atualizar. Compare formatos, possibilidades de personalização e o tempo que você quer dedicar à montagem.',
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
    title: 'Busque referências e revise',
    description: 'Veja como outras pessoas contam seus projetos e faça ajustes no seu.',
    introduction: 'Referências ajudam a observar ritmo, clareza e escolhas de apresentação. Use-as para analisar o que comunica bem, sem perder sua história e seu jeito de trabalhar.',
    contents: [
      { id: 'brazilians-who-design', title: 'Brazilians Who Design', description: 'Portfólios de pessoas brasileiras que trabalham com design.', type: 'Referência', to: 'https://brazilianswho.design/', external: true },
      { id: 'design-do-brasil', title: 'Design do Brasil', description: 'Seleção de portfólios e trabalhos de design brasileiros.', type: 'Referência', to: 'https://designdobrasil.co/', external: true },
      { id: 'rafa-luve', title: 'Portfolio Examples', description: 'Coleção de exemplos de portfólios para analisar e salvar.', type: 'Referência', to: 'https://rafa-luve.raindrop.page/portfolio-examples-57795513', external: true },
      { id: 'vagasux-news-april', title: 'VagasUX News: Fólio', description: 'Edição da VagasUX News com referências e conversas sobre portfólio.', type: 'Newsletter', to: 'https://vagasux.substack.com/p/vagasux-news-23-abril-folio', external: true },
      { id: 'vagasux-news-may', title: 'VagasUX News: The Portfolio', description: 'Edição da VagasUX News dedicada a portfólio e apresentação profissional.', type: 'Newsletter', to: 'https://vagasux.substack.com/p/vagasux-news-24-may-the-portfolio', external: true },
    ],
  },
]
