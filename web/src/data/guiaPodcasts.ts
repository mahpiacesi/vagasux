/** Snapshot from Notion database "Conteúdos em Design" (Tipo = Podcast). */
/** Regenerar: node tools/scripts/export-guia-podcasts.mjs */

export type GuiaPodcast = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
  /** Capa: Spotify, Anchor, Apple, SoundCloud (dinâmico) ou Notion local. */
  imageUrl?: string
}

/** Podcast oficial da VagasUX — sempre primeiro na listagem. */
export const GUIA_FEATURED_PODCAST_ID = 'd6e7427f47554528b60632c419832106'

export const guiaPodcasts: GuiaPodcast[] = [
  {
    "id": "71e915da631648f88061e1ebe82cb92b",
    "title": "Biz Buds Podcast",
    "authors": [
      "Mike Janda",
      "Tom Ross"
    ],
    "context": [
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://open.spotify.com/show/3aSeJ7rfZIO0TpDW0sfOYA?si=CzoRvo9DR2K503ivKPVPEg",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a43bbf79ae63e685f71266c57"
  },
  {
    "id": "b56fc1fc742042eab7734b6aad18a296",
    "title": "Cachablau",
    "authors": [
      "Meiuca"
    ],
    "context": [
      "UI",
      "UX",
      "Carreira",
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://lnns.co/qNxOW9Ps73g",
    "imageUrl": "/guia/podcasts/b56fc1fc742042eab7734b6aad18a296.png"
  },
  {
    "id": "223fb3f74bb44a38967267d83c53175d",
    "title": "Café com Front",
    "authors": [
      "Danilo Vaz"
    ],
    "context": [
      "Tecnologia",
      "Design System"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/3zi7ddIq2xn172zTDHyI2H?si=m5PWN9oiQsGfZB8TXQfDjg",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8af59397b39790b38d2fd7227a"
  },
  {
    "id": "ce8ad1e5cbf449b894cb3957c3ad7373",
    "title": "Carreiras UX",
    "authors": [
      "Alan Pereira"
    ],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://anchor.fm/carreiraux",
    "imageUrl": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded400/6808929/6808929-1594391282411-e0c616c425dca.jpg"
  },
  {
    "id": "65500c9dbe7f4c0bbfef07f19083eed3",
    "title": "CI&T Podcast",
    "authors": [
      "CI&T"
    ],
    "context": [
      "Produto",
      "Liderança",
      "Ágil"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/7ICSs5l1OQnGr62i0xrL5L",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a1f87bbe18e8a530bc98d6075"
  },
  {
    "id": "31a6f9eed4084d66961f02ae45ff9990",
    "title": "Coisa de Designer",
    "authors": [
      "Andressa Siegel"
    ],
    "context": [
      "Design",
      "Carreira",
      "UI",
      "UX",
      "Design Thinking"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/5qQQqlXHQcM6m2BegF9Hdg?si=jX3bUgBDRWKEjZR8xLjILg&nd=1",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a12db66cfac80f6abbc515cc6"
  },
  {
    "id": "d86b19a4650d492ca6cf343598bf3f74",
    "title": "Desenhando Produtos",
    "authors": [
      "Josias Oliveira",
      "Leonardo Salvador"
    ],
    "context": [
      "UX",
      "Produto",
      "Carreira",
      "Liderança"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/3yc1MJPrWIOCY3fcrRS2Ke?si=kWO3o7WJRFC9OnZK2ERgfg",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a606ffe0babc7a813b1a7a56d"
  },
  {
    "id": "ba4d891636ec48fc88e8f7db57e129c2",
    "title": "Design Better Podcast",
    "authors": [
      "Invision"
    ],
    "context": [
      "UI",
      "UX",
      "Produto",
      "Diversidade"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://open.spotify.com/show/59RliaMdeDAkEgp9nj1Mkj?si=UuEMuSRITp6i4fQ6EwxUkg",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8aa99a29b86f4c4c053b37c835"
  },
  {
    "id": "fff9efae6e0343019a01becfed5f0c16",
    "title": "Design Details",
    "authors": [
      "Spec Network"
    ],
    "context": [
      "UI",
      "UX",
      "Carreira",
      "Produto",
      "Design System"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://open.spotify.com/show/7kAx8RJce757LXVoX2FIpf",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8aa420e38134a63a5c6ef22de0"
  },
  {
    "id": "dbdb60d18c284cde87538c06b7518a35",
    "title": "DesignTeam",
    "authors": [],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/0yE3kkKCcdPKaMFUfgSED7?si=fxdRLAogR_G8ucLQZJ8mbA",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a0b2344074e74a337afbedab2"
  },
  {
    "id": "0f8f56bb3639432cb45ade3db1d8c9f2",
    "title": "Dominação Mundial Diária",
    "authors": [
      "Moving Girls"
    ],
    "context": [
      "Negócio",
      "Carreira",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/2QzttrD48jLEFhmKpRzyQJ?si=VGNNzbtdTjSeu2whgtFo5A",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a1e0db243169e979271f898f4"
  },
  {
    "id": "74ac798dd7a64729850e618435a547cc",
    "title": "Dona Cast",
    "authors": [
      "Ô Dona"
    ],
    "context": [
      "Carreira",
      "Mulheres",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://anchor.fm/odona",
    "imageUrl": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo400/3225852/3225852-1593540493037-b87262bdc3bb9.jpg"
  },
  {
    "id": "d2b3ef83dbc344e4ba57dfce1973e43b",
    "title": "Escuta Ativa",
    "authors": [
      "Mergo"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/4oJCKGtYrPbcMVb93f30se?si=7vXGL5AVSYK_LImgWxP_Xw&nd=1",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a529d376573072b741ef2782f"
  },
  {
    "id": "83dcec39e9ea40c3818690d2090ef245",
    "title": "ExPatria",
    "authors": [],
    "context": [
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://anchor.fm/expatria",
    "imageUrl": "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo400/329989/329989-1697480095209-381b8f5915813.jpg"
  },
  {
    "id": "dd6b7a79cf734bab8f33aefd744703ef",
    "title": "High Resolution",
    "authors": [
      "Bobby Ghoshal",
      "Jared Erondu"
    ],
    "context": [
      "Liderança",
      "Carreira",
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://podcasts.apple.com/us/podcast/high-resolution/id1204941994",
    "imageUrl": "https://is1-ssl.mzstatic.com/image/thumb/Podcasts115/v4/d1/f0/b6/d1f0b6a1-7311-f7fa-2c9c-f7ea14406d5f/mza_4355877226319634813.jpg/1200x1200bf-60.jpg"
  },
  {
    "id": "2f0ee5a454e44ec2808d605a4366313e",
    "title": "Hipsters Ponto Tech",
    "authors": [
      "Grupo Caelum"
    ],
    "context": [
      "UI",
      "UX",
      "Produto",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/2p0Vx75OmfsXktyLBuLuSf",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a31d67b43d27d64414af18f7a"
  },
  {
    "id": "09886e52babc4e89961d308961d1ac1f",
    "title": "How Insights",
    "authors": [
      "How Bootcamps"
    ],
    "context": [
      "UX",
      "Carreira",
      "Research",
      "Produto",
      "Writing",
      "Liderança"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/57a2WoUNyhHLfBHEz2cDVq?si=3pUtK4QnRwO94GhZ9_W0Bw",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8ab23dd118bb06e10b53a18290"
  },
  {
    "id": "5479266de35b4cb98e01c7bf23ce9310",
    "title": "Itera Ideia",
    "authors": [
      "Douglas Monteiro",
      "Kiko Herrschaft"
    ],
    "context": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/3glT3JlucWcS29IeEh7KY5?si=neFjS71OSAG8AGW7LjCXJA",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a46019c04bc4037b21543957c"
  },
  {
    "id": "d0abd256e0554278b1d578d21bb4a634",
    "title": "Jake & Jonathan (antes Product Breakfast Club)",
    "authors": [
      "Jake Knapp"
    ],
    "context": [
      "UX",
      "Produto",
      "Ágil"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://productbreakfastclub.simplecast.com/",
    "imageUrl": "/guia/podcasts/d0abd256e0554278b1d578d21bb4a634.png"
  },
  {
    "id": "a6891921af5546bb8c4d45fc09714aef",
    "title": "Job pra Ontem",
    "authors": [
      "MORE GRLS"
    ],
    "context": [
      "Mulheres",
      "Diversidade",
      "Carreira",
      "Liderança"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/7AhglTT80I0X2ksdrimLLJ?si=XDhxp0UJS4Cnxt_QIt1f6Q",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a60464602f6b31aca46535083"
  },
  {
    "id": "32ba984a22aa4da4992f51394e18c8b8",
    "title": "JTBD+",
    "authors": [
      "Pedro Vargas",
      "Daniel Salengue",
      "Nico Martínez"
    ],
    "context": [
      "UX",
      "Research",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://anchor.fm/jtbdplus",
    "imageUrl": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded400/2384493/2384493-1586982669201-1fe792c2696ae.jpg"
  },
  {
    "id": "72f172d0b1944e2da4a7c2577b86766f",
    "title": "Ladycast",
    "authors": [
      "Ladies That UX"
    ],
    "context": [
      "UX",
      "Carreira",
      "Mulheres"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/16VEzBdLGk5vjrONXuTs4j?si=VwyC-zr6RLaMPpV5QhSKAg",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a46d918a8638bff22339eb5c0"
  },
  {
    "id": "7f4c9d51d54f427e900eb4163a659981",
    "title": "Love The Problem",
    "authors": [
      "Knowledge21"
    ],
    "context": [
      "Produto",
      "Ágil"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://knowledge21.com.br/podcast/",
    "imageUrl": "/guia/podcasts/7f4c9d51d54f427e900eb4163a659981.png"
  },
  {
    "id": "8dc61caa93284da8b0422da9d4633a32",
    "title": "Martelo Podcast",
    "authors": [
      "Junior Moraes"
    ],
    "context": [
      "UI",
      "UX",
      "Produto",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/3el9utRfwTkuSwWt781eYv?si=zsOUgDEURkGp7CfaJFIgQQ",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a738a6ae42540d4ea6be177b5"
  },
  {
    "id": "ca76cea360f94434baeb5bbd0bbd0f69",
    "title": "Mixed Methods",
    "authors": [
      "Aryel Cianflone"
    ],
    "context": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://open.spotify.com/show/3tO5oXP7vKBT55WLaVidpM?si=8agdZ5lBQ-aojMV-zLSyDw",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a7c28881c7f90beee5f030bc3"
  },
  {
    "id": "1ab41c48d42f4ccf86a5914df0f41bd2",
    "title": "Movimento UX",
    "authors": [
      "Izabela de Fátima"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.movimentoux.com/",
    "imageUrl": "/guia/podcasts/1ab41c48d42f4ccf86a5914df0f41bd2.png"
  },
  {
    "id": "889f754e73e04de992ce295db2bce07a",
    "title": "Mulheres de Produto",
    "authors": [
      "Mulheres de Produto"
    ],
    "context": [
      "Produto",
      "Carreira",
      "Mulheres",
      "Liderança",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/1rfUWxL2Ia7kA343ClLya1?si=uBsjNpHkQ3qrGY2zQQ_8WA",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a0a61704580f52515d765a714"
  },
  {
    "id": "ed0c652bbf4f428fa6d38ac9fd98c9d6",
    "title": "MVPodcast",
    "authors": [
      "Thiago Tonus"
    ],
    "context": [
      "Produto",
      "UX",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/4sqmNkCAYix2ZclfHLPCAi?si=Qtg2ZXwdTmCB5dG5AjU9dQ",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a20422f9eea0c297dc1d56344"
  },
  {
    "id": "ba16e1bc1a5d453da06938ad826953e4",
    "title": "Obsessed Show",
    "authors": [
      "Josh Miles"
    ],
    "context": [
      "UI",
      "UX",
      "Research",
      "Produto",
      "Ilustração"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://www.obsessedshow.com/#design-podcast",
    "imageUrl": "/guia/podcasts/ba16e1bc1a5d453da06938ad826953e4.png"
  },
  {
    "id": "4bc7f290137f4b78b77ea8763b5e5e25",
    "title": "Papo de Produto",
    "authors": [
      "Gabriel Vinicius e Vitor"
    ],
    "context": [
      "Produto",
      "UX",
      "Carreira",
      "Liderança"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://anchor.fm/papodeproduto",
    "imageUrl": "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo400/3978977/3978977-1702311475091-b999d4b7ec64e.jpg"
  },
  {
    "id": "d330ca89ffb842a4a88147ed10801e27",
    "title": "Papo de UX",
    "authors": [
      "Luan Mateus"
    ],
    "context": [
      "UI",
      "UX",
      "Acessibilidade",
      "Design System",
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/32hSv5mp77ocPcd3fPrLjU?si=kLhIhEkCThaCQ-RH58K_tA",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a41e6fdb39dd6cbda1db0f609"
  },
  {
    "id": "7b5b496d8a1b4162a81d294aa21e029b",
    "title": "Pizza de Dados",
    "authors": [
      "Leticia Portella",
      "Jessica Temporal",
      "Gustavo Coelho"
    ],
    "context": [
      "Métricas",
      "Produto",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/5k0Ei0MSg5BuiHshr43aSg?si=NF4tzPUTSsO3_47C3109Uw",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8adb9478e81e50dc541da296e3"
  },
  {
    "id": "0dc951a3c53d4cc4a074734db40f51eb",
    "title": "Podcast De Luna",
    "authors": [
      "Bernard De Luna"
    ],
    "context": [
      "Produto",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/4OayrY2pkjYXdTqALWl7eB?si=R5vOCF0hSTS7TMK86lohIw",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8aad6c610f5769bc371f40b441"
  },
  {
    "id": "d6e7427f47554528b60632c419832106",
    "title": "Podvagas",
    "authors": [
      "VagasUX"
    ],
    "context": [
      "UI",
      "UX",
      "Carreira",
      "Transição"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://anchor.fm/podvagas",
    "imageUrl": "https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded_nologo400/14060900/14060900-1659277510951-f4819ae74e5ca.jpg"
  },
  {
    "id": "bef5d4f38fb64867a1b329ba116418f4",
    "title": "Product Guru's",
    "authors": [
      "Paulo Chiodi"
    ],
    "context": [
      "Produto",
      "Métricas",
      "UX",
      "Writing",
      "Ágil",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://anchor.fm/product-gurus",
    "imageUrl": "https://d3t3ozftmdmh3i.cloudfront.net/staging/podcast_uploaded_nologo400/2164477/2164477-1772396708929-7e65c6edd7c86.jpg"
  },
  {
    "id": "9f0f8fc10025499bbfd700c777587626",
    "title": "RH sem filtros",
    "authors": [
      "Gupy"
    ],
    "context": [
      "RH",
      "Carreira",
      "Tecnologia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://www.gupy.io/podcast-rh-sem-filtros",
    "imageUrl": "/guia/podcasts/9f0f8fc10025499bbfd700c777587626.png"
  },
  {
    "id": "17a0dd2250904d95a48301692f0c9054",
    "title": "Set Up My Job",
    "authors": [
      "Pedro Nakano Rodrigues",
      "Rodrigo De Marchi"
    ],
    "context": [
      "Produto",
      "Carreira",
      "Tecnologia",
      "Transição"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/3vQiW8r6BQX8S5RdgSe001?si=RQSHzJZOSXySm2THJ3rXGw",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8ac5ae6a9e3bc964a3677506ec"
  },
  {
    "id": "7cd5c2096d534837a34d419297301122",
    "title": "The Crazy One",
    "authors": [
      "Stephen Gates"
    ],
    "context": [
      "UX",
      "Liderança",
      "Carreira"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://open.spotify.com/show/1lGg6hdIocDUp6oPTfbILD?si=eBPsKKruSS-74rcmT6VXQQ",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8ac82376047ed9f7dfa67ca45a"
  },
  {
    "id": "eb83ac230b814492bdcf07af9075f2cf",
    "title": "the news ☕️",
    "authors": [
      "the news"
    ],
    "context": [
      "Negócio",
      "Produto",
      "Comunicação"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/5cYtKjFwlRCSZKyV6ZC8Wq?si=106aec9284d244ab",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8aefdbbc860fb928980b45b63e"
  },
  {
    "id": "432f6374ccc349b49f9d197473ac4599",
    "title": "The Product Podcast",
    "authors": [
      "Product School"
    ],
    "context": [
      "Produto",
      "Carreira",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://open.spotify.com/show/1XBrhVLsQOIAv3KFBqnzrX?si=aWAdTUfuQdCqWiDIXnS-RA",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a9824a3759304e446e03a94ed"
  },
  {
    "id": "4b2525449dbb4741978f917fa7701624",
    "title": "True North",
    "authors": [
      "Loop11"
    ],
    "context": [
      "UX",
      "Research",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "http://www.truenorthpodcast.com/",
    "imageUrl": "/guia/podcasts/4b2525449dbb4741978f917fa7701624.png"
  },
  {
    "id": "b4df1e09eb30494897da76c7d1aebb24",
    "title": "UI Breakfast: UI/UX Design and Product Strategy",
    "authors": [
      "Jane Portman"
    ],
    "context": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://open.spotify.com/show/1mpwVsWRVGB7SfBWqZJbAb?si=eYP0y2FcTSyII3s598MceQ",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8a84a90b6933512e3efd294da8"
  },
  {
    "id": "6c2e903b9650448ba3a0f2ebf6ae29db",
    "title": "UX Podcast",
    "authors": [
      "UX Podcast"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://uxpodcast.com/episode-guide/link-shows-episode-guide/",
    "imageUrl": "/guia/podcasts/6c2e903b9650448ba3a0f2ebf6ae29db.png"
  },
  {
    "id": "307d31586abf4179bf09e8500bf8f644",
    "title": "UX Radio",
    "authors": [
      "UX Radio"
    ],
    "context": [
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "url": "https://soundcloud.com/ux-radio",
    "imageUrl": "https://i1.sndcdn.com/avatars-000392692173-x2avpp-t500x500.jpg"
  },
  {
    "id": "d0615941f6994ff8ad5fbc3ff7a5a3b7",
    "title": "UX Team Summit",
    "authors": [
      "Mergo"
    ],
    "context": [
      "UX",
      "Research",
      "Liderança",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/1oHmxPEpdZVf0nMH8vXazz?si=tu-KKvDJS5-kvBGtnPzJrw",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8af0fbf2bc9a14e0fa7867ec86"
  },
  {
    "id": "edb24e6c12e44bb29ab74480bc58d4fc",
    "title": "UXCOPY.CO",
    "authors": [
      "UXCOPY.CO"
    ],
    "context": [
      "UX",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://lnns.co/A6YxK0_Oow9",
    "imageUrl": "/guia/podcasts/edb24e6c12e44bb29ab74480bc58d4fc.png"
  },
  {
    "id": "28a3b5d68a7c411aa64fca1852a09344",
    "title": "Xlab (antigo UXlab)",
    "authors": [
      "Andrei Gurgel"
    ],
    "context": [
      "UX",
      "UI",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "url": "https://open.spotify.com/show/0f2hoLnZXsD8I8xWPUwFhv?si=ylrIZ-8kTPCPQBHcoY2Izg",
    "imageUrl": "https://i.scdn.co/image/ab6765630000ba8ad68491553e60515c22a9be75"
  }
]

/** Tags de Contexto únicas, ordenadas (Notion multi_select). */
export function getGuiaPodcastContextTags(): string[] {
  const tags = new Set<string>()
  for (const podcast of guiaPodcasts) {
    for (const tag of podcast.context) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaPodcastsByContext(
  podcasts: GuiaPodcast[],
  contextTag: string | null,
): GuiaPodcast[] {
  if (!contextTag) return podcasts
  return podcasts.filter((podcast) => podcast.context.includes(contextTag))
}

/** Separa o podcast em destaque dos demais, mantendo a ordem original do restante. */
export function splitGuiaFeaturedPodcast(podcasts: GuiaPodcast[]): {
  featured: GuiaPodcast | null
  rest: GuiaPodcast[]
} {
  const featured =
    podcasts.find((podcast) => podcast.id === GUIA_FEATURED_PODCAST_ID) ?? null
  const rest = podcasts.filter((podcast) => podcast.id !== GUIA_FEATURED_PODCAST_ID)
  return { featured, rest }
}
