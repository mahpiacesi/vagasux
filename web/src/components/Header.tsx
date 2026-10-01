import { Link, NavLink } from 'react-router-dom'
import { primaryNavLinks } from '@/lib/siteNav'
import { routes } from '@/lib/siteLinks'
import { ComunidadeNavMenu } from './ComunidadeNavMenu'
import { Logo } from './Logo'
import { MobileNavMenu } from './MobileNavMenu'
import { VagasNavMenu } from './VagasNavMenu'

const navIconProps = { size: 16, weight: 'bold' as const }

const linkClass =
  'relative inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-neutral-400 transition-colors hover:text-neutral-500'

const ctaClass =
  'inline-flex items-center rounded-full bg-neutral-500 px-4 py-2 text-sm font-bold tracking-tight text-neutral-100 transition-colors hover:bg-brand-500'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-500/10 bg-neutral-100/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 md:max-w-4xl md:px-6">
        <NavLink
          to={routes.home}
          aria-label="VagasUX início"
          className="shrink-0 transition-opacity hover:opacity-80"
        >
          <Logo />
        </NavLink>

        <nav aria-label="Principal" className="hidden items-center gap-6 md:flex">
          <ComunidadeNavMenu />
          <VagasNavMenu />
          {primaryNavLinks.map(({ label, to, Icon }) => (
            <Link key={to} to={to} className={linkClass}>
              <Icon {...navIconProps} className="shrink-0" aria-hidden />
              {label}
            </Link>
          ))}
          <Link to={routes.comunidade} className={ctaClass}>
            Faça parte
          </Link>
        </nav>

        <MobileNavMenu />
      </div>
    </header>
  )
}
