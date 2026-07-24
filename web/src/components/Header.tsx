import { NavLink } from 'react-router-dom'
import { routes, superSite } from '@/lib/siteLinks'
import { Logo } from './Logo'

const linkClass =
  'text-sm font-semibold text-neutral-400 transition-colors hover:text-brand-500 focus-visible:text-brand-500 focus-visible:outline-none'

const activeClass = 'text-brand-500'

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-500/10 bg-neutral-100/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-5 py-4 md:max-w-4xl md:px-6">
        <NavLink to={routes.home} aria-label="VagasUX — início" className="shrink-0">
          <Logo />
        </NavLink>

        <nav
          aria-label="Principal"
          className="flex flex-wrap items-center justify-end gap-x-4 gap-y-2 md:gap-x-5"
        >
          <NavLink
            to={routes.oportunidades}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            Oportunidades
          </NavLink>
          <NavLink
            to={routes.comunidade}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            Comunidade
          </NavLink>
          <a
            href={superSite.guia}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Guia
          </a>
          <a
            href={superSite.publicar}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Publicar vaga
          </a>
        </nav>
      </div>
    </header>
  )
}
