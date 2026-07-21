import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { hasActiveFilters } from '@/lib/filterJobs'
import type {
  JobFiltersState,
  MarketFilter,
  SeniorityFilter,
  WorkModelFilter,
} from '@/types/job'

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
      <p className="text-xs font-bold tracking-wide text-muted-foreground uppercase">{label}</p>
      <div className="mt-2 flex flex-wrap gap-2" role="group" aria-label={label}>
        {options.map((option) => {
          const active = value === option.id
          return (
            <Button
              key={option.id}
              type="button"
              size="sm"
              variant={active ? 'default' : 'outline'}
              aria-pressed={active}
              onClick={() => onChange(option.id)}
              className="font-semibold"
            >
              {option.label}
            </Button>
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
    <div className="mural-fade mural-fade-delay-2 rounded-2xl bg-secondary/80 px-4 py-5 ring-1 ring-primary/15 md:px-5">
      <label className="block">
        <span className="text-xs font-bold tracking-wide text-muted-foreground uppercase">
          Buscar
        </span>
        <div className="relative mt-2">
          <Search
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            value={value.query}
            onChange={(event) => onChange({ ...value, query: event.target.value })}
            placeholder="Cargo, empresa, cidade, ferramenta…"
            className="h-11 bg-background pr-10 pl-10 text-sm font-medium shadow-sm"
          />
          {value.query ? (
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label="Limpar busca"
              onClick={() => onChange({ ...value, query: '' })}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground"
            >
              <X />
            </Button>
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

      <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-primary/15 pt-4">
        <p className="text-sm text-muted-foreground">
          <span className="font-bold text-foreground">{resultCount}</span>
          {resultCount === 1 ? ' vaga' : ' vagas'}
          {active ? <span className="text-muted-foreground/70"> de {totalCount}</span> : null}
        </p>
        {active ? (
          <Button type="button" variant="link" onClick={onClear} className="h-auto px-0 font-semibold">
            Limpar filtros
          </Button>
        ) : null}
      </div>
      <p className="mt-3 text-xs leading-relaxed text-muted-foreground/80">
        Formato e nível ficam mais precisos conforme a IA classifica as vagas. A busca já
        funciona em todas.
      </p>
    </div>
  )
}
