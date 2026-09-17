import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  parseJobFiltersFromSearchParams,
  serializeJobFiltersToSearchParams,
} from '@/lib/jobSearchParams'
import type { JobFiltersState } from '@/types/job'

export function useJobListingFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const filters = useMemo(
    () => parseJobFiltersFromSearchParams(searchParams),
    [searchParams],
  )

  function setFilters(next: JobFiltersState) {
    setSearchParams(serializeJobFiltersToSearchParams(next), { replace: true })
  }

  function clearFilters() {
    setSearchParams({}, { replace: true })
  }

  return { filters, setFilters, clearFilters }
}
