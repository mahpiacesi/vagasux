import { ArrowDown, BookOpenText } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { partners } from '@/data/partners'
import { contact } from '@/lib/siteLinks'

const heroTiles = [
  { slug: 'alura-fiap-pm3', className: 'col-start-1 row-start-1 row-span-2' },
  { slug: 'uxconfbr', className: 'col-start-2 row-start-1' },
  { slug: 'thestarter', className: 'col-start-3 row-start-1' },
  { slug: 'banco-carrefour', className: 'col-start-2 row-start-2 row-span-2' },
  { slug: 'programaria', className: 'col-start-3 row-start-2' },
  { slug: 'design-dende', className: 'col-start-1 row-start-3' },
  { slug: 'husky', className: 'col-start-3 row-start-3' },
] as const

const heroStats = [
  { value: String(partners.length), label: 'parceiros ativos' },
  { value: '+230', label: 'bolsas distribuídas' },
  { value: '+40k', label: 'pessoas na comunidade' },
] as const

function partnerBySlug(slug: string) {
  return partners.find((partner) => partner.slug === slug)
}

export function ParceriasHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-500/10 bg-gradient-to-br from-complementary-100 via-neutral-100 to-brand-100/60 px-5 pt-16 pb-14 md:px-6 md:pt-24 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="parcerias-orb absolute -top-10 right-[6%] h-72 w-72 rounded-full bg-brand-300/20 blur-3xl" />
        <div className="parcerias-orb parcerias-orb-delay absolute bottom-0 left-[2%] h-80 w-80 rounded-full bg-complementary-300/30 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <div>
          <div className="mural-fade flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-500 text-xl text-neutral-100">
              🤝
            </span>
            <p className="text-xs font-bold tracking-[0.22em] text-brand-500 uppercase md:text-sm">
              Parcerias
            </p>
          </div>

          <h1 className="mural-fade mural-fade-delay-1 mt-8 max-w-xl text-[2.35rem] leading-[1.02] font-black tracking-[-0.045em] text-neutral-500 md:text-5xl lg:text-[3.35rem]">
            Conheça quem apoia e{' '}
            <span className="text-mark">como fazer parte</span> com a gente
          </h1>

          <p className="mural-fade mural-fade-delay-2 mt-5 max-w-lg text-base leading-relaxed text-neutral-400 md:text-lg">
            Empresas, escolas e iniciativas que acreditam em um mercado de UX
            mais acessível — e ajudam a criar oportunidades para milhares de
            profissionais.
          </p>

          <dl className="mural-fade mural-fade-delay-2 mt-8 grid max-w-lg grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-500/10 bg-neutral-100/85 px-3 py-3 text-center shadow-[0_12px_32px_-24px_rgb(7_0_58_/_0.35)]"
              >
                <dt className="text-xl font-black tracking-tight text-neutral-500 md:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[0.65rem] font-bold tracking-[0.12em] text-neutral-400 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mural-fade mural-fade-delay-3 mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-7 text-base font-black shadow-md shadow-brand-500/15"
            >
              <a href="#parceiros">
                Ver parceiros
                <ArrowDown size={16} weight="bold" className="ml-1.5" aria-hidden />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-neutral-500/15 px-7 text-base font-bold"
            >
              <a href={`mailto:${contact.email}?subject=Parceria%20VagasUX`}>
                <BookOpenText size={18} weight="bold" className="mr-1.5" aria-hidden />
                Falar sobre parceria
              </a>
            </Button>
          </div>
        </div>

        <div className="mural-fade mural-fade-delay-1 mx-auto w-full max-w-md lg:max-w-none">
          <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-3">
            {heroTiles.map((tile, index) => {
              const partner = partnerBySlug(tile.slug)
              if (!partner?.logo) return null

              return (
                <div
                  key={tile.slug}
                  className={`parcerias-hero-tile group flex min-h-[5rem] items-center justify-center rounded-2xl border border-neutral-500/10 bg-neutral-100/95 p-3 shadow-[0_16px_40px_-28px_rgb(7_0_58_/_0.4)] md:min-h-[5.5rem] ${tile.className}`}
                  style={{ animationDelay: `${100 + index * 55}ms` }}
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 w-auto max-w-[85%] object-contain opacity-90 transition-all duration-300 group-hover:scale-105 group-hover:opacity-100 md:max-h-11"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )
            })}

          </div>
        </div>
      </div>
    </section>
  )
}
