/** Snapshot from Notion database "Eventos". */
/** Regenerar: node tools/scripts/export-guia-eventos.mjs */

export type GuiaEventoLocation = 'Online' | 'Presencial' | 'Híbrido'
export type GuiaEventoCost = 'Gratuito' | 'Pago' | 'Freemium'
export type GuiaEventoType = 'Hackathon' | 'Meetup' | 'Conferência' | 'Evento'

export type GuiaEvento = {
  id: string
  title: string
  organizer: string
  eventType: GuiaEventoType
  location: GuiaEventoLocation | string
  cost: GuiaEventoCost | string
  /** Temas do evento (Notion multi_select). */
  themes: string[]
  languages: string[]
  url: string
  /** Capa baixada do Notion (opcional). */
  imageUrl?: string
  /** Data de criação no Notion — ordenação do preview. */
  addedAt?: string
}

/** Meetup oficial da VagasUX — sempre primeiro na listagem. */
export const GUIA_FEATURED_EVENTO_ID = '1848cbb0d9048002b672cccfe159c293'

export const guiaEventos: GuiaEvento[] = [
  {
    "id": "3b28cbb0d90480d4a09afed5f20a7d22",
    "title": "CDX",
    "organizer": "Lucas Tangi",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "UX",
      "Carreira",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://cdxconf.com.br/",
    "addedAt": "2026-08-04T20:34:53Z",
    "imageUrl": "/guia/eventos/3b28cbb0d90480d4a09afed5f20a7d22.png"
  },
  {
    "id": "928d10eca77a477685fab077100324c4",
    "title": "Config - Figma Conference",
    "organizer": "Figma",
    "eventType": "Conferência",
    "location": "Online",
    "cost": "Gratuito",
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://config.figma.com/",
    "addedAt": "2020-08-25T18:07:00Z",
    "imageUrl": "/guia/eventos/928d10eca77a477685fab077100324c4.png"
  },
  {
    "id": "3b28cbb0d9048034a623f58bca4ac3f6",
    "title": "Design&Dendê",
    "organizer": "Design&Dendê",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "UX",
      "Diversidade",
      "Cultura"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.designedende.com/",
    "addedAt": "2026-08-04T20:17:19Z",
    "imageUrl": "/guia/eventos/3b28cbb0d9048034a623f58bca4ac3f6.png"
  },
  {
    "id": "1848cbb0d90480129300c0e367f9cd10",
    "title": "Detach!",
    "organizer": "Glauber Laender",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "UI",
      "UX",
      "Design System",
      "Design Ops",
      "Tecnologia",
      "Acessibilidade",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.detach.com.br/",
    "addedAt": "2025-01-23T14:31:02Z",
    "imageUrl": "/guia/eventos/1848cbb0d90480129300c0e367f9cd10.png"
  },
  {
    "id": "f77dade5afa043bab14c344641b5505b",
    "title": "DEX Conf",
    "organizer": "Mergo",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "UX",
      "Research",
      "Discovery"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.dexconf.com.br/",
    "addedAt": "2020-07-30T17:14:00Z",
    "imageUrl": "/guia/eventos/f77dade5afa043bab14c344641b5505b.png"
  },
  {
    "id": "1848cbb0d9048066adc2c6701377b898",
    "title": "DW! Semana de Design de São Paulo",
    "organizer": "Summit Promo",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Gratuito",
    "themes": [
      "Arte",
      "Cultura",
      "Inovação",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://dwsemanadedesign.com.br/",
    "addedAt": "2025-01-23T14:27:58Z",
    "imageUrl": "/guia/eventos/1848cbb0d9048066adc2c6701377b898.png"
  },
  {
    "id": "21f5986956494ddcb75c511a72003f2c",
    "title": "Elas Lideram",
    "organizer": "EBANX",
    "eventType": "Conferência",
    "location": "Online",
    "cost": "Gratuito",
    "themes": [
      "Liderança",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://elas.womenleadership.com.br/",
    "addedAt": "2021-02-11T14:34:00Z",
    "imageUrl": "/guia/eventos/21f5986956494ddcb75c511a72003f2c.png"
  },
  {
    "id": "3b28cbb0d90480d2938dcfc54dff1f48",
    "title": "Festival Akilomba",
    "organizer": "Akilomba",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "UX",
      "Diversidade",
      "Cultura"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://akilomba.pagtickets.com.br/festival-akilomba-2026__22821/?d=vagasux15",
    "addedAt": "2026-08-04T20:29:36Z",
    "imageUrl": "/guia/eventos/3b28cbb0d90480d2938dcfc54dff1f48.png"
  },
  {
    "id": "1848cbb0d904802bae9efca27932b7e8",
    "title": "Festival MDP",
    "organizer": "Mulheres de Produto",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "Produto",
      "Métricas",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://mulheresdeproduto.com/festival-mdp",
    "addedAt": "2025-01-23T15:17:54Z",
    "imageUrl": "/guia/eventos/1848cbb0d904802bae9efca27932b7e8.png"
  },
  {
    "id": "2878cbb0d90480f8ab8fe2f2239beb22",
    "title": "Floripa Design Days",
    "organizer": "IxDA",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://floripadesignday.com.br/",
    "addedAt": "2025-10-09T16:58:03Z",
    "imageUrl": "/guia/eventos/2878cbb0d90480f8ab8fe2f2239beb22.png"
  },
  {
    "id": "1848cbb0d90480fb80cbecb064fb53ce",
    "title": "Friends of Figma São Paulo",
    "organizer": "Figma",
    "eventType": "Meetup",
    "location": "Híbrido",
    "cost": "Gratuito",
    "themes": [
      "UI",
      "Design System",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://friends.figma.com/sao-paulo/",
    "addedAt": "2025-01-23T14:51:30Z",
    "imageUrl": "/guia/eventos/1848cbb0d90480fb80cbecb064fb53ce.png"
  },
  {
    "id": "1848cbb0d9048035b051ed9240c3f248",
    "title": "Global Accessibility Awareness Day",
    "organizer": "GAAD Foundation",
    "eventType": "Conferência",
    "location": "Híbrido",
    "cost": "Gratuito",
    "themes": [
      "Acessibilidade",
      "UX",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸",
      "🇵🇹"
    ],
    "url": "https://accessibility.day/",
    "addedAt": "2025-01-23T14:45:18Z",
    "imageUrl": "/guia/eventos/1848cbb0d9048035b051ed9240c3f248.png"
  },
  {
    "id": "1848cbb0d90480c4838ffd827a953979",
    "title": "Hackathon Brasil",
    "organizer": "Hackathon Brasil",
    "eventType": "Hackathon",
    "location": "Presencial",
    "cost": "Gratuito",
    "themes": [
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://hackathonbrasil.com.br/",
    "addedAt": "2025-01-23T14:14:32Z",
    "imageUrl": "/guia/eventos/1848cbb0d90480c4838ffd827a953979.png"
  },
  {
    "id": "17a09b4c6a0244c0a5a63244e3a81def",
    "title": "Hackathon das Manas",
    "organizer": "MulheresGO",
    "eventType": "Hackathon",
    "location": "Online",
    "cost": "Gratuito",
    "themes": [
      "UX",
      "Produto",
      "Tecnologia",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://linktr.ee/hackathondasmanas",
    "addedAt": "2021-03-15T18:26:00Z",
    "imageUrl": "/guia/eventos/17a09b4c6a0244c0a5a63244e3a81def.png"
  },
  {
    "id": "21b8cbb0d904801189d4d2843aa3eb10",
    "title": "Link - Festival Digital de Acessibilidade",
    "organizer": "Hand Talk",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Gratuito",
    "themes": [
      "Acessibilidade",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://linkfestival.me/",
    "addedAt": "2025-06-23T17:46:06Z",
    "imageUrl": "/guia/eventos/21b8cbb0d904801189d4d2843aa3eb10.png"
  },
  {
    "id": "5c7f60289efc43f5aa6d5dd4211bccf8",
    "title": "Observe",
    "organizer": "Experiência Observe",
    "eventType": "Conferência",
    "location": "Online",
    "cost": "Pago",
    "themes": [
      "Research",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.observeux.com.br/",
    "addedAt": "2021-10-01T02:03:00Z",
    "imageUrl": "/guia/eventos/5c7f60289efc43f5aa6d5dd4211bccf8.png"
  },
  {
    "id": "3b28cbb0d90480309523c0d91ba474ba",
    "title": "PM3 Summit",
    "organizer": "PM3",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "Produto",
      "Discovery",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://pm3summit.com.br/",
    "addedAt": "2026-08-04T18:59:29Z",
    "imageUrl": "/guia/eventos/3b28cbb0d90480309523c0d91ba474ba.png"
  },
  {
    "id": "1848cbb0d9048004a4a7d1428ca498b0",
    "title": "Product Camp",
    "organizer": "PM3",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "Produto",
      "Inovação",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.productcamp.com.br/",
    "addedAt": "2025-01-23T14:49:18Z",
    "imageUrl": "/guia/eventos/1848cbb0d9048004a4a7d1428ca498b0.png"
  },
  {
    "id": "1848cbb0d90480688645f0ab647eaca3",
    "title": "Startup Summit",
    "organizer": "Sebrae",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "Produto",
      "Inovação",
      "Tecnologia",
      "Empreendedorismo"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.startupsummit.com.br/",
    "addedAt": "2025-01-23T14:47:33Z",
    "imageUrl": "/guia/eventos/1848cbb0d90480688645f0ab647eaca3.png"
  },
  {
    "id": "1848cbb0d904809abf04e01cb5e3edfe",
    "title": "TDC Summit",
    "organizer": "Globalcode",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "UX",
      "Produto",
      "Tecnologia",
      "Inovação"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://thedevconf.com/",
    "addedAt": "2025-01-23T14:40:42Z",
    "imageUrl": "/guia/eventos/1848cbb0d904809abf04e01cb5e3edfe.png"
  },
  {
    "id": "3b28cbb0d9048081b5a0e28c52d45a9c",
    "title": "Techstars Startup Weekend",
    "organizer": "Techstars",
    "eventType": "Hackathon",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "Tecnologia",
      "Produto",
      "UX",
      "Empreendedorismo"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "",
    "addedAt": "2026-08-04T18:36:40Z",
    "imageUrl": "/guia/eventos/3b28cbb0d9048081b5a0e28c52d45a9c.png"
  },
  {
    "id": "d5304c9a0bb44509a94df65f56684407",
    "title": "UXConf BR",
    "organizer": "UXConf BR",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.uxconf.com.br/",
    "addedAt": "2020-08-02T04:55:00Z",
    "imageUrl": "/guia/eventos/d5304c9a0bb44509a94df65f56684407.png"
  },
  {
    "id": "1848cbb0d9048002b672cccfe159c293",
    "title": "VagasUX",
    "organizer": "VagasUX",
    "eventType": "Meetup",
    "location": "Presencial",
    "cost": "Gratuito",
    "themes": [
      "UI",
      "UX",
      "Carreira",
      "Transição"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://avely.me/vagasux",
    "addedAt": "2025-01-23T14:35:46Z",
    "imageUrl": "/guia/eventos/1848cbb0d9048002b672cccfe159c293.png"
  },
  {
    "id": "1848cbb0d90480ada00bd0348c691278",
    "title": "VTEX DAY",
    "organizer": "VTEX DAY",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "Tecnologia",
      "Produto",
      "Sustentabilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://vtexday.com/",
    "addedAt": "2025-01-23T14:42:29Z",
    "imageUrl": "/guia/eventos/1848cbb0d90480ada00bd0348c691278.png"
  },
  {
    "id": "1848cbb0d904800aa868de75d5040908",
    "title": "Web Summit Rio",
    "organizer": "Web Summit",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Pago",
    "themes": [
      "Tecnologia",
      "Diversidade",
      "Acessibilidade",
      "Carreira",
      "Inovação",
      "Liderança"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://rio.websummit.com/",
    "addedAt": "2025-01-23T14:24:33Z",
    "imageUrl": "/guia/eventos/1848cbb0d904800aa868de75d5040908.png"
  },
  {
    "id": "1848cbb0d90480108f41ee73a75fea08",
    "title": "World IA Day",
    "organizer": "World IA Day",
    "eventType": "Conferência",
    "location": "Presencial",
    "cost": "Gratuito",
    "themes": [
      "Tecnologia",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.worldiaday.org/",
    "addedAt": "2025-01-23T14:37:44Z",
    "imageUrl": "/guia/eventos/1848cbb0d90480108f41ee73a75fea08.png"
  },
  {
    "id": "b1104ba0f69b47c49ae8133cbd26d0f2",
    "title": "World Usability Day",
    "organizer": "WUD",
    "eventType": "Conferência",
    "location": "Online",
    "cost": "Gratuito",
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.worldusabilityday.org/",
    "addedAt": "2021-02-23T15:55:00Z",
    "imageUrl": "/guia/eventos/b1104ba0f69b47c49ae8133cbd26d0f2.png"
  }
]

/** Tags de Tema únicas, ordenadas (Notion multi_select). */
export function getGuiaEventoThemeTags(): string[] {
  const tags = new Set<string>()
  for (const evento of guiaEventos) {
    for (const tag of evento.themes) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaEventosByTheme(
  eventos: GuiaEvento[],
  themeTag: string | null,
): GuiaEvento[] {
  if (!themeTag) return eventos
  return eventos.filter((evento) => evento.themes.includes(themeTag))
}

/** Separa o evento em destaque das demais, mantendo a ordem original do restante. */
export function splitGuiaFeaturedEvento(eventos: GuiaEvento[]): {
  featured: GuiaEvento | null
  rest: GuiaEvento[]
} {
  const featured =
    eventos.find((evento) => evento.id === GUIA_FEATURED_EVENTO_ID) ?? null
  const rest = eventos.filter((evento) => evento.id !== GUIA_FEATURED_EVENTO_ID)
  return { featured, rest }
}
