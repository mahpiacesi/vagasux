import { guiaAreas } from '@/data/guia'
import { guiaHashes } from '@/lib/siteLinks'

export function GuiaAreasSection() {
  return (
    <section
      id={guiaHashes.areas}
      className="border-b border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-areas-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Explorar por área
          </p>
          <h2
            id="guia-areas-heading"
            className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
          >
            Navegue pela jornada
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            Seis áreas orientadas ao que você precisa fazer — não ao tipo de
            arquivo ou formato do conteúdo.
          </p>
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {guiaAreas.map((area) => (
            <li
              key={area.id}
              className="rounded-2xl border border-neutral-500/10 bg-brand-100/20 p-5 md:p-6"
            >
              <div className="flex items-start gap-3">
                <span className="text-2xl" aria-hidden>
                  {area.emoji}
                </span>
                <div>
                  <h3 className="text-lg font-black text-neutral-500">
                    {area.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-neutral-400">
                    {area.description}
                  </p>
                </div>
              </div>

              <ul className="mt-5 space-y-1.5" aria-label={`Tópicos de ${area.title}`}>
                {area.topics.map((topic) => (
                  <li key={topic.id}>
                    <span
                      className="flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-neutral-500"
                      aria-disabled="true"
                    >
                      {topic.title}
                      <span className="shrink-0 text-[0.6rem] font-bold tracking-[0.12em] text-brand-400 uppercase">
                        Em breve
                      </span>
                    </span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
