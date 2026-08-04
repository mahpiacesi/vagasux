import { useState } from 'react'
import { Badge } from '@/components/ui/badge'
import type { GuiaEvento } from '@/data/guiaEventos'
import { GuiaEventoPreviewDialog } from '@/components/guia/GuiaEventoPreviewDialog'
import {
  eventMetaLine,
  eventTypeEmoji,
  eventTypeIcon,
  eventTypeLabel,
} from '@/lib/guiaEventoMeta'
import { resolveEventoCoverUrl } from '@/lib/guiaEventoCover'
import { cn } from '@/lib/utils'

export const GUIA_EVENTO_FEATURED_LABEL = 'Evento oficial'

type GuiaEventoCardProps = {
  evento: GuiaEvento
  className?: string
  /** Destaque visual para o meetup oficial da VagasUX. */
  featured?: boolean
  /** Layout horizontal compacto no topo da página de eventos. */
  spotlight?: boolean
}

function EventTypeCover({
  evento,
  className,
  spotlight = false,
}: {
  evento: GuiaEvento
  className?: string
  spotlight?: boolean
}) {
  const [failed, setFailed] = useState(false)
  const coverUrl = resolveEventoCoverUrl(evento)
  const Icon = eventTypeIcon(evento.eventType)

  if (coverUrl && !failed) {
    return (
      <img
        src={coverUrl}
        alt=""
        loading="lazy"
        decoding="async"
        onError={() => setFailed(true)}
        className={cn(
          'w-full rounded-xl border border-neutral-500/5 bg-neutral-100 object-cover object-center shadow-sm',
          spotlight ? 'aspect-[5/3] max-h-28 sm:max-h-32' : 'aspect-video',
          className,
        )}
      />
    )
  }

  return (
    <div
      className={cn(
        'flex w-full flex-col items-center justify-center gap-2 rounded-xl border border-brand-200/40 bg-gradient-to-br from-brand-100/80 to-brand-100/30 text-brand-500',
        spotlight ? 'aspect-[5/3] max-h-28 sm:max-h-32' : 'aspect-video',
        className,
      )}
    >
      <Icon size={spotlight ? 28 : 36} weight="duotone" aria-hidden />
      <span className="text-xs font-bold tracking-wide text-brand-400 uppercase">
        {eventTypeEmoji(evento.eventType)} {eventTypeLabel(evento.eventType)}
      </span>
    </div>
  )
}

function FeaturedLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit self-start rounded-full bg-brand-400 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-neutral-100 uppercase',
        className,
      )}
    >
      {GUIA_EVENTO_FEATURED_LABEL}
    </span>
  )
}

export function GuiaEventoCard({
  evento,
  className,
  featured = false,
  spotlight = false,
}: GuiaEventoCardProps) {
  const [open, setOpen] = useState(false)
  const meta = eventMetaLine(evento)

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={cn(
          'group flex h-full w-full cursor-pointer flex-col rounded-2xl border p-4 text-left transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
          featured
            ? 'border-brand-300 bg-brand-100/50 hover:border-brand-400 hover:bg-brand-100/70'
            : 'border-neutral-500/10 bg-neutral-100 hover:border-brand-300 hover:bg-brand-100/30',
          spotlight && 'sm:flex-row sm:items-center sm:gap-5',
          className,
        )}
      >
        <div className={cn(spotlight && 'sm:w-44 sm:shrink-0')}>
          <EventTypeCover evento={evento} spotlight={spotlight} />
        </div>

        <div className={cn('mt-4 flex flex-1 flex-col', spotlight && 'sm:mt-0')}>
          {featured ? <FeaturedLabel className="mb-2" /> : null}

          <h3
            className={cn(
              'leading-snug font-black text-neutral-500 group-hover:text-brand-500',
              spotlight ? 'text-lg md:text-xl' : 'text-base',
            )}
          >
            {evento.title}
          </h3>

          {evento.organizer ? (
            <p className="mt-1.5 text-sm font-semibold text-neutral-400">
              {evento.organizer}
            </p>
          ) : null}

          {evento.themes.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {evento.themes.slice(0, spotlight ? 6 : 4).map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className={cn(
                    'border-neutral-500/10 text-[0.65rem] font-bold text-neutral-400 uppercase',
                    featured && 'border-brand-300/30 bg-neutral-100/80',
                  )}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          ) : null}

          <div className="mt-auto flex items-center justify-between gap-2 pt-3">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-400">
              {meta ? <span>{meta}</span> : null}
              {evento.languages.length > 0 ? (
                <span aria-label={`Idiomas: ${evento.languages.join(', ')}`}>
                  {evento.languages.join(' ')}
                </span>
              ) : null}
            </div>
            <span className="text-xs font-bold tracking-wide text-brand-400 uppercase">
              Ver detalhes
            </span>
          </div>
        </div>
      </button>

      <GuiaEventoPreviewDialog
        evento={evento}
        open={open}
        onOpenChange={setOpen}
        featured={featured}
      />
    </>
  )
}
