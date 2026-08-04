import { Navigate, useParams } from 'react-router-dom'
import { GuiaArtigosPageContent } from '@/components/guia/GuiaArtigosPageContent'
import { GuiaEventosPageContent } from '@/components/guia/GuiaEventosPageContent'
import { GuiaLivrosPageContent } from '@/components/guia/GuiaLivrosPageContent'
import { GuiaNewslettersPageContent } from '@/components/guia/GuiaNewslettersPageContent'
import { GuiaPodcastsPageContent } from '@/components/guia/GuiaPodcastsPageContent'
import { GuiaVideosPageContent } from '@/components/guia/GuiaVideosPageContent'
import { GuiaPlaceholder } from '@/components/guia/GuiaPlaceholder'
import { getGuiaTipoById } from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'

export function GuiaTipoPage() {
  const { slug } = useParams<{ slug: string }>()
  const tipo = slug ? getGuiaTipoById(slug) : undefined

  if (!tipo) {
    return <Navigate to={guiaRoutes.home} replace />
  }

  if (slug === 'artigos') {
    return (
      <GuiaArtigosPageContent
        title={tipo.title}
        description={
          tipo.description ??
          'Artigos de design, produto e UX para ler no seu ritmo, curados pela comunidade VagasUX.'
        }
      />
    )
  }

  if (slug === 'livros') {
    return (
      <GuiaLivrosPageContent
        title={tipo.title}
        description={
          tipo.description ??
          'Referências essenciais de UX, UI, produto e design, curadas pela comunidade VagasUX.'
        }
      />
    )
  }

  if (slug === 'newsletters') {
    return (
      <GuiaNewslettersPageContent
        title={tipo.title}
        description={
          tipo.description ??
          'Newsletters de design, produto e UX para acompanhar no e-mail, curadas pela comunidade VagasUX.'
        }
      />
    )
  }

  if (slug === 'podcasts') {
    return (
      <GuiaPodcastsPageContent
        title={tipo.title}
        description={
          tipo.description ??
          'Podcasts de design, produto e UX para ouvir no dia a dia, curados pela comunidade VagasUX.'
        }
      />
    )
  }

  if (slug === 'videos') {
    return (
      <GuiaVideosPageContent
        title={tipo.title}
        description={
          tipo.description ??
          'Vídeos de design, produto e UX para assistir no seu ritmo, curados pela comunidade VagasUX.'
        }
      />
    )
  }

  if (slug === 'eventos') {
    return (
      <GuiaEventosPageContent
        title={tipo.title}
        description={
          tipo.description ??
          'Principais eventos anuais de UX, produto e tecnologia, curados pela comunidade VagasUX.'
        }
      />
    )
  }

  return (
    <GuiaPlaceholder title={tipo.title} description={tipo.description} />
  )
}
