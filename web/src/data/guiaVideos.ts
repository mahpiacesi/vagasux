/** Snapshot Notion "Conteúdos em Design" (Vídeo) + canal VagasUX no YouTube. */
/** Regenerar: node tools/scripts/export-guia-videos.mjs */

export type GuiaVideo = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
  /** Thumbnail YouTube i.ytimg.com/vi/ quando aplicável. */
  imageUrl?: string
  youtubeVideoId?: string
  /** Vídeo publicado no canal VagasUX. */
  vagasuxChannel?: boolean
}

/** Vídeo em destaque do canal — "Por que eu não passei na entrevista?" */
export const GUIA_FEATURED_VIDEO_YOUTUBE_ID = '_h94hLBW_D4'

export const guiaVideos: GuiaVideo[] = [
  {
    "id": "b536e3b920514602805a8a24e161fbcd",
    "title": "[Open Class] UX Research: como planejar personas com Karla Cruz",
    "authors": [
      "Karla Cruz"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/rfmMwi6ufFo",
    "vagasuxChannel": false,
    "youtubeVideoId": "rfmMwi6ufFo",
    "imageUrl": "https://i.ytimg.com/vi/rfmMwi6ufFo/hqdefault.jpg"
  },
  {
    "id": "9377d1c6f5654f85b6a8be6ec26a2196",
    "title": "[Webinar] UX Research",
    "authors": [
      "Digital House Brasil"
    ],
    "context": [
      "UX",
      "Research",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Hz3k7TEFMkM",
    "vagasuxChannel": false,
    "youtubeVideoId": "Hz3k7TEFMkM",
    "imageUrl": "https://i.ytimg.com/vi/Hz3k7TEFMkM/hqdefault.jpg"
  },
  {
    "id": "9f28a7b9e1ed458cad035c160792a7c8",
    "title": "Acessibilidade em produtos digitais",
    "authors": [
      "UX Trends"
    ],
    "context": [
      "Acessibilidade",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/UvdfHtYCW9M",
    "vagasuxChannel": false,
    "youtubeVideoId": "UvdfHtYCW9M",
    "imageUrl": "https://i.ytimg.com/vi/UvdfHtYCW9M/hqdefault.jpg"
  },
  {
    "id": "909f66e3f97b4edb895237ea806f29f0",
    "title": "Aulas de UX",
    "authors": [
      "Daniel Furtado"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/playlist?list=PLx_6W4OtI_rl8_RjmFdpye7yIaVwp66IC",
    "vagasuxChannel": false
  },
  {
    "id": "3d6c63f1f4714872b2d914082896d1cd",
    "title": "Carreira e liderança em UX para mulheres",
    "authors": [
      "Luiz Resende"
    ],
    "context": [
      "Carreira",
      "UX",
      "Liderança",
      "Síndrome do impostor"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=DGiqm-WimEY&t=2s",
    "vagasuxChannel": false,
    "youtubeVideoId": "DGiqm-WimEY",
    "imageUrl": "https://i.ytimg.com/vi/DGiqm-WimEY/hqdefault.jpg"
  },
  {
    "id": "140bb6eea9d74f7f85d4476be9825edc",
    "title": "Chega de comparar UX e UI",
    "authors": [
      "Andrei Gurgel"
    ],
    "context": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/vvdTD0zzOWw",
    "vagasuxChannel": false,
    "youtubeVideoId": "vvdTD0zzOWw",
    "imageUrl": "https://i.ytimg.com/vi/vvdTD0zzOWw/hqdefault.jpg"
  },
  {
    "id": "be244257961443159d52d0f987f0cbb0",
    "title": "Clube do UX - Síndrome do Impostor",
    "authors": [
      "Bruna Castro"
    ],
    "context": [
      "UX",
      "Síndrome do impostor"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=vT_ZBRzFlRA&feature=youtu.be",
    "vagasuxChannel": false,
    "youtubeVideoId": "vT_ZBRzFlRA",
    "imageUrl": "https://i.ytimg.com/vi/vT_ZBRzFlRA/hqdefault.jpg"
  },
  {
    "id": "dcee06408aa245f3a4dc3a89105e0dd3",
    "title": "Como migrar para design?",
    "authors": [
      "Rodrigo Lemes"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=l792nYIF1cs",
    "vagasuxChannel": false,
    "youtubeVideoId": "l792nYIF1cs",
    "imageUrl": "https://i.ytimg.com/vi/l792nYIF1cs/hqdefault.jpg"
  },
  {
    "id": "e7a42cc5fb1749df9f899f63483ddfac",
    "title": "Construa uma carreira em UX Design",
    "authors": [
      "How Bootcamps"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/icxTmih_JqY",
    "vagasuxChannel": false,
    "youtubeVideoId": "icxTmih_JqY",
    "imageUrl": "https://i.ytimg.com/vi/icxTmih_JqY/hqdefault.jpg"
  },
  {
    "id": "d8c1aa4d3dee4afca1c0e25522acf121",
    "title": "Construindo uma interface do zero no Figma",
    "authors": [
      "Gilberto Prado"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/sXwgAD7RRXY",
    "vagasuxChannel": false,
    "youtubeVideoId": "sXwgAD7RRXY",
    "imageUrl": "https://i.ytimg.com/vi/sXwgAD7RRXY/hqdefault.jpg"
  },
  {
    "id": "8bb2433c976344bb857c11520366b8fe",
    "title": "Deficiência Tech Talk",
    "authors": [
      "Deficiência Tech"
    ],
    "context": [
      "UX",
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/OXBxJ4ex8TQ",
    "vagasuxChannel": false,
    "youtubeVideoId": "OXBxJ4ex8TQ",
    "imageUrl": "https://i.ytimg.com/vi/OXBxJ4ex8TQ/hqdefault.jpg"
  },
  {
    "id": "46339e8edf8944f89c9f70cd4ba603a6",
    "title": "Designer precisa de faculdade?",
    "authors": [
      "Maiane Araujo"
    ],
    "context": [
      "UI",
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/xP5GdX-TT1o",
    "vagasuxChannel": false,
    "youtubeVideoId": "xP5GdX-TT1o",
    "imageUrl": "https://i.ytimg.com/vi/xP5GdX-TT1o/hqdefault.jpg"
  },
  {
    "id": "1b8226d6f5864a03a2bbd773e388afe9",
    "title": "Dicas de Figma",
    "authors": [
      "Layla Codogno"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.loom.com/share/0fbce3e6bbe7412c8b2c0a7018f6f662",
    "vagasuxChannel": false
  },
  {
    "id": "b68e70e34b764f41bf0002d36c77685d",
    "title": "Dicas sobre Linkedin",
    "authors": [
      "Tá boa?"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.instagram.com/stories/highlights/17987355460215481/",
    "vagasuxChannel": false
  },
  {
    "id": "db83394f34f740beb2784b771d5904ac",
    "title": "Diversidade em UX Research",
    "authors": [
      "Rafaela de Souza",
      "Daniel Furtado"
    ],
    "context": [
      "UX",
      "Research",
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/oAWY8WZdBVE",
    "vagasuxChannel": false,
    "youtubeVideoId": "oAWY8WZdBVE",
    "imageUrl": "https://i.ytimg.com/vi/oAWY8WZdBVE/hqdefault.jpg"
  },
  {
    "id": "1d4afb7abcfd42148631f744b247e360",
    "title": "Do Design Gráfico ao Design Ops",
    "authors": [
      "Jan Klever"
    ],
    "context": [
      "UI",
      "Design System",
      "Transição"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=NW98qIMqVDU&feature=youtu.be",
    "vagasuxChannel": false,
    "youtubeVideoId": "NW98qIMqVDU",
    "imageUrl": "https://i.ytimg.com/vi/NW98qIMqVDU/hqdefault.jpg"
  },
  {
    "id": "0b8ec15d43d04ed4a8333a24705db9cf",
    "title": "Guia para testes remotos de usuários",
    "authors": [
      "Andrei Gurgel",
      "Elisa Volpato"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [],
    "url": "https://www.youtube.com/watch?v=jLHjeaCOKns",
    "vagasuxChannel": false,
    "youtubeVideoId": "jLHjeaCOKns",
    "imageUrl": "https://i.ytimg.com/vi/jLHjeaCOKns/hqdefault.jpg"
  },
  {
    "id": "0dbc496ff7ec4be2a3deb3735a048e72",
    "title": "JOTA Talks #4 Design System",
    "authors": [
      "Marianna Piacesi"
    ],
    "context": [
      "UI",
      "Design System"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/TOmtYQR19Ps",
    "vagasuxChannel": false,
    "youtubeVideoId": "TOmtYQR19Ps",
    "imageUrl": "https://i.ytimg.com/vi/TOmtYQR19Ps/hqdefault.jpg"
  },
  {
    "id": "4cbfdad3154c44368f97f885aa64881d",
    "title": "Júnior, pleno ou sênior?",
    "authors": [
      "Andrei Gurgel"
    ],
    "context": [
      "Carreira",
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/HsvucwyE9BI",
    "vagasuxChannel": false,
    "youtubeVideoId": "HsvucwyE9BI",
    "imageUrl": "https://i.ytimg.com/vi/HsvucwyE9BI/hqdefault.jpg"
  },
  {
    "id": "ea3cf1279b5d4c938ea761b0e7aa919e",
    "title": "Lista de vídeos do UXQSOMA",
    "authors": [
      "Vanessa Pedra"
    ],
    "context": [
      "UX",
      "Acessibilidade",
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/playlist?list=PL9N8zJ9ukDxQwC5SX9DoVgWBpaKdZEDRI",
    "vagasuxChannel": false
  },
  {
    "id": "1ecfc5093b16405cbb0e0ffe516b3931",
    "title": "Lista de vídeos para ouvir sobre profissionais da área [Late UX Show]",
    "authors": [
      "Andrei Gurgel"
    ],
    "context": [
      "UX",
      "Carreira",
      "Liderança"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/playlist?list=PL5Ya9DqHANRLjuSZ6leUwUVD9jiYbMZU4",
    "vagasuxChannel": false
  },
  {
    "id": "2389f7498f8f49d4ab17a7a89dc7ef63",
    "title": "Lista de vídeos sobre Ferramentas",
    "authors": [
      "Andrei Gurgel"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/playlist?list=PL5Ya9DqHANRJnrrffC_QmsdZ6oPVUfuiM",
    "vagasuxChannel": false
  },
  {
    "id": "01c789d02b9b43bd94fcb95ae9d24b3e",
    "title": "Lista de vídeos sobre Fundamentos de UX",
    "authors": [
      "Daniel Furtado"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/playlist?list=PLx_6W4OtI_rnc1dAoiym-dixHcL5VIJ70",
    "vagasuxChannel": false
  },
  {
    "id": "abd722c66c444cdc9dcd4e6461187bbe",
    "title": "Lista de vídeos sobre Product Discovery",
    "authors": [
      "Andrei Gurgel"
    ],
    "context": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/playlist?list=PL5Ya9DqHANRLsDtmdSkE1z_twTHALkGXA",
    "vagasuxChannel": false
  },
  {
    "id": "fa9ba936e708453fbbb2c7fe306c1341",
    "title": "Lista de vídeos sobre Usabilidade",
    "authors": [
      "Daniel Furtado"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/playlist?list=PLx_6W4OtI_rkeSc_2RepxfmnJ3ihAujKr",
    "vagasuxChannel": false
  },
  {
    "id": "725958e13b1f4afcb263e0a46c57d31e",
    "title": "O que as empresas procuram em um Designer Jr?",
    "authors": [
      "Apparicio Junior",
      "Rita Oliveira"
    ],
    "context": [
      "Carreira",
      "Transição",
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=WTc8NiQCJXM&t=4s",
    "vagasuxChannel": false,
    "youtubeVideoId": "WTc8NiQCJXM",
    "imageUrl": "https://i.ytimg.com/vi/WTc8NiQCJXM/hqdefault.jpg"
  },
  {
    "id": "0651adaee1cf41a9b64ab8f3d511cff1",
    "title": "Observe 2020",
    "authors": [
      "Observe"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=9AMEwlGBw0U&list=PLOKOB3p-rWVao9g1Vwn9LhLR_s14PUuKj&ab_channel=Observe",
    "vagasuxChannel": false,
    "youtubeVideoId": "9AMEwlGBw0U",
    "imageUrl": "https://i.ytimg.com/vi/9AMEwlGBw0U/hqdefault.jpg"
  },
  {
    "id": "16d76d0a164148af9581dcc587ca1bc4",
    "title": "Os cases de UX que as empresas pedem e como ir bem neles",
    "authors": [
      "Georgia Demas"
    ],
    "context": [
      "UI",
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/wmSvqJD7hu0",
    "vagasuxChannel": false,
    "youtubeVideoId": "wmSvqJD7hu0",
    "imageUrl": "https://i.ytimg.com/vi/wmSvqJD7hu0/hqdefault.jpg"
  },
  {
    "id": "65b39bf347e74e58bc096bf51df4e8eb",
    "title": "Por onde começar no design?",
    "authors": [
      "Rodrigo Lemes"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=R9-ePfnyM5k",
    "vagasuxChannel": false,
    "youtubeVideoId": "R9-ePfnyM5k",
    "imageUrl": "https://i.ytimg.com/vi/R9-ePfnyM5k/hqdefault.jpg"
  },
  {
    "id": "9075c946f530400eac28c836c31b6a4f",
    "title": "Por que eu não passei na entrevista?",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Transição",
      "Carreira",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://youtu.be/_h94hLBW_D4",
    "vagasuxChannel": true,
    "youtubeVideoId": "_h94hLBW_D4",
    "imageUrl": "https://i.ytimg.com/vi/_h94hLBW_D4/hqdefault.jpg"
  },
  {
    "id": "1f212d9db1364c61b07dfd07be8f9c80",
    "title": "Talks DEVPIRA 2020",
    "authors": [
      "DEVPIRA"
    ],
    "context": [
      "UX",
      "Produto",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/playlist?list=PLR1hL-ocTzxdozhP6xwcsuRrl2o9UAabB",
    "vagasuxChannel": false
  },
  {
    "id": "c4577cf9e0ae44d2be819836b59195e7",
    "title": "Você já pensou em acessibilidade?",
    "authors": [
      "Isabela Nevo"
    ],
    "context": [
      "UX",
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=IvHFsmEEXkU",
    "vagasuxChannel": false,
    "youtubeVideoId": "IvHFsmEEXkU",
    "imageUrl": "https://i.ytimg.com/vi/IvHFsmEEXkU/hqdefault.jpg"
  },
  {
    "id": "yt-DtKhxKVsr4E",
    "title": "Workshop Google Analytics",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=DtKhxKVsr4E",
    "youtubeVideoId": "DtKhxKVsr4E",
    "imageUrl": "https://i.ytimg.com/vi/DtKhxKVsr4E/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-Kqn7FBNsA-A",
    "title": "Design System para júniors",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Kqn7FBNsA-A",
    "youtubeVideoId": "Kqn7FBNsA-A",
    "imageUrl": "https://i.ytimg.com/vi/Kqn7FBNsA-A/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-9HROK4g3Jks",
    "title": "Masterclass - Inglês no processo seletivo de UX",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=9HROK4g3Jks",
    "youtubeVideoId": "9HROK4g3Jks",
    "imageUrl": "https://i.ytimg.com/vi/9HROK4g3Jks/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt--cA9qBcQHJU",
    "title": "Workshop Google Analytics com Adriana Akamine",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=-cA9qBcQHJU",
    "youtubeVideoId": "-cA9qBcQHJU",
    "imageUrl": "https://i.ytimg.com/vi/-cA9qBcQHJU/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-j00Zb4GxGGU",
    "title": "⁠Por onde começar a estudar dados com Gabriel Pinheiro",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=j00Zb4GxGGU",
    "youtubeVideoId": "j00Zb4GxGGU",
    "imageUrl": "https://i.ytimg.com/vi/j00Zb4GxGGU/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-tTn60hus-UE",
    "title": "Live Design Crypto e Blockchain - O Futuro da Experiência Digital com Priscila Caldas",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=tTn60hus-UE",
    "youtubeVideoId": "tTn60hus-UE",
    "imageUrl": "https://i.ytimg.com/vi/tTn60hus-UE/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-GZZtjREWR74",
    "title": "Mês de métricas - Huxley Dias",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=GZZtjREWR74",
    "youtubeVideoId": "GZZtjREWR74",
    "imageUrl": "https://i.ytimg.com/vi/GZZtjREWR74/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-75ZbJKoJOYo",
    "title": "Chegamos ao TikTok",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=75ZbJKoJOYo",
    "youtubeVideoId": "75ZbJKoJOYo",
    "imageUrl": "https://i.ytimg.com/vi/75ZbJKoJOYo/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-AOXKamzZ7CY",
    "title": "Essa vaga tem vaguiner com Rita Pinaffi",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=AOXKamzZ7CY",
    "youtubeVideoId": "AOXKamzZ7CY",
    "imageUrl": "https://i.ytimg.com/vi/AOXKamzZ7CY/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-chwJX6DCfJk",
    "title": "COMO A INVENÇÃO DO MOUSE TRANSFORMOU O #DESIGN DE INTERAÇÃO",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=chwJX6DCfJk",
    "youtubeVideoId": "chwJX6DCfJk",
    "imageUrl": "https://i.ytimg.com/vi/chwJX6DCfJk/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-DppPDuQh25o",
    "title": "A HISTÓRIA DA INVENÇÃO DO MOUSE",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=DppPDuQh25o",
    "youtubeVideoId": "DppPDuQh25o",
    "imageUrl": "https://i.ytimg.com/vi/DppPDuQh25o/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-6CMywXh0_mw",
    "title": "Essa vaga tem vaguiner com Aline Miyaki",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=6CMywXh0_mw",
    "youtubeVideoId": "6CMywXh0_mw",
    "imageUrl": "https://i.ytimg.com/vi/6CMywXh0_mw/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-UOaDuDM7lqU",
    "title": "Estamos fazendo acessibilidade? com Cintia Romero",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=UOaDuDM7lqU",
    "youtubeVideoId": "UOaDuDM7lqU",
    "imageUrl": "https://i.ytimg.com/vi/UOaDuDM7lqU/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-254JWwd1ZYM",
    "title": "Como funciona a Design Critique da VagasUX?",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=254JWwd1ZYM",
    "youtubeVideoId": "254JWwd1ZYM",
    "imageUrl": "https://i.ytimg.com/vi/254JWwd1ZYM/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-3aODngaHTdU",
    "title": "Como se motivar de maneira saudável? Cuide da sua saúde mental durante a migração para UX 💛",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=3aODngaHTdU",
    "youtubeVideoId": "3aODngaHTdU",
    "imageUrl": "https://i.ytimg.com/vi/3aODngaHTdU/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-UzsuL8WGeJw",
    "title": "WEBINAR DE #ANTROPOLOGIA com Eros Sester e Marcelo Perilo",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=UzsuL8WGeJw",
    "youtubeVideoId": "UzsuL8WGeJw",
    "imageUrl": "https://i.ytimg.com/vi/UzsuL8WGeJw/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-Q-A16IB2Z6s",
    "title": "A ARTE DE ENCANTAR PESSOAS - Dicas de #comunicação para o sucesso profissional",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Q-A16IB2Z6s",
    "youtubeVideoId": "Q-A16IB2Z6s",
    "imageUrl": "https://i.ytimg.com/vi/Q-A16IB2Z6s/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-zhbOJK_6bP4",
    "title": "#S2-02: Essa vaga tem vaguiner com Silvia Nascimento",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=zhbOJK_6bP4",
    "youtubeVideoId": "zhbOJK_6bP4",
    "imageUrl": "https://i.ytimg.com/vi/zhbOJK_6bP4/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-e2e-mXVlStI",
    "title": "#S02-01: Quem contrata os vaguiners com Rui Henriques",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=e2e-mXVlStI",
    "youtubeVideoId": "e2e-mXVlStI",
    "imageUrl": "https://i.ytimg.com/vi/e2e-mXVlStI/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-xldg8XtLr_M",
    "title": "DESIGN NÃO É FUNÇÃO",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=xldg8XtLr_M",
    "youtubeVideoId": "xldg8XtLr_M",
    "imageUrl": "https://i.ytimg.com/vi/xldg8XtLr_M/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-VUbJsD9Dwc4",
    "title": "COMO A CRIAÇÃO DO LAPTOP CRIOU UMA NOVA DISCIPLINA PARA O DESIGN?",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=VUbJsD9Dwc4",
    "youtubeVideoId": "VUbJsD9Dwc4",
    "imageUrl": "https://i.ytimg.com/vi/VUbJsD9Dwc4/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-O0QorFKCyzI",
    "title": "Áudio do Podcast no Youtube - #001 A Vagas UX com Mah Piacesi",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=O0QorFKCyzI",
    "youtubeVideoId": "O0QorFKCyzI",
    "imageUrl": "https://i.ytimg.com/vi/O0QorFKCyzI/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-c5S7z3TxchY",
    "title": "#007: Essa vaga tem Vaguiner com Ariane Protte",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=c5S7z3TxchY",
    "youtubeVideoId": "c5S7z3TxchY",
    "imageUrl": "https://i.ytimg.com/vi/c5S7z3TxchY/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-N2hPD-gvCf4",
    "title": "#006: Essa vaga tem Vaguiner com Felipe Albernaz",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=N2hPD-gvCf4",
    "youtubeVideoId": "N2hPD-gvCf4",
    "imageUrl": "https://i.ytimg.com/vi/N2hPD-gvCf4/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-4CbPzC7CCA8",
    "title": "#005: Essa vaga tem Vaguiner com Gabriela Nogueira",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=4CbPzC7CCA8",
    "youtubeVideoId": "4CbPzC7CCA8",
    "imageUrl": "https://i.ytimg.com/vi/4CbPzC7CCA8/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-rGS1-nCYNNQ",
    "title": "#003: Áudio da live - Como se preparar para o mercado de UX com Rafael Trojan",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=rGS1-nCYNNQ",
    "youtubeVideoId": "rGS1-nCYNNQ",
    "imageUrl": "https://i.ytimg.com/vi/rGS1-nCYNNQ/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-FEBZlCPRUHg",
    "title": "Como é trabalhar em empresas de diferentes tamanhos - Talk Vagas #15",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=FEBZlCPRUHg",
    "youtubeVideoId": "FEBZlCPRUHg",
    "imageUrl": "https://i.ytimg.com/vi/FEBZlCPRUHg/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-qv-sbD1PPBc",
    "title": "A importância do pensamento crítico - Talk Vagas #14",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=qv-sbD1PPBc",
    "youtubeVideoId": "qv-sbD1PPBc",
    "imageUrl": "https://i.ytimg.com/vi/qv-sbD1PPBc/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-HMCyyDshh10",
    "title": "Metodologias ágeis e UX Design se misturam? - Talk Vagas #13",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=HMCyyDshh10",
    "youtubeVideoId": "HMCyyDshh10",
    "imageUrl": "https://i.ytimg.com/vi/HMCyyDshh10/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-KUuCgGv_9bw",
    "title": "#004 - Essa Vaga tem Vaguiner com Bruna Fernanda",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=KUuCgGv_9bw",
    "youtubeVideoId": "KUuCgGv_9bw",
    "imageUrl": "https://i.ytimg.com/vi/KUuCgGv_9bw/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-zpTJMksRm3Y",
    "title": "#003 - Essa Vaga tem Vaguiner com Lucas",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=zpTJMksRm3Y",
    "youtubeVideoId": "zpTJMksRm3Y",
    "imageUrl": "https://i.ytimg.com/vi/zpTJMksRm3Y/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-JT67QFUt_ww",
    "title": "#002 - Áudio da live: Os desafios na transição para UX com Amyris",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=JT67QFUt_ww",
    "youtubeVideoId": "JT67QFUt_ww",
    "imageUrl": "https://i.ytimg.com/vi/JT67QFUt_ww/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-Inbdny3jvSs",
    "title": "Carreira em UX Design no exterior - Talk VagasUX #12",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Inbdny3jvSs",
    "youtubeVideoId": "Inbdny3jvSs",
    "imageUrl": "https://i.ytimg.com/vi/Inbdny3jvSs/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-nYqwWGNAZZY",
    "title": "Quais soft skills são importantes em UX? - Talk VagasUX #11",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=nYqwWGNAZZY",
    "youtubeVideoId": "nYqwWGNAZZY",
    "imageUrl": "https://i.ytimg.com/vi/nYqwWGNAZZY/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-zL212nQyr4E",
    "title": "#002 - Essa Vaga tem Vaguiner com André Hiro",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=zL212nQyr4E",
    "youtubeVideoId": "zL212nQyr4E",
    "imageUrl": "https://i.ytimg.com/vi/zL212nQyr4E/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-aAy7nkXVmH8",
    "title": "Qual a importância do Motion Design? - Talk VagasUX #10",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=aAy7nkXVmH8",
    "youtubeVideoId": "aAy7nkXVmH8",
    "imageUrl": "https://i.ytimg.com/vi/aAy7nkXVmH8/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-h8cX0PaqMnE",
    "title": "#001 - Áudio da live: O que é avaliado no perfil júnior",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=h8cX0PaqMnE",
    "youtubeVideoId": "h8cX0PaqMnE",
    "imageUrl": "https://i.ytimg.com/vi/h8cX0PaqMnE/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-k99Z42078kE",
    "title": "O que líderes esperam de um perfil júnior? - Talk VagasUX #09",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=k99Z42078kE",
    "youtubeVideoId": "k99Z42078kE",
    "imageUrl": "https://i.ytimg.com/vi/k99Z42078kE/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-Ov3DvnwvxPg",
    "title": "Metodologias de UX Design - Talk VagasUX #08",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Ov3DvnwvxPg",
    "youtubeVideoId": "Ov3DvnwvxPg",
    "imageUrl": "https://i.ytimg.com/vi/Ov3DvnwvxPg/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-H3CDvBT2xNw",
    "title": "Trabalho como freelancer em UX: Por onde começar? - Talk VagasUX #07",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=H3CDvBT2xNw",
    "youtubeVideoId": "H3CDvBT2xNw",
    "imageUrl": "https://i.ytimg.com/vi/H3CDvBT2xNw/hqdefault.jpg",
    "vagasuxChannel": true
  },
  {
    "id": "yt-LKBkKBqmUhg",
    "title": "#001 - A VagasUX com a Mah Piacesi",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=LKBkKBqmUhg",
    "youtubeVideoId": "LKBkKBqmUhg",
    "imageUrl": "https://i.ytimg.com/vi/LKBkKBqmUhg/hqdefault.jpg",
    "vagasuxChannel": true
  }
]

/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaVideoContextTags(): string[] {
  const tags = new Set<string>()
  for (const video of guiaVideos) {
    for (const tag of video.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaVideosByContext(
  videos: GuiaVideo[],
  contextTag: string | null,
): GuiaVideo[] {
  if (!contextTag) return videos
  return videos.filter((video) => video.context.includes(contextTag))
}

export function splitGuiaFeaturedVideo(videos: GuiaVideo[]): {
  featured: GuiaVideo | null
  rest: GuiaVideo[]
} {
  const featured =
    videos.find((video) => video.youtubeVideoId === GUIA_FEATURED_VIDEO_YOUTUBE_ID) ??
    null
  const rest = videos.filter(
    (video) => video.youtubeVideoId !== GUIA_FEATURED_VIDEO_YOUTUBE_ID,
  )
  return { featured, rest }
}
