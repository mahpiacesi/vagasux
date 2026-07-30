import type { Icon } from '@phosphor-icons/react'
import {
  ChatsCircle,
  Compass,
  CurrencyCircleDollar,
  GraduationCap,
  HandHeart,
  LockKey,
  MapTrifold,
  Sparkle,
  UsersThree,
  WhatsappLogo,
} from '@phosphor-icons/react'

export const guildaJoinUrl = 'https://nas.io/vagasux' as const

export const guildaMarqueeItems = [
  'Mentorias em grupo',
  'WhatsApp exclusivo',
  'Mini-desafios',
  'Seletivas',
  'Descontos',
  'Encontros quinzenais',
  'Vaguiners',
  'Portfólio na prática',
] as const

export const guildaPainPoints = [
  {
    title: 'Cursos caros, portas fechadas',
    description:
      'Antes de aprender o básico, muita gente já encontra barreiras de preço. Quem não pode investir milhares de reais acaba ficando de fora.',
  },
  {
    title: 'Falta de mentoria de verdade',
    description:
      'Você estuda, mas sente que está sozinha. Faltam feedbacks, conexões e um espaço seguro para tirar dúvidas — ou errar enquanto aprende.',
  },
  {
    title: 'Insegurança que trava',
    description:
      'A comparação com quem já está na área paralisa. E começa a dúvida: será que eu sou designer boa o suficiente para UX?',
  },
] as const

export type GuildaBenefit = {
  title: string
  description: string
  Icon: Icon
}

export const guildaBenefits: GuildaBenefit[] = [
  {
    title: 'Foco em quem está começando',
    description:
      'Direcionamento prático do que estudar, como montar portfólio e por onde começar — sem cair no conteúdo infinito.',
    Icon: Compass,
  },
  {
    title: 'Mentorias diversas',
    description:
      'Encontros com profissionais atuantes que compartilham bastidores reais e dicas que raramente aparecem no feed.',
    Icon: GraduationCap,
  },
  {
    title: 'Tudo num lugar só',
    description:
      'Conteúdo, comunidade e oportunidades no mesmo espaço. Sem pular de grupo em grupo tentando achar resposta.',
    Icon: MapTrifold,
  },
  {
    title: 'Você não está sozinha',
    description:
      'A comunidade acompanha sua evolução, celebra vitórias e ajuda a seguir quando a jornada fica difícil.',
    Icon: UsersThree,
  },
  {
    title: 'Seletivas e descontos',
    description:
      'Benefícios exclusivos para turbinar sua formação sem pesar no bolso — de cursos a mentorias parceiras.',
    Icon: CurrencyCircleDollar,
  },
  {
    title: 'Voz nas decisões',
    description:
      'Participe dos bastidores, dê opinião e ajude a cocriar o futuro da VagasUX com quem vive a comunidade.',
    Icon: HandHeart,
  },
]

export const guildaHighlights = [
  {
    eyebrow: 'Na prática',
    title: 'Desbloqueie seu portfólio',
    description:
      'Workshops com exercícios reais, dinâmicas e materiais para construir um portfólio com propósito desde o início — não só mais um case genérico.',
  },
  {
    eyebrow: 'No seu ritmo',
    title: 'Foco na sua transição',
    description:
      'A Guilda respeita seu tempo e oferece apoio contínuo: mentorias, ferramentas e troca para ganhar confiança a cada etapa da migração para UX.',
  },
] as const

export type GuildaTestimonial = {
  id: string
  quote: string
  name: string
  tone: 'cream' | 'indigo' | 'mustard' | 'lilac' | 'soft' | 'navy'
}

export const guildaTestimonials: GuildaTestimonial[] = [
  {
    id: 'g1',
    quote:
      'Me guiou para melhorias que nem imaginava que precisava. Super valeu a pena — recomendo demais!',
    name: 'Membro da Guilda',
    tone: 'indigo',
  },
  {
    id: 'g2',
    quote:
      'Antes me sentia perdida. A Guilda me ajudou a focar nas coisas certas e nas melhorias que realmente importavam.',
    name: 'Membro da Guilda',
    tone: 'cream',
  },
  {
    id: 'g3',
    quote:
      'Como iniciante, consegui ter direção no objetivo de trabalhar internacionalmente — antes mesmo de montar o portfólio.',
    name: 'Membro da Guilda',
    tone: 'mustard',
  },
  {
    id: 'g4',
    quote:
      'Ganhei maturidade no processo de design com IA e adaptei meu LinkedIn para o que recrutadores procuram.',
    name: 'Membro da Guilda',
    tone: 'lilac',
  },
  {
    id: 'g5',
    quote:
      'O contato com pessoas em níveis diferentes de experiência e os pontos de vista sobre os temas foi o grande diferencial.',
    name: 'Membro da Guilda',
    tone: 'soft',
  },
  {
    id: 'g6',
    quote:
      'As trocas nas sessões — especialmente quando veio uma recrutadora — mudaram minha perspectiva sobre vagas e adaptação.',
    name: 'Membro da Guilda',
    tone: 'navy',
  },
]

