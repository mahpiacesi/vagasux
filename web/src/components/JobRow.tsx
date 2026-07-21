import { ArrowUpRight } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { labelSeniority, labelWorkModel } from '@/lib/labels'
import type { Job } from '@/types/job'

type JobRowProps = {
  job: Job
  index: number
}

export function JobRow({ job, index }: JobRowProps) {
  const seniority = labelSeniority(job.seniority)
  const workModel = labelWorkModel(job.work_model)

  return (
    <a
      href={job.url}
      target="_blank"
      rel="noopener noreferrer"
      className="job-row group block border-b border-border py-5 transition-colors hover:bg-secondary/70 focus-visible:bg-secondary focus-visible:outline-none"
      style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="text-xs font-semibold tracking-wide text-muted-foreground uppercase">
            {job.company}
            {job.area ? ` · ${job.area}` : ''}
          </p>
          <h2 className="mt-1 text-lg font-black tracking-tight text-foreground transition-colors group-hover:text-primary md:text-xl">
            {job.title}
          </h2>
          {job.ai_summary ? (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {job.ai_summary}
            </p>
          ) : null}
          <div className="mt-3 flex flex-wrap gap-1.5">
            <Badge variant="secondary">
              {job.is_international ? 'Internacional' : 'Brasil'}
            </Badge>
            {seniority ? <Badge variant="outline">{seniority}</Badge> : null}
            {workModel ? <Badge variant="outline">{workModel}</Badge> : null}
            {job.location ? <Badge variant="outline">{job.location}</Badge> : null}
          </div>
        </div>
        <ArrowUpRight
          className="mt-1 size-5 shrink-0 text-muted-foreground/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
          aria-hidden
        />
      </div>
    </a>
  )
}
