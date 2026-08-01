import { CaretDown } from '@phosphor-icons/react'
import { GuiaGlossarioEntryArticle } from '@/components/guia/glossario/GuiaGlossarioEntryArticle'
import type { GuiaGlossarioCategory, GuiaGlossarioEntry } from '@/data/guiaGlossario'
import { cn } from '@/lib/utils'

type GuiaGlossarioCategoryAccordionProps = {
  category: GuiaGlossarioCategory
  entries: GuiaGlossarioEntry[]
  isOpen: boolean
  onToggle: () => void
  onTermLinkClick: (termId: string) => void
}

export function GuiaGlossarioCategoryAccordion({
  category,
  entries,
  isOpen,
  onToggle,
  onTermLinkClick,
}: GuiaGlossarioCategoryAccordionProps) {
  const panelId = `glossario-categoria-${category.id}`

  if (entries.length === 0) return null

  return (
    <section className="rounded-2xl border border-neutral-500/10 bg-neutral-100">
      <h2>
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
        >
          <span className="flex items-center gap-3">
            <span className="text-xl" aria-hidden>
              {category.emoji}
            </span>
            <span className="text-lg font-black text-neutral-500">
              {category.title}
            </span>
            <span className="text-sm font-semibold text-neutral-400">
              ({entries.length})
            </span>
          </span>
          <CaretDown
            size={20}
            weight="bold"
            aria-hidden
            className={cn(
              'shrink-0 text-brand-400 transition-transform',
              isOpen && 'rotate-180',
            )}
          />
        </button>
      </h2>

      {isOpen ? (
        <div id={panelId} className="border-t border-neutral-500/10 px-5 pb-6 md:px-6 md:pb-8">
          <nav
            aria-label={`Termos em ${category.title}`}
            className="mt-5 flex flex-wrap gap-2"
          >
            {entries.map((entry) => (
              <a
                key={entry.id}
                href={`#${entry.id}`}
                onClick={() => onTermLinkClick(entry.id)}
                className="inline-flex rounded-full border border-neutral-500/10 bg-brand-100/30 px-3 py-1.5 text-xs font-bold text-neutral-500 transition-colors hover:border-brand-300 hover:bg-brand-100/60 hover:text-brand-500 md:text-sm"
              >
                {entry.term}
              </a>
            ))}
          </nav>

          <div className="mt-8 space-y-12">
            {entries.map((entry) => (
              <GuiaGlossarioEntryArticle key={entry.id} entry={entry} />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  )
}
