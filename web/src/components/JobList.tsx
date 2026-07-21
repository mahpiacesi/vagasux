import type { Job } from '../types/job'
import { JobRow } from './JobRow'

type JobListProps = {
  jobs: Job[]
  loading: boolean
  error: string | null
}

export function JobList({ jobs, loading, error }: JobListProps) {
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

  if (jobs.length === 0) {
    return (
      <div className="px-1 py-12 text-center">
        <p className="text-lg font-black text-neutral-500">Nenhuma vaga por aqui ainda</p>
        <p className="mt-2 text-sm text-neutral-400">
          Assim que o enrichment publicar novas oportunidades, elas aparecem neste mural.
        </p>
      </div>
    )
  }

  return (
    <div className="divide-y-0">
      {jobs.map((job, index) => (
        <JobRow key={job.id} job={job} index={index} />
      ))}
    </div>
  )
}
