import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  emptyJobFilters,
  parseJobFiltersFromSearchParams,
  preserveJobQueryWhileTyping,
  serializeJobFiltersToSearchParams,
} from '../src/lib/jobSearchParams.ts'

test('o espaço entre palavras continua no campo enquanto a URL já tem o termo', () => {
  assert.equal(preserveJobQueryWhileTyping('product ', 'product'), 'product ')
  assert.equal(preserveJobQueryWhileTyping(' ', ''), ' ')
  assert.equal(
    preserveJobQueryWhileTyping('content design ', 'content design'),
    'content design ',
  )
})

test('um termo diferente na URL substitui o rascunho', () => {
  assert.equal(preserveJobQueryWhileTyping('product ', 'ux research'), 'ux research')
  assert.equal(preserveJobQueryWhileTyping('product designer', ''), '')
})

test('a URL compartilhável guarda a frase com espaço e sem espaço sobrando', () => {
  const params = serializeJobFiltersToSearchParams({
    ...emptyJobFilters,
    query: 'product designer ',
  })

  assert.equal(params.get('q'), 'product designer')
  assert.equal(
    parseJobFiltersFromSearchParams(new URLSearchParams('q=product+designer')).query,
    'product designer',
  )
})
