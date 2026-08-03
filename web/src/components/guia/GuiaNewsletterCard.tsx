import { useState } from 'react'
import { ArrowSquareOut, EnvelopeSimple } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import type { GuiaNewsletter } from '@/data/guiaNewsletters'
import { cn } from '@/lib/utils'

type GuiaNewsletterCardProps = {
  newsletter: GuiaNewsletter
  className?: string
}

function NewsletterCover({ newsletter }: { newsletter: GuiaNewsletter }) {
  const [failed, setFailed] = useState(false)

  if (!newsletter.imageUrl || failed) {
    return (
      <div className="flex aspect-video w-full items-center justify-center rounded-xl bg-brand-100/60 text-brand-400">
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
      className="aspect-video w-full rounded-xl border border-neutral-500/5 bg-neutral-100 object-contain object-center shadow-sm"
    />
  )
}

export function GuiaNewsletterCard({
  newsletter,
  className,
}: GuiaNewsletterCardProps) {
  const authorLabel = newsletter.authors.join(', ')

  return (
    <a
      href={newsletter.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-neutral-500/10 bg-neutral-100 p-4 transition-colors hover:border-brand-300 hover:bg-brand-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
        className,
      )}
    >
      <NewsletterCover newsletter={newsletter} />

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-base leading-snug font-black text-neutral-500 group-hover:text-brand-500">
          {newsletter.title}
        </h3>

        {authorLabel ? (
          <p className="mt-2 text-sm font-semibold text-neutral-400">{authorLabel}</p>
        ) : null}

        {newsletter.context.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {newsletter.context.map((tag) => (
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
