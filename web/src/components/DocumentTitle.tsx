import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { routes } from '@/lib/siteLinks'

const titles: Record<string, string> = {
  [routes.home]: 'VagasUX — Curadoria de conteúdos e vagas em UX',
  [routes.oportunidades]: 'VagasUX — Mural de vagas',
}

export function DocumentTitle() {
  const { pathname } = useLocation()

  useEffect(() => {
    document.title = titles[pathname] ?? 'VagasUX'
  }, [pathname])

  return null
}
