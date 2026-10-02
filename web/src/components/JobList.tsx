import { Fragment } from 'react'
import type { Job } from '../types/job'
import { jobAdAfterCounts } from '@/lib/jobAdSlots'
import { JobAdPreview } from './JobAdPreview'
import { JobRow } from './JobRow'
import { LoadMore } from './LoadMore'

type JobListProps = {
  jobs: Job[]
  totalCount: number
  loading: boolean
  error: string | null
  onLoadMore: () => void
  emptyTitle?: string
  emptyDescription?: string
  hideSourceBadge?: boolean
  listingVariant?: 'default' | 'curated'
}

export function JobList({
  jobs,
  totalCount,
  loading,
  error,
  onLoadMore,
  emptyTitle = 'Nenhuma vaga por aqui',
  emptyDescription = 'Tenta limpar a busca ou os filtros, ou volta mais tarde. O mural atualiza todo dia.',
  hideSourceBadge = false,
  listingVariant = 'default',
}: JobListProps) {
  if (loading) {
    return (
      <div className="space-y-4 py-4" aria-busy="true" aria-live="polite">
        {[0, 1, 2].map((i) => (
          <div key={i} className="skeleton h-32 rounded-2xl" />
        ))}
      </div>
    )
  }

  if (error) {
    return (
      <div className="rounded-2xl border border-highlight-200/30 bg-highlight-200/5 px-5 py-8 text-sm text-neutral-500 shadow-sm">
        Não deu pra carregar as vagas agora. Tenta de novo em instantes.
        <p className="mt-2 text-xs text-neutral-400">{error}</p>
      </div>
    )
  }

  if (totalCount === 0) {
    return (
      <div className="space-y-3 md:space-y-4">
        <div className="rounded-2xl border border-dashed border-neutral-200/80 bg-neutral-100/70 px-6 py-14 text-center">
          <p className="text-lg font-black text-neutral-500">{emptyTitle}</p>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-neutral-400">
            {emptyDescription}
          </p>
        </div>
        <JobAdPreview />
      </div>
    )
  }

  const adAfter = new Set(jobAdAfterCounts(jobs.length))

  return (
    <div>
      <div className="space-y-3 md:space-y-4">
        {jobs.map((job, index) => (
          <Fragment key={job.id}>
            <JobRow
              job={job}
              index={index}
              hideSourceBadge={hideSourceBadge}
              listingVariant={listingVariant}
            />
            {adAfter.has(index + 1) ? <JobAdPreview /> : null}
          </Fragment>
        ))}
      </div>
      <LoadMore shown={jobs.length} total={totalCount} onLoadMore={onLoadMore} />
    </div>
  )
}
