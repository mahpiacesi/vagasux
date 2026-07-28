import { NavLink } from 'react-router-dom'
import { routes, superSite } from '@/lib/siteLinks'
import { Logo } from './Logo'

const linkClass =
  'relative text-sm font-semibold tracking-tight text-neutral-400 transition-colors hover:text-neutral-500'

const activeClass =
  "text-neutral-500 after:absolute after:inset-x-0 after:-bottom-1 after:h-[3px] after:bg-complementary-300 after:content-['']"

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
          <NavLink
            to={routes.iniciantes}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            Iniciantes
          </NavLink>
          <NavLink
            to={routes.oportunidades}
            className={({ isActive }) =>
              `${linkClass} ${isActive ? activeClass : ''}`
            }
          >
            Oportunidades
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
            href={superSite.comunidade}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            Comunidade
          </a>
          <a
            href={superSite.publicar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-neutral-500 px-4 py-2 text-sm font-bold tracking-tight text-neutral-100 transition-colors hover:bg-brand-500"
          >
            Publicar
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <NavLink
            to={routes.oportunidades}
            className="rounded-full border border-neutral-200 bg-neutral-100 px-3 py-1.5 text-xs font-bold text-neutral-500"
          >
            Vagas
          </NavLink>
          <a
            href={superSite.publicar}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-neutral-500 px-3 py-1.5 text-xs font-bold text-neutral-100"
          >
            Publicar
          </a>
        </div>
      </div>
    </header>
  )
}
