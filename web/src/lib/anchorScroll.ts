export type AnchorScrollAction =
  | { type: 'smooth-hash'; hash: string }
  | { type: 'instant-hash'; hash: string }
  | { type: 'instant-top' }
  | { type: 'none' }

export function resolveAnchorScroll(input: {
  hasSeenLocation: boolean
  samePathname: boolean
  hashChanged: boolean
  hash: string
  reducedMotion: boolean
  preferSmooth: boolean
}): AnchorScrollAction {
  const inPageMove =
    input.hasSeenLocation && input.samePathname && input.hashChanged

  if (inPageMove && input.hash) {
    if (input.preferSmooth && !input.reducedMotion) {
      return { type: 'smooth-hash', hash: input.hash }
    }
    return { type: 'instant-hash', hash: input.hash }
  }

  if (!input.hasSeenLocation || !input.samePathname || (input.hashChanged && !input.hash)) {
    return input.hash
      ? { type: 'instant-hash', hash: input.hash }
      : { type: 'instant-top' }
  }

  return { type: 'none' }
}

export function anchorScrollDuration(distancePx: number) {
  const distance = Math.abs(distancePx)
  if (distance < 2) return 0
  return Math.round(Math.min(1200, Math.max(600, distance * 0.45)))
}

export function easeOutCubic(progress: number) {
  const t = Math.min(1, Math.max(0, progress))
  return 1 - (1 - t) ** 3
}

export function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

let activeFrame = 0
let cancelActiveScroll: (() => void) | null = null

export function stopAnchorScroll() {
  cancelActiveScroll?.()
  cancelActiveScroll = null
  if (activeFrame) cancelAnimationFrame(activeFrame)
  activeFrame = 0
}

function anchorTop(target: HTMLElement) {
  const margin = Number.parseFloat(getComputedStyle(target).scrollMarginTop) || 0
  const top = target.getBoundingClientRect().top + window.scrollY - margin
  const max = Math.max(
    0,
    document.documentElement.scrollHeight - window.innerHeight,
  )
  return Math.min(Math.max(0, top), max)
}

export function animateAnchorScroll(target: HTMLElement) {
  stopAnchorScroll()

  const start = window.scrollY
  const destination = anchorTop(target)
  const distance = destination - start
  const duration = anchorScrollDuration(distance)
  if (duration === 0) return

  const root = document.documentElement
  const previousBehavior = root.style.scrollBehavior
  root.style.scrollBehavior = 'auto'

  const startedAt = performance.now()
  let stopped = false

  const release = () => {
    root.style.scrollBehavior = previousBehavior
    window.removeEventListener('wheel', stop)
    window.removeEventListener('touchmove', stop)
    window.removeEventListener('keydown', onKey)
    if (cancelActiveScroll === stop) cancelActiveScroll = null
    if (activeFrame) cancelAnimationFrame(activeFrame)
    activeFrame = 0
  }

  const stop = () => {
    if (stopped) return
    stopped = true
    release()
  }

  const onKey = (event: KeyboardEvent) => {
    if (
      event.key === 'ArrowUp' ||
      event.key === 'ArrowDown' ||
      event.key === 'PageUp' ||
      event.key === 'PageDown' ||
      event.key === 'Home' ||
      event.key === 'End' ||
      event.key === ' '
    ) {
      stop()
    }
  }

  cancelActiveScroll = stop
  window.addEventListener('wheel', stop, { passive: true })
  window.addEventListener('touchmove', stop, { passive: true })
  window.addEventListener('keydown', onKey)

  const step = (now: number) => {
    if (stopped) return
    const progress = Math.min(1, (now - startedAt) / duration)
    window.scrollTo({
      top: start + distance * easeOutCubic(progress),
      left: 0,
      behavior: 'instant',
    })
    if (progress < 1) {
      activeFrame = requestAnimationFrame(step)
      return
    }
    stop()
  }

  activeFrame = requestAnimationFrame(step)
}

export function scrollToAnchor(hash: string, behavior: 'smooth' | 'instant') {
  const id = decodeURIComponent(hash.replace(/^#/, ''))
  const target = id ? document.getElementById(id) : null
  if (!target) return false

  if (behavior === 'smooth') {
    animateAnchorScroll(target)
    return true
  }

  stopAnchorScroll()
  target.scrollIntoView({ behavior: 'instant', block: 'start' })
  return true
}
