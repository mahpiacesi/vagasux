import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes, superSite } from '@/lib/siteLinks'

/**
 * Marcos da história na página Sobre.
 * Adicione, remova ou reordene objetos neste array. Sem conteúdo inventado.
 */
export type SobreMilestone = {
  id: string
  period: string
  title: string
  description: string
  image?: string
  imageAlt?: string
  icon?: string
}

/**
 * Fotos do mural da comunidade na página Sobre.
 * Adicione, remova ou reordene objetos neste array. Sem fotos ou legendas inventadas.
 */
export type SobreGalleryItem = {
  id: string
  image: string
  alt: string
  caption?: string
  title?: string
  date?: string
  location?: string
  href?: string
  /** Controls masonry span on desktop. */
  span?: 'normal' | 'wide' | 'tall' | 'featured'
}

export const sobreMilestones: SobreMilestone[] = []

export const sobreGallery: SobreGalleryItem[] = []

export const sobreLinks = {
  comunidade: routes.comunidade,
  voluntariado: routes.voluntariado,
  mentoria: routes.mentoria,
  feedbacks: guiaRoutes.cursos,
  panorama: superSite.panorama,
  founder: 'https://avely.me/mahpiacesi',
} as const
