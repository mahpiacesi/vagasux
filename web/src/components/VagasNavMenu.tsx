import { Briefcase, CaretDown } from '@phosphor-icons/react'
import { useRef, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { pathMatches, vagasNavItems } from '@/lib/siteNav'

const navIconProps = { weight: 'bold' as const }

const triggerClass =
  'inline-flex items-center gap-1.5 text-sm font-semibold tracking-tight text-neutral-400 transition-colors hover:text-neutral-500'

const activeTriggerClass = 'text-neutral-500'

const itemClass =
  'block rounded-xl px-4 py-3 transition-colors hover:bg-brand-100/80 focus-visible:bg-brand-100/80 focus-visible:outline-none'

const CLOSE_DELAY_MS = 120

export function VagasNavMenu() {
  const { pathname } = useLocation()
  const isVagasActive = vagasNavItems.some((item) => pathMatches(pathname, item.to))
  const [open, setOpen] = useState(false)
  const closeTimer = useRef<number | null>(null)

  function clearCloseTimer() {
    if (closeTimer.current != null) {
      window.clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }

  function openMenu() {
    clearCloseTimer()
    setOpen(true)
  }

  function scheduleClose() {
    clearCloseTimer()
    closeTimer.current = window.setTimeout(() => setOpen(false), CLOSE_DELAY_MS)
  }

  return (
    <div
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
          scheduleClose()
        }
      }}
    >
      <button
        type="button"
        className={`relative ${triggerClass} ${isVagasActive || open ? activeTriggerClass : ''}`}
        aria-haspopup="true"
        aria-expanded={open}
      >
        <Briefcase
          size={16}
          {...navIconProps}
          className="shrink-0 translate-y-0.5"
          aria-hidden
        />
        Vagas
        <CaretDown
          size={14}
          {...navIconProps}
          className={`shrink-0 opacity-70 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
        {isVagasActive ? (
          <span className="absolute inset-x-0 -bottom-1 h-[3px] bg-complementary-300" />
        ) : null}
      </button>

      <div
        className={`absolute top-full left-1/2 z-50 min-w-[17rem] -translate-x-1/2 pt-2 transition-[opacity,visibility] duration-150 ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <div className="rounded-2xl border border-complementary-200/80 bg-complementary-100 p-2 shadow-[0_20px_48px_-24px_rgb(7_0_58_/_0.4)]">
          {vagasNavItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `${itemClass} ${isActive ? 'bg-brand-100/90' : ''}`
              }
              onClick={() => setOpen(false)}
            >
              <span className="block text-sm font-bold text-neutral-500">{item.label}</span>
              {item.description ? (
                <span className="mt-0.5 block text-xs leading-snug text-neutral-400/90">
                  {item.description}
                </span>
              ) : null}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  )
}
