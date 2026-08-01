import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import {
  getGuiaTemaById,
  getGuiaTipoById,
  getGuiaTrilhaById,
} from '@/data/guia'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes } from '@/lib/siteLinks'

const titles: Record<string, string> = {
  [routes.home]: 'VagasUX · Curadoria de conteúdos e vagas em UX',
  [routes.comunidade]: 'VagasUX · Comunidade',
  [routes.guilda]: 'VagasUX · Guilda do Vaguiner',
  [routes.voluntariado]: 'VagasUX · Voluntariado',
  [routes.codigoDeConduta]: 'VagasUX · Código de conduta',
  [routes.termosEPoliticas]: 'VagasUX · Termos e Políticas',
  [routes.oportunidades]: 'VagasUX · Mural de vagas',
  [routes.curadoria]: 'VagasUX · Curadoria de vagas para iniciantes',
  [routes.parcerias]: 'VagasUX · Parcerias',
  [routes.guia]: 'VagasUX · Guia do Product Designer',
  [guiaRoutes.faq]: 'VagasUX · Guia · FAQ do Product Designer',
  [guiaRoutes.glossario]: 'VagasUX · Guia · Glossário do Product Designer',
}

function resolveGuiaTitle(pathname: string): string | undefined {
  const trilhaMatch = pathname.match(/^\/guia\/trilhas\/([^/]+)$/)
  if (trilhaMatch) {
    const trilha = getGuiaTrilhaById(trilhaMatch[1])
    return trilha
      ? `VagasUX · Guia · ${trilha.title}`
      : 'VagasUX · Guia do Product Designer'
  }

  const temaMatch = pathname.match(/^\/guia\/tema\/([^/]+)$/)
  if (temaMatch) {
    const tema = getGuiaTemaById(temaMatch[1])
    return tema
      ? `VagasUX · Guia · ${tema.title}`
      : 'VagasUX · Guia do Product Designer'
  }

  const tipoMatch = pathname.match(/^\/guia\/tipo\/([^/]+)$/)
  if (tipoMatch) {
    const tipo = getGuiaTipoById(tipoMatch[1])
    return tipo
      ? `VagasUX · Guia · ${tipo.title}`
      : 'VagasUX · Guia do Product Designer'
  }

  return titles[pathname]
}

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = resolveGuiaTitle(pathname) ?? 'VagasUX'
  }, [pathname])

  return null
}
