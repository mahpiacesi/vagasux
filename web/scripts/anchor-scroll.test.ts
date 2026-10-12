import assert from 'node:assert/strict'
import { describe, it } from 'node:test'
import {
  anchorScrollDuration,
  easeOutCubic,
  resolveAnchorScroll,
} from '../src/lib/anchorScroll.ts'

const base = {
  hasSeenLocation: true,
  samePathname: true,
  hashChanged: true,
  hash: '#planos',
  reducedMotion: false,
  preferSmooth: true,
}

describe('resolveAnchorScroll', () => {
  it('animates a Guilda anchor clicked on the same page', () => {
    assert.deepEqual(resolveAnchorScroll(base), {
      type: 'smooth-hash',
      hash: '#planos',
    })
  })

  it('jumps when the person prefers reduced motion', () => {
    assert.deepEqual(resolveAnchorScroll({ ...base, reducedMotion: true }), {
      type: 'instant-hash',
      hash: '#planos',
    })
  })

  it('keeps other in-page hashes instant', () => {
    assert.deepEqual(resolveAnchorScroll({ ...base, preferSmooth: false }), {
      type: 'instant-hash',
      hash: '#planos',
    })
  })

  it('jumps on the first visit, including a deep link', () => {
    assert.deepEqual(
      resolveAnchorScroll({ ...base, hasSeenLocation: false, hash: '' }),
      { type: 'instant-top' },
    )
    assert.deepEqual(
      resolveAnchorScroll({ ...base, hasSeenLocation: false }),
      { type: 'instant-hash', hash: '#planos' },
    )
  })

  it('jumps when the route changes', () => {
    assert.deepEqual(
      resolveAnchorScroll({ ...base, samePathname: false, hash: '' }),
      { type: 'instant-top' },
    )
    assert.deepEqual(resolveAnchorScroll({ ...base, samePathname: false }), {
      type: 'instant-hash',
      hash: '#planos',
    })
  })

  it('does nothing when the hash did not change', () => {
    assert.deepEqual(resolveAnchorScroll({ ...base, hashChanged: false }), {
      type: 'none',
    })
  })

  it('returns to the top when the hash is cleared', () => {
    assert.deepEqual(resolveAnchorScroll({ ...base, hash: '' }), {
      type: 'instant-top',
    })
  })
})

describe('anchor scroll motion', () => {
  it('keeps short hops visible and long hops bounded', () => {
    assert.equal(anchorScrollDuration(0), 0)
    assert.equal(anchorScrollDuration(1), 0)
    assert.equal(anchorScrollDuration(80), 600)
    assert.equal(anchorScrollDuration(2000), 900)
    assert.equal(anchorScrollDuration(4000), 1200)
  })

  it('eases out of the scroll', () => {
    assert.equal(easeOutCubic(0), 0)
    assert.equal(easeOutCubic(1), 1)
    assert.ok(easeOutCubic(0.5) > 0.8)
  })
})
