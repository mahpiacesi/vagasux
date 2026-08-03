/** Snapshot from Notion database "Conteúdos em Design" (view Livros). */
/** Regenerar: node tools/scripts/export-guia-books.mjs <livros.json> */

export type GuiaBook = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
}

export const guiaBooks: GuiaBook[] = [
  {
    "id": "ed79df1d44fa4fdf927a4d10eecbd5cc",
    "title": "101 Design Methods",
    "authors": [
      "Vijay Kumar"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/1118083466?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=1118083466&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "174cf256cdf04b2b808a4badf5c4a145",
    "title": "A psicologia das cores",
    "authors": [
      "Eva Heller"
    ],
    "context": [
      "UI",
      "Design",
      "Psicologia"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/658828005X?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=658828005X&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "f0970f5652554d1fae01b78c5c52a495",
    "title": "About Face: The Essentials of Interaction Design",
    "authors": [
      "Alan Cooper"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B00MFPZ9UY?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B00MFPZ9UY&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "a13237687e3a4dd78e7ed5f07fcc3d77",
    "title": "Acessibilidade na Web",
    "authors": [
      "Reinaldo Ferraz"
    ],
    "context": [
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B0882KDCHK?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B0882KDCHK&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "e6cc64e477584cd7a176144b3c82c7b6",
    "title": "An Introduction to Service Design: Designing the Invisible",
    "authors": [
      "Lara Penin"
    ],
    "context": [
      "Service Design",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B07CMHDFGL?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B07CMHDFGL&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "e127b692a5444c4f800f084a50089585",
    "title": "Articulando Decisões de Design",
    "authors": [
      "Tom Greever"
    ],
    "context": [
      "Design",
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/6586057469?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6586057469&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "bdd0afbedcec44e6b04c18d12846978e",
    "title": "As Little Design As Possible: The Work of Dieter Rams",
    "authors": [
      "Sophie Lovell"
    ],
    "context": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/0714849189?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=0714849189&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "1298cbb0d9048050bf66d0591d90b30a",
    "title": "Brevidade inteligente: O poder de dizer muito com poucas palavras",
    "authors": [
      "Jim VandeHei"
    ],
    "context": [
      "Soft skills",
      "Comunicação"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/6555646659?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6555646659&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "69456efe491c421abce3549756c72972",
    "title": "Building Design Systems",
    "authors": [
      "Sarrah Vesselov",
      "Taurie Davis"
    ],
    "context": [
      "Design System"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/148424513X?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=148424513X&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "a14cdcda5e604cd98242308774b872f5",
    "title": "Building for everyone",
    "authors": [
      "Annie Jean-Baptiste"
    ],
    "context": [
      "Acessibilidade"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/1119646227?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=1119646227&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "9a43ed4ead1b4f9cb44180934db977a3",
    "title": "Como Convencer Alguém em 90 Segundos",
    "authors": [
      "Nicholas Boothman"
    ],
    "context": [
      "Comunicação"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8579303192?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8579303192&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "2369710f755049268d2c2c1e4cc47563",
    "title": "Design Better Books",
    "authors": [
      "Invision"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.designbetter.co/books"
  },
  {
    "id": "d4de6c5d755a48a2bfad012e60e232f5",
    "title": "Design Centrado no Usuário",
    "authors": [
      "Travis Lowdermilk"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8575223666?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8575223666&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "0b5eff963f4d48a9afe6e12829f1cf6f",
    "title": "Design com Neurociências",
    "authors": [
      "Alex Soares"
    ],
    "context": [
      "UX",
      "Psicologia",
      "Design Thinking"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B0BGVTJ693?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B0BGVTJ693&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "de09cc7595b44d94916d120fe35396f8",
    "title": "Design de Interação: Além da Interação Humano-Computador",
    "authors": [
      "Yvonne Rogers",
      "Helen Sharp",
      "Jennifer Preece"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8582600062?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8582600062&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "5620136963b4491f87e26bb5a7530059",
    "title": "Design de Produto: Uma visão Product-Led sobre design de produtos digitais",
    "authors": [
      "Josias Oliveira"
    ],
    "context": [
      "UX",
      "Produto",
      "Design"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B096Y8X2BF?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B096Y8X2BF&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "bfde60c674b740be99fbee450bab39cc",
    "title": "Design Emocional",
    "authors": [
      "Donald A. Norman"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8532523323?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8532523323&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "5f30ebb4335c40048057245dd7b03f8b",
    "title": "Design para a internet: Projetando a experiência perfeita",
    "authors": [
      "Felipe Memória"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/8535218769?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8535218769&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "791316dfac604123afd4725b8057b33d",
    "title": "Design para quem não é designer",
    "authors": [
      "Robin Williams"
    ],
    "context": [
      "Design"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/857416836X?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=857416836X&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "bdab0e6d8ef24b57a689dfc970ab0454",
    "title": "Design para um mundo complexo",
    "authors": [
      "Rafael Cardoso"
    ],
    "context": [
      "Design"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/658649799X?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=658649799X&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "e1b029d121fc439aaa0d72c1e972f44e",
    "title": "Design Systems",
    "authors": [
      "Alla Kholmatova"
    ],
    "context": [
      "Design System",
      "UI"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B076H49W1G?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B076H49W1G&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "a3fa155b5a77402499fe8ca32b7d211b",
    "title": "Design Thinking",
    "authors": [
      "Gláucia de Salles Ferro"
    ],
    "context": [
      "UX",
      "Design Thinking"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/6559390489?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6559390489&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "c47fe1c33fdb434f9f09995ec9acd9eb",
    "title": "Designing Interactions",
    "authors": [
      "Bill Moggridge"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/0262134748?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=0262134748&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "883ca1f6977445f19d5fbd9c6d2b4d4f",
    "title": "Designing Interfaces",
    "authors": [
      "Jenifer Tidwill",
      "Charles Brewer",
      "Aynne Valencia–brooks"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/1492051969?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=1492051969&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "e86f0b9cf8cd4be59cd78b052579e86a",
    "title": "Dominando a redação técnica",
    "authors": [
      "Elen Baldini"
    ],
    "context": [
      "Writing",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B0CM46MGQT?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B0CM46MGQT&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "1298cbb0d90480ba8bdceb00c67c83b5",
    "title": "Elementos do estilo tipográfico",
    "authors": [
      "Robert Bringhurst"
    ],
    "context": [
      "Design"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8592886600?asc_item-id=amzn1.ideas.RVLS7CINMSW2&linkCode=ll1&tag=vagasux-20&linkId=86256eaa0fd4bac72c7db2e737f3d4eb&language=pt_BR&ref_=as_li_ss_tl"
  },
  {
    "id": "e1e0bf2d106e47fc9bed75774b06ac98",
    "title": "Empatia Assertiva",
    "authors": [
      "Kim Scott"
    ],
    "context": [
      "Liderança",
      "Psicologia"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/655520219X?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=655520219X&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "0cb803119d974c0fa7e86af73aaa9555",
    "title": "Ergodesign e arquitetura de informação: trabalhando com o usuário",
    "authors": [
      "Luiz Agner"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/8577564444?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8577564444&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "98e488c0c6bc4936bd3a1c8931adcbea",
    "title": "Estratégia de UX",
    "authors": [
      "Jaime Levy"
    ],
    "context": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇺🇸",
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/6586057655?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6586057655&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "5afb13a67cde446299f0666ed371a6e0",
    "title": "Experiência do Usuário em Interfaces Digitais",
    "authors": [
      "André Grilo"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://issuu.com/andre-grilo/docs/experienciadousuarioinnterfaces_gri"
  },
  {
    "id": "3b18cbb0d90480c39e98f6913280716e",
    "title": "Extra Bold: um guia feminista, inclusivo, antirracista, não binário para designers",
    "authors": [
      "Ellen Lupton"
    ],
    "context": [
      "Design",
      "Diversidade",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://link.amazon/B02AlPldV"
  },
  {
    "id": "80c2e599489a4a3cab01b3e68d0e7404",
    "title": "Faça como Steve Jobs",
    "authors": [
      "Carmine Gallo"
    ],
    "context": [
      "Comunicação",
      "Liderança"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8563066161?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8563066161&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "1bbf0e01a5d84272b5e2c4b6d567d9a9",
    "title": "Figma Basics",
    "authors": [
      "Emanuel Bagerakis"
    ],
    "context": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://emanualcriativo.gumroad.com/l/tehtu"
  },
  {
    "id": "072b11cb41ae4e7db704d3ee9de8277e",
    "title": "Gaia: Um Guia De Recomendações Sobre Design Digital Inclusivo Para Pessoas Com Autismo",
    "authors": [
      "Talita Pagani"
    ],
    "context": [
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/8547339752?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8547339752&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "eefd873eabb84927ae4f0adf76b02199",
    "title": "Gamificar: Como a gamificação motiva as pessoas a fazerem coisas extraordinárias",
    "authors": [
      "Brian Burke"
    ],
    "context": [
      "UX",
      "Gamificação"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/8582891075?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8582891075&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "ec29031f2cc24a9c8a1af411a1a4c409",
    "title": "Gestão Moderna de Produtos Digitais",
    "authors": [
      "Diego Eis"
    ],
    "context": [
      "Produto",
      "Negócio",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B087F4FJSY?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B087F4FJSY&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "c8293fb0bfea45d89df592af5fd8c03c",
    "title": "História do Design Gráfico",
    "authors": [
      "Philip B. Meggs"
    ],
    "context": [
      "Design"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8575037757?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8575037757&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "a847ed9b95734daab43899adfbb7b048",
    "title": "Hooked: How to Build Habit-Forming Products",
    "authors": [
      "Nir Eyal"
    ],
    "context": [
      "Produto",
      "UX"
    ],
    "languages": [
      "🇺🇸",
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/8583394768?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8583394768&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "dec5c189ccd5455fb83b0ccdd9afbb3b",
    "title": "Information Architecture",
    "authors": [
      "Louis Rosenfeld",
      "Peter Morville",
      "Jorge Arango"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B015D78JV6?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B015D78JV6&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "aa49e12d18f743f48e6d4d5089c450c1",
    "title": "INSPIRED: How to Create Tech Products Customers Love",
    "authors": [
      "Marty Cagan"
    ],
    "context": [
      "Produto",
      "UX",
      "Tecnologia"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B077NRB36N?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B077NRB36N&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "d80d70aed8b94f6e8d49cff73d07ee31",
    "title": "Introdução ao Design Inclusivo",
    "authors": [
      "Danila Gomes",
      "Manuela Quaresma"
    ],
    "context": [
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/8547310339?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8547310339&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "86fe6c1376ae4163b7bfa7f6b5d1efde",
    "title": "Introdução e Boas Práticas em Ux Design",
    "authors": [
      "Fabricio Teixeira"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/8566250486?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8566250486&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "20fc9cf869df4e76a5a4e8bc93ca6d2b",
    "title": "Isto é Design de Serviço na Prática: Como Aplicar o Design de Serviço no Mundo Real: Manual do Praticante",
    "authors": [
      "Marc Stickdorn"
    ],
    "context": [
      "UX",
      "Service Design"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8582605277?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8582605277&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "08310f126032413ea202c662c7cb4f06",
    "title": "Isto é Design Thinking de Serviços: Fundamentos, Ferramentas, Casos",
    "authors": [
      "Marc Stickdorn"
    ],
    "context": [
      "UX",
      "Service Design"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8582602170?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8582602170&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "cd62493ec46d407090a071dc7d94445a",
    "title": "Lean UX: Projetando Ótimos Produtos com Equipes Agile",
    "authors": [
      "Jeff Gothelf",
      "Josh Seiden"
    ],
    "context": [
      "UX",
      "Ágil",
      "Produto"
    ],
    "languages": [
      "🇺🇸",
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B0BLSZ1JQR?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B0BLSZ1JQR&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "cae9ae933f424fdf82da543c56f1bd35",
    "title": "Leis da Psicologia Aplicadas a UX",
    "authors": [
      "Jon Yablonski"
    ],
    "context": [
      "UX",
      "Research",
      "Psicologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/6586057256?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6586057256&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "b6e5739d414a459a8b487043b21c07b9",
    "title": "Liderança em Design",
    "authors": [
      "Victor Zanini"
    ],
    "context": [
      "UX",
      "Liderança",
      "Design"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B08Z4BSVZ8?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B08Z4BSVZ8&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "1288cbb0d9048081aefef76d9cde740b",
    "title": "Livro Branco da Tecnologia Assistiva no Brasil",
    "authors": [
      "Jesus Carlos Delgado García"
    ],
    "context": [
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://educ.rec.br/escoladofuturoemcasa/wp-content/uploads/2021/08/LIVRO-BRANCO-DA-TECNOLOGIA-ASSISTIVA-NO-BRASIL.-Jesus-Carlos-Delgado-Garcia-Org.-ITS-BRASIL-Org..pdf"
  },
  {
    "id": "f941e2670d764b3bba640296d73ec291",
    "title": "Livros que todo designer deve comprar",
    "authors": [
      "Willian Matiola"
    ],
    "context": [
      "UI",
      "UX",
      "Produto",
      "Research",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "http://bit.ly/designlivros"
  },
  {
    "id": "74f00778b014479193a3252c9fb53936",
    "title": "Manual do Game UX",
    "authors": [
      "Rafael Lima"
    ],
    "context": [
      "Gamificação",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B0C1DRHPJT?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B0C1DRHPJT&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "b945e3c1ccb0466cab3d775d4331fa87",
    "title": "Mapeamento de Experiências",
    "authors": [
      "Jim Kalbach"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8550800619?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8550800619&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "b4407611393641bd809178a686f95326",
    "title": "Microinteractions: Full Color Edition: Designing with Details",
    "authors": [
      "Dan Saffer"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B00FRSNHIW?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B00FRSNHIW&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "acdf1adb276a42baa83a7a1a8ab16b40",
    "title": "Não Me Faça Pensar",
    "authors": [
      "Steve Krug"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8576088509?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8576088509&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "5b08ed9321404e9db396ca0352b4aeba",
    "title": "Negocie Como se Sua Vida Dependesse de Você",
    "authors": [
      "Chris Voss"
    ],
    "context": [
      "Comunicação"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8543108055?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8543108055&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "82e1c85950d44690bb1b34e4ef005eaa",
    "title": "Networking Para Quem Não Quer Fazer Networking",
    "authors": [
      "Karen Wickre"
    ],
    "context": [
      "Carreira",
      "Comunicação"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/6599815499?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6599815499&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "f5f3308aa067443aae9523882cbdec6f",
    "title": "O design como storytelling",
    "authors": [
      "Ellen Lupton"
    ],
    "context": [
      "UX",
      "Writing"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8584521747?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8584521747&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "33a4ebb8d6fa493880e397f3c3d7b7a7",
    "title": "O Design do Dia a Dia",
    "authors": [
      "Donald A. Norman"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8532520839?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8532520839&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "0ac47965279c47b3b788a62547a3ba77",
    "title": "O Guia Para Projetar UX",
    "authors": [
      "Russ Unger",
      "Carolyn Chandler"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8576083922?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8576083922&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "6c7a022f2ba7452bae0e7e6731ed4361",
    "title": "O jeito Disney de encantar os clientes",
    "authors": [
      "Disney Institute"
    ],
    "context": [
      "Service Design",
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8502124048?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8502124048&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "3f9d74c4d31148fa89d6eae913500304",
    "title": "O Poder do Uau",
    "authors": [
      "Funcionários da Zappos"
    ],
    "context": [
      "Service Design",
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/6555370246?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6555370246&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "66e16b5e98e1478697a142dfe82832a3",
    "title": "O Teste da Mãe",
    "authors": [
      "Rob Fitzpatrick"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B07QM7ZS7Q?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B07QM7ZS7Q&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "8633d45117414a02b393e6130296bf49",
    "title": "Org Design for Design Orgs",
    "authors": [
      "Peter Merholz"
    ],
    "context": [
      "Design System"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B01KU8O23M?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B01KU8O23M&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "c24afa52e3e64bc4be4e9a5d76025f65",
    "title": "Pensando em Serviços",
    "authors": [
      "Donella H. Meadows"
    ],
    "context": [
      "Service Design",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/6555644524?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6555644524&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "3b18cbb0d904800c91bee7f66214afd2",
    "title": "Políticas do design",
    "authors": [
      "Ruben Pater"
    ],
    "context": [
      "Design",
      "Diversidade"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://link.amazon/B02SdeZcL"
  },
  {
    "id": "5fccad1081794801b5eb37b190ed9325",
    "title": "Psychology for Designers",
    "authors": [
      "Joe Leech"
    ],
    "context": [
      "Psicologia",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B06Y593QPW?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B06Y593QPW&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "c1efb7a521404c8cb6beee51c3992165",
    "title": "Redação Estratégica Para UX: Aumente Engajamento, Conversão e Retenção com Cada Palavra",
    "authors": [
      "Torrey Podmajersky"
    ],
    "context": [
      "UX",
      "Writing"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8575228129?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8575228129&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "dd14fb48da954a8ebdaadcfab134790d",
    "title": "Reinvente sua empresa",
    "authors": [
      "David Heinemeier Hansson",
      "Jason Fried"
    ],
    "context": [
      "Produto",
      "Ágil"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/Reinvente-empresa-David-Heinemeier-Hansson/dp/8575427636/"
  },
  {
    "id": "3bda5e85f9744ffdaa0f51c46d8ab0fe",
    "title": "Ruined by Design",
    "authors": [
      "Mike Monteiro"
    ],
    "context": [
      "Design"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/Ruined-Design-Designers-Destroyed-English-ebook/dp/B07PS16XY9/"
  },
  {
    "id": "b28eb9bbbc5c4bceb68ba5912b92fdf8",
    "title": "Service Design: From Insight to Implementation",
    "authors": [
      "Andy Polaine"
    ],
    "context": [
      "Service Design",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/1933820330?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=1933820330&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "b3d890ca08224c34af8e8b013bca7c53",
    "title": "Solving Product Design Exercises: Questions & Answers",
    "authors": [
      "Artiom Dashinsky"
    ],
    "context": [
      "Produto",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/1977000428?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=1977000428&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "17114f8524a14ec4a9fdc643b2f06c73",
    "title": "Sprint - O método usado no Google para testar e aplicar novas ideias em apenas cinco dias",
    "authors": [
      "Jake Knapp"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8551001523?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8551001523&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "e0bae190f8bf48c79115c64ebf3c3762",
    "title": "Storytelling no Design de Produto",
    "authors": [
      "Anna Dahlström"
    ],
    "context": [
      "UX",
      "Produto",
      "Writing"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/6586057213?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=6586057213&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "7aeb2c990f114a8597a8b0b4c3019ce0",
    "title": "Surveys That Work",
    "authors": [
      "Caroline Jarrett"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B099FLDYK3?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B099FLDYK3&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "707a6d7b42d6447b8f80f836b93c1024",
    "title": "Ted Talks - O guia oficial do TED para falar em público",
    "authors": [
      "Chris Anderson"
    ],
    "context": [
      "Comunicação",
      "Liderança"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/858057935X?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=858057935X&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "58bc9d4f08f942149d1b3a8ff109c5cd",
    "title": "The Elements of User Experience: User-Centered Design for the Web and Beyond (Voices That Matter)",
    "authors": [
      "Jesse James Garrett"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B004JLMDOC?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B004JLMDOC&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "8be67555ea854f02819d1c722fbda594",
    "title": "The Guide to Product Analytics",
    "authors": [
      "Mixpanel"
    ],
    "context": [
      "Produto",
      "Métricas"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://mixpanel.com/content/guide-to-product-analytics/report/"
  },
  {
    "id": "1195b002015048b4a8cfd2355bd38cbb",
    "title": "The User Experience Team of One",
    "authors": [
      "Leah Buley"
    ],
    "context": [
      "UX",
      "Produto",
      "Carreira"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B00DUITE5Q?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B00DUITE5Q&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "3100e8acc2d441b192a363c8918466c0",
    "title": "User Experience Design: Como criar produtos digitais com foco nas pessoas",
    "authors": [
      "Rogério Pereira"
    ],
    "context": [
      "UX",
      "Research",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B07DNGNSY2?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B07DNGNSY2&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "f2a2644fda6d4ff090b14826862afb9a",
    "title": "User Story Mapping: Discover the Whole Story, Build the Right Product",
    "authors": [
      "Jeff Patton",
      "Peter Economy"
    ],
    "context": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B00NF07FHS?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B00NF07FHS&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "b5f7b5ae0c9f41cba2864298acbf5430",
    "title": "UX Design: Guia Definitivo com as Melhores Práticas de UX",
    "authors": [
      "Will Grant"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8575227769?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8575227769&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_d_asin"
  },
  {
    "id": "187175fae74a4d618346f772a9c479d4",
    "title": "UX estratégico - Design aplicado a ecossistema de produtos",
    "authors": [
      "Gabriel Pinheiro"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B09F1YCNJD?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B09F1YCNJD&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "b78182a0ef2d454f84b220a143794965",
    "title": "UX Research com sotaque brasileiro",
    "authors": [
      "Cecília Henriques",
      "Denise Pilar",
      "Elizete Ignácio"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.amazon.com.br/dp/B0BM8QF493?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B0BM8QF493&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "ae8b81dd41dd495cae9438b261df1650",
    "title": "UX Research: Practical Techniques for Designing Better Products",
    "authors": [
      "Brad Nunnally"
    ],
    "context": [
      "UX",
      "Research",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/B01N9BZ060?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=B01N9BZ060&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  },
  {
    "id": "50f3890573794506a627a0f48f70edb9",
    "title": "Value Proposition Design: Como Construir Propostas de Valor Inovadoras",
    "authors": [
      "Alex Osterwalder"
    ],
    "context": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "url": "https://www.amazon.com.br/dp/8550807257?linkCode=ssc&tag=onamzmari020a-20&creativeASIN=8550807257&asc_item-id=amzn1.ideas.RVLS7CINMSW2&ref_=aip_sf_list_spv_ons_mixed_d_asin"
  }
]
