import type { GuiaTemaLinkSection } from '@/data/guiaTemaUxLinks'

export const guiaTemaContentDesignDescription =
  'Referências, ferramentas e repositórios para escrever experiências mais claras e humanas.'
const descriptions: Record<string, string> = {
  'UX Writing: o que é e por onde começar?': 'Introdução à área e ao papel da escrita na experiência.',
  'UX Writing: Muito além das palavras': 'Reflexão sobre o escopo estratégico de UX Writing.',
  'As muitas facetas de UX Writing': 'Panorama das possibilidades de atuação na área.',
  'UX Writing, Copywriting e Web Writing': 'Entenda diferenças de objetivo e aplicação entre as três áreas.',
  'Portfólio de UX Writer': 'Dicas, exemplos e referências para montar um portfólio.',
  'Good Microcopy': 'Referências de microcopy para dar contexto e alinhar expectativas.',
  'Como a colaboração dá vida às palavras': 'Como trabalhar conteúdo em parceria com Design e Produto.',
  'Speak Human': 'Gere microcopy centrada em pessoas para diferentes contextos.',
  'Daily UX Writing': 'Pratique desafios de UX Writing por 15 dias.',
  'Clarice.ai': 'Assistente de IA para revisar e aprimorar textos em português.',
  'Repositório de UX Writing': 'Conteúdos e referências reunidos em um só lugar.',
  'Repositório UX Writing': 'Curadoria atualizada de conteúdos sobre UX Writing.',
  'A mega list of UX writing resources': 'Lista extensa de referências e recursos da área.',
  'Best UX Writing Portfolios': 'Exemplos de portfólios para inspiração profissional.',
  'Material Communication Principles': 'Princípios do Material Design para comunicação em interfaces.',
  'Guias de voz e tom em Português': 'Seleção de referências de voz e tom em português.',
  'Guia de redação da Conta Azul': 'Caso sobre estruturar um guia de escrita em produto.',
  'Voz e tom da Vindi': 'Caso sobre a construção de um guia de comunicação de marca.',
  'Manual de Redação Bench': 'Planilha com manuais e referências de escrita.',
}

export const guiaTemaContentDesignLinkSections: GuiaTemaLinkSection[] = [
  { title: 'UX Writing: por onde começar', links: [
    { title: 'UX Writing: o que é e por onde começar?', url: 'https://brasil.uxdesign.cc/ux-writing-o-que-%C3%A9-e-por-onde-come%C3%A7ar-ace250650187' },
    { title: 'UX Writing: Muito além das palavras', url: 'https://brasil.uxdesign.cc/ux-writing-muito-al%C3%A9m-das-palavras-9669af8ed76e' },
    { title: 'As muitas facetas de UX Writing', url: 'https://medium.com/uxcopy-co/as-muitas-poss%C3%ADveis-facetas-de-ux-writing-4ce32648c6c1' },
    { title: 'UX Writing, Copywriting e Web Writing', url: 'https://medium.com/@camilagaidarji/ux-writing-copywriting-e-web-writing-s%C3%A3o-escritas-completamente-diferentes-4e3d516abc33' },
    { title: 'Good Microcopy', description: 'Referências de microcopy para dar contexto e alinhar expectativas.', url: 'https://goodmicrocopy.com/' },
    { title: 'Portfólio de UX Writer', url: 'https://medium.com/@aleperiardux/como-criar-um-portf%C3%B3lio-de-ux-writer-em-2025-passo-a-passo-com-dicas-exemplos-e-links-%C3%BAteis-862780a291a8' },
  ] },
  { title: 'Ferramentas e prática', links: [
    { title: 'Como a colaboração dá vida às palavras', url: 'https://brasil.uxdesign.cc/como-a-colabora%C3%A7%C3%A3o-d%C3%A1-vida-as-palavras-fbb5c5a59659' },
    { title: 'Speak Human', description: 'Gere microcopy centrada em pessoas para diferentes contextos.', url: 'https://www.speakhuman.today/' },
    { title: 'Daily UX Writing', description: 'Pratique desafios de UX Writing por 15 dias.', url: 'https://dailyuxwriting.com/' },
    { title: 'Clarice.ai', description: 'Assistente de IA para revisar e aprimorar textos em português.', url: 'https://clarice.ai/' },
  ] },
  { title: 'Repositórios e guias', links: [
    { title: 'Repositório de UX Writing', url: 'https://brasil.uxdesign.cc/reposit%C3%B3rio-de-ux-writing-conte%C3%BAdos-e-refer%C3%AAncias-da-%C3%A1rea-em-um-s%C3%B3-lugar-a201dcf22a41' },
    { title: 'Repositório UX Writing', url: 'https://docs.google.com/spreadsheets/d/1Vbz0oagCqE3a2jUu0kblfBEz8mEXSSsQuAJIHnCmNyc/edit?usp=sharing' },
    { title: 'A mega list of UX writing resources', url: 'https://blog.usejournal.com/a-mega-list-of-ux-writing-resources-d9f200d6dfde' },
    { title: 'Best UX Writing Portfolios', url: 'https://uxdesign.cc/best-ux-writing-portfolios-2019-update-7e6a066631af' },
    { title: 'Material Communication Principles', url: 'https://codelabs.developers.google.com/codelabs/material-communication-guidance?utm_source=google-io21&utm_medium=referral&utm_campaign=io21-resources#0' },
    { title: 'Guias de voz e tom em Português', url: 'https://medium.com/@paulodasilva233/guias-de-voz-tom-em-portugues-db47f7624ab1' },
    { title: 'Guia de redação da Conta Azul', url: 'https://medium.com/design-contaazul/como-come%C3%A7amos-a-estruturar-ux-writing-na-conta-azul-com-um-guia-de-reda%C3%A7%C3%A3o-5dd516315ee3' },
    { title: 'Voz e tom da Vindi', url: 'https://medium.com/vindi/voz-e-tom-da-vindi-como-come%C3%A7amos-a-construir-o-nosso-guia-11c1692c15da' },
    { title: 'Manual de Redação Bench', url: 'https://docs.google.com/spreadsheets/d/1vXDJ4CcRSCP_FGgdrAJgcKdU9KuR7gFDyWfMH3JFrJ0/edit?usp=sharing' },
  ] },
].map((section) => ({ ...section, links: section.links.map((link) => ({ ...link, description: descriptions[link.title] })) }))
