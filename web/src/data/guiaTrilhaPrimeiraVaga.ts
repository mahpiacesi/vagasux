import { guiaRoutes } from '@/lib/guiaRoutes'
import type { GuiaTrilhaStage } from '@/data/guiaTrilhaEntenderOBasico'

export type GuiaTrilhaPrimeiraVagaStage = GuiaTrilhaStage & {
  introduction: string
  essentials?: string[]
  note?: string
  guidance: { title: string; description: string }[]
  nextStep: string
}

export const guiaTrilhaPrimeiraVagaStages: GuiaTrilhaPrimeiraVagaStage[] = [
  {
    number: '01',
    title: 'Antes de começar a procurar',
    description: 'Você pode iniciar a busca antes de se sentir preparado.',
    introduction: 'Comece identificando o que você já consegue apresentar e o que quer desenvolver ao longo da busca.',
    essentials: ['Uma base de conhecimento em Product Design', 'Projetos que mostrem como você pensa', 'Currículo e perfil profissional atualizados', 'Disposição para aprender durante o processo'],
    guidance: [
      { title: 'Conhecimentos para iniciar', description: 'Em uma vaga de entrada, explique fundamentos, seu processo e as escolhas que faz. Ferramentas e métodos continuam fazendo parte do seu aprendizado.' },
      { title: 'Experiência pode ser construída', description: 'Projetos de curso, estudos de caso, desafios autorais e voluntariado ajudam a demonstrar como você pensa quando ainda não trabalhou formalmente com produto.' },
      { title: 'Procure enquanto aprende', description: 'A busca revela o que o mercado pede. Use as descrições de vaga para orientar seus estudos e iniciar candidaturas quando se sentir preparado.' },
    ],
    nextStep: 'Liste o que você já consegue demonstrar hoje e escolha uma ou duas lacunas para desenvolver enquanto inicia a busca.',
    contents: [
      { id: 'junior-experience', title: 'SouJunior', description: 'Participe de projetos reais de tecnologia para desenvolver experiência prática durante sua transição.', type: 'Referência', to: 'https://soujunior.tech/', external: true },
      { id: 'mentorship', title: 'ADPList', description: 'Encontre mentorias com profissionais de Design e Produto para trocar sobre sua trajetória.', type: 'Referência', to: 'https://adplist.org/', external: true },
    ],
  },
  {
    number: '02',
    title: 'Entenda que vaga você está procurando',
    description: 'Nem toda vaga de Product Design é igual.',
    introduction: 'Uma vaga pode focar em UI, discovery, pesquisa ou evolução de produtos existentes. Entender as diferenças ajuda a ler oportunidades que façam sentido para o seu momento.',
    note: 'Você não precisa cumprir 100% dos requisitos para se candidatar. Use a descrição como referência, não como uma prova que precisa passar.',
    guidance: [
      { title: 'Leia além do cargo', description: '“Product Designer” pode significar trabalhos bem diferentes. Observe o problema da empresa, a maturidade do time, as responsabilidades e quem vai trabalhar com você.' },
      { title: 'Diferencie requisito de desejo', description: 'Separe o que é essencial para a função daquilo que aparece como diferencial. A vaga pode ser uma boa oportunidade mesmo quando você ainda está desenvolvendo parte do repertório.' },
      { title: 'Busque contexto de aprendizado', description: 'Para a primeira vaga, considere se haverá pessoas para trocar, espaço para receber feedback e problemas reais em que você possa contribuir.' },
    ],
    nextStep: 'Salve algumas vagas que fariam sentido para você e compare o que elas pedem antes de preparar sua candidatura.',
    contents: [
      { id: 'opportunities', title: 'Onde encontrar vagas de Product Design?', description: 'Explore oportunidades publicadas pela VagasUX.', type: 'Vagas', to: '/oportunidades#vagas' },
      { id: 'career-hubs', title: 'Michael Page', description: 'Acompanhe uma plataforma de recrutamento para entender descrições e oportunidades do mercado.', type: 'Referência', to: 'https://www.michaelpage.com.br/', external: true },
    ],
  },
  {
    number: '03',
    title: 'Prepare sua apresentação',
    description: 'Apresente uma trajetória clara e relevante para a oportunidade.',
    introduction: 'Currículo, LinkedIn e portfólio ajudam uma pessoa recrutadora a entender rapidamente quem você é, o que sabe fazer e que tipo de oportunidade busca.',
    essentials: ['Nome, cidade, contato e link direto para o portfólio', 'Cargo ou área desejada e um resumo profissional objetivo', 'Experiência e projetos com ações, entregas e resultados', 'Formação, cursos, idiomas e habilidades relevantes para a vaga'],
    guidance: [
      { title: 'Currículo abre a conversa', description: 'Seu CV precisa ser rápido de ler: deixe visíveis o cargo desejado, contato, portfólio e experiências ou projetos mais próximos da vaga. Priorize clareza, hierarquia e palavras de ação.' },
      { title: 'LinkedIn conecta a trajetória', description: 'Use título, resumo e experiências para explicar sua transição e seus interesses. Mantenha os links de portfólio e contato acessíveis e use palavras-chave que aparecem nas vagas buscadas.' },
      { title: 'Portfólio mostra como você trabalha', description: 'Apresente o processo por trás das telas. Escolha projetos e mostre o contexto, seu papel, decisões, colaboração, aprendizados e, quando houver, o impacto do trabalho.' },
      { title: 'Adapte sem recomeçar', description: 'Tenha uma base consistente e ajuste resumo, palavras-chave e a ordem dos projetos para a oportunidade. Evite gráficos, tabelas e excesso visual que dificulte a leitura por ATS.' },
    ],
    nextStep: 'Revise currículo, LinkedIn e portfólio como um conjunto: quem abrir um deles deve encontrar uma história coerente e chegar aos outros com facilidade.',
    contents: [
      { id: 'cv-content', title: 'O que incluir e o que deixar de fora do currículo de UX', description: 'Checklist complementar para manter seu currículo relevante, direto e conectado ao portfólio.', type: 'Referência', to: 'https://blog.uxfol.io/ux-resume-what-to-include/', external: true },
      { id: 'cv-ats', title: 'Como estruturar um currículo de UX', description: 'Guia prático sobre currículo simples, palavras-chave e leitura por ATS.', type: 'Referência', to: 'https://blog.uxfol.io/ux-resume-layout/', external: true },
      { id: 'portfolio', title: 'O que recrutadores procuram em um portfólio de UX', description: 'Use seus cases para mostrar contexto, decisões, colaboração e impacto do seu trabalho.', type: 'Referência', to: 'https://blog.uxfol.io/ux-designer-portfolio/', external: true },
    ],
  },
  {
    number: '04',
    title: 'Comece a procurar vagas',
    description: 'Procurar vaga também é uma habilidade.',
    introduction: 'Estruturar onde procurar, como avaliar uma vaga e como organizar sua busca ajuda você a fazer candidaturas com intenção.',
    note: 'Use cada processo para entender o mercado e ajustar sua próxima candidatura.',
    guidance: [
      { title: 'Crie uma rotina possível', description: 'Defina dias ou momentos da semana para procurar, salvar e acompanhar vagas. Mantenha uma rotina que permita acompanhar cada candidatura.' },
      { title: 'Personalize o essencial', description: 'Antes de aplicar, confirme se o currículo, o resumo e os cases escolhidos conversam com aquela oportunidade. Apresente informações relevantes para aquele contexto.' },
      { title: 'Registre os processos', description: 'Anote empresa, vaga, data, contato, etapa e aprendizados. Isso evita aplicações duplicadas e mostra padrões que ajudam a ajustar sua busca.' },
      { title: 'Proteja seu tempo', description: 'Leia a vaga com atenção, pesquise a empresa e desconfie de promessas vagas, tarefas extensas sem contexto ou pedidos de informação sensível.' },
    ],
    nextStep: 'Escolha uma ferramenta simples para acompanhar candidaturas e faça sua primeira aplicação adaptada a uma vaga real.',
    contents: [
      { id: 'jobs-board', title: 'Como pesquisar oportunidades?', description: 'Use o mural para explorar vagas e aplicar filtros.', type: 'Vagas', to: '/oportunidades#vagas' },
      { id: 'job-warning', title: 'Como reconhecer uma vaga cilada?', description: 'Use este apoio da FAQ para observar sinais antes de investir tempo em um processo.', type: 'FAQ', to: `${guiaRoutes.faq}#vagas-cilada-protecao` },
    ],
  },
  {
    number: '05',
    title: 'Conheça as pessoas',
    description: 'Networking não precisa começar pedindo emprego.',
    introduction: 'Conhecer pessoas da área ajuda você a entender trajetórias, descobrir empresas e aprender como o mercado funciona. Comece com curiosidade e troca genuína.',
    guidance: [
      { title: 'Networking é relação, não pedido', description: 'Em vez de começar pedindo indicação, acompanhe o trabalho de pessoas e empresas que admira. Faça perguntas específicas e compartilhe aprendizados quando fizer sentido.' },
      { title: 'Mostre que você está em movimento', description: 'Atualize seu perfil, compartilhe um projeto ou reflexão e participe de conversas. Isso ajuda outras pessoas a entenderem seus interesses e lembrarem de você.' },
      { title: 'Procure experiências reais', description: 'Comunidades, eventos e voluntariado podem ampliar seu repertório e criar trocas profissionais. Escolha espaços respeitosos e com objetivos claros para seu momento.' },
    ],
    nextStep: 'Escolha uma comunidade, evento ou pessoa para acompanhar nesta semana e faça uma aproximação respeitosa e específica.',
    contents: [
      { id: 'community', title: 'Como participar de comunidades e eventos?', description: 'Encontre espaços para acompanhar conversas e conhecer pessoas.', type: 'Tema', to: guiaRoutes.tipo('eventos') },
      { id: 'volunteer', title: 'Atados', description: 'Encontre oportunidades de voluntariado por causa, habilidade ou localidade.', type: 'Referência', to: 'https://www.atados.com.br/', external: true },
      { id: 'volunteer-projects', title: 'SouJunior', description: 'Experimente trabalhar em projetos de tecnologia em equipe e construa repertório na prática.', type: 'Referência', to: 'https://soujunior.tech/', external: true },
      { id: 'networking', title: 'Networking no LinkedIn', description: 'Se precisar de um ponto de partida, use a FAQ para abordar novas conexões com respeito.', type: 'FAQ', to: `${guiaRoutes.faq}#networking-linkedin` },
    ],
  },
  {
    number: '06',
    title: 'Passe pelo processo seletivo',
    description: 'O processo seletivo também é parte do trabalho.',
    introduction: 'Entrevistas também ajudam você a entender se aquela empresa, time e forma de trabalhar fazem sentido para você.',
    guidance: [
      { title: 'Prepare sua narrativa', description: 'Organize uma apresentação curta: de onde você vem, por que Product Design, o que vem estudando ou construindo e qual oportunidade procura agora.' },
      { title: 'Conte seu papel com honestidade', description: 'Ao mostrar um case, diferencie o que você fez do que foi decidido em conjunto. Explique o problema, o processo, as escolhas, os limites e o que aprendeu.' },
      { title: 'Entrevista é uma conversa de mão dupla', description: 'Prepare perguntas sobre o time, desafios, acompanhamento, rotina e critérios de sucesso. Elas ajudam você a avaliar se o contexto é saudável para começar.' },
      { title: 'Avalie o teste proposto', description: 'Entenda o objetivo, o tempo esperado e como a atividade será avaliada. Prefira desafios proporcionais ao processo e use o espaço para expor seu raciocínio.' },
    ],
    nextStep: 'Escreva sua apresentação de um minuto, escolha um case para contar e prepare três perguntas que você quer fazer ao time.',
    contents: [
      { id: 'interview-guide', title: 'Como responder perguntas de entrevista de UX?', description: 'Material da Nielsen Norman Group sobre respostas e storytelling.', type: 'Referência', to: 'https://www.nngroup.com/articles/answer-ux-job-interview-questions/', external: true },
      { id: 'case', title: 'Como apresentar um case na entrevista', description: 'Estruture a apresentação com contexto, papel no projeto, decisões e aprendizados.', type: 'Referência', to: 'https://blog.uxfol.io/ux-portfolio-presentation/', external: true },
      { id: 'interview', title: 'Entrevistas e testes seletivos', description: 'A FAQ complementa a preparação para a conversa e para desafios de processo.', type: 'FAQ', to: `${guiaRoutes.faq}#como-portar-entrevista` },
    ],
  },
  {
    number: '07',
    title: 'Depois da entrevista',
    description: 'O processo não termina quando a entrevista acaba.',
    introduction: 'Cada processo pode trazer uma proposta, uma recusa ou nenhum retorno. Registre o que aprendeu em cada experiência.',
    note: 'Sua primeira vaga não precisa ser perfeita. Ela precisa ser uma oportunidade em que você consiga aprender, contribuir e continuar construindo sua carreira.',
    guidance: [
      { title: 'Dê espaço para o retorno', description: 'Processos podem levar tempo e podem não trazer uma resposta. Faça um acompanhamento educado quando for apropriado e siga procurando enquanto espera.' },
      { title: 'Transforme cada processo em aprendizado', description: 'Depois de uma entrevista, registre perguntas, pontos em que se sentiu seguro e o que gostaria de explicar na próxima vez.' },
      { title: 'Use uma recusa para ajustar sua busca', description: 'Uma recusa está ligada à combinação de vaga, momento e contexto. Use feedback quando existir e ajuste o que fizer sentido.' },
      { title: 'Avalie o sim com calma', description: 'Ao receber uma proposta, considere aprendizado, apoio do time, escopo, modelo de trabalho e condições. Sua primeira vaga é um começo, não uma decisão definitiva.' },
    ],
    nextStep: 'Atualize seu registro de candidaturas, anote o principal aprendizado do último processo e defina qual será sua próxima ação de busca.',
    contents: [
      { id: 'feedback', title: 'Como pedir feedback depois de um processo?', description: 'Use este apoio da FAQ para abordar retornos com respeito e objetividade.', type: 'FAQ', to: `${guiaRoutes.faq}#case-sem-retorno` },
      { id: 'opportunities-next', title: 'Continue acompanhando oportunidades', description: 'Mantenha uma rotina sustentável de busca e use o mural para encontrar sua próxima aplicação.', type: 'Vagas', to: '/oportunidades#vagas' },
    ],
  },
]
