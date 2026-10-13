import { Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { disciplineFilterOptions, type DisciplineFilter } from '@/lib/discipline'
import { cn } from '@/lib/utils'
import { BRAZILIAN_STATES } from '@/lib/location'
import { hasActiveFilters } from '@/lib/filterJobs'
import type {
  ContractFilter,
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
  { id: 'trainee', label: 'Trainee' },
  { id: 'junior', label: 'Júnior' },
  { id: 'mid', label: 'Pleno' },
  { id: 'senior', label: 'Sênior' },
  { id: 'lead', label: 'Liderança' },
]

const contractOptions: Option<ContractFilter>[] = [
  { id: 'all', label: 'Todos' },
  { id: 'clt', label: 'CLT' },
  { id: 'pj', label: 'PJ' },
  { id: 'freelance', label: 'Freela' },
]

const disciplineOptions: Option<DisciplineFilter>[] = [
  { id: 'all', label: 'Todos' },
  ...disciplineFilterOptions.map(({ id, label }) => ({ id, label })),
]

type JobFiltersProps = {
  value: JobFiltersState
  resultCount: number
  totalCount: number
  onChange: (next: JobFiltersState) => void
  onClear: () => void
  hideSeniority?: boolean
  searchPlaceholder?: string
  showStateFilter?: boolean
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
  const visibleOptions = options.filter((option) => option.id !== 'all')

  return (
    <div className="w-full min-w-0 max-w-full min-[860px]:w-max">
      <p className="text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
        {label}
      </p>
      <div className="mt-2 flex flex-wrap gap-2 min-[860px]:flex-nowrap" role="group" aria-label={label}>
        {visibleOptions.map((option) => {
          const active = value === option.id
          return (
            <Button
              key={option.id}
              type="button"
              size="sm"
              variant={active ? 'default' : 'outline'}
              aria-pressed={active}
              onClick={() => onChange(active ? ('all' as T) : option.id)}
              className={`rounded-full px-4 font-semibold ${
                active
                  ? 'bg-brand-500 text-neutral-100 shadow-sm hover:bg-brand-400'
                  : 'border-neutral-200/80 bg-neutral-100 text-neutral-400 hover:border-brand-200 hover:bg-brand-100/50 hover:text-brand-500'
              }`}
            >
              {option.label}
            </Button>
          )
        })}
      </div>
    </div>
  )
}

function StateFilterSelect({
  label,
  options,
  value,
  onChange,
  hidden = false,
  narrow = false,
  fill = false,
}: {
  label: string
  options: string[]
  value: string
  onChange: (value: string) => void
  hidden?: boolean
  narrow?: boolean
  fill?: boolean
}) {
  return (
    <div
      aria-hidden={hidden}
      className={cn(
        'w-full min-w-0 max-w-full shrink-0',
        fill && 'min-[860px]:w-0 min-[860px]:max-w-none min-[860px]:min-w-full',
        !fill && (narrow ? 'min-[860px]:w-28 min-[860px]:max-w-28' : 'min-[860px]:w-[11rem]'),
        hidden && 'invisible pointer-events-none',
      )}
    >
      <p className="text-left text-xs font-bold tracking-[0.12em] text-neutral-400 uppercase">
        {label}
      </p>
      <Select
        key={value}
        value={value === 'all' ? undefined : value}
        onValueChange={(next) => onChange(next)}
      >
        <SelectTrigger
          aria-label={label}
          disabled={hidden}
          className={cn(
            'mt-2 h-9 w-full rounded-xl border border-neutral-200/80 bg-brand-100/30 px-3 text-left text-sm font-semibold text-neutral-500 shadow-inner',
            'focus-visible:border-brand-300 focus-visible:ring-3 focus-visible:ring-brand-200/60',
            value === 'all' && 'text-neutral-400',
          )}
        >
          <SelectValue placeholder="Estado" />
        </SelectTrigger>
        <SelectContent className="max-h-72">
          {options.map((state) => (
            <SelectItem key={state} value={state}>
              {state}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}

export function JobFilters({
  value,
  resultCount,
  totalCount,
  onChange,
  onClear,
  hideSeniority = false,
  searchPlaceholder = 'Cargo, empresa, cidade, ferramenta…',
  showStateFilter = true,
}: JobFiltersProps) {
  const active = hasActiveFilters(value)
  const showState = showStateFilter && value.market !== 'international'
  const curationSpread = hideSeniority && value.market !== 'international'
  const opportunityAlign = !hideSeniority && value.market !== 'international'

  function handleMarketChange(market: MarketFilter) {
    onChange({
      ...value,
      market,
      state: market === 'international' ? 'all' : value.state,
      contract: market === 'international' ? 'all' : value.contract,
    })
  }

  return (
    <div className="mural-fade mural-fade-delay-2 sticky top-[4.5rem] z-40 rounded-2xl border border-neutral-200/70 bg-neutral-100/95 px-4 py-3 shadow-[0_16px_40px_-28px_rgb(7_0_58_/_0.35)] backdrop-blur-md md:px-5 md:py-4">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-xs font-bold tracking-[0.14em] text-brand-400 uppercase">
            Filtrar vagas
          </p>
          <p className="mt-0.5 text-sm text-neutral-400">
            <span className="font-black text-neutral-500">{resultCount}</span>
            {resultCount === 1 ? ' vaga' : ' vagas'}
            {active ? <span className="text-neutral-400/80"> de {totalCount}</span> : null}
          </p>
        </div>
        {active ? (
          <Button
            type="button"
            variant="link"
            onClick={onClear}
            className="h-auto px-0 text-sm font-bold text-brand-500"
          >
            Limpar filtros
          </Button>
        ) : null}
      </div>

      <label className="mt-3 block">
        <span className="sr-only">Buscar</span>
        <div className="relative">
          <Search
            className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-neutral-400"
            aria-hidden
          />
          <Input
            type="text"
            role="searchbox"
            value={value.query}
            onChange={(event) => onChange({ ...value, query: event.target.value })}
            placeholder={searchPlaceholder}
            className="h-11 rounded-xl border-neutral-200/80 bg-brand-100/30 pr-11 pl-11 text-sm font-medium shadow-inner"
          />
          {value.query ? (
            <Button
              type="button"
              variant="ghost"
              size="icon-xs"
              aria-label="Limpar busca"
              onClick={() => onChange({ ...value, query: '' })}
              className="absolute top-1/2 right-2 -translate-y-1/2 text-neutral-400"
            >
              <X />
            </Button>
          ) : null}
        </div>
      </label>

      <div className="mt-4 space-y-4">
        <div
          className={cn(
            'flex flex-col gap-4 min-[860px]:items-end',
            curationSpread &&
              'min-[860px]:grid min-[860px]:w-full min-[860px]:max-w-full min-[860px]:grid-cols-[max-content_minmax(0px,1fr)_max-content_minmax(0px,1fr)_max-content_minmax(0px,1fr)_max-content] min-[860px]:items-end min-[860px]:gap-x-0',
            opportunityAlign &&
              'min-[860px]:grid min-[860px]:w-max min-[860px]:max-w-full min-[860px]:grid-cols-[max-content_max-content_max-content] min-[860px]:items-end min-[860px]:justify-start min-[860px]:gap-x-8 min-[860px]:gap-y-5',
          )}
        >
          <FilterRow
            label="Mercado"
            options={marketOptions}
            value={value.market}
            onChange={handleMarketChange}
          />
          {curationSpread ? <div className="hidden min-[860px]:block" aria-hidden /> : null}
          <FilterRow
            label="Formato"
            options={workOptions}
            value={value.workModel}
            onChange={(workModel) => onChange({ ...value, workModel })}
          />
          {curationSpread ? <div className="hidden min-[860px]:block" aria-hidden /> : null}
          {showStateFilter && !opportunityAlign ? (
            <StateFilterSelect
              label="Estado"
              options={BRAZILIAN_STATES}
              value={value.state}
              hidden={!showState}
              narrow={curationSpread}
              onChange={(state) => onChange({ ...value, state })}
            />
          ) : null}
          {showStateFilter && opportunityAlign ? (
            <StateFilterSelect
              label="Estado"
              options={BRAZILIAN_STATES}
              value={value.state}
              hidden={!showState}
              fill
              onChange={(state) => onChange({ ...value, state })}
            />
          ) : null}
          {curationSpread ? <div className="hidden min-[860px]:block" aria-hidden /> : null}
          {curationSpread ? (
            <FilterRow
              label="Contrato"
              options={contractOptions}
              value={value.contract}
              onChange={(contract) => onChange({ ...value, contract })}
            />
          ) : null}
          {opportunityAlign ? (
            <div className="min-[860px]:col-span-2">
              <FilterRow
                label="Nível"
                options={seniorityOptions}
                value={value.seniority}
                onChange={(seniority) => onChange({ ...value, seniority })}
              />
            </div>
          ) : null}
          {opportunityAlign ? (
            <FilterRow
              label="Contrato"
              options={contractOptions}
              value={value.contract}
              onChange={(contract) => onChange({ ...value, contract })}
            />
          ) : null}
        </div>
        {!hideSeniority && value.market === 'international' ? (
          <FilterRow
            label="Nível"
            options={seniorityOptions}
            value={value.seniority}
            onChange={(seniority) => onChange({ ...value, seniority })}
          />
        ) : null}
        <FilterRow
          label="Cargo"
          options={disciplineOptions}
          value={value.discipline}
          onChange={(discipline) => onChange({ ...value, discipline })}
        />
      </div>
    </div>
  )
}
