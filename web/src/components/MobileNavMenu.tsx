import type { Icon } from '@phosphor-icons/react'
import { Briefcase, CaretRight, List, Umbrella, X } from '@phosphor-icons/react'
import { Dialog } from 'radix-ui'
import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import {
  comunidadeNavItems,
  pathMatches,
  primaryNavLinks,
  vagasNavItems,
  type SiteNavLink,
} from '@/lib/siteNav'
import { routes } from '@/lib/siteLinks'
import { cn } from '@/lib/utils'
import { Logo } from './Logo'

const ctaClass =
  'inline-flex h-11 shrink-0 items-center whitespace-nowrap rounded-full bg-neutral-500 px-4 text-sm font-bold tracking-tight text-neutral-100 transition-colors hover:bg-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-300'

const iconButtonClass =
  'inline-flex size-11 shrink-0 items-center justify-center rounded-full border border-neutral-500/15 text-neutral-500 transition-colors hover:bg-brand-100/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400'

const rowClass =
  'flex w-full items-center gap-3 rounded-2xl px-2 py-3.5 text-left text-xl font-bold tracking-tight text-neutral-500 transition-colors hover:bg-brand-100/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400'

const sections: {
  id: 'comunidade' | 'vagas'
  label: string
  Icon: Icon
  items: SiteNavLink[]
}[] = [
  {
    id: 'comunidade',
    label: 'Comunidade',
    Icon: Umbrella,
    items: comunidadeNavItems,
  },
  {
    id: 'vagas',
    label: 'Vagas',
    Icon: Briefcase,
    items: vagasNavItems,
  },
]

const initialSections = { comunidade: true, vagas: true }

export function MobileNavMenu() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [openSections, setOpenSections] = useState(initialSections)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 768px)')
    function closeOnDesktop() {
      if (desktop.matches) setOpen(false)
    }
    desktop.addEventListener('change', closeOnDesktop)
    return () => desktop.removeEventListener('change', closeOnDesktop)
  }, [])

  function handleOpenChange(next: boolean) {
    setOpen(next)
    if (next) setOpenSections(initialSections)
  }

  function toggleSection(id: 'comunidade' | 'vagas') {
    setOpenSections((current) => ({ ...current, [id]: !current[id] }))
  }

  return (
    <div className="md:hidden">
      <Dialog.Root open={open} onOpenChange={handleOpenChange}>
        <div className="flex items-center gap-2">
          <Link to={routes.comunidade} className={ctaClass}>
            Faça parte
          </Link>
          <Dialog.Trigger className={iconButtonClass} aria-label="Abrir menu">
            <List size={22} weight="bold" aria-hidden />
          </Dialog.Trigger>
        </div>

        <Dialog.Portal>
          <Dialog.Content
            className="fixed inset-0 z-[110] flex h-dvh flex-col bg-complementary-100 outline-none data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0"
          >
            <div className="shrink-0 border-b border-neutral-500/10">
              <div className="mx-auto flex max-w-3xl items-center justify-between gap-3 px-5 py-4">
                <Dialog.Close asChild>
                  <Link
                    to={routes.home}
                    aria-label="VagasUX início"
                    className="shrink-0 transition-opacity hover:opacity-80"
                  >
                    <Logo />
                  </Link>
                </Dialog.Close>
                <div className="flex items-center gap-2">
                  <Dialog.Close asChild>
                    <Link to={routes.comunidade} className={ctaClass}>
                      Faça parte
                    </Link>
                  </Dialog.Close>
                  <Dialog.Close className={iconButtonClass} aria-label="Fechar menu">
                    <X size={22} weight="bold" aria-hidden />
                  </Dialog.Close>
                </div>
              </div>
            </div>

            <nav
              aria-label="Principal"
              className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-3 pt-2 pb-[max(2rem,env(safe-area-inset-bottom))]"
            >
              <Dialog.Title className="sr-only">Menu</Dialog.Title>
              <Dialog.Description className="sr-only">
                Navegação principal da VagasUX
              </Dialog.Description>

              {sections.map((section) => {
                const isOpen = openSections[section.id]
                const panelId = `mobile-nav-${section.id}`
                const sectionActive = section.items.some((item) =>
                  pathMatches(pathname, item.to),
                )

                return (
                  <div key={section.id} className="border-b border-neutral-500/10">
                    <button
                      type="button"
                      className={rowClass}
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => toggleSection(section.id)}
                    >
                      <section.Icon
                        size={22}
                        weight="bold"
                        className={cn(
                          'shrink-0',
                          sectionActive ? 'text-brand-500' : 'text-neutral-400',
                        )}
                        aria-hidden
                      />
                      <span className={cn('flex-1', sectionActive && 'text-brand-500')}>
                        {section.label}
                      </span>
                      <CaretRight
                        size={18}
                        weight="bold"
                        className={cn(
                          'shrink-0 text-neutral-400 transition-transform duration-200 motion-reduce:transition-none',
                          isOpen && 'rotate-90',
                        )}
                        aria-hidden
                      />
                    </button>
                    <div id={panelId} hidden={!isOpen} className="pb-2">
                        {section.items.map((item) => (
                          <NavLink
                            key={item.to}
                            to={item.to}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                              cn(
                                'block rounded-2xl py-3 pr-3 pl-11 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
                                isActive
                                  ? 'bg-brand-100 text-neutral-500'
                                  : 'text-neutral-400 hover:bg-brand-100/60 hover:text-neutral-500',
                              )
                            }
                          >
                            <span className="block text-lg font-bold tracking-tight">
                              {item.label}
                            </span>
                            {item.description ? (
                              <span className="mt-0.5 block text-sm font-medium text-neutral-400">
                                {item.description}
                              </span>
                            ) : null}
                          </NavLink>
                        ))}
                    </div>
                  </div>
                )
              })}

              {primaryNavLinks.map(({ label, to, Icon }) => (
                <div key={to} className="border-b border-neutral-500/10">
                  <NavLink
                    to={to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) => cn(rowClass, isActive && 'text-brand-500')}
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          size={22}
                          weight="bold"
                          className={cn(
                            'shrink-0',
                            isActive ? 'text-brand-500' : 'text-neutral-400',
                          )}
                          aria-hidden
                        />
                        <span className="flex-1">{label}</span>
                      </>
                    )}
                  </NavLink>
                </div>
              ))}
            </nav>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}
