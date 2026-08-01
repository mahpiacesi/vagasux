import { Link } from 'react-router-dom'
import { guiaTipos } from '@/data/guia'
import { guiaHashes } from '@/lib/siteLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTiposSection() {
  return (
    <section
      id={guiaHashes.tipos}
      className="border-b border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-tipos-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Por tipo de conteúdo
          </p>
          <h2
            id="guia-tipos-heading"
            className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
          >
            Explorar por tipo de conteúdo
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            Artigos, vídeos, cursos, livros, podcasts, eventos, canais e mais.
          </p>
        </div>

        <ul className="mt-10 flex flex-wrap gap-2">
          {guiaTipos.map((tipo) => (
            <li key={tipo.id}>
              <Link
                to={guiaRoutes.tipo(tipo.id)}
                className="inline-flex items-center rounded-full border border-neutral-500/10 bg-brand-100/30 px-4 py-2.5 text-sm font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500"
                title={tipo.description}
              >
                {tipo.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
