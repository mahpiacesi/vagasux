import { ArrowUpRight } from 'lucide-react'
import { labelSeniority, labelWorkModel } from '../lib/labels'
import type { Job } from '../types/job'

type JobRowProps = {
  job: Job
  index: number
}

export function JobRow({ job, index }: JobRowProps) {
  const seniority = labelSeniority(job.seniority)
  const workModel = labelWorkModel(job.work_model)
  const meta = [
    job.is_international ? 'Internacional' : 'Brasil',
    seniority,
    workModel,
    job.location,
  ].filter(Boolean)

  return (
    <a
      href={job.url}
      target="_blank"
      rel="noopener noreferrer"
      className="job-row group block border-b border-neutral-500/10 py-5 transition-colors hover:bg-brand-100/40 focus-visible:bg-brand-100/50 focus-visible:outline-none"
      style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-wide text-neutral-400 uppercase">
            {job.company}
            {job.area ? ` · ${job.area}` : ''}
          </p>
          <h2 className="mt-1 text-lg font-black tracking-tight text-neutral-500 transition-colors group-hover:text-brand-400 md:text-xl">
            {job.title}
          </h2>
          {job.ai_summary ? (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-400 md:text-[15px]">
              {job.ai_summary}
            </p>
          ) : null}
          {meta.length > 0 ? (
            <p className="mt-3 text-xs font-semibold text-neutral-400 md:text-sm">
              {meta.join(' · ')}
            </p>
          ) : null}
        </div>
        <ArrowUpRight
          className="mt-1 h-5 w-5 shrink-0 text-neutral-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-300"
          aria-hidden
        />
      </div>
    </a>
  )
}
