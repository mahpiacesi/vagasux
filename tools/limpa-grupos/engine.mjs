import { classifyMember, executionBlock, resolveMemberId } from './domain.mjs'
import { GROUPS, JOINABLE, PEOPLE, ROTEIROS, START, WINDOW_MS, noticeText } from './seed.mjs'

const TZ = 'America/Sao_Paulo'

export function createWorld() {
  const groups = {}
  for (const group of GROUPS) {
    const members = {}
    for (const member of group.members) {
      members[member.id] = {
        role: member.role,
        whitelisted: Boolean(member.whitelisted),
        present: true,
        leftReason: null,
      }
    }
    groups[group.id] = {
      id: group.id,
      name: group.name,
      key: group.key,
      members,
    }
  }
  return {
    now: START,
    people: structuredClone(PEOPLE),
    groups,
    campaigns: {},
  }
}

export function publishNotice(world, groupId) {
  const group = world.groups[groupId]
  if (!group) return { error: 'Grupo desconhecido.' }
  if (world.campaigns[groupId]) return { error: 'O aviso deste grupo já foi publicado.' }
  const openedAt = world.now
  world.campaigns[groupId] = {
    status: 'ouvindo',
    snapshot: Object.entries(group.members)
      .filter(([, member]) => member.present)
      .map(([id]) => id),
    openedAt,
    deadline: new Date(Date.parse(openedAt) + WINDOW_MS).toISOString(),
    gap: false,
    truth: {},
    seen: {},
    removedIds: [],
  }
  return {}
}

export function setReaction(world, groupId, rawId, emoji) {
  const campaign = world.campaigns[groupId]
  if (!campaign) return { error: 'Publique o aviso antes de registrar reação.' }
  if (campaign.status !== 'ouvindo') return { error: 'O prazo deste aviso já acabou.' }
  const memberId = resolveMemberId(world.people, rawId)
  if (!memberId) return { error: 'Reação de alguém que a lista não reconhece.' }
  const membership = world.groups[groupId].members[memberId]
  if (!membership?.present) return { error: 'Essa pessoa não está no grupo.' }
  const next = emoji || ''
  campaign.truth[memberId] = next
  if (!campaign.gap) campaign.seen[memberId] = next
  return {}
}

export function joinGroup(world, groupId, memberId) {
  const group = world.groups[groupId]
  if (!group) return { error: 'Grupo desconhecido.' }
  if (!world.campaigns[groupId]) return { error: 'Publique o aviso antes de simular uma entrada.' }
  if (world.campaigns[groupId].status === 'executada') return { error: 'Esta limpa já foi feita.' }
  if (!world.people[memberId]) return { error: 'Pessoa desconhecida.' }
  if (!JOINABLE[groupId]?.includes(memberId)) return { error: 'Essa entrada não faz parte do exemplo.' }
  if (group.members[memberId]?.present) return {}
  group.members[memberId] = {
    role: 'member',
    whitelisted: false,
    present: true,
    leftReason: null,
  }
  return {}
}

export function leaveGroup(world, groupId, memberId) {
  const campaign = world.campaigns[groupId]
  if (!campaign) return { error: 'Publique o aviso antes de simular uma saída.' }
  if (campaign.status === 'executada') return { error: 'Esta limpa já foi feita.' }
  const membership = world.groups[groupId]?.members[memberId]
  if (!membership?.present) return { error: 'Essa pessoa não está no grupo.' }
  if (membership.role === 'admin') return { error: 'O admin fica no grupo.' }
  membership.present = false
  membership.leftReason = 'saiu'
  return {}
}

export function closeDeadline(world, groupId) {
  const campaign = world.campaigns[groupId]
  if (!campaign) return { error: 'Publique o aviso antes de encerrar o prazo.' }
  if (campaign.status === 'executada') return { error: 'Esta limpa já foi feita.' }
  if (campaign.status === 'revisao') return {}
  world.now = new Date(Date.parse(campaign.deadline) + 60 * 1000).toISOString()
  campaign.status = 'revisao'
  return {}
}

export function dropSession(world, groupId) {
  const campaign = world.campaigns[groupId]
  if (!campaign) return { error: 'Publique o aviso antes de simular a queda.' }
  if (campaign.status === 'executada') return { error: 'Esta limpa já foi feita.' }
  campaign.gap = true
  return {}
}

export function rereadNotice(world, groupId) {
  const campaign = world.campaigns[groupId]
  if (!campaign) return { error: 'Publique o aviso antes de reler.' }
  if (!campaign.gap) return {}
  campaign.seen = { ...campaign.truth }
  campaign.gap = false
  return {}
}

export function executeRemoval(world, groupId, confirmCount) {
  const campaign = world.campaigns[groupId]
  const status = campaign?.status ?? 'sem-aviso'
  const leaving = campaign ? removalIds(world, groupId) : []
  const block = executionBlock({
    status,
    gap: Boolean(campaign?.gap),
    confirmCount: parseCount(confirmCount),
    removalCount: leaving.length,
  })
  if (block) return { error: block }
  const group = world.groups[groupId]
  for (const memberId of leaving) {
    const membership = group.members[memberId]
    membership.present = false
    membership.leftReason = 'removida'
  }
  campaign.removedIds = leaving
  campaign.status = 'executada'
  return {}
}

