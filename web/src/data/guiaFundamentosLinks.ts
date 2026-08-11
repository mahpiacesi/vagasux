import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'
const descriptions: Record<string,string> = {
  'Who Can Use':'Mostra como combinações de cor afetam diferentes deficiências visuais.','Accessible Color Generator':'Gera variações de cor que atendem contraste WCAG.','Viz Palette':'Simula paletas para diferentes formas de visão de cor.','Contrast Grid':'Compare contrastes entre várias combinações de uma vez.','Colour Contrast Checker':'Verifique combinações de cor contra critérios WCAG.','Leonardo':'Crie sistemas de cor acessíveis para UI e dados.',
  'Colorffy':'Gere paletas, gradientes e variações para interfaces.','Shade Generator':'Encontre tons e matizes a partir de uma cor base.','Radix Colors':'Sistema open source de cores acessíveis para produtos.','Muzli Colors':'Descubra e teste paletas para seus projetos.','Color Leap':'Explore paletas históricas para inspiração.','Picular':'Encontre cores usando a busca de imagens do Google.','Material Color Tool':'Crie paletas e avalie combinações no Material Design.','Colourco.de':'Combine cores de forma visual e intuitiva.','Paletton':'Monte esquemas de cor com a roda cromática.','Duotone':'Crie imagens duotone para projetos digitais.','Color Supply':'Selecione estilos visuais e seus códigos de cor.','Flat UI Colors':'Paletas prontas para copiar e colar.','LOL Colors':'Inspiração de paletas escolhidas pela comunidade.','Parametric Color Mixer':'Misture cores com controles de precisão.','Adobe Color':'Crie e explore temas de cores da Adobe.','Coolors':'Gere e navegue combinações de cores rapidamente.','Scale':'Gere escalas de cor para sistemas de interface.',
  'MSHR':'Crie gradientes para aplicar em interfaces.','Mesher':'Gere mesh gradients com CSS.','uiGradients':'Coleção de gradientes prontos para usar.','ColorSpace':'Gere paletas e gradientes a partir de cores.','CSS Gradient':'Ferramenta visual para criar gradientes CSS.','Grabient':'Interface simples para gerar gradientes web.','Mobile Palette Generator':'Crie paletas voltadas para interfaces mobile.',
}
export const guiaFundamentosLinks: GuiaTemaLinkSection[] = [
  { title: 'Acessibilidade', links: [
    ['Who Can Use','https://whocanuse.com/'],['Accessible Color Generator','https://learnui.design/tools/accessible-color-generator.html?colors=ff9f2f'],['Viz Palette','http://projects.susielu.com/viz-palette'],['Contrast Grid','http://contrast-grid.eightshapes.com/'],['Colour Contrast Checker','https://colourcontrast.cc/'],['Leonardo','https://leonardocolor.io/#']
  ].map(([title,url])=>({title,url,description:descriptions[title]})) },
  { title: 'Paletas', links: [
    ['Colorffy','https://colorffy.com/'],['Shade Generator','https://www.shadegenerator.com/'],['Radix Colors','https://www.radix-ui.com/colors'],['Muzli Colors','https://colors.muz.li/'],['Color Leap','https://colorleap.app/home'],['Picular','https://picular.co/'],['Material Color Tool','https://material.io/tools/color/#!/'],['Colourco.de','https://colourco.de/'],['Paletton','http://paletton.com/'],['Duotone','https://duotone.shapefactory.co/'],['Color Supply','https://colorsupplyyy.com/app/'],['Flat UI Colors','https://flatuicolors.com/'],['LOL Colors','https://www.webdesignrankings.com/resources/lolcolors/'],['Parametric Color Mixer','https://colormixer.web.app/'],['Adobe Color','https://color.adobe.com/pt/'],['Coolors','https://coolors.co/'],['Scale','https://hihayk.github.io/scale/']
  ].map(([title,url])=>({title,url,description:descriptions[title]})) },
  { title: 'Gradientes', links: [
    ['MSHR','https://www.mshr.app/create/new'],['Mesher','https://csshero.org/mesher/'],['uiGradients','https://uigradients.com/'],['ColorSpace','https://mycolor.space/'],['CSS Gradient','https://cssgradient.io/'],['Grabient','https://www.grabient.com/'],['Mobile Palette Generator','https://mobilepalette.colorion.co/']
  ].map(([title,url])=>({title,url,description:descriptions[title]})) },
]

