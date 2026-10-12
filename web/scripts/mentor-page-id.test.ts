import assert from 'node:assert/strict'
import { test } from 'node:test'
import { resolveMentorPageId } from '../src/data/mentorPageIds'

test('keeps a Notion page id and normalizes it', () => {
  assert.equal(
    resolveMentorPageId('3C28CBB0D90480299C45F33F800BBADE'),
    '3c28cbb0-d904-8029-9c45-f33f800bbade',
  )
  assert.equal(
    resolveMentorPageId('3c28cbb0-d904-8029-9c45-f33f800bbade'),
    '3c28cbb0-d904-8029-9c45-f33f800bbade',
  )
})

test('resolves the fallback slug used before the mentor list loads', () => {
  assert.equal(resolveMentorPageId('anna-barros'), '3c28cbb0-d904-8029-9c45-f33f800bbade')
  assert.equal(resolveMentorPageId(' andre-hiroyuki '), '3c28cbb0-d904-80c0-a656-fd08a20dba33')
})

test('leaves an unknown value unchanged', () => {
  assert.equal(resolveMentorPageId('pessoa-nova'), 'pessoa-nova')
})
