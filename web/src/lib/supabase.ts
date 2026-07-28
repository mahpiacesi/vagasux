import { createClient } from '@supabase/supabase-js'
import type { Job } from '../types/job'

const url = import.meta.env.VITE_SUPABASE_URL
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!url || !anonKey) {
  console.warn(
    'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Copy web/.env.example to web/.env.local.',
  )
}

export const supabase = createClient(url ?? '', anonKey ?? '')

const jobColumns = [
  'id',
  'title',
  'company',
  'location',
  'url',
  'source',
  'seniority',
  'work_model',
  'employment_type',
  'is_international',
  'area',
  'role',
  'ai_summary',
  'skills',
  'tools',
  'published_at',
  'captured_at',
] as const

export type FetchPublishedJobsOptions = {
  source?: string
}

export async function fetchPublishedJobs(
  options?: FetchPublishedJobsOptions,
): Promise<Job[]> {
  let query = supabase
    .from('jobs')
    .select(jobColumns.join(', '))
    .eq('status', 'published')

  if (options?.source) {
    query = query.eq('source', options.source)
  }

  const { data, error } = await query
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('captured_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as unknown as Job[]
}
