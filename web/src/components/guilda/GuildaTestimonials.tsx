import { Quotes } from '@phosphor-icons/react'
import type { GuildaTestimonial } from '@/data/guilda'
import { ScrollReveal } from '@/components/guilda/ScrollReveal'
import { cn } from '@/lib/utils'

const toneClass: Record<GuildaTestimonial['tone'], string> = {
  cream: 'border border-neutral-500/10 bg-neutral-100 text-neutral-500',
  indigo: 'bg-brand-100 text-brand-500',
  mustard: 'bg-complementary-200 text-neutral-500',
  navy: 'bg-neutral-500 text-neutral-100',
  lilac: 'bg-brand-200/80 text-brand-500',
  soft: 'border border-complementary-300/50 bg-complementary-100 text-neutral-500',
}

const layoutClass = [
  'md:col-span-7 md:row-span-2',
  'md:col-span-5',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-4',
  'md:col-span-6 md:col-start-4',
] as const

const sizeClass = {
  lg: 'min-h-[16rem] p-7 md:min-h-[20rem] md:p-9',
  md: 'min-h-[12rem] p-6 md:p-7',
  sm: 'min-h-[11rem] p-6',
} as const

function cardSize(index: number): keyof typeof sizeClass {
  if (index === 0) return 'lg'
  if (index === 1 || index === 5) return 'md'
  return 'sm'
}

function quoteSize(index: number) {
  if (index === 0) return 'text-lg leading-relaxed md:text-xl'
  if (index === 1 || index === 5) return 'text-[0.95rem] leading-relaxed md:text-base'
  return 'text-sm leading-relaxed'
}

export function GuildaTestimonials({
  items,
}: {
  items: readonly GuildaTestimonial[]
}) {
  return (
    <ul
      className="guilda-testimonials-grid mt-10 grid grid-cols-1 gap-4 md:grid-cols-12 md:gap-5"
      aria-label="Depoimentos de membros da Guilda"
    >
      {items.map((item, index) => (
        <ScrollReveal
          key={item.id}
          as="li"
          delayMs={index * 90}
          className={cn(
            'guilda-testimonial-card',
            layoutClass[index],
            index % 2 === 0
              ? 'guilda-testimonial-card--from-left'
              : 'guilda-testimonial-card--from-right',
          )}
        >
          <article
            className={cn(
              'relative flex h-full flex-col justify-between overflow-hidden rounded-3xl transition-[transform,box-shadow] duration-500 ease-out',
              sizeClass[cardSize(index)],
              toneClass[item.tone],
              'hover:-translate-y-1 hover:shadow-[0_28px_60px_-32px_rgb(7_0_58_/_0.35)]',
            )}
          >
            <Quotes
              size={index === 0 ? 40 : 28}
              weight="fill"
              className={cn(
                'pointer-events-none absolute top-5 right-5 opacity-[0.14]',
                item.tone === 'navy' ? 'text-complementary-300' : 'text-brand-400',
              )}
              aria-hidden
            />

            <p className={cn('relative max-w-prose', quoteSize(index))}>
              “{item.quote}”
            </p>

            <footer className="relative mt-6 flex items-center gap-3">
              <span
                className={cn(
                  'size-2 shrink-0 rounded-full',
                  item.tone === 'navy'
                    ? 'bg-complementary-300'
                    : 'bg-brand-400',
                )}
                aria-hidden
              />
              <p className="text-sm font-black tracking-tight">{item.name}</p>
            </footer>
          </article>
        </ScrollReveal>
      ))}
    </ul>
  )
}
