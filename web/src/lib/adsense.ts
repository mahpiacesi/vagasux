import { denyOptionalGoogleConsent, grantOptionalGoogleConsent } from '@/lib/cookieConsent'

/** Public publisher id already used on vagasux.com.br. */
export const ADSENSE_CLIENT_ID = 'ca-pub-3164888973924746'

const SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`

interface AdsByGoogle extends Array<Record<string, unknown>> {
  requestNonPersonalizedAds?: number
}

declare global {
  interface Window {
    adsbygoogle?: AdsByGoogle
  }
}

const MANUAL_AD = 'aside[aria-label="Publicidade"]'

function belongsToManualAd(el: Element) {
  return Boolean(el.closest(MANUAL_AD))
}

function isStrayAd(el: Element) {
  if (belongsToManualAd(el)) return false
  if (el.matches('ins.adsbygoogle, .google-auto-placed, .adsbygoogle-noablate')) return true
  if (/^(aswift_|google_ads_iframe|google_ads_top|google_ads_bottom)/.test(el.id)) return true
  if (el.tagName === 'IFRAME') {
    const src = (el as HTMLIFrameElement).getAttribute('src') || ''
    if (/googlesyndication|doubleclick\.net|googleadservices/.test(src)) return true
  }
  return false
}

function unpinManualAd() {
  const ins = document.querySelector(`${MANUAL_AD} ins.adsbygoogle`)
  if (ins instanceof HTMLElement && getComputedStyle(ins).position === 'fixed') {
    ins.style.setProperty('position', 'static', 'important')
    ins.style.setProperty('top', 'auto', 'important')
    ins.style.setProperty('bottom', 'auto', 'important')
  }
  const frame = document.querySelector(`${MANUAL_AD} iframe`)
  if (frame instanceof HTMLElement && getComputedStyle(frame).position === 'fixed') {
    frame.style.setProperty('position', 'absolute', 'important')
    frame.style.setProperty('top', '0', 'important')
    frame.style.setProperty('left', '0', 'important')
    frame.style.setProperty('bottom', 'auto', 'important')
  }
}

/** Drops automatic ads that stick past the footer and clears the blank scroll they add. */
function releasePageEnd() {
  for (const el of [document.documentElement, document.body]) {
    if (el.style.paddingBottom) el.style.paddingBottom = ''
    if (el.style.marginBottom) el.style.marginBottom = ''
    if (el.style.minHeight) el.style.minHeight = ''
  }

  unpinManualAd()

  for (const el of [...document.querySelectorAll('ins.adsbygoogle, .google-auto-placed, .adsbygoogle-noablate, iframe')]) {
    if (!isStrayAd(el)) continue
    const host = el.parentElement
    if (
      host &&
      host !== document.body &&
      host !== document.documentElement &&
      !host.closest('#root') &&
      isStrayAd(host)
    ) {
      host.remove()
    } else {
      el.remove()
    }
  }
}

let pageEndGuardStarted = false
let releasingPageEnd = false

function keepFooterAtPageEnd() {
  if (pageEndGuardStarted) return
  pageEndGuardStarted = true

  const run = () => {
    if (releasingPageEnd) return
    releasingPageEnd = true
    try {
      releasePageEnd()
    } finally {
      releasingPageEnd = false
    }
  }

  run()
  const observer = new MutationObserver(run)
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['style', 'class'],
  })
}

/** Loads the AdSense script once. Manual units are pushed separately. */
export function loadAdSense(personalized: boolean) {
  const ads = (window.adsbygoogle = window.adsbygoogle || []) as AdsByGoogle
  ads.requestNonPersonalizedAds = personalized ? 0 : 1
  if (personalized) grantOptionalGoogleConsent()
  else denyOptionalGoogleConsent()

  keepFooterAtPageEnd()

  if (document.querySelector(`script[src="${SCRIPT_SRC}"]`)) return

  const script = document.createElement('script')
  script.async = true
  script.src = SCRIPT_SRC
  script.crossOrigin = 'anonymous'
  document.head.appendChild(script)
}

export function pushAdSenseUnit() {
  try {
    ;(window.adsbygoogle = window.adsbygoogle || []).push({})
  } catch {
    // The unit retries on the next mount if the script rejected this push.
  }
}
