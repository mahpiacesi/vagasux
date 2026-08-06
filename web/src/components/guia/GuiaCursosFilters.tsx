import { X } from '@phosphor-icons/react'
import type { ReactNode } from 'react'
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

const chipClass = (active: boolean) =>
  cn(
    'shrink-0 rounded-full border px-3.5 py-2 text-sm font-bold transition-colors',
    active
      ? 'border-brand-400 bg-brand-400 text-neutral-100 shadow-sm'
      : 'border-neutral-500/10 bg-neutral-100 text-neutral-500 hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500',
  )

function FilterRow({
  label,
  children,
  className,
}: {
  label: string
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cn('grid gap-3 md:grid-cols-[7.5rem_minmax(0,1fr)] md:items-start md:gap-5', className)}>
      <p className="pt-2 text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase md:pt-2.5">
        {label}
      </p>
      <div className="min-w-0">{children}</div>
    </div>
  )
}

function FilterChipGroup({
  tags,
  value,
  onChange,
  ariaLabel,
}: {
  tags: string[]
  value: string | null
  onChange: (value: string | null) => void
  ariaLabel: string
}) {
  if (tags.length === 0) return null

  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label={ariaLabel}>
      {tags.map((tag) => {
        const active = value === tag
        return (
          <button
            key={tag}
            type="button"
            aria-pressed={active}
            onClick={() => onChange(active ? null : tag)}
            className={chipClass(active)}
          >
            {tag}
          </button>
        )
      })}
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
    <button type="button" aria-pressed={active} onClick={onClick} className={chipClass(active)}>
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

  function clearFilters() {
    onChange({
      theme: null,
      modality: null,
      cost: null,
      level: null,
      partnersOnly: false,
      feedbackOnly: false,
    })
  }

  return (
    <div
      className={cn(
        'rounded-2xl border border-neutral-500/10 bg-brand-100/20 p-5 md:p-6',
        className,
      )}
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-sm font-black text-neutral-500">Filtrar cursos</p>
        {activeCount > 0 ? (
          <button
            type="button"
            onClick={clearFilters}
            className="inline-flex items-center gap-1.5 rounded-full border border-dashed border-neutral-500/20 px-3 py-1.5 text-xs font-bold text-neutral-400 transition-colors hover:border-brand-300 hover:text-brand-500"
          >
            <X size={14} weight="bold" aria-hidden />
            Limpar ({activeCount})
          </button>
        ) : null}
      </div>

      <div className="mt-5 space-y-5 divide-y divide-neutral-500/10">
        <FilterRow label="Tema">
          <FilterChipGroup
            tags={themeTags}
            value={filters.theme}
            onChange={(theme) => patch({ theme })}
            ariaLabel="Filtrar cursos por tema"
          />
        </FilterRow>

        <FilterRow label="Modalidade e custo" className="pt-5 md:items-start">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <p className="mb-2 text-[0.65rem] font-bold tracking-wide text-neutral-400 uppercase">
                Modalidade
              </p>
              <FilterChipGroup
                tags={modalityTags}
                value={filters.modality}
                onChange={(modality) => patch({ modality })}
                ariaLabel="Filtrar por modalidade"
              />
            </div>
            <div>
              <p className="mb-2 text-[0.65rem] font-bold tracking-wide text-neutral-400 uppercase">
                Custo
              </p>
              <FilterChipGroup
                tags={costTags}
                value={filters.cost}
                onChange={(cost) => patch({ cost })}
                ariaLabel="Filtrar por custo"
              />
            </div>
          </div>
        </FilterRow>

        <FilterRow label="Nível" className="pt-5">
          <FilterChipGroup
            tags={levelTags}
            value={filters.level}
            onChange={(level) => patch({ level })}
            ariaLabel="Filtrar por nível"
          />
        </FilterRow>

        <FilterRow label="Destaques" className="pt-5 md:items-center">
          <div className="flex flex-wrap gap-2">
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
          </div>
        </FilterRow>
      </div>
    </div>
  )
}
