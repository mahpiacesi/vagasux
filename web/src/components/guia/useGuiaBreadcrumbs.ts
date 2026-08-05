import { useMemo } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import type { GuiaBreadcrumbItem } from '@/components/guia/GuiaBreadcrumbs'
import {
  getGuiaTemaById,
  getGuiaTipoById,
  getGuiaTrilhaById,
} from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function useGuiaBreadcrumbs(): GuiaBreadcrumbItem[] {
  const { pathname } = useLocation()
  const { slug } = useParams<{ slug: string }>()

  return useMemo(() => {
    if (pathname === guiaRoutes.faq) {
      return [{ label: 'FAQ' }]
    }

    if (pathname === guiaRoutes.glossario) {
      return [{ label: 'Glossário' }]
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

    if (pathname === guiaRoutes.cursos) {
      return [
        { label: 'Cursos', to: guiaRoutes.homeCursos },
        { label: 'Diretório' },
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
