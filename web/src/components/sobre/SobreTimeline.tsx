import type { Icon } from '@phosphor-icons/react'
import {
  ArrowUpRight,
  BookOpen,
  ChartLineUp,
  ChatsCircle,
  Handshake,
  Heart,
  MagnifyingGlass,
  MapPin,
  MapTrifold,
  MicrophoneStage,
  Presentation,
  Sparkle,
  UsersFour,
  UsersThree,
  VideoCamera,
} from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/guilda/ScrollReveal'
import { Button } from '@/components/ui/button'
import {
  groupSobreMilestones,
  sobreMilestones,
  type SobreMilestone,
  type SobreTimelineIcon,
} from '@/data/sobre'
import { cn } from '@/lib/utils'

const timelineIcons: Record<SobreTimelineIcon, Icon> = {
  BookOpen,
  MagnifyingGlass,
  ChatsCircle,
  Handshake,
  ChartLineUp,
  VideoCamera,
  Heart,
  MicrophoneStage,
  UsersThree,
  MapPin,
  MapTrifold,
  UsersFour,
  Presentation,
  Sparkle,
}

function isInternalHref(href: string) {
  return href.startsWith('/')
}

function MilestoneCard({
  milestone,
  Icon: ItemIcon,
}: {
  milestone: SobreMilestone
  Icon: Icon
}) {
  return (
    <article
      className={cn(
        'sobre-timeline-card rounded-3xl border p-5 md:p-6',
        milestone.featured
          ? 'border-complementary-300/70 bg-gradient-to-b from-complementary-100 via-neutral-100 to-brand-100/30 shadow-[0_24px_60px_-36px_rgb(7_0_58_/_0.28)]'
          : 'border-neutral-500/10 bg-neutral-100',
      )}
    >
      <div className="flex items-start gap-3">
        <span
          className={cn(
            'mt-0.5 inline-flex shrink-0 items-center justify-center rounded-2xl',
            milestone.featured
              ? 'size-11 bg-neutral-500 text-complementary-300'
              : 'size-10 bg-brand-100 text-brand-500',
          )}
        >
          <ItemIcon
            size={milestone.featured ? 22 : 20}
            weight="bold"
            aria-hidden
          />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-bold tracking-[0.16em] text-brand-400 uppercase">
            {milestone.date}
          </p>
          <h4
            className={cn(
              'mt-2 font-black tracking-[-0.03em] text-neutral-500',
              milestone.featured
                ? 'text-xl md:text-2xl'
                : 'text-lg md:text-xl',
            )}
          >
            {milestone.title}
          </h4>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-[0.95rem]">
        {milestone.description}
      </p>
      {milestone.link ? (
        <Button variant="guia-outline" asChild className="mt-5">
          {isInternalHref(milestone.link.href) ? (
            <Link to={milestone.link.href}>
              {milestone.link.label}
              <ArrowUpRight weight="bold" aria-hidden />
            </Link>
          ) : (
            <a
              href={milestone.link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {milestone.link.label}
              <ArrowUpRight weight="bold" aria-hidden />
            </a>
          )}
        </Button>
      ) : null}
    </article>
  )
}

export function SobreTimeline() {
  const groups = groupSobreMilestones(sobreMilestones)
  let visualIndex = 0

  return (
    <div className="sobre-timeline">
      {groups.map((group) => (
        <section key={group.year} className="sobre-timeline-year">
          <h3 className="sobre-timeline-year-label">
            <span>{group.year}</span>
          </h3>
          <ol className="sobre-timeline-list">
            {group.items.map((milestone) => {
              const index = visualIndex
              visualIndex += 1
              const ItemIcon = timelineIcons[milestone.icon]
              return (
                <li
                  key={milestone.id}
                  className={cn(
                    'sobre-timeline-item',
                    index % 2 === 1 && 'sobre-timeline-item--alt',
                  )}
                >
                  <span
                    className={cn(
                      'sobre-timeline-node',
                      milestone.featured && 'sobre-timeline-node--featured',
                    )}
                    aria-hidden
                  >
                    <ItemIcon
                      size={milestone.featured ? 16 : 14}
                      weight="fill"
                    />
                  </span>
                  <ScrollReveal
                    className="sobre-timeline-content"
                    delayMs={(index % 4) * 70}
                  >
                    <MilestoneCard milestone={milestone} Icon={ItemIcon} />
                  </ScrollReveal>
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </div>
  )
}
