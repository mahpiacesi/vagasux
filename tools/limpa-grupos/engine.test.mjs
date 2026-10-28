import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  applyRoteiro,
  closeDeadline,
  createWorld,
  dropSession,
  executeRemoval,
  joinGroup,
  publishNotice,
  rereadNotice,
  setReaction,
  view,
} from './engine.mjs'

function decisions(world, groupId) {
  return Object.fromEntries(view(world, groupId).selected.members.map((member) => [member.id, member.decision]))
}

test('o exemplo do #1 separa quem sai, quem fica e quem está fora da leva', () => {
  const world = createWorld()
  assert.equal(applyRoteiro(world, 'g1').error, undefined)
  closeDeadline(world, 'g1')
  const selected = view(world, 'g1').selected
  assert.equal(selected.leaving, 2)
  assert.deepEqual(decisions(world, 'g1'), {
    admin: 'fica',
    branca: 'fica',
    'lid-ok': 'fica',
    nova: 'fora',
    quieta: 'sai',
    reagiu: 'fica',
    'so-no-1': 'fica',
    sumiu: 'fora',
    tirou: 'sai',
  })
  assert.equal(selected.members.find((member) => member.id === 'lid-ok').emoji, '❤️')
})

test('a mesma pessoa pode ficar no #1 e sair no #2', () => {
  const world = createWorld()
  applyRoteiro(world, 'g1')
  applyRoteiro(world, 'g2')
  closeDeadline(world, 'g1')
  closeDeadline(world, 'g2')
  assert.equal(decisions(world, 'g1')['so-no-1'], 'fica')
  assert.equal(decisions(world, 'g2')['so-no-1'], 'sai')
  assert.equal(decisions(world, 'g1').tirou, 'sai')
  assert.equal(decisions(world, 'g2').tirou, 'fica')
})

test('remover no #1 não tira a pessoa do #2 nem das Damas', () => {
  const world = createWorld()
  applyRoteiro(world, 'g1')
  applyRoteiro(world, 'g2')
  applyRoteiro(world, 'g3')
  closeDeadline(world, 'g1')
  closeDeadline(world, 'g2')
  const g1 = view(world, 'g1').selected
  assert.equal(executeRemoval(world, 'g1', g1.leaving).error, undefined)
  assert.equal(decisions(world, 'g1').quieta, 'removida')
  assert.equal(decisions(world, 'g2').quieta, 'sai')
  assert.equal(view(world, 'g2').selected.members.find((member) => member.id === 'quieta').present, true)
  assert.equal(view(world, 'g3').selected.members.find((member) => member.id === 'reagiu').present, true)
  assert.match(executeRemoval(world, 'g1', 2).error, /já foi feita/)
})

test('número errado não remove ninguém', () => {
  const world = createWorld()
  applyRoteiro(world, 'g3')
  closeDeadline(world, 'g3')
  const before = decisions(world, 'g3')
  assert.match(executeRemoval(world, 'g3', 0).error, /Digite 1/)
  assert.deepEqual(decisions(world, 'g3'), before)
  assert.equal(executeRemoval(world, 'g3', 1).error, undefined)
  assert.equal(decisions(world, 'g3')['damas-quieta'], 'removida')
  assert.equal(decisions(world, 'g3')['damas-reagiu'], 'fica')
})

test('reação com a sessão caída só entra na lista depois da releitura', () => {
  const world = createWorld()
  publishNotice(world, 'g2')
  dropSession(world, 'g2')
  assert.equal(setReaction(world, 'g2', 'quieta', '✅').error, undefined)
  closeDeadline(world, 'g2')
  assert.equal(view(world, 'g2').selected.gap, true)
  assert.equal(view(world, 'g2').selected.missed, 1)
  assert.equal(decisions(world, 'g2').quieta, 'sai')
  assert.match(executeRemoval(world, 'g2', 4).error, /sessão caiu/)
  rereadNotice(world, 'g2')
  assert.equal(decisions(world, 'g2').quieta, 'fica')
  assert.equal(view(world, 'g2').selected.gap, false)
})

test('quem entra depois do aviso não entra na foto', () => {
  const world = createWorld()
  publishNotice(world, 'g1')
  joinGroup(world, 'g1', 'nova')
  closeDeadline(world, 'g1')
  assert.equal(decisions(world, 'g1').nova, 'fora')
})
