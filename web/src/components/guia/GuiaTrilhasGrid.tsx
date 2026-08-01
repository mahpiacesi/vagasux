import { Link } from 'react-router-dom'
import { guiaTrilhas } from '@/data/guia'
import { guiaHashes } from '@/lib/siteLinks'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

function TrilhaCard({
  trilha,
  className,
}: {
  trilha: (typeof guiaTrilhas)[number]
  className?: string
}) {
  const content = (
    <>
      <span className="text-2xl" aria-hidden>
        {trilha.emoji}
      </span>
      <span className="mt-4 text-base font-black text-neutral-500">
        {trilha.title}
      </span>
      <span className="mt-2 text-sm leading-relaxed text-neutral-400">
        {trilha.description}
      </span>
    </>
  )

  if (trilha.id === 'explorar') {
    return (
      <a
        href={`#${guiaHashes.temas}`}
        className={cn(
          'flex h-full w-full flex-col rounded-2xl border border-neutral-500/10 bg-brand-100/30 p-5 text-left transition-colors',
          'hover:border-brand-300 hover:bg-brand-100/60',
          className,
        )}
      >
        {content}
        <span className="mt-4 text-[0.65rem] font-bold tracking-[0.14em] text-brand-400 uppercase">
          Ver temas e tipos
        </span>
      </a>
    )
  }

  return (
    <Link
      to={guiaRoutes.trilha(trilha.id)}
      className={cn(
        'flex h-full w-full flex-col rounded-2xl border border-neutral-500/10 bg-brand-100/30 p-5 text-left transition-colors',
        'hover:border-brand-300 hover:bg-brand-100/60',
        className,
      )}
    >
      {content}
      <span className="mt-4 text-[0.65rem] font-bold tracking-[0.14em] text-brand-400 uppercase">
        Ver trilha
      </span>
    </Link>
  )
}

export function GuiaTrilhasGrid() {
  return (
    <section
      id={guiaHashes.trilhas}
      className="border-b border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-trilhas-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Por trilha
          </p>
          <h2
            id="guia-trilhas-heading"
            className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
          >
            Escolha um caminho para começar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            Cada trilha reúne conteúdos curados para uma intenção — sem
            precisar navegar por categorias técnicas.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {guiaTrilhas.map((trilha, index) => (
            <li key={trilha.id}>
              <TrilhaCard
                trilha={trilha}
                className={cn(
                  index === guiaTrilhas.length - 1 &&
                    'sm:col-span-2 lg:col-span-1 xl:col-span-1',
                )}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
