import type { GuiaFaqItem } from './guiaFaq'

export const guiaFaqItems: GuiaFaqItem[] = [
  // ── GERAL · rotina ──────────────────────────────────────────────────────
  {
    id: 'diferenca-ui-ux-pd',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'Qual a diferença entre UI Designer, UX Designer e Product Designer?',
    answer: [
      'UI Designer: responsável pela interface visual de interação, indo muito além de uma tela bonita. Pensa em cores, acessibilidade, microinterações, grids, fontes e tudo que for relacionado a uma interface que traduza a experiência de forma eficiente.',
      'UX Designer: pensa na melhor experiência para o usuário. No dia a dia pode fazer pesquisas, mas o foco será no desenho da solução, criando fluxos e wireframes, geralmente chegando a protótipos de baixa, média ou alta fidelidade.',
      'Product Designer: pensa desde a pesquisa até o visual. Foca no desenvolvimento e evolução do produto, acompanhamento e propõe melhorias constantes. Vale rever a [página introdutória do Guia](/guia) e as trilhas sobre a área.',
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
      'O que varia mais é o foco que você terá dentro do contexto em que foi inserido.',
      'Agências: no geral costumam focar muito na entrega e não tanto no processo, por conta dos prazos e contratos, então você acaba tendo menos tempo pra pesquisar e validar. Você lida com projetos e clientes diversos, ou seja, não está atrelado a um produto específico.',
      'Empresas: varia muito dependendo da estrutura do time. No geral você estará dentro de uma squad lidando com um produto ou serviço específico. Startups: o ritmo costuma ser bem frenético e acelerado, pois a necessidade de crescer é gigante, então todo esforço e dedicação será bem visto. Foco contínuo em um produto dentro de uma squad.',
      'Consultorias: pode ou não funcionar como uma agência, mas existem consultorias especializadas onde você atua como designer fixo dentro de um time, como seria em uma empresa ou startup comum. No fim não tem como rotular sempre. Vale questionar para saber mais sobre o dia a dia de cada empresa e entender se combina com você.',
    ],
    seeAlso: [{ term: 'Squad', glossarioId: 'squad' }],
  },
  {
    id: 'tempo-construcao-projeto',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'Quanto tempo leva, em média, a construção de um projeto de design?',
    answer: [
      'Geralmente, pensando em design, o estudo de uma nova funcionalidade em um app, por exemplo, pode levar por volta de duas a quatro semanas (1 a 2 sprints), levando em conta todo um processo de pesquisa, entrevistas, criação e validação.',
      'Esses projetos podem ser maiores ou menores dependendo do contexto e da experiência do time e dos profissionais envolvidos.',
    ],
    seeAlso: [{ term: 'Sprint', glossarioId: 'sprint' }],
  },
  {
    id: 'sem-demanda-o-que-fazer',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'O que fazer quando não tem demanda de design no momento?',
    answer: [
      'Não precisa virar uma pilha! 🔋 ⚡️ Primeiro veja se alguém do time, ou perto de você, precisa de ajuda com alguma coisa.',
      'Se estiver tudo tranquilo, use o tempo para conhecer melhor o produto ou serviço em que você atua: revise o que já foi feito, olhe o backlog e converse com o PO responsável.',
      'Vale trocar ideia também com Atendimento e Suporte. Mesmo sem demanda de design, essa galera fala com usuários todos os dias e costuma trazer dores reais. Com isso, você já pode mapear oportunidades e sugerir pontos para a próxima sprint.',
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
    question: 'Como se proteger de empresas "cilada" e vagas arrombadas?',
    answer: [
      'Ao ver um anúncio de uma vaga, tente saber mais sobre a empresa. Pesquise o nome no Google, veja se ela tem site, se está no LinkedIn, se tem redes sociais, veja se há avaliações no próprio Google e em plataformas como o Glassdoor. No LinkedIn, veja se os funcionários desta empresa parecem perfis reais.',
      'Fique atento em como a vaga foi divulgada e as informações contidas:',
      '• Verifique se há o nome da empresa e informações sobre ela.',
      '• Veja se há descrição do tipo de trabalho, o que esperam do profissional, além de salários e benefícios. Descrições muito vagas e sem objetivo podem indicar problemas.',
      '• Fique atento à plataforma em que a vaga foi publicada. Alguns sites de anúncios de vagas são mais estabelecidos e confiáveis que outros.',
      'Saiba o que procura e o que a média do mercado oferece:',
      '• Tenha em mente a média salarial para a posição e nível que você está aplicando. Propostas muito abaixo ou muito acima são indicativos de possíveis problemas.',
      '• Saiba o que o mercado pede para a posição e nível que procura. Tome cuidado com descrições que pedem atividades muito fora do escopo (por exemplo, UX com habilidades de animação 3D) ou que não estejam de acordo com o nível (por exemplo, um Júnior com atividades de liderança).',
      'E não esquece de acompanhar nossas [Oportunidades](/oportunidades) e [Vagas para iniciantes](/vagas-para-iniciantes).',
    ],
  },
  {
    id: 'salario-junior-media',
    categoryId: 'geral',
    subgroup: 'rotina',
    question: 'Qual a média salarial para designers iniciantes?',
    answer: [
      'O salário de um júnior sempre pode variar porque precisa considerar o tipo de contratação e a região. Para sermos justos e de fato trazer alguma estimativa e orientação pra quem tá perdido: pensando na contratação PJ pode ser entre R$ 3 mil e R$ 5,5 mil, e na contratação CLT entre R$ 2 mil e R$ 4,5 mil. Mas lembrando que é uma estimativa superficial. Quem vai definir isso é você, o contexto da empresa envolvida e a região.',
      'Por isso é sempre bom comparar referências e ver o que fizer mais sentido pro seu momento profissional: [Glassdoor: Ux Designer Jr em São Paulo](https://www.glassdoor.com.br/Sal%C3%A1rios/s%C3%A3o-paulo-ux-designer-jr-sal%C3%A1rio-SRCH_IL.0,9_IM1009_KO10,24.htm), [Salário Transparente](https://salariotransparente.com.br/) e o [Panorama UX da VagasUX](https://vagasux.com.br/a-comunidade/panorama).',
      'Na negociação, considere benefícios, crescimento e tipo de contrato junto com o valor bruto.',
    ],
  },

  // ── GERAL · squads ──────────────────────────────────────────────────────
  {
    id: 'como-funcionam-squads',
    categoryId: 'geral',
    subgroup: 'squads',
    question: 'Como funcionam as squads?',
    answer: [
      'Squad é o nome do modelo organizacional que separa os funcionários em pequenos grupos multidisciplinares com objetivos específicos. Por exemplo, um profissional de produto atua no mesmo time que um desenvolvedor, assim como um designer com outra pessoa de dados. Juntos, eles têm uma tarefa a cumprir e autonomia suficiente para tomar decisões.',
    ],
    seeAlso: [{ term: 'Squad', glossarioId: 'squad' }],
  },
  {
    id: 'papeis-squad-dia-a-dia',
    categoryId: 'geral',
    subgroup: 'squads',
    question: 'O que faz cada pessoa da squad no dia a dia?',
    answer: [
      'Geralmente em uma squad temos os profissionais abaixo:',
      'Product Owner (PO): representa os interesses de todos os envolvidos, define as funcionalidades do produto e prioriza os itens do Product Backlog. Garante que o backlog seja visível, transparente e claro para todos, e que o time de desenvolvimento entenda os itens no nível necessário.',
      'Scrum Master (SM): ajuda o time a analisar a priorização do backlog, monitorar o andamento da sprint e refinar os itens. O Product Owner se compromete a não impor novos requisitos ao time durante a sprint em andamento.',
      'Desenvolvedores: serão seus aliados para construir uma boa experiência do produto. Vão se dividir em especialidades como front-end e back-end, codar e implementar o que foi definido com o designer e a squad.',
      'Quality Assurance (QA): responsável por testar e avaliar todo o processo e fluxos criados pra garantir a qualidade final do produto. É muito importante ter essa validação antes de passar para produção.',
      'Designer (UI/UX): será o seu papel como designer responsável do time para garantir uma boa relação entre experiência, qualidade e visual. Dependendo do tamanho da squad, podem entrar pesquisa, dados, atendimento, financeiro, marketing e por aí vai.',
    ],
    seeAlso: [
      { term: 'Squad', glossarioId: 'squad' },
      { term: 'Product Owner', glossarioId: 'product-owner' },
      { term: 'Scrum Master', glossarioId: 'scrum-master' },
      { term: 'Product Designer', glossarioId: 'product-designer' },
      { term: 'QA', glossarioId: 'qa' },
      { term: 'Backlog', glossarioId: 'backlog' },
      { term: 'Frontend', glossarioId: 'frontend' },
      { term: 'Backend', glossarioId: 'backend' },
    ],
  },
  {
    id: 'comunicacao-cerimonias-squad',
    categoryId: 'geral',
    subgroup: 'squads',
    question: 'Como funciona a comunicação e as cerimônias da squad?',
    answer: [
      'Temos algumas reuniões de alinhamento chamadas cerimônias. Elas funcionam pra facilitar a comunicação frequente entre o time e planejar como será feita a sprint.',
      'Daily: reunião diária onde o time se reúne por alguns minutos para contar o que anda fazendo. A ideia é deixar claro se alguém precisa de ajuda para não perder tempo e prejudicar a sprint.',
      'Refinamento: alinhamento prévio para contextualizar as histórias que vão entrar na sprint, explicá-las brevemente e iterar antes da planning, para evitar que a próxima reunião seja muito longa e cansativa.',
      'Planning: reunião importante da squad, que pode demorar horas, mas a ideia é que fique entre 1 e 2 horas. As histórias são estimadas pelo time de tecnologia e fatiadas durante a cerimônia. Nesse momento será avaliado o que cabe e será implementado na sprint atual.',
      'Retro: chegando no fim da sprint o time tem uma retrospectiva, que funciona como feedback em grupo para entender o que foi bom, o que pode melhorar e quais ações tomar na próxima sprint. A ideia é ser um ciclo constante de evolução a cada nova rodada.',
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
    question: 'Como funciona o entregável de uma sprint para o designer?',
    answer: [
      'De forma geral você precisa documentar seu processo de discovery e ideação inicial. Pode ser feito no Miro, Whimsical, Notion ou qualquer outro local compartilhado. Estruture e mapeie suas ideias e desenvolvimento por lá. Isso será bacana de ser compartilhado como um possível entregável de estudo e análise.',
      'Depois, quando começar a montar wireframes e protótipos, você nem sempre vai precisar detalhar e compartilhar tudo. É importante validar os principais insights do teste de usabilidade e, sendo aprovado, compartilhar o protótipo final para os devs junto com um possível handoff, para que seja possível inspecionar estilos.',
      'Você provavelmente também vai precisar reunir esses entregáveis dentro de alguma plataforma de gestão de times como o Jira. Lá terão as histórias da sprint e é importante especificar cada entregável para que fique claro para todos do time e de fácil acesso.',
      'Depois de entregue e aprovado, não deixa de acompanhar o andamento da tarefa após a implementação pra garantir que deu tudo certo e teve uma avaliação positiva.',
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
      'Pra mim é uma questão de maturidade. Todos os níveis devem ser capazes de projetar entregáveis válidos para a empresa de alguma forma, mas com a variável de tempo e acompanhamento.',
      'Um júnior pode não saber como fazer alguma coisa, mas vai perguntar e ser guiado por alguém mais experiente e, com isso, conseguirá fazer algo novo e aprender com essa experiência. Um pleno consegue cuidar de um projeto de forma mais autônoma.',
      'A linha tênue entre pleno e sênior, ao meu ver, se dá no jeito de pensar. Um sênior deve pensar mais no coletivo de forma abrangente: na visão do time, em compartilhar conhecimento com os demais, pensar no todo.',
    ],
  },
  {
    id: 'cobranca-junior-dia-a-dia',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'Qual o nível de cobrança no dia a dia de uma profissional júnior?',
    answer: [
      'Depende da empresa e da cultura, mas no geral as exigências serão balanceadas de acordo com o nível do profissional. Isso não quer dizer que o júnior não será avaliado, mas a ideia é que ele tenha acompanhamento junto do time e de profissionais mais experientes pra ajudar e orientar nessa jornada.',
      'Sobre entregáveis e prazos, também depende do ritmo do time. Sua qualificação para ter sido aceito na vaga mostra que você é capaz de entregar com qualidade, porém sob orientação. Então mostre sua presença, aproveita pra aprender, trocar e entregar o que foi pedido.',
      'Se acha que está ficando sobrecarregado logo no começo, vale avisar e compartilhar seu sentimento. Não aceite algo que você acha que não vai conseguir entregar: seja sincero. Às vezes é mais questão de conversar do que de um prazo específico. E não tem problema travar ou ficar na dúvida de como seguir. Pesquise, tire dúvidas e lembre que estamos aqui pra te ajudar sempre que possível nos [canais oficiais da comunidade](/comunidade).',
    ],
    seeAlso: [{ term: 'Squad', glossarioId: 'squad' }],
  },
  {
    id: 'expectativas-processo-seletivo',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'Como lidar quando as expectativas no trabalho diferem do processo seletivo?',
    answer: [
      'Tente entender quais são os gaps entre as expectativas que foram criadas no processo seletivo e as expectativas que estão surgindo. Entenda quais estão muito fora das suas capacidades ou do escopo de trabalho.',
      'Converse com sua liderança, coordenação ou supervisão sobre essas expectativas e alinhe o que for necessário. Alinhamento é tudo! Mas caso ainda assim você se sinta insatisfeito, talvez seja hora de procurar uma nova oportunidade e encontrar um local que te motive a continuar crescendo.',
      'Nem sempre depende só de você. Às vezes a cultura da empresa não ajuda muito e é preciso mudar por você pra não prejudicar sua saúde mental, motivações e dia a dia. Também é bom evitar se tornar aquele profissional que só reclama, mas continua no mesmo ambiente sem fazer nada para reverter o cenário. A gente sabe, ou deveria saber, o que é melhor pra nós mesmos, então bora correr atrás disso!',
    ],
  },
  {
    id: 'investimento-aprendizado-junior',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'As empresas investem no aprendizado de profissionais júniores?',
    answer: [
      'Uma das coisas que varia de empresa pra empresa, dependendo da maturidade e estrutura. No geral, empresas que estão buscando profissionais júniores já mostram um pouco mais de maturidade pelo simples fato de entenderem a necessidade de contribuir com o crescimento saudável do mercado e evitar a sobrecarga de sêniors e leads.',
      'Quanto maior for essa noção, mais provável que a empresa queira investir em orientação e trazer conhecimentos mais acessíveis para todo o time de design. Por isso sempre vale pesquisar sobre a empresa e buscar saber um pouco mais sobre sua cultura e valores.',
    ],
  },
  {
    id: 'o-que-junior-nao-deve-fazer',
    categoryId: 'geral',
    subgroup: 'junior',
    question: 'O que uma júnior deve evitar no dia a dia?',
    answer: [
      'Se acomodar com a rotina e virar um profissional tarefeiro, ou seja, aquele que só faz o que é pedido, que não tem interesse e falta de iniciativa para puxar alguma coisa sozinho. Você não precisa se mostrar presente o tempo todo, mas o contrário disso, estar ausente demais, pode ser prejudicial pra você sim.',
      'Visibilidade é muito importante, principalmente pra quem tá começando. A dica é conversar bastante com o time e supervisores, tirar dúvidas e se mostrar participativo sempre que possível.',
    ],
  },

  // ── GERAL · remoto ──────────────────────────────────────────────────────
  {
    id: 'como-funciona-trabalho-remoto',
    categoryId: 'geral',
    subgroup: 'remoto',
    question: 'Como funciona o trabalho remoto?',
    answer: [
      'Ele pode ser full, ou seja, um trabalho remoto completo sem prazo para acabar, onde você terá que se adaptar com a rotina e comunicação à distância e poderá trabalhar independente da sua localidade. Ou parcial, onde existe home office a cada tantos dias da semana e você precisará comparecer de vez em quando na empresa.',
      'O trabalho remoto funciona da mesma forma que o trabalho presencial, porém as ferramentas estarão mais presentes no dia a dia, como as de comunicação e co-criação.',
    ],
  },
  {
    id: 'junior-trabalho-remoto',
    categoryId: 'geral',
    subgroup: 'remoto',
    question: 'Existe restrição para contratar júnior em trabalho remoto?',
    answer: [
      'Não existe uma regra que proíba, porém o que acontece é empresas terem receio em contratar profissionais muito iniciantes de forma remota por não terem um controle maior das atividades e por muitas delas ainda não serem amadurecidas o suficiente para gerenciar de forma online.',
      'Por isso procure por empresas que têm um diálogo aberto, acessível e que realmente estejam dispostas a dedicar algum tempo para te orientar e te ajudar a trilhar essa jornada como iniciante.',
    ],
  },

  // ── PREPARAÇÃO · linkedin ───────────────────────────────────────────────
  {
    id: 'linkedin-titulo-ui-ux-pd',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'No LinkedIn, coloco UI, UX ou UI/UX no título?',
    answer: [
      'Um bom UI designer, por exemplo, também contribui pra experiência e usa esse conhecimento em UX pra criar interfaces que atinjam bons objetivos. No LinkedIn, compensa mais você manter só um título, como UI Designer, e depois complementar que manja de UX também. Isso pensando em SEO pra ser encontrado por recrutadores.',
      'Agora, pensando para quem está começando e ainda não tem muita noção do foco que deseja seguir, vale colocar Product Designer, que seria um UI e UX, e na descrição especificar com mais detalhes.',
    ],
  },
  {
    id: 'linkedin-transicao-carreira',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'Como adequar o LinkedIn para transição de carreira?',
    answer: [
      'Por via de regra, tenha um perfil completo e preenchido com todas as suas experiências passadas, cursos, formação acadêmica e habilidades. Os pontos-chave que podem ser trabalhados para ajudar na transição são:',
      'Título: prefira um título único e conciso, foque na posição que você almeja e retire os títulos antigos que você possa ter tido. O título é o seu posicionamento e é uma das primeiras coisas vistas por recrutadores. Alguém com "UX/UI designer | Fotógrafo | Editor de vídeos | Ilustrador" no título vai aparentar falta de foco e provavelmente será deixado de lado.',
      'Sobre: talvez uma das partes mais difíceis de preencher, mas com certeza uma das que mais faz alguém se destacar. Deixe claro quem você é, seu momento profissional e o que busca no LinkedIn. Este é um bom momento para conectar como suas experiências anteriores podem agregar à nova posição. Por exemplo: "Como designer gráfico aprendi sobre espaçamentos, proporções e usos de fontes que me trarão uma sólida base para atuar como UI designer". Não é necessário fazer um texto muito grande: na medida do possível, tente ser sucinto. Seja íntegro e verdadeiro.',
      'Destaques: deixe links, posts e documentos que façam sentido com a vaga que procura. Evite deixar portfólios antigos de outras áreas. Em experiências passadas, coloque uma breve descrição sobre o antigo trabalho e quais atribuições você tinha, de preferência em tópicos. Isso dá pistas de habilidades que podem ser úteis para a nova área.',
      'Competências: deixe em destaque as que fazem sentido para a vaga. Como provavelmente ainda não terá experiência, coloque as três que mais te interessam e que você esteja estudando mais. Deixe a opção "Open to Work" habilitada: isto deixa seu perfil mais encontrável por recrutadores.',
    ],
  },
  {
    id: 'linkedin-perfil-competitivo',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'Como estruturar um LinkedIn competitivo?',
    answer: [
      'Quanto mais completo, melhor. Não deixe de colocar suas experiências, projetos paralelos, cursos e afins. Você pode contar um pouco de cada projeto, assegurar-se de que seus contatos e informações estão atualizados e ter algum link que leve para o seu portfólio e/ou projeto mais recente.',
      'Pedir recomendações também é uma boa pedida caso você tenha feito algum projeto colaborativo e/ou já possua experiência anterior. Também é bacana seguir empresas, instituições de ensino e perfis de profissionais relevantes da área pra acompanhar mais de perto o que rola no mercado, além de participar e contribuir com comunidades da área.',
    ],
  },
  {
    id: 'portfolio-alinhado-linkedin',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'O que significa manter portfólio alinhado ao LinkedIn?',
    answer: [
      'Significa que se você diz que é Product Designer, precisa ter projetos atuais que remetam a esse contexto. Não adianta fazer um LinkedIn todo caprichado e seu portfólio não refletir isso. Mantenha ambos atualizados constantemente.',
    ],
  },
  {
    id: 'networking-linkedin',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'Como criar networking com outros designers pelo LinkedIn?',
    answer: [
      'Criar networking no LinkedIn não difere muito do que seria criar networking no mundo físico: estamos lidando com pessoas, apesar de estarmos vendo apenas uma tela. Um costume muito difundido é pesquisar por uma área e ir adicionando profissionais que aparecerem, mas ter muitos contatos não necessariamente é um bom networking. Nestes casos, mesmo que o outro lado sempre aceite, é muito provável que você vire apenas um número dentro da lista de contatos, sem qualquer valor para o dono do perfil.',
      'A verdade é que não existe uma fórmula única para se criar um bom networking, mas bom senso e educação são sempre bem-vindos: trate os outros como você gostaria de ser tratado.',
      'Há algumas abordagens que podem ajudar a conseguir engajar uma boa conversa. Pergunte sobre a empresa ou a área em que a pessoa trabalha. Como complemento, peça referências de conteúdo. Comente algum artigo, trabalho ou post que alguém tenha feito, trazendo impressões, questões ou complementos para gerar discussão. Você pode pedir feedback sobre o portfólio. Faça correlações entre experiências suas e da pessoa para trazer pontos de interesse mútuo.',
      'Independente da forma que resolver abordar um novo contato, lembre-se de contar um pouco da sua própria trajetória para que a pessoa saiba com quem está falando. Ninguém é obrigado a te fazer nenhum favor, então pedidos de feedback de portfólio, por exemplo, devem ser feitos com muito cuidado e nunca cobrar que a pessoa te responda. E não espere só receber: sempre que possível, traga também algo a oferecer aos seus contatos. No final, é como a Viviane Delvequio fala: [Seja uma história](https://medium.com/ux-globo-com/voc%C3%AA-me-adicionou-no-linkedin-nos-%C3%BAltimos-6-meses-ent%C3%A3o-voc%C3%AA-fez-parte-de-um-experimento-20a471399543).',
    ],
  },
  {
    id: 'projetos-curso-hackathon-linkedin',
    categoryId: 'preparacao',
    subgroup: 'linkedin',
    question: 'Posso incluir projetos de curso, hackathon ou voluntariado no LinkedIn?',
    answer: [
      'Colocar é preciso! Você pode colocar como experiência por ser algo que está construindo mesmo que não seja de forma remunerada. Projetos de curso, estudos de caso, podem ir na área de Projetos do LinkedIn e linkar com algum dos cursos que fez, dando mais detalhes do andamento do projeto e metodologias utilizadas.',
      'O mesmo vale para projetos de voluntariado e hackathons. Vá no seu perfil do LinkedIn e clique em Adicionar seção > Projetos. Preencha as especificações do projeto e faça um link atrelado ao curso, workshop ou evento desejado, que precisa ser preenchido previamente para ser possível fazer a associação.',
    ],
  },

  // ── PREPARAÇÃO · cv ─────────────────────────────────────────────────────
  {
    id: 'cv-o-que-incluir',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'O que não pode faltar no currículo?',
    answer: [
      'Um pouco sobre você e suas principais aspirações; suas experiências anteriores, caso tenha, liste as principais que forem válidas mencionar para aquela vaga em específico; suas habilidades e habilidades ainda em progresso; cursos e educação; seus projetos paralelos e voluntariado.',
      'Deixe destacado o que você já fez com acesso rápido para portfólio e projetos que mostrem seus processos e entregáveis. Comente o que sabe e tem estudado, liste as ferramentas que usa (evite citar as que não usa com frequência), quais cursos fez e se sabe algum idioma. Português fluente não é necessário informar.',
      'Importante também pensar na hierarquia de informação: espaçamento entre os elementos, tamanho e formato de fontes não exageradas. Um CV simples, bem diagramado e com boas informações já é o suficiente.',
    ],
  },
  {
    id: 'cv-o-que-excluir',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'O que devo deixar de fora do currículo?',
    answer: [
      'Vale evitar aquelas barrinhas de porcentagem sobre quanto você manja de alguma ferramenta específica. Pode parecer visualmente bacana, mas na prática não é muito bem visto. Coloque apenas ferramentas que você tem conhecimento e/ou sabe se virar. Se você não se sente seguro com alguma delas, é só não colocar.',
      'Também não há necessidade de colocar ferramentas que você conheça, mas que não tenham nada a ver com a vaga que está aplicando. Evite textos muito longos ou explicações não muito claras. Tente ser o mais conciso possível: menos é mais.',
    ],
  },
  {
    id: 'cv-simples-vs-chamativo',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'Currículo simples ou design chamativo para UX?',
    answer: [
      'Polêmico. Ao meu ver, o formato simples funciona muito bem. O design chamativo pode acabar levando a atenção para o que não importa. O foco deve ser o seu conteúdo sempre: experiências e habilidade.',
      'Isso não significa que o CV não possa ser bonito, mas procure não exagerar nas cores, diagramação e firulas. Afinal, estamos desenhando um CV sobre nós, porém ele precisa agradar antes de tudo outras pessoas, não nós mesmos. Então quanto mais simples, mais chances de se chegar lá.',
    ],
  },
  {
    id: 'carta-apresentacao',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'Carta de apresentação é necessária?',
    answer: [
      'Quando estiver se aplicando em uma vaga que tem a opção de incluir uma carta, sempre vale preencher sim. A "carta" nada mais é do que um textinho pra contar um pouco sobre você de forma mais casual e deixar claro seus objetivos e porque você acredita ser uma boa escolha pra vaga, o famoso vender o peixe.',
      'O mesmo vale para quando você se aplica pra uma vaga por e-mail e envia seu CV ou portfólio. É muito importante fazer essa apresentação no e-mail e não apenas enviar seus links. Isso deixa você melhor apresentável, as pessoas podem te conhecer um pouquinho melhor e você aproveita pra reforçar seu discurso e se destacar.',
    ],
  },
  {
    id: 'mentoria-no-cv',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'Posso colocar mentoria no currículo?',
    answer: [
      'Se você estiver participando de algum programa de mentoria contínua, pode colocar sim, indicando o nome do programa e a pessoa mentora. Da mesma forma como a pessoa mentora pode indicar que faz mentorias para o programa.',
      'Se for uma mentoria única, acho que não tem necessidade de citar, mas pode compartilhar como atividade no seu LinkedIn, por exemplo, sobre seus aprendizados e experiência com a mentoria.',
    ],
  },
  {
    id: 'eventos-no-cv',
    categoryId: 'preparacao',
    subgroup: 'cv',
    question: 'Vale indicar eventos inscritos ou participados no currículo?',
    answer: [
      'Sobre eventos, também podem ser compartilhados nas suas atividades no LinkedIn, mas não acho que faz sentido indicar no CV, a não ser que seja um evento com workshop ou trilhas com aplicação prática.',
    ],
  },

  // ── PREPARAÇÃO · portfólio ──────────────────────────────────────────────
  {
    id: 'portfolio-faz-diferenca-iniciante',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Portfólio faz diferença para vagas de iniciante?',
    answer: [
      'Com certeza! Muita gente acredita que apenas se aplicando para uma vaga e enviando um CV simples já é o suficiente para ser chamado para a entrevista, ou enviando um portfólio desatualizado, mas na prática dificilmente isso vai acontecer e não é recomendado.',
      'A maioria das empresas pega o portfólio como fator eliminatório e essencial pra decidir se vale a pena entrar em contato contigo ou não. Por isso é muito importante pensar nele com carinho e caprichar nos cases que você vai destacar.',
    ],
  },
  {
    id: 'portfolio-sem-experiencia',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Como montar portfólio sem experiência profissional em UX?',
    answer: [
      'Essa pergunta sai tanto que tem até artigo só pra ela: [Como montar um portfólio de UX se eu ainda não trabalho com UX?](https://brasil.uxdesign.cc/como-montar-um-portf%C3%B3lio-de-ux-se-eu-ainda-n%C3%A3o-trabalho-com-ux-c5ec6434de20) Vale dar uma olhada.',
      'A grande maioria dos profissionais de UX que estão hoje no mercado já se depararam com essa situação. É um momento de pânico, de certa forma. Você percebe que, para aplicar para uma vaga de UX, "portfólio" é quase sempre um campo obrigatório. Vale dar uma olhada também na nossa sessão de [Voluntariado](/voluntariado) e nas trilhas de portfólio do [Guia](/guia/trilhas/portfolio).',
    ],
  },
  {
    id: 'primeiro-case-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Como estruturar meu primeiro case de portfólio?',
    answer: [
      'Começa pelo começo: procura seguir um passo a passo de algum curso ou de alguma iniciativa. Pensa no desafio que você vai querer focar, que problema pensa em resolver e começa a pesquisar bastante sobre isso. Quando achar que já tem um mínimo de informações necessárias (Desk Research), procura por referências relacionadas com o seu objetivo e faz uma pesquisa por principais funcionalidades e possíveis insights (Benchmarking).',
      'Depois você vai precisar pensar em Matriz CSD, Personas, Jornada do Usuário e por aí vai. Muito importante falar com outras pessoas e pensar em pesquisas quanti e quali pra ter mais embasamento no seu estudo. Tendo isso feito, parta para o wireframe em baixa fidelidade e comece a planejar como você imagina a sua solução.',
      'Você pode criar um protótipo navegável e fazer um teste de usabilidade para validá-lo. Vale compartilhar os insights que você notar com esse estudo. Depois de avaliar tudo, capricha na UI e nos ajustes finais. Não esquece de contar o que você aprendeu com o estudo e quais seriam os próximos passos caso fosse um projeto a ser implementado de fato. Parece simples, mas essas etapas levam tempo e cada vez que você pratica aprende um pouco mais. Se dedique em cada etapa e faça com calma.',
      'Não esqueça de envolver a [comunidade](/comunidade) para trocar feedbacks e tirar dúvidas sempre que achar válido. Estamos aqui pra isso.',
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
      'Destaque sua experiência: inclua estudos de caso que destaquem sua gama de experiências e habilidades. Mostre seu processo de ponta a ponta e com clareza sobre o problema do usuário e a solução final. Isso pode incluir desde esboços, wireframes, protótipos a mockups finais.',
      'Esclareça sua função: identifique claramente sua função e impacto em cada estudo de caso, principalmente se foi um trabalho em grupo, e destaque quaisquer colaborações multifuncionais.',
      'Inclua recursos visuais e explicações: compartilhe recursos visuais e texto em cada estudo de caso para descrever todo o seu processo de resolução de problemas. Considere infográficos, diagramas e outros recursos visuais para rapidamente comunicar ideias e contar uma história.',
      'Forneça contexto: certifique-se de que o portfólio possa ser visto, que a navegação esteja ok e que fique claro o problema e a solução que você trouxe. Pra simplificar, faça algumas perguntas pra si mesmo: meu portfólio é fácil de acompanhar? É amigável? Cada estudo de caso reflete como eu conduzo meu pensamento de design e processo? O estilo visual reflete meu nível de habilidade e atenção aos detalhes?',
    ],
  },
  {
    id: 'quantos-cases-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Quantos cases preciso no portfólio?',
    answer: [
      'Não tem uma regra, mas seria ideal para quem está começando entre dois a três estudos de caso completos para ser possível analisar a forma que você pensa e trabalha em contextos diferentes. Mais de cinco não é muito recomendado para não perder o foco, a não ser que você já seja um profissional experiente e possua muitos projetos relevantes para apresentar.',
    ],
  },
  {
    id: 'manter-projetos-antigos',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Mantenho projetos antigos ou retiro do portfólio?',
    answer: [
      'Depende do projeto, vale ser crítico consigo mesmo. Se você está migrando da Publicidade para UX, por exemplo, não faz muito sentido deixar seus projetos de direção de arte e gráfico pois não irá contribuir em nada com seu novo foco em UX.',
      'É importante mostrar consistência no seu objetivo profissional. Se você está em migração pode até ter portfólios separados para mostrar suas experiências anteriores caso ache relevante e deixar um reservado apenas para seus novos projetos de UI/UX. Outra dica é aprender a desapegar. Às vezes um único projeto mais recente, bem feito e caprichado seguindo todas as boas práticas de UX já vale muito mais do que um projeto antigo onde você não tinha ainda uma boa visão e todos os conhecimentos necessários da área.',
    ],
  },
  {
    id: 'onde-hospedar-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Onde hospedar meu portfólio?',
    answer: [
      'Existem diversas plataformas pra você montar seu portfólio. UX Folio é um dos mais utilizados na área, plataforma simples com um case gratuito e planos pagos depois. Notion é uma boa opção: criar uma página personalizada e deixá-la pública, gratuito e com muitas funções.',
      'Behance é gratuito e útil para apresentações de cases, com embeds, imagens em largura total, carrosséis e apresentação de slides. Medium é uma forma simples de compartilhar cases como artigo. Figma também permite criar protótipo navegável do portfólio e compartilhar o link. Outras opções: Semplice, Adobe Portfolio, Squarespace, Format e Wix.',
      'Escolha onde você consegue manter e atualizar com facilidade. O melhor formato é aquele que você consegue publicar e manter atualizado.',
    ],
  },
  {
    id: 'nda-projetos-reais-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Posso divulgar projetos reais no portfólio com NDA?',
    answer: [
      'Depende do contrato e das restrições de divulgação. Vale ler sobre o tema neste artigo: [NDA não me deixa ter portfólio](https://deeploy-me.medium.com/nda-n%C3%A3o-me-deixa-ter-portfolio-7266adcc1e10).',
      'Redesign não oficial, projetos pessoais e estudos de curso preenchem portfólio enquanto você negocia o que pode mostrar de trabalho real.',
    ],
  },
  {
    id: 'recrutadores-querem-ver-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'O que recrutadores querem ver em um portfólio?',
    answer: [
      'Eles querem entender como você pensa, como lida com problemas e desafios e como funciona o seu processo criativo no geral. Por isso é importante detalhar bem todas as etapas do seu case como se estivesse contando uma história para outra pessoa, com começo, meio e fim.',
    ],
  },
  {
    id: 'exemplos-portfolio',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Onde encontrar bons exemplos de portfólios?',
    answer: [
      'Nos grupos de design e UX, no Medium, no LinkedIn... quanto mais você segue e participa dessas comunidades, mais vai encontrar boas referências pra se inspirar.',
      'Mas posso mencionar um case que é um dos meus top indicações nas mentorias: o case da Érika e da Thaísa, por estar impecável e bem completo. Se você pensa em montar um case de UI/UX, vale conferir: [Melhorando a experiência dos pais na busca de ajuda médica para seus filhos](https://hidemi-utida.medium.com/melhorando-a-experi%C3%AAncia-dos-pais-na-busca-de-ajuda-m%C3%A9dica-para-seus-filhos-e5f7b3579652).',
    ],
  },
  {
    id: 'hackathon-vale-a-pena',
    categoryId: 'preparacao',
    subgroup: 'portfolio',
    question: 'Hackathon vale a pena para quem está montando portfólio?',
    answer: [
      'Pra você que está criando um portfólio, é muito válido. Um hackathon costuma rolar em curta duração, dentro de 2 a 3 dias, geralmente próximo do final de semana. Você se inscreve na categoria que mais te interessa, geralmente design, dev e negócios. Basicamente a proposta é implementar uma ideia do começo ao fim em grupo.',
      'Você não precisa saber codar: apenas participe como designer e encontre um grupo que tenha devs. Geralmente a maioria é dev nos hackathons, então não é uma tarefa difícil. Pra formar os times, a própria gestão do hackathon costuma criar dinâmicas logo no começo. Caso você tenha se inscrito e ainda não tenha um time, procure os responsáveis pela organização.',
      'A experiência é única, vai ser bem puxado porque o prazo é curto e a proposta é dar o melhor em grupo e quebrar a cabeça pra chegar numa solução. O aprendizado é bem relevante pra ter uma ideia de como criar de forma colaborativa e com tempo limite, próximo do que seria uma experiência real na prática.',
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
      'Não priemos cânico! Você precisa ser você mesmo antes de tudo. Lembre-se: se você está fazendo entrevista é porque, no mínimo, gostaram do seu portfólio e CV. Esse pensamento vai te deixar um pouco mais tranquilo.',
      'Segura o nervosismo e pensa que o recrutador só quer te conhecer e saber que você é gente como a gente. Só não vale tentar passar a imagem de alguém que você não é, ter medo e/ou ficar com vergonha. Timidez e insegurança fazem parte de todos nós, cada um com seu grau, mas isso não pode ser uma barreira pra gente deixar de te conhecer e saber como você pensa e aspira, belê?',
      'E lembre-se, é apenas um papo aberto. Não tem certo ou errado! Uma coisa que ajuda muito também é treinar. Falar em voz alta sobre projetos e como você contaria sobre eles, sobre sua trajetória, como se vê daqui a alguns anos. Vale treinar o seu storytelling, possíveis perguntas que podem rolar como por que gostaria de trabalhar na empresa, com quais valores se identifica, possíveis defeitos e qualidades e por aí vai.',
      'E a boa notícia é que quanto mais entrevistas você fizer, mais prática vai ganhando com o tempo, aos poucos vai saber o que é mais bacana de falar, ser mais objetivo e se sentir mais confiante. Não desista!',
    ],
  },
  {
    id: 'experiencias-fora-ux-entrevista',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'Vale contar experiências fora de UI/UX na entrevista?',
    answer: [
      'Se você está em processo de migração e passou para uma entrevista, com certeza o recrutador sabe do seu contexto e vai querer ouvir sua história. Então sim, vale contar brevemente suas experiências anteriores, principalmente se identificar alguma relação que possa ser aproveitada para a área nova.',
      'Por exemplo, se você veio do design gráfico, tem algumas vantagens por ter noções de hierarquia visual, cores e afins. Mas independente, mesmo que não tenha relação, vale contar também pra contextualizar a pessoa sobre quem você é, sua jornada até aqui e deixar claro seus objetivos profissionais, explicar porque está migrando, suas motivações e o que espera na nova função.',
    ],
  },
  {
    id: 'o-que-perguntam-entrevista',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'O que costumam perguntar nas entrevistas?',
    answer: [
      'Porque você quer trabalhar na empresa? Motivações e interesse. Como você se vê daqui a X anos? Expectativas e planejamento. Pedir para falar sobre você ou contar alguma curiosidade.',
      'Temas interessantes pra conversar: quais desafios a equipe em que você vai entrar enfrenta; pontos fortes e fracos da equipe; quais características e posturas esperam de você ou de um júnior; para onde a empresa pretende ir nos próximos anos.',
    ],
  },
  {
    id: 'como-falar-sobre-mim',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'Como falar sobre mim na entrevista?',
    answer: [
      'Vale contar um pouco sobre seus hobbies, sua rotina de estudo, como você conheceu a empresa e chegou na vaga, suas aspirações. Abra o coração e se joga.',
    ],
  },
  {
    id: 'nao-saber-responder-entrevista',
    categoryId: 'processos-seletivos',
    subgroup: 'entrevistas',
    question: 'E se eu não souber responder alguma pergunta?',
    answer: [
      'Tranquilo ué! É muito mais a forma como você reage do que de fato se sabe responder ou não. Perguntaram algo que você não sabe? Responde assim: "Acho que eu não sei responder essa. Nunca passei por essa situação, mas tenho noção disso, daquilo..." Aproveita pra ser sincero, contextualizar seu cenário e contar o que você entende no geral, mesmo que não tenha experiência sobre ou não entenda 100%.',
      'Não sabemos de tudo e tá tudo bem.',
    ],
  },

  // ── PROCESSOS SELETIVOS · desafios ──────────────────────────────────────
  {
    id: 'por-que-testes-seletivos',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'Por que empresas pedem testes práticos além do portfólio?',
    answer: [
      'Nem sempre o portfólio é o suficiente pra entrar em uma empresa. Mesmo ele sendo super necessário, muitas ainda exigem algum tipo de teste ou case pra ser feito. Isso se dá pelo fato de as empresas gostarem de ter provações sobre determinadas skills dos candidatos.',
      'Geralmente querem entender como você lida com um contexto que não está familiarizado, em um prazo curto, sem muitas informações. Muitos vão pedir pra você apresentar esse case e contar quais foram suas decisões. Com isso a empresa vai julgar as escolhas que você fez, qual foi seu foco e como você vai defender suas ideias, não apenas avaliando a solução final. Assim funciona muito pra entender o lado das soft skills também, além do lado técnico e prático.',
    ],
  },
  {
    id: 'prazo-case-processo-seletivo',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'Qual o prazo médio para fazer um case em processo seletivo?',
    answer: [
      'Geralmente entre 3 a 5 dias, no máximo uma semana. É um tempo relativamente curto mesmo pra você priorizar o que importa, conseguir levantar ideias para o desafio proposto, propor alguma melhoria, aplicar e conseguir validar e compilar isso de alguma forma. Ah, e montar a sua apresentação também.',
      'Não é fácil mesmo, mas você acostuma, viu? Vale lembrar que é importante pensar no tempo que você terá disponível e planejar desde o primeiro dia os entregáveis que vai conseguir atuar em cada dia pra evitar possíveis imprevistos ou deixar tudo pra última hora e não chegar no resultado ideal.',
    ],
  },
  {
    id: 'como-apresentar-case-teste',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'Como apresentar meu case de teste?',
    answer: [
      'Você pode criar uma apresentação simples contando brevemente sobre você, explicando o problema proposto e mostrando o que te levou a chegar na solução proposta. Desde pesquisa, insights, benchs, referências, protótipo. É sempre bom ter algum protótipo navegável, mesmo que não peçam. Vale tudo, desde que esteja claro e que faça sentido com o que foi pedido.',
      'Além dos slides em PDF e do protótipo, você pode gravar um vídeo fazendo a apresentação do projeto. Isto vai demonstrar a sua capacidade de comunicação. No Zoom é possível gravar a tela, webcam e áudio tudo ao mesmo tempo. Prefira subir o vídeo no YouTube no privado, ou outra plataforma online, para evitar anexar um video pesado no e-mail de quem for te avaliar.',
    ],
  },
  {
    id: 'melhoria-fora-escopo-desafio',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'E se eu quiser melhorar uma área que não foi pedida no desafio?',
    answer: [
      'Isso costuma ser um erro frequente nos processos seletivos. O desafio pede A e a pessoa entrega B. Concentre-se no que o case está pedindo, principalmente porque você tem tempo curto. Se é uma melhoria na home do site, faça uma melhoria na home do site.',
      'Ok, você pode propor ideias inovadoras também caso sobre tempo, mas desde que entregue o proposto. Fez a home do site solicitada? Faça o redesign do que quiser depois, desde que tenha argumentos suficientes para defendê-lo. Assim você mostra que sabe respeitar o que foi pedido, mas também consegue sugerir outras linhas de pensamento.',
    ],
  },
  {
    id: 'case-reprovado-o-que-fazer',
    categoryId: 'processos-seletivos',
    subgroup: 'desafios',
    question: 'Fiz um case e não fui aprovada. O que faço com ele?',
    answer: [
      'Poxa, não desanima viu! A gente precisa receber muitos nãos até chegar no sonhado sim. Sabemos que fazer um case não é um processo fácil.',
      'Uma coisa bacana que você pode fazer é pegar os aprendizados desse teste, tentar completar ele e então colocá-lo no seu portfólio. Pensa que todos os estudos são válidos, desde que tenha um processo criativo relevante pra apresentar: desafio, proposta, validação.',
      'Se você teve que fazer em três dias naquele prazo corrido que ninguém merece, aproveita pra rever cada etapa com calma e se joga nas pesquisas, refinamentos do protótipo e levantamentos finais. Quanto mais caprichado, melhor.',
    ],
  },

  // ── PROCESSOS SELETIVOS · feedbacks ─────────────────────────────────────
  {
    id: 'case-sem-retorno',
    categoryId: 'processos-seletivos',
    subgroup: 'feedbacks',
    question: 'Enviei meu case e ainda não tive retorno. E agora?',
    answer: [
      'Primeiro aguarde um tempo mínimo para isso. Eu diria por volta de uma semana! Sim, é bastante tempo, mas é uma média ok levando em consideração que as empresas lidam com muitos profissionais e geralmente demoram mesmo pra se organizar e retornar.',
      'Depois disso, se ainda assim não houve retorno, você pode entrar em contato por e-mail para saber um status do processo seletivo e solicitar um retorno.',
    ],
  },
  {
    id: 'pedir-feedback-apos-nao',
    categoryId: 'processos-seletivos',
    subgroup: 'feedbacks',
    question: 'Recebi um "não" sem explicação. Vale pedir feedback?',
    answer: [
      'Antes de tudo, tira alguns minutos pra esfriar a cabeça e refletir. Não é fácil receber um não, mas ele faz parte pra que você entenda o que tá faltando pra chegar no sim :) belê?',
      'Bom, se a empresa não passou nenhum feedback construtivo que possa te ajudar a entender o motivo da recusa, você sempre pode pedir esse retorno! Não significa que vão responder, mas não custa nada tentar. Você pode enviar um e-mail em resposta agradecendo o retorno e perguntando onde eles identificam que você poderia melhorar. Entender o que não agradou é um bom passo pra reconstruir seus passos e estruturar a casa novamente.',
    ],
  },
  {
    id: 'sem-feedback-desiste',
    categoryId: 'processos-seletivos',
    subgroup: 'feedbacks',
    question: 'Não consegui feedback da empresa. Desisto?',
    answer: [
      'Nunca. Caso a empresa não retorne, não tem problema. Esquece ela! Você pode compartilhar seus estudos com a gente nos [canais oficiais da comunidade](/comunidade) e com certeza alguém vai te dar esse feedback que ficaram te devendo. Tamo aqui pra isso :)',
    ],
  },
  {
    id: 'nenhuma-resposta-empresas',
    categoryId: 'processos-seletivos',
    subgroup: 'feedbacks',
    question: 'Não tive retorno de nenhuma empresa. O que fazer?',
    answer: [
      'Se você não está tendo retorno algum, talvez seja a hora de conversar com profissionais da área que se disponibilizam a fazer mentorias gratuitas pra tentar entender o que pode estar acontecendo. Às vezes pode ser o seu portfólio ou algo no CV que está afastando esse contato inicial.',
      'Fique tranquilo(a) que uma hora vai dar certo, só precisa ir com calma e sempre buscar por esse tipo de feedback para aumentar suas chances. A [comunidade](/comunidade) e as mentorias da VagasUX são bons pontos de partida.',
    ],
  },

  // ── CONHECIMENTOS · habilidades ─────────────────────────────────────────
  {
    id: 'vagas-pedem-ui',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Por que tantas vagas de UX pedem UI?',
    answer: [
      'O mercado é meio bagunçado, fato. Muitas vagas são mais para generalistas do que especialistas, por isso tem essa forte questão da entrega final. Nem todas as empresas (a maioria) tem uma estrutura que possa ter especialistas em cada área, como UI, Writer, Researcher, etc. Então esse é o mínimo para uma pessoa de UX entrar em uma vaga.',
      'Entender de toda a cadeia é diferente de cobrar que você saiba programar, entre outros, que seria um universo totalmente diferente e que precisa de dedicação a todo momento. É interessante ter uma noção de wireframes, por exemplo. Protótipo em baixa ou média fidelidade são bem úteis para o UX saber executar para que consiga passar ideias e direcionar a arquitetura da informação e resultados, mas não é um fator tão dominante. Então vai depender muito do contexto da empresa, time e época que se está trabalhando.',
      'Assim é muito mais fácil você entrar em uma oportunidade. Já dentro da empresa, você pode ser exigido mais para uma área que outra, mas tudo depende da estrutura da empresa. Por isso geralmente é importante que você consiga contribuir com todo o processo mesmo que minimamente.',
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
      'Você precisa ter um mix entre soft skills e hard skills pra atender a uma vaga júnior. Vamos lá! 🌻 Soft skills:',
      '• Escuta ativa: saber ouvir e trocar conhecimentos com o time.',
      '• Prática de feedback: dar e receber feedbacks de forma construtiva, sem levar para o lado pessoal.',
      '• Colaboração: trocar conhecimento e experiências com o time, se mostrar disponível para ajudar e se envolver e mostrar interesse.',
      '• Comunicação: a forma que você fala e se apresenta, a forma que envolve outras pessoas e se engaja; a clareza com que informa um processo/solução, tudo é válido.',
      '• Aprendizado constante: estamos sempre aprendendo, não deixar de acompanhar a evolução do mercado, se mostrar presente e aperfeiçoar suas habilidades ao longo da sua jornada.',
      '• Autonomia: ter disposição para sugerir, criticar, criar e implementar processos e ferramentas junto com o time.',
      '• Organização: não é uma obrigação, mas sempre muito bem-vindo quando temos uma organização pessoal, nos nossos arquivos (e camadas rs), processos e dia a dia.',
      '💪 Hard skills: vai depender da área de atuação, mas pra responder vamos considerar um Product Designer que engloba UI e UX, ok?',
      '• Ferramenta: manjar de alguma ferramenta de criação e prototipação (Figma, Adobe XD, Sketch). Não precisa saber 100%, importante já ter usado e ter uma boa noção.',
      '• Fluxos: ter alguma experiência com criação para web/app (pode ser cases de cursos e voluntariado) e ser capaz de produzir fluxos, wireframes e telas em diferentes níveis de fidelidade.',
      '• Prioridades: procurar entender e trazer as necessidades dos usuários e desenvolver novas funcionalidades para o produto com base no backlog (pendências) do time.',
      '• Pesquisas: propor pesquisas pensando no planejamento e execução de entrevistas, testes de usabilidade e métodos quantitativos e envolver o time para participar e acompanhar (sempre quando necessário).',
      '• Acompanhamento: acompanhar continuamente o que foi entregue e ficar de olho nas métricas do produto junto com o time.',
    ],
  },
  {
    id: 'junior-destacar-crescer',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Como uma júnior pode se destacar e crescer na empresa?',
    answer: [
      'Se mostrando interessado e presente com seu time e pessoas próximas a você, praticando as soft skills mencionadas na pergunta anterior e aperfeiçoando sempre que possível suas hard skills, seja com cursos, estudo próprio e desenvolvimento no dia a dia.',
    ],
  },
  {
    id: 'tempo-adaptacao-funcoes',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Existe tempo médio para me adaptar às funções?',
    answer: [
      'Varia muito. Depende de cada pessoa, time e contexto. Mas no geral no dia a dia a empresa costuma definir as funções do time em conjunto e com base na sprint (geralmente dentro de duas semanas). Se você é um designer iniciante, a quantidade de entregáveis será considerada dentro desse prazo pré-estipulado, assim como provavelmente haverá algum tipo de acompanhamento.',
    ],
    seeAlso: [{ term: 'Sprint', glossarioId: 'sprint' }],
  },
  {
    id: 'saber-fazer-trabalho-pedido',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Vou saber fazer tudo que me pedirem?',
    answer: [
      'Nem sempre. E você precisa saber se posicionar e deixar isso claro. Você pode já ter feito alguns projetos de estudo e provado que dá conta, mas não necessariamente tem a experiência de alguém com anos de experiência na área. É normal "travar" em coisas que você nunca fez ou fez pouco.',
      'Por exemplo, te pedem uma pesquisa de Discovery. Você já fez uma vez em um projeto seu, mas agora precisa implementar junto com sua squad. Vai ser a mesma coisa que você fazendo sozinho(a)? Não. Por isso pode gerar uma ansiedade que é normal. Na prática vai funcionar da mesma forma, mas você vai precisar envolver outras pessoas pra te ajudarem nesse processo. Sejam elas designers, POs ou devs.',
      'Não tenha medo também de dizer que nunca fez algo. Você pode pedir ajuda, questionar, tirar dúvidas e pesquisar mais sobre o assunto para tentar aplicar. O importante é deixar claro sua disposição para participar e construir uma experiência bacana pro seu usuário final em conjunto com seu time. E sempre tenha em mente que o aprendizado é contínuo, por isso ninguém sabe de tudo (se diz que sabe, está mentindo 👀 ahah).',
    ],
    seeAlso: [{ term: 'Discovery', glossarioId: 'discovery' }],
  },
  {
    id: 'preparado-integrar-equipe',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Estou preparada para integrar uma equipe de design?',
    answer: [
      'Se você já pesquisou e praticou bastante sobre a área e o que ela exige, tem alguns projetos para mostrar seu processo e já pediu alguns feedbacks sobre eles, então, sim! Você está oficialmente pronto(a) pra se aplicar para vagas e integrar um time. Não deixa a insegurança falar mais alto, nunca vamos estar 100% prontos, e tá tudo bem.',
      'A ideia é a gente ter praticado bastante mesmo pra ter uma noção boa do básico, mas será no dia a dia que vamos aprender na prática mesmo, entender mais sobre a rotina, squads, produto e por aí vai. Não espere atender todos os requisitos de uma vaga para se aplicar (essa dica vale principalmente pra vocês, viu mulheres 💜💪). Vamos ser menos exigentes com nós mesmos.',
    ],
    seeAlso: [{ term: 'Squad', glossarioId: 'squad' }],
  },
  {
    id: 'design-grafico-necessario',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Preciso saber design gráfico para trabalhar com UX/UI?',
    answer: [
      'Isso é muito relativo. Existem princípios de hierarquia visual que vem dessa parte de design gráfico e é sim muito necessário conhecer seus fundamentos, mas é possível ver e ler muito material voltado para interfaces e construção no meio digital que será mais relevante.',
      'É bacana você buscar conhecimentos sobre, sempre vai facilitar o seu trabalho! Como cores, tipografia, etc, mas no momento que você entrar de cabeça nessa área, você sempre estará estudando um pouco a todo momento e aprendendo sobre esses conceitos.',
    ],
  },
  {
    id: 'precisa-saber-codar',
    categoryId: 'conhecimentos',
    subgroup: 'habilidades',
    question: 'Preciso saber codar para ser Product Designer?',
    answer: [
      'Definitivamente não. É necessário, porém, entender o contexto de suas aplicações para permitir uma boa comunicação com os desenvolvedores do seu time e para poder tomar melhores decisões.',
      'Pense que se você fosse um arquiteto projetando uma casa, precisaria entender sobre os materiais e os contextos do ambiente que está construindo, mas não necessariamente irá construir a casa em si.',
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
      'Assunto polêmico. Temos muitos relatos de pessoas que conseguiram vagas na área e não possuem ensino superior em áreas relacionadas ou que não possuem ensino superior no geral. Então não, não é uma exigência, porém, sim, é super necessário.',
      'Uma faculdade te abre portas, te mostra livros, metodologias, contatos. Te ensina a pensar e processar de um jeito diferente. Você pode conhecer diversas pessoas que já estão na área e aprender muito com elas, além de que vagas de estágio exigem alguma faculdade em curso para sua aplicação.',
      'Em resumo, você não precisa obrigatoriamente da graduação para começar na área, porém sempre será um grande investimento e muito bem visto na carreira pois você será um profissional mais completo, especialista e focado.',
    ],
  },
  {
    id: 'migracao-nova-faculdade',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Já sou formada em outra área. Preciso fazer nova graduação?',
    answer: [
      'Não é uma exigência do mercado, você pode fazer sua migração desde que estude e pratique bastante, faça cursos técnicos para ter alguma especialização mínima e vá evoluindo isso. Importante também ter uma boa noção de hierarquia visual e princípios gerais de quem já vem da faculdade de design.',
      'Depois disso, com o passar do tempo e quando achar que já vale a pena investir em novos conhecimentos, você pode fazer alguma pós que seja focada na área para ter uma especialização mais próxima da sua área de atuação.',
    ],
  },
  {
    id: 'pos-vs-curso-tecnico',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Invisto em pós-graduação ou em curso técnico?',
    answer: [
      'Depende muito do seu foco atual. Se você acredita que está muito cru na área ainda, acredito que um curso técnico é o melhor caminho pois ele tem um processo relativamente mais rápido e muito mais prático para aprender e exercer algum aprendizado específico. Cursos são mais focados em determinados assuntos e com isso você pode cada vez mais nichar sua especialização e habilidades que gostaria de desenvolver.',
      'Já uma pós é algo que leva tempo e exige muita dedicação e é aconselhada pra quem já está na área e quer evoluir ainda mais seus conhecimentos e de fato se especializar e continuar seus estudos já aplicados.',
    ],
  },
  {
    id: 'tipo-curso-ingressar',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Que tipo de curso devo investir para ingressar na área?',
    answer: [
      'Você precisa investir em cursos que te darão um norte sobre por onde começar, principais metodologias utilizadas e que passe pelo processo completo de UI/UX. Geralmente cursos e bootcamps que falam sobre "formação em UI/UX" tem essa grade.',
      'É importante buscar por um curso que tenha um projeto final para que você consiga sair com um projeto/case para o seu portfólio. Também é interessante cursos que oferecem algum tipo de mentoria contínua para que você tenha um acompanhamento guiado ao longo dos seus estudos e não se sinta perdido(a).',
    ],
  },
  {
    id: 'cursos-referencia-area',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Quais cursos são referência na área de UI/UX?',
    answer: [
      'Temos uma área com sugestões de alguns [cursos gratuitos e pagos](/guia/tipo/cursos). Temos também uma iniciativa da comunidade com alguns feedbacks de cursos renomados da área, vale conferir e decidir com calma.',
    ],
  },
  {
    id: 'como-escolher-curso',
    categoryId: 'conhecimentos',
    subgroup: 'formacao',
    question: 'Como escolher o melhor curso de UI/UX?',
    answer: [
      'Não existe o melhor curso. E sim o melhor curso pra você no momento dentro do seu contexto. Defina orçamento, tempo disponível e se precisa de mentoria. Leia opiniões recentes, veja projetos de egressas e desconfie de promessa de emprego garantido.',
      'Experimente conteúdo gratuito do instrutor antes de pagar. Curso certo para você depende do seu ponto de partida e das lacunas que precisa fechar, não do hype do momento.',
    ],
  },

  // ── CONTRATAÇÃO · CLT ───────────────────────────────────────────────────
  {
    id: 'o-que-e-clt',
    categoryId: 'contratacao',
    subgroup: 'clt',
    question: 'O que é CLT?',
    answer: [
      'CLT é uma sigla para Consolidação das Leis do Trabalho. É o modelo mais tradicional para um contrato de trabalho. A CLT surgiu pelo Decreto-Lei nº 5.452, de 1 de maio de 1943, sancionada pelo então presidente Getúlio Vargas, unificando toda a legislação trabalhista existente no Brasil. Seu principal objetivo é a regulamentação das relações individuais e coletivas do trabalho, nela previstas. A CLT regulamenta as relações trabalhistas, tanto do trabalho urbano quanto do rural.',
      'Seus principais assuntos são: registro do trabalhador e carteira de trabalho; jornada de trabalho; período de descanso; férias; medicina do trabalho; categorias especiais de trabalhadores; proteção do trabalho da mulher; contratos individuais de trabalho; organização sindical; convenções coletivas; fiscalização; justiça do trabalho e processo trabalhista.',
    ],
  },
  {
    id: 'direitos-principais-clt',
    categoryId: 'contratacao',
    subgroup: 'clt',
    question: 'Quais são meus principais direitos como CLT?',
    answer: [
      'Multa rescisória do FGTS sem justa causa: além do trabalhador poder fazer o saque integral do benefício em caso de demissão sem justa causa, o empregador também deverá arcar com uma multa correspondente ao percentual de 40% sobre o valor depositado para o empregado.',
      'Aviso prévio indenizado: garantia direcionada ao trabalhador que é demitido sem justa causa, disponibilizado caso o empregador tenha optado pela demissão unilateral, correspondente ao período mínimo de 30 dias de trabalho.',
      'Férias + ⅓ constitucional: todo trabalhador formal tem o direito de tirar férias remuneradas pelo período máximo de 30 dias após um ano de trabalho. Essa remuneração deve ser paga antecipadamente, além de incluir o percentual de ⅓ constitucional.',
      '13º salário: remuneração extra destinada ao trabalhador no fim de cada ano, devendo ser pago proporcionalmente pelo tempo de trabalho executado em caso de desligamento do funcionário. Também entram contribuições ao INSS, com acesso a aposentadoria, auxílio-doença, salário-maternidade e demais benefícios previdenciários.',
    ],
  },

  // ── CONTRATAÇÃO · MEI ───────────────────────────────────────────────────
  {
    id: 'o-que-e-mei',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'O que é MEI?',
    answer: [
      'Microempreendedor Individual (MEI) é um profissional autônomo que trabalha por conta própria e que se legaliza como pequeno empresário. Permite emitir nota fiscal, contribuir para previdência e faturar até o limite anual definido pelo governo, sem participação em outra empresa como sócio ou titular. O MEI também pode ter um empregado contratado que receba o salário mínimo ou o piso da categoria.',
      'Com uma MEI aberta, o microempreendedor poderá prestar serviços para empresas, emitindo notas fiscais, o que possibilita o acesso a crédito, além de poder participar de licitações e concorrências e ter acesso a previdência social. Abertura é gratuita e online pelo [portal do empreendedor](https://www.gov.br/empresas-e-negocios/pt-br/empreendedor). Verifique sempre limites e regras vigentes no site gov.br.',
    ],
  },
  {
    id: 'designer-pode-ser-mei',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'Designer pode ser MEI?',
    answer: [
      'Oficialmente as atividades relacionadas à área de design não se enquadram nas atividades permitidas pela MEI. O que acontece é que esta é a maneira mais fácil e barata de se conseguir abrir uma empresa e ser PJ (Pessoa Jurídica), então muitos profissionais, de diversas áreas, utilizam o artifício de abrir uma MEI e buscar alguma atividade que tenha alguma relação.',
      'Muito provavelmente as empresas contratantes não se importarão se a atividade está ou não enquadrada na MEI, mas fique sabendo que é algo não regulamentado e que podem ocorrer multas e outros problemas legais, caso alguma autoridade verifique. Ao cadastrar, você pode escolher uma atividade principal (CNAE) e até 15 atividades secundárias. Entre as que podem se adequar às atividades realizadas por designers: fotógrafo independente, editor de jornais/revistas/livros, digitador, instrutor de informática, editor de vídeo, artesão em papel, entre outras.',
    ],
  },
  {
    id: 'custo-mei-mensal',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'Quanto custa manter MEI por mês?',
    answer: [
      'O microempreendedor individual terá como despesas apenas o pagamento mensal do Simples Nacional, a DAS-MEI. O cálculo do valor do tributo corresponde a 5% do salário mínimo, com acréscimo de R$ 1 de ICMS para comércio e indústria, ou de R$ 5 de ISS para prestadores de serviços. Valores mudam quando o salário mínimo ou regras do Simples são atualizados.',
      'Gere o boleto apenas no portal oficial do empreendedor. Desconfie de cobranças por e-mail ou carta logo após abrir CNPJ.',
    ],
  },
  {
    id: 'vale-pj-junior',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'Vale a pena ser júnior na modalidade PJ?',
    answer: [
      'Depende do salário porque no nível júnior ele geralmente não é muito alto e não vai compensar pelos custos que você vai ter com a empresa (se for ME). MEI já atende melhor e vale fazer o cálculo certinho pra ver se você realmente terá vantagens ou não está apenas pagando para trabalhar.',
    ],
  },
  {
    id: 'empresa-pede-mei',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'A empresa pediu que eu abra MEI. O que preciso saber?',
    answer: [
      'Isto varia muito de empresa para empresa. Algumas nem realizam o cadastro do prestador de serviço, enquanto outras podem pedir uma série de documentos. Segue uma lista dos documentos mais solicitados: cartão CNPJ ou certificado MEI, inscrição municipal, certidões negativas de débitos federais, trabalhistas e do INSS, comprovante de situação cadastral do CNPJ, certidão do FGTS (quando aplicável) e dados bancários.',
      'Por lei o MEI não é obrigado a ter uma conta bancária de pessoa jurídica, mas algumas empresas não aceitam realizar pagamentos de serviços para contas de pessoas físicas. Nota fiscal para pessoa jurídica costuma ser obrigatória. Cada município tem processo próprio de emissão; em São Paulo, por exemplo, exige senha web na prefeitura. Lembrando que muitos destes documentos têm prazo de validade após sua emissão.',
    ],
  },
  {
    id: 'nota-fiscal-golpes-boleto',
    categoryId: 'contratacao',
    subgroup: 'mei',
    question: 'Como emitir nota fiscal e evitar golpes de boleto?',
    answer: [
      'NÃO! A única forma de cobrança oficial para MEI é através das guias de pagamento DAS-MEI obtidas diretamente no portal do empreendedor. Inclusive, qualquer outra forma de cobrança é ilegal. Existem muitas tentativas de golpes deste tipo, e eles são comuns de acontecer logo após a abertura do CNPJ. O mesmo vale para boletos de cobrança de sindicatos: qualquer contribuição sindical é voluntária.',
      'Para emitir nota fiscal, você precisa conseguir acesso ao sistema de emissão de notas fiscais do seu município (senha web). Cada município tem seus procedimentos. Em São Paulo, por exemplo, é necessário solicitar a Senha Web no portal da prefeitura, agendar desbloqueio presencial e depois configurar o sistema de NFS-e. Guarde comprovantes de notas emitidas e relatório mensal de receitas, exigência do MEI para manter regularidade.',
    ],
  },

  // ── CONTRATAÇÃO · comparativo ───────────────────────────────────────────
  {
    id: 'vantagens-riscos-clt',
    categoryId: 'contratacao',
    subgroup: 'comparativo',
    question: 'Quais vantagens e riscos da contratação CLT?',
    answer: [
      'Vantagens: registro em carteira, 13º salário, seguro-desemprego, fundo de garantia, férias, licença maternidade/paternidade e proteção trabalhista prevista em lei.',
      'Desvantagens: desconto de até 20% em folha de pagamento; dificuldades para contestar horas extras trabalhadas sem o acionamento da justiça; remuneração estagnada; carga horária definida por lei (8h diárias, 44h semanais); na maioria das vezes tem que apresentar atestado quando precisa se ausentar durante o horário de trabalho, caso contrário tem essas horas descontadas na folha de pagamento.',
    ],
  },
  {
    id: 'vantagens-riscos-pj-mei',
    categoryId: 'contratacao',
    subgroup: 'comparativo',
    question: 'Quais vantagens e riscos de PJ ou MEI?',
    answer: [
      'Vantagens: impostos reduzidos, benefícios previdenciários (auxílio-doença, aposentadoria por invalidez, pensão por morte, etc), flexibilidade de horário de trabalho conforme definido em contrato, isenção dos tributos federais (Imposto de Renda, PIS, Cofins, IPI e CSLL) e possibilidade de atender vários clientes.',
      'Desvantagens: contribuição mensal fixa enquanto a empresa estiver ativa, aposentadoria limitada, carga tributária reduzida (teto de faturamento MEI), responsabilidade fiscal sobre CNAE e instabilidade se contrato encerrar. Compare PJ bruto com CLT líquido mais benefícios antes de decidir. Para comparar cenários, vale usar uma [calculadora CLT x PJ](https://occam.com.br/conversor-clt-para-pj/).',
    ],
  },
  {
    id: 'quando-escolher-clt-ou-pj',
    categoryId: 'contratacao',
    subgroup: 'comparativo',
    question: 'Quando escolher CLT ou PJ/MEI?',
    answer: [
      'CLT tende a compensar quem prioriza estabilidade, benefícios e primeiro emprego formal na área. PJ ou MEI pode valer quando proposta financeira cobre custos fixos, impostos e gap de benefícios com folga.',
      'Júnior em PJ exige conta honesta: valor baixo com MEI pode ser armadilha. Negocie prazo de experiência, escopo e revisão salarial. Consultoria contábil ajuda a comparar cenários concretos com números reais, não só memes de internet sobre "convertedor CLT para PJ".',
    ],
  },

  // ── GUIA ────────────────────────────────────────────────────────────────
  {
    id: 'o-que-e-o-guia',
    categoryId: 'guia',
    subgroup: 'guia',
    question: 'O que é o Guia do Product Designer da VagasUX?',
    answer: [
      'Nosso compilado do VagasUX de trilhas, conteúdos, glossário e FAQ para quem está entrando ou reorganizando estudos em Product Design. Feito com a ajuda dos voluntários da comunidade que já atuam na área e têm muito a agregar. A VagasUX reúne o que importa para você não se perder no excesso de link.',
      'O Guia complementa vagas, comunidade e outros produtos da VagasUX. Funciona como ponto de partida para orientar estudo e linguagem do mercado, com prática e troca na comunidade além.',
    ],
  },
  {
    id: 'guia-substitui-curso',
    categoryId: 'guia',
    subgroup: 'guia',
    question: 'O Guia substitui um curso?',
    answer: [
      'O Guia organiza caminhos e traduz termos do mercado. Curso ou mentoria traz exercício guiado, feedback individual e ritmo estruturado que conteúdo curado sozinho não substitui.',
      'Use trilhas para sequenciar estudo, glossário para decifrar siglas e FAQ para dúvidas de carreira. Combine com prática e troca na [comunidade](/comunidade).',
    ],
  },
  {
    id: 'como-usar-trilhas',
    categoryId: 'guia',
    subgroup: 'guia',
    question: 'Como usar as trilhas do Guia?',
    answer: [
      'Escolha trilha alinhada ao seu momento: entender o básico, portfólio, research ou content design. Siga ordem sugerida ou pule o que já domina.',
      'Marque o que leu, aplique em projeto real e volte quando precisar aprofundar. Trilha é roteiro flexível: adapte ordem e ritmo ao que você já domina, sem virar checklist rígida para marcar no automático.',
    ],
  },
]
