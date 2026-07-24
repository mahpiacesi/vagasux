import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routes } from '@/lib/siteLinks'

const titles: Record<string, string> = {
  [routes.home]: 'VagasUX — Curadoria de conteúdos e vagas em UX',
  [routes.oportunidades]: 'VagasUX — Mural de vagas',
  [routes.comunidade]: 'VagasUX — A comunidade',
  [routes.quemOrganiza]: 'VagasUX — Quem organiza',
  [routes.parcerias]: 'VagasUX — Parcerias',
  [routes.apoie]: 'VagasUX — Apoie a iniciativa',
  [routes.codigoDeConduta]: 'VagasUX — Código de conduta',
}

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] ?? 'VagasUX'
  }, [pathname])

  return null
}
