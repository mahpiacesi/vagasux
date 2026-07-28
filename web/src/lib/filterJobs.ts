import { resolveIsInternational, resolveWorkModel } from './labels'
import { parseBrazilianState } from './location'
import type { Job, JobFiltersState } from '../types/job'

function normalize(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

export function filterJobs(jobs: Job[], filters: JobFiltersState): Job[] {
  const q = normalize(filters.query.trim())

  return jobs.filter((job) => {
    const isInternational = resolveIsInternational(job.is_international, job.location)

    if (filters.market === 'national' && isInternational === true) return false
    if (filters.market === 'international' && isInternational !== true) return false

    if (filters.workModel !== 'all') {
      const workModel = resolveWorkModel(job.work_model, job.location, job.description)
      if (workModel !== filters.workModel) return false
    }

    if (filters.seniority !== 'all' && job.seniority !== filters.seniority) return false

    if (filters.state !== 'all') {
      const state = parseBrazilianState(job.location)
      if (state !== filters.state) return false
    }

    if (!q) return true

    const haystack = normalize(
      [
        job.title,
        job.company,
        job.location ?? '',
        job.area ?? '',
        job.role ?? '',
        job.ai_summary ?? '',
        ...(job.skills ?? []),
        ...(job.tools ?? []),
      ].join(' '),
    )

    return haystack.includes(q)
  })
}

export function hasActiveFilters(filters: JobFiltersState) {
  return (
    filters.query.trim() !== '' ||
    filters.market !== 'all' ||
    filters.workModel !== 'all' ||
    filters.seniority !== 'all' ||
    filters.state !== 'all'
  )
}
