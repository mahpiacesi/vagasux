/** Item com data opcional para preview "Adicionados recentemente". */
export type GuiaRecentItem = {
  id: string
  addedAt?: string
}

/**
 * Monta preview: destaque fixo no topo + N itens mais recentes (por addedAt).
 * O featured não entra na ordenação por data — só ocupa a primeira posição.
 */
export function pickGuiaRecentPreview<T extends GuiaRecentItem>(
  items: readonly T[],
  featuredId: string | null | undefined,
  limit = 5,
): T[] {
  const featured = featuredId
    ? items.find((item) => item.id === featuredId) ?? null
    : null
  const pool = items.filter((item) => item.id !== featuredId)
  const sorted = [...pool].sort((a, b) => {
    if (a.addedAt && b.addedAt) {
      return new Date(b.addedAt).getTime() - new Date(a.addedAt).getTime()
    }
    if (a.addedAt) return -1
    if (b.addedAt) return 1
    return 0
  })
  const previewCount = featured ? limit - 1 : limit
  const recent = sorted.slice(0, previewCount)
  return featured ? [featured, ...recent] : recent
}
