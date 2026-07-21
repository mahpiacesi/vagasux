import { Search, X } from 'lucide-react'
import { hasActiveFilters } from '../lib/filterJobs'
import type {
  JobFiltersState,
  MarketFilter,
  SeniorityFilter,
  WorkModelFilter,
} from '../types/job'

type Option<T extends string> = { id: T; label: string }

const marketOptions: Option<MarketFilter>[] = [
  { id: 'all', label: 'Todos' },
  { id: 'national', label: 'Brasil' },
  { id: 'international', label: 'Internacional' },
]

const workOptions: Option<WorkModelFilter>[] = [
  { id: 'all', label: 'Todos' },
  { id: 'remote', label: 'Remoto' },
  { id: 'hybrid', label: 'Híbrido' },
  { id: 'onsite', label: 'Presencial' },
]

const seniorityOptions: Option<SeniorityFilter>[] = [
  { id: 'all', label: 'Todos' },
  { id: 'intern', label: 'Estágio' },
  { id: 'junior', label: 'Júnior' },
  { id: 'mid', label: 'Pleno' },
  { id: 'senior', label: 'Sênior' },
  { id: 'lead', label: 'Lead' },
]

type JobFiltersProps = {
  value: JobFiltersState
  resultCount: number
  totalCount: number
  onChange: (next: JobFiltersState) => void
  onClear: () => void
}

function FilterRow<T extends string>({
  label,
  options,
  value,
  onChange,
}: {
  label: string
  options: Option<T>[]
  value: T
  onChange: (value: T) => void
}) {
  return (
    <div>
      <p className="text-xs font-bold tracking-wide text-neutral-400 uppercase">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => {
          const active = value === option.id
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option.id)}
              className={[
                'rounded-lg px-3 py-1.5 text-sm font-semibold transition-colors',
                active
                  ? 'bg-brand-300 text-neutral-100'
                  : 'bg-neutral-100 text-neutral-400 ring-1 ring-neutral-500/10 hover:text-neutral-500 hover:ring-brand-200',
              ].join(' ')}
            >
              {option.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function JobFilters({
  value,
  resultCount,
  totalCount,
  onChange,
  onClear,
}: JobFiltersProps) {
  const active = hasActiveFilters(value)

  return (
    <div className="mural-fade mural-fade-delay-2 rounded-2xl bg-brand-100/50 px-4 py-5 ring-1 ring-brand-200/40 md:px-5">
      <label className="block">
        <span className="text-xs font-bold tracking-wide text-neutral-400 uppercase">
          Buscar
        </span>
        <div className="relative mt-2">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-neutral-300"
            aria-hidden
          />
          <input
            type="search"
            value={value.query}
            onChange={(event) => onChange({ ...value, query: event.target.value })}
            placeholder="Cargo, empresa, cidade, ferramenta…"
            className="w-full rounded-xl border-0 bg-neutral-100 py-3 pr-10 pl-10 text-sm font-medium text-neutral-500 shadow-sm ring-1 ring-neutral-500/10 outline-none transition placeholder:text-neutral-300 focus:ring-2 focus:ring-brand-300"
          />
          {value.query ? (
            <button
              type="button"
              aria-label="Limpar busca"
              onClick={() => onChange({ ...value, query: '' })}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-neutral-300 hover:text-neutral-500"
            >
              <X className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </label>

      <div className="mt-5 grid gap-5">
        <FilterRow
          label="Mercado"
          options={marketOptions}
          value={value.market}
          onChange={(market) => onChange({ ...value, market })}
        />
        <FilterRow
          label="Formato"
          options={workOptions}
          value={value.workModel}
          onChange={(workModel) => onChange({ ...value, workModel })}
        />
        <FilterRow
          label="Nível"
          options={seniorityOptions}
          value={value.seniority}
          onChange={(seniority) => onChange({ ...value, seniority })}
        />
      </div>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-brand-200/50 pt-4">
        <p className="text-sm text-neutral-400">
          <span className="font-bold text-neutral-500">{resultCount}</span>
          {resultCount === 1 ? ' vaga' : ' vagas'}
          {active ? (
            <span className="text-neutral-300"> de {totalCount}</span>
          ) : null}
        </p>
        {active ? (
          <button
            type="button"
            onClick={onClear}
            className="text-sm font-semibold text-brand-400 hover:text-brand-500"
          >
            Limpar filtros
          </button>
        ) : null}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-neutral-300">
        Formato e nível ficam mais precisos conforme a IA classifica as vagas. A busca já
        funciona em todas.
      </p>
    </div>
  )
}
