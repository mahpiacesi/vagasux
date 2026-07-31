/** Curated home grid: slug + layout. Logos come from Supabase via n8n sync. */
export type HomeFeaturedPartner = {
  slug: string
  bg: string
  className: string
  logoClass: string
}

export const homeFeaturedPartners: HomeFeaturedPartner[] = [
  {
    slug: 'alura-fiap-pm3',
    bg: '#052FD3',
    className: 'col-span-2 min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'h-8 w-auto md:h-10',
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
  },
  {
    slug: 'thestarter',
    bg: '#0A0707',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-6 w-auto max-w-[9rem] md:h-7',
  },
  {
    slug: 'uxco',
    bg: '#1E1B4B',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-8 w-auto max-w-[10rem] md:h-9',
  },
]
