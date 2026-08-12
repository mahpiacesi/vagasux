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
      "UX",
      "Carreira"
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
      "UX",
      "Carreira"
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
    "vagasuxChannel": true,
    "addedAt": "2025-07-09T04:32:54+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2025-04-03T23:34:52+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2024-10-27T18:09:49+00:00"
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
    "vagasuxChannel": true,
    "addedAt": "2024-10-15T01:01:09+00:00"
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
  }
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
    "id": "3ba8cbb0d9048069a5d6f755c27195c4",
    "title": "Workshop Google Analytics com Adriana Akamine",
    "authors": ["VagasUX"],
    "context": ["Métricas"],
    "languages": ["🇧🇷"],
    "url": "https://youtu.be/-cA9qBcQHJU?si=6xvg5YuD85hzeKi8",
    "youtubeVideoId": "-cA9qBcQHJU",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:00:00Z"
  },
  {
    "id": "3ba8cbb0d9048038a7fbcd1be5ca1fb1",
    "title": "Workshop Google Analytics",
    "authors": ["VagasUX"],
    "context": ["Métricas"],
    "languages": ["🇧🇷"],
    "url": "https://youtu.be/DtKhxKVsr4E?si=wnUF-8xRami5I9Hi",
    "youtubeVideoId": "DtKhxKVsr4E",
    "vagasuxChannel": true,
    "addedAt": "2026-08-12T18:00:01Z"
  },
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
