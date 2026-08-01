import { GuiaContentCard } from '@/components/guia/GuiaContentCard'
import { guiaPopularContent } from '@/data/guia'
import { guiaHashes } from '@/lib/siteLinks'

export function GuiaPopularSection() {
  return (
    <section
      id={guiaHashes.populares}
      className="bg-brand-100/25 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-popular-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Populares
            </p>
            <h2
              id="guia-popular-heading"
              className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
            >
              Mais acessados
            </h2>
            <p className="mt-4 text-base leading-relaxed text-neutral-400">
              Os mais acessados pela comunidade — cards preparados para
              receber links reais na migração.
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
