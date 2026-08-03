import { useState } from 'react'
import { ArrowSquareOut, BookOpen } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import type { GuiaBook } from '@/data/guiaBooks'
import { amazonCoverUrl } from '@/lib/amazonCover'
import { cn } from '@/lib/utils'

type GuiaBookCardProps = {
  book: GuiaBook
  className?: string
}

function BookCover({ book }: { book: GuiaBook }) {
  const [failed, setFailed] = useState(false)
  const coverSrc = amazonCoverUrl(book.url)

  if (!coverSrc || failed) {
    return (
      <div className="flex aspect-[2/3] w-full items-center justify-center rounded-xl bg-brand-100/60 text-brand-400">
        <BookOpen size={40} weight="duotone" aria-hidden />
      </div>
    )
  }

  return (
    <img
      src={coverSrc}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className="aspect-[2/3] w-full rounded-xl object-cover shadow-sm"
    />
  )
}

export function GuiaBookCard({ book, className }: GuiaBookCardProps) {
  const authorLabel = book.authors.join(', ')

  return (
    <a
      href={book.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-neutral-500/10 bg-neutral-100 p-4 transition-colors hover:border-brand-300 hover:bg-brand-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
        className,
      )}
    >
      <BookCover book={book} />

      <div className="mt-4 flex flex-1 flex-col">
        <h3 className="text-base leading-snug font-black text-neutral-500 group-hover:text-brand-500">
          {book.title}
        </h3>

        {authorLabel ? (
          <p className="mt-2 text-sm font-semibold text-neutral-400">{authorLabel}</p>
        ) : null}

        {book.context.length > 0 ? (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {book.context.map((tag) => (
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
          {book.languages.length > 0 ? (
            <p className="text-sm" aria-label={`Idiomas: ${book.languages.join(', ')}`}>
              {book.languages.join(' ')}
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
