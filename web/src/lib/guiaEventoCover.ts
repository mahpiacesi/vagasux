import type { GuiaEvento } from '@/data/guiaEventos'

/** Resolve capa do evento a partir do snapshot (imageUrl baixada do Notion). */
export function resolveEventoCoverUrl(evento: GuiaEvento): string | null {
  return evento.imageUrl ?? null
}
