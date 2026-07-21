import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import {
  displayLocation,
  formatCapturedAt,
  isNewJob,
  labelSeniority,
  labelSource,
  resolveWorkModelLabel,
} from '@/lib/labels'
import type { Job } from '@/types/job'

type JobRowProps = {
  job: Job
  index: number
}

const badgeBase = 'rounded-md border-transparent font-semibold uppercase tracking-wide'

export function JobRow({ job, index }: JobRowProps) {
  const seniority = labelSeniority(job.seniority)
  const workModel = resolveWorkModelLabel(job.work_model, job.location)
  const source = labelSource(job.source)
  const location = displayLocation(job.location, workModel)
  const capturedLabel = formatCapturedAt(job.captured_at)
  const showNew = isNewJob(job.captured_at)

  return (
    <a
      href={job.url}
      target="_blank"
      rel="noopener noreferrer"
      className="job-row group block border-b border-border py-5 transition-colors last:border-b-0 hover:bg-secondary/70 focus-visible:bg-secondary focus-visible:outline-none"
      style={{ animationDelay: `${Math.min(index, 12) * 45}ms` }}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-1.5">
            {showNew ? (
              <Badge
                variant="destructive"
                className={`${badgeBase} gap-1 bg-highlight-200/15 text-highlight-200`}
              >
                <Sparkles className="size-3" aria-hidden />
                Nova
              </Badge>
            ) : null}
            {workModel ? (
              <Badge
                variant="secondary"
                className={`${badgeBase} bg-brand-100 text-brand-400`}
              >
                {workModel}
              </Badge>
            ) : null}
            {job.is_international ? (
              <Badge
                variant="secondary"
                className={`${badgeBase} bg-complementary-100 text-complementary-500`}
              >
                Internacional
              </Badge>
            ) : null}
            {source ? (
              <Badge
                variant="outline"
                className={`${badgeBase} border-brand-200/80 bg-brand-100/60 text-brand-500`}
              >
                {source}
              </Badge>
            ) : null}
          </div>

          <h2 className="mt-2.5 text-lg font-black tracking-tight text-foreground transition-colors group-hover:text-primary md:text-xl">
            {job.title}
          </h2>
          <p className="mt-1 text-sm font-semibold text-muted-foreground">
            {job.company}
            {location ? (
              <span className="font-medium text-muted-foreground/80"> · {location}</span>
            ) : null}
          </p>

          {job.ai_summary ? (
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground md:text-[15px]">
              {job.ai_summary}
            </p>
          ) : null}

          {seniority || job.area ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {seniority ? (
                <Badge variant="outline" className="rounded-md font-medium">
                  {seniority}
                </Badge>
              ) : null}
              {job.area ? (
                <Badge variant="outline" className="rounded-md font-medium">
                  {job.area}
                </Badge>
              ) : null}
            </div>
          ) : null}

          {capturedLabel ? (
            <p className="mt-3 text-xs text-muted-foreground/70">
              Capturada em {capturedLabel}
            </p>
          ) : null}
        </div>
        <ArrowUpRight
          className="mt-1 size-5 shrink-0 text-muted-foreground/50 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"
          aria-hidden
        />
      </div>
    </a>
  )
}
