import { Link } from 'react-router-dom'
import { guiaTemas } from '@/data/guia'
import { guiaHashes } from '@/lib/siteLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTemasSection() {
  return (
    <section
      id={guiaHashes.temas}
      className="border-b border-neutral-500/10 bg-brand-100/25 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-temas-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Por tema
          </p>
          <h2
            id="guia-temas-heading"
            className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
          >
            Explorar por tema
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            Todo o material curado sobre cada assunto: UX, UI, ferramentas e
            mais.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {guiaTemas.map((tema) => (
            <li key={tema.id}>
              <Link
                to={
                  tema.id === 'ferramentas'
                    ? guiaRoutes.ferramentas
                    : guiaRoutes.tema(tema.id)
                }
                className="flex h-full flex-col items-center rounded-2xl border border-neutral-500/10 bg-neutral-100 px-3 py-4 text-center transition-colors hover:border-brand-300 hover:bg-brand-100/40"
              >
                {tema.emoji ? (
                  <span className="text-xl" aria-hidden>
                    {tema.emoji}
                  </span>
                ) : null}
                <span className="mt-2 text-sm font-bold text-neutral-500">
                  {tema.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
