import { useMemo, useState } from 'react'
import { GuiaBackToGuiaLink } from '@/components/guia/GuiaBackToGuiaLink'
import { GuiaContextFilter } from '@/components/guia/GuiaContextFilter'
import { GuiaPodcastCard } from '@/components/guia/GuiaPodcastCard'
import {
  filterGuiaPodcastsByContext,
  getGuiaPodcastContextTags,
  guiaPodcasts,
  splitGuiaFeaturedPodcast,
} from '@/data/guiaPodcasts'

type GuiaPodcastsPageContentProps = {
  title: string
  description?: string
}

export function GuiaPodcastsPageContent({
  title,
  description,
}: GuiaPodcastsPageContentProps) {
  const [contextFilter, setContextFilter] = useState<string | null>(null)
  const contextTags = useMemo(() => getGuiaPodcastContextTags(), [])

  const filteredPodcasts = useMemo(
    () => filterGuiaPodcastsByContext(guiaPodcasts, contextFilter),
    [contextFilter],
  )

  const { featured, rest } = useMemo(
    () => splitGuiaFeaturedPodcast(filteredPodcasts),
    [filteredPodcasts],
  )

  const countLabel =
    contextFilter === null
      ? `${guiaPodcasts.length} podcasts curados`
      : `${filteredPodcasts.length} de ${guiaPodcasts.length} podcasts`

  return (
    <div className="mt-8 w-full">
      <GuiaBackToGuiaLink />

      <header className="mt-8 w-full">
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
        ariaLabel="Filtrar podcasts por contexto"
      />

      {featured ? (
        <div className="mt-8">
          <GuiaPodcastCard podcast={featured} featured spotlight />
        </div>
      ) : null}

      {rest.length > 0 ? (
        <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {rest.map((podcast) => (
            <li key={podcast.id}>
              <GuiaPodcastCard podcast={podcast} className="h-full" />
            </li>
          ))}
        </ul>
      ) : !featured ? (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum podcast encontrado para este contexto.
        </p>
      ) : null}
    </div>
  )
}
