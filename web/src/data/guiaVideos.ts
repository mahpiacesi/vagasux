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
  /** Playlist YouTube — thumb via oEmbed (primeiro vídeo da lista). */
  youtubePlaylistId?: string
  /** Vídeo publicado no canal VagasUX. */
  vagasuxChannel?: boolean
  /** Data de publicação (YouTube RSS) — ordenação do preview. */
  addedAt?: string
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
    "vagasuxChannel": false,
    "youtubePlaylistId": "PLx_6W4OtI_rl8_RjmFdpye7yIaVwp66IC",
    "imageUrl": "https://i.ytimg.com/vi/_SIaIBDjCKA/hqdefault.jpg",
    "youtubeVideoId": "_SIaIBDjCKA"
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
    "vagasuxChannel": false,
    "youtubePlaylistId": "PL9N8zJ9ukDxQwC5SX9DoVgWBpaKdZEDRI",
    "imageUrl": "https://i.ytimg.com/vi/qAZRqwzNMu4/hqdefault.jpg",
    "youtubeVideoId": "qAZRqwzNMu4"
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
    "vagasuxChannel": false,
    "youtubePlaylistId": "PL5Ya9DqHANRLjuSZ6leUwUVD9jiYbMZU4",
    "imageUrl": "https://i.ytimg.com/vi/_qpOXAjcU20/hqdefault.jpg",
    "youtubeVideoId": "_qpOXAjcU20"
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
    "vagasuxChannel": false,
    "youtubePlaylistId": "PL5Ya9DqHANRJnrrffC_QmsdZ6oPVUfuiM",
    "imageUrl": "https://i.ytimg.com/vi/UVauX7n2eJ4/hqdefault.jpg",
    "youtubeVideoId": "UVauX7n2eJ4"
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
    "vagasuxChannel": false,
    "youtubePlaylistId": "PLx_6W4OtI_rnc1dAoiym-dixHcL5VIJ70",
    "imageUrl": "https://i.ytimg.com/vi/WAi6ixIfdd4/hqdefault.jpg",
    "youtubeVideoId": "WAi6ixIfdd4"
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
    "vagasuxChannel": false,
    "youtubePlaylistId": "PL5Ya9DqHANRLsDtmdSkE1z_twTHALkGXA",
    "imageUrl": "https://i.ytimg.com/vi/J-oo9-vz5iQ/hqdefault.jpg",
    "youtubeVideoId": "J-oo9-vz5iQ"
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
    "vagasuxChannel": false,
    "youtubePlaylistId": "PLx_6W4OtI_rkeSc_2RepxfmnJ3ihAujKr",
    "imageUrl": "https://i.ytimg.com/vi/R-bzA9oV-4w/hqdefault.jpg",
    "youtubeVideoId": "R-bzA9oV-4w"
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
    "vagasuxChannel": false,
    "youtubePlaylistId": "PLR1hL-ocTzxdozhP6xwcsuRrl2o9UAabB",
    "imageUrl": "https://i.ytimg.com/vi/NW3Y30o3vp4/hqdefault.jpg",
    "youtubeVideoId": "NW3Y30o3vp4"
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
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=DtKhxKVsr4E",
    "youtubeVideoId": "DtKhxKVsr4E",
    "imageUrl": "https://i.ytimg.com/vi/DtKhxKVsr4E/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-04-29T22:16:48+00:00"
  },
  {
    "id": "yt-Kqn7FBNsA-A",
    "title": "Design System para júniors",
    "authors": [
      "VagasUX"
    ],
    "context": ["Design System"],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Kqn7FBNsA-A",
    "youtubeVideoId": "Kqn7FBNsA-A",
    "imageUrl": "https://i.ytimg.com/vi/Kqn7FBNsA-A/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-04-02T11:48:56+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2025-09-19T12:21:55+00:00"
  },
  {
    "id": "yt--cA9qBcQHJU",
    "title": "Workshop Google Analytics com Adriana Akamine",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=-cA9qBcQHJU",
    "youtubeVideoId": "-cA9qBcQHJU",
    "imageUrl": "https://i.ytimg.com/vi/-cA9qBcQHJU/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2025-09-05T16:30:01+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2025-07-30T11:35:08+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2025-07-16T10:53:25+00:00"
  },
  {
    "id": "yt-GZZtjREWR74",
    "title": "Mês de métricas - Huxley Dias",
    "authors": [
      "VagasUX"
    ],
    "context": ["Métricas"],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=GZZtjREWR74",
    "youtubeVideoId": "GZZtjREWR74",
    "imageUrl": "https://i.ytimg.com/vi/GZZtjREWR74/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2025-07-09T04:32:54+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2024-12-12T04:38:36+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2024-11-25T16:02:00+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2024-11-25T15:00:13+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2024-11-01T04:36:47+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2024-09-28T22:38:03+00:00"
  },
  {
    "id": "3ba8cbb0d904803c8aacd832f30b9a48",
    "title": "Como medir o impacto do seu Design",
    "authors": ["Alvaro Souza"],
    "context": ["Métricas"],
    "languages": ["🇧🇷"],
    "url": "https://youtu.be/gPH5hbdLaSI?si=INtwn_zLxdVRHtXm",
    "youtubeVideoId": "gPH5hbdLaSI",
    "addedAt": "2026-08-12T16:00:00Z"
  },
  {
    "id": "3ba8cbb0d9048043aa3dd6f5e5bb6f20",
    "title": "Métricas UX: Números, Porcentagens e Impacto",
    "authors": ["Design Circuit"],
    "context": ["Métricas"],
    "languages": ["🇧🇷"],
    "url": "https://youtu.be/owbNt7RXJYk?si=yudDXCZ0KBPT4SAM",
    "youtubeVideoId": "owbNt7RXJYk",
    "addedAt": "2026-08-12T16:00:01Z"
  },
  {
    "id": "3ba8cbb0d904804f9204e16df80eae5f",
    "title": "Métricas de UX com Allan Cardozo",
    "authors": ["UXNOW"],
    "context": ["Métricas"],
    "languages": ["🇧🇷"],
    "url": "https://youtu.be/1sT4T19OX6Q?si=58-uj5Bo5S3-iWZF",
    "youtubeVideoId": "1sT4T19OX6Q",
    "addedAt": "2026-08-12T16:00:02Z"
  },
  {
    "id": "3ba8cbb0d90480bebe5fcd3432d46600",
    "title": "Métricas para UX: Como Escolher e Usar de Forma Eficiente",
    "authors": ["DesignTeam"],
    "context": ["Métricas", "Produto"],
    "languages": ["🇧🇷"],
    "url": "https://youtu.be/ieD21pE9JTY?si=j6UgptosulgCRnPx",
    "youtubeVideoId": "ieD21pE9JTY",
    "addedAt": "2026-08-12T16:00:03Z"
  },
  {
    "id": "yt-UzsuL8WGeJw",
    "title": "WEBINAR DE #ANTROPOLOGIA com Eros Sester e Marcelo Perilo",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=UzsuL8WGeJw",
    "youtubeVideoId": "UzsuL8WGeJw",
    "imageUrl": "https://i.ytimg.com/vi/UzsuL8WGeJw/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-O0QorFKCyzI",
    "title": "Áudio do Podcast no Youtube - #001 A Vagas UX com Mah Piacesi",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=O0QorFKCyzI",
    "youtubeVideoId": "O0QorFKCyzI",
    "imageUrl": "https://i.ytimg.com/vi/O0QorFKCyzI/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-FEBZlCPRUHg",
    "title": "Como é trabalhar em empresas de diferentes tamanhos - Talk Vagas #15",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=FEBZlCPRUHg",
    "youtubeVideoId": "FEBZlCPRUHg",
    "imageUrl": "https://i.ytimg.com/vi/FEBZlCPRUHg/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-qv-sbD1PPBc",
    "title": "A importância do pensamento crítico - Talk Vagas #14",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Design Estratégico"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=qv-sbD1PPBc",
    "youtubeVideoId": "qv-sbD1PPBc",
    "imageUrl": "https://i.ytimg.com/vi/qv-sbD1PPBc/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-HMCyyDshh10",
    "title": "Metodologias ágeis e UX Design se misturam? - Talk Vagas #13",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Ágil"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=HMCyyDshh10",
    "youtubeVideoId": "HMCyyDshh10",
    "imageUrl": "https://i.ytimg.com/vi/HMCyyDshh10/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-Inbdny3jvSs",
    "title": "Carreira em UX Design no exterior - Talk VagasUX #12",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira",
      "Exterior"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Inbdny3jvSs",
    "youtubeVideoId": "Inbdny3jvSs",
    "imageUrl": "https://i.ytimg.com/vi/Inbdny3jvSs/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-nYqwWGNAZZY",
    "title": "Quais soft skills são importantes em UX? - Talk VagasUX #11",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=nYqwWGNAZZY",
    "youtubeVideoId": "nYqwWGNAZZY",
    "imageUrl": "https://i.ytimg.com/vi/nYqwWGNAZZY/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-aAy7nkXVmH8",
    "title": "Qual a importância do Motion Design? - Talk VagasUX #10",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Motion"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=aAy7nkXVmH8",
    "youtubeVideoId": "aAy7nkXVmH8",
    "imageUrl": "https://i.ytimg.com/vi/aAy7nkXVmH8/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-k99Z42078kE",
    "title": "O que líderes esperam de um perfil júnior? - Talk VagasUX #09",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=k99Z42078kE",
    "youtubeVideoId": "k99Z42078kE",
    "imageUrl": "https://i.ytimg.com/vi/k99Z42078kE/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-Ov3DvnwvxPg",
    "title": "Metodologias de UX Design - Talk VagasUX #08",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UX",
      "Fundamentos"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Ov3DvnwvxPg",
    "youtubeVideoId": "Ov3DvnwvxPg",
    "imageUrl": "https://i.ytimg.com/vi/Ov3DvnwvxPg/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-H3CDvBT2xNw",
    "title": "Trabalho como freelancer em UX: Por onde começar? - Talk VagasUX #07",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=H3CDvBT2xNw",
    "youtubeVideoId": "H3CDvBT2xNw",
    "imageUrl": "https://i.ytimg.com/vi/H3CDvBT2xNw/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-9CkhldhysSA",
    "title": "Como apresentar um case de UX na entrevista? - Talk VagasUX #06",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=9CkhldhysSA",
    "youtubeVideoId": "9CkhldhysSA",
    "imageUrl": "https://i.ytimg.com/vi/9CkhldhysSA/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-jCvyiv7g-kM",
    "title": "Como fazer um portfólio de destaque em UX? - Talk VagasUX #05",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=jCvyiv7g-kM",
    "youtubeVideoId": "jCvyiv7g-kM",
    "imageUrl": "https://i.ytimg.com/vi/jCvyiv7g-kM/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-B9t8DC5ev-Y",
    "title": "Processos seletivos: Testes e entrevista técnica - Talk VagasUX #04",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=B9t8DC5ev-Y",
    "youtubeVideoId": "B9t8DC5ev-Y",
    "imageUrl": "https://i.ytimg.com/vi/B9t8DC5ev-Y/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-CsdfWNUU-pk",
    "title": "Processos seletivos: Primeiro contato e RH - Talk VagasUX #03",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira",
      "RH"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=CsdfWNUU-pk",
    "youtubeVideoId": "CsdfWNUU-pk",
    "imageUrl": "https://i.ytimg.com/vi/CsdfWNUU-pk/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-61sx27Y4EZU",
    "title": "LinkedIn e currículo - Talk VagasUX #02",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira",
      "RH"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=61sx27Y4EZU",
    "youtubeVideoId": "61sx27Y4EZU",
    "imageUrl": "https://i.ytimg.com/vi/61sx27Y4EZU/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "yt-iTzeVgQQ2cU",
    "title": "A jornada conturbada do profissional iniciante em UX",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=iTzeVgQQ2cU",
    "youtubeVideoId": "iTzeVgQQ2cU",
    "imageUrl": "https://i.ytimg.com/vi/iTzeVgQQ2cU/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:30:00Z"
  },
  {
    "id": "3ba8cbb0d904806f9907c285806a9e89",
    "title": "Por que tem mais Mulheres em UX Writing?",
    "authors": [
      "Semiose Podcast"
    ],
    "context": [
      "Diversidade",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=0fwedkZrcfE",
    "youtubeVideoId": "0fwedkZrcfE",
    "imageUrl": "https://i.ytimg.com/vi/0fwedkZrcfE/hqdefault.jpg",
    "addedAt": "2026-08-12T21:00:00Z"
  },
  {
    "id": "3ba8cbb0d90480e4b798d1301e38a29e",
    "title": "Mulheres no design. Como fazer carreira em uma grande empresa",
    "authors": [
      "Mentorama"
    ],
    "context": [
      "Diversidade",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=4NLs8ZYmcag",
    "youtubeVideoId": "4NLs8ZYmcag",
    "imageUrl": "https://i.ytimg.com/vi/4NLs8ZYmcag/hqdefault.jpg",
    "addedAt": "2026-08-12T21:00:00Z"
  },
  {
    "id": "3ba8cbb0d90480228f17fc8d7bce7b72",
    "title": "Diversidade em Design: como transformar sua empresa de dentro para fora",
    "authors": [
      "UXConf BR"
    ],
    "context": [
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=vGHjW08B4X8",
    "youtubeVideoId": "vGHjW08B4X8",
    "imageUrl": "https://i.ytimg.com/vi/vGHjW08B4X8/hqdefault.jpg",
    "addedAt": "2026-08-12T21:00:00Z"
  },
  {
    "id": "3ba8cbb0d904801eaf23ce55dbced322",
    "title": "Diversidade e Inclusão nas Empresas",
    "authors": [
      "Semiose Podcast"
    ],
    "context": [
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=IngaGG091RM",
    "youtubeVideoId": "IngaGG091RM",
    "imageUrl": "https://i.ytimg.com/vi/IngaGG091RM/hqdefault.jpg",
    "addedAt": "2026-08-12T21:00:00Z"
  },
  {
    "id": "3ba8cbb0d904804fb931ffa4b53c358d",
    "title": "Designers negros no mercado brasileiro com Joyce Rocha",
    "authors": [
      "DesignTeam"
    ],
    "context": [
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Sp9ERNnhYAI",
    "youtubeVideoId": "Sp9ERNnhYAI",
    "imageUrl": "https://i.ytimg.com/vi/Sp9ERNnhYAI/hqdefault.jpg",
    "addedAt": "2026-08-12T21:00:00Z"
  },
  {
    "id": "3ba8cbb0d90480bdb782cb166ac3e1fd",
    "title": "Designers negros no mercado brasileiro com Fernando França",
    "authors": [
      "DesignTeam"
    ],
    "context": [
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=rQHJhaP2L00",
    "youtubeVideoId": "rQHJhaP2L00",
    "imageUrl": "https://i.ytimg.com/vi/rQHJhaP2L00/hqdefault.jpg",
    "addedAt": "2026-08-12T21:00:00Z"
  },
  {
    "id": "yt-z_lDbGZ-2Eo",
    "title": "UX Design é área de mulher sim",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Diversidade",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=z_lDbGZ-2Eo",
    "youtubeVideoId": "z_lDbGZ-2Eo",
    "imageUrl": "https://i.ytimg.com/vi/z_lDbGZ-2Eo/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:00:00Z"
  },
  {
    "id": "yt-ubLJ0Gf5Ivg",
    "title": "Uma carreira chamada maternidade - Bate papo especial do mês das mães",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Diversidade",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=ubLJ0Gf5Ivg",
    "youtubeVideoId": "ubLJ0Gf5Ivg",
    "imageUrl": "https://i.ytimg.com/vi/ubLJ0Gf5Ivg/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:01:00Z"
  },
  {
    "id": "yt-GEKiwV9veVo",
    "title": "Síndrome do Impostor - Estourando a bolha em tecnologia",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=GEKiwV9veVo",
    "youtubeVideoId": "GEKiwV9veVo",
    "imageUrl": "https://i.ytimg.com/vi/GEKiwV9veVo/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:02:00Z"
  },
  {
    "id": "yt-OWeG9m5dtks",
    "title": "Pesquisa em UX Design",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=OWeG9m5dtks",
    "youtubeVideoId": "OWeG9m5dtks",
    "imageUrl": "https://i.ytimg.com/vi/OWeG9m5dtks/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:03:00Z"
  },
  {
    "id": "yt-USx8etQS0Xw",
    "title": "Aula prática de Auto Layout no Figma com Leo Garcia",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=USx8etQS0Xw",
    "youtubeVideoId": "USx8etQS0Xw",
    "imageUrl": "https://i.ytimg.com/vi/USx8etQS0Xw/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:04:00Z"
  },
  {
    "id": "yt-7emvK6uLfC0",
    "title": "Tudo o que você faz no dia-a-dia é acessibilidade, você só precisa ligar os pontos...",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=7emvK6uLfC0",
    "youtubeVideoId": "7emvK6uLfC0",
    "imageUrl": "https://i.ytimg.com/vi/7emvK6uLfC0/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:05:00Z"
  },
  {
    "id": "yt-GlTnm8PoxVc",
    "title": "Vídeo VagasUX",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=GlTnm8PoxVc",
    "youtubeVideoId": "GlTnm8PoxVc",
    "imageUrl": "https://i.ytimg.com/vi/GlTnm8PoxVc/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:06:00Z"
  },
  {
    "id": "yt-W8G9vcDZm5A",
    "title": "Vídeo VagasUX",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=W8G9vcDZm5A",
    "youtubeVideoId": "W8G9vcDZm5A",
    "imageUrl": "https://i.ytimg.com/vi/W8G9vcDZm5A/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:07:00Z"
  },
  {
    "id": "yt-MvHN29Xc900",
    "title": "Vídeo VagasUX",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=MvHN29Xc900",
    "youtubeVideoId": "MvHN29Xc900",
    "imageUrl": "https://i.ytimg.com/vi/MvHN29Xc900/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:08:00Z"
  },
  {
    "id": "yt-lfhwVJuHk0M",
    "title": "Vídeo VagasUX",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=lfhwVJuHk0M",
    "youtubeVideoId": "lfhwVJuHk0M",
    "imageUrl": "https://i.ytimg.com/vi/lfhwVJuHk0M/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:09:00Z"
  },
  {
    "id": "yt-RDTlLk5cMFk",
    "title": "Dia a dia do UX Designer - Entenda na prática",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=RDTlLk5cMFk",
    "youtubeVideoId": "RDTlLk5cMFk",
    "imageUrl": "https://i.ytimg.com/vi/RDTlLk5cMFk/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:10:00Z"
  },
  {
    "id": "yt-_uKtOaKJuOA",
    "title": "O essencial para começar",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=_uKtOaKJuOA",
    "youtubeVideoId": "_uKtOaKJuOA",
    "imageUrl": "https://i.ytimg.com/vi/_uKtOaKJuOA/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:11:00Z"
  },
  {
    "id": "yt-c3Vc-3xzm2Q",
    "title": "Trilhas para o sucesso no estudo de UX com Nina Talks",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=c3Vc-3xzm2Q",
    "youtubeVideoId": "c3Vc-3xzm2Q",
    "imageUrl": "https://i.ytimg.com/vi/c3Vc-3xzm2Q/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:12:00Z"
  },
  {
    "id": "yt-_V8qK_zDMwA",
    "title": "Dicas para começar com Design Ops com João Victor Santos",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Design Ops"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=_V8qK_zDMwA",
    "youtubeVideoId": "_V8qK_zDMwA",
    "imageUrl": "https://i.ytimg.com/vi/_V8qK_zDMwA/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:13:00Z"
  },
  {
    "id": "yt-vLfhnD8XHHE",
    "title": "Trilhas para o sucesso no estudo de UX (Parte 2)",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=vLfhnD8XHHE",
    "youtubeVideoId": "vLfhnD8XHHE",
    "imageUrl": "https://i.ytimg.com/vi/vLfhnD8XHHE/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:14:00Z"
  },
  {
    "id": "yt-FufdMPyabSI",
    "title": "EXPLORANDO AS VARIANTES NO FIGMA - Como potencializar criatividade e eficência",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=FufdMPyabSI",
    "youtubeVideoId": "FufdMPyabSI",
    "imageUrl": "https://i.ytimg.com/vi/FufdMPyabSI/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:15:00Z"
  },
  {
    "id": "yt-OXStS6q9WQQ",
    "title": "UX RESEARCH: CONSTRUINDO FORMULÁRIOS INCLUSIVOS PARA PESQUISAS EFICAZES  com Thaly Sanches",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Research",
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=OXStS6q9WQQ",
    "youtubeVideoId": "OXStS6q9WQQ",
    "imageUrl": "https://i.ytimg.com/vi/OXStS6q9WQQ/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:16:00Z"
  },
  {
    "id": "yt-i-CKivVMVmM",
    "title": "DESVENDANDO O EU PROFISSIONAL: VIÉSES COGNITIVOS E SUCESSO NA ENTREVISTA com Richard Jesus",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=i-CKivVMVmM",
    "youtubeVideoId": "i-CKivVMVmM",
    "imageUrl": "https://i.ytimg.com/vi/i-CKivVMVmM/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:17:00Z"
  },
  {
    "id": "yt-ks2pxnctmeU",
    "title": "BENEFÍCIOS DE IMPLEMENTAR UM DESIGN SYSTEM EFICIENTE - Construindo consistência visual",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Design System",
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=ks2pxnctmeU",
    "youtubeVideoId": "ks2pxnctmeU",
    "imageUrl": "https://i.ytimg.com/vi/ks2pxnctmeU/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:18:00Z"
  },
  {
    "id": "yt-27k6tlXwPss",
    "title": "MANDA JOBS! Tudo o que precisa saber para se tornar um FREELANCER EM UX DESIGN com Maiane Gabriele",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=27k6tlXwPss",
    "youtubeVideoId": "27k6tlXwPss",
    "imageUrl": "https://i.ytimg.com/vi/27k6tlXwPss/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:19:00Z"
  },
  {
    "id": "yt-6KurrAGYCQM",
    "title": "AULÃO PRA TIRAR O PORTFÓLIO DA GAVETA - Faça o seu no code com Notion e Super",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Portfólio"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=6KurrAGYCQM",
    "youtubeVideoId": "6KurrAGYCQM",
    "imageUrl": "https://i.ytimg.com/vi/6KurrAGYCQM/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:20:00Z"
  },
  {
    "id": "yt-2C3NQisS07o",
    "title": "TIRANDO AS METAS DO PAPEL - INSIGHTS PARA UM PLANO DE DESENVOLVIMENTO PESSOAL EFICAZ COM LUAN MATEUS",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=2C3NQisS07o",
    "youtubeVideoId": "2C3NQisS07o",
    "imageUrl": "https://i.ytimg.com/vi/2C3NQisS07o/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:21:00Z"
  },
  {
    "id": "yt-9ct501hwzSg",
    "title": "VALE A PENA MIGRAR PRA UX EM 2024? Bate papo com Rodrigo Lemes",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=9ct501hwzSg",
    "youtubeVideoId": "9ct501hwzSg",
    "imageUrl": "https://i.ytimg.com/vi/9ct501hwzSg/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:22:00Z"
  },
  {
    "id": "yt-4_DR2brkcf4",
    "title": "Entre Devs & Designers com Rebeca Morais",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=4_DR2brkcf4",
    "youtubeVideoId": "4_DR2brkcf4",
    "imageUrl": "https://i.ytimg.com/vi/4_DR2brkcf4/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:23:00Z"
  },
  {
    "id": "yt-mrF2su0QIAE",
    "title": "AULÃO DE FIGMA - Dominando as variáveis e desbloqueando o poder da personalização",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=mrF2su0QIAE",
    "youtubeVideoId": "mrF2su0QIAE",
    "imageUrl": "https://i.ytimg.com/vi/mrF2su0QIAE/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:24:00Z"
  },
  {
    "id": "yt-DLA3zz15Oxw",
    "title": "TURBINANDO SEU LINKEDIN - Dicas práticas para otimizar seu perfil e atrair oportunidades",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=DLA3zz15Oxw",
    "youtubeVideoId": "DLA3zz15Oxw",
    "imageUrl": "https://i.ytimg.com/vi/DLA3zz15Oxw/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:25:00Z"
  },
  {
    "id": "yt-Jvy-geQoqjc",
    "title": "5 DICAS DE UI DESIGN - Um guia para otimizar seu dia a dia na criação de interfaces",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=Jvy-geQoqjc",
    "youtubeVideoId": "Jvy-geQoqjc",
    "imageUrl": "https://i.ytimg.com/vi/Jvy-geQoqjc/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:26:00Z"
  },
  {
    "id": "yt-MBWrDVPb2Rg",
    "title": "Entre Devs & Designers com Marília Macedo",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=MBWrDVPb2Rg",
    "youtubeVideoId": "MBWrDVPb2Rg",
    "imageUrl": "https://i.ytimg.com/vi/MBWrDVPb2Rg/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:27:00Z"
  },
  {
    "id": "yt-YYtyBaI7_T8",
    "title": "Motion Design: Interfaces em movimento | Microinterações, pequenas mas poderosas",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Motion"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=YYtyBaI7_T8",
    "youtubeVideoId": "YYtyBaI7_T8",
    "imageUrl": "https://i.ytimg.com/vi/YYtyBaI7_T8/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:28:00Z"
  },
  {
    "id": "yt-giR0VqAy_mY",
    "title": "UX WRITING EM 2024 - Uma conversa franca sobre como anda o mercado pós pandemia?",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Content Design"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=giR0VqAy_mY",
    "youtubeVideoId": "giR0VqAy_mY",
    "imageUrl": "https://i.ytimg.com/vi/giR0VqAy_mY/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:29:00Z"
  },
  {
    "id": "yt-o4rlOjTxP5c",
    "title": "A importância dos eventos das comunidades e networking com Gabi Peron",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=o4rlOjTxP5c",
    "youtubeVideoId": "o4rlOjTxP5c",
    "imageUrl": "https://i.ytimg.com/vi/o4rlOjTxP5c/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:30:00Z"
  },
  {
    "id": "yt-DSw5RUmryoc",
    "title": "Portfólio Review: Veja como funciona uma sessão",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "Portfólio"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.youtube.com/watch?v=DSw5RUmryoc",
    "youtubeVideoId": "DSw5RUmryoc",
    "imageUrl": "https://i.ytimg.com/vi/DSw5RUmryoc/hqdefault.jpg",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T20:31:00Z"
  },
]

/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaVideoContextTags(): string[] {
  const tags = new Set<string>()
  for (const video of guiaVideos) {
    for (const tag of video.context) tags.add(normalizeVideoContextTag(tag))
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

function normalizeVideoContextTag(tag: string): string {
  return tag.toLocaleLowerCase('pt-BR') === 'soft skills' ? 'Soft Skills' : tag
}

export function filterGuiaVideosByContext(
  videos: GuiaVideo[],
  contextTag: string | null,
): GuiaVideo[] {
  if (!contextTag) return videos
  return videos.filter((video) =>
    video.context.some(
      (tag) => normalizeVideoContextTag(tag) === normalizeVideoContextTag(contextTag),
    ),
  )
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
