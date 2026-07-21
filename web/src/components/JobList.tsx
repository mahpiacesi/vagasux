import type { Job } from '../types/job'
import { JobRow } from './JobRow'
import { LoadMore } from './LoadMore'

type JobListProps = {
  jobs: Job[]
  totalCount: number
  loading: boolean
  error: string | null
  onLoadMore: () => void
}

export function JobList({ jobs, totalCount, loading, error, onLoadMore }: JobListProps) {
  if (loading) {
    return (
      <div className="space-y-4 py-8" aria-busy="true" aria-live="polite">
        {[0, 1, 2].map((i) => (
          <div key={i} className="skeleton h-24 rounded-xl" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-xl border border-highlight-200/30 bg-highlight-200/5 px-5 py-8 text-sm text-neutral-500">
        Não deu pra carregar as vagas agora. Tenta de novo em instantes.
        <p className="mt-2 text-xs text-neutral-400">{error}</p>
      </div>
    )
  }

  if (totalCount === 0) {
    return (
      <div className="px-1 py-12 text-center">
        <p className="text-lg font-black text-neutral-500">Nenhuma vaga por aqui</p>
        <p className="mt-2 text-sm text-neutral-400">
          Tenta limpar a busca ou os filtros — ou volta mais tarde, o mural atualiza todo dia.
        </p>
      </div>
    )
  }

  return (
    <div>
      <div>
        {jobs.map((job, index) => (
          <JobRow key={job.id} job={job} index={index} />
        ))}
      </div>
      <LoadMore shown={jobs.length} total={totalCount} onLoadMore={onLoadMore} />
    </div>
  )
}
