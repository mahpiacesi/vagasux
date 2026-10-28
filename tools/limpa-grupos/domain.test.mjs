import assert from 'node:assert/strict'
import { test } from 'node:test'
import { classifyMember, executionBlock, resolveMemberId } from './domain.mjs'

const base = {
  hasCampaign: true,
  inSnapshot: true,
  present: true,
  leftReason: null,
  role: 'member',
  whitelisted: false,
  activeReaction: false,
}

test('sem reação ativa sai do grupo', () => {
  assert.equal(classifyMember(base).decision, 'sai')
})

test('reação mantida fica', () => {
  assert.equal(classifyMember({ ...base, activeReaction: true }).decision, 'fica')
})

test('admin fica mesmo sem reação', () => {
  assert.equal(classifyMember({ ...base, role: 'admin' }).decision, 'fica')
})

test('lista branca fica mesmo sem reação', () => {
  assert.equal(classifyMember({ ...base, whitelisted: true }).decision, 'fica')
})

test('quem entra depois fica de fora da leva', () => {
  assert.equal(classifyMember({ ...base, inSnapshot: false }).decision, 'fora')
})

test('quem sai sozinha não entra na remoção', () => {
  const result = classifyMember({ ...base, present: false, leftReason: 'saiu' })
  assert.equal(result.decision, 'fora')
})

test('quem a limpa removeu aparece como removida', () => {
  const result = classifyMember({ ...base, present: false, leftReason: 'removida' })
  assert.equal(result.decision, 'removida')
})

test('id interno aponta para a mesma pessoa', () => {
  const people = { 'lid-ok': { label: 'Reage com o id interno', aliases: ['lid:lid-ok'] } }
  assert.equal(resolveMemberId(people, 'lid:lid-ok'), 'lid-ok')
  assert.equal(resolveMemberId(people, 'lid-ok'), 'lid-ok')
  assert.equal(resolveMemberId(people, 'outra'), null)
})

test('execução pede o número certo e trava com sessão caída', () => {
  assert.match(executionBlock({ status: 'ouvindo', gap: false, confirmCount: 2, removalCount: 2 }), /prazo/i)
  assert.match(executionBlock({ status: 'revisao', gap: true, confirmCount: 2, removalCount: 2 }), /sessão caiu/i)
  assert.match(executionBlock({ status: 'revisao', gap: false, confirmCount: 1, removalCount: 2 }), /Digite 2/)
  assert.equal(executionBlock({ status: 'revisao', gap: false, confirmCount: 2, removalCount: 2 }), null)
})
