import type { GuildaTestimonial } from '@/data/guilda'
import { cn } from '@/lib/utils'

const toneClass: Record<GuildaTestimonial['tone'], string> = {
  cream: 'border border-neutral-500/10 bg-neutral-100 text-neutral-500',
  indigo: 'bg-brand-100 text-brand-500',
  mustard: 'bg-complementary-200 text-neutral-500',
  navy: 'bg-neutral-500 text-neutral-100',
  lilac: 'bg-brand-200/80 text-brand-500',
  soft: 'border border-complementary-300/50 bg-complementary-100 text-neutral-500',
}

export function GuildaTestimonialRail({
  items,
}: {
  items: readonly GuildaTestimonial[]
}) {
  return (
    <div className="guilda-rail-mask relative -mx-5 md:-mx-6">
      <div
        className="guilda-rail flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 md:gap-5 md:px-6"
        aria-label="Depoimentos de membros da Guilda"
      >
        {items.map((item, index) => (
          <article
            key={item.id}
            className={cn(
              'guilda-rail-card snap-center shrink-0',
              'flex min-h-[15rem] w-[min(82vw,22rem)] flex-col justify-between rounded-2xl p-6 md:w-[24rem] md:p-7',
              toneClass[item.tone],
            )}
            style={{ animationDelay: `${index * 80}ms` }}
          >
            <p className="text-sm leading-relaxed md:text-[0.95rem]">
              “{item.quote}”
            </p>
            <p className="mt-6 text-sm font-black tracking-tight">{item.name}</p>
          </article>
        ))}
      </div>
    </div>
  )
}
