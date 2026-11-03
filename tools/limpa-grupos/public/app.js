const app = document.querySelector('#app')
const state = { groupId: 'g1', error: '' }

const phaseTitle = {
  'sem-aviso': 'Lista',
  previa: 'Prévia da limpa',
  revisao: 'Revisão',
  executada: 'Resultado',
}

const pillLabel = {
  sai: 'Sai',
  fica: 'Fica',
  fora: 'Fora',
  removida: 'Saiu',
  'sem-aviso': 'No grupo',
}

boot()

async function boot() {
  await refresh()
}

async function refresh() {
  const response = await fetch(`/api/state?group=${state.groupId}`)
  render(await response.json())
}

async function act(action, body) {
  const response = await fetch(`/api/groups/${state.groupId}/${action}`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(body ?? {}),
  })
  const payload = await response.json()
  state.error = payload.error || ''
  render(payload)
}

function render(data) {
  const selected = data.selected
  app.innerHTML = `
    <div class="wrap">
      <div class="tabs" role="tablist">${data.groups.map((group) => tab(group)).join('')}</div>
      <div class="layout">
        ${noticeCard(selected)}
        ${listCard(selected)}
      </div>
      <p class="reset"><button class="secondary" type="button" data-reset>Recomeçar a simulação</button></p>
      <p class="hint">Agora: ${esc(data.nowLabel)}. Cada grupo tem o próprio prazo de 7 dias a partir do aviso.</p>
    </div>
  `
  app.querySelectorAll('[data-group]').forEach((button) => {
    button.addEventListener('click', async () => {
      state.groupId = button.dataset.group
      state.error = ''
      await refresh()
    })
  })
  bind('data-action', (button) => act(button.dataset.action))
  bind('data-react', (button) => act('reaction', { memberId: button.dataset.react, emoji: '✅' }))
  bind('data-clear', (button) => act('reaction', { memberId: button.dataset.clear, emoji: '' }))
  bind('data-leave', (button) => act('leave', { memberId: button.dataset.leave }))
  bind('data-join', (button) => act('join', { memberId: button.dataset.join }))
  const form = app.querySelector('form')
  form?.addEventListener('submit', (event) => {
    event.preventDefault()
    const input = form.querySelector('input')
    act('execute', { confirmCount: input.value })
  })
  app.querySelector('[data-reset]')?.addEventListener('click', async () => {
    state.groupId = 'g1'
    state.error = ''
    const response = await fetch('/api/reset', { method: 'POST' })
    render(await response.json())
  })
}

function tab(group) {
  const selected = group.id === state.groupId
  const extra = group.status === 'executada'
    ? 'feita'
    : group.status === 'sem-aviso'
      ? ''
      : `${group.leaving} na lista`
  return `<button class="tab" type="button" role="tab" aria-selected="${selected}" data-group="${group.id}">${esc(group.name)}<span class="count">${extra}</span></button>`
}

function noticeCard(group) {
  const published = group.status !== 'sem-aviso'
  return `
    <section class="card">
      <h2>Aviso no ${esc(group.name)}</h2>
      <p class="hint">Você publica este texto no grupo. A ferramenta reconhece a referência ${esc(group.key)}.</p>
      <div class="notice">${esc(group.notice)}</div>
      ${published ? `<p class="meta">Publicado em ${esc(group.openedLabel)}<br>Prazo: ${esc(group.deadlineLabel)}</p>` : ''}
      <div class="actions">
        <button class="primary" type="button" data-action="notice" ${published ? 'disabled' : ''}>Publicar aviso</button>
        <button class="secondary" type="button" data-action="roteiro" ${group.status === 'executada' ? 'disabled' : ''}>Preencher o exemplo</button>
        <button class="secondary" type="button" data-action="deadline" ${group.status === 'ouvindo' ? '' : 'disabled'}>Encerrar o prazo</button>
      </div>
      <div class="session">
        ${group.gap ? '<p class="hint">A sessão caiu. Reação nova fica de fora da lista até a releitura.</p>' : '<p class="hint">A sessão que lê as reações está no ar.</p>'}
        ${group.missed ? `<p class="hint">${group.missed === 1 ? '1 reação ficou de fora da lista.' : `${group.missed} reações ficaram de fora da lista.`}</p>` : ''}
        <button class="tiny" type="button" data-action="session-down" ${published && group.status !== 'executada' && !group.gap ? '' : 'disabled'}>Simular queda</button>
        <button class="tiny" type="button" data-action="reread" ${group.gap ? '' : 'disabled'}>Reler o aviso</button>
      </div>
    </section>
  `
}

