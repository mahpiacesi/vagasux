import { CaretDown } from '@phosphor-icons/react'
import { GuiaFaqItemArticle } from '@/components/guia/faq/GuiaFaqItemArticle'
import {
  groupGuiaFaqItemsBySubgroup,
  type GuiaFaqCategory,
  type GuiaFaqItem,
} from '@/data/guiaFaq'
import { cn } from '@/lib/utils'

type GuiaFaqCategoryAccordionProps = {
  category: GuiaFaqCategory
  items: GuiaFaqItem[]
  isOpen: boolean
  onToggle: () => void
}

export function GuiaFaqCategoryAccordion({
  category,
  items,
  isOpen,
  onToggle,
}: GuiaFaqCategoryAccordionProps) {
  const panelId = `faq-categoria-${category.id}`
  const hasItems = items.length > 0

  const subgroupGroups = groupGuiaFaqItemsBySubgroup(items, category.id)

  return (
    <section
      className={cn(
        'rounded-2xl border border-neutral-500/10 bg-neutral-100',
        !hasItems && 'opacity-70',
      )}
    >
      <h2
        className={cn(
          isOpen &&
            'sticky top-[4.5rem] z-30 rounded-t-2xl border-b border-neutral-500/10 bg-neutral-100/95 backdrop-blur-md',
        )}
      >
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
              ({items.length})
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
        <div id={panelId} className="px-5 pb-6 md:px-6 md:pb-8">
          {hasItems ? (
            <div className="mt-5 space-y-10">
              {subgroupGroups.map((group) => (
                  <div key={group.subgroupId ?? 'outros'}>
                    {group.label ? (
                      <h3 className="text-sm font-bold tracking-[0.12em] text-neutral-400 uppercase">
                        {group.label}
                      </h3>
                    ) : null}
                    <div className={cn('space-y-8', group.label && 'mt-5')}>
                      {group.items.map((item) => (
                        <GuiaFaqItemArticle key={item.id} item={item} />
                      ))}
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p className="mt-5 text-sm text-neutral-400">
              Nenhuma pergunta nesta categoria ainda.
            </p>
          )}
        </div>
      ) : null}
    </section>
  )
}
