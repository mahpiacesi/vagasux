import { Clock, LockSimple } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import { guiaDifficultyLabels, type GuiaDifficulty } from '@/data/guia'

type GuiaPlaceholderProps = {
  title: string
  description?: string
  level?: GuiaDifficulty
  duration?: string
  contentCount?: number
}

export function GuiaPlaceholder({
  title,
  description,
  level,
  duration,
  contentCount,
}: GuiaPlaceholderProps) {
  const hasMeta = level || duration || contentCount

  return (
    <div className="mt-8 max-w-2xl">
      <h1 className="text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
        {title}
      </h1>

      {description ? (
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          {description}
        </p>
      ) : null}

      {hasMeta ? (
        <div className="mt-6 flex flex-wrap items-center gap-3">
          {level ? (
            <Badge
              variant="outline"
              className="border-brand-200/80 bg-brand-100/50 text-[0.65rem] font-bold text-brand-500 uppercase"
            >
              {guiaDifficultyLabels[level]}
            </Badge>
          ) : null}
          {duration ? (
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-400">
              <Clock size={16} weight="bold" aria-hidden />
              {duration}
            </span>
          ) : null}
          {contentCount ? (
            <span className="text-sm font-semibold text-neutral-400">
              {contentCount} conteúdos curados
            </span>
          ) : null}
        </div>
      ) : null}

      <div className="mt-10 rounded-2xl border border-dashed border-brand-200/80 bg-brand-100/30 p-8 text-center">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100 text-brand-500">
          <LockSimple size={24} weight="bold" aria-hidden />
        </div>
        <p className="mt-4 text-base font-bold text-neutral-500">Em breve</p>
        <p className="mt-2 text-sm leading-relaxed text-neutral-400">
          Estamos migrando a curadoria para cá. Em breve você encontra os
          melhores links sobre este tema.
        </p>
      </div>
    </div>
  )
}
