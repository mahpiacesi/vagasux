import { ArrowUpRight, Sparkles } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { labelDiscipline } from '@/lib/discipline'
import {
  displayLocation,
  formatJobListedAt,
  isNewJob,
  labelSeniority,
  labelSource,
  resolveWorkModelLabel,
} from '@/lib/labels'
import type { Job } from '@/types/job'

type JobRowProps = {
  job: Job
  index: number
  hideSourceBadge?: boolean
  listingVariant?: 'default' | 'curated'
}

const badgeBase = 'rounded-md border-transparent font-semibold uppercase tracking-wide'

export function JobRow({
  job,
  index,
  hideSourceBadge = false,
  listingVariant = 'default',
}: JobRowProps) {
  const seniority = labelSeniority(job.seniority)
  const workModel = resolveWorkModelLabel(job.work_model, job.location, job.description)
  const source = labelSource(job.source)
  const location = displayLocation(job.location, workModel)
  const listedLabel = formatJobListedAt(
    job,
    listingVariant === 'curated' ? 'mapped' : 'captured',
  )
  const listedPrefix = listingVariant === 'curated' ? 'Mapeada em' : 'Capturada em'
  const showNew = isNewJob(job.captured_at)
  const cargoLabel = labelDiscipline(job)

  return (
    <a
      href={job.url}
      target="_blank"
      rel="noopener noreferrer"
      className="job-row group block rounded-2xl border border-neutral-200/70 bg-neutral-100 p-5 shadow-[0_10px_32px_-24px_rgb(7_0_58_/_0.35)] transition-all hover:-translate-y-0.5 hover:border-brand-200/70 hover:shadow-[0_18px_44px_-24px_rgb(36_46_144_/_0.28)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-300/60 md:p-6"
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
            {source && !hideSourceBadge ? (
              <Badge
                variant="outline"
                className={`${badgeBase} ${
                  job.source === 'VagasUX'
                    ? 'border-complementary-200 bg-complementary-100 text-complementary-500'
                    : 'border-brand-200/80 bg-brand-100/60 text-brand-500'
                }`}
              >
                {source}
              </Badge>
            ) : null}
          </div>

          <h2 className="mt-3 text-lg font-black tracking-tight text-neutral-500 transition-colors group-hover:text-brand-500 md:text-xl">
            {job.title}
          </h2>
          <p className="mt-1.5 text-sm font-semibold text-neutral-400">
            {job.company}
            {location ? (
              <span className="font-medium text-neutral-400/80"> · {location}</span>
            ) : null}
          </p>

          {job.ai_summary ? (
            <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-neutral-400 md:text-[15px]">
              {job.ai_summary}
            </p>
          ) : null}

          {seniority || cargoLabel !== 'Outros' ? (
            <div className="mt-3 flex flex-wrap gap-1.5">
              {seniority ? (
                <Badge
                  variant="outline"
                  className="rounded-full border-neutral-200/80 font-medium text-neutral-400"
                >
                  {seniority}
                </Badge>
              ) : null}
              {cargoLabel !== 'Outros' ? (
                <Badge
                  variant="outline"
                  className="rounded-full border-neutral-200/80 font-medium text-neutral-400"
                >
                  {cargoLabel}
                </Badge>
              ) : null}
            </div>
          ) : null}

          {listedLabel ? (
            <p className="mt-3 text-xs text-neutral-400/70">
              {listedPrefix} {listedLabel}
            </p>
          ) : null}
        </div>
        <span className="mt-1 inline-flex size-10 shrink-0 items-center justify-center rounded-full border border-neutral-200/80 bg-brand-100/40 text-neutral-400 transition-all group-hover:border-brand-200 group-hover:bg-brand-100 group-hover:text-brand-500">
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </div>
    </a>
  )
}
