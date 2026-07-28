import { Link } from 'react-router-dom'
import { BeginnersSection } from '@/components/BeginnersSection'
import { Button } from '@/components/ui/button'
import { Marquee } from '@/components/Marquee'
import { NewsletterSection } from '@/components/NewsletterSection'
import { PartnershipsSection } from '@/components/PartnershipsSection'
import { TestimonialsMarquee } from '@/components/TestimonialsMarquee'
import { routes, superSite } from '@/lib/siteLinks'

const communityLinks = [
  { label: 'Conheça a comunidade', href: superSite.comunidade },
  { label: 'Quem organiza', href: superSite.quemOrganiza },
] as const

const marqueeItems = [
  'Júnior',
  'Híbrido',
  'Sênior',
  'Estágio',
  'Presencial',
  'Trainee',
  'Lead',
  'PJ',
  'Entry-level',
  'CLT',
  'Remoto',
]

export function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-16 pb-14 md:px-6 md:pt-24 md:pb-20">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-28 -left-20 h-[28rem] w-[28rem] rounded-full bg-brand-200/35 blur-3xl" />
          <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-complementary-200/45 blur-3xl" />
        </div>

        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <p className="mural-fade text-xs font-bold tracking-[0.2em] text-brand-400 uppercase md:text-sm">
            Comunidade · Curadoria · Carreira
          </p>
          <h1 className="mural-fade mural-fade-delay-1 mt-5 max-w-4xl text-[2.5rem] leading-[1.05] font-black tracking-[-0.04em] text-neutral-500 md:text-6xl lg:text-7xl">
            Curadoria de conteúdos e vagas em UX para{' '}
            <span className="text-mark">todos os níveis</span>, todos mesmo.
          </h1>
          <p className="mural-fade mural-fade-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Acreditamos que oportunidades transformam carreiras. Por isso,
            reunimos vagas, conteúdos e recursos em um só lugar.
          </p>
          <div className="mural-fade mural-fade-delay-2 mt-10 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-7 text-base font-black"
            >
              <Link to={routes.oportunidades}>Ver oportunidades</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-neutral-500/20 px-7 text-base font-bold"
            >
              <a
                href={superSite.publicar}
                target="_blank"
                rel="noopener noreferrer"
              >
                Indicar uma vaga
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Marquee items={marqueeItems} />

      <NewsletterSection />

      <BeginnersSection />

      <TestimonialsMarquee />

      <PartnershipsSection />

      <section className="bg-neutral-500 px-5 py-20 text-neutral-100 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <p className="text-xs font-bold tracking-[0.18em] text-complementary-300 uppercase">
            Comunidade e apoio
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-[1.1] font-black tracking-[-0.03em] md:text-5xl">
            Toda comunidade precisa de quem acredita nela
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Apoie a VagasUX e ajude a manter uma comunidade que amplia o acesso a
            oportunidades em Design.
          </p>
          <div className="mt-10 flex flex-col gap-6">
            <Button
              asChild
              size="lg"
              className="h-12 w-fit rounded-xl bg-complementary-300 px-8 text-base font-black text-neutral-500 shadow-md shadow-black/20 hover:bg-complementary-200"
            >
              <a href={superSite.apoie} target="_blank" rel="noopener noreferrer">
                Apoie a iniciativa
              </a>
            </Button>
            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6">
              {communityLinks.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-neutral-300/80 underline decoration-neutral-300/30 underline-offset-4 transition-colors hover:text-complementary-200 hover:decoration-complementary-200/60"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
