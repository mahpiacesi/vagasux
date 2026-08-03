/** Snapshot from Notion database "Conteúdos em Design" (Tipo = Podcast). */
/** Regenerar: node tools/scripts/export-guia-podcasts.mjs */

export type GuiaPodcast = {
  id: string
  title: string
  authors: string[]
  context: string[]
  languages: string[]
  url: string
  /** Capa baixada do Notion (opcional). */
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
    "imageUrl": "/guia/podcasts/71e915da631648f88061e1ebe82cb92b.png"
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
    "imageUrl": "/guia/podcasts/223fb3f74bb44a38967267d83c53175d.png"
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
    "imageUrl": "/guia/podcasts/ce8ad1e5cbf449b894cb3957c3ad7373.png"
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
    "imageUrl": "/guia/podcasts/65500c9dbe7f4c0bbfef07f19083eed3.png"
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
    "imageUrl": "/guia/podcasts/31a6f9eed4084d66961f02ae45ff9990.png"
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
    "imageUrl": "/guia/podcasts/d86b19a4650d492ca6cf343598bf3f74.png"
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
    "imageUrl": "/guia/podcasts/ba4d891636ec48fc88e8f7db57e129c2.png"
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
    "url": "https://designdetails.fm/",
    "imageUrl": "/guia/podcasts/fff9efae6e0343019a01becfed5f0c16.png"
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
    "imageUrl": "/guia/podcasts/dbdb60d18c284cde87538c06b7518a35.png"
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
    "imageUrl": "/guia/podcasts/0f8f56bb3639432cb45ade3db1d8c9f2.png"
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
    "imageUrl": "/guia/podcasts/74ac798dd7a64729850e618435a547cc.png"
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
    "imageUrl": "/guia/podcasts/d2b3ef83dbc344e4ba57dfce1973e43b.png"
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
    "imageUrl": "/guia/podcasts/83dcec39e9ea40c3818690d2090ef245.png"
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
    "url": "https://www.highresolution.design/",
    "imageUrl": "/guia/podcasts/dd6b7a79cf734bab8f33aefd744703ef.png"
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
    "url": "https://hipsters.tech/",
    "imageUrl": "/guia/podcasts/2f0ee5a454e44ec2808d605a4366313e.png"
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
    "imageUrl": "/guia/podcasts/09886e52babc4e89961d308961d1ac1f.png"
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
    "imageUrl": "/guia/podcasts/5479266de35b4cb98e01c7bf23ce9310.png"
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
    "imageUrl": "/guia/podcasts/a6891921af5546bb8c4d45fc09714aef.png"
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
    "imageUrl": "/guia/podcasts/32ba984a22aa4da4992f51394e18c8b8.png"
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
    "imageUrl": "/guia/podcasts/72f172d0b1944e2da4a7c2577b86766f.png"
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
    "imageUrl": "/guia/podcasts/8dc61caa93284da8b0422da9d4633a32.png"
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
    "imageUrl": "/guia/podcasts/ca76cea360f94434baeb5bbd0bbd0f69.png"
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
    "imageUrl": "/guia/podcasts/889f754e73e04de992ce295db2bce07a.png"
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
    "imageUrl": "/guia/podcasts/ed0c652bbf4f428fa6d38ac9fd98c9d6.png"
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
    "imageUrl": "/guia/podcasts/4bc7f290137f4b78b77ea8763b5e5e25.png"
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
    "imageUrl": "/guia/podcasts/d330ca89ffb842a4a88147ed10801e27.png"
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
    "imageUrl": "/guia/podcasts/7b5b496d8a1b4162a81d294aa21e029b.png"
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
    "imageUrl": "/guia/podcasts/0dc951a3c53d4cc4a074734db40f51eb.png"
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
    "imageUrl": "/guia/podcasts/d6e7427f47554528b60632c419832106.png"
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
    "imageUrl": "/guia/podcasts/bef5d4f38fb64867a1b329ba116418f4.png"
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
    "imageUrl": "/guia/podcasts/17a0dd2250904d95a48301692f0c9054.png"
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
    "imageUrl": "/guia/podcasts/7cd5c2096d534837a34d419297301122.png"
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
    "imageUrl": "/guia/podcasts/eb83ac230b814492bdcf07af9075f2cf.png"
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
    "imageUrl": "/guia/podcasts/432f6374ccc349b49f9d197473ac4599.png"
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
    "imageUrl": "/guia/podcasts/b4df1e09eb30494897da76c7d1aebb24.png"
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
    "url": "http://ux-radio.com/",
    "imageUrl": "/guia/podcasts/307d31586abf4179bf09e8500bf8f644.png"
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
    "imageUrl": "/guia/podcasts/d0615941f6994ff8ad5fbc3ff7a5a3b7.png"
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
    "imageUrl": "/guia/podcasts/28a3b5d68a7c411aa64fca1852a09344.png"
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
