import { Navigate, useParams } from 'react-router-dom'
import { GuiaGlossarioTermView } from '@/components/guia/glossario/GuiaGlossarioTermView'
import { getGuiaGlossarioEntryById } from '@/data/guiaGlossario'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaGlossarioTermPage() {
  const { slug } = useParams<{ slug: string }>()
  const entry = slug ? getGuiaGlossarioEntryById(slug) : undefined

  if (!entry) {
    return <Navigate to={guiaRoutes.glossario} replace />
  }

  return <GuiaGlossarioTermView entry={entry} />
}
