import {
  HandHeart,
  InstagramLogo,
  LinkedinLogo,
  UsersThree,
} from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { volunteers } from '@/data/volunteers'
import { forms } from '@/lib/siteLinks'

const experienceHighlights = [
  {
    title: 'Ritmo flexível',
    description:
      'Cada pessoa contribui no tempo que tem. Algumas horas por semana já fazem diferença.',
  },
  {
    title: 'Impacto coletivo',
    description:
      'Você ajuda a manter vagas, conteúdos e iniciativas que chegam a milhares de pessoas.',
  },
  {
    title: 'Aprendizado na prática',
    description:
      'Curadoria, eventos, moderação, newsletter e mais: dá para crescer junto com a comunidade.',
  },
  {
    title: 'Time distribuído',
    description:
      'Trabalho remoto e assíncrono, com encontros pontuais para alinhar frentes e celebrar entregas.',
  },
] as const

function VolunteerCard({
  name,
  emoji,
  roles,
  instagram,
  linkedin,
}: (typeof volunteers)[number]) {
  return (
    <article className="comunidade-card flex h-full flex-col rounded-3xl border border-neutral-500/10 bg-neutral-100 p-5 shadow-[0_16px_48px_-32px_rgb(7_0_58_/_0.35)]">
      <div className="flex items-start gap-3">
        <span
          className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-brand-100 text-2xl"
          aria-hidden
        >
          {emoji}
        </span>
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-black tracking-[-0.02em] text-neutral-500">
            {name}
          </h3>
          <ul className="mt-2 flex flex-wrap gap-1.5">
            {roles.map((role) => (
              <li
                key={role}
                className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[0.7rem] font-bold tracking-wide text-brand-500 uppercase"
              >
                {role}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {(instagram || linkedin) && (
        <div className="mt-4 flex flex-wrap gap-2 border-t border-neutral-500/10 pt-4">
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
  return (
    <main>
      <section className="relative overflow-hidden bg-neutral-500 px-5 pt-20 pb-16 text-neutral-100 md:px-6 md:pt-28 md:pb-24">
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="comunidade-orb absolute -top-24 -left-16 h-80 w-80 rounded-full bg-brand-400/30 blur-3xl" />
          <div className="comunidade-orb comunidade-orb-delay absolute top-16 -right-20 h-96 w-96 rounded-full bg-complementary-300/20 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <p className="mural-fade text-xs font-bold tracking-[0.22em] text-complementary-300 uppercase md:text-sm">
            Time voluntário
          </p>
          <h1 className="mural-fade mural-fade-delay-1 mt-6 max-w-4xl text-[2.6rem] leading-[1.02] font-black tracking-[-0.045em] md:text-6xl lg:text-7xl">
            Quem faz a{' '}
            <span className="text-mark-on-dark">VagasUX</span> acontecer
          </h1>
          <p className="mural-fade mural-fade-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-300 md:text-xl">
            Profissionais voluntários que tiram um tempinho toda semana (ou
            mais!) para compilar conteúdos, trazer vagas e planejar iniciativas
            que fazem diferença no mercado de UX.
          </p>
        </div>
      </section>

      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Como é ser voluntário
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Impacto real, no seu ritmo
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              Ser voluntário na VagasUX é contribuir com o que você sabe e
              aprender com quem está junto. Não existe jornada única: cada
              pessoa escolhe uma frente, combina com a rotina e ajuda a manter a
              comunidade no ar.
            </p>
          </div>

          <div className="mural-fade mural-fade-delay-1 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {experienceHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6"
              >
                <h3 className="text-base font-black text-neutral-500">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-neutral-500/10 bg-gradient-to-b from-brand-100/50 to-neutral-100 px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mural-fade max-w-3xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Quem são
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Conheça o time
            </h2>
            <p className="mt-5 text-base leading-relaxed text-neutral-400 md:text-lg">
              Recomendamos fuxicar a trajetória de cada pessoa. Tem várias
              curiosidades legais sobre esse povo bonito.
            </p>
          </div>

          <div className="mural-fade mural-fade-delay-1 mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {volunteers.map((person) => (
              <VolunteerCard key={person.name} {...person} />
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-neutral-500 px-5 py-20 text-neutral-100 md:px-6 md:py-28">
        <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(93,107,246,0.25),transparent_55%)]" />

        <div className="relative mx-auto flex max-w-4xl flex-col items-center text-center">
          <span className="mural-fade inline-flex size-14 items-center justify-center rounded-2xl bg-complementary-300 text-neutral-500">
            <HandHeart size={28} weight="bold" aria-hidden />
          </span>
          <p className="mural-fade mural-fade-delay-1 mt-6 text-xs font-bold tracking-[0.2em] text-complementary-300 uppercase">
            Como fazer parte
          </p>
          <h2 className="mural-fade mural-fade-delay-1 mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Quer ser voluntário(a)?
          </h2>
          <p className="mural-fade mural-fade-delay-2 mt-5 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Conta pra gente como você quer ajudar. Analisamos cada candidatura,
            alinhamos expectativas e, se fizer sentido, te recebemos no time com
            onboarding e apoio das frentes.
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
                Quero ser voluntário(a)
              </a>
            </Button>
          </div>
          <p className="mural-fade mural-fade-delay-3 mt-6 flex items-center justify-center gap-2 text-sm text-neutral-400">
            <UsersThree size={18} weight="bold" aria-hidden />
            {volunteers.length} pessoas no time hoje
          </p>
        </div>
      </section>
    </main>
  )
}
