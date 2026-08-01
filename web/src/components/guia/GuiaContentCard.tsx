import { ArrowSquareOut } from '@phosphor-icons/react'
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
  /** Quando true, o card inteiro linka para item.url (externo) */
  linked?: boolean
}

function CardBody({ item }: { item: GuiaCuratedItem }) {
  const primaryTipo = item.tipos[0]
  const tipoLabel = primaryTipo ? guiaTipoLabels[primaryTipo] : 'Conteúdo'

  return (
    <>
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

      <div className="mt-auto flex items-center justify-between gap-2 pt-4">
        {item.duration ? (
          <p className="text-xs font-semibold text-neutral-400">{item.duration}</p>
        ) : (
          <span />
        )}
        {item.url ? (
          <ArrowSquareOut
            size={16}
            weight="bold"
            className="shrink-0 text-brand-400"
            aria-hidden
          />
        ) : null}
      </div>
    </>
  )
}

export function GuiaContentCard({
  item,
  className,
  linked = false,
}: GuiaContentCardProps) {
  const baseClass = cn(
    'flex h-full flex-col rounded-2xl border border-neutral-500/10 bg-neutral-100 p-5 transition-colors',
    className,
  )

  if (linked && item.url) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        className={cn(
          baseClass,
          'hover:border-brand-300 hover:bg-brand-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
        )}
      >
        <CardBody item={item} />
      </a>
    )
  }

  return (
    <article className={baseClass}>
      <CardBody item={item} />
    </article>
  )
}
