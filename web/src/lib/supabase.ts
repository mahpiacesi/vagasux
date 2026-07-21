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

export async function fetchPublishedJobs(): Promise<Job[]> {
  const { data, error } = await supabase
    .from('jobs')
    .select(
      [
        'id',
        'title',
        'company',
        'location',
        'url',
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
      ].join(', '),
    )
    .eq('status', 'published')
    .order('published_at', { ascending: false, nullsFirst: false })
    .order('captured_at', { ascending: false })

  if (error) throw error
  return (data ?? []) as unknown as Job[]
}
