import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'
const descriptions: Record<string, string> = {
  'Design Systems 101': 'Introdução da Nielsen Norman Group aos fundamentos de um sistema.',
  'Design Systems 101 da Figma': 'Visão geral da Figma sobre tipos e boas práticas.',
  'Design System é um produto': 'Por que tratar o sistema como produto contínuo.',
  'Building a Visual Language': 'Bastidores do sistema visual criado pela Airbnb.',
  'Design Systems inclusivos': 'Princípios para construir sistemas mais acessíveis.',
  'Design Ops': 'Reflexão sobre a operação que sustenta Design em escala.',
  'Documenting Design Operations': 'Repositório de práticas e documentação de Design Ops.',
  'Design Principles': 'Coleção de princípios usados por produtos digitais.',
  'Design System Checklist': 'Checklist aberto para planejar e evoluir sistemas.',
  'UI Guideline': 'Guia para padronizar nomes e componentes de interface.',
  zeroheight: 'Plataforma para documentar style guides vivos.',
  Supernova: 'Centraliza dados de design e engenharia em um só lugar.',
  Storybook: 'Ambiente para desenvolver e testar componentes isoladamente.',
  Specify: 'Ferramenta para gerenciar tokens e ativos de Design System.',
  'Duet Design System': 'Recursos e ferramentas do sistema Duet.',
  'DesignSystems.com': 'Artigos e referências sobre construção de sistemas.',
  'Design Systems Repo': 'Coleção atualizada de exemplos e recursos.',
  'Design Systems Brasileiros': 'Lista de sistemas de design criados no Brasil.',
  'Hey Design Systems': 'Curadoria de conteúdos dedicados a Design Systems.',
  Carbon: 'Sistema open source da IBM para produtos e experiências.',
  'Shopify Polaris': 'Sistema de design da Shopify para seus produtos.',
  'Atlassian Design': 'Sistema e diretrizes de design da Atlassian.',
  Spectrum: 'Sistema de design aberto da Adobe.',
  'Conta Azul Design': 'Referências do sistema de design da Conta Azul.',
  'Bold Design System': 'Sistema de componentes com foco em acessibilidade.',
}
export const guiaTemaDesignSystemLinks: GuiaTemaLinkSection[] = [
  { title: 'Fundamentos', links: [
    ['Design Systems 101','https://www.nngroup.com/articles/design-systems-101/'],['Design Systems 101 da Figma','https://www.figma.com/blog/design-systems-101-what-is-a-design-system/'],['Design System é um produto','https://medium.com/meiuca/2-seu-design-system-%C3%A9-um-produto-1018e81be045'],['Building a Visual Language','https://medium.com/airbnb-design/building-a-visual-language-behind-the-scenes-of-our-airbnb-design-system-224748775e4e'],['Design Systems inclusivos','https://medium.com/quintoandar-design/construindo-design-systems-inclusivos-11143a16b2fb'],['Design Ops','https://medium.com/meiuca/3-o-que-%C3%A9-design-ops-muita-coisa-5d23bafcc7bd'],['Documenting Design Operations','https://documenting.design/'],['Design Principles','https://principles.design/']
  ].map(([title,url])=>({title,url,description:descriptions[title]})) },
  { title: 'Ferramentas e documentação', links: [
    ['Design System Checklist','https://designsystemchecklist.com/'],['UI Guideline','https://www.uiguideline.com/'],['zeroheight','https://www.zeroheight.com/'],['Supernova','https://www.supernova.io/'],['Storybook','https://storybook.js.org/'],['Specify','https://specifyapp.com/'],['Duet Design System','https://www.duetds.com/designers/']
  ].map(([title,url])=>({title,url,description:descriptions[title]})) },
  { title: 'Repositórios e exemplos', links: [
    ['DesignSystems.com','https://www.designsystems.com/'],['Design Systems Repo','https://designsystemsrepo.com/'],['Design Systems Brasileiros','https://designsystemsbrasileiros.com/'],['Hey Design Systems','https://heydesign.systems/'],['Carbon','https://www.carbondesignsystem.com/'],['Shopify Polaris','https://polaris.shopify.com/'],['Atlassian Design','https://atlassian.design/'],['Spectrum','https://spectrum.adobe.com/'],['Conta Azul Design','https://contaazul.design/'],['Bold Design System','https://bold.bridge.ufsc.br/pt/']
  ].map(([title,url])=>({title,url,description:descriptions[title]})) },
]
