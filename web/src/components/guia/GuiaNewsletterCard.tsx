import { useState } from 'react'
import { ArrowSquareOut, EnvelopeSimple } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import type { GuiaNewsletter } from '@/data/guiaNewsletters'
import { cn } from '@/lib/utils'

type GuiaNewsletterCardProps = {
  newsletter: GuiaNewsletter
  className?: string
  /** Destaque visual para a newsletter da comunidade. */
  featured?: boolean
  /** Layout horizontal em telas maiores (usado no spotlight da página). */
  spotlight?: boolean
}

function NewsletterCover({
  newsletter,
  className,
}: {
  newsletter: GuiaNewsletter
  className?: string
}) {
  const [failed, setFailed] = useState(false)

  if (!newsletter.imageUrl || failed) {
    return (
      <div
        className={cn(
          'flex aspect-video w-full items-center justify-center rounded-xl bg-brand-100/60 text-brand-400',
          className,
        )}
      >
        <EnvelopeSimple size={40} weight="duotone" aria-hidden />
      </div>
    )
  }

  return (
    <img
      src={newsletter.imageUrl}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn(
        'aspect-video w-full rounded-xl border border-neutral-500/5 bg-neutral-100 object-contain object-center shadow-sm',
        className,
      )}
    />
  )
}

export function GuiaNewsletterCard({
  newsletter,
  className,
  featured = false,
  spotlight = false,
}: GuiaNewsletterCardProps) {
  const authorLabel = newsletter.authors.join(', ')

  return (
    <a
      href={newsletter.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex h-full flex-col rounded-2xl border p-4 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
        featured
          ? 'border-brand-300 bg-gradient-to-br from-brand-100/90 via-brand-100/40 to-neutral-100 shadow-[0_16px_48px_-20px_rgb(61_74_195_/_0.45)] hover:border-brand-400 hover:from-brand-100 hover:to-brand-100/50'
          : 'border-neutral-500/10 bg-neutral-100 hover:border-brand-300 hover:bg-brand-100/30',
        spotlight && 'sm:flex-row sm:items-stretch sm:gap-6 sm:p-6',
        className,
      )}
    >
      <div className={cn(spotlight && 'sm:w-[min(42%,18rem)] sm:shrink-0')}>
        {featured ? (
          <span className="mb-3 inline-flex rounded-full bg-brand-400 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-neutral-100 uppercase">
            Newsletter da comunidade
          </span>
        ) : null}
        <NewsletterCover newsletter={newsletter} />
      </div>

      <div className={cn('mt-4 flex flex-1 flex-col', spotlight && 'sm:mt-0 sm:py-1')}>
        <h3
          className={cn(
            'leading-snug font-black text-neutral-500 group-hover:text-brand-500',
            spotlight ? 'text-xl md:text-2xl' : 'text-base',
          )}
        >
          {newsletter.title}
        </h3>

        {authorLabel ? (
          <p
            className={cn(
              'mt-2 font-semibold text-neutral-400',
              spotlight ? 'text-base' : 'text-sm',
            )}
          >
            {authorLabel}
          </p>
        ) : null}

        {newsletter.context.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {newsletter.context.map((tag) => (
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

        <div className="mt-auto flex items-center justify-between gap-2 pt-4">
          {newsletter.languages.length > 0 ? (
            <p
              className="text-sm"
              aria-label={`Idiomas: ${newsletter.languages.join(', ')}`}
            >
              {newsletter.languages.join(' ')}
            </p>
          ) : (
            <span />
          )}
          <ArrowSquareOut
            size={spotlight ? 20 : 16}
            weight="bold"
            className="shrink-0 text-brand-400"
            aria-hidden
          />
        </div>
      </div>
    </a>
  )
}
