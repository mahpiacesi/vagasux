import { useMemo, useState } from 'react'
import { GuiaContextFilter } from '@/components/guia/GuiaContextFilter'
import { GuiaVideoCard } from '@/components/guia/GuiaVideoCard'
import {
  filterGuiaVideosByContext,
  getGuiaVideoContextTags,
  guiaVideos,
  splitGuiaFeaturedVideo,
} from '@/data/guiaVideos'

type GuiaVideosPageContentProps = {
  title: string
  description?: string
}

export function GuiaVideosPageContent({
  title,
  description,
}: GuiaVideosPageContentProps) {
  const [contextFilter, setContextFilter] = useState<string | null>(null)
  const contextTags = useMemo(() => getGuiaVideoContextTags(), [])

  const filteredVideos = useMemo(
    () => filterGuiaVideosByContext(guiaVideos, contextFilter),
    [contextFilter],
  )

  const { featured, rest } = useMemo(
    () => splitGuiaFeaturedVideo(filteredVideos),
    [filteredVideos],
  )

  const countLabel =
    contextFilter === null
      ? `${guiaVideos.length} vídeos curados`
      : `${filteredVideos.length} de ${guiaVideos.length} vídeos`

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
        ariaLabel="Filtrar vídeos por contexto"
      />

      {featured ? (
        <div className="mt-8">
          <GuiaVideoCard video={featured} featured spotlight showChannelTag />
        </div>
      ) : null}

      {rest.length > 0 ? (
        <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {rest.map((video) => (
            <li key={video.id}>
              <GuiaVideoCard video={video} className="h-full" />
            </li>
          ))}
        </ul>
      ) : !featured ? (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum vídeo encontrado para este contexto.
        </p>
      ) : null}
    </div>
  )
}
