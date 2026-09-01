import { Navigate, useParams } from 'react-router-dom'
import { GuiaPlaceholder } from '@/components/guia/GuiaPlaceholder'
import { GuiaTrilhaEntenderOBasicoPageContent } from '@/components/guia/GuiaTrilhaEntenderOBasicoPageContent'
import { getGuiaTrilhaById } from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTrilhaPage() {
  const { slug } = useParams<{ slug: string }>()
  const trilha = slug ? getGuiaTrilhaById(slug) : undefined

  if (!trilha || trilha.id === 'explorar') {
    return <Navigate to={guiaRoutes.home} replace />
  }

  if (trilha.id === 'entender-o-basico') {
    return <GuiaTrilhaEntenderOBasicoPageContent />
  }

  return (
    <GuiaPlaceholder
      title={trilha.title}
      description={trilha.description}
      level={trilha.level}
      duration={trilha.duration}
      contentCount={trilha.contentCount}
    />
  )
}
