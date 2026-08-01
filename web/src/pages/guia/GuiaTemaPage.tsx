import { Navigate, useParams } from 'react-router-dom'
import { GuiaPlaceholder } from '@/components/guia/GuiaPlaceholder'
import { getGuiaTemaById } from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTemaPage() {
  const { slug } = useParams<{ slug: string }>()
  const tema = slug ? getGuiaTemaById(slug) : undefined

  if (!tema) {
    return <Navigate to={guiaRoutes.home} replace />
  }

  return <GuiaPlaceholder title={tema.title} />
}