export type GuildaPlan = {
  id: string
  name: string
  hook: string
  price: string
  period: string
  badge?: string
  featured?: boolean
  perks: string[]
}

export const guildaPlans: GuildaPlan[] = [
  {
    id: 'mensal',
    name: 'Guilda mensal',
    hook: 'Para aprender no seu ritmo e acompanhar tudo que rola na comunidade.',
    price: 'R$ 19,90',
    period: '/ mês',
    perks: [
      'Mentorias em grupo mensais',
      'Acesso às gravações dos encontros',
      'Mini-desafios para participar',
      'Seletivas e descontos para membros',
      'Grupo exclusivo no WhatsApp',
    ],
  },
  {
    id: 'anual',
    name: 'Guilda anual',
    hook: 'Para quem acredita na jornada e quer construir com a comunidade — com economia.',
    price: 'R$ 199',
    period: '/ ano',
    badge: 'Mais popular',
    featured: true,
    perks: [
      'Tudo do plano mensal',
      'Economia de R$ 40 no ano',
      '2 mentorias avulsas (30 min)',
      '1 mentoria de carreira com Mah Piacesi',
      'Apoio contínuo da comunidade',
    ],
  },
  {
    id: 'avulsa',
    name: 'Mentorias avulsas',
    hook: 'Feedback direto e orientação prática com quem já está no mercado.',
    price: '+ R$ 10',
    period: 'adicional',
    perks: [
      'Acesso a mentores do mercado',
      'Simulações de entrevista e cases',
      'Feedback sobre portfólio',
      'Direcionamento de carreira',
      'Revisão de CV e LinkedIn',
    ],
  },
]

export const guildaFaq = [
  {
    question: 'O que eu recebo ao entrar na Guilda do Vaguiner?',
    answer:
      'Acesso ao grupo exclusivo no WhatsApp, encontros e mentorias em grupo, gravações, mini-desafios, seletivas com desconto e participação nos bastidores da comunidade. Tudo pensado para quem está migrando ou começando em UX.',
  },
  {
    question: 'Preciso já trabalhar com UX para entrar?',
    answer:
      'Não. A Guilda é para quem está migrando, estudando ou começando na área. O foco é apoiar iniciantes e pessoas em transição — não exigimos experiência prévia formal.',
  },
  {
    question: 'Como funcionam as mentorias avulsas?',
    answer:
      'São sessões individuais ou pontuais com mentores da comunidade, contratadas à parte. Ideal para feedback de portfólio, simulação de entrevista ou direcionamento de carreira.',
  },
  {
    question: 'E se eu não conseguir acompanhar tudo?',
    answer:
      'Sem problema. Os encontros ficam gravados e você participa no seu ritmo. A Guilda foi pensada para jornadas reais — com trabalho, estudo e vida acontecendo ao mesmo tempo.',
  },
  {
    question: 'Tem certificado?',
    answer:
      'Não emitimos certificado formal. O valor está na troca, nas mentorias e no apoio da comunidade — não em um papel no fim.',
  },
  {
    question: 'Posso cancelar quando quiser?',
    answer:
      'Sim. A assinatura é gerenciada pela plataforma Nas.io. Você pode cancelar conforme as regras do plano escolhido.',
  },
] as const

export const guildaWhatsappFeature = {
  title: 'Grupo exclusivo no WhatsApp',
  description:
    'A Guilda acontece num grupo fechado, com apoio e troca real entre vaguiners — longe do ruído dos canais abertos.',
  Icon: WhatsappLogo,
} as const

export const guildaExclusiveBadge = {
  title: 'Comunidade exclusiva',
  Icon: LockKey,
} as const

export const guildaSparkFeature = {
  Icon: Sparkle,
  IconSecondary: ChatsCircle,
} as const
