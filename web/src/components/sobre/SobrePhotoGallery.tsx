import { Umbrella } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/guilda/ScrollReveal'
import { sobreGallery, type SobreGalleryItem } from '@/data/sobre'
import { cn } from '@/lib/utils'

const emptyTiles = [
  { id: 'tile-1', span: 'featured', tone: 'brand' },
  { id: 'tile-2', span: 'tall', tone: 'yellow' },
  { id: 'tile-3', span: 'normal', tone: 'lilac' },
  { id: 'tile-4', span: 'wide', tone: 'ink' },
  { id: 'tile-5', span: 'normal', tone: 'yellow' },
  { id: 'tile-6', span: 'tall', tone: 'brand' },
  { id: 'tile-7', span: 'normal', tone: 'lilac' },
  { id: 'tile-8', span: 'wide', tone: 'yellow' },
] as const

const spanClass: Record<NonNullable<SobreGalleryItem['span']>, string> = {
  normal: 'sobre-gallery-item--normal',
  wide: 'sobre-gallery-item--wide',
  tall: 'sobre-gallery-item--tall',
  featured: 'sobre-gallery-item--featured',
}

const toneClass = {
  brand: 'bg-brand-200/80 text-brand-500',
  yellow: 'bg-complementary-200/90 text-neutral-500',
  lilac: 'bg-brand-100 text-brand-400',
  ink: 'bg-neutral-500 text-complementary-300',
} as const

function PhotoCard({ item }: { item: SobreGalleryItem }) {
  const media = (
    <>
      <img
        src={item.image}
        alt={item.alt}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        loading="lazy"
        decoding="async"
      />
      {item.caption || item.title || item.date || item.location ? (
        <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-neutral-500/80 to-transparent p-4 pt-12 text-neutral-100">
          {item.title ? (
            <p className="text-sm font-black tracking-tight">{item.title}</p>
          ) : null}
          {item.caption ? (
            <p className="mt-0.5 text-xs leading-relaxed text-neutral-100/85">
              {item.caption}
            </p>
          ) : null}
          {item.date || item.location ? (
            <p className="mt-1 text-[0.7rem] font-semibold tracking-wide text-complementary-200 uppercase">
              {[item.date, item.location].filter(Boolean).join(' · ')}
            </p>
          ) : null}
        </div>
      ) : null}
    </>
  )

  const className =
    'group relative block h-full overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2'

  if (item.href) {
    const isInternal = item.href.startsWith('/')
    if (isInternal) {
      return (
        <Link className={className} to={item.href}>
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
      >
        {media}
      </a>
    )
  }

  return <figure className={className}>{media}</figure>
}

function EmptyTile({
  span,
  tone,
}: Omit<(typeof emptyTiles)[number], 'id'> & { delayMs?: number }) {
  return (
    <div
      className={cn(
        'sobre-gallery-item flex items-center justify-center overflow-hidden rounded-2xl',
        spanClass[span],
        toneClass[tone],
      )}
    >
      <Umbrella
        size={span === 'featured' ? 64 : span === 'tall' ? 48 : 36}
        weight="duotone"
        aria-hidden
      />
    </div>
  )
}

export function SobrePhotoGallery() {
  const photos = sobreGallery
  const isEmpty = photos.length === 0

  if (isEmpty) {
    return (
      <>
        <p className="sr-only">
          As fotos da comunidade serão publicadas neste mural.
        </p>
        <div className="sobre-gallery" aria-hidden>
          {emptyTiles.map((tile) => (
            <EmptyTile key={tile.id} span={tile.span} tone={tile.tone} />
          ))}
        </div>
      </>
    )
  }

  return (
    <div className="sobre-gallery">
      {photos.map((item, index) => (
        <ScrollReveal
          key={item.id}
          delayMs={index * 50}
          className={cn(
            'sobre-gallery-item min-h-0',
            spanClass[item.span ?? 'normal'],
          )}
        >
          <PhotoCard item={item} />
        </ScrollReveal>
      ))}
    </div>
  )
}
