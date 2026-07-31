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
    logoClass: 'h-8 w-auto md:h-10',
    logoTone: 'white',
  },
  {
    slug: 'uxconfbr',
    bg: '#0070C0',
    className: 'min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'h-8 w-auto max-w-[10rem] md:h-9 md:max-w-[12rem]',
  },
  {
    slug: 'banco-carrefour',
    bg: '#004A99',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-16 w-auto md:h-[4.5rem]',
    logoTone: 'white',
  },
  {
    slug: 'thestarter',
    bg: '#FC5B3F',
    className: 'min-h-[7rem] md:min-h-[8rem]',
    logoClass: 'h-14 w-auto max-w-[15rem] md:h-[4.75rem] md:max-w-[18rem]',
    logoTone: 'white',
  },
  {
    slug: 'pcamp',
    bg: '#EEF1FF',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-8 w-auto max-w-[10rem] md:h-9',
  },
]
