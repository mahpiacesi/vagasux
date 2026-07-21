import type { MarketFilter } from '../types/job'

const options: { id: MarketFilter; label: string }[] = [
  { id: 'all', label: 'Todas' },
  { id: 'national', label: 'Brasil' },
  { id: 'international', label: 'Internacional' },
]

type MarketFiltersProps = {
  value: MarketFilter
  onChange: (value: MarketFilter) => void
}

export function MarketFilters({ value, onChange }: MarketFiltersProps) {
  return (
    <div
      className="flex flex-wrap gap-x-5 gap-y-2 border-b border-neutral-500/10 pb-4"
      role="tablist"
      aria-label="Filtrar por mercado"
    >
      {options.map((option) => {
        const active = value === option.id
        return (
          <button
            key={option.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.id)}
            className={[
              'relative pb-1 text-sm font-semibold transition-colors',
              active ? 'text-brand-400' : 'text-neutral-400 hover:text-neutral-500',
            ].join(' ')}
          >
            {option.label}
            <span
              className={[
                'absolute inset-x-0 -bottom-4 h-0.5 origin-left rounded-full bg-brand-300 transition-transform duration-300',
                active ? 'scale-x-100' : 'scale-x-0',
              ].join(' ')}
            />
          </button>
        )
      })}
    </div>
  )
}
