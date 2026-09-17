import { Umbrella } from '@phosphor-icons/react'
import { ScrollReveal } from '@/components/guilda/ScrollReveal'
import {
  sobreMilestones,
  type SobreMilestone,
} from '@/data/sobre'
import { cn } from '@/lib/utils'

const EMPTY_SLOT_COUNT = 4

function MilestoneCard({
  milestone,
  index,
}: {
  milestone: SobreMilestone
  index: number
}) {
  return (
    <article className="sobre-timeline-card overflow-hidden rounded-3xl border border-neutral-500/10 bg-neutral-100 shadow-[0_24px_60px_-36px_rgb(7_0_58_/_0.28)]">
      {milestone.image ? (
        <img
          src={milestone.image}
          alt={milestone.imageAlt || ''}
          className="aspect-[16/10] w-full object-cover"
          loading="lazy"
          decoding="async"
        />
      ) : (
        <div
          className={cn(
            'flex aspect-[16/10] items-center justify-center',
            index % 2 === 0 ? 'bg-brand-100' : 'bg-complementary-100',
          )}
          aria-hidden
        >
          <span className="text-5xl" aria-hidden>
            {milestone.icon ?? '☂️'}
          </span>
        </div>
      )}
      <div className="p-6 md:p-7">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
          {milestone.period}
        </p>
        <h3 className="mt-3 text-xl font-black tracking-[-0.03em] text-neutral-500 md:text-2xl">
          {milestone.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400 md:text-base">
          {milestone.description}
        </p>
      </div>
    </article>
  )
}

function EmptyMilestoneCard({ index }: { index: number }) {
  return (
    <article
      className="sobre-timeline-card overflow-hidden rounded-3xl border border-dashed border-neutral-500/15 bg-neutral-100/80"
      aria-hidden
    >
      <div
        className={cn(
          'flex aspect-[16/10] items-center justify-center',
          index % 2 === 0 ? 'bg-brand-100/80' : 'bg-complementary-100/90',
        )}
      >
        <Umbrella
          size={index % 2 === 0 ? 56 : 44}
          weight="duotone"
          className="text-brand-300"
        />
      </div>
      <div className="space-y-3 p-6 md:p-7">
        <span className="block h-2.5 w-20 rounded-full bg-brand-200/70" />
        <span className="block h-4 w-3/4 rounded-full bg-neutral-500/10" />
        <span className="block h-3 w-full rounded-full bg-neutral-500/10" />
        <span className="block h-3 w-5/6 rounded-full bg-neutral-500/10" />
      </div>
    </article>
  )
}

export function SobreTimeline() {
  const milestones = sobreMilestones
  const isEmpty = milestones.length === 0

  return (
    <div className="sobre-timeline">
      {isEmpty ? (
        <p className="sr-only">
          A linha do tempo da VagasUX ainda não tem marcos publicados.
        </p>
      ) : null}

      <ol className="sobre-timeline-list">
        {(isEmpty
          ? Array.from({ length: EMPTY_SLOT_COUNT }, (_, index) => index)
          : milestones
        ).map((item, index) => {
          const milestone = typeof item === 'number' ? undefined : item
          return (
            <li
              key={milestone?.id ?? `slot-${index}`}
              className={cn(
                'sobre-timeline-item',
                index % 2 === 1 && 'sobre-timeline-item--alt',
              )}
            >
              <span className="sobre-timeline-node" aria-hidden>
                <Umbrella size={16} weight="fill" />
              </span>
              {milestone ? (
                <ScrollReveal className="sobre-timeline-content" delayMs={index * 80}>
                  <MilestoneCard milestone={milestone} index={index} />
                </ScrollReveal>
              ) : (
                <div className="sobre-timeline-content">
                  <EmptyMilestoneCard index={index} />
                </div>
              )}
            </li>
          )
        })}
      </ol>
    </div>
  )
}
