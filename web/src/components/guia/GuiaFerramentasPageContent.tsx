import { useState } from 'react'
import { ArrowLeft, CaretDown, FigmaLogo, Question } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { GuiaLinkPreviewCard } from '@/components/guia/GuiaLinkPreviewCard'
import { Button } from '@/components/ui/button'
import {
  guiaFerramentasLinks,
  guiaFigmaLinks,
  guiaQuadroDeIdeiasLinks,
} from '@/data/guiaFerramentas'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaFerramentasPageContent() {
  const [figmaOpen, setFigmaOpen] = useState(false)

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap items-center gap-3">
        <Link
          to={guiaRoutes.home}
          className="inline-flex items-center gap-2 rounded-full bg-brand-400 px-4 py-2.5 text-sm font-bold text-neutral-100 transition-colors hover:bg-brand-500"
        >
          <ArrowLeft size={18} weight="bold" aria-hidden />
          Voltar ao Guia
        </Link>
        <Link
          to={guiaRoutes.faq}
          className="inline-flex items-center gap-2 rounded-full border border-neutral-500/10 bg-brand-100/30 px-4 py-2.5 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500"
        >
          <Question size={18} weight="bold" aria-hidden />
          FAQ
        </Link>
      </div>

      <header className="mt-8 max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="text-3xl" aria-hidden>🧰</span>
          <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
            Ferramentas
          </h1>
        </div>
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
            Ver links úteis
            <CaretDown
              size={16}
              weight="bold"
              className={figmaOpen ? 'rotate-180 transition-transform' : 'transition-transform'}
              aria-hidden
            />
          </Button>
        </div>

        {figmaOpen ? (
          <>
            <ul className="mt-6 grid gap-4 lg:grid-cols-2">
              {guiaFigmaLinks.map((link) => (
                <li key={link.url}>
                  <GuiaLinkPreviewCard link={link} className="h-full" />
                </li>
              ))}
            </ul>
          </>
        ) : null}
      </section>

      <section className="mt-12" aria-labelledby="ferramentas-lista">
        <h2
          id="ferramentas-lista"
          className="text-xl font-black tracking-[-0.02em] text-neutral-500"
        >
          Ferramentas de criação
        </h2>
        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {guiaFerramentasLinks.map((link) => (
            <li key={link.url}>
              <GuiaLinkPreviewCard link={link} className="h-full" />
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12" aria-labelledby="quadro-de-ideias">
        <h2 id="quadro-de-ideias" className="text-xl font-black tracking-[-0.02em] text-neutral-500">
          Quadro de ideias
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          Ferramentas para dinâmicas, wireframes, fluxos, jornadas e colaboração com o time.
        </p>
        <ul className="mt-5 grid gap-4 lg:grid-cols-2">
          {guiaQuadroDeIdeiasLinks.map((link) => (
            <li key={link.url}>
              <GuiaLinkPreviewCard link={link} className="h-full" />
            </li>
          ))}
        </ul>
      </section>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        <section className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6 md:p-8">
          <h2 className="text-xl font-black text-neutral-500">
            Procurando ferramentas de IA?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            Explore referências para incorporar IA ao seu processo de design.
          </p>
          <Button asChild variant="guia-outline" className="mt-5">
            <Link to={guiaRoutes.tema('ia')}>Explorar IA</Link>
          </Button>
        </section>

        <section className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6 md:p-8">
          <h2 className="text-xl font-black text-neutral-500">
            Procurando ferramentas para criar portfólio?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-neutral-400">
            Encontre referências para organizar seus cases e apresentar sua
            trajetória com clareza.
          </p>
          <Button asChild variant="guia-outline" className="mt-5">
            <Link to={guiaRoutes.trilha('portfolio')}>
              Explorar portfólio
            </Link>
          </Button>
        </section>
      </div>

      <blockquote className="mt-12 rounded-3xl bg-brand-500 px-6 py-8 text-center text-lg leading-relaxed font-bold text-neutral-100 md:px-12 md:text-2xl">
        “Master your craft, but don't forget mastering your humanity.”
        <p className="mt-3 text-sm font-normal italic text-brand-100">
          Domine seu ofício, mas não se esqueça de dominar sua humanidade.
        </p>
        <footer className="mt-4 text-sm font-semibold text-brand-200">
          Haraldur Thorleifsson
        </footer>
      </blockquote>
    </div>
  )
}
