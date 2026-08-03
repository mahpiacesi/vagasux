/** Snapshot from Notion database "Conteúdos em Design" (Tipo = Newsletter). */
/** Regenerar: node tools/scripts/export-guia-newsletters.mjs */

export type GuiaNewsletter = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
  /** Capa baixada do Notion (opcional). */
  imageUrl?: string
  /** Data de criação no Notion — ordenação do preview. */
  addedAt?: string
}

/** Newsletter oficial da VagasUX — sempre primeiro na listagem. */
export const GUIA_FEATURED_NEWSLETTER_ID = 'aa4cb080c5774edda987a7ac45d0a2a3'

export const guiaNewsletters: GuiaNewsletter[] = [
  {
    "id": "1df06144d72a46c2841486c396c8040c",
    "title": "31 Days of UI/UX Design Challenge",
    "authors": [
      "Ideate Labs"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.ideatelabs.co/31-days-of-ui-ux-newsletter",
    "addedAt": "2021-10-01T02:16:00Z",
    "imageUrl": "/guia/newsletters/1df06144d72a46c2841486c396c8040c.png"
  },
  {
    "id": "60e58174bd424a8fa3807358cdac2841",
    "title": "Awari Insights",
    "authors": [
      "Awari"
    ],
    "context": [
      "Produto",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://awariprodutoux.substack.com/about",
    "addedAt": "2021-05-31T15:42:00Z",
    "imageUrl": "/guia/newsletters/60e58174bd424a8fa3807358cdac2841.png"
  },
  {
    "id": "2f942b966cdd4c319d15967f72a9841c",
    "title": "Bits to Brands",
    "authors": [
      "Beatriz Guarezi"
    ],
    "context": [
      "Produto",
      "Tecnologia",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.bitstobrands.com/",
    "addedAt": "2020-08-02T19:30:00Z",
    "imageUrl": "/guia/newsletters/2f942b966cdd4c319d15967f72a9841c.png"
  },
  {
    "id": "11a8cbb0d90480e8b2bffca3246d9feb",
    "title": "Brilliant Basics",
    "authors": [
      "Arthur Castro",
      "Aíquis Rodrigues Gomes"
    ],
    "context": [
      "Produto",
      "Tecnologia",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://arthurcastro.substack.com/",
    "addedAt": "2024-10-09T14:46:27Z",
    "imageUrl": "/guia/newsletters/11a8cbb0d90480e8b2bffca3246d9feb.png"
  },
  {
    "id": "bf39fc721adf4787b35eaf1896692824",
    "title": "Coffee Break By Save Me Teacher",
    "authors": [
      "Carla D'Elia"
    ],
    "context": [
      "Exterior",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://savemeteacher.substack.com/",
    "addedAt": "2024-07-03T22:27:00Z",
    "imageUrl": "/guia/newsletters/bf39fc721adf4787b35eaf1896692824.png"
  },
  {
    "id": "0280600fb4e44a6dbb5714a38e4d60d6",
    "title": "Daily UI",
    "authors": [
      "Jonathan David Post"
    ],
    "context": [
      "UI",
      "Desafio"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.dailyui.co/",
    "addedAt": "2020-08-03T22:35:00Z",
    "imageUrl": "/guia/newsletters/0280600fb4e44a6dbb5714a38e4d60d6.png"
  },
  {
    "id": "1a68cbb0d90480568620d07e83829e3c",
    "title": "design.inbox",
    "authors": [
      "Apparicio Junior"
    ],
    "context": [
      "UX",
      "Carreira",
      "Negócio",
      "Exterior"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://appariciojr.substack.com/",
    "addedAt": "2025-02-26T21:11:13Z",
    "imageUrl": "/guia/newsletters/1a68cbb0d90480568620d07e83829e3c.png"
  },
  {
    "id": "22f34007b71a4b47b002d89459a3c460",
    "title": "Designmodo",
    "authors": [
      "Designmodo"
    ],
    "context": [
      "UI",
      "UX",
      "Tecnologia",
      "Ilustração"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://designmodo.com/subscribe/",
    "addedAt": "2020-08-02T20:01:00Z",
    "imageUrl": "/guia/newsletters/22f34007b71a4b47b002d89459a3c460.gif"
  },
  {
    "id": "6afd910e33164971a6855efa747e769a",
    "title": "Emanual criativo",
    "authors": [
      "Emanuel Bagerakis"
    ],
    "context": [
      "Criatividade",
      "Comunicação",
      "Desafio"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://emanualcriativo.substack.com/",
    "addedAt": "2024-07-03T22:19:59Z",
    "imageUrl": "/guia/newsletters/6afd910e33164971a6855efa747e769a.png"
  },
  {
    "id": "6c19156b32574168a44383a15f4b4101",
    "title": "Hack Design",
    "authors": [
      "HackDesign"
    ],
    "context": [
      "UI",
      "UX",
      "Desafio"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://hackdesign.org/",
    "addedAt": "2020-10-05T03:55:00Z",
    "imageUrl": "/guia/newsletters/6c19156b32574168a44383a15f4b4101.png"
  },
  {
    "id": "76af7146218e4d6291056ecee9e87bc6",
    "title": "Lista De Luna",
    "authors": [
      "Bernard De Luna"
    ],
    "context": [
      "Produto",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.bernarddeluna.com.br/newsletter",
    "addedAt": "2020-08-04T23:11:00Z",
    "imageUrl": "/guia/newsletters/76af7146218e4d6291056ecee9e87bc6.png"
  },
  {
    "id": "8641aee0d0604a5bbf3fe9ba3a6527fa",
    "title": "MANDA REFS 🧠⚡",
    "authors": [
      "Ana Carvalho"
    ],
    "context": [
      "Marketing",
      "Criatividade",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://mandarefs.substack.com/",
    "addedAt": "2024-07-03T22:24:10Z",
    "imageUrl": "/guia/newsletters/8641aee0d0604a5bbf3fe9ba3a6527fa.png"
  },
  {
    "id": "b8b52ba6cbc946518e21390d5e67b78e",
    "title": "Nina News",
    "authors": [
      "Nina Talks"
    ],
    "context": [
      "UI",
      "UX",
      "Produto",
      "Mulheres",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://ninatalks.substack.com/",
    "addedAt": "2024-03-13T12:45:07Z",
    "imageUrl": "/guia/newsletters/b8b52ba6cbc946518e21390d5e67b78e.png"
  },
  {
    "id": "9f8738f3acec4eda95fb88125314dd7c",
    "title": "Olhar Criativo",
    "authors": [
      "Franco Antonio"
    ],
    "context": [
      "Criatividade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://olharcriativo.substack.com/",
    "addedAt": "2024-07-03T22:18:31Z",
    "imageUrl": "/guia/newsletters/9f8738f3acec4eda95fb88125314dd7c.png"
  },
  {
    "id": "1f2233e63f1343df91c6e33fa1264a3e",
    "title": "Pack Lead",
    "authors": [
      "Kakau Fonseca"
    ],
    "context": [
      "Liderança",
      "Produto",
      "Design",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.packlead.com.br/",
    "addedAt": "2024-07-03T22:30:16Z",
    "imageUrl": "/guia/newsletters/1f2233e63f1343df91c6e33fa1264a3e.png"
  },
  {
    "id": "4d5744eb94414b76ab762eca00fd0b7c",
    "title": "Produtos Para Humanos",
    "authors": [
      "Produtos Para Humanos"
    ],
    "context": [
      "Produto",
      "UX",
      "Negócio",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://produtosparahumanos.substack.com/",
    "addedAt": "2024-07-03T21:25:04Z",
    "imageUrl": "/guia/newsletters/4d5744eb94414b76ab762eca00fd0b7c.png"
  },
  {
    "id": "827617993b1c441792e90247b7094f1f",
    "title": "Really Good Emails",
    "authors": [
      "RGE Team"
    ],
    "context": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://reallygoodemails.com/",
    "addedAt": "2020-08-02T20:08:00Z",
    "imageUrl": "/guia/newsletters/827617993b1c441792e90247b7094f1f.png"
  },
  {
    "id": "caf3aaedf6724e29a8be4314bf01d687",
    "title": "ReallyGoodUX",
    "authors": [
      "APPCUES"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.reallygoodux.io/",
    "addedAt": "2020-08-03T01:25:00Z",
    "imageUrl": "/guia/newsletters/caf3aaedf6724e29a8be4314bf01d687.png"
  },
  {
    "id": "11a8cbb0d90480de8fc9f2074fc93942",
    "title": "SEESAW",
    "authors": [
      "SEESAW"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.seesaw.website/",
    "addedAt": "2024-10-09T14:06:00Z",
    "imageUrl": "/guia/newsletters/11a8cbb0d90480de8fc9f2074fc93942.png"
  },
  {
    "id": "f07ffc48fbdf499c96c4e3fd1180bed5",
    "title": "Sidebar Newsletter",
    "authors": [
      "Sacha Greif"
    ],
    "context": [
      "UI",
      "Tecnologia"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://sidebar.io/",
    "addedAt": "2020-08-02T19:45:00Z",
    "imageUrl": "/guia/newsletters/f07ffc48fbdf499c96c4e3fd1180bed5.png"
  },
  {
    "id": "9653f73d02f64fc591d1b0cf956d4273",
    "title": "Stoa",
    "authors": [
      "Willian Matiola"
    ],
    "context": [
      "UI",
      "Design",
      "Figma",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://willianmatiola.substack.com/",
    "addedAt": "2024-07-03T22:35:10Z",
    "imageUrl": "/guia/newsletters/9653f73d02f64fc591d1b0cf956d4273.png"
  },
  {
    "id": "245c13622abc4aff9eba77c5be2e9f38",
    "title": "The Brief",
    "authors": [
      "NZN"
    ],
    "context": [
      "Produto",
      "Tecnologia",
      "UX",
      "Negócio"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://embeds.beehiiv.com/4b1877b0-3a2a-4f0b-a256-33cc66d5f96e",
    "addedAt": "2020-08-02T19:22:00Z",
    "imageUrl": "/guia/newsletters/245c13622abc4aff9eba77c5be2e9f38.png"
  },
  {
    "id": "dfc6023216304e789724e063a7bd656d",
    "title": "the news",
    "authors": [
      "Grupo waffle"
    ],
    "context": [
      "Negócio",
      "Tecnologia",
      "Design",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://app.thenewscc.com.br/subscribe?ref=l45vo3m7pb",
    "addedAt": "2024-03-13T12:35:54Z",
    "imageUrl": "/guia/newsletters/dfc6023216304e789724e063a7bd656d.png"
  },
  {
    "id": "b3be919aab4f44d7ae6e341e1f3c39b8",
    "title": "The Smashing email Newsletter",
    "authors": [
      "Smashing Magazine"
    ],
    "context": [
      "UI",
      "UX",
      "Research",
      "Tecnologia",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.smashingmagazine.com/the-smashing-newsletter/",
    "addedAt": "2020-08-02T19:58:00Z",
    "imageUrl": "/guia/newsletters/b3be919aab4f44d7ae6e341e1f3c39b8.png"
  },
  {
    "id": "2dfd107d45654434ab2bbb40cb296a27",
    "title": "The UX Collective Newsletter",
    "authors": [
      "UX Collective"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://newsletter.uxdesign.cc/",
    "addedAt": "2020-08-02T19:37:00Z",
    "imageUrl": "/guia/newsletters/2dfd107d45654434ab2bbb40cb296a27.png"
  },
  {
    "id": "3fe79d8b1dc44ddcb398dd5cefb8f744",
    "title": "this week in design™",
    "authors": [
      "Aleks"
    ],
    "context": [
      "UX",
      "Produto",
      "Tecnologia",
      "Design"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://twid.fyi/",
    "addedAt": "2024-07-03T22:38:38Z",
    "imageUrl": "/guia/newsletters/3fe79d8b1dc44ddcb398dd5cefb8f744.png"
  },
  {
    "id": "05e62537e52d4afb8d9aa4198cf2bcd2",
    "title": "Tira do papel",
    "authors": [
      "Tiago @tiradopapel"
    ],
    "context": [
      "Criatividade",
      "Comunicação"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://tiradopapel.substack.com/",
    "addedAt": "2024-07-03T22:12:15Z",
    "imageUrl": "/guia/newsletters/05e62537e52d4afb8d9aa4198cf2bcd2.png"
  },
  {
    "id": "1a18cbb0d90480af8732fc261e9c3e78",
    "title": "Trend Report",
    "authors": [
      "beehiiv"
    ],
    "context": [
      "Comunicação",
      "Criatividade",
      "Marketing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://trendreport.com.br/",
    "addedAt": "2025-02-21T12:47:13Z",
    "imageUrl": "/guia/newsletters/1a18cbb0d90480af8732fc261e9c3e78.png"
  },
  {
    "id": "0f6965b787464226887125a9fc6abfa9",
    "title": "UX & Carreira no Exterior @ayama.design",
    "authors": [
      "Ayama Design"
    ],
    "context": [
      "UX",
      "Carreira",
      "Exterior"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://ayamadesign.substack.com/",
    "addedAt": "2024-07-03T21:28:26Z",
    "imageUrl": "/guia/newsletters/0f6965b787464226887125a9fc6abfa9.png"
  },
  {
    "id": "e2d4e3f2ca7b496baf973ea4358a0ce3",
    "title": "UX Collective Brasil",
    "authors": [
      "UX Collective"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://brasiluxdesign.substack.com/",
    "addedAt": "2021-05-31T15:48:00Z",
    "imageUrl": "/guia/newsletters/e2d4e3f2ca7b496baf973ea4358a0ce3.png"
  },
  {
    "id": "3d0b8296ecc34cb8a2024b47e5fcd453",
    "title": "UX Database",
    "authors": [
      "Millo"
    ],
    "context": [
      "UI",
      "UX",
      "Research",
      "Produto",
      "Design",
      "Design Thinking"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.uxdatabase.io/newsletter",
    "addedAt": "2022-03-07T03:54:00Z",
    "imageUrl": "/guia/newsletters/3d0b8296ecc34cb8a2024b47e5fcd453.png"
  },
  {
    "id": "1618cbb0d90480fdb31fd63a4c98e16b",
    "title": "UX Potion",
    "authors": [
      "Yago Henrique"
    ],
    "context": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.linkedin.com/newsletters/ux-potion-%25E2%259A%2597%25EF%25B8%258F-7233530230617866242/",
    "addedAt": "2024-12-19T15:37:57Z",
    "imageUrl": "/guia/newsletters/1618cbb0d90480fdb31fd63a4c98e16b.png"
  },
  {
    "id": "ce02d08ddab14df091554417a246af14",
    "title": "UX Weekly Newsletter",
    "authors": [
      "Interact Design Foundation"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.interaction-design.org/newsletter",
    "addedAt": "2020-08-02T19:41:00Z",
    "imageUrl": "/guia/newsletters/ce02d08ddab14df091554417a246af14.png"
  },
  {
    "id": "aa4cb080c5774edda987a7ac45d0a2a3",
    "title": "VagasUX News",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UI",
      "UX",
      "Carreira",
      "Transição"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://vagasux.substack.com/",
    "addedAt": "2021-10-01T02:18:00Z",
    "imageUrl": "/guia/newsletters/aa4cb080c5774edda987a7ac45d0a2a3.png"
  },
  {
    "id": "360af52f722b49eab550f936877293be",
    "title": "Web Design Weekly",
    "authors": [
      "Jake Bresnehan"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://web-design-weekly.com/",
    "addedAt": "2020-08-02T19:43:00Z",
    "imageUrl": "/guia/newsletters/360af52f722b49eab550f936877293be.png"
  },
  {
    "id": "7c433476aae64578a0610a44d9a3584d",
    "title": "Weekly Product Design Exercise",
    "authors": [
      "Artiom Dashinsky"
    ],
    "context": [
      "UI",
      "UX",
      "Desafio"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://productdesigninterview.com/weekly-ux-product-design-exercise",
    "addedAt": "2020-10-05T03:24:00Z",
    "imageUrl": "/guia/newsletters/7c433476aae64578a0610a44d9a3584d.png"
  }
]

/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaNewsletterContextTags(): string[] {
  const tags = new Set<string>()
  for (const newsletter of guiaNewsletters) {
    for (const tag of newsletter.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaNewslettersByContext(
  newsletters: GuiaNewsletter[],
  contextTag: string | null,
): GuiaNewsletter[] {
  if (!contextTag) return newsletters
  return newsletters.filter((newsletter) => newsletter.context.includes(contextTag))
}

/** Separa a newsletter em destaque das demais, mantendo a ordem original do restante. */
export function splitGuiaFeaturedNewsletter(newsletters: GuiaNewsletter[]): {
  featured: GuiaNewsletter | null
  rest: GuiaNewsletter[]
} {
  const featured =
    newsletters.find((newsletter) => newsletter.id === GUIA_FEATURED_NEWSLETTER_ID) ??
    null
  const rest = newsletters.filter(
    (newsletter) => newsletter.id !== GUIA_FEATURED_NEWSLETTER_ID,
  )
  return { featured, rest }
}
