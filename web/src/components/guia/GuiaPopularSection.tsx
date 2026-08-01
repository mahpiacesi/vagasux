import { ArrowRight, Sparkle } from '@phosphor-icons/react'
import { GuiaContentCard } from '@/components/guia/GuiaContentCard'
import { guiaPopularContent } from '@/data/guia'
import { guiaHashes } from '@/lib/siteLinks'

export function GuiaPopularSection() {
  return (
    <section
      id={guiaHashes.populares}
      className="border-b border-neutral-500/10 bg-brand-100/20 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-popular-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Destaques
            </p>
            <h2
              id="guia-popular-heading"
              className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
            >
              Conteúdos populares
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
              Os mais acessados pela comunidade — cards preparados para
              dificuldade, tipo e tempo de leitura.
            </p>
          </div>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guiaPopularContent.map((item) => (
            <li key={item.id}>
              <GuiaContentCard item={item} className="h-full" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export function GuiaContinueSection() {
  return (
    <section
      className="px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-continue-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-brand-200/60 bg-gradient-to-br from-brand-100/80 via-neutral-100 to-complementary-100/50 p-8 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-xl">
              <p className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
                <Sparkle size={16} weight="fill" aria-hidden />
                Continue aprendendo
              </p>
              <h2
                id="guia-continue-heading"
                className="mt-4 text-2xl leading-tight font-black tracking-[-0.03em] text-neutral-500 md:text-3xl"
              >
                Nunca fique sem um próximo passo
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-400">
                Em breve, cada página do Guia vai sugerir trilhas, artigos e
                ferramentas relacionadas — como um mentor que indica o caminho
                seguinte.
              </p>
            </div>

            <ul className="grid w-full max-w-md gap-2 text-sm font-bold text-neutral-500">
              {['Continue aprendendo', 'Você também pode gostar', 'Próximo passo'].map(
                (label) => (
                  <li key={label}>
                    <span
                      className="flex items-center justify-between rounded-xl border border-neutral-500/10 bg-neutral-100/80 px-4 py-3"
                      aria-disabled="true"
                    >
                      {label}
                      <ArrowRight size={16} weight="bold" className="text-brand-400" aria-hidden />
                    </span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
