/** Casos fictícios para ver a regra. Não são membros da VagasUX. */

export const START = '2026-11-02T15:00:00.000Z'
export const WINDOW_MS = 7 * 24 * 60 * 60 * 1000

export const PEOPLE = {
  admin: { label: 'Admin' },
  branca: { label: 'Lista branca' },
  reagiu: { label: 'Confirma nos grupos em que reage' },
  'so-no-1': { label: 'Reage só no #1' },
  tirou: { label: 'Tira a reação no #1 e mantém no #2' },
  quieta: { label: 'Não reage' },
  sumiu: { label: 'Sai por conta própria' },
  'lid-ok': { label: 'Reage com o id interno', aliases: ['lid:lid-ok'] },
  nova: { label: 'Entra depois do aviso' },
  'damas-reagiu': { label: 'Confirma nas Damas' },
  'damas-quieta': { label: 'Não reage nas Damas' },
}

export const GROUPS = [
  {
    id: 'g1',
    name: '#1 VagasUX',
    key: 'LIMPA-1',
    members: [
      { id: 'admin', role: 'admin' },
      { id: 'branca', role: 'member', whitelisted: true },
      { id: 'reagiu', role: 'member' },
      { id: 'so-no-1', role: 'member' },
      { id: 'tirou', role: 'member' },
      { id: 'quieta', role: 'member' },
      { id: 'sumiu', role: 'member' },
      { id: 'lid-ok', role: 'member' },
    ],
  },
  {
    id: 'g2',
    name: '#2 VagasUX',
    key: 'LIMPA-2',
    members: [
      { id: 'admin', role: 'admin' },
      { id: 'reagiu', role: 'member' },
      { id: 'so-no-1', role: 'member' },
      { id: 'tirou', role: 'member' },
      { id: 'quieta', role: 'member' },
    ],
  },
  {
    id: 'g3',
    name: 'Damas da VagasUX',
    key: 'LIMPA-DAMAS',
    members: [
      { id: 'admin', role: 'admin' },
      { id: 'reagiu', role: 'member' },
      { id: 'damas-reagiu', role: 'member' },
      { id: 'damas-quieta', role: 'member' },
    ],
  },
]

/** Quem a simulação pode fazer entrar depois do aviso. */
export const JOINABLE = {
  g1: ['nova'],
  g2: [],
  g3: [],
}

export const ROTEIROS = {
  g1: [
    { type: 'notice' },
    { type: 'reaction', rawId: 'reagiu', emoji: '✅' },
    { type: 'reaction', rawId: 'so-no-1', emoji: '✅' },
    { type: 'reaction', rawId: 'lid:lid-ok', emoji: '❤️' },
    { type: 'reaction', rawId: 'tirou', emoji: '✅' },
    { type: 'reaction', rawId: 'tirou', emoji: '' },
    { type: 'leave', memberId: 'sumiu' },
    { type: 'join', memberId: 'nova' },
  ],
  g2: [
    { type: 'notice' },
    { type: 'reaction', rawId: 'reagiu', emoji: '✅' },
    { type: 'reaction', rawId: 'tirou', emoji: '👍' },
  ],
  g3: [
    { type: 'notice' },
    { type: 'reaction', rawId: 'reagiu', emoji: '✅' },
    { type: 'reaction', rawId: 'damas-reagiu', emoji: '✅' },
  ],
}

export function noticeText(group) {
  return [
    `Vamos liberar vaga no ${group.name}.`,
    '',
    'Se você quer continuar neste grupo, reaja a esta mensagem com qualquer emoji até o prazo.',
    'Tirar a reação conta como não confirmar.',
    'Quem entrar depois deste aviso fica para a próxima leva.',
    '',
    `Ref: ${group.key}`,
  ].join('\n')
}
