/** Curated home grid: slug + layout. Logos come from Supabase via n8n sync. */
export type HomeFeaturedPartner = {
  slug: string
  bg: string
  className: string
  logoClass: string
  /** Force logo to white for legibility on saturated/dark backgrounds (home only). */
  logoTone?: 'white'
}

export const homeFeaturedPartners: HomeFeaturedPartner[] = [
  {
    slug: 'alura-fiap-pm3',
    bg: '#000000',
    className: 'col-span-2 min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'max-h-8 md:max-h-10',
    logoTone: 'white',
  },
  {
    slug: 'uxconfbr',
    bg: '#0070C0',
    className: 'min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'max-h-8 md:max-h-9',
  },
  {
    slug: 'banco-carrefour',
    bg: '#004A99',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'max-h-16 md:max-h-[4.5rem]',
    logoTone: 'white',
  },
  {
    slug: 'thestarter',
    bg: '#FC5B3F',
    className: 'min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'max-h-16 md:max-h-[5.25rem]',
    logoTone: 'white',
  },
  {
    slug: 'pcamp',
    bg: '#EEF1FF',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'max-h-8 md:max-h-9',
  },
]
