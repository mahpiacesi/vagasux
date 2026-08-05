import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GuiaBackToGuiaLink } from '@/components/guia/GuiaBackToGuiaLink'
import { GuiaCursoCard } from '@/components/guia/GuiaCursoCard'
import { GuiaCursoPreviewDialog } from '@/components/guia/GuiaCursoPreviewDialog'
import { GuiaCursosFilters } from '@/components/guia/GuiaCursosFilters'
import {
  getGuiaCursoThemeTags,
  guiaCursos,
  type GuiaCurso,
} from '@/data/guiaCursos'
import {
  countActiveGuiaCursoFilters,
  filterGuiaCursos,
  getGuiaCursoCostTags,
  getGuiaCursoLevelTags,
  getGuiaCursoModalityTags,
  getGuiaCursoStats,
  GUIA_CURSO_FILTER_DEFAULTS,
  type GuiaCursoFilters,
} from '@/lib/guiaCursoFilters'

type GuiaCursosPageContentProps = {
  title: string
  description?: string
}

function parseFiltersFromSearchParams(params: URLSearchParams): GuiaCursoFilters {
  return {
    theme: params.get('tema'),
    modality: params.get('modalidade'),
    cost: params.get('custo'),
    level: params.get('nivel'),
    partnersOnly: params.get('parceiros') === '1',
    feedbackOnly: params.get('relatos') === '1',
  }
}

function filtersToSearchParams(filters: GuiaCursoFilters): URLSearchParams {
  const params = new URLSearchParams()
  if (filters.theme) params.set('tema', filters.theme)
  if (filters.modality) params.set('modalidade', filters.modality)
  if (filters.cost) params.set('custo', filters.cost)
  if (filters.level) params.set('nivel', filters.level)
  if (filters.partnersOnly) params.set('parceiros', '1')
  if (filters.feedbackOnly) params.set('relatos', '1')
  return params
}

export function GuiaCursosPageContent({
  title,
  description = 'Mapeamento coletivo de cursos de UX, UI e produto — com filtros e relatos de quem já fez, para você comparar opções antes de decidir.',
}: GuiaCursosPageContentProps) {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filters, setFilters] = useState<GuiaCursoFilters>(() =>
    parseFiltersFromSearchParams(searchParams),
  )
  const [previewCurso, setPreviewCurso] = useState<GuiaCurso | null>(null)
  const [previewOpen, setPreviewOpen] = useState(false)

  const stats = useMemo(() => getGuiaCursoStats(guiaCursos), [])
  const themeTags = useMemo(() => getGuiaCursoThemeTags(), [])
  const modalityTags = useMemo(() => getGuiaCursoModalityTags(guiaCursos), [])
  const costTags = useMemo(() => getGuiaCursoCostTags(guiaCursos), [])
  const levelTags = useMemo(() => getGuiaCursoLevelTags(guiaCursos), [])

  const filteredCursos = useMemo(
    () => filterGuiaCursos(guiaCursos, filters),
    [filters],
  )

  const activeCount = countActiveGuiaCursoFilters(filters)

  function handleFiltersChange(next: GuiaCursoFilters) {
    setFilters(next)
    const params = filtersToSearchParams(next)
    setSearchParams(params, { replace: true })
  }

  function handlePreview(curso: GuiaCurso) {
    setPreviewCurso(curso)
    setPreviewOpen(true)
  }

  const countLabel =
    activeCount === 0
      ? `${stats.total} cursos no diretório`
      : `${filteredCursos.length} de ${stats.total} cursos`

  return (
    <div className="mt-8 w-full">
      <GuiaBackToGuiaLink section="cursos" />

      <header className="mt-8 w-full">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
          Diretório da comunidade
        </p>
        <h1 className="mt-3 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          {title}
        </h1>

        <p className="mt-4 max-w-3xl text-base leading-relaxed text-neutral-400 md:text-lg">
          {description}
        </p>

        <dl className="mt-6 flex flex-wrap gap-4 text-sm font-semibold text-neutral-400">
          <div className="rounded-full border border-neutral-500/10 bg-brand-100/30 px-4 py-2">
            <dt className="sr-only">Total de cursos</dt>
            <dd>{stats.total} cursos</dd>
          </div>
          <div className="rounded-full border border-neutral-500/10 bg-brand-100/30 px-4 py-2">
            <dt className="sr-only">Com relatos</dt>
            <dd>{stats.withFeedback} com relatos</dd>
          </div>
          <div className="rounded-full border border-neutral-500/10 bg-brand-100/30 px-4 py-2">
            <dt className="sr-only">Parceiros</dt>
            <dd>{stats.partners} parceiros VagasUX</dd>
          </div>
        </dl>

        <p className="mt-4 text-sm font-semibold text-neutral-400">{countLabel}</p>
      </header>

      <GuiaCursosFilters
        className="mt-10"
        themeTags={themeTags}
        modalityTags={modalityTags}
        costTags={costTags}
        levelTags={levelTags}
        filters={filters}
        onChange={handleFiltersChange}
        activeCount={activeCount}
      />

      {filteredCursos.length > 0 ? (
        <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCursos.map((curso) => (
            <li key={curso.id}>
              <GuiaCursoCard
                curso={curso}
                className="h-full"
                previewMode
                onPreview={handlePreview}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
          Nenhum curso encontrado com estes filtros.
          <button
            type="button"
            className="mt-3 block w-full font-bold text-brand-500 hover:underline"
            onClick={() => handleFiltersChange(GUIA_CURSO_FILTER_DEFAULTS)}
          >
            Limpar filtros
          </button>
        </p>
      )}

      <GuiaCursoPreviewDialog
        curso={previewCurso}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />
    </div>
  )
}
