export type Job = {
  id: string
  title: string
  company: string
  location: string | null
  url: string
  seniority: string | null
  work_model: string | null
  employment_type: string | null
  is_international: boolean | null
  area: string | null
  role: string | null
  ai_summary: string | null
  skills: string[] | null
  tools: string[] | null
  published_at: string | null
  captured_at: string
}

export type MarketFilter = 'all' | 'national' | 'international'
export type WorkModelFilter = 'all' | 'remote' | 'hybrid' | 'onsite'
export type SeniorityFilter = 'all' | 'intern' | 'junior' | 'mid' | 'senior' | 'lead'

export type JobFiltersState = {
  query: string
  market: MarketFilter
  workModel: WorkModelFilter
  seniority: SeniorityFilter
}
