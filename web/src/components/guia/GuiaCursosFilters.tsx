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

function FilterChipGroup({
  label,
  tags,
  value,
  onChange,
  inline = false,
}: {
  label: string
  tags: string[]
  value: string | null
  onChange: (value: string | null) => void
  inline?: boolean
}) {
  if (tags.length === 0) return null

  const chips = (
    <div
      className="flex flex-wrap gap-1.5"
      role="group"
      aria-label={`Filtrar por ${label.toLowerCase()}`}
    >
      {tags.map((tag) => {
        const active = value === tag
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(active ? null : tag)}
            className={chipClassName(active)}
          >
            {tag}
          </button>
        )
      })}
    </div>
  )

  const labelEl = (
    <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
      {label}
    </p>
  )

  if (inline) {
    return (
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
        <div className="shrink-0">{labelEl}</div>
        {chips}
      </div>
    )
  }

  return (
    <div>
      {labelEl}
      <div className="mt-2">{chips}</div>
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

      <div className="grid gap-3 lg:grid-cols-2 xl:grid-cols-4">
        <FilterChipGroup
          label="Nível"
          tags={levelTags}
          value={filters.level}
          onChange={(level) => patch({ level })}
          inline
        />
        <FilterChipGroup
          label="Modalidade"
          tags={modalityTags}
          value={filters.modality}
          onChange={(modality) => patch({ modality })}
          inline
        />
        <FilterChipGroup
          label="Custo"
          tags={costTags}
          value={filters.cost}
          onChange={(cost) => patch({ cost })}
          inline
        />

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
          <div className="shrink-0">
            <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
              Destaques
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-1.5">
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
