import { Clock, LockSimple } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import {
  guiaContentTypeLabels,
  guiaDifficultyLabels,
  type GuiaContentItem,
} from '@/data/guia'
import { cn } from '@/lib/utils'

type GuiaContentCardProps = {
  item: GuiaContentItem
  className?: string
}

export function GuiaContentCard({ item, className }: GuiaContentCardProps) {
  return (
    <article
      className={cn(
        'group relative flex flex-col rounded-2xl border border-neutral-500/10 bg-neutral-100 p-4 transition-shadow hover:shadow-[0_12px_32px_-20px_rgb(7_0_58_/_0.25)]',
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge
          variant="outline"
          className="border-brand-200/80 bg-brand-100/60 text-[0.65rem] font-bold tracking-wide text-brand-500 uppercase"
        >
          {guiaContentTypeLabels[item.type]}
        </Badge>
        <Badge
          variant="outline"
          className="border-neutral-200 text-[0.65rem] font-semibold text-neutral-400"
        >
          {guiaDifficultyLabels[item.difficulty]}
        </Badge>
      </div>

      <h3 className="mt-3 text-base leading-snug font-bold text-neutral-500">
        {item.title}
      </h3>

      <p className="mt-2 text-xs font-semibold tracking-wide text-brand-400 uppercase">
        {item.category}
      </p>

      <div className="mt-auto flex items-center justify-between gap-3 pt-4">
        {item.duration ? (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-neutral-400">
            <Clock size={14} weight="bold" aria-hidden />
            {item.duration}
          </span>
        ) : (
          <span className="text-xs text-neutral-300">—</span>
        )}
        <span className="inline-flex items-center gap-1 rounded-full bg-neutral-500/5 px-2 py-0.5 text-[0.65rem] font-bold tracking-wide text-neutral-400 uppercase">
          <LockSimple size={12} weight="bold" aria-hidden />
          Em breve
        </span>
      </div>
    </article>
  )
}
