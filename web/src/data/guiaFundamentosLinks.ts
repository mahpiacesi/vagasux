import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'
const color = 'Ferramenta curada para aplicar cor em produtos digitais.'
export const guiaFundamentosLinks: GuiaTemaLinkSection[] = [
  { title: 'Acessibilidade', links: [
    ['Who Can Use','https://whocanuse.com/'],['Accessible Color Generator','https://learnui.design/tools/accessible-color-generator.html?colors=ff9f2f'],['Viz Palette','http://projects.susielu.com/viz-palette'],['Contrast Grid','http://contrast-grid.eightshapes.com/'],['Colour Contrast Checker','https://colourcontrast.cc/'],['Leonardo','https://leonardocolor.io/#']
  ].map(([title,url])=>({title,url,description:color})) },
  { title: 'Paletas', links: [
    ['Colorffy','https://colorffy.com/'],['Shade Generator','https://www.shadegenerator.com/'],['Radix Colors','https://www.radix-ui.com/colors'],['Muzli Colors','https://colors.muz.li/'],['Color Leap','https://colorleap.app/home'],['Picular','https://picular.co/'],['Material Color Tool','https://material.io/tools/color/#!/'],['Colourco.de','https://colourco.de/'],['Paletton','http://paletton.com/'],['Duotone','https://duotone.shapefactory.co/'],['Color Supply','https://colorsupplyyy.com/app/'],['Flat UI Colors','https://flatuicolors.com/'],['LOL Colors','https://www.webdesignrankings.com/resources/lolcolors/'],['Parametric Color Mixer','https://colormixer.web.app/'],['Adobe Color','https://color.adobe.com/pt/'],['Coolors','https://coolors.co/'],['Scale','https://hihayk.github.io/scale/']
  ].map(([title,url])=>({title,url,description:color})) },
  { title: 'Gradientes', links: [
    ['MSHR','https://www.mshr.app/create/new'],['Mesher','https://csshero.org/mesher/'],['uiGradients','https://uigradients.com/'],['GradPad','http://ourownthing.co.uk/gradpad.html'],['ColorSpace','https://mycolor.space/'],['CSS Gradient','https://cssgradient.io/'],['Grabient','https://www.grabient.com/'],['Mobile Palette Generator','https://mobilepalette.colorion.co/']
  ].map(([title,url])=>({title,url,description:color})) },
]
