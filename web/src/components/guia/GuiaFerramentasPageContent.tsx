import { useState } from 'react'
import { CaretDown, FigmaLogo, Toolbox } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import { Button } from '@/components/ui/button'
import {
  guiaFerramentasLinks,
  guiaFigmaLinks,
} from '@/data/guiaFerramentas'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaFerramentasPageContent() {
  const [figmaOpen, setFigmaOpen] = useState(false)

  return (
    <div className="mt-8 w-full">
      <header className="max-w-3xl">
        <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-500">
          <Toolbox size={23} weight="duotone" aria-hidden />
        </span>
        <h1 className="mt-5 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          Ferramentas
        </h1>
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          Ferramentas para criar, prototipar e transformar ideias em
          experiências.
        </p>
      </header>

      <section className="mt-10 rounded-3xl border border-brand-200/60 bg-brand-100/35 p-5 md:p-6">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex gap-3">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-neutral-100 text-brand-500 shadow-sm">
              <FigmaLogo size={24} weight="duotone" aria-hidden />
            </span>
            <div>
              <h2 className="text-xl font-black text-neutral-500">Figma</h2>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                Recomendações para aproveitar melhor a ferramenta no dia a dia.
              </p>
            </div>
          </div>
          <Button
            type="button"
            variant="guia-outline"
            aria-expanded={figmaOpen}
            onClick={() => setFigmaOpen((open) => !open)}
          >
            Ver recomendações
            <CaretDown
              size={16}
              weight="bold"
              className={figmaOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
              aria-hidden
            />
          </Button>
        </div>

        {figmaOpen ? (
          <ul className="mt-6 grid gap-4 lg:grid-cols-2">
            {guiaFigmaLinks.map((link) => (
              <li key={link.url}>
                <GuiaLinkPreviewCard link={link} className="h-full" />
              </li>
            ))}
          </ul>
        ) : null}
      </section>

      <section className="mt-12" aria-labelledby="ferramentas-lista">
        <h2
          id="ferramentas-lista"
          className="text-xl font-black tracking-[-0.02em] text-neutral-500"
        >
          Outras ferramentas
        </h2>
        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {guiaFerramentasLinks.map((link) => (
            <li key={link.url}>
              <GuiaLinkPreviewCard link={link} className="h-full" />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12 rounded-3xl border border-complementary-300/50 bg-complementary-100 p-6 md:p-8">
        <h2 className="text-xl font-black text-neutral-500">
          Procurando ferramentas de IA?
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
          Explore referências para incorporar IA ao seu processo de design.
        </p>
        <Button asChild variant="guia-outline" className="mt-5">
          <Link to={guiaRoutes.tema('ia')}>Explorar tema IA</Link>
        </Button>
      </section>

      <section className="mt-12 rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6 md:p-8">
        <h2 className="text-xl font-black text-neutral-500">
          Procurando ferramentas para criar portfólio?
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
          Encontre referências para organizar seus cases e apresentar sua
          trajetória com clareza.
        </p>
        <Button asChild variant="guia" className="mt-5">
          <Link to={guiaRoutes.trilha('portfolio')}>
            Explorar trilha de portfólio
          </Link>
        </Button>
      </section>
    </div>
  )
}