function listCard(group) {
  return `
    <section class="card">
      <h2>${phaseTitle[group.phase]}</h2>
      <p class="hint">${listHint(group.phase)}</p>
      ${group.gap && group.phase !== 'sem-aviso' ? '<div class="banner">A sessão caiu durante o prazo. A remoção fica travada até reler o aviso.</div>' : ''}
      <div class="stats">
        <span class="stat">${group.leaving} na lista de saída</span>
        <span class="stat">${group.staying} ficam</span>
        <span class="stat">${group.aside} fora desta leva</span>
        ${group.removed ? `<span class="stat">${group.removed} já removidas</span>` : ''}
      </div>
      ${state.error && group.phase !== 'revisao' ? `<div class="banner">${esc(state.error)}</div>` : ''}
      <div class="rows">
        ${group.members.map((member) => row(member, group)).join('')}
      </div>
      ${group.status === 'ouvindo' ? group.joinable.map((person) => `<p class="actions"><button class="secondary" type="button" data-join="${esc(person.id)}">Simular alguém entrando depois do aviso</button></p>`).join('') : ''}
      ${confirmBlock(group)}
    </section>
  `
}

function listHint(phase) {
  if (phase === 'sem-aviso') return 'Publique o aviso para ver quem ficaria e quem sairia.'
  if (phase === 'previa') return 'Ninguém sai enquanto o prazo estiver aberto. Esta é a lista se ele acabasse agora.'
  if (phase === 'revisao') return 'Confira a lista e confirme o número para remover só deste grupo.'
  return 'A limpa deste grupo está feita. Os outros grupos não mudam.'
}

function row(member, group) {
  const canEdit = group.status === 'ouvindo' && member.present && member.decision !== 'fora'
  return `
    <article class="row">
      <div><span class="pill ${member.decision}">${member.decision === 'sai' && group.phase === 'previa' ? 'Sairia' : pillLabel[member.decision]}</span></div>
      <div>
        <p class="who">${esc(member.label)}${member.emoji ? `<span class="emoji">${esc(member.emoji)}</span>` : ''}</p>
        <p class="reason">${esc(member.reason)}</p>
        ${canEdit ? `
          <div class="row-actions">
            <button class="tiny" type="button" data-react="${esc(member.id)}">Reagir</button>
            <button class="tiny" type="button" data-clear="${esc(member.id)}" ${member.emoji ? '' : 'disabled'}>Tirar reação</button>
            ${member.role === 'admin' ? '' : `<button class="tiny" type="button" data-leave="${esc(member.id)}">Sair do grupo</button>`}
          </div>
        ` : ''}
      </div>
    </article>
  `
}

function confirmBlock(group) {
  if (group.phase === 'executada') {
    return `<div class="done">${group.removed} ${group.removed === 1 ? 'pessoa saiu' : 'pessoas saíram'} do ${esc(group.name)}. As outras continuam neste grupo.</div>`
  }
  if (group.phase !== 'revisao') return ''
  const invalid = Boolean(state.error)
  return `
    <form class="confirm">
      <label for="confirm-count">Digite ${group.leaving} para remover estas pessoas do ${esc(group.name)}</label>
      <input id="confirm-count" name="confirmCount" inputmode="numeric" autocomplete="off" aria-invalid="${invalid}" />
      <p class="field-error">${esc(state.error)}</p>
      <button class="primary" type="submit" ${group.gap ? 'disabled' : ''}>Remover do grupo</button>
    </form>
  `
}

function bind(attribute, handler) {
  app.querySelectorAll(`[${attribute}]`).forEach((button) => {
    button.addEventListener('click', () => handler(button))
  })
}

function esc(value) {
  return String(value ?? '').replace(/[&<>"']/g, (char) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  }[char]))
}
