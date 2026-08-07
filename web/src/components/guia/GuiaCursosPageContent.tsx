import { useMemo, useState } from 'react'
import { X } from '@phosphor-icons/react'
import { useSearchParams } from 'react-router-dom'
import { GuiaBackToGuiaLink } from '@/components/guia/GuiaBackToGuiaLink'
import { GuiaFaqLink } from '@/components/guia/GuiaFaqLink'
import { GuiaCursoCard } from '@/components/guia/GuiaCursoCard'
import { GuiaCursoPreviewDialog } from '@/components/guia/GuiaCursoPreviewDialog'
import { GuiaCursosFilters } from '@/components/guia/GuiaCursosFilters'
import { GuiaCursosHeroSection } from '@/components/guia/GuiaCursosHeroSection'
import { Button } from '@/components/ui/button'
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
import { cn } from '@/lib/utils'

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

export function GuiaCursosPageContent() {
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
      <div className="flex flex-wrap items-center gap-3">
        <GuiaBackToGuiaLink section="cursos" />
        <GuiaFaqLink />
      </div>

      <GuiaCursosHeroSection className="mt-8" />

      <section className="mt-12" aria-labelledby="guia-cursos-listagem-heading">
        <div className="flex flex-col gap-2">
          <h2
            id="guia-cursos-listagem-heading"
            className="text-xl font-black tracking-[-0.02em] text-neutral-500 md:text-2xl"
          >
            Explore o diretório
          </h2>
          <div className="grid w-fit grid-cols-[auto_6.75rem] items-center gap-x-4">
            <p className="text-sm font-semibold text-neutral-400">{countLabel}</p>
            <Button
              type="button"
              variant="guia-clear"
              className={cn(
                'w-full justify-center',
                activeCount === 0 && 'invisible pointer-events-none',
              )}
              onClick={() => handleFiltersChange(GUIA_CURSO_FILTER_DEFAULTS)}
              tabIndex={activeCount === 0 ? -1 : 0}
              aria-hidden={activeCount === 0 || undefined}
            >
              <X size={12} weight="bold" aria-hidden />
              Limpar ({activeCount})
            </Button>
          </div>
        </div>

        <GuiaCursosFilters
          className="mt-8"
          themeTags={themeTags}
          modalityTags={modalityTags}
          costTags={costTags}
          levelTags={levelTags}
          filters={filters}
          onChange={handleFiltersChange}
        />

        {filteredCursos.length > 0 ? (
          <ul className="mt-10 flex flex-col gap-3">
            {filteredCursos.map((curso) => (
              <li key={curso.id}>
                <GuiaCursoCard
                  curso={curso}
                  previewMode
                  onPreview={handlePreview}
                />
              </li>
            ))}
          </ul>
        ) : (
          <div className="mt-10 rounded-2xl border border-dashed border-neutral-500/15 bg-brand-100/20 px-5 py-8 text-center text-sm text-neutral-400">
            Nenhum curso encontrado com estes filtros.
            <div className="mt-3">
              <Button
                type="button"
                variant="link"
                className="h-auto p-0 font-bold text-brand-500"
                onClick={() => handleFiltersChange(GUIA_CURSO_FILTER_DEFAULTS)}
              >
                Limpar filtros
              </Button>
            </div>
          </div>
        )}
      </section>

      <GuiaCursoPreviewDialog
        curso={previewCurso}
        open={previewOpen}
        onOpenChange={setPreviewOpen}
      />
    </div>
  )
}
