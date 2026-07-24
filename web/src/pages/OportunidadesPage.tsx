import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { JobFilters } from '@/components/JobFilters'
import { JobList } from '@/components/JobList'
import { MuralIntro } from '@/components/MuralIntro'
import { filterJobs } from '@/lib/filterJobs'
import { fetchPublishedJobs } from '@/lib/supabase'
import type { Job, JobFiltersState } from '@/types/job'

const PAGE_SIZE = 15

const initialFilters: JobFiltersState = {
  query: '',
  market: 'all',
  workModel: 'all',
  seniority: 'all',
}

export function OportunidadesPage() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [filters, setFilters] = useState<JobFiltersState>(initialFilters)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const deferredQuery = useDeferredValue(filters.query)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchPublishedJobs()
        if (!cancelled) setJobs(data)
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : 'Erro ao buscar vagas')
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  const filtered = useMemo(
    () =>
      filterJobs(jobs, {
        ...filters,
        query: deferredQuery,
      }),
    [jobs, filters, deferredQuery],
  )

  useEffect(() => {
    setVisibleCount(PAGE_SIZE)
  }, [filters.market, filters.workModel, filters.seniority, deferredQuery])

  const visibleJobs = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  )

  return (
    <main>
      <MuralIntro count={loading ? null : jobs.length} />
      <section className="px-5 pb-16 md:px-6">
        <div className="mx-auto max-w-3xl md:max-w-4xl">
          <JobFilters
            value={filters}
            resultCount={loading ? 0 : filtered.length}
            totalCount={jobs.length}
            onChange={setFilters}
            onClear={() => setFilters(initialFilters)}
          />
          <div className="mt-6">
            <JobList
              jobs={visibleJobs}
              totalCount={filtered.length}
              loading={loading}
              error={error}
              onLoadMore={() => {
                setVisibleCount((count) => count + PAGE_SIZE)
              }}
            />
          </div>
        </div>
      </section>
    </main>
  )
}
