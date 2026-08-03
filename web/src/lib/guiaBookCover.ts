import type { GuiaBook } from '@/data/guiaBooks'
import { guiaBookCoverOverrides } from '@/data/guiaBookCoverOverrides'
import { amazonCoverUrl } from '@/lib/amazonCover'

/** Resolve capa: override manual → padrão Amazon P/{ASIN}. */
export function resolveBookCoverUrl(book: GuiaBook): string | null {
  const override = guiaBookCoverOverrides[book.id]
  if (override) return override

  if (book.coverUrl) return book.coverUrl

  return amazonCoverUrl(book.url)
}
