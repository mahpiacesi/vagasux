import { volunteers } from '@/data/volunteers'

const mentorAvailability = [
  { slug: 'natalia-feitosa', status: 'Indisponível', available: false },
  { slug: 'andre-hiro', status: 'Disponível', available: true },
  { slug: 'anna-barros', status: 'Disponível', available: true },
  { slug: 'luana-conde', status: 'Indisponível', available: false },
  { slug: 'jade-simoes', status: 'Disponível', available: true },
] as const

export const mentors = mentorAvailability.flatMap((mentor) => {
  const volunteer = volunteers.find((person) => person.slug === mentor.slug)
  return volunteer ? [{ ...volunteer, ...mentor }] : []
})
