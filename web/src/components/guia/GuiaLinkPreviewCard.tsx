import { useEffect, useState } from 'react'
import { ArrowSquareOut, ImageSquare, Sparkle } from '@phosphor-icons/react'
import type { GuiaTemaLink } from '@/data/guiaTemaUxLinks'
import { cn } from '@/lib/utils'

function getHostname(url: string) {
  try {
    return new URL(url).hostname.replace(/^www\./, '')
  } catch {
    return url
  }
}

export function GuiaLinkPreviewCard({
  link,
  className,
}: {
  link: GuiaTemaLink
  className?: string
}) {
  const [imageFailed, setImageFailed] = useState(false)
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [isLoadingImage, setIsLoadingImage] = useState(true)
  const hostname = getHostname(link.url)
  const showFallback = !isLoadingImage && (!imageUrl || imageFailed)

  useEffect(() => {
    const controller = new AbortController()

    setImageFailed(false)
    setImageUrl(null)
    setIsLoadingImage(true)

    void fetch(`/api/link-preview?url=${encodeURIComponent(link.url)}`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) return null
        const data = (await response.json()) as { imageUrl?: unknown }
        return typeof data.imageUrl === 'string' ? data.imageUrl : null
      })
      .then(setImageUrl)
      .catch(() => setImageUrl(null))
      .finally(() => setIsLoadingImage(false))

    return () => controller.abort()
  }, [link.url])

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group flex overflow-hidden rounded-2xl border border-neutral-500/10 bg-neutral-100 transition-colors hover:border-brand-300 hover:bg-brand-100/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400',
        className,
      )}
    >
      <div className="relative w-32 shrink-0 border-r border-neutral-500/10 bg-brand-100/60 sm:w-44">
        {isLoadingImage ? (
          <div className="h-full min-h-32 animate-pulse bg-brand-100/80" />
        ) : showFallback ? (
          <div className="relative flex h-full min-h-32 items-center justify-center overflow-hidden bg-brand-100/80 p-4">
            <span className="absolute -top-3 -right-3 size-16 rounded-full bg-complementary-200/70" />
            <span className="absolute -bottom-6 -left-4 size-20 rounded-full bg-brand-200/50" />
            <span className="relative flex size-12 items-center justify-center rounded-2xl bg-neutral-100 text-brand-400 shadow-sm">
              <ImageSquare size={28} weight="duotone" aria-hidden />
              <Sparkle
                size={14}
                weight="fill"
                className="absolute -top-1 -right-1 text-highlight-200"
                aria-hidden
              />
            </span>
          </div>
        ) : (
          <img
            src={imageUrl}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setImageFailed(true)}
            className="h-full min-h-32 w-full object-cover object-top"
          />
        )}
        <span className="absolute inset-x-0 bottom-0 truncate bg-neutral-500/75 px-2 py-1 text-center text-[0.625rem] font-bold tracking-wide text-neutral-100">
          {hostname}
        </span>
      </div>

      <div className="flex min-w-0 flex-1 flex-col px-4 py-4">
        <h3 className="pr-1 text-base leading-snug font-black text-neutral-500 transition-colors group-hover:text-brand-500">
          {link.title}
        </h3>
        {link.description ? (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-neutral-400">
            {link.description}
          </p>
        ) : null}
        <div className="mt-auto flex items-center gap-2 pt-3 text-xs font-semibold text-neutral-400">
          <span className="truncate">{hostname}</span>
          <ArrowSquareOut
            size={16}
            weight="bold"
            className="ml-auto shrink-0 text-brand-400"
            aria-hidden
          />
        </div>
      </div>
    </a>
  )
}
