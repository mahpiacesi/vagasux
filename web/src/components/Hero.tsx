import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-100 px-6 pb-20 pt-16 md:pb-28 md:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-complementary-200/50 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl">
        <span className="inline-flex items-center rounded-full border border-brand-200 bg-neutral-100 px-4 py-1.5 text-sm font-semibold text-brand-400">
          Comunidade brasileira de UX, Produto e Design
        </span>

        <h1 className="mt-6 max-w-3xl text-4xl font-black leading-tight tracking-tight text-brand-500 md:text-6xl">
          Oportunidades, apoio e troca real para quem quer crescer em UX
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
          A VagasUX é uma comunidade que democratiza acesso ao mercado de UX, Produto e
          Design — com curadoria de vagas, conteúdo útil e networking de verdade. Sem
          formalidade de startup, com acolhimento de comunidade.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="#participar"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-300 px-7 py-3.5 text-base font-semibold text-neutral-100 transition-colors hover:bg-brand-400"
          >
            Conhecer a comunidade
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href="#como-funciona"
            className="inline-flex items-center justify-center rounded-full border border-neutral-200 bg-neutral-100 px-7 py-3.5 text-base font-semibold text-brand-500 transition-colors hover:border-brand-200 hover:bg-brand-100"
          >
            Como funciona
          </a>
        </div>
      </div>
    </section>
  )
}
