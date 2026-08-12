import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'
const d='Referência sobre diversidade, inclusão e equidade em design e tecnologia.'
export const guiaTemaDiversidadeLinks: GuiaTemaLinkSection[]=[
{title:'Reflexões e contexto',links:[
['UX é pra todo mundo. Será?','https://medium.com/@orenatopaixao/ux-%C3%A9-pra-todo-mundo-ser%C3%A1-ed4bb62deae9'],['Indo além da hashtag','https://brasil.uxdesign.cc/indo-al%C3%A9m-da-hashtag-a-real-import%C3%A2ncia-da-diversidade-na-tecnologia-6c358cd5e9fd'],['Diversidade em times de produto','https://brasil.uxdesign.cc/diversidade-em-times-de-produto-23ae95257d62'],['UX Design e diversidade','https://brasil.uxdesign.cc/ux-design-como-ferramenta-na-producao-de-diversidade-fe0fba9bebe1'],['Designers negros no mercado brasileiro','https://youtu.be/rQHJhaP2L00'],['Linguagem neutra para devs','https://github.com/woliveiras/linguagem-neutra-dev']
].map(([title,url])=>({title,url,description:d}))},
{title:'Iniciativas brasileiras',links:[
['Orientando','https://orientando.org/'],['Brazilians Who Design','https://brazilianswho.design/'],['Orgulho Tech','https://www.orgulhotech.com.br/'],['Atados LGBT+','https://www.atados.com.br/ong/ong-lgbt'],['Todas as Letras','https://www.todasasletras.org/'],['Mais Diversidade','https://maisdiversidade.com.br/'],['Nohs Somos','https://www.nohssomos.com.br/'],['Diversitera','https://diversitera.com/'],['Preta UX','http://www.pretux.com.br/'],['Trampo Preto','https://docs.google.com/spreadsheets/d/1R5VOdDKOZfvClbe-TcWTH0oSe5hm23dl05h3xUoBAlg/edit?usp=sharing']
].map(([title,url])=>({title,url,description:d}))},
{title:'Iniciativas internacionais',links:[
['Women Who Design','https://womenwho.design/'],['Blacks Who Design','https://blackswho.design/'],['Queer Design Club','https://queerdesign.club/'],['Latinxs Who Design','https://www.latinxswhodesign.com/'],['Humane by Design','https://humanebydesign.com/']
].map(([title,url])=>({title,url,description:d}))},
]
