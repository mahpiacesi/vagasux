import { useMemo, useState } from 'react'
import { GuiaBackToGuiaLink } from '@/components/guia/GuiaBackToGuiaLink'
import { GuiaContextFilter } from '@/components/guia/GuiaContextFilter'
import { GuiaCursoCard } from '@/components/guia/GuiaCursoCard'
import {
  filterGuiaCursosByTheme,
  getGuiaCursoThemeTags,
  guiaCursos,
} from '@/data/guiaCursos'

type GuiaCursosPageContentProps = {
  title: string
  description?: string
}

export function GuiaCursosPageContent({
  title,
  description,
}: GuiaCursosPageContentProps) {
  const [themeFilter, setThemeFilter] = useState<string | null>(null)
  const themeTags = useMemo(() => getGuiaCursoThemeTags(), [])

  const filteredCursos = useMemo(
    () => filterGuiaCursosByTheme(guiaCursos, themeFilter),
    [themeFilter],
  )

  const countLabel =
    themeFilter === null
      ? `${guiaCursos.length} cursos curados`
      : `${filteredCursos.length} de ${guiaCursos.length} cursos`

  return (
    <div className="mt-8 w-full">
      <GuiaBackToGuiaLink tipoId="cursos" />

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
        ariaLabel="Filtrar cursos por tema"
      />

      {filteredCursos.length > 0 ? (
        <ul className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCursos.map((curso) => (
            <li key={curso.id}>
              <GuiaCursoCard curso={curso} className="h-full" />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum curso encontrado para este tema.
        </p>
      )}
    </div>
  )
}
