import { Navigate, useParams } from 'react-router-dom'
import { GuiaPlaceholder } from '@/components/guia/GuiaPlaceholder'
import { GuiaTemaUxPageContent } from '@/components/guia/GuiaTemaUxPageContent'
import { getGuiaTemaById } from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTemaPage() {
  const { slug } = useParams<{ slug: string }>()
  const tema = slug ? getGuiaTemaById(slug) : undefined

  if (!tema) {
    return <Navigate to={guiaRoutes.home} replace />
  }

  if (tema.id === 'ux') {
    return <GuiaTemaUxPageContent />
  }

  return <GuiaPlaceholder title={tema.title} />
}
