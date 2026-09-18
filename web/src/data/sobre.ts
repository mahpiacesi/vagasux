import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes, superSite } from '@/lib/siteLinks'

export const sobreLinks = {
  comunidade: routes.comunidade,
  voluntariado: routes.voluntariado,
  mentoria: routes.mentoria,
  feedbacks: guiaRoutes.cursos,
  panorama: superSite.panorama,
  founder: 'https://avely.me/mahpiacesi',
  youtubeLive: 'https://youtu.be/_h94hLBW_D4',
  podvagas: 'https://open.spotify.com/show/3XlkhvjZyh425pdRkAtBVs',
} as const

export type SobreTimelineIcon =
  | 'BookOpen'
  | 'MagnifyingGlass'
  | 'ChatsCircle'
  | 'Handshake'
  | 'ChartLineUp'
  | 'VideoCamera'
  | 'Heart'
  | 'MicrophoneStage'
  | 'UsersThree'
  | 'MapPin'
  | 'MapTrifold'
  | 'UsersFour'
  | 'Presentation'
  | 'Sparkle'

export type SobreMilestone = {
  id: string
  date: string
  title: string
  description: string
  icon: SobreTimelineIcon
  featured?: boolean
  link?: {
    label: string
    href: string
  }
}

export type SobreGalleryItem = {
  id: string
  image: string
  alt: string
  caption?: string
  title?: string
  date?: string
  location?: string
  href?: string
  span?: 'normal' | 'wide' | 'tall' | 'featured'
}

export const sobrePurposePoints = [
  'Uma comunidade mais informada e engajada;',
  'Mais acesso a oportunidades, especialmente para quem está começando;',
  'Vagas e oportunidades reunidas em um só lugar;',
  'Incentivo à valorização de profissionais em início de carreira;',
  'Mais troca entre pessoas, empresas e profissionais da área.',
] as const

/**
 * Marcos da história na página Sobre.
 * Adicione, remova ou reordene objetos neste array.
 * O ano é lido da própria data.
 */
