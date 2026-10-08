import { getCookieConsent, grantOptionalGoogleConsent } from '@/lib/cookieConsent'

/** Public publisher id already used on vagasux.com.br. */
export const ADSENSE_CLIENT_ID = 'ca-pub-3164888973924746'

const SCRIPT_SRC = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT_ID}`

declare global {
  interface Window {
    adsbygoogle?: Record<string, unknown>[]
  }
}

/** Loads the AdSense script once. Manual units are pushed separately. */
export function loadAdSense() {
  if (getCookieConsent() !== 'analytics') return
  grantOptionalGoogleConsent()
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
