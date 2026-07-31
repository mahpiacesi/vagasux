import {
  homeFeaturedPartners,
  type HomeFeaturedPartner,
} from '@/data/homeFeaturedPartners'
import { fallbackPartnerNames } from '@/data/partners'
import { fetchActivePartners } from '@/lib/supabase'
import type { Partner } from '@/types/partner'

export type PartnerDisplay = {
  slug: string
  name: string
  logo: string | null
  siteUrl: string | null
}

export type HomeFeaturedPartnerDisplay = HomeFeaturedPartner & {
  name: string
  logo: string
}

const SUPABASE_LOGO_PREFIX =
  'https://xbvspzwjjjtkvecseoog.supabase.co/storage/v1/object/public/partner-logos/'

function isSupabaseLogoUrl(url: string | null | undefined): url is string {
  return Boolean(url?.startsWith(SUPABASE_LOGO_PREFIX))
}

function fromSupabase(partner: Partner): PartnerDisplay {
  return {
    slug: partner.slug,
    name: partner.name,
    logo: isSupabaseLogoUrl(partner.logo_url) ? partner.logo_url : null,
    siteUrl: partner.site_url,
  }
}

function fromFallback(): PartnerDisplay[] {
  return fallbackPartnerNames.map((partner) => ({
    slug: partner.slug,
    name: partner.name,
    logo: null,
    siteUrl: null,
  }))
}

/** Active partners from Supabase (Notion → n8n → Storage). No local logo overrides. */
export async function loadActivePartners(): Promise<PartnerDisplay[]> {
  try {
    const partners = await fetchActivePartners()
    if (partners.length > 0) {
      return partners.map(fromSupabase)
    }
  } catch (error) {
    console.warn('Failed to load partners from Supabase, using name-only fallback.', error)
  }

  return fromFallback()
}

/** Featured partners for the home grid (curated slugs + Supabase logos). */
export function pickHomeFeaturedPartners(
  partners: PartnerDisplay[],
): HomeFeaturedPartnerDisplay[] {
  const bySlug = new Map(partners.map((partner) => [partner.slug, partner]))

  return homeFeaturedPartners.flatMap((featured) => {
    const partner = bySlug.get(featured.slug)
    if (!partner?.logo) return []

    return [
      {
        ...featured,
        name: partner.name,
        logo: partner.logo,
      },
    ]
  })
}
