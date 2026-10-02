import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export type TermsTocItem = {
  id: string
  label: string
}

const linkClass =
  'block text-sm leading-snug text-neutral-400 transition-colors hover:text-neutral-500'

export function TermsOnThisPage({
  items,
  placement,
}: {
  items: readonly TermsTocItem[]
  placement: 'inline' | 'rail'
}) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '')

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((heading): heading is HTMLElement => heading !== null)

    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        const next = visible[0]?.target.id
        if (next) setActiveId(next)
      },
      { rootMargin: '-96px 0px -65% 0px', threshold: [0, 1] },
    )

    for (const heading of headings) observer.observe(heading)
    return () => observer.disconnect()
  }, [items])

  return (
    <nav
      aria-label="Nesta página"
      className={cn(
        placement === 'inline' && 'min-[1400px]:hidden',
        placement === 'rail' && 'sticky top-24',
      )}
    >
      <p className="text-xs font-medium text-neutral-400">Nesta página</p>
      <ul className="mt-3 space-y-2.5">
        {items.map((item) => {
          const active = item.id === activeId
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                aria-current={active ? 'location' : undefined}
                className={cn(
                  linkClass,
                  active && 'font-semibold text-neutral-500',
                )}
                onClick={() => setActiveId(item.id)}
              >
                {item.label}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
