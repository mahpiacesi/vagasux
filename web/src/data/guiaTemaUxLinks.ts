export type GuiaTemaLink = {
  title: string
  url: string
  description?: string
}

export type GuiaTemaLinkSection = {
  title?: string
  description?: string
  links: GuiaTemaLink[]
}

export const guiaTemaUxDescription =
  'Dicas de repositórios e links úteis pra você construir interfaces e experiências consistentes.'

export const guiaTemaUxLinkSections: GuiaTemaLinkSection[] = [
  {
    links: [
      {
        title: "Can't Unsee",
        description:
          'Um jeito infalível pra treinar seu olho pra UI. Se você gabaritar esse joguinho, parabéns :)',
        url: 'https://cantunsee.space/',
      },
    ],
  },
  {
    title: 'Design Patterns',
    description: 'Mapeamento com prints de fluxos pra você conferir e se inspirar.',
    links: [
      {
        title: 'Mobbin - Latest Mobile Design Patterns',
        url: 'https://mobbin.com/',
      },
      { title: 'ScreensDesign', url: 'https://screensdesign.com/' },
      {
        title: 'Page Flows - user flow patterns',
        url: 'https://pageflows.com/',
      },
      {
        title: 'Beautiful web app screenshots',
        url: 'https://webframe.xyz/',
      },
      {
        title: 'App Fuel - The one-stop station for app builders',
        url: 'https://theappfuel.com/',
      },
      {
        title: 'Chamjo | Design Inspiration from live apps, games, and websites',
        url: 'https://chamjo.design/',
      },
      { title: 'Design Pttrns', url: 'https://pttrns.com/' },
      {
        title: 'Land-book - website design inspiration gallery',
        url: 'https://land-book.com/',
      },
      { title: 'Discover Scrnshts', url: 'https://scrnshts.club/' },
      {
        title: 'Interface In Game',
        description: 'Um Mobbin pra jogos.',
        url: 'https://interfaceingame.com/',
      },
      {
        title: 'Curated Website Section Designs',
        url: 'https://www.unsection.com/',
      },
      {
        title: 'Refero — UI/UX Design Inspiration for Your Next Project',
        url: 'https://refero.design/',
      },
    ],
  },
  {
    title: 'Bibliotecas de UI',
    links: [
      {
        title: "Element - The world's most popular Vue UI framework",
        url: 'https://element.eleme.io/#/en-US',
      },
      {
        title: 'Collect UI',
        description: 'Exemplos de componentes e aplicações de design.',
        url: 'https://collectui.com/',
      },
      {
        title: 'Product Hunt - The best new products in tech.',
        description:
          'Acompanhe produtos novos no mercado e veja o que está em alta.',
        url: 'https://www.producthunt.com/',
      },
    ],
  },
  {
    title: 'Landing pages',
    links: [
      {
        title: 'DesignMunk - Best Homepage Design Inspiration',
        url: 'https://designmunk.com/',
      },
      {
        title: '4003 Landing Page Design Inspiration - Lapa Ninja',
        url: 'https://www.lapa.ninja/',
      },
    ],
  },
]
