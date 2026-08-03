import { useState } from 'react'
import { ArrowSquareOut, EnvelopeSimple } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import type { GuiaNewsletter } from '@/data/guiaNewsletters'
import { cn } from '@/lib/utils'

export const GUIA_NEWSLETTER_FEATURED_LABEL = 'News oficial'

type GuiaNewsletterCardProps = {
  newsletter: GuiaNewsletter
  className?: string
  /** Destaque visual para a newsletter oficial da VagasUX. */
  featured?: boolean
  /** Layout horizontal compacto no topo da página de newsletters. */
  spotlight?: boolean
}

function NewsletterCover({
  newsletter,
  className,
  spotlight = false,
}: {
  newsletter: GuiaNewsletter
  className?: string
  spotlight?: boolean
}) {
  const [failed, setFailed] = useState(false)

  if (!newsletter.imageUrl || failed) {
    return (
      <div
        className={cn(
          'flex w-full items-center justify-center rounded-xl bg-brand-100/60 text-brand-400',
          spotlight ? 'aspect-[5/3] max-h-28 sm:max-h-32' : 'aspect-video',
          className,
        )}
      >
        <EnvelopeSimple size={spotlight ? 32 : 40} weight="duotone" aria-hidden />
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
        'w-full rounded-xl border border-neutral-500/5 bg-neutral-100 object-contain object-center shadow-sm',
        spotlight ? 'aspect-[5/3] max-h-28 sm:max-h-32' : 'aspect-video',
        className,
      )}
    />
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
      {GUIA_NEWSLETTER_FEATURED_LABEL}
    </span>
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
          ? 'border-brand-300 bg-brand-100/50 hover:border-brand-400 hover:bg-brand-100/70'
          : 'border-neutral-500/10 bg-neutral-100 hover:border-brand-300 hover:bg-brand-100/30',
        spotlight && 'sm:flex-row sm:items-center sm:gap-5',
        className,
      )}
    >
      <div className={cn(spotlight && 'sm:w-44 sm:shrink-0')}>
        <NewsletterCover newsletter={newsletter} spotlight={spotlight} />
      </div>

      <div className={cn('mt-4 flex flex-1 flex-col', spotlight && 'sm:mt-0')}>
        {featured ? <FeaturedLabel className="mb-2" /> : null}

        <h3
          className={cn(
            'leading-snug font-black text-neutral-500 group-hover:text-brand-500',
            spotlight ? 'text-lg md:text-xl' : 'text-base',
          )}
        >
          {newsletter.title}
        </h3>

        {authorLabel ? (
          <p
            className={cn(
              'mt-1.5 font-semibold text-neutral-400',
              spotlight ? 'text-sm' : 'text-sm',
            )}
          >
            {authorLabel}
          </p>
        ) : null}

        {newsletter.context.length > 0 ? (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
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

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
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
            size={16}
            weight="bold"
            className="shrink-0 text-brand-400"
            aria-hidden
          />
        </div>
      </div>
    </a>
  )
}
