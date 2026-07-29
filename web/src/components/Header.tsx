import { BookOpen, Handshake } from '@phosphor-icons/react'
import { Link, NavLink } from 'react-router-dom'
import { routes, superSite } from '@/lib/siteLinks'
import { Logo } from './Logo'
import { VagasNavMenu } from './VagasNavMenu'

const navIconProps = { size: 16, weight: 'bold' as const }

const linkClass =
  'relative inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-neutral-400 transition-colors hover:text-neutral-500'

const ctaClass =
  'inline-flex items-center rounded-full bg-neutral-500 px-4 py-2 text-sm font-bold tracking-tight text-neutral-100 transition-colors hover:bg-brand-500'

const ctaClassMobile =
  'rounded-full bg-neutral-500 px-3 py-1.5 text-xs font-bold text-neutral-100'

const externalNavLinks = [
  { label: 'Guia', href: superSite.guia, Icon: BookOpen },
  { label: 'Parcerias', href: superSite.parcerias, Icon: Handshake },
] as const

function ExternalNavLink({
  label,
  href,
  Icon,
}: (typeof externalNavLinks)[number]) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={linkClass}
    >
      <Icon {...navIconProps} className="shrink-0" aria-hidden />
      {label}
    </a>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-500/10 bg-neutral-100/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 md:max-w-4xl md:px-6">
        <NavLink
          to={routes.home}
          aria-label="VagasUX — início"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Logo />
        </NavLink>

        <nav
          aria-label="Principal"
          className="hidden items-center gap-6 md:flex"
        >
          <VagasNavMenu />
          {externalNavLinks.map((item) => (
            <ExternalNavLink key={item.href} {...item} />
          ))}
          <Link to={routes.comunidade} className={ctaClass}>
            Faça parte
          </Link>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <VagasNavMenu variant="mobile" />
          <Link to={routes.comunidade} className={ctaClassMobile}>
            Faça parte
          </Link>
        </div>
      </div>
    </header>
  )
}
