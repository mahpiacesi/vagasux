import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import { jobAdAfterCounts } from '../src/lib/jobAdSlots.ts'

describe('job ad slots', () => {
  it('keeps one ad after a short list', () => {
    assert.deepEqual(jobAdAfterCounts(0), [])
    assert.deepEqual(jobAdAfterCounts(1), [1])
    assert.deepEqual(jobAdAfterCounts(7), [7])
  })

  it('places the first ad after the eighth job, then every ten', () => {
    assert.deepEqual(jobAdAfterCounts(8), [8])
    assert.deepEqual(jobAdAfterCounts(15), [8])
    assert.deepEqual(jobAdAfterCounts(18), [8, 18])
    assert.deepEqual(jobAdAfterCounts(28), [8, 18, 28])
  })
})
