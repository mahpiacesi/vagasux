import { useState } from 'react'
import type { Icon } from '@phosphor-icons/react'
import {
  Clock,
  HandHeart,
  Handshake,
  InstagramLogo,
  Laptop,
  LinkedinLogo,
  Plant,
  UsersThree,
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { VoluntariadoHero } from '@/components/VoluntariadoHero'
import { VolunteerProfileDialog } from '@/components/VolunteerProfileDialog'
import { volunteers, type Volunteer } from '@/data/volunteers'
import { forms } from '@/lib/siteLinks'

const experienceHighlights: {
  title: string
  description: string
  Icon: Icon
}[] = [
  {
    title: 'Ritmo flexível',
    Icon: Clock,
    description:
      'Cada pessoa contribui no tempo que tem. Algumas horas por semana já fazem diferença para manter a comunidade em movimento.',
  },
  {
    title: 'Impacto coletivo',
    Icon: Handshake,
    description:
      'Seu trabalho ajuda a manter vagas, conteúdos, eventos e iniciativas que ampliam o acesso ao mercado de UX Design.',
  },
  {
    title: 'Aprendizado compartilhado',
    Icon: Plant,
    description:
      'Troque experiências com pessoas de diferentes áreas, desenvolva novas habilidades e participe da construção de projetos reais. Ótimo para quem está no começo de carreira!',
  },
  {
    title: 'Time distribuído',
    Icon: Laptop,
    description:
      'Trabalhamos de forma remota e assíncrona, com encontros quinzenais para alinhar iniciativas, compartilhar novidades e celebrar conquistas.',
  },
]

function VolunteerCard({
  person,
  onSelect,
}: {
  person: Volunteer
  onSelect: (person: Volunteer) => void
}) {
  const { name, emoji, photo, roles, instagram, linkedin } = person

  return (
    <article className="comunidade-card group flex h-full flex-col overflow-hidden rounded-2xl border border-neutral-500/10 bg-neutral-100 shadow-[0_16px_48px_-32px_rgb(7_0_58_/_0.35)]">
      <button
        type="button"
        onClick={() => onSelect(person)}
        className="flex flex-1 flex-col text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
        aria-label={`Ver perfil de ${name}`}
      >
        {photo ? (
          <div className="relative aspect-square overflow-hidden bg-brand-100">
            <img
              src={photo}
              alt=""
              className="h-full w-full object-cover object-[center_35%] transition-transform duration-500 group-hover:scale-[1.03]"
              loading="lazy"
              decoding="async"
            />
            <span
              className="absolute top-2.5 right-2.5 flex size-8 items-center justify-center rounded-lg bg-neutral-100/90 text-base shadow-sm backdrop-blur-sm"
              aria-hidden
            >
              {emoji}
            </span>
          </div>
        ) : (
          <div className="relative flex aspect-square items-center justify-center bg-gradient-to-br from-brand-100 to-complementary-100 text-4xl">
            <span aria-hidden>{emoji}</span>
          </div>
        )}

        <div className="flex flex-1 flex-col p-4">
          <h3 className="text-sm font-black tracking-[-0.02em] text-neutral-500">
            {name}
          </h3>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {roles.map((role) => (
              <li
                key={role}
                className="rounded-full bg-brand-100 px-2 py-0.5 text-[0.65rem] font-bold tracking-wide text-brand-500 uppercase"
              >
                {role}
              </li>
            ))}
          </ul>
          <p className="mt-3 text-xs font-bold text-brand-400 transition-colors group-hover:text-brand-500">
            Ver perfil
          </p>
        </div>
      </button>

      {(instagram || linkedin) && (
        <div className="flex flex-wrap gap-2 border-t border-neutral-500/10 px-4 pb-4">
          {instagram ? (
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram de ${name}`}
              className="inline-flex size-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-brand-100 hover:text-brand-500"
            >
              <InstagramLogo size={18} weight="bold" aria-hidden />
            </a>
          ) : null}
          {linkedin ? (
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`LinkedIn de ${name}`}
              className="inline-flex size-9 items-center justify-center rounded-lg text-neutral-400 transition-colors hover:bg-brand-100 hover:text-brand-500"
            >
              <LinkedinLogo size={18} weight="bold" aria-hidden />
            </a>
          ) : null}
        </div>
      )}
    </article>
  )
}

export function VoluntariadoPage() {
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(
    null,
  )

  return (
    <main>
      <VoluntariadoHero />

      <section id="como-e-ser" className="scroll-mt-24 px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Como é ser voluntário
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Construa algo que faz diferença.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              Ser uma pessoa voluntária na VagasUX é colocar suas habilidades a
              serviço de uma comunidade que acredita em um mercado mais
              acessível. Cada pessoa escolhe uma frente principal de atuação,
              pode colaborar com outras iniciativas ao longo do caminho e
              contribui da forma que faz sentido para sua rotina, ajudando a
              fortalecer a comunidade.
            </p>
          </div>

          <div className="mural-fade mural-fade-delay-1 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experienceHighlights.map(({ title, description, Icon }) => (
              <article
                key={title}
                className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6"
              >
                <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-500">
                  <Icon size={22} weight="bold" aria-hidden />
                </span>
                <h3 className="mt-4 text-base font-black text-neutral-500">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="time"
        className="scroll-mt-24 border-t border-neutral-500/10 bg-gradient-to-b from-brand-100/50 to-neutral-100 px-5 py-20 md:px-6 md:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Quem são
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Conheça o time
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              Dê uma fuxicada na trajetória de quem ajuda a construir a
              VagasUX. Tem muita história boa por aqui.
            </p>
          </div>

          <div className="mural-fade mural-fade-delay-1 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {volunteers.map((person) => (
              <VolunteerCard
                key={person.slug}
                person={person}
                onSelect={setSelectedVolunteer}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="como-fazer-parte"
        className="scroll-mt-24 relative overflow-hidden bg-neutral-500 px-5 py-20 text-neutral-100 md:px-6 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(93,107,246,0.25),transparent_55%)]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mural-fade inline-flex size-14 items-center justify-center rounded-2xl bg-complementary-300 text-neutral-500">
            <HandHeart size={28} weight="bold" aria-hidden />
          </span>
          <p className="mural-fade mural-fade-delay-1 mt-6 text-xs font-bold tracking-[0.2em] text-complementary-300 uppercase">
            Como fazer parte
          </p>
          <h2 className="mural-fade mural-fade-delay-1 mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Quer ser uma pessoa voluntária?
          </h2>
          <p className="mural-fade mural-fade-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Toda comunidade cresce com quem escolhe construir junto. Se você
            quer contribuir com a VagasUX, conte para a gente como gostaria de
            ajudar. Avaliamos cada aplicação, alinhamos expectativas e, quando
            surgir uma oportunidade compatível, entraremos em contato para
            conversar.
          </p>
          <div className="mural-fade mural-fade-delay-3 mt-10 flex flex-wrap justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-complementary-300 px-7 text-base font-black text-neutral-500 hover:bg-complementary-200"
            >
              <a
                href={forms.voluntarios}
                target="_blank"
                rel="noopener noreferrer"
              >
                Quero contribuir
              </a>
            </Button>
          </div>
          <p className="mural-fade mural-fade-delay-3 mt-6 flex items-center justify-center gap-2 text-sm text-neutral-400">
            <UsersThree size={18} weight="bold" aria-hidden />
            {volunteers.length} pessoas no time hoje
          </p>
        </div>
      </section>

      <VolunteerProfileDialog
        volunteer={selectedVolunteer}
        open={selectedVolunteer !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedVolunteer(null)
        }}
      />
    </main>
  )
}
