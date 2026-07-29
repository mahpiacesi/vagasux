import { fallbackPartners } from '@/data/partners'
import { fetchActivePartners } from '@/lib/supabase'
import type { Partner } from '@/types/partner'

export type PartnerDisplay = {
  slug: string
  name: string
  logo: string | null
  siteUrl: string | null
}

function fromSupabase(partner: Partner): PartnerDisplay {
  return {
    slug: partner.slug,
    name: partner.name,
    logo: partner.logo_url,
    siteUrl: partner.site_url,
  }
}

function fromFallback(): PartnerDisplay[] {
  return fallbackPartners.map((partner) => ({
    slug: partner.slug,
    name: partner.name,
    logo: partner.logo || null,
    siteUrl: null,
  }))
}

export async function loadActivePartners(): Promise<PartnerDisplay[]> {
  try {
    const partners = await fetchActivePartners()
    if (partners.length > 0) {
      return partners.map(fromSupabase)
    }
  } catch (error) {
    console.warn('Failed to load partners from Supabase, using fallback.', error)
  }

  return fromFallback()
}
