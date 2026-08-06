import { X } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import type { GuiaCursoFilters } from '@/lib/guiaCursoFilters'
import { cn } from '@/lib/utils'

type GuiaCursosFiltersProps = {
  themeTags: string[]
  modalityTags: string[]
  costTags: string[]
  levelTags: string[]
  filters: GuiaCursoFilters
  onChange: (filters: GuiaCursoFilters) => void
  activeCount: number
  className?: string
}

const LEVEL_TAG_ROWS = [
  ['Certificação', 'Curso / Bootcamp', 'Graduação'],
  ['Masterclass', 'Mentoria', 'Pós-Graduação', 'Workshop'],
] as const

function FilterChipGroup({
  label,
  tags,
  value,
  onChange,
  rows,
}: {
  label: string
  tags: string[]
  value: string | null
  onChange: (value: string | null) => void
  rows?: readonly (readonly string[])[]
}) {
  if (tags.length === 0) return null

  const tagSet = new Set(tags)
  const tagRows = rows
    ? rows.map((row) => row.filter((tag) => tagSet.has(tag)))
    : [tags]

  return (
    <div>
      <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
        {label}
      </p>
      <div
        className={cn('mt-2', rows ? 'space-y-1.5' : undefined)}
        role="group"
        aria-label={`Filtrar por ${label.toLowerCase()}`}
      >
        {tagRows.map((rowTags, rowIndex) => (
          <div
            key={rowIndex}
            className={cn('flex flex-wrap gap-1.5', rows ? 'flex-nowrap' : undefined)}
          >
            {rowTags.map((tag) => {
              const active = value === tag
              return (
                <Button
                  key={tag}
                  type="button"
                  variant={active ? 'default' : 'outline'}
                  size="xs"
                  aria-pressed={active}
                  onClick={() => onChange(active ? null : tag)}
                >
                  {tag}
                </Button>
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

export function GuiaCursosFilters({
  themeTags,
  modalityTags,
  costTags,
  levelTags,
  filters,
  onChange,
  activeCount,
  className,
}: GuiaCursosFiltersProps) {
  function patch(partial: Partial<GuiaCursoFilters>) {
    onChange({ ...filters, ...partial })
  }

  return (
    <div className={cn('space-y-4', className)}>
      <FilterChipGroup
        label="Contexto"
        tags={themeTags}
        value={filters.theme}
        onChange={(theme) => patch({ theme })}
      />

      <div className="grid items-start gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-12">
        <div className="col-span-full sm:col-span-2 xl:col-span-5">
          <FilterChipGroup
            label="Nível"
            tags={levelTags}
            value={filters.level}
            onChange={(level) => patch({ level })}
            rows={LEVEL_TAG_ROWS}
          />
        </div>
        <div className="xl:col-span-2">
          <FilterChipGroup
            label="Modalidade"
            tags={modalityTags}
            value={filters.modality}
            onChange={(modality) => patch({ modality })}
          />
        </div>
        <div className="xl:col-span-2">
          <FilterChipGroup
            label="Custo"
            tags={costTags}
            value={filters.cost}
            onChange={(cost) => patch({ cost })}
          />
        </div>

        <div className="sm:col-span-2 xl:col-span-3">
          <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
            Destaques
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <Button
              type="button"
              variant={filters.partnersOnly ? 'default' : 'outline'}
              size="xs"
              aria-pressed={filters.partnersOnly}
              onClick={() => patch({ partnersOnly: !filters.partnersOnly })}
            >
              ☂️ Parceiros VagasUX
            </Button>
            <Button
              type="button"
              variant={filters.feedbackOnly ? 'default' : 'outline'}
              size="xs"
              aria-pressed={filters.feedbackOnly}
              onClick={() => patch({ feedbackOnly: !filters.feedbackOnly })}
            >
              💬 Com relatos
            </Button>
            {activeCount > 0 ? (
              <Button
                type="button"
                variant="ghost"
                size="xs"
                onClick={() =>
                  onChange({
                    theme: null,
                    modality: null,
                    cost: null,
                    level: null,
                    partnersOnly: false,
                    feedbackOnly: false,
                  })
                }
              >
                <X weight="bold" aria-hidden />
                Limpar ({activeCount})
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
