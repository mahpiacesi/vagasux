import type { GuiaFaqItem } from './guiaFaq'

export const guiaFaqItems: GuiaFaqItem[] = [
  // ── GERAL · rotina ──────────────────────────────────────────────────────
  {
    id: 'diferenca-ui-ux-pd',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'Qual a diferença entre UI Designer, UX Designer e Product Designer?',
    answer: [
      'UI Designer cuida da camada visual da interface: cores, tipografia, grids, componentes, microinterações e acessibilidade visual. O foco está em traduzir a experiência de forma clara e consistente na tela.',
      'UX Designer pensa na jornada da pessoa usuária: pesquisa, fluxos, wireframes e protótipos em diferentes níveis de fidelidade. Product Designer costuma unir pesquisa, produto e interface, acompanhando o ciclo de evolução do produto. No mercado brasileiro os títulos se misturam, então vale ler a descrição da vaga com calma.',
    ],
    seeAlso: [
      { term: 'UX', glossarioId: 'ux' },
      { term: 'UI', glossarioId: 'ui' },
      { term: 'Product Design', glossarioId: 'product-design' },
    ],
  },
  {
    id: 'rotina-contextos-diversos',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'Como é a rotina de Product Designer em startups, agências e consultorias?',
    answer: [
      'O que muda mais é o foco e o ritmo. Em agências, o prazo e a entrega para o cliente costumam pesar mais, com menos tempo para pesquisa profunda. Em empresas de produto, você tende a ficar em uma squad focada em um serviço específico.',
      'Startups podem ser aceleradas e exigir adaptação constante. Consultorias variam: algumas funcionam como agência, outras colocam você dentro do time do cliente por um período. Na entrevista, pergunte como é o dia a dia antes de assumir que o rótulo da empresa define tudo.',
    ],
    seeAlso: [{ term: 'Squad', glossarioId: 'squad' }],
  },
  {
    id: 'tempo-construcao-projeto',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'Quanto tempo leva, em média, a construção de um projeto de design?',
    answer: [
      'Para uma funcionalidade nova em um app, o ciclo completo de pesquisa, ideação, validação e refinamento visual costuma levar entre duas e quatro semanas, ou seja, uma a duas sprints, dependendo do time e da complexidade.',
      'Projetos menores podem fechar em dias; iniciativas maiores se estendem por meses. Contexto, maturidade da squad e quantidade de stakeholders influenciam bastante o calendário real.',
    ],
    seeAlso: [{ term: 'Sprint', glossarioId: 'sprint' }],
  },
  {
    id: 'sem-demanda-o-que-fazer',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'O que fazer quando não tem demanda de design no momento?',
    answer: [
      'Antes de ficar parada, veja se alguém do time precisa de apoio. Depois, aproveite para conhecer melhor o produto, revisar entregas anteriores, ler o backlog e conversar com pessoas de atendimento ou suporte, que ouvem dores reais todos os dias.',
      'Com esses insumos, você pode mapear oportunidades e sugerir melhorias para a próxima sprint. Proatividade conta muito, principalmente no começo da carreira.',
    ],
    seeAlso: [
      { term: 'Backlog', glossarioId: 'backlog' },
      { term: 'Discovery', glossarioId: 'discovery' },
    ],
  },
  {
    id: 'vagas-cilada-protecao',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'Como me proteger de vagas suspeitas e empresas problemáticas?',
    answer: [
      'Pesquise a empresa antes de avançar: site, LinkedIn, redes sociais, avaliações no Google e no Glassdoor. Desconfie de anúncios sem nome da empresa, descrição vaga ou faixa salarial muito fora da média para o nível.',
      'Compare o que a vaga pede com o que o mercado costuma exigir. Escopos absurdos para júnior ou benefícios omitidos são sinais de alerta. Confira também a [curadoria de vagas para iniciantes](/vagas-para-iniciantes) da VagasUX, mas sempre vale fazer sua própria checagem.',
    ],
  },
  {
    id: 'salario-junior-media',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'Qual a média salarial para designers iniciantes?',
    answer: [
      'Varia conforme região, modalidade de contratação e porte da empresa. Como referência ampla, vagas PJ para júnior costumam ficar entre R$ 3 mil e R$ 5,5 mil; em CLT, entre R$ 2 mil e R$ 4,5 mil. Use como ponto de partida, sabendo que cada contexto muda.',
      'Use Glassdoor, Salário Transparente e materiais da comunidade para calibrar expectativa no seu contexto. Na negociação, considere benefícios, crescimento e tipo de contrato junto com o valor bruto.',
    ],
  },

  // ── GERAL · squads ──────────────────────────────────────────────────────
  {
    id: 'como-funcionam-squads',
    categoryId: 'geral',
    subgroup: 'squads',
    question: 'Como funcionam as squads?',
    answer: [
      'Squad é um time pequeno e multidisciplinar com objetivo claro: produto, design, desenvolvimento, dados e outras funções trabalham juntos com autonomia para entregar valor contínuo.',
      'Em vez de handoffs longos entre áreas isoladas, a squad compartilha contexto e prioridades. Cada empresa adapta o modelo, mas a ideia central é colaboração próxima em ciclos curtos.',
    ],
    seeAlso: [{ term: 'Squad', glossarioId: 'squad' }],
  },
  {
    id: 'papeis-squad-dia-a-dia',
    categoryId: 'geral',
    subgroup: 'squads',
    question: 'O que faz cada pessoa da squad no dia a dia?',
    answer: [
      'Product Owner prioriza backlog e traduz necessidades de negócio. Desenvolvedores implementam front e back. QA valida fluxos antes do release. Designer garante experiência e interface coerentes com o objetivo do produto.',
      'Scrum Master ou facilitador ajuda o time a manter ritmo e remover bloqueios. Squads maiores podem incluir pesquisa, dados, marketing ou atendimento. Seu papel como designer é conectar pessoa usuária, produto e viabilidade técnica.',
    ],
    seeAlso: [
      { term: 'Backlog', glossarioId: 'backlog' },
      { term: 'QA', glossarioId: 'qa' },
    ],
  },
  {
    id: 'comunicacao-cerimonias-squad',
    categoryId: 'geral',
    subgroup: 'squads',
    question: 'Como funciona a comunicação e as cerimônias da squad?',
    answer: [
      'Daily: alinhamento rápido sobre progresso e bloqueios. Refinamento: detalha histórias antes da planning. Planning: estima e define o que entra na sprint. Retrospectiva: revisa o que funcionou e o que melhorar.',
      'Essas reuniões existem para reduzir surpresa e manter todo mundo na mesma página. Participe com clareza sobre suas entregas e peça ajuda cedo quando travar.',
    ],
    seeAlso: [
      { term: 'Daily', glossarioId: 'daily' },
      { term: 'Sprint Planning', glossarioId: 'sprint-planning' },
      { term: 'Retrospectiva', glossarioId: 'retrospectiva' },
    ],
  },
  {
    id: 'entregavel-sprint-designer',
    categoryId: 'geral',
    subgroup: 'squads',
    question: 'Como funciona o entregável de uma sprint para a designer?',
    answer: [
      'Documente discovery e ideação em ferramenta compartilhada (Miro, Notion, Figma). Wireframes e protótipos evoluem conforme validação; compartilhe versões finais com especificação clara para desenvolvimento.',
      'Registre entregáveis no Jira ou ferramenta similar, amarrando cada item à história da sprint. Depois da implementação, acompanhe se o resultado ficou fiel ao combinado e se a experiência funcionou como esperado.',
    ],
    seeAlso: [
      { term: 'Handoff', glossarioId: 'handoff' },
      { term: 'Wireframe', glossarioId: 'wireframe' },
      { term: 'Sprint', glossarioId: 'sprint' },
    ],
  },

  // ── GERAL · junior ──────────────────────────────────────────────────────
  {
    id: 'diferenca-junior-pleno-senior',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'Qual a diferença entre júnior, pleno e sênior?',
    answer: [
      'A distinção passa muito por autonomia e maturidade. Júnior aprende com orientação, faz perguntas e entrega com apoio. Pleno conduz projetos com mais independência e menos supervisão constante.',
      'Sênior amplia o olhar para o coletivo: compartilha conhecimento, influencia decisões de produto e ajuda o time a evoluir. Todos os níveis entregam valor; o que muda é quanto contexto e direcionamento você precisa para chegar lá.',
    ],
  },
  {
    id: 'cobranca-junior-dia-a-dia',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'Qual o nível de cobrança no dia a dia de uma profissional júnior?',
    answer: [
      'Depende da cultura da empresa, mas a expectativa costuma ser proporcional ao nível: acompanhamento, feedback frequente e entregas dentro do ritmo da squad. Você foi contratada pelo potencial que demonstrou, mesmo ainda em aprendizado.',
      'Se sentir sobrecarga, converse com sua liderança antes que o prazo estoure. Travar em dúvida faz parte; pesquisar, pedir ajuda e registrar aprendizados mostra maturidade.',
    ],
    seeAlso: [{ term: 'Squad', glossarioId: 'squad' }],
  },
  {
    id: 'expectativas-processo-seletivo',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'Como lidar quando as expectativas no trabalho diferem do processo seletivo?',
    answer: [
      'Mapeie o que mudou: escopo, prazo, ferramentas ou postura esperada. Converse com liderança para realinhar o que é razoável no seu nível atual e o que pode ser desenvolvido com tempo.',
      'Alinhamento resolve muita coisa. Se, mesmo assim, o ambiente não combina com seu momento ou impacta sua saúde, buscar outra oportunidade também é uma decisão válida. Reclamar sem agir raramente melhora o cenário.',
    ],
  },
  {
    id: 'investimento-aprendizado-junior',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'As empresas investem no aprendizado de profissionais júniores?',
    answer: [
      'Varia bastante. Empresas que contratam júnior com intenção real tendem a oferecer mentoria interna, acesso a cursos, revisões de design ou budget para formação. Outras esperam que você aprenda sozinha no corre.',
      'Na entrevista, pergunte como funciona o onboarding e se existe espaço para evolução. Pesquise a cultura da empresa e o que ex-funcionários comentam sobre desenvolvimento de carreira.',
    ],
  },
  {
    id: 'o-que-junior-nao-deve-fazer',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'O que uma júnior deve evitar no dia a dia?',
    answer: [
      'Evite virar profissional tarefeira: só executar o pedido sem questionar, sem propor melhorias e sem mostrar interesse pelo produto. Iniciativa equilibrada faz diferença.',
      'O outro extremo também atrapalha: sumir do radar, não responder mensagens ou não pedir ajuda quando travar. Visibilidade saudável, perguntas frequentes e participação nas conversas do time constroem confiança.',
    ],
  },

  // ── GERAL · remoto ──────────────────────────────────────────────────────
  {
    id: 'como-funciona-trabalho-remoto',
    categoryId: 'geral',
    subgroup: 'remoto',
    question: 'Como funciona o trabalho remoto?',
    answer: [
      'Pode ser total, sem previsão de retorno ao escritório, ou híbrido, com alguns dias presenciais. As responsabilidades são as mesmas; o que muda é a comunicação assíncrona, reuniões por videochamada e ferramentas de colaboração online.',
      'Organize rotina, ambiente de trabalho e limites entre vida pessoal e profissional. Documentar decisões e manter o time informado compensa a falta de conversa informal no corredor.',
    ],
  },
  {
    id: 'junior-trabalho-remoto',
    categoryId: 'geral',
    subgroup: 'remoto',
    question: 'Existe restrição para contratar júnior em trabalho remoto?',
    answer: [
      'Não há regra que proíba, mas algumas empresas hesitam porque acham mais difícil acompanhar quem está começando à distância. Outras já têm onboarding remoto maduro e funcionam muito bem.',
      'Priorize vagas que deixem claro como será a mentoria, a frequência de feedback e os canais de dúvida. Na entrevista, pergunte como designers júniores são integradas ao time virtualmente.',
    ],
  },

  // ── PREPARAÇÃO · linkedin ───────────────────────────────────────────────
  {
    id: 'linkedin-titulo-ui-ux-pd',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'No LinkedIn, coloco UI, UX ou UI/UX no título?',
    answer: [
      'Para SEO e clareza, um título focado costuma funcionar melhor: "UI Designer" ou "Product Designer", por exemplo, com detalhes na seção Sobre. Quem está começando pode usar Product Designer e explicar o mix de UX e UI na descrição.',
      'Evite listar muitas profissões no título ("Designer | Fotógrafa | Editora"). Recrutadores buscam perfis com direção clara.',
    ],
  },
  {
    id: 'linkedin-transicao-carreira',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'Como adequar o LinkedIn para transição de carreira?',
    answer: [
      'Preencha perfil completo: foto, título alinhado ao objetivo, Sobre com sua história e o que busca, experiências anteriores com habilidades transferíveis e competências relevantes em destaque.',
      'No Sobre, conecte o que você já fez com design: hierarquia visual do gráfico, organização de projetos, contato com cliente. Ative "Open to Work" se quiser mais visibilidade para recrutadores.',
    ],
  },
  {
    id: 'linkedin-perfil-competitivo',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'Como estruturar um LinkedIn competitivo?',
    answer: [
      'Quanto mais completo, melhor: experiências, cursos, projetos, link de portfólio e contatos atualizados. Peça recomendações de colegas de curso, hackathon ou trabalhos anteriores quando fizer sentido.',
      'Siga empresas, escolas e profissionais da área. Comente posts com contribuição real: opinião, pergunta ou experiência. Presença consistente ajuda mais do que perfil bonito e vazio.',
    ],
  },
  {
    id: 'portfolio-alinhado-linkedin',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'O que significa manter portfólio alinhado ao LinkedIn?',
    answer: [
      'Se você se apresenta como Product Designer, seus cases precisam refletir esse contexto. LinkedIn caprichado com portfólio desatualizado ou de outra área gera desconfiança na triagem.',
      'Atualize os dois juntos: novo case publicado, link no perfil; mudou foco para research, ajuste título e destaques. Coerência entre canais passa profissionalismo.',
    ],
  },
  {
    id: 'networking-linkedin',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'Como criar networking com outras designers pelo LinkedIn?',
    answer: [
      'Adicionar centenas de pessoas sem conversa vira lista morta. Prefira mensagens personalizadas: comente um artigo dela, pergunte sobre a área da empresa ou peça indicação de conteúdo.',
      'Conte brevemente quem você é antes de pedir feedback de portfólio. Ofereça troca quando puder. Networking funciona com respeito, sem pressionar por resposta imediata.',
    ],
  },
  {
    id: 'projetos-curso-hackathon-linkedin',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'Posso incluir projetos de curso, hackathon ou voluntariado no LinkedIn?',
    answer: [
      'Sim, e vale muito. Use a seção Projetos para cases de curso, hackathon ou ONG, com descrição do desafio, seu papel e link quando houver. Associe ao curso ou evento correspondente.',
      'Experiência não remunerada ainda é experiência prática. Mostra iniciativa e processo, principalmente para quem está montando os primeiros cases.',
    ],
  },

  // ── PREPARAÇÃO · cv ─────────────────────────────────────────────────────
  {
    id: 'cv-o-que-incluir',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'O que não pode faltar no currículo?',
    answer: [
      'Breve apresentação e objetivo, experiências relevantes para a vaga, habilidades (incluindo as que está desenvolvendo), formação, cursos e link de portfólio ou projetos.',
      'Liste ferramentas que você usa de fato (Figma, Miro, Notion). Informe idiomas além do português. Hierarquia visual clara, fontes legíveis e PDF leve facilitam a leitura rápida do recrutador.',
    ],
  },
  {
    id: 'cv-o-que-excluir',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'O que devo deixar de fora do currículo?',
    answer: [
      'Evite barras de porcentagem de domínio de ferramentas: parecem precisas, mas quase nunca convencem. Não liste software que você mal conhece ou que não tem relação com a vaga.',
      'Textos longos e blocos densos cansam na triagem. Seja concisa: menos ruído, mais sinal sobre o que você sabe fazer hoje.',
    ],
  },
  {
    id: 'cv-simples-vs-chamativo',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'Currículo simples ou design chamativo para UX?',
    answer: [
      'Formato simples e bem diagramado costuma performar melhor. Layout muito elaborado pode roubar atenção do conteúdo, que é o que importa: experiência, processo e clareza.',
      'Seu CV precisa ser legível para quem tria dezenas por dia. Pode ter identidade visual leve, mas priorize leitura rápida sobre firula.',
    ],
  },
  {
    id: 'carta-apresentacao',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'Carta de apresentação é necessária?',
    answer: [
      'Quando a vaga oferece campo de mensagem ou você envia candidatura por e-mail, escreva sim. Alguns parágrafos sobre quem você é, por que quer aquela vaga e o que traz de diferente valem mais do que só anexar PDF.',
      'Personalize por empresa. Texto genérico copiado denuncia falta de interesse. Trate como conversa inicial com a empresa.',
    ],
  },
  {
    id: 'mentoria-no-cv',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'Posso colocar mentoria no currículo?',
    answer: [
      'Programas de mentoria contínua podem entrar em formação ou experiência complementar, com nome do programa e mentora. Mentoria pontual de uma sessão não precisa ocupar espaço no CV.',
      'Você pode compartilhar aprendizados da mentoria em post no LinkedIn ou no case relacionado. Priorize mostrar evolução concreta em post ou case.',
    ],
  },
  {
    id: 'eventos-no-cv',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'Vale indicar eventos inscritos ou participados no currículo?',
    answer: [
      'Eventos com workshop prático ou trilha aplicável podem aparecer em formação ou projetos, se reforçarem uma habilidade concreta. Lista longa de palestras assistidas raramente muda a triagem.',
      'Para meetups e conferências, atividades no LinkedIn costumam ser canal melhor. No CV, priorize o que gerou case, certificado ou skill demonstrável.',
    ],
  },

  // ── PREPARAÇÃO · portfólio ──────────────────────────────────────────────
  {
    id: 'portfolio-faz-diferenca-iniciante',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Portfólio faz diferença para vagas de iniciante?',
    answer: [
      'Faz, e muito. Muitas empresas usam portfólio como filtro antes da entrevista. CV sem link ou case desatualizado dificulta o retorno, mesmo com boa formação.',
      'Invista tempo em poucos cases bem contados em vez de muitas telas soltas. Processo claro pesa mais que visual bonito sem contexto.',
    ],
  },
  {
    id: 'portfolio-sem-experiencia',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Como montar portfólio sem experiência profissional em UX?',
    answer: [
      'Projetos de curso, redesign de app real, melhoria de fluxo do seu dia a dia e voluntariado contam quando bem documentados. O artigo "Como montar um portfólio de UX se eu ainda não trabalho com UX?" no brasil.uxdesign.cc traz um passo a passo útil.',
      'Seja honesta sobre a origem do projeto. Recrutadores querem ver como você pensa, pesquisa e decide, além do visual final.',
    ],
  },
  {
    id: 'primeiro-case-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Como estruturar meu primeiro case de portfólio?',
    answer: [
      'Escolha um problema claro, faça desk research, benchmark, entrevistas ou testes simples, wireframes, protótipo e validação. Documente cada etapa com texto e imagens.',
      'Conte o que aprendeu e o que faria diferente hoje. Um case completo e modesto supera telas bonitas sem narrativa. Troque feedback nos canais da VagasUX antes de publicar.',
    ],
    seeAlso: [
      { term: 'Wireframe', glossarioId: 'wireframe' },
      { term: 'Discovery', glossarioId: 'discovery' },
    ],
  },
  {
    id: 'preparar-portfolio-aplicacoes',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Como preparar o portfólio para candidaturas?',
    answer: [
      'Destaque processo de ponta a ponta: problema, papel, colaborações, entregas e resultado ou aprendizado. Deixe navegação simples e links testados em mobile.',
      'Pergunte a si mesma: consigo entender o case em cinco minutos? O visual reflete meu nível atual? Cada estudo deve mostrar como você raciocina e toma decisões.',
    ],
  },
  {
    id: 'quantos-cases-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Quantos cases preciso no portfólio?',
    answer: [
      'Dois ou três cases completos bastam para iniciante. Qualidade e variedade de contexto valem mais que volume. Mais de cinco pode dispersar quem está triando.',
      'Se só tem um case pronto, aprofunde esse antes de correr para o próximo. Case único excelente já abre conversa.',
    ],
  },
  {
    id: 'manter-projetos-antigos',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Mantenho projetos antigos ou retiro do portfólio?',
    answer: [
      'Seja crítica: trabalho de outra área ou case muito abaixo do seu nível atual pode confundir. Em migração de carreira, portfólio focado em UX/UI costuma funcionar melhor que mistura de tudo.',
      'Um case recente bem feito vale mais que três antigos fracos. Você pode manter portfólio separado para trabalhos anteriores se ainda forem relevantes para networking.',
    ],
  },
  {
    id: 'onde-hospedar-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Onde hospedar meu portfólio?',
    answer: [
      'Opções comuns: Notion (grátis e flexível), Behance (bom para apresentação visual), Figma (protótipo navegável), UX Folio, Medium ou site próprio no WordPress/Squarespace.',
      'Escolha onde você consegue manter e atualizar com facilidade. O melhor formato é aquele que você consegue publicar e manter atualizado.',
    ],
  },
  {
    id: 'nda-projetos-reais-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Posso divulgar projetos reais no portfólio com NDA?',
    answer: [
      'Depende do contrato. Muitas empresas permitem case genérico sem dados sensíveis, blur em informações confidenciais ou foco em processo em vez de telas finais. Quando em dúvida, peça autorização por escrito.',
      'Redesign não oficial, projetos pessoais e estudos de curso preenchem portfólio enquanto você negocia o que pode mostrar de trabalho real.',
    ],
  },
  {
    id: 'recrutadores-querem-ver-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'O que recrutadores querem ver em um portfólio?',
    answer: [
      'Querem entender como você pensa: qual problema atacou, que alternativas considerou, como validou e o que aprendeu. Telas finais ajudam, mas processo manda.',
      'Conte história com começo, meio e fim. Mencione limitações de prazo ou escopo e como contornou. Honestidade sobre o que ainda está aprendendo também passa confiança.',
    ],
  },
  {
    id: 'exemplos-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Onde encontrar bons exemplos de portfólios?',
    answer: [
      'Comunidades de design, Medium, LinkedIn e a própria VagasUX são fontes constantes de referência. Quanto mais você participa, mais encontra cases inspiradores.',
      'Use referências para aprender estrutura de narrativa e adaptar ao seu contexto. O case da Érika e da Thaísa sobre experiência de pais na busca de ajuda médica é um exemplo citado em mentorias por ser completo e bem contado.',
    ],
  },
  {
    id: 'hackathon-vale-a-pena',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Hackathon vale a pena para quem está montando portfólio?',
    answer: [
      'Vale muito. Em dois ou três dias você idea, prototipa e apresenta MVP em equipe, muitas vezes com devs. Simula pressão real de prazo e colaboração multidisciplinar.',
      'Você não precisa saber codar: entre como designer e conecte-se ao time na dinâmica do evento. O case resultante pode virar item forte no portfólio e no LinkedIn.',
    ],
    seeAlso: [{ term: 'MVP', glossarioId: 'mvp' }],
  },

  // ── PROCESSOS SELETIVOS · entrevistas ───────────────────────────────────
  {
    id: 'como-portar-entrevista',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'Como me portar em uma entrevista?',
    answer: [
      'Seja você mesma. Chegar na entrevista já significa que portfólio ou CV chamaram atenção. Recrutadores querem conhecer sua forma de pensar com autenticidade.',
      'Treine contar cases em voz alta, prepare respostas sobre motivação, valores e planos de carreira. Quanto mais entrevistas você faz, mais natural fica. Nervosismo é normal.',
    ],
  },
  {
    id: 'experiencias-fora-ux-entrevista',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'Vale contar experiências fora de UI/UX na entrevista?',
    answer: [
      'Sim, especialmente em migração de carreira. Design gráfico, atendimento, educação ou tecnologia trazem habilidades transferíveis: hierarquia visual, empatia, organização, comunicação.',
      'Contextualize sua jornada, explique por que está migrando e conecte o passado ao que você busca agora. História coerente ajuda o recrutador a te enxergar no papel.',
    ],
  },
  {
    id: 'o-que-perguntam-entrevista',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'O que costumam perguntar nas entrevistas?',
    answer: [
      'Motivação para a empresa, visão de carreira, pedido para falar sobre você, walkthrough de cases e perguntas sobre colaboração, feedback e aprendizado.',
      'Você também pode perguntar: desafios do time, expectativa para júnior, processo de design e direção do produto. Entrevista é conversa de mão dupla.',
    ],
  },
  {
    id: 'como-falar-sobre-mim',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'Como falar sobre mim na entrevista?',
    answer: [
      'Misture trajetória profissional, estudos atuais, hobbies que mostram personalidade e o que te atraiu na vaga. Três a cinco minutos objetivos funcionam melhor que monólogo longo.',
      'Conecte fatos a decisões: por que escolheu design, que projeto te marcou, o que quer aprender nos próximos meses. Autenticidade combina com clareza.',
    ],
  },
  {
    id: 'nao-saber-responder-entrevista',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'E se eu não souber responder alguma pergunta?',
    answer: [
      'Seja honesta. Dizer que nunca passou por aquela situação, mas explicar o que entende do conceito ou como investigaria, mostra maturidade.',
      'Recrutadores observam como você reage sob incerteza. Ninguém sabe tudo; curiosidade e transparência pesam mais do que inventar resposta.',
    ],
  },

  // ── PROCESSOS SELETIVOS · desafios ──────────────────────────────────────
  {
    id: 'por-que-testes-seletivos',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'Por que empresas pedem testes práticos além do portfólio?',
    answer: [
      'Querem ver como você raciocina em contexto novo, com prazo curto e informação incompleta. Avaliam decisões, comunicação e defesa de ideias junto com o visual final.',
      'Teste complementa portfólio curado. Mostra soft skills em situação controlada parecida com o dia a dia.',
    ],
  },
  {
    id: 'prazo-case-processo-seletivo',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'Qual o prazo médio para fazer um case em processo seletivo?',
    answer: [
      'Geralmente de três a cinco dias úteis, às vezes até uma semana. Tempo apertado de propósito: priorize o essencial, pesquisa enxuta, solução focada e apresentação clara.',
      'Planeje desde o dia um o que entrega em cada etapa. Deixar tudo para a véspera compromete qualidade e sono.',
    ],
  },
  {
    id: 'como-apresentar-case-teste',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'Como apresentar meu case de teste?',
    answer: [
      'Slides ou PDF com contexto, problema, processo, solução e próximos passos. Protótipo navegável no Figma ajuda muito, mesmo quando não pedem explicitamente.',
      'Gravação curta no Zoom explicando o case pode destacar sua comunicação. Suba vídeo em link privado no YouTube em vez de anexar arquivo pesado no e-mail.',
    ],
  },
  {
    id: 'melhoria-fora-escopo-desafio',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'E se eu quiser melhorar uma área que não foi pedida no desafio?',
    answer: [
      'Entregue primeiro exatamente o que foi solicitado. Prazo curto pune quem refaz escopo por conta própria. Depois, se sobrar tempo, sugira melhorias extras como evolução opcional.',
      'Mostrar foco e criatividade dentro do brief passa confiança. Ideias fora do escopo só funcionam quando o pedido principal está resolvido.',
    ],
  },
  {
    id: 'case-reprovado-o-que-fazer',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'Fiz um case e não fui aprovada. O que faço com ele?',
    answer: [
      'Não jogue fora. Revise com calma, complete pesquisa e refinamento que faltaram no prazo apertado e transforme em case de portfólio.',
      'Cada teste é prática real. Muitos "nãos" precedem o "sim". Use feedback da empresa, se vier, e da comunidade para iterar.',
    ],
  },

  // ── PROCESSOS SELETIVOS · feedbacks ─────────────────────────────────────
  {
    id: 'case-sem-retorno',
    categoryId: 'processos-seletivos',
    subgroup: 'feedbacks',
    question: 'Enviei meu case e ainda não tive retorno. E agora?',
    answer: [
      'Aguarde cerca de uma semana. Empresas recebem muitos candidatos e demoram para organizar etapas. Depois desse prazo, mande e-mail educado perguntando status do processo.',
      'Enquanto isso, siga aplicando e praticando. Um processo parado não precisa parar sua rotina de estudo.',
    ],
  },
  {
    id: 'pedir-feedback-apos-nao',
    categoryId: 'processos-seletivos',
    subgroup: 'feedbacks',
    question: 'Recebi um "não" sem explicação. Vale pedir feedback?',
    answer: [
      'Vale tentar, com cabeça fria. Agradeça o retorno e pergunte onde poderia evoluir. Nem sempre respondem por volume ou política interna, mas algumas empresas dão orientações valiosas.',
      'Feedback específico acelera ajuste de portfólio, CV ou postura em entrevista. Trate como dado para evoluir.',
    ],
  },
  {
    id: 'sem-feedback-desiste',
    categoryId: 'processos-seletivos',
    subgroup: 'feedbacks',
    question: 'Não consegui feedback da empresa. Desisto?',
    answer: [
      'Não. Compartilhe case ou candidatura nos [canais da VagasUX](/comunidade). A comunidade costuma devolver olhar construtivo quando a empresa não devolve.',
      'Busque também mentorias gratuitas e troca entre pares. Feedback externo revela pontos cegos que você não enxerga sozinha.',
    ],
  },
  {
    id: 'nenhuma-resposta-empresas',
    categoryId: 'processos-seletivos',
    subgroup: 'feedbacks',
    question: 'Não tive retorno de nenhuma empresa. O que fazer?',
    answer: [
      'Revise portfólio e CV com alguém da área. Às vezes o bloqueio está na triagem: link quebrado, case confuso ou título genérico. Busque feedback na [comunidade](/comunidade) ou com mentorias da VagasUX.',
      'Ajuste candidaturas, aumente consistência e documente aprendizados a cada ciclo. Mercado exige paciência; melhorar processo aumenta chance de resposta com o tempo.',
    ],
  },

  // ── CONHECIMENTOS · habilidades ─────────────────────────────────────────
  {
    id: 'vagas-pedem-ui',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Por que tantas vagas de UX pedem UI?',
    answer: [
      'Muitas empresas buscam generalistas que contribuam em todo o fluxo, da pesquisa ao visual, por limitação de headcount. Saber wireframe, protótipo e noções de interface amplia onde você consegue entrar.',
      'Dentro do time, o foco pode migrar para research, conteúdo ou sistema conforme a necessidade. Versatilidade inicial abre porta; especialização pode vir depois.',
    ],
    seeAlso: [
      { term: 'UX', glossarioId: 'ux' },
      { term: 'UI', glossarioId: 'ui' },
      { term: 'Wireframe', glossarioId: 'wireframe' },
    ],
  },
  {
    id: 'habilidades-junior',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Quais habilidades o mercado exige de uma júnior?',
    answer: [
      'Soft skills: escuta ativa, feedback, colaboração, comunicação clara, curiosidade, organização e vontade de aprender. Hard skills: Figma ou similar, fluxos, wireframes, noções de pesquisa e acompanhamento de entrega.',
      'Não precisa dominar tudo. Precisa demonstrar base sólida, abertura para orientação e capacidade de documentar raciocínio.',
    ],
  },
  {
    id: 'junior-destacar-crescer',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Como uma júnior pode se destacar e crescer na empresa?',
    answer: [
      'Participe das conversas, peça feedback, ajude colegas quando puder e mostre evolução nos entregáveis. Cursos e estudo contínuo complementam, mas presença no time constrói reputação.',
      'Documente aprendizados, compartilhe referências úteis e proponha melhorias pequenas e factíveis. Crescimento vem de consistência ao longo do tempo, com entregas regulares e aprendizado acumulado.',
    ],
  },
  {
    id: 'tempo-adaptacao-funcoes',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Existe tempo médio para me adaptar às funções?',
    answer: [
      'Varia por pessoa, produto e empresa. Muitos times organizam expectativa em ciclos de sprint, com acompanhamento mais próximo nos primeiros meses.',
      'Permita-se curva de aprendizado. Perguntar cedo, registrar processos e revisar entregas com mentores internos encurta a adaptação.',
    ],
    seeAlso: [{ term: 'Sprint', glossarioId: 'sprint' }],
  },
  {
    id: 'saber-fazer-trabalho-pedido',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Vou saber fazer tudo que me pedirem?',
    answer: [
      'Provavelmente não, e tudo bem. Júnior aprende fazendo, com apoio. Quando surgir tema novo, diga o que já sabe, peça referências e envolva o time.',
      'Ansiedade com tarefa inédita é comum. Posicionamento honesto e disposição para investigar contam tanto quanto experiência prévia.',
    ],
    seeAlso: [{ term: 'Discovery', glossarioId: 'discovery' }],
  },
  {
    id: 'preparado-integrar-equipe',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Estou preparada para integrar uma equipe de design?',
    answer: [
      'Se você praticou, tem cases que mostram processo e já recebeu feedback externo, pode se candidatar. Prontidão absoluta não existe; o time também espera aprendizado no cargo.',
      'Candidate-se mesmo quando a vaga pede mais do que você tem hoje, especialmente se cobrir boa parte dos requisitos. Mulheres tendem a se autoexcluir cedo demais. Vá e aprenda no caminho.',
    ],
    seeAlso: [{ term: 'Squad', glossarioId: 'squad' }],
  },
  {
    id: 'design-grafico-necessario',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Preciso saber design gráfico para trabalhar com UX/UI?',
    answer: [
      'Fundamentos visuais ajudam: hierarquia, cor, tipografia, grid. Quem vem do gráfico tem vantagem inicial, mas dá para construir base com material focado em interface digital.',
      'Estudo contínuo faz parte da área. Priorize conteúdo aplicado a produto digital em vez de tentar dominar todo o universo gráfico de uma vez.',
    ],
  },
  {
    id: 'precisa-saber-codar',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Preciso saber codar para ser Product Designer?',
    answer: [
      'A maioria das vagas não exige programação, mas entender HTML básico, responsivo e limites de implementação melhora conversa com dev e qualidade do handoff.',
      'Pense como arquiteta que conhece materiais sem construir a obra. Para júnior, foco em pesquisa, prototipação e raciocínio de produto costuma bastar.',
    ],
    seeAlso: [{ term: 'Handoff', glossarioId: 'handoff' }],
  },

  // ── CONHECIMENTOS · formação ────────────────────────────────────────────
  {
    id: 'mercado-sem-faculdade',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'O mercado aceita profissionais sem formação superior?',
    answer: [
      'Sim, há relatos de contratação com portfólio forte e experiência prática. Ainda assim, graduação abre portas: estágio, networking, base teórica e credibilidade em algumas triagens.',
      'Autodidata com estudo consistente entra; faculdade em Design, Computação, Psicologia ou afins pode acelerar. Avalie seu contexto, tempo e recursos.',
    ],
  },
  {
    id: 'migracao-nova-faculdade',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Já sou formada em outra área. Preciso fazer nova graduação?',
    answer: [
      'Para migrar, cursos técnicos, bootcamps, projetos de portfólio e networking podem viabilizar a transição sem nova graduação.',
      'Com o tempo, pós-graduação em UX ou design digital pode complementar, especialmente se quiser aprofundar teoria ou atuar em contextos que valorizam titulação.',
    ],
  },
  {
    id: 'pos-vs-curso-tecnico',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Invisto em pós-graduação ou em curso técnico?',
    answer: [
      'Curso técnico ou bootcamp tende a ser mais rápido e prático para quem ainda está construindo base e portfólio. Pós faz mais sentido quando você já atua na área e quer especializar.',
      'Escolha conforme lacuna atual: precisa de projeto guiado e ritmo? Curso. Já trabalha e quer credencial acadêmica aprofundada? Pós.',
    ],
  },
  {
    id: 'tipo-curso-ingressar',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Que tipo de curso devo investir para ingressar na área?',
    answer: [
      'Busque formação que cubra processo completo de UI/UX, com projeto final para portfólio e, idealmente, mentoria ou comunidade. Grade genérica demais ou só ferramenta deixa lacunas.',
      'Confira syllabus, trabalhos de ex-alunas e transparência sobre carga horária prática. Curso bom te deixa capaz de contar um case com autonomia, além de reproduzir tutorial.',
    ],
  },
  {
    id: 'cursos-referencia-area',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Quais cursos são referência na área de UI/UX?',
    answer: [
      'A VagasUX mantém [curadoria de cursos gratuitos e pagos](/guia/tipo/cursos), além de feedbacks da comunidade sobre formações conhecidas.',
      'Não existe lista única definitiva. Compare objetivo, preço, formato ao vivo ou gravado e alinhamento com seu momento. O melhor curso é o que você consegue terminar e aplicar.',
    ],
  },
  {
    id: 'como-escolher-curso',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Como escolher o melhor curso de UI/UX?',
    answer: [
      'Defina orçamento, tempo disponível e se precisa de mentoria. Leia opiniões recentes, veja projetos de egressas e desconfie de promessa de emprego garantido.',
      'Experimente conteúdo gratuito do instrutor antes de pagar. Curso certo para você depende do seu ponto de partida e das lacunas que precisa fechar.',
    ],
  },

  // ── CONTRATAÇÃO · CLT ───────────────────────────────────────────────────
  {
    id: 'o-que-e-clt',
    categoryId: 'contratacao',
    subgroup: 'clt',
    question: 'O que é CLT?',
    answer: [
      'CLT significa Consolidação das Leis do Trabalho, o regime formal de contrato de trabalho no Brasil desde 1943. Regula jornada, descanso, férias, direitos trabalhistas e relação entre empregada e empregador.',
      'Na prática, CLT significa carteira assinada, encargos recolhidos pelo empregador e proteções previstas em lei. É o modelo mais comum em empresas estabelecidas no país.',
    ],
  },
  {
    id: 'direitos-principais-clt',
    categoryId: 'contratacao',
    subgroup: 'clt',
    question: 'Quais são meus principais direitos como CLT?',
    answer: [
      'Entre os principais: 13º salário, férias remuneradas mais adicional de um terço, FGTS com multa de 40% em demissão sem justa causa, aviso prévio, contribuição ao INSS e licenças previstas em lei.',
      'Descontos de INSS e IRRF aparecem na folha. Em dúvida sobre contracheque ou rescisão, consulte sindicato da categoria ou profissional de RH de confiança.',
    ],
  },

  // ── CONTRATAÇÃO · MEI ───────────────────────────────────────────────────
  {
    id: 'o-que-e-mei',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'O que é MEI?',
    answer: [
      'MEI (Microempreendedor Individual) é regime para profissional autônoma que formaliza atividade como pequeno empresário. Permite emitir nota fiscal, contribuir para previdência e faturar até o limite anual definido pelo governo (valor atualizado periodicamente no portal oficial).',
      'Abertura é gratuita e online pelo portal do empreendedor em https://www.gov.br/empresas-e-negocios/pt-br/empreendedor. Verifique sempre limites e regras vigentes no site gov.br.',
    ],
  },
  {
    id: 'designer-pode-ser-mei',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'Designer pode ser MEI?',
    answer: [
      'Design como atividade intelectual não está na lista oficial de ocupações MEI. Muitas profissionais usam CNAE adjacente (edição, fotografia, instrutura de informática, entre outras), o que é prática comum, porém com risco fiscal se a atividade real não corresponder ao cadastro.',
      'Empresas contratantes muitas vezes não questionam, mas você assume responsabilidade sobre enquadramento. Avalie com contador antes de abrir e saiba que multas podem ocorrer se a fiscalização identificar divergência.',
    ],
  },
  {
    id: 'custo-mei-mensal',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'Quanto custa manter MEI por mês?',
    answer: [
      'O custo principal é a guia DAS mensal do Simples Nacional, com valor fixo que varia conforme tipo de atividade (comércio, serviço ou ambos). Valores mudam quando o salário mínimo ou regras do Simples são atualizados.',
      'Gere o boleto apenas no portal oficial do empreendedor. Desconfie de cobranças por e-mail ou carta logo após abrir CNPJ.',
    ],
  },
  {
    id: 'vale-pj-junior',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'Vale a pena ser júnior na modalidade PJ?',
    answer: [
      'Depende do valor oferecido versus custos: DAS mensal, contabilidade (se contratar), impostos e ausência de benefícios CLT. Salário júnior PJ baixo pode ficar menor que CLT depois dos descontos fixos.',
      'Faça conta comparando proposta PJ com equivalente CLT, incluindo férias, 13º e FGTS que você deixa de ter. MEI costuma ser opção mais simples que ME para começar, mas não elimina a necessidade de calcular.',
    ],
  },
  {
    id: 'empresa-pede-mei',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'A empresa pediu que eu abra MEI. O que preciso saber?',
    answer: [
      'Documentação varia: cartão CNPJ, inscrição municipal para emitir NFS-e, certidões negativas e dados bancários. Algumas empresas pedem conta PJ, embora MEI não seja obrigada por lei a tê-la.',
      'Nota fiscal para pessoa jurídica costuma ser obrigatória. Cada município tem processo próprio de emissão; em São Paulo, por exemplo, exige senha web na prefeitura. Organize documentos com validade, pois pedem versão recente.',
    ],
  },
  {
    id: 'nota-fiscal-golpes-boleto',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'Como emitir nota fiscal e evitar golpes de boleto?',
    answer: [
      'Acesse sempre o sistema da prefeitura ou portal gov.br para emitir NFS-e e pagar DAS. Golpistas enviam boletos falsos por e-mail ou carta logo após abertura do CNPJ. Contribuição sindical, se aparecer, é voluntária.',
      'Desconfie de cobrança fora dos canais oficiais. Guarde comprovantes de notas emitidas e relatório mensal de receitas, exigência do MEI para manter regularidade.',
    ],
  },

  // ── CONTRATAÇÃO · comparativo ───────────────────────────────────────────
  {
    id: 'vantagens-riscos-clt',
    categoryId: 'contratacao',
    subgroup: 'comparativo',
    question: 'Quais vantagens e riscos da contratação CLT?',
    answer: [
      'Vantagens: carteira assinada, 13º, férias, FGTS, seguro-desemprego em demissão sem justa causa, licenças e jornada regulada. Previsibilidade de benefícios e proteção trabalhista.',
      'Riscos ou limitações: descontos na folha, salário base pode parecer menor que PJ bruto, menos flexibilidade de horário em alguns contratos e dificuldade de negociar aumento fora de convenção ou mérito formal.',
    ],
  },
  {
    id: 'vantagens-riscos-pj-mei',
    categoryId: 'contratacao',
    subgroup: 'comparativo',
    question: 'Quais vantagens e riscos de PJ ou MEI?',
    answer: [
      'Vantagens: valor hora ou mensalidade bruta costuma ser maior, flexibilidade de horário conforme contrato, impostos enxutos no MEI e possibilidade de atender vários clientes.',
      'Riscos: sem FGTS, férias ou 13º garantidos, teto de faturamento MEI, responsabilidade fiscal sobre CNAE, aposentadoria proporcional ao que recolher e instabilidade se contrato encerrar. Compare PJ bruto com CLT líquido mais benefícios antes de decidir.',
    ],
  },
  {
    id: 'quando-escolher-clt-ou-pj',
    categoryId: 'contratacao',
    subgroup: 'comparativo',
    question: 'Quando escolher CLT ou PJ/MEI?',
    answer: [
      'CLT tende a compensar quem prioriza estabilidade, benefícios e primeiro emprego formal na área. PJ ou MEI pode valer quando proposta financeira cobre custos fixos, impostos e gap de benefícios com folga.',
      'Júnior em PJ exige conta honesta: valor baixo com MEI pode ser armadilha. Negocie prazo de experiência, escopo e revisão salarial. Consultoria contábil ajuda a comparar cenários concretos com números reais.',
    ],
  },

  // ── GUIA ────────────────────────────────────────────────────────────────
  {
    id: 'o-que-e-o-guia',
    categoryId: 'guia',
    subgroup: 'guia',
    question: 'O que é o Guia do Product Designer da VagasUX?',
    answer: [
      'Curadoria gratuita de trilhas, conteúdos, glossário e FAQ para quem está entrando ou reorganizando estudos em Product Design. A VagasUX reúne o que importa para você não se perder no excesso de link.',
      'O Guia complementa vagas, comunidade e outros produtos da VagasUX. Funciona como ponto de partida para orientar estudo e linguagem do mercado, com prática e comunidade além.',
    ],
  },
  {
    id: 'guia-substitui-curso',
    categoryId: 'guia',
    subgroup: 'guia',
    question: 'O Guia substitui um curso?',
    answer: [
      'O Guia organiza caminhos e traduz termos do mercado. Curso ou mentoria complementam com exercício guiado, feedback individual e ritmo estruturado.',
      'Use trilhas para sequenciar estudo, glossário para decifrar siglas e FAQ para dúvidas de carreira. Combine com prática e troca na comunidade.',
    ],
  },
  {
    id: 'como-usar-trilhas',
    categoryId: 'guia',
    subgroup: 'guia',
    question: 'Como usar as trilhas do Guia?',
    answer: [
      'Escolha trilha alinhada ao seu momento: entender o básico, portfólio, research ou content design. Siga ordem sugerida ou pule o que já domina.',
      'Marque o que leu, aplique em projeto real e volte quando precisar aprofundar. Trilha funciona como roteiro flexível: adapte ordem e ritmo ao que você já domina.',
    ],
  },
]
