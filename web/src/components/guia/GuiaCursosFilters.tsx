import { X } from '@phosphor-icons/react'
import { GuiaContextFilter } from '@/components/guia/GuiaContextFilter'
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

function FilterChipGroup({
  label,
  tags,
  value,
  onChange,
}: {
  label: string
  tags: string[]
  value: string | null
  onChange: (value: string | null) => void
}) {
  if (tags.length === 0) return null

  return (
    <div>
      <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
        {label}
      </p>
      <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label={`Filtrar por ${label.toLowerCase()}`}>
        <button
          type="button"
          aria-pressed={value === null}
          onClick={() => onChange(null)}
          className={cn(
            'rounded-full border px-3 py-1.5 text-xs font-bold transition-colors',
            value === null
              ? 'border-brand-400 bg-brand-400 text-neutral-100'
              : 'border-neutral-500/10 bg-neutral-100 text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60',
          )}
        >
          Todos
        </button>
        {tags.map((tag) => {
          const active = value === tag
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(active ? null : tag)}
              className={cn(
                'rounded-full border px-3 py-1.5 text-xs font-bold transition-colors',
                active
                  ? 'border-brand-400 bg-brand-400 text-neutral-100'
                  : 'border-neutral-500/10 bg-neutral-100 text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60',
              )}
            >
              {tag}
            </button>
          )
        })}
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
      className={cn(
        'rounded-full border px-4 py-2 text-sm font-bold transition-colors',
        active
          ? 'border-brand-400 bg-brand-400 text-neutral-100 shadow-sm'
          : 'border-neutral-500/10 bg-neutral-100 text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500',
      )}
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
    <div className={cn('space-y-6', className)}>
      <GuiaContextFilter
        tags={themeTags}
        value={filters.theme}
        onChange={(theme) => patch({ theme })}
        ariaLabel="Filtrar cursos por tema"
      />

      <div className="grid gap-6 lg:grid-cols-3">
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
        <FilterChipGroup
          label="Nível"
          tags={levelTags}
          value={filters.level}
          onChange={(level) => patch({ level })}
        />
      </div>

      <div>
        <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
          Destaques
        </p>
        <div className="mt-3 flex flex-wrap items-center gap-2">
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
              className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-neutral-500/20 px-3 py-2 text-xs font-bold text-neutral-400 transition-colors hover:border-brand-300 hover:text-brand-500"
            >
              <X size={14} weight="bold" aria-hidden />
              Limpar filtros ({activeCount})
            </button>
          ) : null}
        </div>
      </div>
    </div>
  )
}
