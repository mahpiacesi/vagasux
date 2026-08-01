import { Link } from 'react-router-dom'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { cn } from '@/lib/utils'

export type GuiaBreadcrumbItem = {
  label: string
  to?: string
}

type GuiaBreadcrumbsProps = {
  items: GuiaBreadcrumbItem[]
  className?: string
}

export function GuiaBreadcrumbs({ items, className }: GuiaBreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm', className)}>
      <ol className="flex flex-wrap items-center gap-1.5 text-neutral-400">
        <li>
          <Link
            to={guiaRoutes.home}
            className="font-semibold text-brand-400 transition-colors hover:text-brand-500"
          >
            Guia
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-1.5">
              <span aria-hidden className="text-neutral-500/40">
                /
              </span>
              {item.to && !isLast ? (
                <Link
                  to={item.to}
                  className="font-semibold text-brand-400 transition-colors hover:text-brand-500"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  className="font-semibold text-neutral-500"
                  aria-current={isLast ? 'page' : undefined}
                >
                  {item.label}
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
