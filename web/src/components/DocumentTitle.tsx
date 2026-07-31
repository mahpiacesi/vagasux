import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
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
}

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] ?? 'VagasUX'
  }, [pathname])

  return null
}
