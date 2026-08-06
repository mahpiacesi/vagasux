import { X } from '@phosphor-icons/react'
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

const chipClassName = (active: boolean) =>
  cn(
    'rounded-full border px-3 py-1.5 text-xs font-bold transition-colors',
    active
      ? 'border-brand-400 bg-brand-400 text-neutral-100'
      : 'border-neutral-500/10 bg-neutral-100 text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60',
  )

const LEVEL_TAG_ROWS = [
  ['Certificação', 'Curso / Bootcamp', 'Graduação'],
  ['Masterclass', 'Mentoria', 'Pós-Graduação', 'Workshop'],
] as const

function FilterChip({
  tag,
  active,
  onClick,
}: {
  tag: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={chipClassName(active)}
    >
      {tag}
    </button>
  )
}

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
          <div key={rowIndex} className="flex flex-wrap gap-1.5">
            {rowTags.map((tag) => {
              const active = value === tag
              return (
                <FilterChip
                  key={tag}
                  tag={tag}
                  active={active}
                  onClick={() => onChange(active ? null : tag)}
                />
              )
            })}
          </div>
        ))}
      </div>
    </div>
  )
}

function ToggleChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={chipClassName(active)}
    >
      {label}
    </button>
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

      <div className="grid items-start gap-x-6 gap-y-4 sm:grid-cols-2 xl:grid-cols-4">
        <FilterChipGroup
          label="Nível"
          tags={levelTags}
          value={filters.level}
          onChange={(level) => patch({ level })}
          rows={LEVEL_TAG_ROWS}
        />
        <FilterChipGroup
          label="Modalidade"
          tags={modalityTags}
          value={filters.modality}
          onChange={(modality) => patch({ modality })}
        />
        <FilterChipGroup
          label="Custo"
          tags={costTags}
          value={filters.cost}
          onChange={(cost) => patch({ cost })}
        />

        <div>
          <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
            Destaques
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            <ToggleChip
              label="☂️ Parceiros VagasUX"
              active={filters.partnersOnly}
              onClick={() => patch({ partnersOnly: !filters.partnersOnly })}
            />
            <ToggleChip
              label="💬 Com relatos"
              active={filters.feedbackOnly}
              onClick={() => patch({ feedbackOnly: !filters.feedbackOnly })}
            />
            {activeCount > 0 ? (
              <button
                type="button"
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
                className="inline-flex items-center gap-1 rounded-full border border-dashed border-neutral-500/20 px-3 py-1.5 text-xs font-bold text-neutral-400 transition-colors hover:border-brand-300 hover:text-brand-500"
              >
                <X size={12} weight="bold" aria-hidden />
                Limpar ({activeCount})
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  )
}
