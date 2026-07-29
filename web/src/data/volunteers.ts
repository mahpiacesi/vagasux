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
import mariannaPhoto from '@/assets/volunteers/marianna-piacesi.jpg'
import tatianaPhoto from '@/assets/volunteers/tatiana-barbosa.png'

export type Volunteer = {
  slug: string
  name: string
  emoji: string
  roles: string[]
  photo?: string
  /** CSS object-position for modal header crop */
  photoFocus?: string
  instagram?: string
  linkedin?: string
}

export const defaultPhotoFocus = 'center 35%'

/** Snapshot from Notion database c4497f3b-3cdd-48dd-8705-1af83cb0ae6d */
export const volunteers: Volunteer[] = [
  {
    slug: 'aline-gagliardi',
    name: 'Aline Gagliardi',
    emoji: '❄️',
    photo: alinePhoto,
    photoFocus: 'center 46%',
    roles: ['Edição'],
    instagram: 'https://instagram.com/alinedt_',
    linkedin: 'https://www.linkedin.com/in/alinegagliardi/',
  },
  {
    slug: 'andre-hiro',
    name: 'Andre Hiro',
    emoji: '⚡',
    photo: andrePhoto,
    photoFocus: 'center 55%',
    roles: ['Busca por vagas', 'Redes Sociais'],
    instagram: 'https://www.instagram.com/andre.hiro/',
    linkedin: 'https://www.linkedin.com/in/andre-hiroyuki-yoshioka/',
  },
  {
    slug: 'anna-barros',
    name: 'Anna Barros',
    emoji: '👁️‍🗨️',
    photo: annaPhoto,
    roles: ['Moderação', 'Site'],
    instagram: 'https://instagram.com/helloannanna',
    linkedin: 'https://www.linkedin.com/in/annaabarros',
  },
  {
    slug: 'bruna-david',
    name: 'Bruna David',
    emoji: '🐈‍⬛',
    photo: brunaPhoto,
    roles: ['Conteúdo', 'Recrutamento', 'Onboarding'],
    instagram: 'https://www.instagram.com/brunadavidautora/',
    linkedin: 'https://www.linkedin.com/in/brunadavidautora/',
  },
  {
    slug: 'fernando-lima',
    name: 'Fernando Lima',
    emoji: '👾',
    photo: fernandoPhoto,
    photoFocus: 'center 52%',
    roles: ['Seletivas', 'Eventos'],
    instagram: 'https://www.instagram.com/paulista_nando/',
    linkedin: 'https://www.linkedin.com/in/fernando-lima-98b8b11a2/',
  },
  {
    slug: 'gabriela-peron',
    name: 'Gabriela Peron',
    emoji: '🐝',
    photo: gabrielaPhoto,
    photoFocus: 'center 44%',
    roles: ['Seletivas', 'Newsletter', 'Moderação', 'Eventos', 'Medium'],
    instagram: 'https://www.instagram.com/gabrela.ux/',
    linkedin: 'https://www.linkedin.com/in/gabrielaperon/',
  },
  {
    slug: 'iago-de-souza',
    name: 'Iago de Souza',
    emoji: '🦜',
    photo: iagoPhoto,
    roles: ['Edição'],
    instagram: 'https://www.instagram.com/inhagu_/',
    linkedin: 'https://www.linkedin.com/in/iago-d-sousa/',
  },
  {
    slug: 'jade-simoes',
    name: 'Jade Simões',
    emoji: '🥑',
    photo: jadePhoto,
    roles: ['Redes Sociais', 'Eventos'],
    instagram: 'https://www.instagram.com/jadesidesign/',
    linkedin: 'https://www.linkedin.com/in/jade-simoes/',
  },
  {
    slug: 'juarez-egildo',
    name: 'Juarez Egildo',
    emoji: '🧙',
    photo: juarezPhoto,
    photoFocus: 'center 50%',
    roles: ['Redes Sociais'],
    instagram: 'https://www.instagram.com/juarez_ju',
    linkedin: 'https://www.linkedin.com/in/juarez-egildo-ux/',
  },
  {
    slug: 'luana-conde',
    name: 'Luana Conde',
    emoji: '🪩',
    photo: luanaPhoto,
    roles: ['Moderação'],
    linkedin: 'https://www.linkedin.com/in/luanaconde/',
  },
  {
    slug: 'manuela-lacerda',
    name: 'Manuela Lacerda',
    emoji: '🌻',
    photo: manuelaPhoto,
    roles: ['Podcast'],
    linkedin: 'https://www.linkedin.com/in/manuela-consorte/',
  },
  {
    slug: 'marianna-piacesi',
    name: 'Marianna Piacesi',
    emoji: '☂️',
    photo: mariannaPhoto,
    roles: ['Organização', 'Revisão', 'Parcerias'],
    instagram: 'https://instagram.com/mahpiacesi',
    linkedin: 'https://www.linkedin.com/in/mahpiacesi/',
  },
  {
    slug: 'natalia-feitosa',
    name: 'Natalia Feitosa',
    emoji: '🦄',
    photo: nataliaPhoto,
    photoFocus: 'center 38%',
    roles: ['Medium', 'Pesquisa', 'Redes Sociais'],
    instagram: 'https://www.instagram.com/natfeitosa20/',
    linkedin: 'https://www.linkedin.com/in/natalia-feitosa/',
  },
  {
    slug: 'paula-hollanda',
    name: 'Paula Hollanda',
    emoji: '✨',
    photo: paulaPhoto,
    roles: ['Newsletter', 'Busca por vagas'],
    linkedin: 'https://www.linkedin.com/in/paulahollanda/',
  },
  {
    slug: 'rafael-ribeiro',
    name: 'Rafael Ribeiro',
    emoji: '🤓',
    photo: rafaelPhoto,
    roles: ['Discord'],
    instagram: 'https://www.instagram.com/oraffaa/',
    linkedin: 'https://www.linkedin.com/in/rafael-ribeiro-855b54215/',
  },
  {
    slug: 'tatiana-barbosa',
    name: 'Tatiana Barbosa',
    emoji: '🐳',
    photo: tatianaPhoto,
    photoFocus: 'center 62%',
    roles: ['Parcerias'],
    instagram: 'https://www.instagram.com/tatibrbs/',
    linkedin: 'https://www.linkedin.com/in/tatibrbs/',
  },
]
