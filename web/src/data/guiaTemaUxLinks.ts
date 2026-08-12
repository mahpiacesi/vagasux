export type GuiaTemaLink = {
  title: string
  url: string
  description?: string
  previewImageUrl?: string
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
      { title: 'ScreensDesign', description: 'Fluxos e telas de apps para inspiração de produto.', url: 'https://screensdesign.com/' },
      {
        title: 'Page Flows - user flow patterns',
        description: 'Fluxos de usuários reais para estudar padrões de interação.',
        url: 'https://pageflows.com/',
      },
      {
        title: 'Beautiful web app screenshots',
        description: 'Galeria de screenshots de produtos digitais bem resolvidos.',
        url: 'https://webframe.xyz/',
      },
      {
        title: 'App Fuel - The one-stop station for app builders',
        description: 'Referências e recursos para criar produtos digitais.',
        url: 'https://theappfuel.com/',
      },
      {
        title: 'Chamjo | Design Inspiration from live apps, games, and websites',
        description: 'Inspiração de interfaces de apps, games e sites reais.',
        url: 'https://chamjo.design/',
      },
      {
        title: 'Design Pttrns',
        description: 'Padrões de interface para aplicativos mobile.',
        url: 'https://pttrns.com/',
      },
      {
        title: 'Land-book - website design inspiration gallery',
        description: 'Galeria de inspiração para landing pages e sites.',
        url: 'https://land-book.com/',
      },
      { title: 'Discover Scrnshts', description: 'Screenshots curados de produtos e interfaces.', url: 'https://scrnshts.club/' },
      {
        title: 'Interface In Game',
        description: 'Um Mobbin pra jogos.',
        url: 'https://interfaceingame.com/',
      },
      {
        title: 'Curated Website Section Designs',
        description: 'Referências de seções para compor páginas web.',
        url: 'https://www.unsection.com/',
      },
      {
        title: 'Refero — UI/UX Design Inspiration for Your Next Project',
        description: 'Biblioteca de referências de UI e UX para produtos.',
        url: 'https://refero.design/',
      },
    ],
  },
  {
    title: 'Bibliotecas de UI',
    links: [
      {
        title: "Element - The world's most popular Vue UI framework",
        description: 'Biblioteca de componentes para produtos em Vue.',
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
        description: 'Referências de homepages para inspiração visual.',
        url: 'https://designmunk.com/',
      },
      {
        title: '4003 Landing Page Design Inspiration - Lapa Ninja',
        description: 'Coleção de landing pages para explorar padrões visuais.',
        url: 'https://www.lapa.ninja/',
      },
    ],
  },
]
