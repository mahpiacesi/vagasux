import { useMemo, useState } from 'react'
import { GuiaContextFilter } from '@/components/guia/GuiaContextFilter'
import { GuiaNewsletterCard } from '@/components/guia/GuiaNewsletterCard'
import {
  filterGuiaNewslettersByContext,
  getGuiaNewsletterContextTags,
  guiaNewsletters,
  splitGuiaFeaturedNewsletter,
} from '@/data/guiaNewsletters'

type GuiaNewslettersPageContentProps = {
  title: string
  description?: string
}

export function GuiaNewslettersPageContent({
  title,
  description,
}: GuiaNewslettersPageContentProps) {
  const [contextFilter, setContextFilter] = useState<string | null>(null)
  const contextTags = useMemo(() => getGuiaNewsletterContextTags(), [])

  const filteredNewsletters = useMemo(
    () => filterGuiaNewslettersByContext(guiaNewsletters, contextFilter),
    [contextFilter],
  )

  const { featured, rest } = useMemo(
    () => splitGuiaFeaturedNewsletter(filteredNewsletters),
    [filteredNewsletters],
  )

  const countLabel =
    contextFilter === null
      ? `${guiaNewsletters.length} newsletters curadas`
      : `${filteredNewsletters.length} de ${guiaNewsletters.length} newsletters`

  return (
    <div className="mt-8">
      <header className="w-full">
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg md:whitespace-nowrap">
            {description}
          </p>
        ) : null}

        <p className="mt-4 text-sm font-semibold text-neutral-400">{countLabel}</p>
      </header>

      <GuiaContextFilter
        className="mt-8"
        tags={contextTags}
        value={contextFilter}
        onChange={setContextFilter}
        ariaLabel="Filtrar newsletters por contexto"
      />

      {featured ? (
        <div className="mt-8">
          <GuiaNewsletterCard newsletter={featured} featured spotlight />
        </div>
      ) : null}

      {rest.length > 0 ? (
        <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {rest.map((newsletter) => (
            <li key={newsletter.id}>
              <GuiaNewsletterCard newsletter={newsletter} className="h-full" />
            </li>
          ))}
        </ul>
      ) : !featured ? (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhuma newsletter encontrada para este contexto.
        </p>
      ) : null}
    </div>
  )
}
