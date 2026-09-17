import { useDeferredValue, useEffect, useMemo, useState } from 'react'
import { IniciantesHero } from '@/components/IniciantesHero'
import { JobFilters } from '@/components/JobFilters'
import { JobList } from '@/components/JobList'
import { JobsCrossLink } from '@/components/jobs/JobsCrossLink'
import { JobsListingSection } from '@/components/jobs/JobsListingSection'
import { useJobListingFilters } from '@/hooks/useJobListingFilters'
import { filterJobs } from '@/lib/filterJobs'
import { fetchPublishedJobs } from '@/lib/supabase'
import type { Job } from '@/types/job'

const PAGE_SIZE = 15
const CURATED_SOURCE = 'VagasUX'

export function VagasParaIniciantesPage() {
  const { filters, setFilters, clearFilters } = useJobListingFilters()
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE)
  const deferredQuery = useDeferredValue(filters.query)

  useEffect(() => {
    let cancelled = false

    async function load() {
      setLoading(true)
      setError(null)
      try {
        const data = await fetchPublishedJobs({ source: CURATED_SOURCE })
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
  }, [filters.market, filters.workModel, filters.seniority, filters.discipline, filters.state, deferredQuery])

  const visibleJobs = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount],
  )

  return (
    <main>
      <IniciantesHero />
      <JobsListingSection>
        <JobsCrossLink variant="curadoria" />
        <div id="vagas" className="mt-6 scroll-mt-24">
          <JobFilters
            value={filters}
            resultCount={loading ? 0 : filtered.length}
            totalCount={jobs.length}
            hideSeniority={filters.seniority === 'all'}
            searchPlaceholder="Buscar empresa, função ou palavra-chave…"
            onChange={setFilters}
            onClear={clearFilters}
          />
        </div>
        <div className="mt-6">
          <JobList
            jobs={visibleJobs}
            totalCount={filtered.length}
            loading={loading}
            error={error}
            hideSourceBadge
            listingVariant="curated"
            emptyTitle="Nenhuma vaga encontrada"
            emptyDescription="Não encontramos vagas com esses filtros no momento. Tente ajustar a busca ou volte em breve."
            onLoadMore={() => {
              setVisibleCount((count) => count + PAGE_SIZE)
            }}
          />
        </div>
      </JobsListingSection>
    </main>
  )
}
