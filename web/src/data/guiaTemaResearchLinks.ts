import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'
export const guiaTemaResearchDescription = 'Métodos, ferramentas e referências para pesquisar pessoas usuárias e tomar decisões com evidências.'
const descriptions: Record<string, string> = {
  'Guide to UXR': 'Coleção com mais de 250 recursos e ferramentas de pesquisa com pessoas usuárias.',
  'UX Library': 'Biblioteca de artigos, livros e referências sobre UX.',
  'Laws of UX': 'Princípios e máximas para projetar interfaces mais fáceis de usar.',
  'ReallyGoodUX': 'Exemplos reais de experiências digitais, onboarding e fluxos.',
  'Little Big Details': 'Inspirações diárias de pequenos detalhes que melhoram produtos.',
  'Jornada do Usuário': 'Entenda como mapear a relação entre pessoas e serviços.',
  'Teste de usabilidade': 'Guia sobre o que observar ao testar uma interface.',
  'Maze': 'Plataforma para testar protótipos e coletar insights.',
  'Useberry': 'Teste protótipos e analise o comportamento de pessoas usuárias.',
  'Userlytics': 'Pesquisa remota com feedback de pessoas usuárias reais.',
  'UXPressia': 'Crie jornadas e personas prontas para apresentar ao time.',
  'Hyper Island Toolbox': 'Métodos colaborativos para pesquisa, ideação e facilitação.',
  'Design Kit': 'Métodos de design centrado em pessoas da IDEO.org.',
  'Pastel': 'Colete comentários visuais diretamente em sites e interfaces.',
  'UserBit': 'Centralize entrevistas, análise e síntese de pesquisas.',
  'AnswerThePublic': 'Descubra dúvidas e temas pesquisados por potenciais clientes.',
  'Open Card Sorter': 'Ferramenta aberta para conduzir card sorting.',
  'Dovetail': 'Armazene, analise e compartilhe aprendizados de pesquisa.',
  'Make My Persona': 'Gerador gratuito de personas para iniciar uma pesquisa.',
  'Talebook': 'Templates colaborativos para entrevistas, fluxos e kick-offs.',
  'Calculadora de tamanho de amostra': 'Estime uma quantidade de respostas relevante para sua pesquisa.',
}
export const guiaTemaResearchLinkSections: GuiaTemaLinkSection[] = [
  { title: 'Referências e fundamentos', links: [
    { title: 'Guide to UXR', url: 'http://guidetouxr.com/' }, { title: 'UX Library', url: 'https://www.uxlibrary.org/' }, { title: 'Laws of UX', url: 'https://lawsofux.com/' }, { title: 'ReallyGoodUX', url: 'https://www.reallygoodux.io/' }, { title: 'Little Big Details', url: 'https://littlebigdetails.com/' }, { title: 'Jornada do Usuário', url: 'https://medium.com/aela/jornada-do-usu%C3%A1rio-o-que-%C3%A9-e-sua-import%C3%A2ncia-em-ux-design-f8ac0cb025ca' }, { title: 'Teste de usabilidade', url: 'https://medium.com/aela/teste-de-usabilidade-o-que-voc%C3%AA-precisa-saber-39a36343d9a6' },
  ] },
  { title: 'Teste e análise', links: [
    { title: 'Maze', url: 'https://maze.design/' }, { title: 'Useberry', url: 'https://www.useberry.com/' }, { title: 'Userlytics', url: 'https://www.userlytics.com/' }, { title: 'UXPressia', url: 'https://uxpressia.com/' }, { title: 'Hyper Island Toolbox', url: 'https://toolbox.hyperisland.com/' }, { title: 'Design Kit', url: 'https://www.designkit.org/methods.html' }, { title: 'Pastel', url: 'https://usepastel.com/' }, { title: 'UserBit', url: 'https://userbitapp.com/' },
  ] },
  { title: 'Métodos e planejamento', links: [
    { title: 'AnswerThePublic', url: 'https://answerthepublic.com/' }, { title: 'Open Card Sorter', url: 'https://brasil.uxdesign.cc/open-card-sorter-em-busca-de-uma-ferramenta-de-card-sorting-para-chamar-de-nossa-b821a41d3fa4' }, { title: 'Dovetail', url: 'https://dovetailapp.com/' }, { title: 'Make My Persona', url: 'https://www.hubspot.com/make-my-persona' }, { title: 'Talebook', url: 'https://talebook.io/' }, { title: 'Calculadora de tamanho de amostra', url: 'https://pt.surveymonkey.com/mp/sample-size-calculator/' },
  ] },
].map((section) => ({ ...section, links: section.links.map((link) => ({ ...link, description: descriptions[link.title] })) }))
