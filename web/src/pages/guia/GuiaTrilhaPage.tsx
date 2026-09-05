import { Navigate, useParams } from 'react-router-dom'
import { GuiaPlaceholder } from '@/components/guia/GuiaPlaceholder'
import { GuiaTrilhaEntenderOBasicoPageContent } from '@/components/guia/GuiaTrilhaEntenderOBasicoPageContent'
import { GuiaTrilhaPortfolioPageContent } from '@/components/guia/GuiaTrilhaPortfolioPageContent'
import { GuiaTrilhaPrimeiraVagaPageContent } from '@/components/guia/GuiaTrilhaPrimeiraVagaPageContent'
import { GuiaTrilhaVoluntariadoPageContent } from '@/components/guia/GuiaTrilhaVoluntariadoPageContent'
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
  if (trilha.id === 'primeira-vaga') {
    return <GuiaTrilhaPrimeiraVagaPageContent />
  }
  if (trilha.id === 'portfolio') {
    return <GuiaTrilhaPortfolioPageContent />
  }
  if (trilha.id === 'voluntariado') {
    return <GuiaTrilhaVoluntariadoPageContent />
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
