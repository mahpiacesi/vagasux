import { useState } from 'react'
import { ArrowSquareOut, Play } from '@phosphor-icons/react'
import { Badge } from '@/components/ui/badge'
import type { GuiaVideo } from '@/data/guiaVideos'
import { resolveVideoCoverUrl } from '@/lib/guiaVideoCover'
import { cn } from '@/lib/utils'

export const GUIA_VIDEO_CHANNEL_LABEL = 'Canal oficial'

type GuiaVideoCardProps = {
  video: GuiaVideo
  className?: string
  /** Destaque visual — vídeo em spotlight no topo da página. */
  featured?: boolean
  spotlight?: boolean
  /** Exibe tag Canal oficial (vídeos do canal VagasUX). */
  showChannelTag?: boolean
}

function VideoCover({
  video,
  className,
  spotlight = false,
}: {
  video: GuiaVideo
  className?: string
  spotlight?: boolean
}) {
  const [failed, setFailed] = useState(false)
  const coverUrl = resolveVideoCoverUrl(video)

  if (!coverUrl || failed) {
    return (
      <div
        className={cn(
          'flex w-full items-center justify-center rounded-xl bg-brand-100/60 text-brand-400',
          spotlight ? 'aspect-[5/3] max-h-28 sm:max-h-32' : 'aspect-video',
          className,
        )}
      >
        <Play size={spotlight ? 32 : 40} weight="duotone" aria-hidden />
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
        'w-full rounded-xl border border-neutral-500/5 bg-neutral-100 object-cover object-center shadow-sm',
        spotlight ? 'aspect-[5/3] max-h-28 sm:max-h-32' : 'aspect-video',
        className,
      )}
    />
  )
}

function ChannelLabel({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex w-fit self-start rounded-full bg-brand-400 px-3 py-1 text-[0.65rem] font-bold tracking-[0.14em] text-neutral-100 uppercase',
        className,
      )}
    >
      {GUIA_VIDEO_CHANNEL_LABEL}
    </span>
  )
}

export function GuiaVideoCard({
  video,
  className,
  featured = false,
  spotlight = false,
  showChannelTag = video.vagasuxChannel,
}: GuiaVideoCardProps) {
  const authorLabel = video.authors.join(', ')

  return (
    <a
      href={video.url}
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
        <VideoCover video={video} spotlight={spotlight} />
      </div>

      <div className={cn('mt-4 flex flex-1 flex-col', spotlight && 'sm:mt-0')}>
        {showChannelTag ? <ChannelLabel className="mb-2" /> : null}

        <h3
          className={cn(
            'leading-snug font-black text-neutral-500 group-hover:text-brand-500',
            spotlight ? 'text-lg md:text-xl' : 'text-base',
          )}
        >
          {video.title}
        </h3>

        {authorLabel ? (
          <p className="mt-1.5 text-sm font-semibold text-neutral-400">{authorLabel}</p>
        ) : null}

        {video.context.length > 0 ? (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {video.context.map((tag) => (
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
          {video.languages.length > 0 ? (
            <p
              className="text-sm"
              aria-label={`Idiomas: ${video.languages.join(', ')}`}
            >
              {video.languages.join(' ')}
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
