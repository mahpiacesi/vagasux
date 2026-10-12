import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  parseJobFiltersFromSearchParams,
  preserveJobQueryWhileTyping,
  serializeJobFiltersToSearchParams,
} from '@/lib/jobSearchParams'
import type { JobFiltersState } from '@/types/job'

export function useJobListingFilters() {
  const [searchParams, setSearchParams] = useSearchParams()
  const urlFilters = useMemo(
    () => parseJobFiltersFromSearchParams(searchParams),
    [searchParams],
  )
  const [queryDraft, setQueryDraft] = useState(urlFilters.query)

  useEffect(() => {
    setQueryDraft((current) =>
      preserveJobQueryWhileTyping(current, urlFilters.query),
    )
  }, [urlFilters.query])

  const filters = useMemo(
    () => ({ ...urlFilters, query: queryDraft }),
    [urlFilters, queryDraft],
  )

  function setFilters(next: JobFiltersState) {
    setQueryDraft(next.query)
    const query = next.query.trim()
    const unchanged =
      query === urlFilters.query.trim() &&
      next.market === urlFilters.market &&
      next.workModel === urlFilters.workModel &&
      next.seniority === urlFilters.seniority &&
      next.discipline === urlFilters.discipline &&
      next.state === urlFilters.state
    if (unchanged) return

    setSearchParams(serializeJobFiltersToSearchParams({ ...next, query }), {
      replace: true,
    })
  }

  function clearFilters() {
    setQueryDraft('')
    setSearchParams({}, { replace: true })
  }

  return { filters, setFilters, clearFilters }
}
