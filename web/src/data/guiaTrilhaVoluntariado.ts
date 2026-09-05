import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes } from '@/lib/siteLinks'
import type { GuiaTrilhaPrimeiraVagaStage } from '@/data/guiaTrilhaPrimeiraVaga'

export const guiaTrilhaVoluntariadoStages: GuiaTrilhaPrimeiraVagaStage[] = [
  {
    number: '01',
    title: 'Entenda como o voluntariado pode contribuir',
    description: 'Uma forma de praticar, colaborar e ampliar seu repertório.',
    introduction: 'O voluntariado permite participar de projetos reais junto de outras pessoas. Além de exercitar suas habilidades, você conhece diferentes contextos de trabalho e cria trocas que podem acompanhar sua carreira.',
    guidance: [
      { title: 'Prática com propósito', description: 'Procure iniciativas cuja causa faça sentido para você. O trabalho ganha mais clareza quando você entende quem será impactado e qual problema coletivo está ajudando a resolver.' },
      { title: 'Aprendizado em conjunto', description: 'Projetos voluntários envolvem pessoas com experiências e especialidades diferentes. Use essa convivência para fazer perguntas, compartilhar o que você sabe e observar outras formas de trabalhar.' },
      { title: 'Experiência para contar', description: 'Registre seu papel, as decisões e os resultados ao longo do projeto. Esse material pode entrar no seu LinkedIn e ajudar a construir um case para o portfólio.' },
    ],
    nextStep: 'Escolha uma causa ou tema que você gostaria de apoiar e observe quais habilidades pode colocar a serviço dela.',
    contents: [
      { id: 'hands-on-voluntariado', title: 'Voluntariado & hands-on: conectando a prática com a colaboração', description: 'Reflexão sobre como o voluntariado cria espaço para prática, troca e construção coletiva.', type: 'Referência', to: 'https://medium.com/ux-user-experience-design-em-portugues/voluntariado-hands-on-conectando-a-pr%C3%A1tica-com-a-colabora%C3%A7%C3%A3o-4f1476f37d9c', external: true },
    ],
  },
  {
    number: '02',
    title: 'Encontre uma iniciativa que combine com você',
    description: 'Considere causa, contexto e como você pode participar.',
    introduction: 'Nem todo voluntariado funciona do mesmo jeito. Algumas iniciativas precisam de uma contribuição pontual, outras formam times contínuos. Leia com atenção o objetivo, a rotina e as responsabilidades antes de se candidatar.',
    guidance: [
      { title: 'Comece pela causa', description: 'Busque organizações e comunidades que atuam em temas que despertam seu interesse. A afinidade com a causa ajuda a manter o envolvimento ao longo do projeto.' },
      { title: 'Entenda o compromisso', description: 'Veja se a iniciativa informa a frequência de encontros, o tempo esperado e a forma de colaboração. Seja honesto sobre sua disponibilidade para escolher algo possível para sua rotina.' },
      { title: 'Pergunte o que não estiver claro', description: 'Antes de entrar, vale entender qual será seu papel, quem acompanha o trabalho e como as decisões são tomadas. Uma boa conversa inicial alinha expectativas dos dois lados.' },
    ],
    nextStep: 'Salve duas ou três iniciativas que chamaram sua atenção e compare o propósito, a disponibilidade pedida e a forma de colaboração.',
    contents: [
      { id: 'atados', title: 'Atados', description: 'Plataforma para encontrar oportunidades de voluntariado em diferentes causas e organizações.', type: 'Referência', to: 'https://www.atados.com.br/', external: true },
    ],
  },
  {
    number: '03',
    title: 'Prepare sua apresentação',
    description: 'Deixe claro o que você sabe fazer e como pode contribuir.',
    introduction: 'Você não precisa chegar sabendo tudo. Uma apresentação simples sobre sua trajetória, interesses e disponibilidade ajuda a iniciativa a entender onde sua contribuição pode fazer mais sentido.',
    guidance: [
      { title: 'Conte seu momento', description: 'Explique em poucas linhas sua experiência, o que está aprendendo e por que quer participar. Seu interesse pela causa também é parte importante dessa conversa.' },
      { title: 'Mostre suas habilidades', description: 'Liste ferramentas, conhecimentos e experiências que você consegue colocar em prática. Inclua atividades de cursos, projetos pessoais ou trabalhos de outras áreas quando forem relevantes.' },
      { title: 'Combine disponibilidade', description: 'Compartilhe com transparência quanto tempo consegue dedicar e em quais horários. Isso ajuda o time a planejar o trabalho sem criar expectativas difíceis de cumprir.' },
    ],
    nextStep: 'Escreva uma apresentação curta sobre você e liste as habilidades e a disponibilidade que gostaria de oferecer.',
    contents: [
      { id: 'linkedin-projetos', title: 'Posso incluir projetos de curso, hackathon ou voluntariado no LinkedIn?', description: 'Veja como registrar projetos voluntários e conectá-los à sua trajetória profissional.', type: 'FAQ', to: `${guiaRoutes.faq}#projetos-curso-hackathon-linkedin` },
      { id: 'cv-voluntariado', title: 'O que não pode faltar no currículo?', description: 'Use a FAQ para escolher experiências e projetos relevantes para sua apresentação.', type: 'FAQ', to: `${guiaRoutes.faq}#cv-o-que-incluir` },
    ],
  },
  {
    number: '04',
    title: 'Participe e construa junto',
    description: 'Voluntariado funciona melhor com comunicação e acordos claros.',
    introduction: 'Ao entrar em uma iniciativa, conheça as pessoas, o objetivo do projeto e a forma de trabalho. Compartilhe avanços, avise sobre impedimentos e participe das conversas que ajudam o time a tomar decisões.',
    guidance: [
      { title: 'Conheça o contexto antes de propor', description: 'Converse com quem já participa, entenda o que foi feito e descubra quais necessidades estão abertas. Isso ajuda a direcionar sua energia para o que é prioritário.' },
      { title: 'Trabalhe de forma visível', description: 'Registre decisões, compartilhe entregas e peça feedback durante o caminho. A documentação facilita a colaboração, especialmente em times remotos e assíncronos.' },
      { title: 'Cuide dos combinados', description: 'Se sua disponibilidade mudar, avise cedo. Ajustar o escopo ou repassar uma atividade com contexto é uma forma de respeitar o tempo das outras pessoas.' },
    ],
    nextStep: 'Na primeira semana, marque uma conversa de contexto, escolha uma contribuição possível e combine como o time vai acompanhar o andamento.',
    contents: [
      { id: 'vagasux-voluntariado', title: 'Voluntariado na VagasUX', description: 'Conheça as frentes, o time e como a comunidade organiza suas iniciativas.', type: 'Comunidade', to: routes.voluntariado },
      { id: 'vagasux-form', title: 'Quero contribuir com a VagasUX', description: 'Conte como gostaria de colaborar para a VagasUX conhecer seu momento e seus interesses.', type: 'Comunidade', to: 'https://forms.gle/vqyLwPfA42LYv6ZV6', external: true },
    ],
  },
  {
    number: '05',
    title: 'Transforme aprendizados em próximos passos',
    description: 'Reflita sobre a experiência e leve o que fez para a sua trajetória.',
    introduction: 'Ao concluir uma etapa ou projeto, reserve tempo para olhar para o que funcionou, o que foi desafiador e o que você gostaria de fazer diferente. Essa revisão ajuda a transformar a experiência em aprendizado concreto.',
    guidance: [
      { title: 'Registre sua contribuição', description: 'Anote o problema em que trabalhou, seu papel, como colaborou e o que foi entregue. Se houver permissão, guarde materiais que ajudem a contar essa história.' },
      { title: 'Peça feedback', description: 'Uma conversa com o time pode trazer perspectivas sobre suas contribuições e indicar o que continuar desenvolvendo. Use o retorno para decidir seus próximos passos.' },
      { title: 'Atualize sua apresentação', description: 'Quando fizer sentido, adicione a experiência ao LinkedIn, currículo ou portfólio. Explique o contexto e suas responsabilidades de forma clara e honesta.' },
    ],
    nextStep: 'Anote um aprendizado da experiência, uma habilidade que você praticou e uma forma de levar isso para seu próximo projeto ou candidatura.',
    contents: [
      { id: 'portfolio-voluntariado', title: 'Montar meu portfólio', description: 'Transforme experiências e projetos em cases que mostram como você trabalha.', type: 'Trilha', to: guiaRoutes.trilha('portfolio') },
      { id: 'primeira-vaga-voluntariado', title: 'Conseguir minha primeira vaga', description: 'Use sua experiência para preparar currículo, LinkedIn e candidaturas.', type: 'Trilha', to: guiaRoutes.trilha('primeira-vaga') },
    ],
  },
]
