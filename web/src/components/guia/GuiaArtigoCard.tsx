import { useState } from 'react'
import { ArrowSquareOut, ArticleMedium } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import type { GuiaArtigo } from '@/data/guiaArtigos'
import { resolveArtigoCoverUrl } from '@/lib/guiaArtigoCover'
import { cn } from '@/lib/utils'

export const GUIA_ARTIGO_VAGASUX_LABEL = 'Canal oficial'

type GuiaArtigoCardProps = {
  artigo: GuiaArtigo
  className?: string
  showVagasuxTag?: boolean
}

function ArtigoCover({
  artigo,
  className,
}: {
  artigo: GuiaArtigo
  className?: string
}) {
  const [failed, setFailed] = useState(false)
  const coverUrl = resolveArtigoCoverUrl(artigo)

  if (!coverUrl || failed) {
    return (
      <div
        className={cn(
          'flex aspect-video w-full items-center justify-center rounded-xl bg-brand-100/60 text-brand-400',
          className,
        )}
      >
        <ArticleMedium size={40} weight="duotone" aria-hidden />
      </div>
    )
  }

  return (
    <img
      src={coverUrl}
      alt=""
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn(
        'aspect-video w-full rounded-xl border border-neutral-500/5 bg-neutral-100 object-cover object-center shadow-sm',
        className,
      )}
    />
  )
}

function VagasuxLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit self-start rounded-full bg-brand-400 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-neutral-100 uppercase',
        className,
      )}
    >
      {GUIA_ARTIGO_VAGASUX_LABEL}
    </span>
  )
}

export function GuiaArtigoCard({
  artigo,
  className,
  showVagasuxTag = artigo.vagasuxPublication,
}: GuiaArtigoCardProps) {
  const authorLabel = artigo.authors.join(', ')

  return (
    <a
      href={artigo.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex h-full flex-col rounded-2xl border border-neutral-500/10 bg-neutral-100 p-4 transition-colors hover:border-brand-300 hover:bg-brand-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
        className,
      )}
    >
      <ArtigoCover artigo={artigo} />

      <div className="mt-4 flex flex-1 flex-col">
        {showVagasuxTag ? <VagasuxLabel className="mb-2" /> : null}

        <h3 className="text-base leading-snug font-black text-neutral-500 group-hover:text-brand-500">
          {artigo.title}
        </h3>

        {authorLabel ? (
          <p className="mt-1.5 text-sm font-semibold text-neutral-400">{authorLabel}</p>
        ) : null}

        {artigo.context.length > 0 ? (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {artigo.context.map((tag) => (
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

        <div className="mt-auto flex items-center justify-between gap-2 pt-3">
          {artigo.languages.length > 0 ? (
            <p
              className="text-sm"
              aria-label={`Idiomas: ${artigo.languages.join(', ')}`}
            >
              {artigo.languages.join(' ')}
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
