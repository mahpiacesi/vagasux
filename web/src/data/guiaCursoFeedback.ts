/** Snapshot from Notion database "Relatos de cursos" (Categorizado = Sim). */
/** Regenerar: node tools/scripts/export-guia-cursos-feedback.mjs */

export type GuiaCursoRelato = {
  id: string
  text: string
  author?: string
  receivedAt?: string
}

/** Relatos aprovados indexados por curso.id (Notion page id da escola). */
export const guiaCursoFeedbackByCourse: Record<string, GuiaCursoRelato[]> = {
  "1061fe3b9e2e4360ad65793b7aaab059": [
    {
      "id": "1218cbb0d90481a39002e71d2086adf4",
      "text": "Assinei o plano da Alura duas vezes, entre 2021 e 2024.\n\nÉ uma plataforma bem generalista, com vários cursos de Design (gráfico, motion, visual, de produto, game, embalagens, vários tipos de design). Eu gostava porque procurava cursos mais iniciantes, mas acredito que intermediário/avançado já não valha tanto a pena (a não ser que você queira aprender muitas coisas de muitas áreas).\n\nGosto da plataforma e dos professores mas não sei se assinaria novamente, mais por essa questão de sentir falta de um aprofundamento maior.",
      "author": "Mariah",
      "receivedAt": "2024-10-16T12:50:37Z"
    }
  ],
  "1b08cbb0d90480588e52c9840e4300ba": [
    {
      "id": "1428cbb0d90481abaa0dfd748ef37b3b",
      "text": "Participei do curso de Design Ops, e foi muito bom o aprendizado. Apesar da minha senioridade ser inferior, pude aprender muito sobre operações de Design e também compartilhar a minha vivência no mercado de trabalho com gestão de pessoas nas mentorias que o João promove durante o curso além das aulas.",
      "author": "Gisele Cardoso",
      "receivedAt": "2024-11-18T20:51:35Z"
    }
  ],
  "2e9c5a6e978a47f7abce20b403c0e65d": [
    {
      "id": "02dcf4eb758f4d5686e5ac0dfa258326",
      "text": "- é EAD mas as aulas são ao vivo\n- tem ótimos professores, gente que trabalha com design mesmo, inclusive o Guilhermo Reis que é renomado na área, tem livro publicado etc\n- são 8 módulos, 1 por mês, não tem 1 tcc só mas sim 1 projeto pra cada módulo (apenas o de acessibilidade que é junto com avaliação de heurística eu achei meio fraco pq a gente não vê muito de acessibilidade mesmo, o curso da môre tem um mês tb e é absurdamente mais completo)\n- não é turma fechada, vc pode matricular e entra no próximo módulo que começa e faz os 8 a partir daí (eu comecei em agosto, o 1º foi pesquisa e seguiu daí, gostei muito pq segue a \"ordem padrão das coisas de um double diamond\", vi um pessoal que começava em outros módulos tipo prototipação sofrer mais com etapas iniciais dos processos)\n- eles dão acesso a biblioteca inteira da O'Reilly (acho que vitalício), o que é um grande plus\n\nresumo da ópera é que mesmo sendo formada na área (fiz 2 anos de design digital e 4 de design) eu ainda aprendi bastante coisa nova, percebi que o instituto é bem apreciado no meio da tecnologia e em comparação aos métodos de outras faculdades EAD e pós que eu vejo o pessoal comentando, supera bem.",
      "author": "Helena Kayla Lange Andrighe",
      "receivedAt": "2023-12-09T16:54:51Z"
    }
  ],
  "429eda9af86f4628a067bc20ca4ac1f8": [
    {
      "id": "1218cbb0d90481d5b7ebc16259c7566a",
      "text": "Curso pra angariar estudantes pra pós deles, de certa forma. É bem legal ouvir diretamente do Don Norman, o Marcelo Pimenta também é um bom professor, mas achei maçante o conteúdo.\n\nA edição não ajuda muito a deixar menos maçante, são aulas muito longas só com o Don Norman sendo entrevistado, e é uma gravação antiga pelo que parece.",
      "author": "Mariah",
      "receivedAt": "2024-10-16T12:54:49Z"
    }
  ],
  "49db936d5b174305a07edbeb8785358d": [
    {
      "id": "1218cbb0d9048169bd3beda4e1ed1a55",
      "text": "Comecei esse ano a pós, e tô adorando. Estou fazendo a online com aulas ao vivo, não só gravadas, e se não me engano só 4 cadeiras serão aulas gravadas. Financeiramente, pra quem faz questão de ter contato com os professores e os colegas, vale muito a pena.\n\nAté então temos alguns projetos pra fazer, que imagino que serão bem completos para o portfólio. As aulas são mais puxadas do que eu esperava, o que eu adorei.\n\nAs professoras que tive aula são maravilhosas, e a faculdade dá bastante apoio. Pra quem tem como pagar, eu recomendo demais.\n\nÚnica coisa que eu estranhei um pouco é que a maioria dos colegas estão em migração pra área, de 20 e poucos acho que uns 5 ou 6 só trabalham já na área. De qualquer forma, a turma é muito querida, e o curso é muito bom.",
      "author": "Mariah",
      "receivedAt": "2024-10-16T13:23:54Z"
    }
  ],
  "4b8316658ce044f6a8a009990ab73cd6": [
    {
      "id": "4651f3b104934a65aaa89497523048a6",
      "text": "O curso que fiz no UIboost de UI designer ele é todo completo e ainda mais tem muito extras e mentorias dentro deste curso. Um curso que super recomendo, pois tive a oportunidade de aprender muito e poder colocar todo aprendizado em prática. Muito bem detalhado e de alta qualidade!",
      "author": "Ludmila",
      "receivedAt": "2023-12-09T09:30:38Z"
    },
    {
      "id": "b3cab461ab0f462ab5581513e39f5e78",
      "text": "Curso excepcional sobre interfaces e UI Design. O nível de refino e atenção a detalhes do professor é de outro mundo e ele consegue passar esse tipo de atenção para os alunos. Recomendo o curso para todo mundo que desejam aprender mais sobre UI Design.",
      "author": "Guilherme Luís Ulbriki",
      "receivedAt": "2023-11-13T13:06:40Z"
    },
    {
      "id": "f50906616d7543e3bee902efa06a7344",
      "text": "O UI boost foi um divisor de águas pra mim, eu já trabalhava com design e estava migrando para UI, e estava buscando a me aprofundar no design de interfaces, e sou muito grato por ter encontrado o Gilberto Prado nessa etapa, pois com uma didática cirúrgica e com uma metodologia ampla que te faz pensar bem além de apenas design, pude ter uma excelente  formação como ui designer, formação essa que me capacitou para realizar trabalhos pra países como Canadá, Suíça e Estados Unidos.\n\nO curso me poupou tempo, foi flexível, possuía um ótimo custo benefício e foi completo.\n\nCom toda certeza recomendo a qualquer um queria aprender mais sobre UI que busquem o UI Boost.",
      "author": "Matheus Ribeiro",
      "receivedAt": "2023-11-13T02:28:13Z"
    },
    {
      "id": "62baa14955674a6e87db47f4a58d0f7b",
      "text": "uiBoost me proporcionou chegar em lugares que nunca imaginei, sou bastante grato ao curso e a comunidade do curso. O conhecimento é transmitido de forma simples e direta pelo Gilberto Prado, com bons exemplos e boas práticas, levando o aluno ao amadurecimento e crescimento, contando com a credibilidade e competência do mentor. Além de ser atemporal, sempre retorno ao curso nos pontos que tenho dúvidas.\nDigo que entrega muito mais do que podem imaginar, se dediquem e estudem sempre, façam os exercícios, tirem dúvidas com os colegas e mentor, busquem feedbacks dos seus projetos que logo estarão mais bem preparados para o mercado de UI design.",
      "author": "Ronielton Rocha",
      "receivedAt": "2023-11-13T02:16:32Z"
    },
    {
      "id": "f243bfb4915c4aaa96258cbcfe2a9298",
      "text": "O curso UI Boost do Gilberto foi essencial para a minha formação profissional como UX UI Designer, eu não tenho palavras para descrever o quanto esse curso, o quanto o Gil me ajudou no processo de aprendizagem e de desenvolvimento profissional, o curso é maravilhoso, um investimento que realmente vale a pena cada centavo. Tenho só o que agradecer pelo privilégio de ser aluna do curso, merece sim todo o reconhecimento, e eu indico de olhos fechados. Só falta o gil me aceitar no time da insany rs",
      "author": "Bianca Morgan",
      "receivedAt": "2023-11-13T01:07:48Z"
    }
  ],
  "57fa45d5d9204c79b3b45ce56c3e5b4f": [
    {
      "id": "13b8cbb0d9048193bbf6cadc790ed64e",
      "text": "Desastroso. Entramos na turma com diversas promessas, e a principal era: não éramos uma turma de teste, pois de acordo com os mesmos, já haviam feito turmas online anteriormente (o que foi falácia, pois tudo o que faziam era de forma desordenada/bagunçada). Os professores eram ótimos, mas as promessas da Gama foram demasiadamente mentirosas. Quando acabamos o curso, ficamos jogados de lado. Não havia a \"ajuda para buscar a tão sonhada vaga\" como haviam prometido. \n\nHavia uma tal de \"feira de vagas\" com \"diversas empresas\", foi o que falaram. Quando entrei para descobrir do que se tratava a feira, havia literalmente 3 vagas, e pasmem: NENHUMA ERA PARA O CURSO QUE FIZEMOS!\n\nCom isso, deixo meu desgosto, digo, relato sobre o curso. Professores ótimos, curso e empresa horrível. Inclusive ela nem existe mais atualmente.",
      "author": "Marcelo Tesla",
      "receivedAt": "2024-11-11T23:07:18Z"
    }
  ],
  "6e7b817c756e4553bbd9ed4f0b6cca02": [
    {
      "id": "d41bbf60287544ed89a45d48624dd878",
      "text": "O curso é com o Guilherme de Paula que é um profissional bem sucedido do mercado e que tem uma didática excelente. Dura uma hora e é bem objetivo. Apesar de ser rápido, ele usa exemplos e explica cada termo para que não fiquem dúvidas.\nhttps://www.udemy.com/course/metricas-de-ux-para-produtos-e-servicos-digitais/",
      "author": "Kell Bonassoli",
      "receivedAt": "2023-11-03T21:38:53Z"
    }
  ],
  "8b816aa8a8fa47be9b5c0385d5bfa0c8": [
    {
      "id": "4c76fc31e1a948fa8835a196127b423c",
      "text": "Eu acho incrível todo conteúdo que do Dani produz e esse curso não podia ser diferente!! A didática dele é absurda, me prende em qualquer assunto que ele estiver falando\nSou júnior na área de ux e recomendo demais o curso para quem também está começando agora na área!\nMesmo eu já tendo visto anteriormente alguns dos conceitos que ele traz nas aulas eu aprendi muito, todas as aulas são cheias de exemplos reais que facilitam o entendimento e ajudam a lembrar das coisas no futuro. O curso é gravado mas em cada aula tem a opção de deixar um comentário, achei muito legal ficar lendo o que outras pessoas comentaram anteriormente e o próprio Daniel vez ou outra aparece respondendo algumas coisas por lá! \nAssisti todas as aulas em um mês mas pretendo rever várias, como a compra da acesso à plataforma por um ano vai dar pra aproveitar bastante! Na minha opinião, vale muito a pena o investimento <3",
      "author": "Gabriela Peron",
      "receivedAt": "2023-10-04T18:43:30Z"
    }
  ],
  "b492db04bde5445aa8e06798350656c3": [
    {
      "id": "41d56ffba78d46459724382a22389bde",
      "text": "Eu simplesmente amei o curso. Tinha um pouco de receio pelo curso estar como \"avançado\" no site, mas resolvi me jogar por já acompanhar, conhecer e admirar a professora (a Mah, aqui da VagasUX hehe) a um tempo, no fim consegui acompanhar sem problemas o conteúdo e as práticas! Eu já vinha a um tempo estudando sobre DS e o curso foi o que eu precisava pra dar aquele empurrãozinho nos estudos. \nO curso traz bastante conteúdo teórico mas todas as aulas contam também com atividades práticas em grupo e tarefas individuais pra praticar ao longo da semana, que são revisadas pela professora na aula seguinte. Como a turma é pequena acaba sendo um ótimo espaço para tirar dúvidas e aprender com todos, com certeza recomendo para quem tá estudando sobre Design System.",
      "author": "Gabriela Peron",
      "receivedAt": "2024-07-04T12:55:43Z"
    }
  ],
  "b6d3b3f5d1c44d5fad46633c76de19dc": [
    {
      "id": "4196ee13299141559c8a8458a7db4e68",
      "text": "Eu fiz em UI Design e tive contato com algumas pessoas que fizeram a de UX.\nO conteúdo da pós em si achei bom. Os professores são bons, apenas fiquei triste por conta da organização em si.\nO EAD deles, apesar de ser ao vivo, ainda tem muito a melhorar. Mudaram a grade assim que começamos o curso (sem avisar mesmo), problemas com links ao acessar as aulas, boletos que não eram gerados, dificuldade de comunicação, problemas com cadastro em disciplinas obrigatórias etc...\nOs cursos presenciais da BA são ótimos e sempre vejo pessoas falando bem, tanto que resolvi fazer o curso de pós EAD lá por causa dos comentários positivos.\n\nMas se você estiver pensando em fazer uma pós/graduação mande uma mensagem no LinkediIn perguntando a quem já fez, principalmente se estiver pensando em fazer a modalidade EAD.",
      "author": "Karina",
      "receivedAt": "2024-01-11T15:10:39Z"
    }
  ],
  "bf5f18c67d824d3e860a1e6508964081": [
    {
      "id": "1908cbb0d90481d8a9aec386624a967c",
      "text": "Tive uma experiência mista com esse curso, porém falarei com pontos positivos e negativos\n\n⭐Positivos\n- Os professores que dão as aulas gravadas são realmente muito bons e sabem o que estão falando\n- Os projetos \"paralelos\" são legais de se fazer, principalmente o de parceria\n- Honestamente, não queria fazer o projeto de parceria deles com uma marca, mas no fim eu ADOREI e se tornou meu projeto favorito\n- Tem Feedbacks\n\n👀Negativos\n- Feedback meio vazios, sentia que a maioria dos feedback não eram muito bem avaliados, sem atenção aos detalhes\n- Não caiam no conto do programa de empregabilidade, tem muitos \"excetos\" que não são claros\n- Conteúdo muito simples e introdutório, sinto que minha base de UX teve pouco influência da EBAC e sim de outros cursos\n- É bom, de certa forma é, mas não vale o preço salgado do curso\n\nVeredito: Não recomendo, mas longe de dizer que é ruim e que o gasto não tenha valido a pena, mas não é tudo isso que prometem, provavelmente tem cursos mais baratos e melhores",
      "author": "Lucas Inacio",
      "receivedAt": "2025-02-04T01:42:07Z"
    }
  ],
  "bfad14b97f3a4cbaacf7a38dd69e0774": [
    {
      "id": "d01d1757253242949fff2faa7e2ab390",
      "text": "Percepção geral: o instrutor (Edu Agni) é ótimo,  competente e atencioso (slack / mentorias), mas o curso é superficial. Eu investiria apenas em cursos com ele ao vivo, mas não mais nesses gravados. \n\nContexto: queria migrar da área de ciências sociais para UX design. Comprei o curso da Mergo por ser uma das escolas mais renomadas  e não ter marketing agressivo. Mas eu achei o curso bastante superficial. Eu lia todos os links extras, mas eles falavam praticamente a mesma coisa que o Edu dizia na gravação, ou seja, não acrescentava muita coisa. \nO curso tem um caráter prático, porém ele é feito a partir de uma problemática fictícia, proposta pelo instrutor. A meu ver, seria muito mais proveitoso e concreto se se partisse de perguntas reais de produtos reais. Essa distância em relação à realidade é frustrante. \n\nO ponto positivo é que ele nos instrui e nos ajuda no projeto em mentorias ao vivo. Contudo, isso não tira o fato da superficialidade de conteúdo das aulas gravadas, nem da proposta de case fictício em vez de real. \n\nNão acho que vale a pena pagar + de 2 mil reais nesse curso gravado.  Eu procuraria por cursos com esse mesmo valor, mas que propõem casos práticos com empresas reais. \n\nOu, melhor: faça você mesmo casos reais e teoricamente leia livros.",
      "author": "Aline Ferreira",
      "receivedAt": "2024-04-09T16:59:03Z"
    }
  ],
  "c5e7bed067c94b319edad67e127d5473": [
    {
      "id": "f5caede9ce71415a8078a728e4fba2f3",
      "text": "O conteúdo do curso e a produção audiovisual são totalmente fora da curva. Realmente muito bom.\nSe você por em pratica o conteúdo vai realmente dominar a ferramenta Figma, pois os módulos abordam todos os conteúdos de fato.\n\nPorém o Feux deixar totalmente a desejar no suporte.\nA comunidade do Discord é muito unida, o pessoal se ajuda bastante por lá e esse é o suporte que você vai ter.\nO Feux some rapidamente depois de lançar a turma.\nSe houver promessa de novo módulo, espere sentado. Se ele cumprir não vai ser sem antes atrasar bastante e sumir sem dar notícias.\nÉ recorrente, isso ocorre em outros cursos dele.",
      "author": "Kayo",
      "receivedAt": "2023-10-11T19:15:18Z"
    }
  ],
  "d123aee3b5744a7a8e5ca6d56120de6e": [
    {
      "id": "41899237d9494515adbc2f79f2456887",
      "text": "Pessoal então, quando eu procurei por um curso eu queria algo dentro do meu orçamento (em torno de 1.800) e que obrigatoriamente fosse ao vivo (pra poder tirar dúvidas em tempo real e fosse um aprendizado humanizado) e que eu saísse com um case pronto no final do tudo. Pesquisei bastante e a Cubos me passou confiança pois desde o início encontrei as informações que precisava no site deles, um panorama de como seriam as aulas (conteúdo) e período de estudo (em torno de 4 meses). Além disso me passou credibilidade quando li reportagens sobre ser uma empresa tech com produto próprio, pelo CEO ser de Salvador e com iniciativas para pessoas de baixa renda. Com desconto que encontrei por aí de 15%, paguei em torno de 2.380, um pouco elevado para o meu orçamento mas não me arrependo. E valeu todo o dinheiro pois havia 1x na semana conversa sobre empregabilidade com Bia do RH tirando dúvidas sobre currículo, entrevista, linkedin, gupy etc e mensalmente duvidas sobre portfólio. Foi crucial para que eu pudesse arrumar todo meu linkedin e fazer meu currículo do jeito CERTO (vai por mim existe o jeito certo de fazer um CV na área tech). Semanalmente tem roda de conversação em inglês (de 2 a 3x na semana), semanalmente evento com um convidado da área tech pra falar sobre algum tema e evento de empregabilidade em que um aluno do curso que conseguiu uma vaga retorna pra dar dicas. Achei as aulas muito boas para o nível Júnior, o suporte é SENSACIONAL! Muito humanizado, desde o início. Você vê quem são as pessoas e te atendem sempre que você precisa. O acesso por enquanto é vitalício. Outra coisa é que eles costumam abrir vaga pra atuar na própria empresa de software, tem um banco de talentos onde eles indicam para estágio com empresas parceiras e também e um programa de seleção para desenvolverem (com auxilio de custo) um dos projetos feitos no curso. Indico demais a Cubos e eles estão constantemente melhorando a plataforma de estudo deles e tornando acessível. As aulas são pelo meet. O contato com professores, suporte e colegas de turma é no discord. O projeto é feito em grupo sorteado por tema (eles fazem um forms pra vc escolher 3 temas que sejam do seu interesse então no final vc vai fazer algo que goste). A única coisa que senti falta foi de uma apostila com o conteúdo das aulas. De todo modo, há conteúdo complementar que disponibilizam com artigos sobre o conteúdo da aula junto com o vídeo -e relatei isso à eles, pq toda semana eles rodam um forms pedindo sugestões e pedindo pra avaliar as aulas. São realmente empenhados.",
      "author": "Myrella",
      "receivedAt": "2024-03-06T00:31:36Z"
    }
  ],
  "e7cd3716c574419ab234f5e5f8809105": [
    {
      "id": "2440f6e14b7041588a56578cac65d8b4",
      "text": "A Interaction Design Foundation (IxDF) tem muito a oferecer, mas alguns aspectos poderiam ser aprimorados. Embora a plataforma forneça uma base sólida em UX, a falta de feedback detalhado dos instrutores é um ponto negativo. As correções das respostas escritas são superficiais e limitam o desenvolvimento dos alunos. Alguns cursos estão desatualizados, o que pode ser frustrante, especialmente em uma área que evolui rapidamente como o design digital. A ausência de crítica construtiva nos projetos também é um problema. A comunidade é um ponto forte, mas depender dela para feedback de projetos não substitui a orientação especializada esperada dos instrutores.",
      "author": "Felipe Peixoto",
      "receivedAt": "2024-05-17T19:47:30Z"
    }
  ],
  "ee1a43214491453c945bce06b09682a1": [
    {
      "id": "f48d21002c0e41208c43c552aadfd845",
      "text": "Gostei das aulas. No geral, eu achei bem estruturado o cronograma e os assuntos passados.\n\nEles vão seguindo o duplo diamante e apresentando os métodos que podem ser aplicados em cada diamante. Geralmente tem muita prática nas aulas. \n\nSobre as aulas, são obrigatórias, principalmente se você tiver Coderbolsa. Se não estiver enganado, tem que ter 85% de presença. Outro requisito é entregar os desafios em 7 dias corridos. É bem prático, então toda semana tem desafio (o que eu gosto, pq é mão na massa)\n\nEsses desafios são relacionados ao desafio final, que é solucionar um problema. No meu caso o problema foi \"Garantir qualidade de vida e lazer para idosos\". No final você tem um case completo.\n\nTem certificado. O professor vai avaliar cada case e, se for aprovado, o certificado é liberado. Se não, você precisa ajustar alguma coisa para ser liberado.",
      "author": "Marcos Cesar",
      "receivedAt": "2024-02-07T19:36:56Z"
    }
  ],
  "f111d5c8fc0342aba1d86085d5ada5f2": [
    {
      "id": "d1d0cb3661044696b9b2de47543f5dda",
      "text": "O curso te dá uma visão estrategica de Produto. E te faz pensar de forma geral os tópicos de interaçao e relacionamento do produto com o seu publico.\n\n Abriu minha mente pra muita coisa, tem um viés de negócio e não deixa de passar por todas etapas do ciclo de produto. Gostei da abordagem do Josias, super didático e acessível. \n\nNão pude fazer as aulas praticas ao vivo, mas nao fiquei pra tras na absorção do conteúdo.\n\nPretendo fazer o Product Design 4.0",
      "author": "Weberson",
      "receivedAt": "2024-02-22T00:46:52Z"
    }
  ]
}

export function getRelatosForCurso(cursoId: string): GuiaCursoRelato[] {
  return guiaCursoFeedbackByCourse[cursoId] ?? []
}

export function getGuiaCursoFeedbackStats() {
  const courseIds = Object.keys(guiaCursoFeedbackByCourse)
  const totalRelatos = courseIds.reduce(
    (sum, id) => sum + guiaCursoFeedbackByCourse[id].length,
    0,
  )
  return { coursesWithFeedback: courseIds.length, totalRelatos }
}