export const sobreMilestones: SobreMilestone[] = [
  {
    id: 'gpd-2020',
    date: 'Agosto de 2020',
    title: 'Nasce o Guia do Product Designer',
    description:
      'Em agosto de 2020, Mah reuniu em um só lugar links, referências e materiais de design que já faziam parte do seu dia a dia e compartilhou tudo com a comunidade. O material ficou conhecido como GPD, sigla de Guia do Product Designer, e se tornou uma das primeiras iniciativas da VagasUX.',
    icon: 'BookOpen',
    featured: true,
    link: {
      label: 'Ler o artigo',
      href: 'https://medium.com/ux-user-experience-design-em-portugues/quero-ser-product-designer-e-agora-d6754f8ad0dd',
    },
  },
  {
    id: 'curadoria-2020',
    date: 'Agosto de 2020',
    title: 'Começa a curadoria de vagas',
    description:
      'Poucos dias depois, Mah publicou uma reflexão sobre a dificuldade de encontrar vagas para pessoas iniciantes em UX. A própria busca por oportunidades mostrou um problema: era difícil encontrar e reunir vagas realmente acessíveis para quem estava começando. Foi daí que começou a curadoria que ficou conhecida como Vagas Para Iniciantes.',
    icon: 'MagnifyingGlass',
    featured: true,
    link: {
      label: 'Ler o artigo',
      href: 'https://medium.com/ux-user-experience-design-em-portugues/por-que-%C3%A9-t%C3%A3o-dif%C3%ADcil-encontrar-vagas-para-iniciantes-no-mercado-de-ux-a6fc6b2a22ac',
    },
  },
  {
    id: 'telegram-2020',
    date: '10 de setembro de 2020',
    title: 'A comunidade ganha seu primeiro grupo',
    description:
      'Depois de uma enquete feita no LinkedIn, o primeiro grupo da comunidade foi criado no Telegram. Era o começo de um espaço para trocar experiências, tirar dúvidas e reunir pessoas interessadas em UX e Design.',
    icon: 'ChatsCircle',
    featured: true,
  },
  {
    id: 'fundacao-2020',
    date: '2020',
    title: 'VagasUX começa a tomar forma',
    description:
      'A iniciativa Vagas Para Iniciantes foi conectada ao antigo site Vagas de UX, em uma parceria com outra organização que também fazia curadoria de oportunidades. Depois de algumas conversas, Mah recebeu o bastão e passou a reunir as iniciativas em um só lugar, fundando oficialmente a VagasUX como conhecemos hoje.',
    icon: 'Handshake',
    featured: true,
  },
  {
    id: 'panorama-2021',
    date: 'Janeiro de 2021',
    title: 'A comunidade começa a se ouvir',
    description:
      'Publicamos a primeira pesquisa sobre o cenário da pessoa iniciante em UX. Nascia o Panorama VagasUX, um estudo feito com a comunidade para entender perfis, desafios, oportunidades e necessidades do mercado. A partir daí, o Panorama passou a ser atualizado anualmente.',
    icon: 'ChartLineUp',
    featured: true,
    link: {
      label: 'Conhecer o Panorama',
      href: sobreLinks.panorama,
    },
  },
  {
    id: 'youtube-2021',
    date: 'Março de 2021',
    title: 'A VagasUX vai para o YouTube',
    description:
      'Estreia da primeira live da VagasUX: “Por que eu não passei na entrevista?”. Um tira-dúvidas com recrutadores para conversar sobre processos seletivos, entrevistas e os desafios de quem busca uma oportunidade em UX.',
    icon: 'VideoCamera',
    link: {
      label: 'Assistir a live',
      href: sobreLinks.youtubeLive,
    },
  },
  {
    id: 'ong-2021',
    date: 'Novembro de 2021',
    title: 'Apoie Uma ONG',
    description:
      'Mais de 500 pessoas participaram do desafio Apoie Uma ONG, conectando designers a organizações sociais para criar projetos voluntários que também poderiam se transformar em experiências para seus portfólios.',
    icon: 'Heart',
    featured: true,
    link: {
      label: 'Ver como foi',
      href: 'https://medium.com/vagas-ux/como-foi-organizar-um-desafio-volunt%C3%A1rio-entre-designers-e-ongs-8c87f07f7740',
    },
  },
  {
    id: 'podvagas-2022',
    date: 'Julho de 2022',
    title: 'Nasce o PodVagas',
    description:
      'A VagasUX lança seu podcast oficial, criando mais um espaço para conversar sobre carreira, mercado, design e as experiências de quem vive essa jornada.',
    icon: 'MicrophoneStage',
    link: {
      label: 'Ouvir o PodVagas',
      href: sobreLinks.podvagas,
    },
  },
  {
    id: 'dexconf-2022',
    date: 'Setembro de 2022',
    title: 'Comunidades de design no centro da conversa',
    description:
      'Mah participa da DexConf em uma roda de conversa sobre o papel das comunidades de design, ao lado de outras iniciativas da área.',
    icon: 'UsersThree',
  },
  {
    id: 'meetup-sp-2023',
    date: '27 de abril de 2023',
    title: 'O Papo de Vaguiner sai do online',
    description:
      'Acontece em São Paulo o primeiro meetup presencial da VagasUX: o Papo de Vaguiner. Um novo capítulo para uma comunidade que até então se encontrava principalmente pela internet.',
    icon: 'MapPin',
    featured: true,
  },
  {
    id: 'meetup-rj-2023',
    date: '26 de maio de 2023',
    title: 'A comunidade chega ao Rio',
    description:
      'Um mês depois do primeiro encontro presencial em São Paulo, a VagasUX realiza seu primeiro meetup em outro estado, no Rio de Janeiro.',
    icon: 'MapPin',
  },
  {
    id: 'meetup-joinville-2024',
    date: '19 de outubro de 2024',
    title: 'A comunidade vai além do eixo SP-RJ',
    description:
      'Depois de uma série de encontros em São Paulo e Rio de Janeiro, a VagasUX realiza seu primeiro meetup fora do Sudeste, em Joinville, Santa Catarina.',
    icon: 'MapTrifold',
    featured: true,
  },
  {
    id: 'damas-2025',
    date: '14 de abril de 2025',
    title: 'Damas da VagasUX',
    description:
      'A VagasUX acolhe a comunidade Damas de UI, que estava encerrando suas atividades, e cria um novo espaço dentro da comunidade: o grupo Damas da VagasUX, dedicado exclusivamente a mulheres.',
    icon: 'UsersFour',
  },
  {
    id: 'uxconf-2025',
    date: '18 de outubro de 2025',
    title: 'Comunidades chegam ao palco',
    description:
      'Mah leva para o palco da UXConf BR a conversa “Crescendo juntos: Comunidades como pilar de aprendizado colaborativo”. A apresentação trouxe uma reflexão sobre o papel das comunidades na jornada profissional e sobre como ninguém precisa crescer sozinho.',
    icon: 'Presentation',
    featured: true,
  },
  {
    id: 'goiania-2025',
    date: '12 de novembro de 2025',
    title: 'Primeira parada em Goiânia',
    description:
      'A VagasUX realiza seu primeiro evento presencial em Goiânia, em parceria com a comunidade PorteraTech, ampliando ainda mais o mapa de encontros da comunidade pelo Brasil.',
    icon: 'MapPin',
  },
  {
    id: 'nordeste-2026',
    date: '27 de agosto de 2026',
    title: 'A VagasUX chega ao Nordeste',
    description:
      'A comunidade realiza seu primeiro evento presencial no Nordeste, em Fortaleza, durante o evento Plano de Carreira em UX, em parceria com a comunidade UXFor.',
    icon: 'MapPin',
    featured: true,
  },
  {
    id: 'novo-site-2026',
    date: 'Outubro de 2026',
    title: 'Uma nova fase para a VagasUX',
    description:
      'A VagasUX prepara o lançamento de um novo site, reunindo em uma experiência mais integrada a busca por oportunidades, trilhas de aprendizado e a Guilda do Vaguiner.',
    icon: 'Sparkle',
    featured: true,
  },
]

export const sobreGallery: SobreGalleryItem[] = []

export function milestoneYear(date: string) {
  const match = date.match(/(?:19|20)\d{2}/)
  return match ? Number(match[0]) : 0
}

export function groupSobreMilestones(items: SobreMilestone[]) {
  const groups: { year: number; items: SobreMilestone[] }[] = []
  for (const item of items) {
    const year = milestoneYear(item.date)
    const last = groups.at(-1)
    if (!last || last.year !== year) {
      groups.push({ year, items: [item] })
    } else {
      last.items.push(item)
    }
  }
  return groups
}
