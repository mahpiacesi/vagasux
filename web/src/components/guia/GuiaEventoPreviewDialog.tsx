import { useState } from 'react'
import {
  ArrowSquareOut,
  Check,
  Copy,
  Tag,
  X,
} from '@phosphor-icons/react'
import { Dialog } from 'radix-ui'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GUIA_EVENTO_FEATURED_LABEL } from '@/components/guia/GuiaEventoCard'
import type { GuiaEvento } from '@/data/guiaEventos'
import {
  getGuiaEventoCtaLabel,
  getGuiaEventoOffer,
  resolveGuiaEventoCtaUrl,
} from '@/data/guiaEventoOffers'
import {
  eventMetaLine,
  eventTypeEmoji,
  eventTypeLabel,
} from '@/lib/guiaEventoMeta'
import { resolveEventoCoverUrl } from '@/lib/guiaEventoCover'
import { cn } from '@/lib/utils'

type GuiaEventoPreviewDialogProps = {
  evento: GuiaEvento | null
  open: boolean
  onOpenChange: (open: boolean) => void
  featured?: boolean
}

function EventCover({
  evento,
  className,
}: {
  evento: GuiaEvento
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const coverUrl = resolveEventoCoverUrl(evento)

  if (!coverUrl || failed) {
    return (
      <div
        className={cn(
          'flex h-full w-full items-center justify-center bg-gradient-to-br from-brand-100/80 to-brand-100/30 text-brand-500',
          className,
        )}
      >
        <span className="text-sm font-bold tracking-wide uppercase">
          {eventTypeEmoji(evento.eventType)} {eventTypeLabel(evento.eventType)}
        </span>
      </div>
    )
  }

  return (
    <img
      src={coverUrl}
      alt=""
      onError={() => setFailed(true)}
      className={cn('h-full w-full object-cover object-center', className)}
    />
  )
}

function CopyCouponButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      /* ignore */
    }
  }

  return (
    <button
      type="button"
      onClick={() => void handleCopy()}
      className="inline-flex items-center gap-2 rounded-xl border border-brand-300/40 bg-brand-100/50 px-3 py-2 text-sm font-bold text-brand-500 transition-colors hover:bg-brand-100"
    >
      <span className="font-mono tracking-wider">{code}</span>
      {copied ? (
        <Check size={16} weight="bold" aria-hidden />
      ) : (
        <Copy size={16} weight="bold" aria-hidden />
      )}
      <span className="sr-only">{copied ? 'Copiado' : 'Copiar cupom'}</span>
    </button>
  )
}

export function GuiaEventoPreviewDialog({
  evento,
  open,
  onOpenChange,
  featured = false,
}: GuiaEventoPreviewDialogProps) {
  if (!evento) return null

  const offer = getGuiaEventoOffer(evento.id)
  const ctaUrl = resolveGuiaEventoCtaUrl(evento.id, evento.url)
  const meta = eventMetaLine(evento)
  const hasOfferBlock = Boolean(
    offer?.discountLabel || offer?.couponCode || offer?.notice,
  )
  const hasDiscountOrCoupon = Boolean(
    offer?.discountLabel || offer?.couponCode,
  )

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-neutral-500/60 backdrop-blur-sm data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0" />
        <Dialog.Content
          className={cn(
            'fixed top-1/2 left-1/2 z-50 flex max-h-[min(90vh,820px)] w-[min(calc(100vw-2rem),42rem)] -translate-x-1/2 -translate-y-1/2 flex-col overflow-hidden rounded-3xl border border-neutral-500/10 bg-neutral-100 shadow-[0_32px_80px_-24px_rgb(7_0_58_/_0.45)]',
            'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95',
          )}
        >
          <div className="relative h-52 w-full shrink-0 overflow-hidden bg-brand-100 sm:h-60">
            <EventCover evento={evento} />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-500/70 via-neutral-500/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 px-6 pb-5">
              <Dialog.Title className="text-2xl font-black tracking-[-0.03em] text-neutral-100">
                {evento.title}
              </Dialog.Title>
              {evento.organizer ? (
                <p className="mt-1 text-sm font-semibold text-neutral-100/85">
                  {evento.organizer}
                </p>
              ) : null}
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-6 py-5">
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold text-neutral-400">
              {featured ? (
                <Badge className="border-brand-300/30 bg-brand-100 text-brand-500">
                  {GUIA_EVENTO_FEATURED_LABEL}
                </Badge>
              ) : null}
              {meta ? <span>{meta}</span> : null}
              {evento.languages.length > 0 ? (
                <span>{evento.languages.join(' ')}</span>
              ) : null}
            </div>

            {evento.themes.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {evento.themes.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-neutral-500/10 text-[0.65rem] font-bold text-neutral-400 uppercase"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}

            {hasOfferBlock ? (
              <section
                className={cn(
                  'mt-5 rounded-2xl border border-brand-200/50 bg-brand-100/35 px-4 py-4',
                  'w-fit max-w-full',
                )}
              >
                {offer?.discountLabel ? (
                  <div className="flex items-center gap-2 text-sm font-bold text-brand-500">
                    <Tag size={18} weight="duotone" aria-hidden />
                    <span>{offer.discountLabel}</span>
                  </div>
                ) : null}

                {offer?.couponCode === 'pending' ? (
                  <p className="mt-2 text-sm text-neutral-400">
                    Cupom de desconto VagasUX: <strong>em breve</strong>
                  </p>
                ) : offer?.couponCode ? (
                  <div className="mt-3 flex items-center justify-between gap-4">
                    <p className="min-w-0 flex-1 text-sm text-neutral-400">
                      Copie o código e aplique o desconto da VagasUX na sua
                      inscrição
                    </p>
                    <CopyCouponButton code={offer.couponCode} />
                  </div>
                ) : null}

                {offer?.notice ? (
                  <p
                    className={cn(
                      'text-sm leading-relaxed text-neutral-400',
                      hasDiscountOrCoupon && 'mt-3',
                    )}
                  >
                    {offer.notice}
                  </p>
                ) : null}
              </section>
            ) : null}
          </div>

          {ctaUrl ? (
            <div className="flex shrink-0 justify-end border-t border-neutral-500/10 px-6 py-4">
              <Button asChild size="sm" className="gap-1.5">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                  {getGuiaEventoCtaLabel(evento.id)}
                  <ArrowSquareOut size={16} weight="bold" aria-hidden />
                </a>
              </Button>
            </div>
          ) : null}

          <Dialog.Close
            className="absolute top-4 right-4 inline-flex size-10 items-center justify-center rounded-xl bg-neutral-100/90 text-neutral-500 shadow-sm backdrop-blur-sm transition-colors hover:bg-neutral-100 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400"
            aria-label="Fechar preview"
          >
            <X size={18} weight="bold" aria-hidden />
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
