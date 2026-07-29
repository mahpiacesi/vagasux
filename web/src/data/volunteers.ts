import alinePhoto from '@/assets/volunteers/aline-gagliardi.png'
import andrePhoto from '@/assets/volunteers/andre-hiro.png'
import annaPhoto from '@/assets/volunteers/anna-barros.jpeg'
import brunaPhoto from '@/assets/volunteers/bruna-david.jpg'
import fernandoPhoto from '@/assets/volunteers/fernando-lima.jpeg'
import gabrielaPhoto from '@/assets/volunteers/gabriela-peron.png'
import iagoPhoto from '@/assets/volunteers/iago-de-souza.jpg'
import jadePhoto from '@/assets/volunteers/jade-simoes.png'
import juarezPhoto from '@/assets/volunteers/juarez-egildo.jpeg'
import luanaPhoto from '@/assets/volunteers/luana-conde.jpg'
import manuelaPhoto from '@/assets/volunteers/manuela-lacerda.png'
import nataliaPhoto from '@/assets/volunteers/natalia-feitosa.jpeg'
import paulaPhoto from '@/assets/volunteers/paula-hollanda.jpg'
import rafaelPhoto from '@/assets/volunteers/rafael-ribeiro.jpeg'
import tatianaPhoto from '@/assets/volunteers/tatiana-barbosa.png'

export type Volunteer = {
  name: string
  emoji: string
  roles: string[]
  photo?: string
  instagram?: string
  linkedin?: string
}

/** Snapshot from Notion database c4497f3b-3cdd-48dd-8705-1af83cb0ae6d */
export const volunteers: Volunteer[] = [
  {
    name: 'Aline Gagliardi',
    emoji: '❄️',
    photo: alinePhoto,
    roles: ['Edição'],
    instagram: 'https://instagram.com/alinedt_',
    linkedin: 'https://www.linkedin.com/in/alinegagliardi/',
  },
  {
    name: 'Andre Hiro',
    emoji: '⚡',
    photo: andrePhoto,
    roles: ['Busca por vagas', 'Redes Sociais'],
    instagram: 'https://www.instagram.com/andre.hiro/',
    linkedin: 'https://www.linkedin.com/in/andre-hiroyuki-yoshioka/',
  },
  {
    name: 'Anna Barros',
    emoji: '👁️‍🗨️',
    photo: annaPhoto,
    roles: ['Moderação', 'Site'],
    instagram: 'https://instagram.com/helloannanna',
    linkedin: 'https://www.linkedin.com/in/annaabarros',
  },
  {
    name: 'Bruna David',
    emoji: '🐈‍⬛',
    photo: brunaPhoto,
    roles: ['Conteúdo', 'Recrutamento', 'Onboarding'],
    instagram: 'https://www.instagram.com/brunadavidautora/',
    linkedin: 'https://www.linkedin.com/in/brunadavidautora/',
  },
  {
    name: 'Fernando Lima',
    emoji: '👾',
    photo: fernandoPhoto,
    roles: ['Seletivas', 'Eventos'],
    instagram: 'https://www.instagram.com/paulista_nando/',
    linkedin: 'https://www.linkedin.com/in/fernando-lima-98b8b11a2/',
  },
  {
    name: 'Gabriela Peron',
    emoji: '🐝',
    photo: gabrielaPhoto,
    roles: ['Seletivas', 'Newsletter', 'Moderação', 'Eventos', 'Medium'],
    instagram: 'https://www.instagram.com/gabrela.ux/',
    linkedin: 'https://www.linkedin.com/in/gabrielaperon/',
  },
  {
    name: 'Iago de Souza',
    emoji: '🦜',
    photo: iagoPhoto,
    roles: ['Edição'],
    instagram: 'https://www.instagram.com/inhagu_/',
    linkedin: 'https://www.linkedin.com/in/iago-d-sousa/',
  },
  {
    name: 'Jade Simões',
    emoji: '🥑',
    photo: jadePhoto,
    roles: ['Redes Sociais', 'Eventos'],
    instagram: 'https://www.instagram.com/jadesidesign/',
    linkedin: 'https://www.linkedin.com/in/jade-simoes/',
  },
  {
    name: 'Juarez Egildo',
    emoji: '🧙',
    photo: juarezPhoto,
    roles: ['Redes Sociais'],
    instagram: 'https://www.instagram.com/juarez_ju',
    linkedin: 'https://www.linkedin.com/in/juarez-egildo-ux/',
  },
  {
    name: 'Luana Conde',
    emoji: '🪩',
    photo: luanaPhoto,
    roles: ['Moderação'],
    linkedin: 'https://www.linkedin.com/in/luanaconde/',
  },
  {
    name: 'Manuela Lacerda',
    emoji: '🌻',
    photo: manuelaPhoto,
    roles: ['Podcast'],
    linkedin: 'https://www.linkedin.com/in/manuela-consorte/',
  },
  {
    name: 'Marianna Piacesi',
    emoji: '☂️',
    roles: ['Organização', 'Revisão', 'Parcerias'],
    instagram: 'https://instagram.com/mahpiacesi',
    linkedin: 'https://www.linkedin.com/in/mahpiacesi/',
  },
  {
    name: 'Natalia Feitosa',
    emoji: '🦄',
    photo: nataliaPhoto,
    roles: ['Medium', 'Pesquisa', 'Redes Sociais'],
    instagram: 'https://www.instagram.com/natfeitosa20/',
    linkedin: 'https://www.linkedin.com/in/natalia-feitosa/',
  },
  {
    name: 'Paula Hollanda',
    emoji: '✨',
    photo: paulaPhoto,
    roles: ['Newsletter', 'Busca por vagas'],
    linkedin: 'https://www.linkedin.com/in/paulahollanda/',
  },
  {
    name: 'Rafael Ribeiro',
    emoji: '🤓',
    photo: rafaelPhoto,
    roles: ['Discord'],
    instagram: 'https://www.instagram.com/oraffaa/',
    linkedin: 'https://www.linkedin.com/in/rafael-ribeiro-855b54215/',
  },
  {
    name: 'Tatiana Barbosa',
    emoji: '🐳',
    photo: tatianaPhoto,
    roles: ['Parcerias'],
    instagram: 'https://www.instagram.com/tatibrbs/',
    linkedin: 'https://www.linkedin.com/in/tatibrbs/',
  },
]
