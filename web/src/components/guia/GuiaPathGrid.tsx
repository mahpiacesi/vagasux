import { guiaLearningPaths } from '@/data/guia'
import { guiaHashes } from '@/lib/siteLinks'
import { cn } from '@/lib/utils'

function PathCard({
  path,
  className,
}: {
  path: (typeof guiaLearningPaths)[number]
  className?: string
}) {
  const content = (
    <>
      <span className="text-2xl" aria-hidden>
        {path.emoji}
      </span>
      <span className="mt-4 text-base font-black text-neutral-500">
        {path.title}
      </span>
      <span className="mt-2 text-sm leading-relaxed text-neutral-400">
        {path.description}
      </span>
    </>
  )

  if (path.id === 'explorar') {
    return (
      <a
        href={`#${guiaHashes.areas}`}
        className={cn(
          'flex h-full w-full flex-col rounded-2xl border border-neutral-500/10 bg-brand-100/30 p-5 text-left transition-colors',
          'hover:border-brand-300 hover:bg-brand-100/60',
          className,
        )}
      >
        {content}
        <span className="mt-4 text-[0.65rem] font-bold tracking-[0.14em] text-brand-400 uppercase">
          Ver áreas do guia
        </span>
      </a>
    )
  }

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      title="Em breve"
      className={cn(
        'flex h-full w-full flex-col rounded-2xl border border-neutral-500/10 bg-brand-100/30 p-5 text-left transition-colors',
        'cursor-not-allowed hover:border-brand-200/80',
        className,
      )}
    >
      {content}
      <span className="mt-4 text-[0.65rem] font-bold tracking-[0.14em] text-brand-400 uppercase">
        Em breve
      </span>
    </button>
  )
}

export function GuiaPathGrid() {
  return (
    <section
      id={guiaHashes.caminhos}
      className="border-b border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-20"
      aria-labelledby="guia-paths-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Por objetivo
          </p>
          <h2
            id="guia-paths-heading"
            className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl"
          >
            Escolha um caminho para começar
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            Cada opção reúne conteúdos relacionados — sem precisar navegar por
            categorias técnicas.
          </p>
        </div>

        <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {guiaLearningPaths.map((path, index) => (
            <li key={path.id}>
              <PathCard
                path={path}
                className={cn(
                  index === guiaLearningPaths.length - 1 &&
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
