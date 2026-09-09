import { routes } from '@/lib/siteLinks'
import type { GuiaTrilhaPrimeiraVagaStage } from '@/data/guiaTrilhaPrimeiraVaga'

export const guiaTrilhaVoluntariadoStages: GuiaTrilhaPrimeiraVagaStage[] = [
  {
    number: '01',
    title: 'Entenda o que você pode praticar',
    description: 'Voluntariado também pode ser espaço para aprender fazendo 👀',
    introduction: 'Participar de um projeto voluntário pode ajudar você a colocar conhecimentos de Design em prática, experimentar diferentes formas de trabalhar e entender como é colaborar com outras pessoas.',
    guidance: [
      { title: 'Escolha o que quer desenvolver', description: 'Pense nas habilidades que você quer praticar. Pode ser UI, pesquisa, prototipação, Design System, facilitação, comunicação ou até organização de processos.' },
      { title: 'Experimente diferentes contextos', description: 'Projetos voluntários podem envolver organizações sociais, comunidades, eventos, iniciativas independentes e outras causas. Cada contexto traz problemas e formas de colaboração diferentes.' },
      { title: 'Entenda seu espaço de atuação', description: 'Antes de entrar, procure entender qual será sua responsabilidade, quem estará no projeto e o que esperam da sua participação.' },
    ],
    nextStep: 'Liste duas ou três habilidades que você gostaria de praticar e pense em que tipo de projeto poderia ajudar você a desenvolvê-las.',
    contents: [
      { id: 'hands-on-voluntariado', title: 'Voluntariado & hands-on: conectando a prática com a colaboração', description: 'Reflexão sobre como o voluntariado cria espaço para prática, troca e construção coletiva.', type: 'Referência', to: 'https://medium.com/ux-user-experience-design-em-portugues/voluntariado-hands-on-conectando-a-pr%C3%A1tica-com-a-colabora%C3%A7%C3%A3o-4f1476f37d9c', external: true },
    ],
  },
  {
    number: '02',
    title: 'Encontre uma oportunidade',
    description: 'Tem muita coisa acontecendo por aí 🌎',
    introduction: 'Comunidades, organizações e iniciativas costumam buscar pessoas para ajudar em diferentes frentes. O desafio é encontrar uma oportunidade que faça sentido para você e para o momento em que está.',
    guidance: [
      { title: 'Procure em comunidades', description: 'Acompanhe comunidades de Design, Produto, tecnologia e outras áreas. Muitas oportunidades aparecem primeiro nesses espaços.' },
      { title: 'Explore iniciativas que você conhece', description: 'Pense em projetos, eventos, organizações ou causas que você já acompanha. Pesquise se existem oportunidades abertas ou entre em contato para entender como você pode contribuir.' },
      { title: 'Leia a proposta com atenção', description: 'Confira o que será feito, qual será sua responsabilidade, quanto tempo a atividade pode demandar e como será a colaboração com as outras pessoas.' },
      { title: 'Escolha com intenção', description: 'Considere se a oportunidade conversa com o que você quer aprender e se existe espaço para contribuir dentro da proposta.' },
    ],
    nextStep: 'Escolha uma oportunidade que tenha despertado seu interesse e leia a proposta com calma.',
    contents: [
      { id: 'vagasux-voluntariado', title: 'Voluntariado na VagasUX', description: 'Conheça as frentes, o time e como a comunidade organiza suas iniciativas.', type: 'Comunidade', to: routes.voluntariado, previewUrl: 'https://vagasux.com.br/voluntariado', external: true },
      { id: 'atados', title: 'Atados', description: 'Plataforma para encontrar oportunidades de voluntariado em diferentes causas e organizações.', type: 'Referência', to: 'https://www.atados.com.br/', external: true },
      { id: 'sou-junior', title: 'SouJunior', description: 'Comunidade que conecta pessoas em início de carreira a experiências de aprendizado e colaboração.', type: 'Comunidade', to: 'https://www.soujunior.tech/', external: true },
      { id: 'free-helper', title: 'FreeHelper', description: 'Plataforma que aproxima pessoas voluntárias de projetos e organizações.', type: 'Referência', to: 'https://www.freehelper.com.br/', external: true },
      { id: 'worldpackers', title: 'Worldpackers', description: 'Comunidade com oportunidades de colaboração em projetos no Brasil e no mundo.', type: 'Referência', to: 'https://www.worldpackers.com/pt-BR/', external: true },
      { id: 'todxs', title: 'Todxs', description: 'Iniciativa com oportunidades de voluntariado para pessoas LGBTI+ e aliadas.', type: 'Referência', to: 'https://todxs.org/voluntariado/', external: true },
      { id: 'ciclos-de-ux', title: 'Ciclos de UX', description: 'Comunidade para aprender, trocar experiências e participar de iniciativas de UX.', type: 'Comunidade', to: 'https://ciclosdeux.com.br/', external: true },
      { id: 'hamburgada-do-bem', title: 'Hamburgada do Bem', description: 'Projeto social que reúne pessoas voluntárias em ações para crianças e comunidades.', type: 'Referência', to: 'https://www.hamburgadadobem.com.br/', external: true },
      { id: 'idealist', title: 'Idealist', description: 'Oportunidades remotas de voluntariado em organizações e causas diversas.', type: 'Referência', to: 'https://www.idealist.org/remote-volunteer-opportunities', external: true },
      { id: 'taproot', title: 'Taproot Foundation', description: 'Rede de voluntariado baseada em habilidades profissionais para organizações sociais.', type: 'Referência', to: 'https://taprootfoundation.org/', external: true },
      { id: 'catchafire', title: 'Catchafire', description: 'Plataforma que conecta profissionais a projetos pro bono de impacto social.', type: 'Referência', to: 'https://www.catchafire.org/', external: true },
      { id: 'tech-for-good', title: 'Tech for Good Live', description: 'Oportunidades para ajudar organizações sociais com habilidades de tecnologia e produto.', type: 'Referência', to: 'https://www.techforgood.live/help-a-charity', external: true },
    ],
  },
  {
    number: '03',
    title: 'Combine expectativas',
    description: 'Antes de começar, entenda o combinado 🤝',
    introduction: 'Um projeto voluntário envolve pessoas, prazos e responsabilidades. Ter clareza desde o início ajuda todo mundo a trabalhar melhor.',
    guidance: [
      { title: 'Entenda seu papel', description: 'Pergunte o que esperam da sua participação, quais serão suas entregas e com quem você vai trabalhar.' },
      { title: 'Combine tempo e disponibilidade', description: 'Entenda os prazos e a dedicação esperada. Escolha uma participação que consiga encaixar na sua rotina.' },
      { title: 'Conheça quem está no projeto', description: 'Saiba quem são as pessoas envolvidas, como vocês vão se comunicar e quem será responsável por cada parte do trabalho.' },
      { title: 'Alinhe como o trabalho será usado', description: 'Entenda o destino das entregas, quem poderá utilizá-las e como seu trabalho será apresentado ou creditado.' },
    ],
    nextStep: 'Converse com a pessoa responsável pelo projeto e registre os principais combinados antes de começar.',
    contents: [],
  },
  {
    number: '04',
    title: 'Coloque a mão na massa',
    description: 'Agora é hora de praticar 🛠️',
    introduction: 'Use o projeto como uma oportunidade para experimentar, colaborar e entender como suas escolhas funcionam dentro de um contexto compartilhado.',
    guidance: [
      { title: 'Participe das conversas', description: 'Compartilhe ideias, faça perguntas e acompanhe as decisões do grupo. Colaboração também faz parte do trabalho de Design.' },
      { title: 'Documente seu caminho', description: 'Guarde referências, rascunhos, versões, pesquisas, decisões e feedbacks. Esse material pode ajudar você a entender sua evolução depois.' },
      { title: 'Peça feedback', description: 'Converse com quem está trabalhando com você e procure entender o que está funcionando e onde você pode melhorar.' },
      { title: 'Observe além da entrega', description: 'Preste atenção em como o time se organiza, como problemas são discutidos e como as decisões acontecem. Essas experiências também ampliam seu repertório.' },
    ],
    nextStep: 'Registre o que você fez no projeto, quais decisões tiveram sua participação e o que aprendeu ao longo do caminho.',
    contents: [],
  },
  {
    number: '05',
    title: 'Transforme a experiência em repertório',
    description: 'Terminou? Agora olha para tudo que você construiu 👀',
    introduction: 'O valor da experiência também está no que você consegue levar dela para os próximos passos da sua carreira.',
    guidance: [
      { title: 'Organize o que você fez', description: 'Reúna suas principais entregas, decisões, aprendizados e contribuições. Esse registro pode ajudar na hora de atualizar seu currículo ou portfólio.' },
      { title: 'Peça um retorno', description: 'Converse com as pessoas do projeto e pergunte como foi sua participação. Um feedback pode revelar pontos que passaram despercebidos durante o trabalho.' },
      { title: 'Atualize seu portfólio', description: 'Se fizer sentido e houver autorização, transforme a experiência em um case. Explique o contexto, seu papel, os caminhos que percorreu e o que aprendeu.' },
      { title: 'Mantenha as conexões', description: 'Agradeça quem trabalhou com você e continue acompanhando o projeto quando fizer sentido. Uma boa colaboração pode abrir espaço para novas trocas no futuro.' },
    ],
    nextStep: 'Registre sua principal contribuição, o que você aprendeu e como essa experiência pode aparecer nos seus próximos materiais profissionais.',
    contents: [],
  },
]
