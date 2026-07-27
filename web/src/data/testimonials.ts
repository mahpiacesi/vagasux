export type TestimonialCategory =
  | 'Eventos'
  | 'Mentorias'
  | 'Projetos'
  | 'Vagas'
  | 'Seletivas'

export type TestimonialTone =
  | 'cream'
  | 'indigo'
  | 'mustard'
  | 'navy'
  | 'lilac'
  | 'soft'

export type Testimonial = {
  id: string
  quote: string
  name: string
  role?: string
  category: TestimonialCategory
  tone: TestimonialTone
}

/**
 * Curated excerpts from Wall of Vaguiners (testimonial.to/vagasux).
 * Not exhaustive — pick stronger, card-length quotes.
 */
export const testimonials: Testimonial[] = [
  {
    id: 'luiz-filipe-eventos',
    quote:
      'Participei de um workshop incrível através do VagasUX sobre Google Analytics e UX Metrics. Reforçou a importância de olhar além do design e compreender o usuário por meio de métricas.',
    name: 'Luiz Filipe Cardoso',
    category: 'Eventos',
    tone: 'cream',
  },
  {
    id: 'jade-papo-eventos',
    quote:
      'Organizei o Papo de Vaguiner 4ª edição para a comunidade. É sempre desafiador deixar a timidez de lado, mas com as pessoas certas te dando suporte, as coisas ficam um pouco mais fáceis.',
    name: 'Jade Simões',
    role: 'Product Designer',
    category: 'Eventos',
    tone: 'indigo',
  },
  {
    id: 'danielle-camis-eventos',
    quote:
      'Participei do workshop da Camis Moreira — Manual de sobrevivência ao mundo corporativo. Uma ótima experiência que me lembrou o quão importante é estar cercado de gente disposta a trocar conhecimento.',
    name: 'Danielle Fortes',
    role: 'Product Designer',
    category: 'Eventos',
    tone: 'mustard',
  },
  {
    id: 'laura-joinville-eventos',
    quote:
      'Fui ao Papo Vaguiner em Joinville. Eventos online e posts ajudam, mas nada substitui um bate-papo no olho no olho — a conexão muda tudo.',
    name: 'Laura Motta',
    role: 'Design e marketing',
    category: 'Eventos',
    tone: 'navy',
  },
  {
    id: 'caroline-mentoria',
    quote:
      'As mentorias me ajudaram a recuperar a confiança e me preparar emocionalmente para os processos seletivos. Graças a esse apoio, consegui minha recolocação como UX/UI Designer Analista no Banco Inter.',
    name: 'Caroline Gomes',
    category: 'Mentorias',
    tone: 'lilac',
  },
  {
    id: 'mariah-mentoria',
    quote:
      'Depois de uma demissão em massa, as mentorias do VagasUX fizeram toda a diferença. Um mês depois, ainda arrumando o portfólio, fui convidada para uma entrevista.',
    name: 'Mariah Carrard',
    category: 'Mentorias',
    tone: 'cream',
  },
  {
    id: 'mai-portfolio-mentoria',
    quote:
      'Participei da primeira vez da Portfolio Review Live da comunidade. Feedbacks claros no portfólio, com juniores assistindo e aprendendo junto — conteúdo que eu não teria acesso sozinha.',
    name: 'Mai Fukuda',
    category: 'Mentorias',
    tone: 'soft',
  },
  {
    id: 'mayara-mentoria',
    quote:
      'Fiz mentoria de case com o Rafael Ventura. Ele foi bem direto no que eu podia melhorar no portfólio — e era exatamente o que eu precisava naquele momento.',
    name: 'Mayara Gonçalves',
    role: 'UX Designer',
    category: 'Mentorias',
    tone: 'indigo',
  },
  {
    id: 'beatriz-mentoria',
    quote:
      'A VagasUX foi meu principal porto de apoio quando decidi migrar de área. Mentoria, orientação e escuta — o que fez toda a diferença naquele momento.',
    name: 'Beatriz Miranda',
    category: 'Mentorias',
    tone: 'mustard',
  },
  {
    id: 'gabriela-vagas',
    quote:
      'Mais uma etapa na minha carreira profissional começou: estou iniciando como Product Designer Jr. Obrigada à comunidade por todo o acolhimento nessa jornada.',
    name: 'Gabriela Peron',
    role: 'Product Designer',
    category: 'Vagas',
    tone: 'navy',
  },
  {
    id: 'amanda-vagas',
    quote:
      'Estou iniciando em um novo cargo de Product Designer na Softplan. Queria agradecer aos voluntariados que faço parte — VagasUX e Friends of Figma RJ — pela curadoria impecável de vagas e pelas trocas sobre carreira no dia a dia.',
    name: 'Amanda Alves Andrade',
    role: 'Product Designer',
    category: 'Vagas',
    tone: 'cream',
  },
  {
    id: 'anna-vagas',
    quote:
      'Minha jornada até me tornar Product Designer começou com um grande apoio: a comunidade da VagasUX. Foi através dela que conquistei minha primeira oportunidade — e, um pouco mais de um ano depois, Product Designer na XP Inc.',
    name: 'Anna Barros',
    role: 'Product Designer',
    category: 'Vagas',
    tone: 'lilac',
  },
  {
    id: 'gustavo-vagas',
    quote:
      'Site com um design gostosinho de usar, filtrinho na bagaça que desafiam e que deixam as vagas muito bem divididas. Encontrei as que mais tinham a ver com meu perfil em questão de segundos.',
    name: 'Gustavo Barbosa',
    category: 'Vagas',
    tone: 'soft',
  },
  {
    id: 'jade-projetos',
    quote:
      'Perceber que eu não estava só nesse processo — que outras mulheres enfrentavam as mesmas dificuldades — me deu um ânimo a mais. Agora atuo como voluntária e continuo aprendendo com a comunidade.',
    name: 'Jade Simões',
    role: 'Product Designer',
    category: 'Projetos',
    tone: 'indigo',
  },
  {
    id: 'igor-seletivas',
    quote:
      'Recentemente conquistei uma bolsa de estudos de 3 meses na Alura, por meio da VagasUX. Estou comprometido em aproveitar ao máximo cada aprendizado ao longo dessa jornada.',
    name: 'Igor Felipe Campos',
    role: 'Front-end | UI/UX Designer',
    category: 'Seletivas',
    tone: 'mustard',
  },
  {
    id: 'luiz-reis-seletivas',
    quote:
      'Fui contemplado pelo VagasUX com um ano de acesso à TALKNTALK. Foi incrível praticar sem julgamentos, me sentindo acolhido o tempo todo. De verdade, estou muito grato pela oportunidade.',
    name: 'Luiz Reis',
    category: 'Seletivas',
    tone: 'navy',
  },
  {
    id: 'daniela-seletivas',
    quote:
      'Depois de 3 meses intensos, chegou ao fim essa jornada de muito aprendizado pela parceria entre a VagasUX e a Alura. Mais uma vez, meu agradecimento à comunidade e aos instrutores.',
    name: 'Daniela Salles',
    category: 'Seletivas',
    tone: 'cream',
  },
]
