import type { Icon } from '@phosphor-icons/react'
import { BookOpen, Handshake } from '@phosphor-icons/react'
import { routes } from './siteLinks'

export type SiteNavLink = {
  label: string
  to: string
  description?: string
}

export const comunidadeNavItems: SiteNavLink[] = [
  { label: 'Sobre', to: routes.sobre },
  { label: 'Como participar', to: routes.comunidade },
  { label: 'Guilda do Vaguiner', to: routes.guilda },
  { label: 'Mentorias', to: routes.mentoria },
  { label: 'Voluntariado', to: routes.voluntariado },
]

export const vagasNavItems: SiteNavLink[] = [
  {
    label: 'Curadoria',
    to: routes.curadoria,
    description: 'Curadoria de vagas Júnior, Trainee e Estágio',
  },
  {
    label: 'Oportunidades',
    to: routes.oportunidades,
    description: 'Vagas de diversos níveis',
  },
]

export const primaryNavLinks: { label: string; to: string; Icon: Icon }[] = [
  { label: 'Guia', to: routes.guia, Icon: BookOpen },
  { label: 'Parcerias', to: routes.parcerias, Icon: Handshake },
]

export function pathMatches(pathname: string, to: string) {
  return pathname === to || pathname.startsWith(`${to}/`)
}
