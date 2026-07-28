import { BookOpen, Umbrella } from 'lucide-react'
import { NavLink } from 'react-router-dom'
import { routes, superSite } from '@/lib/siteLinks'
import { Logo } from './Logo'
import { VagasNavMenu } from './VagasNavMenu'

const linkClass =
  'relative inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-neutral-400 transition-colors hover:text-neutral-500'

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
          <a
            href={superSite.comunidade}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <Umbrella className="size-4 shrink-0" aria-hidden />
            Comunidade
          </a>
          <VagasNavMenu />
          <a
            href={superSite.guia}
            target="_blank"
            rel="noopener noreferrer"
            className={linkClass}
          >
            <BookOpen className="size-4 shrink-0" aria-hidden />
            Guia
          </a>
          <a
            href={superSite.publicar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-neutral-500 px-4 py-2 text-sm font-bold tracking-tight text-neutral-100 transition-colors hover:bg-brand-500"
          >
            <span aria-hidden>🌂</span>
            Publicar
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <VagasNavMenu variant="mobile" />
          <a
            href={superSite.publicar}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-neutral-500 px-3 py-1.5 text-xs font-bold text-neutral-100"
          >
            <span aria-hidden>🌂</span>
            Publicar
          </a>
        </div>
      </div>
    </header>
  )
}