export function applyRoteiro(world, groupId) {
  const steps = ROTEIROS[groupId]
  if (!steps) return { error: 'Grupo desconhecido.' }
  if (world.campaigns[groupId]?.status === 'executada') {
    return { error: 'Esta limpa já foi feita. Recomece a simulação.' }
  }
  for (const step of steps) {
    const result = applyStep(world, groupId, step)
    if (result?.error) return result
  }
  return {}
}

export function view(world, groupId = 'g1') {
  const selectedId = world.groups[groupId] ? groupId : 'g1'
  return {
    simulated: true,
    nowLabel: formatWhen(world.now),
    groups: GROUPS.map((group) => summarize(world, group.id)),
    selected: detail(world, selectedId),
  }
}

function applyStep(world, groupId, step) {
  if (step.type === 'notice') {
    if (world.campaigns[groupId]) return {}
    return publishNotice(world, groupId)
  }
  if (step.type === 'reaction') return setReaction(world, groupId, step.rawId, step.emoji)
  if (step.type === 'join') return joinGroup(world, groupId, step.memberId)
  if (step.type === 'leave') return leaveGroup(world, groupId, step.memberId)
  return { error: 'Passo desconhecido.' }
}

function removalIds(world, groupId) {
  return listedMembers(world, groupId)
    .filter((member) => member.decision === 'sai')
    .map((member) => member.id)
}

function summarize(world, groupId) {
  const group = world.groups[groupId]
  const campaign = world.campaigns[groupId]
  const members = listedMembers(world, groupId)
  return {
    id: group.id,
    name: group.name,
    key: group.key,
    status: campaign?.status ?? 'sem-aviso',
    leaving: members.filter((member) => member.decision === 'sai').length,
    missed: campaign ? missedCount(campaign) : 0,
    gap: Boolean(campaign?.gap),
  }
}

function detail(world, groupId) {
  const group = world.groups[groupId]
  const campaign = world.campaigns[groupId]
  const members = listedMembers(world, groupId)
  const leaving = members.filter((member) => member.decision === 'sai')
  return {
    id: group.id,
    name: group.name,
    key: group.key,
    notice: noticeText(group),
    status: campaign?.status ?? 'sem-aviso',
    phase: phaseOf(campaign),
    openedLabel: campaign ? formatWhen(campaign.openedAt) : null,
    deadlineLabel: campaign ? formatWhen(campaign.deadline) : null,
    gap: Boolean(campaign?.gap),
    missed: campaign ? missedCount(campaign) : 0,
    members,
    leaving: leaving.length,
    staying: members.filter((member) => member.decision === 'fica').length,
    aside: members.filter((member) => member.decision === 'fora').length,
    removed: members.filter((member) => member.decision === 'removida').length,
    joinable: (JOINABLE[groupId] ?? [])
      .filter((id) => !group.members[id]?.present)
      .map((id) => ({ id, label: world.people[id].label })),
  }
}

function listedMembers(world, groupId) {
  const group = world.groups[groupId]
  const campaign = world.campaigns[groupId]
  const snapshot = new Set(campaign?.snapshot ?? [])
  const ids = new Set([
    ...snapshot,
    ...Object.entries(group.members)
      .filter(([, member]) => member.present)
      .map(([id]) => id),
  ])
  return [...ids]
    .map((id) => {
      const membership = group.members[id]
      const emoji = campaign?.seen[id] || ''
      const classified = classifyMember({
        hasCampaign: Boolean(campaign),
        inSnapshot: snapshot.has(id),
        present: Boolean(membership?.present),
        leftReason: membership?.leftReason ?? null,
        role: membership?.role ?? 'member',
        whitelisted: Boolean(membership?.whitelisted),
        activeReaction: emoji.length > 0,
      })
      return {
        id,
        label: world.people[id].label,
        role: membership?.role ?? 'member',
        whitelisted: Boolean(membership?.whitelisted),
        present: Boolean(membership?.present),
        emoji,
        ...classified,
      }
    })
    .sort((a, b) => a.label.localeCompare(b.label, 'pt'))
}

function missedCount(campaign) {
  const ids = new Set([...Object.keys(campaign.truth), ...Object.keys(campaign.seen)])
  let count = 0
  for (const id of ids) {
    if ((campaign.truth[id] || '') !== (campaign.seen[id] || '')) count += 1
  }
  return count
}

function phaseOf(campaign) {
  if (!campaign) return 'sem-aviso'
  if (campaign.status === 'ouvindo') return 'previa'
  if (campaign.status === 'revisao') return 'revisao'
  return 'executada'
}

function parseCount(value) {
  if (typeof value === 'number' && Number.isInteger(value)) return value
  if (typeof value === 'string' && /^\d+$/.test(value.trim())) return Number(value.trim())
  return null
}

function formatWhen(iso) {
  const text = new Intl.DateTimeFormat('pt-BR', {
    timeZone: TZ,
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))
  return `${text} (horário de Brasília)`
}
