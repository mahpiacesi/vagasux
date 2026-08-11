import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'
const d = 'Referência para planejar, construir ou evoluir Design Systems.'
export const guiaTemaDesignSystemLinks: GuiaTemaLinkSection[] = [
  { title: 'Fundamentos', links: [
    ['Design Systems 101','https://www.nngroup.com/articles/design-systems-101/'],['Design Systems 101 da Figma','https://www.figma.com/blog/design-systems-101-what-is-a-design-system/'],['Design System é um produto','https://medium.com/meiuca/2-seu-design-system-%C3%A9-um-produto-1018e81be045'],['Building a Visual Language','https://medium.com/airbnb-design/building-a-visual-language-behind-the-scenes-of-our-airbnb-design-system-224748775e4e'],['Design Systems inclusivos','https://medium.com/quintoandar-design/construindo-design-systems-inclusivos-11143a16b2fb'],['Design Ops','https://medium.com/meiuca/3-o-que-%C3%A9-design-ops-muita-coisa-5d23bafcc7bd'],['Documenting Design Operations','https://documenting.design/'],['Design Principles','https://principles.design/']
  ].map(([title,url])=>({title,url,description:d})) },
  { title: 'Ferramentas e documentação', links: [
    ['Design System Checklist','https://designsystemchecklist.com/'],['UI Guideline','https://www.uiguideline.com/'],['zeroheight','https://www.zeroheight.com/'],['Supernova','https://www.supernova.io/'],['Storybook','https://storybook.js.org/'],['Specify','https://specifyapp.com/'],['Duet Design System','https://www.duetds.com/designers/']
  ].map(([title,url])=>({title,url,description:d})) },
  { title: 'Repositórios e exemplos', links: [
    ['DesignSystems.com','https://www.designsystems.com/'],['Design Systems Repo','https://designsystemsrepo.com/'],['Design Systems Brasileiros','https://designsystemsbrasileiros.com/'],['Hey Design Systems','https://heydesign.systems/'],['Carbon','https://www.carbondesignsystem.com/'],['Shopify Polaris','https://polaris.shopify.com/'],['Atlassian Design','https://atlassian.design/'],['Spectrum','https://spectrum.adobe.com/'],['Conta Azul Design','https://contaazul.design/'],['Bold Design System','https://bold.bridge.ufsc.br/pt/']
  ].map(([title,url])=>({title,url,description:d})) },
]
