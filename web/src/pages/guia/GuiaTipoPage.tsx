import { Navigate, useParams } from 'react-router-dom'
import { GuiaPlaceholder } from '@/components/guia/GuiaPlaceholder'
import { getGuiaTipoById } from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTipoPage() {
  const { slug } = useParams<{ slug: string }>()
  const tipo = slug ? getGuiaTipoById(slug) : undefined

  if (!tipo) {
    return <Navigate to={guiaRoutes.home} replace />
  }

  return (
    <GuiaPlaceholder title={tipo.title} description={tipo.description} />
  )
}
