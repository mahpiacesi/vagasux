import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { MentorshipRequestForm } from '@/components/MentorshipRequestForm'
import { mentors as fallbackMentors, type Mentor } from '@/data/mentorship'
import { routes } from '@/lib/siteLinks'
import { fetchActiveMentors, type PublicMentor } from '@/lib/supabase'

function mentorSlug(name: string) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function mergeMentor(publicMentor: PublicMentor): Mentor {
  const fallback = fallbackMentors.find((mentor) => mentor.slug === mentorSlug(publicMentor.name))
  return {
    id: publicMentor.notionPageId,
    slug: mentorSlug(publicMentor.name),
    name: publicMentor.name,
    photo: publicMentor.photo ?? fallback?.photo,
    photoFocus: fallback?.photoFocus,
    emoji: fallback?.emoji ?? '💬',
    topics: publicMentor.topics,
    contactUrl: publicMentor.contactUrl,
    status: publicMentor.status,
    available: publicMentor.status === 'Disponível',
  }
}

export function MentorshipRequestPage() {
  const [mentors, setMentors] = useState<Mentor[]>(fallbackMentors)

  useEffect(() => {
    let cancelled = false
    void fetchActiveMentors()
      .then((publicMentors) => {
        if (!cancelled && publicMentors.length > 0) setMentors(publicMentors.map(mergeMentor))
      })
      .catch((error) => {
        console.warn('Failed to load mentors from Supabase, using fallback.', error)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <main>
      <section className="border-b border-neutral-500/10 bg-brand-100/40 px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Navegação estrutural" className="flex flex-wrap gap-2 text-sm font-bold text-neutral-400">
            <Link to={routes.home} className="hover:text-brand-500">Home</Link>
            <span aria-hidden>/</span>
            <Link to={routes.mentoria} className="hover:text-brand-500">Mentoria</Link>
            <span aria-hidden>/</span>
            <span className="text-neutral-500" aria-current="page">Mentorado</span>
          </nav>
          <p className="mt-8 text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Solicite sua mentoria
          </p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.05em] text-neutral-500 md:text-6xl">
            Conte com quem e sobre o que quer conversar
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Depois da contribuição, envie seu comprovante e o contexto da conversa. A solicitação será revisada antes da confirmação.
          </p>
          <MentorshipRequestForm
            mentors={mentors
              .filter((mentor) => mentor.available)
              .map((mentor) => ({ id: mentor.id, name: mentor.name }))}
          />
        </div>
      </section>
    </main>
  )
}
