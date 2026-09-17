import { JOB_DISCIPLINES, type DisciplineFilter } from '@/lib/discipline'
import {
  brazilianStateToUf,
  resolveBrazilianStateFilter,
} from '@/lib/location'
import type {
  JobFiltersState,
  MarketFilter,
  SeniorityFilter,
  WorkModelFilter,
} from '@/types/job'

export const emptyJobFilters: JobFiltersState = {
  query: '',
  market: 'all',
  workModel: 'all',
  seniority: 'all',
  discipline: 'all',
  state: 'all',
}

const MARKET_VALUES = ['national', 'international'] as const
const WORK_MODEL_VALUES = ['remote', 'hybrid', 'onsite'] as const
const SENIORITY_VALUES = [
  'intern',
  'trainee',
  'junior',
  'mid',
  'senior',
  'lead',
] as const

function pick<T extends string>(
  value: string | null,
  allowed: readonly T[],
): T | 'all' {
  return allowed.includes(value as T) ? (value as T) : 'all'
}

/** Read mural filters from Super-legacy and shareable query strings. */
export function parseJobFiltersFromSearchParams(
  searchParams: URLSearchParams,
): JobFiltersState {
  const discipline = searchParams.get('discipline')

  return {
    query: searchParams.get('q') ?? '',
    market: pick(searchParams.get('market'), MARKET_VALUES) as MarketFilter,
    workModel: pick(
      searchParams.get('workModel'),
      WORK_MODEL_VALUES,
    ) as WorkModelFilter,
    seniority: pick(
      searchParams.get('seniority'),
      SENIORITY_VALUES,
    ) as SeniorityFilter,
    discipline: JOB_DISCIPLINES.includes(discipline as never)
      ? (discipline as DisciplineFilter)
      : 'all',
    state: resolveBrazilianStateFilter(searchParams.get('state')) ?? 'all',
  }
}

export function serializeJobFiltersToSearchParams(
  filters: JobFiltersState,
): URLSearchParams {
  const params = new URLSearchParams()
  const query = filters.query.trim()
  if (query) params.set('q', query)
  if (filters.market !== 'all') params.set('market', filters.market)
  if (filters.workModel !== 'all') params.set('workModel', filters.workModel)
  if (filters.seniority !== 'all') params.set('seniority', filters.seniority)
  if (filters.discipline !== 'all') params.set('discipline', filters.discipline)
  if (filters.state !== 'all') {
    params.set('state', brazilianStateToUf(filters.state) ?? filters.state)
  }
  return params
}
