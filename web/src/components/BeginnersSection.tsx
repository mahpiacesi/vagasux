import { Link } from 'react-router-dom'
import { GuiaHeroIllustration } from '@/components/GuiaHeroIllustration'
import { Button } from '@/components/ui/button'
import { routes, superSite } from '@/lib/siteLinks'

export function BeginnersSection() {
  return (
    <section className="bg-brand-100/50 px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 md:max-w-5xl md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-14">
        <div className="w-full md:max-w-md lg:max-w-lg">
          <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
            Para quem é iniciante
          </p>
          <h2 className="mt-4 max-w-xl text-3xl leading-[1.08] font-black tracking-[-0.03em] text-neutral-500 md:text-5xl">
            Não sabe por onde <span className="text-mark">começar</span>?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400 md:text-lg">
            Um guia gratuito com conteúdos selecionados para ajudar você a dar
            os primeiros passos em Product Design.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-8 text-base font-black"
            >
              <a
                href={superSite.guia}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acessar o guia
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-brand-200 px-8 text-base font-bold"
            >
              <Link to={routes.curadoria}>Ver curadoria</Link>
            </Button>
          </div>
        </div>

        <div className="w-full max-w-[22rem] shrink-0 md:max-w-[26rem]">
          <GuiaHeroIllustration className="guia-hero h-auto w-full overflow-visible" />
        </div>
      </div>
    </section>
  )
}
