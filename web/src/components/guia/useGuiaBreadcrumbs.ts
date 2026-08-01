import { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import type { GuiaBreadcrumbItem } from '@/components/guia/GuiaBreadcrumbs'
import {
  getGuiaTemaById,
  getGuiaTipoById,
  getGuiaTrilhaById,
} from '@/data/guia'
import { getGuiaGlossarioEntryById } from '@/data/guiaGlossario'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function useGuiaBreadcrumbs(): GuiaBreadcrumbItem[] {
  const { pathname } = useLocation()
  const { slug } = useParams<{ slug: string }>()

  return useMemo(() => {
    if (pathname === guiaRoutes.faq) {
      return [{ label: 'Começar' }, { label: 'FAQ' }]
    }

    if (pathname === guiaRoutes.glossario) {
      return [{ label: 'Começar' }, { label: 'Glossário' }]
    }

    if (pathname.startsWith('/guia/comecar/glossario/')) {
      const entryId = pathname.replace('/guia/comecar/glossario/', '')
      const entry = getGuiaGlossarioEntryById(entryId)
      return [
        { label: 'Glossário', to: guiaRoutes.glossario },
        { label: entry?.term ?? entryId },
      ]
    }

    if (!slug) return []

    if (pathname.startsWith('/guia/trilhas/')) {
      const trilha = getGuiaTrilhaById(slug)
      return [
        { label: 'Trilhas', to: `${guiaRoutes.home}#trilhas` },
        { label: trilha?.title ?? slug },
      ]
    }

    if (pathname.startsWith('/guia/tema/')) {
      const tema = getGuiaTemaById(slug)
      return [
        { label: 'Temas', to: `${guiaRoutes.home}#temas` },
        { label: tema?.title ?? slug },
      ]
    }

    if (pathname.startsWith('/guia/tipo/')) {
      const tipo = getGuiaTipoById(slug)
      return [
        { label: 'Tipos', to: `${guiaRoutes.home}#tipos` },
        { label: tipo?.title ?? slug },
      ]
    }

    return []
  }, [pathname, slug])
}
