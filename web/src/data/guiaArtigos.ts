/** Snapshot Notion "Conteúdos em Design" (Artigo). */
/** Regenerar: node tools/scripts/export-guia-artigos.mjs */

export type GuiaArtigo = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  /** Editora/Canal do Notion (ex.: Medium, UX Collective). */
  channels: string[]
  url: string
  /** Capa og:image do Medium (miro.medium.com) ou local em /guia/artigos/. */
  imageUrl?: string
  /** Capa veio do og:image do artigo no Medium. */
  mediumCover?: boolean
  /** Publicado no Medium da VagasUX. */
  vagasuxPublication?: boolean
  /** Data de criação no Notion — ordenação do preview. */
  addedAt?: string
}

/** Artigo em destaque — publicação oficial VagasUX no Medium. */
export const GUIA_FEATURED_ARTIGO_ID = '3b18cbb0d90480199280f8ca24f04d38'

export const guiaArtigos: GuiaArtigo[] = [
  {
    "id": "c8de7c2ff27749fcb623b7728c8d6f6a",
    "title": "A Complete List Of UX Deliverables",
    "authors": [
      "Nick Babich"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "channels": [
      "Medium",
      "UX Planet"
    ],
    "url": "https://uxplanet.org/a-complete-list-of-ux-deliverables-d62ccf1de434",
    "vagasuxPublication": false,
    "addedAt": "2020-08-03T02:41:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1186/1*9ieZHMy6IgYlRFPalba-Vw.png",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d904809d9e3ad5b7ab25c81e",
    "title": "A onda de layoffs e o risco para entrantes no mercado de tecnologia",
    "authors": [
      "Marianna Piacesi"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/ux-user-experience-design-em-portugues/a-onda-de-layoffs-e-o-risco-para-entrantes-no-mercado-de-tecnologia-e174d850cfdf",
    "vagasuxPublication": false,
    "addedAt": "2026-08-03T21:04:43Z"
  },
  {
    "id": "7465a0ae379d484c9f662aee7f49f190",
    "title": "A Relação entre UX e Métricas: O papel do designer no emprego de métricas",
    "authors": [
      "Gabriel Pinheiro"
    ],
    "context": [
      "UX",
      "Métricas",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/a-relacao-entre-ux-e-metricas-o-papel-do-designer-no-emprego-de-metricas-b132ee0bd539",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T14:40:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1200/1*WIzYPQ5sTcm_DBPINo5KsQ.jpeg",
    "mediumCover": true
  },
  {
    "id": "7da9a906ef21470893820bcf0cddda67",
    "title": "Como começar em UX design — um guia completo",
    "authors": [
      "Fabricio Teixeira"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/como-migrar-para-ux-design-comecar-guia-completo-875db7cc3b4",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T03:41:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1200/1*aqFh4uCj2cQaZTIuhnvSFg.png",
    "mediumCover": true
  },
  {
    "id": "3212814f55484c4fb58fb4bccfaaa414",
    "title": "Como documentar pesquisas de UX no Notion",
    "authors": [
      "Sheylla Lima"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "Ladies That UX"
    ],
    "url": "https://medium.com/ladies-that-ux-br/como-documentar-pesquisas-de-ux-no-notion-1095a61adfe0",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T05:55:00Z"
  },
  {
    "id": "0df0358045fb422db98e72a9608216a4",
    "title": "Como fizemos pesquisa pelo WhatsApp",
    "authors": [
      "Elisa Volpato"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "Magnetis Design"
    ],
    "url": "https://medium.com/magnetis-design/como-fizemos-pesquisa-pelo-whatsapp-cf8efebcda4b",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T03:26:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/1*sxJMbB1BTzglAxce12IJ9A.jpeg",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d90480ef9856c04db89067a0",
    "title": "Como foi organizar um desafio voluntário entre designers e ONGs",
    "authors": [
      "Marianna Piacesi"
    ],
    "context": [
      "UX",
      "Desafio",
      "Voluntariado"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/vagas-ux/como-foi-organizar-um-desafio-volunt%C3%A1rio-entre-designers-e-ongs-8c87f07f7740",
    "vagasuxPublication": true,
    "addedAt": "2026-08-03T21:03:52Z"
  },
  {
    "id": "863481fcfb65445da0b1d88b663caee8",
    "title": "Como melhorar a experiência dos entregadores de aplicativos? — estudo de caso de UX",
    "authors": [
      "Juliana Mazzo",
      "Lucas Machado Constantino",
      "Tamara Pinheiro"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/parcauxcase-9463eda06547",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T15:52:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1200/1*qWGLSweCwH7GXQbDsa62oA.jpeg",
    "mediumCover": true
  },
  {
    "id": "c4dfe01495ec4f30a3e9e416ad47c14d",
    "title": "Como montar um portfólio de UX se eu ainda não trabalho com UX?",
    "authors": [
      "Fabricio Teixeira"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://brasil.uxdesign.cc/como-montar-um-portf%C3%B3lio-de-ux-se-eu-ainda-n%C3%A3o-trabalho-com-ux-c5ec6434de20",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T04:58:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/1*zyK52ZY99TonbbrtmbYygQ.jpeg",
    "mediumCover": true
  },
  {
    "id": "3f693f150ac34619bf22a658e32155bf",
    "title": "Como organizamos e documentamos o trabalho de Produto e Design no iFood",
    "authors": [
      "Mateus Pinheiro"
    ],
    "context": [
      "UX",
      "Research",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "iFood Tech"
    ],
    "url": "https://medium.com/ifood-tech/organizando-e-documentando-o-trabalho-de-produto-e-design-no-ifood-ca82b32d78ed",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T02:02:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/0*fFlmwIRcm--3SKn1.jpg",
    "mediumCover": true
  },
  {
    "id": "2455b2208b4e4689840cad03fdfe9cb5",
    "title": "Como planejar uma pesquisa de UX?",
    "authors": [
      "Rayssa Araújo"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "Coletivo UX"
    ],
    "url": "https://coletivoux.com/como-planejar-uma-pesquisa-de-ux-3a66497ed9be",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T02:39:00Z"
  },
  {
    "id": "acbeafafb55c4bf0882628bdd780defc",
    "title": "Como tabular testes de usabilidade",
    "authors": [
      "Sheylla Lima"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/como-tabular-testes-de-usabilidade-eb4757d7a65d",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T05:56:00Z",
    "imageUrl": "https://miro.medium.com/v2/da:true/resize:fit:640/1*hRPqY0eXhg-wonXwEvmDgQ.gif",
    "mediumCover": true
  },
  {
    "id": "691998f8137a470e92054cf71a76c388",
    "title": "Desenhando um novo Chat para a OLX – estudo de caso de UX",
    "authors": [
      "Alice Wanderley"
    ],
    "context": [
      "UI",
      "UX",
      "Research",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "OLX"
    ],
    "url": "https://medium.com/labs-olx-brasil/desenhando-um-novo-chat-para-a-olx-773c3ce10a9f",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T02:24:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/1*c-MyxF6qkoZ6mB_p7yZOUQ.jpeg",
    "mediumCover": true
  },
  {
    "id": "24b8e61054574ab185759136d414fce7",
    "title": "Design e o poder da adaptação",
    "authors": [
      "Sol Lima"
    ],
    "context": [
      "UI",
      "UX",
      "Design System"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "Meiuca"
    ],
    "url": "https://medium.com/meiuca/design-e-o-poder-da-adapta%C3%A7%C3%A3o-2cc380d4e8cf",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T16:15:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:700/1*y2crguSV_XQVTeKZaoNnRw.png",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d90480f5ad0aec613c6b93e0",
    "title": "Documentação, Handoff e QA: Comunicação em Product Design",
    "authors": [
      "Helena Kayla Lange Andrighe"
    ],
    "context": [
      "UX",
      "Handoff",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/vagas-ux/documenta%C3%A7%C3%A3o-handoff-e-qa-comunica%C3%A7%C3%A3o-em-product-design-3bf4b34729a3",
    "vagasuxPublication": true,
    "addedAt": "2026-08-03T21:07:04Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:700/0*tHKZpie_vQ-e6xfQ",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d90480238e59cd1bcea2eaa1",
    "title": "E quando a empresa não precisa de um designer?",
    "authors": [
      "Andre Hiro"
    ],
    "context": [
      "UX",
      "Carreira",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/vagas-ux/e-quando-a-empresa-n%C3%A3o-precisa-de-um-designer-3f847a3fa2fc",
    "vagasuxPublication": true,
    "addedAt": "2026-08-03T21:08:36Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:700/0*Krl67l6ndcHGMq-_",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d90480199280f8ca24f04d38",
    "title": "Existe tabu em vestir a camisa de júnior?",
    "authors": [
      "Marianna Piacesi"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/vagas-ux/existe-tabu-em-vestir-a-camisa-de-j%C3%BAnior-ebc907db384",
    "vagasuxPublication": true,
    "addedAt": "2026-08-03T21:03:08Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1000/1*ZwZTWCKR_hRaqFJMHNwG5A.png",
    "mediumCover": true
  },
  {
    "id": "ecf2cdbcc7b247a5bde5933f1aa5f383",
    "title": "Glossário do Product Designer",
    "authors": [
      "Victor Rosato"
    ],
    "context": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "Aela"
    ],
    "url": "https://medium.com/aela/gloss%C3%A1rio-do-product-designer-f2644656ccd0",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T02:08:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:500/1*G8BLsvfRt3K-E3je4Ozp4Q.gif",
    "mediumCover": true
  },
  {
    "id": "5dd3b024c3864efabb52af819c41a5a6",
    "title": "Good to great UI animation tips",
    "authors": [
      "Pablo Stanley"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://uxdesign.cc/good-to-great-ui-animation-tips-7850805c12e5",
    "vagasuxPublication": false,
    "addedAt": "2020-08-03T00:46:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1200/1*x8wGMNfuh1e5Ew6k0aF_iQ.png",
    "mediumCover": true
  },
  {
    "id": "3b28cbb0d90480989705ebfb4caa7fd6",
    "title": "How I Validated Design Decisions Before Writing Production Code",
    "authors": [
      "Luca Masud"
    ],
    "context": [
      "UX",
      "IA"
    ],
    "languages": [
      "🇺🇸"
    ],
    "channels": [
      "Slack Design"
    ],
    "url": "https://slack.design/articles/how-i-validated-design-decisions-before-writing-production-code/",
    "vagasuxPublication": false,
    "addedAt": "2026-08-04T21:10:53Z",
    "imageUrl": "https://slack.design/wp-content/uploads/sites/8/2026/06/Slack_Prototyping_Art_Article_800X800.png?resize=1024,1024",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d90480e6acbed6c8101dc2fa",
    "title": "Mentorias em design: Como funcionam e por que fazer?",
    "authors": [
      "Marianna Piacesi"
    ],
    "context": [
      "UX",
      "Carreira",
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/ux-user-experience-design-em-portugues/mentorias-pra-quem-t%C3%A1-come%C3%A7ando-como-funcionam-e-por-que-fazer-2dbeb8b9527b",
    "vagasuxPublication": false,
    "addedAt": "2026-08-03T21:00:41Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1000/1*gADDjFywTS1zZ9cu50JLWg.png",
    "mediumCover": true
  },
  {
    "id": "7d94a3b8c6034940b2fe8f7437a36a75",
    "title": "Minhas maiores dificuldades como Product Designer",
    "authors": [
      "Lucas César"
    ],
    "context": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "ux.design"
    ],
    "url": "https://brasil.uxdesign.cc/minhas-maiores-dificuldades-como-product-designer-23159f5a5285",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T02:11:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1200/1*UiK25lHl7y2HcLpdmNE8AQ.jpeg",
    "mediumCover": true
  },
  {
    "id": "a0b8994b1460434cb223dffe96ec7fc2",
    "title": "Nossa indústria precisa de mais designers. E o mais importante: um tipo diferente de designer.",
    "authors": [
      "Fabricio Teixeira"
    ],
    "context": [
      "UI",
      "UX",
      "Carreira",
      "Produto"
    ],
    "languages": [
      "🇺🇸",
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/nossa-ind%C3%BAstria-precisa-de-mais-designers-e-o-mais-importante-um-tipo-diferente-de-designer-9e59d0f25060",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T03:18:00Z"
  },
  {
    "id": "0bf0232b14184fc5b75a4eeeac764070",
    "title": "Nuggets: como democratizar pesquisas de design",
    "authors": [
      "Gabriela Bassa"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [],
    "channels": [
      "Medium",
      "QuintoAndar Design"
    ],
    "url": "https://medium.com/quintoandar-design/nuggets-como-democratizar-pesquisas-de-design-9b1a717879f0",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T02:12:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/1*C7f3DxJLsTcK-bGmjkH99A.png",
    "mediumCover": true
  },
  {
    "id": "602b19616fee453cafe5ba00e9ee07b9",
    "title": "O tal do Product Designer: um pouco do que fazemos diariamente",
    "authors": [
      "Karla Lima"
    ],
    "context": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/o-tal-do-product-designer-um-pouco-do-que-fazemos-diariamente-3bb7d5dd3fd3",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T15:00:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1200/1*lqu3BoXL1JHJ3Guov68Wdg.png",
    "mediumCover": true
  },
  {
    "id": "ef5e01ed5c5d4681adae93ac5306971d",
    "title": "OPS! Evoluímos nosso Design System",
    "authors": [
      "Jan Klever"
    ],
    "context": [],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "Tech at Quero"
    ],
    "url": "https://medium.com/techatquero/ops-evolu%C3%ADmos-nosso-design-system-c7595df0d231",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T02:37:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:700/1*tl4eahdOAOf6jawVWuHMwA.png",
    "mediumCover": true
  },
  {
    "id": "2e4b215267b045db8aa6222b1ea1640b",
    "title": "Perguntas para fazer quando for entrevistado para uma vaga de UX",
    "authors": [
      "Fabricio Teixeira"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/perguntas-para-fazer-quando-for-entrevistado-para-uma-vaga-de-ux-b158fa710489",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T05:17:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1200/1*hfgqYBCjbT6lB21UJTE08g.jpeg",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d904805aba16c58f51ce7838",
    "title": "Precisamos falar sobre um (ou vários) elefantes na área de UX",
    "authors": [
      "Marianna Piacesi"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/ux-user-experience-design-em-portugues/precisamos-falar-sobre-um-ou-v%C3%A1rios-elefantes-na-%C3%A1rea-de-ux-6a93561b73ca",
    "vagasuxPublication": false,
    "addedAt": "2026-08-03T21:02:18Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1280/1*FzJTf3IH0F2s-OW_mC7UxA.png",
    "mediumCover": true
  },
  {
    "id": "4711d4b232e94d6dbd61e01017efc382",
    "title": "Qual o papel do UI Designer na construção de um produto?",
    "authors": [
      "Diogo Kpelo"
    ],
    "context": [
      "UI",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "Loft Tech"
    ],
    "url": "https://brasil.uxdesign.cc/qual-o-papel-do-ui-designer-na-constru%C3%A7%C3%A3o-de-um-produto-1b07dded5d09",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T14:25:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/1*wE9dfPvQybLn25rML1OjXQ.jpeg",
    "mediumCover": true
  },
  {
    "id": "d61cb321ee26469abe748ade5283f956",
    "title": "Ser um UX generalista ou um UX especialista — eis a questão",
    "authors": [
      "Fabricio Teixeira"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/ser-um-ux-generalista-ou-um-ux-especialista-eis-a-quest%C3%A3o-90b39c7a6b1f",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T05:15:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:500/0*Pap14IYogV6ik67C.png",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d904800387b9d71c3077419d",
    "title": "Sobre layoffs, recolocação e novas perspectivas",
    "authors": [
      "Marianna Piacesi"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/vagas-ux/sobre-layoffs-recoloca%C3%A7%C3%A3o-e-novas-perspectivas-cffdee613d6e",
    "vagasuxPublication": true,
    "addedAt": "2026-08-03T21:05:49Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/1*EPphKKuh3Q7zKxrcJpsdQg.png",
    "mediumCover": true
  },
  {
    "id": "e87ac2cef4d3492792600685f550a327",
    "title": "UX Design & Psicanálise | Parte 2",
    "authors": [
      "Odair Faléco"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "Coletivo UX"
    ],
    "url": "https://coletivoux.com/ux-design-psicanalise-2-38550e8fd941",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T15:18:00Z"
  },
  {
    "id": "39d26cf5c2d24785b866503b5a1cb68a",
    "title": "UX Writing em produto: a lógica por trás do conteúdo",
    "authors": [
      "Caroline Linhares"
    ],
    "context": [
      "UX",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "QuintoAndar Design"
    ],
    "url": "https://medium.com/quintoandar-design/ux-writing-em-produto-a-l%C3%B3gica-por-tr%C3%A1s-do-conte%C3%BAdo-2e7aa0de3b9",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T15:03:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:700/1*fMqDoZ_YzJuQzk-lRMTgSA.jpeg",
    "mediumCover": true
  },
  {
    "id": "8b78a51e463f41478964fc7b0650d205",
    "title": "Você não precisa saber tudo sobre UX",
    "authors": [
      "Fabricio Teixeira"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium",
      "UX Collective"
    ],
    "url": "https://brasil.uxdesign.cc/voc%C3%AA-n%C3%A3o-precisa-saber-tudo-sobre-ux-175e53933f60",
    "vagasuxPublication": false,
    "addedAt": "2020-08-02T05:16:00Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1400/1*uolQeS3oH07YWIshMSFu1w.jpeg",
    "mediumCover": true
  },
  {
    "id": "3b18cbb0d904807aa044cc98f91b00a4",
    "title": "Voluntariado & hands-on: conectando a prática com a colaboração",
    "authors": [
      "Marianna Piacesi"
    ],
    "context": [
      "UX",
      "Voluntariado"
    ],
    "languages": [
      "🇧🇷"
    ],
    "channels": [
      "Medium"
    ],
    "url": "https://medium.com/ux-user-experience-design-em-portugues/voluntariado-hands-on-conectando-a-pr%C3%A1tica-com-a-colabora%C3%A7%C3%A3o-4f1476f37d9c",
    "vagasuxPublication": false,
    "addedAt": "2026-08-03T21:01:34Z",
    "imageUrl": "https://miro.medium.com/v2/resize:fit:1000/1*VKnuUStf6EG4ofW1KNF_lQ.png",
    "mediumCover": true
  }
]

/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaArtigoContextTags(): string[] {
  const tags = new Set<string>()
  for (const artigo of guiaArtigos) {
    for (const tag of artigo.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaArtigosByContext(
  articles: GuiaArtigo[],
  contextTag: string | null,
): GuiaArtigo[] {
  if (!contextTag) return articles
  return articles.filter((artigo) => artigo.context.includes(contextTag))
}

/** Separa o artigo em destaque dos demais, mantendo a ordem original do restante. */
export function splitGuiaFeaturedArtigo(articles: GuiaArtigo[]): {
  featured: GuiaArtigo | null
  rest: GuiaArtigo[]
} {
  const featured =
    articles.find((artigo) => artigo.id === GUIA_FEATURED_ARTIGO_ID) ?? null
  const rest = articles.filter((artigo) => artigo.id !== GUIA_FEATURED_ARTIGO_ID)
  return { featured, rest }
}
