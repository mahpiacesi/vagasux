const STORAGE_KEY = 'vagasux:cookie-consent'
const CONSENT_VERSION = '2'
const CONSENT_VERSION_KEY = 'vagasux:cookie-consent-version'
const CONSENT_CHANGED_EVENT = 'vagasux:cookie-consent-changed'
const OPEN_BANNER_EVENT = 'vagasux:cookie-banner-open'

export type CookieConsentChoice = 'essential' | 'analytics'

declare global {
  interface Window {
    clarity?: ((...args: unknown[]) => void) & { q?: unknown[][] }
    dataLayer?: unknown[]
    gtag?: (...args: unknown[]) => void
  }
}

function readStoredConsent(): CookieConsentChoice | null {
  try {
    if (localStorage.getItem(CONSENT_VERSION_KEY) !== CONSENT_VERSION) return null
    const value = localStorage.getItem(STORAGE_KEY)
    if (value === 'essential' || value === 'analytics') return value
  } catch {
    // Private browsing or blocked storage — treat as no consent yet.
  }
  return null
}

function writeStoredConsent(choice: CookieConsentChoice) {
  try {
    localStorage.setItem(STORAGE_KEY, choice)
    localStorage.setItem(CONSENT_VERSION_KEY, CONSENT_VERSION)
  } catch {
    // Ignore write failures; analytics still run for this session if accepted.
  }
}

let googleConsentReady = false

export function grantOptionalGoogleConsent() {
  window.dataLayer = window.dataLayer || []
  if (!window.gtag) {
    window.gtag = function gtag(...args: unknown[]) {
      window.dataLayer!.push(args)
    }
  }
  if (googleConsentReady) return
  googleConsentReady = true
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
  })
}

function loadClarity(projectId: string) {
  if (document.querySelector(`script[src="https://www.clarity.ms/tag/${projectId}"]`)) {
    window.clarity?.('consent', true)
    return
  }

  ;(function (
    c: Window,
    l: Document,
    a: 'clarity',
    r: 'script',
    i: string,
  ) {
    type ClarityFn = ((...args: unknown[]) => void) & { q?: unknown[][] }
    const target = c as Window & { clarity?: ClarityFn }
    target[a] =
      target[a] ||
      (((...args: unknown[]) => {
        ;(target[a]!.q = target[a]!.q || []).push(args)
      }) as ClarityFn)
    const t = l.createElement(r)
    t.async = true
    t.src = `https://www.clarity.ms/tag/${i}`
    const y = l.getElementsByTagName(r)[0]
    y?.parentNode?.insertBefore(t, y)
  })(window, document, 'clarity', 'script', projectId)

  window.clarity?.('consent', true)
}

function loadGoogleAnalytics(measurementId: string) {
  grantOptionalGoogleConsent()
  if (document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${measurementId}"]`)) {
    return
  }

  const gtag = window.gtag
  if (!gtag) return
  gtag('js', new Date())

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
  gtag('config', measurementId, { anonymize_ip: true })
}

export function applyAnalyticsIfConsented(
  choice: CookieConsentChoice | null = readStoredConsent(),
) {
  if (choice !== 'analytics') return

  const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID
  const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID

  if (clarityId) loadClarity(clarityId)
  if (gaId) loadGoogleAnalytics(gaId)
}

export function getCookieConsent(): CookieConsentChoice | null {
  return readStoredConsent()
}

export function setCookieConsent(choice: CookieConsentChoice) {
  writeStoredConsent(choice)
  if (choice === 'analytics') {
    applyAnalyticsIfConsented('analytics')
  }
  window.dispatchEvent(new Event(CONSENT_CHANGED_EVENT))
}

/** Asks the first-visit banner to show again, without discarding the current choice. */
export function reopenCookieBanner() {
  window.dispatchEvent(new Event(OPEN_BANNER_EVENT))
}

export function subscribeCookieConsent(listener: () => void) {
  window.addEventListener(CONSENT_CHANGED_EVENT, listener)
  return () => window.removeEventListener(CONSENT_CHANGED_EVENT, listener)
}

export function subscribeCookieBannerOpen(listener: () => void) {
  window.addEventListener(OPEN_BANNER_EVENT, listener)
  return () => window.removeEventListener(OPEN_BANNER_EVENT, listener)
}
