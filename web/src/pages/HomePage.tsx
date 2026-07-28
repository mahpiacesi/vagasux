import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Marquee } from '@/components/Marquee'
import { NewsletterSection } from '@/components/NewsletterSection'
import { PartnershipsSection } from '@/components/PartnershipsSection'
import { TestimonialsMarquee } from '@/components/TestimonialsMarquee'
import { routes, superSite } from '@/lib/siteLinks'

const starterLinks = [
  { label: 'Guia do Product Designer', href: superSite.guia },
  { label: 'Vagas para iniciantes', href: superSite.iniciantes },
  { label: 'Iniciantes em Design', href: superSite.baseIniciantes },
] as const

const communityLinks = [
  { label: 'Conheça a comunidade', href: superSite.comunidade },
  { label: 'Quem organiza', href: superSite.quemOrganiza },
  { label: 'Parcerias', href: superSite.parcerias },
  { label: 'Apoie a iniciativa', href: superSite.apoie },
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

      <TestimonialsMarquee />

      <section className="bg-brand-100/50 px-5 py-20 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
            Para quem é iniciante
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-[1.1] font-black tracking-[-0.03em] text-neutral-500 md:text-5xl">
            Espaço pra quem está começando — de verdade.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Iniciativas focadas em ensinar e abrir caminho pra quem está
            entrando ou migrando pra área.
          </p>
          <ul className="mt-10 space-y-1 border-t border-brand-200/60">
            {starterLinks.map((item) => (
              <li key={item.href} className="border-b border-brand-200/60">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-4 py-5 text-lg font-black text-brand-500 transition-colors hover:text-brand-400 md:text-xl"
                >
                  <span>{item.label}</span>
                  <span
                    aria-hidden
                    className="text-brand-300 transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <PartnershipsSection />

      <section className="bg-neutral-500 px-5 py-20 text-neutral-100 md:px-6 md:py-24">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <p className="text-xs font-bold tracking-[0.18em] text-complementary-300 uppercase">
            Comunidade e apoio
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl leading-[1.1] font-black tracking-[-0.03em] md:text-5xl">
            Feito por pessoas. Sustentado por pessoas.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-300 md:text-lg">
            Conheça quem faz a VagasUX, parcerias e como apoiar o projeto. Essas
            páginas ainda estão no site atual.
          </p>
          <ul className="mt-10 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-x-8">
            {communityLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-bold text-complementary-300 underline decoration-complementary-300/40 underline-offset-4 transition-colors hover:text-complementary-200 hover:decoration-complementary-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
