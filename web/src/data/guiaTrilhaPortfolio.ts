import type { GuiaTrilhaPrimeiraVagaStage } from '@/data/guiaTrilhaPrimeiraVaga'

export const guiaTrilhaPortfolioStages: GuiaTrilhaPrimeiraVagaStage[] = [
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
    contents: [],
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
    contents: [],
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
    tip: {
      title: 'Uma estrutura para começar',
      description: 'Contexto → Problema → Objetivo → Caminho → Escolhas → Solução → Aprendizados. Use essa sequência como ponto de partida e adapte conforme a história do seu trabalho.',
    },
    nextStep: 'Escreva o primeiro rascunho do seu case. Priorize colocar as ideias no papel antes de pensar na parte visual.',
    contents: [],
  },
  {
    number: '04',
    title: 'Monte seu portfólio',
    description: 'Seu primeiro case está pronto? Bora colocar no ar. 🚀',
    introduction: 'Agora é hora de escolher onde apresentar seu trabalho e criar uma experiência simples para quem vai navegar por ele.',
    guidance: [
      { title: 'Escolha onde publicar', description: 'Notion, Behance, Framer, Adobe Portfolio, Webflow, Wix e outras ferramentas podem funcionar para começar. Considere seu tempo, familiaridade e o tipo de apresentação que você quer criar.' },
      { title: 'Crie uma estrutura', description: 'Uma primeira versão pode reunir apresentação (quem você é e o que busca), cases (seus principais trabalhos), sobre (sua trajetória e interesses) e contato (e-mail, LinkedIn e outros canais relevantes).' },
      { title: 'Facilite o caminho', description: 'Deixe os trabalhos fáceis de encontrar e mantenha a navegação consistente. Links para currículo, LinkedIn e contato também devem estar acessíveis.' },
      { title: 'Cuide dos detalhes', description: 'Revise textos, imagens, hierarquia, espaçamento e links. Confira também como tudo funciona em diferentes tamanhos de tela.' },
    ],
    nextStep: 'Escolha uma ferramenta e coloque no ar uma primeira versão com sua apresentação, um case e uma forma de contato.',
    contents: [],
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
    contents: [],
  },
]
