import { Quotes } from '@phosphor-icons/react'
import type { GuildaTestimonial } from '@/data/guilda'
import { cn } from '@/lib/utils'

const toneStyles: Record<
  GuildaTestimonial['tone'],
  { shell: string; badge: string; quote: string }
> = {
  cream: {
    shell:
      'border border-neutral-500/10 bg-gradient-to-br from-neutral-100 via-neutral-100 to-brand-100/50 text-neutral-500 shadow-[0_18px_40px_-24px_rgb(7_0_58_/_0.28)]',
    badge: 'bg-brand-100 text-brand-500',
    quote: 'text-brand-400/20',
  },
  indigo: {
    shell:
      'border border-brand-200/60 bg-gradient-to-br from-brand-100 via-brand-100 to-brand-200/40 text-brand-500 shadow-[0_18px_40px_-24px_rgb(36_46_144_/_0.35)]',
    badge: 'bg-white/70 text-brand-500',
    quote: 'text-brand-500/15',
  },
  mustard: {
    shell:
      'border border-complementary-300/50 bg-gradient-to-br from-complementary-100 via-complementary-200 to-complementary-300/60 text-neutral-500 shadow-[0_18px_40px_-24px_rgb(246_209_110_/_0.45)]',
    badge: 'bg-neutral-500/10 text-neutral-500',
    quote: 'text-neutral-500/12',
  },
  navy: {
    shell:
      'border border-neutral-500 bg-gradient-to-br from-neutral-500 via-neutral-500 to-brand-500 text-neutral-100 shadow-[0_22px_48px_-24px_rgb(7_0_58_/_0.55)]',
    badge: 'bg-complementary-300/20 text-complementary-300',
    quote: 'text-complementary-300/15',
  },
  lilac: {
    shell:
      'border border-brand-200/50 bg-gradient-to-br from-brand-100 via-brand-200/70 to-brand-100 text-brand-500 shadow-[0_18px_40px_-24px_rgb(93_107_246_/_0.3)]',
    badge: 'bg-white/65 text-brand-500',
    quote: 'text-brand-500/15',
  },
  soft: {
    shell:
      'border border-complementary-300/40 bg-gradient-to-br from-complementary-100 via-neutral-100 to-brand-100/40 text-neutral-500 shadow-[0_18px_40px_-24px_rgb(7_0_58_/_0.22)]',
    badge: 'bg-complementary-200 text-complementary-500',
    quote: 'text-brand-400/18',
  },
}

function QuoteCard({
  item,
  tilt,
}: {
  item: GuildaTestimonial
  tilt: 'left' | 'right' | 'none'
}) {
  const styles = toneStyles[item.tone]

  return (
    <article
      className={cn(
        'guilda-quote-card relative w-[16.5rem] shrink-0 overflow-hidden rounded-2xl p-4 backdrop-blur-sm transition-[transform,box-shadow] duration-300 md:w-[18rem] md:p-5',
        styles.shell,
        tilt === 'left' && '-rotate-1',
        tilt === 'right' && 'rotate-1',
      )}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-12 bg-gradient-to-b from-white/25 to-transparent"
        aria-hidden
      />
      <Quotes
        size={22}
        weight="fill"
        className={cn('absolute top-3.5 right-3.5', styles.quote)}
        aria-hidden
      />
      <p className="relative line-clamp-4 text-[0.8125rem] leading-relaxed md:text-sm">
        “{item.quote}”
      </p>
      <footer className="relative mt-4 flex items-center gap-2">
        <span
          className={cn(
            'rounded-md px-2 py-0.5 text-[0.62rem] font-bold tracking-wide uppercase',
            styles.badge,
          )}
        >
          {item.name}
        </span>
      </footer>
    </article>
  )
}

function QuoteLane({
  items,
  reverse = false,
}: {
  items: readonly GuildaTestimonial[]
  reverse?: boolean
}) {
  const loop = [...items, ...items]

  return (
    <div
      className={cn(
        'guilda-quote-lane overflow-hidden py-1',
        reverse && 'guilda-quote-lane--reverse',
      )}
    >
      <div className="guilda-quote-lane-track flex w-max gap-3 md:gap-4">
        {loop.map((item, index) => (
          <QuoteCard
            key={`${item.id}-${index}`}
            item={item}
            tilt={index % 3 === 0 ? 'left' : index % 3 === 1 ? 'right' : 'none'}
          />
        ))}
      </div>
    </div>
  )
}

export function GuildaTestimonials({
  items,
}: {
  items: readonly GuildaTestimonial[]
}) {
  const topRow = items.filter((_, index) => index % 2 === 0)
  const bottomRow = items.filter((_, index) => index % 2 === 1)

  return (
    <div
      className="guilda-quote-lanes relative mt-12 space-y-3 md:mt-14 md:space-y-4"
      aria-label="Depoimentos de membros da Guilda"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-complementary-100/90 to-transparent md:w-16"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-neutral-100 to-transparent md:w-16"
        aria-hidden
      />

      <QuoteLane items={topRow} />
      <QuoteLane items={bottomRow} reverse />
    </div>
  )
}
