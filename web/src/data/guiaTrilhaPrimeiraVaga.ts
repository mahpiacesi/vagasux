import { guiaRoutes } from '@/lib/guiaRoutes'
import type { GuiaTrilhaStage } from '@/data/guiaTrilhaEntenderOBasico'

export type GuiaTrilhaPrimeiraVagaStage = GuiaTrilhaStage & {
  introduction: string
  essentials?: string[]
  note?: string
  tip?: { title: string; description: string }
  guidance: { title: string; description: string }[]
  nextStep: string
}

export const guiaTrilhaPrimeiraVagaStages: GuiaTrilhaPrimeiraVagaStage[] = [
  {
    number: '01',
    title: 'Antes de começar a procurar',
    description: 'Antes de sair aplicando, entenda o que você já tem para apresentar.',
    introduction: 'Olhe para seus conhecimentos, experiências e projetos e identifique o que já faz parte do seu repertório e o que ainda vale desenvolver.',
    essentials: ['Uma base de conhecimento em Product Design', 'Projetos que mostrem como você pensa', 'Currículo e perfil profissional atualizados', 'Disposição para aprender durante o processo'],
    guidance: [
      { title: 'O que você já sabe conta', description: 'Você pode trazer habilidades de outras áreas para UX. Comunicação, colaboração, organização e resolução de problemas, por exemplo, também fazem parte do trabalho de quem atua com produto. Some isso aos fundamentos de Product Design e aprenda a mostrar como você pensa e toma decisões.' },
      { title: 'Experiência pode ser construída', description: 'Projetos de curso, estudos de caso, desafios autorais e voluntariado ajudam a demonstrar como você pensa quando ainda não trabalhou formalmente com produto.' },
      { title: 'Procure enquanto aprende', description: 'As vagas também são uma fonte de aprendizado. Observe o que as empresas pedem, quais conhecimentos aparecem com frequência e use isso para direcionar seus estudos e próximos passos.' },
    ],
    nextStep: 'Liste o que você já consegue demonstrar hoje e escolha uma ou duas coisas que gostaria de desenvolver durante a busca.',
    contents: [
      { id: 'junior-experience', title: 'SouJunior', description: 'Participe de projetos de tecnologia para desenvolver experiência em equipe durante sua transição.', type: 'Referência', to: 'https://soujunior.tech/', external: true },
      { id: 'mentorship', title: 'ADPList', description: 'Encontre mentorias com profissionais de Design e Produto para trocar sobre sua trajetória.', type: 'Referência', to: 'https://adplist.org/', external: true },
    ],
  },
  {
    number: '02',
    title: 'Entenda que vaga você está procurando',
    description: 'Nem toda vaga de Product Design é igual 👀',
    introduction: 'Uma vaga pode estar mais focada em UI, discovery, pesquisa ou evolução de produtos existentes. Entender essas diferenças ajuda você a identificar o tipo de trabalho, rotina e desafios que vai encontrar em cada oportunidade.',
    note: 'Você não precisa cumprir 100% dos requisitos para se candidatar. Use a descrição para entender o que a empresa busca e avaliar se a oportunidade faz sentido para você.',
    guidance: [
      { title: 'Olhe além do título', description: 'Duas vagas com o mesmo cargo podem ter rotinas bem diferentes. Veja o que você vai fazer, quais problemas vai ajudar a resolver, como o time trabalha e quem estará ao seu lado.' },
      { title: 'Leia os requisitos com calma', description: 'Nem todo requisito tem o mesmo peso. Observe o que a vaga realmente precisa, o que você já sabe e onde ainda pode evoluir. Isso ajuda a escolher oportunidades que façam sentido para o seu momento.' },
      { title: 'Descubra onde você vai aprender', description: 'Para a primeira vaga, vale olhar também para o time. Ter pessoas para trocar, receber feedback e trabalhar em problemas reais pode fazer muita diferença no seu desenvolvimento.' },
    ],
    nextStep: 'Salve algumas vagas que chamaram sua atenção e compare o que elas têm em comum. O que essas empresas estão procurando? O que você já tem? O que aparece como próximo passo para você?',
    contents: [],
  },
  {
    number: '03',
    title: 'Prepare sua apresentação',
    description: 'Faça sua trajetória fazer sentido para quem está olhando de fora.',
    introduction: 'Currículo, LinkedIn e portfólio são partes da mesma apresentação. Juntos, eles ajudam a mostrar quem você é, o que sabe fazer e que tipo de oportunidade está buscando.',
    essentials: ['Nome, cidade, contato e link direto para o portfólio', 'Cargo ou área desejada e um resumo profissional objetivo', 'Experiência e projetos com ações, entregas e resultados', 'Formação, cursos, idiomas e habilidades relevantes para a vaga'],
    guidance: [
      { title: 'Currículo abre a conversa', description: 'Seu CV precisa ser fácil de entender e rápido de ler. Deixe visíveis o cargo ou área desejada, contato, portfólio e as experiências ou projetos mais relevantes para a vaga. Ao descrever o que você fez, use palavras de ação para deixar suas contribuições mais claras.' },
      { title: 'LinkedIn conta sua trajetória', description: 'Use o título, resumo e experiências para explicar quem você é, sua transição para UX e o que está buscando. Inclua palavras-chave relacionadas ao cargo, área e ferramentas que fazem parte do seu trabalho. Mantenha suas principais habilidades atualizadas e deixe portfólio e formas de contato acessíveis.' },
      { title: 'Portfólio mostra como você pensa', description: 'Não mostre só as telas. Conte o que estava acontecendo por trás delas: o contexto, seu papel, as decisões que tomou, como trabalhou com outras pessoas, o que aprendeu e, quando houver, o impacto do projeto.' },
      { title: 'Adapte sem começar do zero', description: 'Você não precisa refazer tudo a cada candidatura. Mantenha uma base consistente e ajuste o que fizer sentido para cada oportunidade, como resumo, palavras-chave e ordem dos projetos.' },
    ],
    tip: { title: 'De olho no ATS', description: 'Para facilitar a leitura automática do seu currículo, use palavras-chave da vaga, títulos claros e um formato simples. Evite gráficos, tabelas e colunas e prefira uma ordem cronológica reversa. Salve em .pdf ou .docx conforme o formato solicitado pela empresa.' },
    nextStep: 'Abra seu currículo, LinkedIn e portfólio lado a lado. Eles contam a mesma história? Quem encontrar um deles consegue entender rapidamente quem você é e chegar aos outros?',
    contents: [
      { id: 'cv-content', title: 'O que incluir e o que deixar de fora do currículo de UX', description: 'Checklist complementar para manter seu currículo relevante, direto e conectado ao portfólio.', type: 'Referência', to: 'https://blog.uxfol.io/ux-resume-what-to-include/', external: true },
      { id: 'cv-ats', title: 'Como estruturar um currículo de UX', description: 'Guia sobre currículo simples, palavras-chave e leitura por ATS.', type: 'Referência', to: 'https://blog.uxfol.io/ux-resume-layout/', external: true },
      { id: 'portfolio', title: 'O que recrutadores procuram em um portfólio de UX', description: 'Use seus cases para mostrar contexto, decisões, colaboração e impacto do seu trabalho.', type: 'Referência', to: 'https://blog.uxfol.io/ux-designer-portfolio/', external: true },
      { id: 'ats-linkedin', title: 'Como tirar 100 em plataformas ATS', description: 'Post sobre leitura automática de currículos e cuidados de design ao preparar sua candidatura.', type: 'Referência', to: 'https://www.linkedin.com/posts/nobrepires_designprinciples-ats-designbasics-ugcPost-7216454878913585152-xEC2?utm_source=share&utm_medium=member_android', external: true },
      { id: 'ats-checker', title: 'Resume.io ATS Resume Checker', description: 'Ferramenta para verificar como seu currículo pode ser interpretado por sistemas ATS.', type: 'Referência', to: 'https://resume.io/ats-resume-checker', external: true },
      { id: 'ats-templates', title: 'BetterCV', description: 'Templates de currículo com estrutura adequada para leitura por ATS.', type: 'Referência', to: 'https://bettercv.com/ats', external: true },
      { id: 'microsoft-ats-templates', title: 'Modelos de currículos ATS da Microsoft', description: 'Modelos gratuitos de currículo e carta de apresentação para adaptar à sua candidatura.', type: 'Referência', to: 'https://create.microsoft.com/pt-br/templates/curr%C3%ADculos-e-cartas-de-apresenta%C3%A7%C3%A3o-do-sistema-de-rastreamento-de-candidatos-(ats)', external: true },
      { id: 'product-designer-resumes', title: '17 exemplos de currículos de Product Designers', description: 'Referências de currículos de profissionais de empresas como Google, Uber e Spotify.', type: 'Referência', to: 'https://blog.uxfol.io/product-designer-resume/', external: true },
      { id: 'ux-designer-resumes', title: '10 exemplos de currículos de UX Designers', description: 'Exemplos comentados para observar estrutura, palavras-chave e apresentação de experiências.', type: 'Referência', to: 'https://resumeworded.com/ux-designer-resume-examples', external: true },
    ],
  },
  {
    number: '04',
    title: 'Comece a procurar vagas',
    description: 'Procurar vaga também é uma habilidade.',
    introduction: 'Saber onde procurar, como avaliar uma oportunidade e como organizar sua busca ajuda a tornar o processo mais simples e menos aleatório.',
    note: 'Use cada candidatura também como uma forma de entender melhor o mercado e ajustar os próximos passos.',
    guidance: [
      { title: 'Crie uma rotina possível', description: 'Escolha dias ou momentos da semana para procurar, salvar e acompanhar vagas. O mais importante é ter uma rotina que você consiga manter sem transformar a busca em um segundo emprego.' },
      { title: 'Personalize o essencial', description: 'Antes de aplicar, confira se seu currículo, resumo e cases escolhidos fazem sentido para aquela oportunidade. Você não precisa mudar tudo, só destacar o que é mais relevante para cada vaga.' },
      { title: 'Registre os processos', description: 'Anote empresa, vaga, data, contato, etapa e o que aprendeu. Ter esse histórico ajuda a não se perder e a perceber padrões na sua busca.' },
      { title: 'Proteja seu tempo', description: 'Leia a vaga com atenção, pesquise a empresa e fique de olho em sinais de alerta, como promessas vagas, tarefas extensas sem contexto ou pedidos de informações sensíveis.' },
    ],
    nextStep: 'Escolha uma ferramenta simples para acompanhar suas candidaturas e faça sua primeira aplicação adaptada a uma vaga que realmente faça sentido para você.',
    contents: [
      { id: 'jobs-board', title: 'Como pesquisar oportunidades?', description: 'Use o mural para explorar vagas e aplicar filtros.', type: 'Vagas', to: '/oportunidades#vagas' },
      { id: 'job-warning', title: 'Como reconhecer uma vaga cilada?', description: 'Use este apoio da FAQ para observar sinais antes de investir tempo em um processo.', type: 'FAQ', to: `${guiaRoutes.faq}#vagas-cilada-protecao` },
    ],
  },
  {
    number: '05',
    title: 'Conheça as pessoas',
    description: 'Networking começa com troca.',
    introduction: 'Conhecer pessoas da área pode ajudar você a entender diferentes trajetórias, descobrir oportunidades e conhecer melhor o mercado. Comece acompanhando conversas e participando de espaços que façam sentido para você.',
    guidance: [
      { title: 'Crie relações profissionais', description: 'Acompanhe o trabalho de pessoas e empresas que você admira. Faça perguntas específicas, participe das conversas e compartilhe aprendizados quando fizer sentido.' },
      { title: 'Mostre o que você está fazendo', description: 'Atualize seu perfil, compartilhe um projeto, uma descoberta ou uma reflexão. Aos poucos, isso ajuda outras pessoas a entenderem seus interesses e lembrarem de você.' },
      { title: 'Vá onde as pessoas estão', description: 'Comunidades, eventos e voluntariado são bons lugares para conhecer gente da área, ampliar seu repertório e criar novas conexões. Escolha espaços que façam sentido para o seu momento.' },
    ],
    nextStep: 'Escolha uma comunidade, evento ou pessoa para acompanhar nesta semana. Participe de uma conversa, compartilhe algo que você está aprendendo ou faça uma aproximação. Inclusive, se você chegou até aqui pela VagasUX, já encontrou uma comunidade para começar 👀',
    contents: [
      { id: 'community-events', title: 'Eventos', description: 'Encontre eventos e espaços para acompanhar conversas, trocar experiências e conhecer pessoas da área.', type: 'Tema', to: guiaRoutes.tipo('eventos'), previewUrl: 'https://vagasux.com.br/guia/tipo/eventos', external: true },
      { id: 'join-vagasux', title: 'Faça parte da VagasUX', description: 'Conheça formas de participar da comunidade e se aproximar de outras pessoas da área.', type: 'Comunidade', to: '/comunidade', previewUrl: 'https://vagasux.com.br/comunidade', external: true },
    ],
  },
  {
    number: '06',
    title: 'Passe pelo processo seletivo',
    description: 'O processo seletivo também faz parte da experiência.',
    introduction: 'A entrevista é uma oportunidade para mostrar o que você sabe, contar sua trajetória e entender se aquela empresa, aquele time e a forma de trabalhar combinam com o que você busca.',
    guidance: [
      { title: 'Conte sua trajetória', description: 'Prepare uma apresentação curta sobre de onde você vem, por que escolheu Product Design, o que vem estudando ou construindo e qual oportunidade está buscando agora.' },
      { title: 'Mostre como você trabalha', description: 'Ao apresentar um case, explique o que foi feito por você e o que foi construído em conjunto. Conte o problema, suas decisões, os caminhos que explorou, os limites do projeto e o que aprendeu.' },
      { title: 'Aproveite a conversa', description: 'Prepare perguntas sobre a empresa, o time, os desafios, a rotina, o acompanhamento e como o trabalho é avaliado. Use esse momento para entender melhor onde você pode estar entrando e se aquela oportunidade faz sentido para você.' },
      { title: 'Entenda o teste proposto', description: 'Antes de começar, entenda o objetivo, o tempo esperado e como a atividade será avaliada. Use o desafio para mostrar seu raciocínio e a forma como você aborda um problema.' },
    ],
    nextStep: 'Escreva sua apresentação de um minuto, escolha um case para contar e prepare três perguntas que você gostaria de fazer ao time.',
    contents: [
      { id: 'interview-guide', title: 'Como responder perguntas de entrevista de UX?', description: 'Material da Nielsen Norman Group sobre respostas e storytelling.', type: 'Referência', to: 'https://www.nngroup.com/articles/answer-ux-job-interview-questions/', external: true },
      { id: 'case', title: 'Como apresentar um case na entrevista', description: 'Estruture a apresentação com contexto, papel no projeto, decisões e aprendizados.', type: 'Referência', to: 'https://blog.uxfol.io/ux-portfolio-presentation/', external: true },
    ],
  },
  {
    number: '07',
    title: 'Depois da entrevista',
    description: 'Entrevista feita. E agora? 👀',
    introduction: 'Cada processo pode trazer uma proposta, uma recusa ou até mesmo nenhum retorno. Em qualquer um desses cenários, vale olhar para o que aconteceu e entender o que você pode levar para a próxima oportunidade.',
    note: 'Sua primeira vaga não precisa ser perfeita. Ela pode ser um lugar para aprender, contribuir e continuar construindo sua carreira.',
    guidance: [
      { title: 'Dê espaço para o retorno', description: 'Processos podem levar tempo e nem sempre vêm com uma resposta. Faça um acompanhamento educado quando fizer sentido e continue sua busca enquanto espera.' },
      { title: 'Guarde o que você aprendeu', description: 'Depois de uma entrevista, registre as perguntas que apareceram, os pontos em que você se sentiu seguro e o que gostaria de explicar melhor na próxima vez. Sua próxima entrevista já pode ser melhor por causa dessa.' },
      { title: 'Se não deu match, ajuste a rota', description: 'Uma recusa pode estar relacionada à vaga, ao momento ou ao contexto daquela empresa. Quando houver feedback, use-o para identificar o que pode ser aprimorado e siga em frente.' },
      { title: 'Chegou uma proposta? Respira 🧘', description: 'Antes de aceitar, olhe para a oportunidade como um todo. Considere aprendizado, apoio do time, escopo, modelo de trabalho e condições da vaga. O primeiro “sim” é importante, mas vale entender se é um “sim” que faz sentido para você.' },
    ],
    nextStep: 'Atualize seu registro de candidaturas, anote o principal aprendizado do último processo e escolha qual será seu próximo passo.',
    contents: [],
  },
]
