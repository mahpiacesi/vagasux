import { Badge } from '@/components/ui/badge'
import {
  guiaDifficultyLabels,
  guiaTipoLabels,
  type GuiaCuratedItem,
} from '@/data/guia'
import { cn } from '@/lib/utils'

type GuiaContentCardProps = {
  item: GuiaCuratedItem
  className?: string
}

export function GuiaContentCard({ item, className }: GuiaContentCardProps) {
  const primaryTipo = item.tipos[0]
  const tipoLabel = primaryTipo ? guiaTipoLabels[primaryTipo] : 'Conteúdo'

  return (
    <article
      className={cn(
        'flex h-full flex-col rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5',
        className,
      )}
    >
      <div className="flex flex-wrap items-center gap-2">
        <Badge
          variant="outline"
          className="border-brand-200/80 bg-brand-100/50 text-[0.65rem] font-bold text-brand-500 uppercase"
        >
          {tipoLabel}
        </Badge>
        <Badge
          variant="outline"
          className="border-neutral-500/10 text-[0.65rem] font-bold text-neutral-400 uppercase"
        >
          {guiaDifficultyLabels[item.difficulty]}
        </Badge>
      </div>

      <h3 className="mt-4 text-base leading-snug font-black text-neutral-500">
        {item.title}
      </h3>

      {item.duration ? (
        <p className="mt-auto pt-4 text-xs font-semibold text-neutral-400">
          {item.duration}
        </p>
      ) : null}
    </article>
  )
}
