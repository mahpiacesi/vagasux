import { createClient } from '@supabase/supabase-js'
import type { Job } from '../types/job'
import type { Partner } from '../types/partner'
import type { GuiaCursoRelato } from '@/data/guiaCursoFeedback'

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
  'description',
  'url',
  'source',
  'seniority',
  'work_model',
  'employment_type',
  'is_international',
  'area',
  'role',
  'discipline',
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

const partnerColumns = ['id', 'slug', 'name', 'logo_url', 'site_url'] as const

export async function fetchActivePartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from('partners')
    .select(partnerColumns.join(', '))
    .eq('is_active', true)
    .order('name', { ascending: true })

  if (error) throw error
  return (data ?? []) as unknown as Partner[]
}

const courseFeedbackColumns = ['id', 'text', 'author', 'received_at'] as const

export async function fetchCourseFeedback(
  courseId: string,
): Promise<GuiaCursoRelato[]> {
  const { data, error } = await supabase
    .from('guia_curso_relatos')
    .select(courseFeedbackColumns.join(', '))
    .eq('curso_id', courseId)
    .order('received_at', { ascending: false, nullsFirst: false })
    .order('created_at', { ascending: false })

  if (error) throw error

  const relatos = (data ?? []) as unknown as Array<{
    id: string
    text: string
    author: string | null
    received_at: string | null
  }>

  return relatos.map((relato) => ({
    id: relato.id,
    text: relato.text,
    author: relato.author ?? undefined,
    receivedAt: relato.received_at ?? undefined,
  }))
}

export type PublicVolunteer = {
  notionPageId: string
  name: string
  roles: string[]
  emoji?: string
  photo?: string
  instagram?: string
  linkedin?: string
  bio?: string
  rapidinhas: string[]
}

const volunteerColumns = [
  'notion_page_id',
  'name',
  'roles',
  'emoji',
  'photo_url',
  'instagram_url',
  'linkedin_url',
  'bio',
  'rapidinhas',
] as const

export async function fetchActiveVolunteers(): Promise<PublicVolunteer[]> {
  const { data, error } = await supabase
    .from('guia_volunteers')
    .select(volunteerColumns.join(', '))
    .eq('is_active', true)
    .order('name', { ascending: true })

  if (error) throw error

  return ((data ?? []) as unknown as Array<{
    notion_page_id: string
    name: string
    roles: string[] | null
    emoji: string | null
    photo_url: string | null
    instagram_url: string | null
    linkedin_url: string | null
    bio: string | null
    rapidinhas: string[] | null
  }>).map((volunteer) => ({
    notionPageId: volunteer.notion_page_id,
    name: volunteer.name,
    roles: volunteer.roles ?? [],
    emoji: volunteer.emoji ?? undefined,
    photo: volunteer.photo_url ?? undefined,
    instagram: volunteer.instagram_url ?? undefined,
    linkedin: volunteer.linkedin_url ?? undefined,
    bio: volunteer.bio ?? undefined,
    rapidinhas: volunteer.rapidinhas ?? [],
  }))
}