export const guiaFundamentosGridLinks = [
  { title: 'Sketchsheets', description: 'Templates imprimíveis para wireframes de dispositivos.', url: 'https://sketchsheets.com/' },
  { title: 'GRIDPRINT.IN', description: 'Grids de linha de base para prototipação em papel.', url: 'https://gridprint.in/' },
  { title: 'Sneakpeekit Sketch Sheets', description: 'Folhas de sketch para explorar ideias de interface.', url: 'https://sneakpeekit.com/' },
  { title: 'uiprint', description: 'Mockups, wireframes e sketchpads imprimíveis.', url: 'https://uiprint.co/' },
]
export const guiaFundamentosTypographyLinks = [
  { title:'Typewolf', description:'Fontes em uso em sites reais e combinações recomendadas.', url:'https://www.typewolf.com/' },
  { title:'Fontjoy', description:'Gere combinações de fontes usando redes neurais.', url:'https://fontjoy.com/' },
  { title:'Google Fonts', description:'Repositório aberto de fontes para a web.', url:'https://fonts.google.com/' },
  { title:'Adobe Fonts', description:'Biblioteca de fontes licenciadas da Adobe.', url:'https://fonts.adobe.com/' },
  { title:'Font Squirrel', description:'Repositório de fontes gratuitas.', url:'https://www.fontsquirrel.com/' },
  { title:'Pro Web Type', description:'Guia prático de tipografia profissional para a web.', url:'https://prowebtype.com/' },
  { title:'Kern Type', description:'Jogo para praticar kerning.', url:'https://type.method.ac/' },
  { title:'Just My Type', description:'Diretório dedicado à tipografia criado por Daniel Eden.', url:'https://justmytype.co/' },
  { title:'Fonts In Use', description:'Arquivo pesquisável de design tipográfico.', url:'https://fontsinuse.com/' },
  { title:'UNCUT.wtf', description:'Catálogo de tipografias de designers independentes.', url:'https://uncut.wtf/' },
  { title:'Curso de Tipografia', description:'Playlist de tipografia por Willian Matiola.', url:'https://www.youtube.com/playlist?list=PLKbAmHQYDSaNodtj4fMHb3BJBOag7JC81' },
]
export const guiaFundamentosIconLinks = [
  ['Noun Project','https://thenounproject.com/','Coleção diversa de ícones em SVG e PNG.'],['Streamline','https://www.streamlineicons.com/','Biblioteca ampla de ícones em diferentes pesos.'],['Iconic','https://iconic.app/','Ícones pixel-perfect gratuitos atualizados semanalmente.'],['Material Icons','https://fonts.google.com/icons','Ícones oficiais do Material Design.'],['Font Awesome','https://fontawesome.com/','Uma das bibliotecas de ícones mais populares.'],['Heroicons','https://heroicons.com/','Ícones SVG criados pela equipe do Tailwind CSS.'],['Orion','https://orioniconlibrary.com/','Ferramenta para buscar, editar e baixar ícones.'],['IcoMoon','https://icomoon.io/','Crie fontes de ícones e sprites SVG personalizados.'],['Line Awesome','https://icons8.com/line-awesome','Ícones de linha para usar no código.'],['Nucleo','https://nucleoapp.com/','Biblioteca e gerenciador de ícones vetoriais.'],['Flaticon','https://www.flaticon.com/','Grande base de ícones vetoriais gratuitos.'],['Fontello','https://fontello.com/','Gere fontes personalizadas a partir de ícones.'],['Iconset','https://iconset.io/','Organize bibliotecas de ícones em um só lugar.'],
].map(([title,url,description])=>({title,url,description}))
