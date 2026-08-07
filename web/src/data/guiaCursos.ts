/** Snapshot from Notion database "Cursos". */
/** Regenerar: node tools/scripts/export-guia-cursos.mjs */

export type GuiaCurso = {
  id: string
  title: string
  url: string
  cost: string[]
  modality: string[]
  levels: string[]
  /** Temas do curso (Notion multi_select). */
  themes: string[]
  languages: string[]
  /** Parceiro oficial VagasUX. */
  isPartner: boolean
  /** Tem relatos da comunidade publicados. */
  hasFeedback: boolean
  /** Data de criação no Notion — ordenação do preview. */
  addedAt?: string
}

export const guiaCursos: GuiaCurso[] = [
  {
    "id": "6ef1024d9ca54068abcbccaacd5434d9",
    "title": "AccessBoost",
    "url": "https://www.accessboost.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2022-02-21T02:30:00Z"
  },
  {
    "id": "d3adf0c5521848bab113dcc1bd7aca9e",
    "title": "Acumen Academy",
    "url": "https://acumenacademy.org/courseCatalog/",
    "cost": [
      "Gratuito",
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Soft Skills"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T03:09:00Z"
  },
  {
    "id": "ee324da6c18948c483447ee65d86f62d",
    "title": "Aldeia",
    "url": "https://cursos.aldeia.cc/online/ux-design/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T21:10:10Z"
  },
  {
    "id": "a6922f25e90a41e1bf3983e4108c306d",
    "title": "Alexa Skills",
    "url": "https://build.amazonalexadev.com/cursoalexa-designdevoz.html",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "Writing",
      "Chatbots"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T02:55:00Z"
  },
  {
    "id": "722c1f129d3e4aa2ab500ec5cedf0a89",
    "title": "Alfamídia",
    "url": "http://www.alfamidiaonline.com.br/curso-de-ux-design/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T21:10:10Z"
  },
  {
    "id": "1061fe3b9e2e4360ad65793b7aaab059",
    "title": "Alura",
    "url": "https://www.alura.com.br/promocao/vagasux",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Figma",
      "Writing",
      "Service Design",
      "Motion",
      "Research",
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2021-09-14T22:04:00Z"
  },
  {
    "id": "c04935a0181f4d33b5109152c4a7370a",
    "title": "Anhembi Morumbi",
    "url": "https://pos.anhembi.br/curso/user-experience",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2021-09-14T22:13:00Z"
  },
  {
    "id": "6fdae9ea578445c7ae85f953046946d9",
    "title": "Aprender Design",
    "url": "https://www.aprender.design/cursos",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Produto",
      "Liderança"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T22:16:00Z"
  },
  {
    "id": "386b924bc1c34840907e7f06405b5bdd",
    "title": "Awari",
    "url": "https://awari.com.br/?utm_source=siteparceiro_vagasux&utm_content=home",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Produto",
      "Figma",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2021-09-14T22:29:00Z"
  },
  {
    "id": "2b68cbb0d90480b3b97accfb4610cfd6",
    "title": "Bea Miranda Classes",
    "url": "https://beamirandaclasses.framer.website/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UI",
      "Design System",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2025-11-25T18:09:48Z"
  },
  {
    "id": "b6d3b3f5d1c44d5fad46633c76de19dc",
    "title": "Belas Artes",
    "url": "https://www.belasartes.br/pos-graduacao/?pagina=cursos&curso=user-experience",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "UI",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2021-09-14T22:33:00Z"
  },
  {
    "id": "e21b2b364b3943e6945d42f6bcea7e15",
    "title": "Brandster",
    "url": "https://brandster.com.br/p/aula-online-de-ux",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T22:41:00Z"
  },
  {
    "id": "f111d5c8fc0342aba1d86085d5ada5f2",
    "title": "BTX",
    "url": "https://www.cursoproductdesign.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Produto",
      "Estratégia",
      "Liderança",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2023-09-20T23:29:09Z"
  },
  {
    "id": "3b2a960cd2694497bf95f62e4e5d55f2",
    "title": "Caelum",
    "url": "https://www.caelum.com.br/apostila-ux-usabilidade-mobile-web",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T22:44:00Z"
  },
  {
    "id": "cc7127585b10473ea5ef98d369586fce",
    "title": "Cappacita",
    "url": "https://www.cappacita.com.br/cursos",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Writing",
      "Chatbots"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T13:55:00Z"
  },
  {
    "id": "ad70e53ebdd4446caf0094b4ea2070c2",
    "title": "Caroline Linhares",
    "url": "https://docs.google.com/forms/d/e/1FAIpQLSc_UyPHZnazq60TV4P8ZTi6mpoAzJUCJIs9NGF0keHkDiGngA/viewform",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop"
    ],
    "themes": [
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T22:52:00Z"
  },
  {
    "id": "61346788115141e8ae5361e944bae50d",
    "title": "Cel.Lep - Estação Hack",
    "url": "https://br.cellep.com/estacaohack/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T05:27:00Z"
  },
  {
    "id": "789638e14e1649d483e7b1ea675da648",
    "title": "CESAR School",
    "url": "https://www.cesar.school/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T22:59:00Z"
  },
  {
    "id": "886019aee05c4ab298a84345f2a84085",
    "title": "Clube do UX Writing",
    "url": "https://clubedouxwriting.com.br/",
    "cost": [
      "Pago",
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UX",
      "Writing",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2023-10-13T20:25:33Z"
  },
  {
    "id": "ee1a43214491453c945bce06b09682a1",
    "title": "Coderhouse",
    "url": "https://www.coderhouse.com.br/?utm_source=vagasux&utm_medium=cpc",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Writing",
      "Research",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-04-29T13:19:00Z"
  },
  {
    "id": "3848cbb0d904804db91fc576e7ade0bd",
    "title": "Componentes Design (Willian Matiola)",
    "url": "https://componentes.design/aulas",
    "cost": [
      "Freemium"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2026-06-19T17:43:58Z"
  },
  {
    "id": "7e4d3caa9b3749d195dc08166bd3674b",
    "title": "Contenuto",
    "url": "http://contenuto.com.br/curso-capacitacao-em-ux-writing/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T23:23:00Z"
  },
  {
    "id": "21b5befdd65441fd919e3145a4348a5a",
    "title": "CoolHow",
    "url": "https://materiais.coolhow.com.br/ana-holanda",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T23:28:00Z"
  },
  {
    "id": "3d06072b1f0e40a0a507e3d80ecb26a1",
    "title": "Coursera",
    "url": "https://www.coursera.org/search?query=user%20experience&index=prod_all_launched_products_term_optimization&skills=User%20Experience&skills=Design%20and%20Product&skills=User%20Research&skills=User%20Experience%20Design&skills=Writing&skills=User%20Interface&skills=Usability",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Certificação"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2021-09-14T23:31:00Z"
  },
  {
    "id": "c5a6fb93211942f4a97e2b184598633c",
    "title": "CPS - Centro Paula Souza",
    "url": "https://portalgeead.cps.sp.gov.br/mooc/#1594215714638-c6592ee5-9b79",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T22:56:00Z"
  },
  {
    "id": "d123aee3b5744a7a8e5ca6d56120de6e",
    "title": "Cubos Academy",
    "url": "https://cubos.academy/cursos/design-uxui?utm_source=vagasux&utm_medium=influencerPaid&utm_campaign=20230911_linkedin_userExperience&utm_content=sales",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2021-09-14T23:34:00Z"
  },
  {
    "id": "4f1ee0064e98450fbe3cf4f1cdfbcf0a",
    "title": "Cursae",
    "url": "https://www.cursae.com.br/play-course/figma-criando-interfaces-do-zero-ate-o-prototipo-final/introducao-ao-figma",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop"
    ],
    "themes": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-26T03:34:00Z"
  },
  {
    "id": "c5e7bed067c94b319edad67e127d5473",
    "title": "Curso de Figma (FEUX)",
    "url": "https://cursodefigma.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-21T02:26:00Z"
  },
  {
    "id": "60829d20a70d4df28995fe4aad058493",
    "title": "Descola",
    "url": "https://descola.org/cursos",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T18:09:00Z"
  },
  {
    "id": "48068343095e4ebdacf968809901f689",
    "title": "Desenhando Componentes de UI",
    "url": "https://componentes.design/",
    "cost": [
      "Freemium"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2024-07-22T20:06:37Z"
  },
  {
    "id": "06ebb7cfe8a240669d56dec3b307f3ef",
    "title": "Design Circuit (AJ)",
    "url": "https://www.designcircuit.co/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2022-02-19T06:30:00Z"
  },
  {
    "id": "1b08cbb0d90480588e52c9840e4300ba",
    "title": "Design Ops Lab",
    "url": "https://designopslab.com/cursos/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Design System",
      "Design Ops"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2025-03-08T21:39:14Z"
  },
  {
    "id": "3218cbb0d9048064944cfb2f98aa718f",
    "title": "Design System Decoded",
    "url": "https://designtokens.com.br/courses/design-system-decoded/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Design System"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2026-03-12T21:50:04Z"
  },
  {
    "id": "99b20aaa40e84f01859fa8e4ecd77698",
    "title": "Design System Starter",
    "url": "https://www.dsstarter.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Design System"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2024-04-24T14:23:57Z"
  },
  {
    "id": "79189cdb53bd48d5837fc66d4e1752d5",
    "title": "DesignBoost",
    "url": "https://www.designboost.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Figma",
      "Design System"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2023-12-06T11:22:27Z"
  },
  {
    "id": "58949b1ad1b64b9c96728c2bad73c5e8",
    "title": "DesignOps Lab",
    "url": "https://cursos.designopslab.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Design Ops",
      "UX",
      "Research",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2023-03-17T18:12:48Z"
  },
  {
    "id": "4dac8ebf5dd4491bbd11f437b8d40ca2",
    "title": "DigitalHouse",
    "url": "https://www.digitalhouse.com/br/curso/experiencia-do-usuario-ux",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2021-12-27T18:19:00Z"
  },
  {
    "id": "2f577639914744abb28fc41fe4913c4c",
    "title": "Divaholic",
    "url": "https://hots.divaholic.com.br/wearable-apps-sprint-lab-ux-ui-para-aplicativos-vestiveis-e-wearables",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Workshop"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T18:29:00Z"
  },
  {
    "id": "bf5f18c67d824d3e860a1e6508964081",
    "title": "EBAC",
    "url": "https://ebac.art.br/courses/cpd-ux-ui-design/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Graduação",
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2021-12-27T18:34:00Z"
  },
  {
    "id": "2e9c5a6e978a47f7abce20b403c0e65d",
    "title": "ECDD - Instituto Infnet",
    "url": "https://posgraduacao.infnet.edu.br/ead/pos-graduacao-mba-em-ux-design-usabilidade/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T04:14:00Z"
  },
  {
    "id": "9df00b709be64d68b66d0b36f4d90e08",
    "title": "ECHOS",
    "url": "https://escoladesignthinking.echos.cc/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Certificação"
    ],
    "themes": [
      "UI",
      "UX",
      "Liderança",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T18:45:00Z"
  },
  {
    "id": "73d6b19b31e94ffc99b2c1caa30339d1",
    "title": "EDIT.",
    "url": "https://weareedit.io/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online",
      "Presencial"
    ],
    "levels": [
      "Workshop",
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Writing",
      "Service Design",
      "Design System"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸",
      "🇵🇹"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-03-07T03:13:00Z"
  },
  {
    "id": "d7dfb08745c342dfbb5c41acd2782391",
    "title": "eManual Criativo",
    "url": "https://www.emanualcriativo.com/emanualdeux/meu-projeto",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UI",
      "UX",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2021-12-27T19:01:00Z"
  },
  {
    "id": "01d1335179154a2795a436ba29a2a51b",
    "title": "ENG",
    "url": "https://eng.com.br/curso.cfm?course_id=204&curso-Adobe-Xd",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T19:06:00Z"
  },
  {
    "id": "1d88cbb0d90480adb144f788795ca40d",
    "title": "Escala",
    "url": "https://escolaescala.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Design System",
      "Design Ops",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2025-04-17T12:34:10Z"
  },
  {
    "id": "9cf77fd0c11642b59de0d74b391168c0",
    "title": "Escola Casa",
    "url": "https://www.escolacasa.com/cursos-profissionalizantes-blumenau/curso-de-ux-em-blumenau/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T19:10:00Z"
  },
  {
    "id": "0c3a7846e683415d9ef392fb8970fc7c",
    "title": "ESPM",
    "url": "https://www.espm.br/cursos/pos-graduacao/mba-master/master-em-gestao-estrategica-em-ux-design/",
    "cost": [
      "Pago",
      "Gratuito"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Pós-Graduação",
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T19:14:00Z"
  },
  {
    "id": "82539319958545678b3b67ec6f314487",
    "title": "Estartando Devs",
    "url": "https://estartandodevs.com.br/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T20:08:00Z"
  },
  {
    "id": "f62448921e464cdc8e4f305a36396874",
    "title": "Expolab",
    "url": "https://expolab.com.br/cursos/ui-design/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T20:12:00Z"
  },
  {
    "id": "e13d9eb1a2e84407a299f2c3fbd5d385",
    "title": "Faculdade JK",
    "url": "https://posjk.com.br/pt/product/especializacao-profissional-em-arquitetura-da-informacao/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T06:19:00Z"
  },
  {
    "id": "4a7ee0f4c8bb4f4c94d33396b1498dc7",
    "title": "Faculeste",
    "url": "https://www.faculeste.com.br/curso/user-experience-ux-e-user-interface-ui",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T20:16:00Z"
  },
  {
    "id": "b2bb22ce0c66495a8b099e56fdabc960",
    "title": "FACUMINAS",
    "url": "https://www.facuminasnacional.com.br/pos-graduacao/user-experience-ux-e-user-interface-ui",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-01-11T15:51:00Z"
  },
  {
    "id": "149db978a4bb4cc39ada02332cb05c28",
    "title": "FESPSP",
    "url": "https://www.fespsp.org.br/cursos-de-extensao/cursos-livres/cursos/ux-writing-experiencia-e-conteudo",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-01-11T15:58:00Z"
  },
  {
    "id": "43a8eb56a7f743329fc2919200b9e7af",
    "title": "FGV",
    "url": "https://educacao-executiva.fgv.br/cursos/online/curta-media-duracao-online/ux-user-experience-e-plataformas-digitais",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-01-11T16:05:00Z"
  },
  {
    "id": "d9839aefe5774c9b81a65db9fe331a4e",
    "title": "FIAP",
    "url": "https://www.fiap.com.br/mba/mba-em-ux-design-strategy/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação",
      "Workshop"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2022-01-11T16:11:00Z"
  },
  {
    "id": "38605539e668416f9bb29721b0540a62",
    "title": "Figma",
    "url": "https://www.figma.com/resources/learn-design/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop"
    ],
    "themes": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T02:27:00Z"
  },
  {
    "id": "7c2515dcec764f52a7e78d6fb1f38305",
    "title": "Fluxe",
    "url": "https://fluxe.com.br/site/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Produto",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2023-09-20T23:17:12Z"
  },
  {
    "id": "4abbb969b37b416c808a40c8c185b377",
    "title": "FMU",
    "url": "https://portal.fmu.br/curso/user-experience/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T03:05:00Z"
  },
  {
    "id": "01804f361e8c4e4c8c99f547a4470970",
    "title": "FutureLearn",
    "url": "https://www.futurelearn.com/search?q=ux",
    "cost": [
      "Gratuito",
      "Freemium"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T02:17:00Z"
  },
  {
    "id": "57fa45d5d9204c79b3b45ce56c3e5b4f",
    "title": "Gama Academy",
    "url": "https://www.gama.academy/gama-experience/product-design",
    "cost": [
      "Pago",
      "Freemium"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T03:14:00Z"
  },
  {
    "id": "45eada83cd72404e917f48243f41ce81",
    "title": "GINEAD",
    "url": "https://www.ginead.com.br/curso/curso-de-arquitetura-da-informacao",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T03:21:00Z"
  },
  {
    "id": "5a0f0f7073f543459aa2ae1519d92085",
    "title": "Growdev",
    "url": "https://www.growdev.com.br/programs/ux-ui",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Soft Skills",
      "Carreira",
      "Front-end"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2023-09-20T23:09:03Z"
  },
  {
    "id": "a929376b91fe4f769ac73128a5e1e231",
    "title": "How Bootcamps",
    "url": "https://learn.howedu.com.br/todos",
    "cost": [
      "Pago",
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Writing",
      "Produto",
      "Acessibilidade",
      "Design Ops",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2022-02-19T03:25:00Z"
  },
  {
    "id": "6ac4ad211dd84d0ab1300b466876da35",
    "title": "IDEO U",
    "url": "https://www.ideou.com/collections",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Certificação"
    ],
    "themes": [
      "UX",
      "Liderança",
      "Estratégia",
      "Soft Skills"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T03:29:00Z"
  },
  {
    "id": "46f66e54017645febeeb96594b69187f",
    "title": "IDI - Instituto de Desenho Instrucional",
    "url": "https://www.desenhoinstrucional.com/pos-graduacao/p%C3%B3s-gradua%C3%A7%C3%A3o-ux-design-",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T03:36:00Z"
  },
  {
    "id": "f8ca27e2cd5b44d3b4c7ad35fb3a8793",
    "title": "IEBS",
    "url": "https://www.iebschool.com/pt-br/programas/curso-analise-e-experiencia-do-usuario/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass",
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T03:46:00Z"
  },
  {
    "id": "fcef1569db3a4d3eab129674fd7d42b0",
    "title": "IED",
    "url": "https://ied.edu.br/sao_paulo/curso/posgraduacao-especializacao/ux-ui-design-inovacao-e-estrategia/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Certificação",
      "Graduação",
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "Research",
      "Service Design",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T03:51:00Z"
  },
  {
    "id": "95d7e46f3c774d84a95cee0cebb98d2c",
    "title": "IGTI",
    "url": "https://www.igti.com.br/bootcamp/ux-designer",
    "cost": [
      "Freemium"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Certificação",
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T03:56:00Z"
  },
  {
    "id": "ad9e2f9406fb49b2b9c13df4409fea53",
    "title": "IMPACTA",
    "url": "https://www.impacta.edu.br/mba/ux-design-digital-experience",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T04:07:00Z"
  },
  {
    "id": "48da79afda4748cab42eec8e99674a80",
    "title": "INAP",
    "url": "https://inap.com.br/curso/ux-ui-design/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T04:11:00Z"
  },
  {
    "id": "746e727af2454d448b397d08382bae2f",
    "title": "Insper",
    "url": "https://www.insper.edu.br/educacao-executiva/cursos-de-curta-duracao/marketing/customer-experience-gestao-da-experiencia-do-cliente-na-pratica/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T04:19:00Z"
  },
  {
    "id": "e7cd3716c574419ab234f5e5f8809105",
    "title": "Interact Design Foundation (IDF)",
    "url": "https://www.interaction-design.org/invite?r=marianna",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass",
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Estratégia"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-21T04:30:00Z"
  },
  {
    "id": "3848cbb0d90480c9a3f3f2c0bcda22de",
    "title": "Intuitive Start",
    "url": "https://intuitivestarter.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2026-06-19T17:01:46Z"
  },
  {
    "id": "a61c7c9222a14a0ca98f91344afa646b",
    "title": "InVision",
    "url": "https://learn.invisionapp.com/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop"
    ],
    "themes": [
      "UI"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T02:32:00Z"
  },
  {
    "id": "a05184eca9c449999c53f5fd13b9b5ce",
    "title": "Ironhack",
    "url": "https://www.ironhack.com/br/desenho-ux-ui",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷",
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T04:21:00Z"
  },
  {
    "id": "f949df3a1ebb4c679aecd5ef0680a3e5",
    "title": "Journey - Consulting & Training",
    "url": "https://www.somosjourney.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T04:28:00Z"
  },
  {
    "id": "29a751e9d4834fcdaceda4da74074b9d",
    "title": "Klotar Prototype Academy",
    "url": "https://klotar.com/",
    "cost": [
      "Pago",
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Figma",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2022-03-07T02:40:00Z"
  },
  {
    "id": "d487bd7e5a7f4b258fee6123c8959e63",
    "title": "Kubu Impulso Tech",
    "url": "https://somoskubu.com/impulso-tech/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Estratégia",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2024-04-24T13:58:30Z"
  },
  {
    "id": "bba168aec8074720848a3b3671ef8e3c",
    "title": "Labens Corp (Instituto Faber-Ludens)",
    "url": "https://labens-corp-consultoria-e-treinamentos-especiais.business.site/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T04:34:00Z"
  },
  {
    "id": "5ac614ada02a437488866b3fe9efd426",
    "title": "Layer Lemonade",
    "url": "https://www.layerlemonade.com/cursos",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Motion"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T04:38:00Z"
  },
  {
    "id": "de0ac8c7dd3247efb8893e388514d62a",
    "title": "Learn UX",
    "url": "https://learnux.io/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Figma"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T02:14:00Z"
  },
  {
    "id": "0fe602d78a114df5a9864f61fb77872e",
    "title": "Leiautar (Itamara Ferreira)",
    "url": "https://go.hotmart.com/A56892888W",
    "cost": [
      "Freemium",
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2022-02-19T04:51:00Z"
  },
  {
    "id": "31fd8ea7bf7146f79dfbcc141ffc8801",
    "title": "Letsbot",
    "url": "https://letsbot.teachable.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop",
      "Curso / Bootcamp"
    ],
    "themes": [
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-09-14T22:37:00Z"
  },
  {
    "id": "efa8ce2c95e448ec8b6f0b6c9b18b5ff",
    "title": "Liderança em Design (Josias Oliveira)",
    "url": "https://cursoliderancadesign.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Mentoria"
    ],
    "themes": [
      "Liderança",
      "Estratégia",
      "UX",
      "Carreira"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2024-08-01T14:20:59Z"
  },
  {
    "id": "2558efad554e438d8e4f7068e3ea54dd",
    "title": "Liderança em Design (Victor Zanini)",
    "url": "https://liderancaemdesign.com.br/meu-curso",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Liderança",
      "Estratégia",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-03-09T15:22:00Z"
  },
  {
    "id": "4cf25f2798154db5a8a9a6b7d831aa2e",
    "title": "Live University (Ibramerc)",
    "url": "https://liveuniversity.com/courses/customer-journey/",
    "cost": [
      "Freemium"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T03:32:00Z"
  },
  {
    "id": "94ee026e83fa4b21b1de43ae8f88d2e8",
    "title": "Mentorama",
    "url": "https://mentorama.com.br/ux-design",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T05:06:00Z"
  },
  {
    "id": "bfad14b97f3a4cbaacf7a38dd69e0774",
    "title": "Mergo",
    "url": "https://www.mergo.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass",
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Writing",
      "Produto",
      "Service Design",
      "Acessibilidade",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2022-02-19T05:17:00Z"
  },
  {
    "id": "6e7b817c756e4553bbd9ed4f0b6cca02",
    "title": "Métricas de UX para produtos e serviços digitais (Guilherme de Paula)",
    "url": "https://www.udemy.com/course/metricas-de-ux-para-produtos-e-servicos-digitais/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UX",
      "Produto",
      "Estratégia",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2023-11-27T23:02:41Z"
  },
  {
    "id": "72219067c2d94e159b36c0d57a6a62c1",
    "title": "Miami Ad School",
    "url": "https://www.miamiadschool.com.br/online-ux-strategy/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T05:33:00Z"
  },
  {
    "id": "ef210bcad68e42c5ae7b54ca88c89ef2",
    "title": "Môre Educação",
    "url": "https://educacao.more.tt/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Acessibilidade",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2023-09-20T19:29:10Z"
  },
  {
    "id": "959a38245ddf483fbf27b04921780eb7",
    "title": "MUDA",
    "url": "https://ux-design.muda.la/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2024-03-05T22:16:53Z"
  },
  {
    "id": "4f4cc955426d41ed8086193e441018a7",
    "title": "Multivix",
    "url": "https://multivix.edu.br/pos-graduacao/ux-design-e-usabilidade/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Pós-Graduação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T05:35:00Z"
  },
  {
    "id": "277ce12dd4ad456d85b6df81f78006f2",
    "title": "Online UX Team",
    "url": "https://onlineuxteam.com/mentoria/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Mentoria"
    ],
    "themes": [
      "UI",
      "UX",
      "Estratégia",
      "Liderança",
      "Research"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T05:44:00Z"
  },
  {
    "id": "dd5e7233ca9d44c998aee4d8d2fb2c59",
    "title": "Origamid",
    "url": "https://www.origamid.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Figma",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T05:47:00Z"
  },
  {
    "id": "68e86335403a42a9b04098086b220628",
    "title": "Panamericana",
    "url": "https://ondemand.escola-panamericana.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Liderança",
      "Design System",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T05:53:00Z"
  },
  {
    "id": "62b70d313620480ebb71f289dc0f3e97",
    "title": "Perestroika",
    "url": "https://www.perestroika.com.br/online/cursos/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Soft Skills",
      "Liderança",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T14:00:00Z"
  },
  {
    "id": "7c61f810c38b408e8006ce718d4eaff1",
    "title": "PM3",
    "url": "https://www.cursospm3.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Certificação"
    ],
    "themes": [
      "Produto",
      "Liderança",
      "Estratégia",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-10-26T17:37:00Z"
  },
  {
    "id": "296a46d3c0584ea0bd337b5d8f668cc4",
    "title": "Polo Criativo",
    "url": "https://www.polocriativo.com.br/curso-formacao/ux-designer/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T06:05:00Z"
  },
  {
    "id": "117498a623e74e1e99ac90b26cd9dbbf",
    "title": "Práticas de UX - User Experience",
    "url": "https://www.hotmart.com/product/en/curso-praticas-de-ux-user-experience/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T04:57:00Z"
  },
  {
    "id": "2c5cc331db8948d591ac9e89551f682c",
    "title": "Product Arena",
    "url": "https://productarena.io/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Research",
      "Produto",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2022-02-19T06:10:00Z"
  },
  {
    "id": "5b2d6f56eb5d45c8af7d45612bb86253",
    "title": "Product Design 4.0 (Josias Oliveira)",
    "url": "https://www.cursoproductdesign.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Mentoria"
    ],
    "themes": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2024-08-01T14:06:42Z"
  },
  {
    "id": "2ea3432beed94784bea3255a179255ff",
    "title": "PrograMaria",
    "url": "https://www.programaria.org/mulherespodem/sprint-comunicacao/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop"
    ],
    "themes": [
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T03:24:00Z"
  },
  {
    "id": "9421335f1fe244bc8c3809375ef84f83",
    "title": "PUC Campinas",
    "url": "https://www.puc-campinas.edu.br/pos-graduacao/curso-de-especializacao-em-design-de-interacao-uxui/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online",
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Graduação"
    ],
    "themes": [
      "UI",
      "UX",
      "Estratégia",
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T02:13:00Z"
  },
  {
    "id": "49db936d5b174305a07edbeb8785358d",
    "title": "PUC Minas",
    "url": "https://www.pucminas.br/Pos-Graduacao/IEC/Cursos/Paginas/UX-Design-e-Agilidade_Online.aspx?pageID=3776&moda=5&modaTipo=2&polo=40&curso=1084&situ=1",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido",
      "Online",
      "Presencial"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T02:07:00Z"
  },
  {
    "id": "4f215e59f1694878887b19865aca8a71",
    "title": "PUC-Rio",
    "url": "https://cce.puc-rio.br/sitecce/website/website.dll/cursos?cArea=2252&todos=S&nInst=dad",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online",
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Pós-Graduação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T01:54:00Z"
  },
  {
    "id": "1b08cbb0d9048081b7e1c5be93530ede",
    "title": "PUCMG",
    "url": "https://www.pucminas.br/Pos-Graduacao/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2025-03-08T20:50:30Z"
  },
  {
    "id": "429eda9af86f4628a067bc20ca4ac1f8",
    "title": "PUCRS",
    "url": "https://online.pucrs.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online",
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-21T01:42:00Z"
  },
  {
    "id": "a2680f63f2094a8f8c85ddc447eecf98",
    "title": "PunkMetrics",
    "url": "https://punkmetrics.com/courses/ux-metrics-2-0-product-analytics/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Métricas",
      "Estratégia",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T06:16:00Z"
  },
  {
    "id": "7c057851f71a4784a9c9f21c52b5cfed",
    "title": "Redesign Academy",
    "url": "http://www.redesign-academy.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Service Design",
      "Acessibilidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T13:37:00Z"
  },
  {
    "id": "a9d3643c610046e988e3a0746eb03e19",
    "title": "Scrimba",
    "url": "https://scrimba.com/learn/design",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop"
    ],
    "themes": [
      "UI"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T03:17:00Z"
  },
  {
    "id": "a4a3adb9637a4ca3938880385c2b0bee",
    "title": "SENAC",
    "url": "https://www.rj.senac.br/faculdade-senac/pos-graduacao-e-mba/pos-graduacao-em-design-de-interacao/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T13:52:00Z"
  },
  {
    "id": "7df2fc7942fc4a24adad83c6aebd9e5e",
    "title": "SESI SENAI",
    "url": "https://cursos.sesisenai.org.br/detalhes/pos-graduacao-em-user-experience-design/30966/71348",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "UI",
      "Research",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T00:12:00Z"
  },
  {
    "id": "3ac185d70acb491da0f04208b77aec68",
    "title": "Tagarela School",
    "url": "https://www.tagarelaschool.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T14:06:00Z"
  },
  {
    "id": "75eb0a304f3f4a49a31e138fa4cba9b6",
    "title": "Talking City",
    "url": "https://www.talkingcity.co/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop",
      "Curso / Bootcamp"
    ],
    "themes": [
      "Service Design"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T14:10:00Z"
  },
  {
    "id": "4e0dbf4a16734be98264801650d1f1b8",
    "title": "Tangível Academy",
    "url": "https://tangivel.com/pt/academy/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online",
      "Presencial"
    ],
    "levels": [
      "Workshop",
      "Curso / Bootcamp",
      "Certificação"
    ],
    "themes": [
      "UX",
      "Research",
      "Writing",
      "Service Design"
    ],
    "languages": [
      "🇵🇹"
    ],
    "isPartner": true,
    "hasFeedback": false,
    "addedAt": "2022-03-07T02:54:00Z"
  },
  {
    "id": "2e2cd553ba8c4d94a86188b32fa2c95e",
    "title": "Tera",
    "url": "https://somostera.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Produto",
      "Liderança",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T13:43:00Z"
  },
  {
    "id": "2a690d97b8424b6e894174929fe079a6",
    "title": "Thaly Sanches (Todas As Letras)",
    "url": "https://www.linkedin.com/in/thalysanches/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass",
      "Workshop"
    ],
    "themes": [
      "UX",
      "Research",
      "Diversidade"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2023-06-27T16:05:43Z"
  },
  {
    "id": "b492db04bde5445aa8e06798350656c3",
    "title": "TheStarter",
    "url": "https://www.thestarter.io/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Writing",
      "Estratégia",
      "Acessibilidade",
      "Design System",
      "Carreira",
      "Soft Skills",
      "Inglês",
      "Design Ops"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2022-03-07T02:16:00Z"
  },
  {
    "id": "198d2d522b3f4c098f91e9ecc26da261",
    "title": "TIMTec",
    "url": "https://timtec.com.br/curso/ux-e-ui-design/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T14:14:00Z"
  },
  {
    "id": "774d899cd7cd4e6a90545a727a7853db",
    "title": "Trampolim Academy",
    "url": "https://tramplay.com.br/p/curso-introducao-ao-design-thinking",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T00:17:00Z"
  },
  {
    "id": "d5eb98f16ea44bbfa114876d97b73ac4",
    "title": "trampos ACADEMY",
    "url": "https://trampos.academy/cursos/",
    "cost": [
      "Pago",
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "Writing",
      "Chatbots",
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T00:20:00Z"
  },
  {
    "id": "ee17f29a5feb4358bf550d1ad16c74e2",
    "title": "UCS",
    "url": "https://www.ucs.br/site/especializacao/detalhes/design-digital/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T14:17:00Z"
  },
  {
    "id": "54e4b10e636b4ae5a25f62dc766ba701",
    "title": "Udacity",
    "url": "https://www.udacity.com/courses/all?skill=User%20Research&skill=Prototyping&skill=Product%20Design&skill=UI&skill=Whiteboarding",
    "cost": [
      "Gratuito",
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Certificação"
    ],
    "themes": [
      "UX",
      "Research",
      "Produto"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-26T02:36:00Z"
  },
  {
    "id": "12d24cb6e5724f54ade48a62a4987d68",
    "title": "Udemy",
    "url": "https://www.udemy.com/pt/courses/design/user-experience/?price=price-free&sort=popularity&persist_locale=&locale=pt_BR",
    "cost": [
      "Gratuito",
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Writing"
    ],
    "languages": [
      "🇺🇸",
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-26T02:49:00Z"
  },
  {
    "id": "1e056f9bb3e74310a0bf6a2480ebf1fb",
    "title": "UI Design (Chief of Design)",
    "url": "https://www.cursouidesign.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T05:59:00Z"
  },
  {
    "id": "33a796e3a91648f0a9fce3ab006a462f",
    "title": "UI Expert (Lucas Assis)",
    "url": "https://www.uiexpert.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T05:00:00Z"
  },
  {
    "id": "eb2265e960e443409c999f2f04a16bc0",
    "title": "UI Lab",
    "url": "https://uilab.com.br/#cursos",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UI",
      "Soft Skills"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T14:20:00Z"
  },
  {
    "id": "d05fdc881c7841478c5fe23b3be926f4",
    "title": "UI Pro",
    "url": "https://uipro.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-03-07T02:34:00Z"
  },
  {
    "id": "4b8316658ce044f6a8a009990ab73cd6",
    "title": "uiBoost (Gilberto Prado)",
    "url": "https://uiboost.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "Figma"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T06:01:00Z"
  },
  {
    "id": "9ad8c90fb72a4a999502d7a674c46361",
    "title": "Unesc",
    "url": "http://corporativa.unesc.net/cursos/ux-cx-desing/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T14:25:00Z"
  },
  {
    "id": "a26670d2d73e4ae88741dba673aa9792",
    "title": "UNIASSELVI",
    "url": "https://portal.uniasselvi.com.br/lista-cursos-graduacao/ce/tiangua/cursos/design-de-produto/ead",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Graduação",
      "Pós-Graduação"
    ],
    "themes": [
      "Produto",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2023-03-30T19:55:50Z"
  },
  {
    "id": "a50e621004b14b529f88fcfbc5d8d9c6",
    "title": "UniBH",
    "url": "https://pos.unibh.br/cursos/design-de-sistema-produto-servico/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "Produto",
      "Service Design",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-10-26T17:46:00Z"
  },
  {
    "id": "d0eb012c75d4467bb2328e3f5c3b9529",
    "title": "UniCesumar",
    "url": "https://www.unicesumar.edu.br/ead/cursos-graduacao/design-de-produto/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Graduação"
    ],
    "themes": [
      "UI",
      "UX",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T01:32:00Z"
  },
  {
    "id": "a48fb82f72654cc3b37cf702ed2cbafa",
    "title": "UNIFAI",
    "url": "https://www.unifai.edu.br/pos-graduacao/arquitetura-da-informacao-design-de-interacao-digital",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX",
      "Research",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T01:27:00Z"
  },
  {
    "id": "1f5922232f1b4a7e93d720fa7e8b0c3a",
    "title": "UNINASSAU",
    "url": "https://graduacao.uninassau.digital/nossos-cursos/carreiras-em-tecnologia/34",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Graduação",
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "Service Design"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T01:20:00Z"
  },
  {
    "id": "3e63f3b936dd4477bb899c1af3dc94bd",
    "title": "UniRitter",
    "url": "https://pos.uniritter.edu.br/cursos/design-de-sistema-produto-servico/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "Service Design",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T14:36:00Z"
  },
  {
    "id": "8efe7c1d2d494643bf149cc4c26efd5d",
    "title": "Unisinos",
    "url": "https://www.unisinos.br/pos/especializacao/design-de-servicos-e-de-interacao/hibrido/porto-alegre",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "Service Design",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T01:02:00Z"
  },
  {
    "id": "644dd2f93bc142239a3608b92486fffb",
    "title": "Universidade Positivo",
    "url": "https://www.up.edu.br/pos-graduacao/design-centrado-no-usuario-design-de-interacao/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Presencial"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UX",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T00:57:00Z"
  },
  {
    "id": "feec4c2eb5a044cbb213549c7c3422e4",
    "title": "Unopar",
    "url": "https://www.unopar.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Híbrido"
    ],
    "levels": [
      "Graduação",
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-21T00:46:00Z"
  },
  {
    "id": "7929da8dce3a43d9970c153caa7b27a5",
    "title": "Unyleya",
    "url": "https://unyleya.edu.br/pos-graduacao-ead/curso/user-experience-ux-e-user-interface-ui/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T00:34:00Z"
  },
  {
    "id": "5a6efa47eeab468c807f9c12626a9d2a",
    "title": "User Experience Database",
    "url": "https://www.uxdatabase.io/free-product-design-course",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇺🇸"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-03-07T03:46:00Z"
  },
  {
    "id": "7cc60ffc16f848ac8ee37515281ecd84",
    "title": "UX Change Academy",
    "url": "https://uxchange.com.br/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass",
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "UI",
      "Research",
      "Métricas",
      "Liderança",
      "Produto"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2022-02-19T14:44:00Z"
  },
  {
    "id": "8b816aa8a8fa47be9b5c0385d5bfa0c8",
    "title": "UX Design e Research (UXNOW)",
    "url": "https://cursodeux.com.br",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Research",
      "Carreira",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2023-06-27T15:59:54Z"
  },
  {
    "id": "ff78d7dccd684fee89a5591f4cd04a5b",
    "title": "UX Designer Academy (Georgia Demas)",
    "url": "https://www.georgiademas.com/uxacademy",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI",
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2022-02-19T03:18:00Z"
  },
  {
    "id": "225171ecbd8243a2a8f971d1cc0d276a",
    "title": "UX Motion Design",
    "url": "https://uxmotiondesign.com/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Masterclass",
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Motion"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T14:27:00Z"
  },
  {
    "id": "be93969e668b4d3ab2fec58d4b8de976",
    "title": "UX Unicórnio",
    "url": "https://www.leandrorezende.com.br/programauxunicornio",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp",
      "Pós-Graduação"
    ],
    "themes": [
      "UI",
      "UX",
      "Liderança",
      "Estratégia"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2024-02-05T14:57:27Z"
  },
  {
    "id": "1c46caaaf8a7444287bdbc3ab5f809e3",
    "title": "UX-PM Brasil (Mercedes Sanchez)",
    "url": "https://mercedessanchez.com.br/pt/treinamento",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Certificação"
    ],
    "themes": [
      "UX"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-19T13:31:00Z"
  },
  {
    "id": "2216d55f6f50461dac728fd39cd240b6",
    "title": "UX/UI à prova de balas (Gabriel Silvestri)",
    "url": "https://gabrielsilvestri.com.br/uipb-pp/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T03:09:00Z"
  },
  {
    "id": "3e2ceb97056e439db85da5707e5b53e1",
    "title": "UX4 Tecnologia (UX4BI)",
    "url": "http://ux4bi.com.br/bootcamps/",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "Produto",
      "Métricas"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": true,
    "addedAt": "2022-02-19T06:27:00Z"
  },
  {
    "id": "b90f3de9aebb4e3f8073061608a7470a",
    "title": "UXCOPY.SCHOOL",
    "url": "https://www.sympla.com.br/ux-writing-hands-on-para-iniciantes__1455306#info",
    "cost": [
      "Pago"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Workshop"
    ],
    "themes": [
      "UX",
      "Writing"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": true,
    "hasFeedback": true,
    "addedAt": "2022-02-19T06:23:00Z"
  },
  {
    "id": "30f53997b7374dcab3d7a8ba6c6974c5",
    "title": "UXJam (antiga Daredev)",
    "url": "https://www.linkedin.com/company/somosuxjam/",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2021-12-27T18:05:00Z"
  },
  {
    "id": "98a7bb9cb3af486daaa576060d7a673d",
    "title": "Via Rápida",
    "url": "https://www.cursosviarapida.sp.gov.br/home",
    "cost": [
      "Gratuito"
    ],
    "modality": [
      "Online"
    ],
    "levels": [
      "Curso / Bootcamp"
    ],
    "themes": [
      "UX",
      "UI"
    ],
    "languages": [
      "🇧🇷"
    ],
    "isPartner": false,
    "hasFeedback": false,
    "addedAt": "2022-02-21T00:28:00Z"
  }
]

/** Tags de Tema únicas, ordenadas (Notion multi_select). */
export function getGuiaCursoThemeTags(): string[] {
  const tags = new Set<string>()
  for (const curso of guiaCursos) {
    for (const tag of curso.themes) tags.add(tag)
  }
  return [...tags].sort((a, b) => a.localeCompare(b, 'pt-BR', { sensitivity: 'base' }))
}

export function filterGuiaCursosByTheme(
  cursos: GuiaCurso[],
  themeTag: string | null,
): GuiaCurso[] {
  if (!themeTag) return cursos
  return cursos.filter((curso) => curso.themes.includes(themeTag))
}
