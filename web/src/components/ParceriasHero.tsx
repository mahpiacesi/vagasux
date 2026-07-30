import { ArrowDown, BookOpenText } from '@phosphor-icons/react'
import { useMemo } from 'react'
import { Button } from '@/components/ui/button'
import type { PartnerDisplay } from '@/lib/partners'
import { contact, mediaKit } from '@/lib/siteLinks'

function LogoRibbon({
  items,
  reverse = false,
}: {
  items: PartnerDisplay[]
  reverse?: boolean
}) {
  if (items.length === 0) return null

  const row = [...items, ...items]

  return (
    <div className="relative overflow-hidden" aria-hidden>
      <div
        className={`parcerias-logo-marquee flex w-max gap-3 py-1 ${reverse ? 'parcerias-logo-marquee-reverse' : ''}`}
      >
        {row.map((partner, index) => (
          <div
            key={`${partner.slug}-${index}`}
            className="flex h-14 w-[8.5rem] shrink-0 items-center justify-center rounded-xl border border-white/15 bg-neutral-100 px-3 shadow-sm md:h-16 md:w-40"
          >
            {partner.logo ? (
              <img
                src={partner.logo}
                alt=""
                className="max-h-8 max-w-[85%] object-contain md:max-h-9"
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="truncate text-[0.6rem] font-bold tracking-wide text-neutral-300 uppercase">
                {partner.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

type ParceriasHeroProps = {
  partners: PartnerDisplay[]
}

export function ParceriasHero({ partners }: ParceriasHeroProps) {
  const ribbonRows = useMemo(
    () =>
      [
        partners.filter((_, index) => index % 2 === 0),
        partners.filter((_, index) => index % 2 === 1),
      ] as const,
    [partners],
  )

  return (
    <section className="relative overflow-hidden bg-neutral-500 px-5 pt-20 pb-0 text-neutral-100 md:px-6 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(93,107,246,0.35),transparent_65%)]" />
        <div className="absolute right-[-8%] bottom-[18%] h-72 w-72 rounded-full bg-complementary-300/15 blur-3xl" />
        <div className="absolute bottom-[8%] left-[-6%] h-64 w-64 rounded-full bg-brand-400/20 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        <p className="mural-fade text-xs font-bold tracking-[0.24em] text-complementary-300 uppercase md:text-sm">
          Parcerias
        </p>

        <h1 className="mural-fade mural-fade-delay-1 mt-8 text-[2.75rem] leading-[1.02] font-black tracking-[-0.05em] md:text-6xl lg:text-[3.75rem]">
          Juntos por um
          <br />
          mercado{' '}
          <span className="text-mark-on-dark">mais acessível.</span>
        </h1>

        <p className="mural-fade mural-fade-delay-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-neutral-300 md:text-xl">
          Empresas, escolas e iniciativas que ajudam a ampliar o acesso a
          oportunidades, conhecimento e desenvolvimento para a comunidade
          VagasUX.
        </p>

        <div className="mural-fade mural-fade-delay-3 mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-complementary-300 px-7 text-base font-black text-neutral-500 shadow-lg shadow-black/20 hover:bg-complementary-200"
          >
            <a
              href={mediaKit.parcerias}
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookOpenText size={18} weight="bold" className="mr-1.5" aria-hidden />
              Ver mídia kit
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-white/20 bg-white/5 px-7 text-base font-bold text-neutral-100 hover:bg-white/10 hover:text-neutral-100"
          >
            <a href="#parceiros">
              Ver parceiros
              <ArrowDown size={16} weight="bold" className="ml-1.5" aria-hidden />
            </a>
          </Button>
        </div>

        <p className="mural-fade mural-fade-delay-3 mt-6 text-sm text-neutral-400">
          Tem uma ideia de parceria?{' '}
          <a
            href={`mailto:${contact.email}?subject=Parceria%20VagasUX`}
            className="font-semibold text-complementary-300 underline decoration-complementary-400/50 underline-offset-4 transition-colors hover:text-complementary-200"
          >
            Fale com a gente
          </a>
        </p>
      </div>

      <div className="parcerias-hero-ribbons relative mx-auto mt-14 max-w-6xl space-y-3 pb-12 md:mt-16 md:pb-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-neutral-500 to-transparent md:w-24" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-neutral-500 to-transparent md:w-24" />
        <LogoRibbon items={ribbonRows[0]} />
        <LogoRibbon items={ribbonRows[1]} reverse />
      </div>

      <div
        className="pointer-events-none absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent"
        aria-hidden
      />
    </section>
  )
}
