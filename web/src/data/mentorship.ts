import { volunteers } from '@/data/volunteers'

export type Mentor = {
  id: string
  slug: string
  name: string
  photo?: string
  photoFocus?: string
  emoji: string
  topics: string[]
  contactUrl?: string
  status: 'Disponível' | 'Indisponível'
  available: boolean
}

const mentorAvailability = [
  { slug: 'natalia-feitosa', status: 'Indisponível', available: false },
  { slug: 'andre-hiro', status: 'Disponível', available: true },
  { slug: 'anna-barros', status: 'Disponível', available: true },
  { slug: 'luana-conde', status: 'Indisponível', available: false },
  { slug: 'jade-simoes', status: 'Disponível', available: true },
] as const satisfies Array<Pick<Mentor, 'slug' | 'status' | 'available'>>

export const mentors: Mentor[] = mentorAvailability.flatMap((mentor) => {
  const volunteer = volunteers.find((person) => person.slug === mentor.slug)
  return volunteer
    ? [{
        id: mentor.slug,
        ...mentor,
        name: volunteer.name,
        photo: volunteer.photo,
        photoFocus: volunteer.photoFocus,
        emoji: volunteer.emoji,
        topics: [],
        contactUrl: volunteer.linkedin,
      }]
    : []
})
