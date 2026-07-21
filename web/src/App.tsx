import { useEffect, useMemo, useState, useTransition } from 'react'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { JobList } from './components/JobList'
import { MarketFilters } from './components/MarketFilters'
import { MuralIntro } from './components/MuralIntro'
import { fetchPublishedJobs } from './lib/supabase'
import type { Job, MarketFilter } from './types/job'

function App() {
  const [jobs, setJobs] = useState<Job[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [market, setMarket] = useState<MarketFilter>('all')
  const [, startTransition] = useTransition()

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

  const filtered = useMemo(() => {
    if (market === 'national') {
      return jobs.filter((job) => job.is_international !== true)
    }
    if (market === 'international') {
      return jobs.filter((job) => job.is_international === true)
    }
    return jobs
  }, [jobs, market])

  return (
    <div className="min-h-screen bg-neutral-100">
      <Header />
      <main>
        <MuralIntro count={loading ? null : jobs.length} />
        <section className="px-5 pb-16 md:px-6">
          <div className="mx-auto max-w-3xl md:max-w-4xl">
            <MarketFilters
              value={market}
              onChange={(value) => {
                startTransition(() => setMarket(value))
              }}
            />
            <JobList jobs={filtered} loading={loading} error={error} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default App
