import { useMemo, useState } from 'react'
import { GuiaArtigoCard } from '@/components/guia/GuiaArtigoCard'
import { GuiaContextFilter } from '@/components/guia/GuiaContextFilter'
import {
  filterGuiaArtigosByContext,
  getGuiaArtigoContextTags,
  guiaArtigos,
} from '@/data/guiaArtigos'

type GuiaArtigosPageContentProps = {
  title: string
  description?: string
}

export function GuiaArtigosPageContent({
  title,
  description,
}: GuiaArtigosPageContentProps) {
  const [contextFilter, setContextFilter] = useState<string | null>(null)
  const contextTags = useMemo(() => getGuiaArtigoContextTags(), [])

  const filteredArtigos = useMemo(
    () => filterGuiaArtigosByContext(guiaArtigos, contextFilter),
    [contextFilter],
  )

  const countLabel =
    contextFilter === null
      ? `${guiaArtigos.length} artigos curados`
      : `${filteredArtigos.length} de ${guiaArtigos.length} artigos`

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
        ariaLabel="Filtrar artigos por contexto"
      />

      {filteredArtigos.length > 0 ? (
        <ul className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          {filteredArtigos.map((artigo) => (
            <li key={artigo.id}>
              <GuiaArtigoCard artigo={artigo} className="h-full" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum artigo encontrado para este contexto.
        </p>
      )}
    </div>
  )
}
