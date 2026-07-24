import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { routes, superSite } from '@/lib/siteLinks'

const starterLinks = [
  { label: 'Guia do Product Designer', href: superSite.guia, external: true },
  {
    label: 'Vagas para iniciantes',
    href: superSite.iniciantes,
    external: true,
  },
  {
    label: 'Iniciantes em Design',
    href: superSite.baseIniciantes,
    external: true,
  },
] as const

const communityLinks = [
  { label: 'Conheça a comunidade', to: routes.comunidade },
  { label: 'Quem organiza', to: routes.quemOrganiza },
  { label: 'Parcerias', to: routes.parcerias },
  { label: 'Apoie a iniciativa', to: routes.apoie },
  { label: 'Código de conduta', to: routes.codigoDeConduta },
] as const

export function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-12 pb-10 md:px-6 md:pt-16 md:pb-14">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute top-16 right-0 h-64 w-64 rounded-full bg-complementary-200/50 blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgb(111 106 148 / 0.18) 1px, transparent 0)',
              backgroundSize: '22px 22px',
            }}
          />
        </div>

        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h1 className="mural-fade max-w-2xl text-3xl font-black tracking-tight text-neutral-500 md:text-5xl md:leading-tight">
            Curadoria de conteúdos e vagas em UX para todos os níveis, todos
            mesmo.
          </h1>
          <p className="mural-fade mural-fade-delay-1 mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            Acreditamos que oportunidades transformam carreiras. Por isso,
            reunimos vagas, conteúdos e recursos em um só lugar.
          </p>
          <div className="mural-fade mural-fade-delay-2 mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="px-6 font-bold">
              <Link to={routes.oportunidades}>Ver oportunidades</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="px-6 font-bold">
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

      <section className="border-t border-neutral-200/80 px-5 py-12 md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-xl font-black tracking-tight text-neutral-500 md:text-2xl">
            Para quem é iniciante
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
            Iniciativas focadas em ensinar e abrir espaço pra quem está
            começando ou migrando pra área.
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {starterLinks.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 text-base font-bold text-brand-500 transition-colors hover:text-brand-400"
                >
                  <span className="underline decoration-brand-200 underline-offset-4 group-hover:decoration-brand-300">
                    {item.label}
                  </span>
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    →
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-neutral-200/80 px-5 py-12 md:px-6 md:py-14">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <h2 className="text-xl font-black tracking-tight text-neutral-500 md:text-2xl">
            Comunidade e apoio
          </h2>
          <p className="mt-2 max-w-xl text-sm leading-relaxed text-neutral-400 md:text-base">
            Conheça quem faz a VagasUX, parcerias e como apoiar o projeto.
          </p>
          <ul className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-3">
            {communityLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm font-semibold text-neutral-400 underline decoration-neutral-200 underline-offset-4 transition-colors hover:text-brand-500 hover:decoration-brand-200"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
