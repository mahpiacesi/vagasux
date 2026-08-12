import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'
export const guiaTemaMetricsLinks: GuiaTemaLinkSection[] = [
  { title: 'Referências', links: [
    ['Métricas de UX: por onde começar','https://brasil.uxdesign.cc/m%C3%A9tricas-de-ux-por-onde-come%C3%A7ar-54fa7513e5e0','Ponto de partida para medir experiência de usuário.'],['UX e métricas','https://brasil.uxdesign.cc/a-relacao-entre-ux-e-metricas-acompanhamento-pratico-de-metricas-d4c68a1522a4','Como acompanhar métricas com objetivos claros.'],['Guia de métricas de UX','https://brasil.uxdesign.cc/guia-basico-de-estudos-sobre-metricas-de-ux-49cf5fc71ee6','Guia básico para estudar métricas de experiência.'],['Quais métricas de UX usar','https://brasil.uxdesign.cc/quais-sao-as-metricas-de-ux-e-como-usa-las-ea21774778a1','Escolha e use métricas que fazem sentido para o produto.'],['Métricas de CX','https://brasil.uxdesign.cc/m%C3%A9tricas-de-cx-que-todo-ux-deve-conhecer-5a432ded712b','Métricas de experiência do cliente para UX.'],['9 UX Metrics','https://uxpilot.ai/blogs/ux-metrics','Frameworks para medir sucesso, usabilidade e satisfação.']
  ].map(([title,url,description])=>({title,url,description})) },
  { title: 'Ferramentas', links: [
    ['Microsoft Clarity','https://clarity.microsoft.com/','Mapas de calor e gravações de sessão gratuitas.'],['Plausible Analytics','https://plausible.io/','Web analytics open source e focado em privacidade.'],['Hotjar','https://www.hotjar.com/pt-BR/','Mapas de calor, gravações e feedback de pessoas usuárias.']
  ].map(([title,url,description])=>({title,url,description})) },
]

export const guiaMetricVideos = [
  { id:'3ba8cbb0d904803c8aacd832f30b9a48', title:'Como medir o impacto do seu Design', url:'https://youtu.be/gPH5hbdLaSI?si=INtwn_zLxdVRHtXm', authors:['Alvaro Souza'], context:['Métricas'], languages:['🇧🇷'], youtubeVideoId:'gPH5hbdLaSI' },
  { id:'3ba8cbb0d9048043aa3dd6f5e5bb6f20', title:'Métricas UX: Números, Porcentagens e Impacto', url:'https://youtu.be/owbNt7RXJYk?si=yudDXCZ0KBPT4SAM', authors:['Design Circuit'], context:['Métricas'], languages:['🇧🇷'], youtubeVideoId:'owbNt7RXJYk' },
  { id:'3ba8cbb0d904804f9204e16df80eae5f', title:'Métricas de UX com Allan Cardozo', url:'https://youtu.be/1sT4T19OX6Q?si=58-uj5Bo5S3-iWZF', authors:['UXNOW'], context:['Métricas'], languages:['🇧🇷'], youtubeVideoId:'1sT4T19OX6Q' },
  { id:'3ba8cbb0d90480bebe5fcd3432d46600', title:'Métricas para UX: Como Escolher e Usar de Forma Eficiente', url:'https://youtu.be/ieD21pE9JTY?si=j6UgptosulgCRnPx', authors:['DesignTeam'], context:['Métricas'], languages:['🇧🇷'], youtubeVideoId:'ieD21pE9JTY' },
]
