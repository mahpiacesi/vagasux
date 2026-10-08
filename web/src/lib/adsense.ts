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

/** Loads the AdSense script once. Manual units are pushed separately. */
export function loadAdSense(personalized: boolean) {
  const ads = (window.adsbygoogle = window.adsbygoogle || []) as AdsByGoogle
  ads.requestNonPersonalizedAds = personalized ? 0 : 1
  if (personalized) grantOptionalGoogleConsent()
  else denyOptionalGoogleConsent()

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
