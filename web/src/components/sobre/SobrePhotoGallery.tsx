import type { ReactNode } from 'react'
import { Umbrella } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { sobreGallery, type SobreGalleryItem } from '@/data/sobre'
import { cn } from '@/lib/utils'

const emptyTiles = [
  { id: 'tile-1', span: 'featured', tone: 'brand' },
  { id: 'tile-2', span: 'normal', tone: 'lilac' },
  { id: 'tile-3', span: 'tall', tone: 'yellow' },
  { id: 'tile-4', span: 'wide', tone: 'ink' },
  { id: 'tile-5', span: 'normal', tone: 'yellow' },
  { id: 'tile-6', span: 'tall', tone: 'brand' },
  { id: 'tile-7', span: 'wide', tone: 'yellow' },
  { id: 'tile-8', span: 'tall', tone: 'lilac' },
  { id: 'tile-9', span: 'featured', tone: 'brand' },
  { id: 'tile-10', span: 'normal', tone: 'ink' },
  { id: 'tile-11', span: 'tall', tone: 'yellow' },
  { id: 'tile-12', span: 'wide', tone: 'lilac' },
] as const

const widthClass: Record<NonNullable<SobreGalleryItem['span']>, string> = {
  normal: 'sobre-gallery-item--normal',
  wide: 'sobre-gallery-item--wide',
  tall: 'sobre-gallery-item--tall',
  featured: 'sobre-gallery-item--featured',
}

const fallbackSpans = ['featured', 'normal', 'tall', 'wide'] as const

const toneClass = {
  brand: 'bg-brand-200/80 text-brand-500',
  yellow: 'bg-complementary-200/90 text-neutral-500',
  lilac: 'bg-brand-100 text-brand-400',
  ink: 'bg-neutral-500 text-complementary-300',
} as const

function loopRow<T>(items: readonly T[]): T[] {
  return [...items, ...items]
}

function fillRow<T>(items: readonly T[], min = 6): T[] {
  if (items.length === 0) return []
  const filled: T[] = []
  while (filled.length < min) filled.push(...items)
  return filled
}

function splitRows<T>(items: readonly T[]): T[][] {
  if (items.length <= 4) return [fillRow(items)]
  const rowA = fillRow(items.filter((_, index) => index % 2 === 0))
  const rowB = fillRow(items.filter((_, index) => index % 2 === 1))
  return [rowA, rowB]
}

function PhotoCard({
  item,
  duplicate = false,
}: {
  item: SobreGalleryItem
  duplicate?: boolean
}) {
  const pill = item.title || item.caption
  const media = (
    <>
      <img
        src={item.image}
        alt={duplicate ? '' : item.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
      />
      {pill ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 md:p-4">
          <span className="inline-flex max-w-full items-center rounded-full bg-neutral-500/70 px-3 py-1 text-xs font-semibold text-neutral-100 backdrop-blur-sm">
            {pill}
          </span>
        </div>
      ) : null}
    </>
  )

  const className =
    'group relative block h-full w-full overflow-hidden rounded-[1.25rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 md:rounded-3xl'

  if (item.href) {
    const isInternal = item.href.startsWith('/')
    if (isInternal) {
      return (
        <Link
          className={className}
          to={item.href}
          tabIndex={duplicate ? -1 : undefined}
          aria-hidden={duplicate || undefined}
        >
          {media}
        </Link>
      )
    }
    return (
      <a
        className={className}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        tabIndex={duplicate ? -1 : undefined}
        aria-hidden={duplicate || undefined}
      >
        {media}
      </a>
    )
  }

  return <figure className={className}>{media}</figure>
}

function EmptyTile({ span, tone }: Omit<(typeof emptyTiles)[number], 'id'>) {
  return (
    <div
      className={cn(
        'sobre-gallery-item flex items-center justify-center overflow-hidden rounded-[1.25rem] md:rounded-3xl',
        widthClass[span],
        toneClass[tone],
      )}
    >
      <Umbrella
        size={span === 'featured' ? 56 : span === 'wide' ? 44 : 32}
        weight="duotone"
        aria-hidden
      />
    </div>
  )
}

function GalleryRow({
  reverse = false,
  children,
}: {
  reverse?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={cn(
        'sobre-gallery-row',
        reverse && 'sobre-gallery-row--reverse',
      )}
    >
      <div className="sobre-gallery-track">{children}</div>
    </div>
  )
}

export function SobrePhotoGallery() {
  const photos = sobreGallery
  const isEmpty = photos.length === 0

  if (isEmpty) {
    const rowA = emptyTiles.slice(0, 6)
    const rowB = emptyTiles.slice(6)

    return (
      <>
        <p className="sr-only">
          As fotos da comunidade serão publicadas neste mural.
        </p>
        <div className="sobre-gallery" aria-hidden>
          <GalleryRow>
            {loopRow(rowA).map((tile, index) => (
              <EmptyTile
                key={`${tile.id}-${index}`}
                span={tile.span}
                tone={tile.tone}
              />
            ))}
          </GalleryRow>
          <GalleryRow reverse>
            {loopRow(rowB).map((tile, index) => (
              <EmptyTile
                key={`${tile.id}-${index}`}
                span={tile.span}
                tone={tile.tone}
              />
            ))}
          </GalleryRow>
        </div>
      </>
    )
  }

  const rows = splitRows(photos)

  return (
    <div className="sobre-gallery">
      {rows.map((row, rowIndex) => (
        <GalleryRow key={rowIndex} reverse={rowIndex % 2 === 1}>
          {loopRow(row).map((item, index) => {
            const duplicate = index >= row.length
            return (
              <div
                key={`${item.id}-${index}`}
                className={cn(
                  'sobre-gallery-item',
                  widthClass[
                    item.span ??
                      fallbackSpans[(index % row.length) % fallbackSpans.length]
                  ],
                )}
                aria-hidden={duplicate || undefined}
              >
                <PhotoCard item={item} duplicate={duplicate} />
              </div>
            )
          })}
        </GalleryRow>
      ))}
    </div>
  )
}
