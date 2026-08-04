import { useMemo, useState } from 'react'
import { GuiaBackToGuiaLink } from '@/components/guia/GuiaBackToGuiaLink'
import { GuiaContextFilter } from '@/components/guia/GuiaContextFilter'
import { GuiaEventoCard } from '@/components/guia/GuiaEventoCard'
import {
  filterGuiaEventosByTheme,
  getGuiaEventoThemeTags,
  guiaEventos,
  splitGuiaFeaturedEvento,
} from '@/data/guiaEventos'

type GuiaEventosPageContentProps = {
  title: string
  description?: string
}

export function GuiaEventosPageContent({
  title,
  description,
}: GuiaEventosPageContentProps) {
  const [themeFilter, setThemeFilter] = useState<string | null>(null)
  const themeTags = useMemo(() => getGuiaEventoThemeTags(), [])

  const filteredEventos = useMemo(
    () => filterGuiaEventosByTheme(guiaEventos, themeFilter),
    [themeFilter],
  )

  const { featured, rest } = useMemo(
    () => splitGuiaFeaturedEvento(filteredEventos),
    [filteredEventos],
  )

  const countLabel =
    themeFilter === null
      ? `${guiaEventos.length} eventos curados`
      : `${filteredEventos.length} de ${guiaEventos.length} eventos`

  return (
    <div className="mt-8 w-full">
      <GuiaBackToGuiaLink tipoId="eventos" />

      <header className="mt-8 w-full">
        <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          {title}
        </h1>

        {description ? (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">
            {description}
          </p>
        ) : null}

        <p className="mt-4 text-sm font-semibold text-neutral-400">{countLabel}</p>
      </header>

      <GuiaContextFilter
        className="mt-8"
        tags={themeTags}
        value={themeFilter}
        onChange={setThemeFilter}
        ariaLabel="Filtrar eventos por tema"
      />

      {featured ? (
        <div className="mt-8">
          <GuiaEventoCard
            evento={featured}
            featured
            spotlight
            hideOrganizerAndLanguages
          />
        </div>
      ) : null}

      {rest.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {rest.map((evento) => (
            <li key={evento.id}>
              <GuiaEventoCard
                evento={evento}
                className="h-full"
                hideOrganizerAndLanguages
              />
            </li>
          ))}
        </ul>
      ) : !featured ? (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum evento encontrado para este tema.
        </p>
      ) : null}
    </div>
  )
}
