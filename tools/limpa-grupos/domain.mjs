/**
 * Regra da limpa de um grupo.
 * A reação vale só no aviso daquele grupo. Admin, lista branca,
 * quem entrou depois e quem já saiu ficam de fora da remoção.
 */

/**
 * @param {{
 *   hasCampaign: boolean,
 *   inSnapshot: boolean,
 *   present: boolean,
 *   leftReason: 'saiu' | 'removida' | null,
 *   role: 'admin' | 'member',
 *   whitelisted: boolean,
 *   activeReaction: boolean,
 * }} member
 */
export function classifyMember(member) {
  if (!member.hasCampaign) {
    return { decision: 'sem-aviso', reason: 'O aviso ainda não foi publicado.' }
  }
  if (member.leftReason === 'removida') {
    return { decision: 'removida', reason: 'Removida nesta limpa.' }
  }
  if (!member.inSnapshot) {
    return { decision: 'fora', reason: 'Entrou depois do aviso.' }
  }
  if (!member.present) {
    return { decision: 'fora', reason: 'Saiu do grupo antes da limpa.' }
  }
  if (member.role === 'admin') {
    return { decision: 'fica', reason: 'Admin fica de fora da limpa.' }
  }
  if (member.whitelisted) {
    return { decision: 'fica', reason: 'Está na lista branca.' }
  }
  if (member.activeReaction) {
    return { decision: 'fica', reason: 'Reagiu ao aviso e manteve a reação.' }
  }
  return { decision: 'sai', reason: 'Estava no grupo e não tem reação ativa.' }
}

/** O WhatsApp às vezes manda o telefone e às vezes um id interno. */
export function resolveMemberId(people, rawId) {
  if (people[rawId]) return rawId
  for (const [memberId, person] of Object.entries(people)) {
    if (person.aliases?.includes(rawId)) return memberId
  }
  return null
}

/**
 * @param {{
 *   status: string,
 *   gap: boolean,
 *   confirmCount: number | null,
 *   removalCount: number,
 * }} input
 * @returns {string | null}
 */
export function executionBlock(input) {
  if (input.status === 'executada') return 'Esta limpa já foi feita.'
  if (input.status === 'sem-aviso') return 'Publique o aviso antes de remover.'
  if (input.status === 'ouvindo') return 'O prazo ainda está aberto.'
  if (input.status !== 'revisao') return 'A campanha ainda não está em revisão.'
  if (input.gap) return 'A sessão caiu durante o prazo. Releia o aviso antes de remover.'
  if (!Number.isInteger(input.confirmCount)) return 'Digite o número de pessoas da lista.'
  if (input.confirmCount !== input.removalCount) {
    return `Digite ${input.removalCount} para confirmar a remoção.`
  }
  return null
}
