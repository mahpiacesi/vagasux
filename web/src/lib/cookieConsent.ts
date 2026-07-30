const STORAGE_KEY = 'vagasux:cookie-consent'
const OPEN_PREFERENCES_EVENT = 'vagasux:open-cookie-preferences'

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
  } catch {
    // Ignore write failures; analytics still run for this session if accepted.
  }
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
  if (window.gtag) return

  window.dataLayer = window.dataLayer || []
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer!.push(args)
  }
  window.gtag('js', new Date())
  window.gtag('consent', 'default', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`
  document.head.appendChild(script)
  window.gtag('config', measurementId, { anonymize_ip: true })
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
}

export function openCookiePreferences() {
  window.dispatchEvent(new Event(OPEN_PREFERENCES_EVENT))
}

export function subscribeCookiePreferencesOpen(listener: () => void) {
  window.addEventListener(OPEN_PREFERENCES_EVENT, listener)
  return () => window.removeEventListener(OPEN_PREFERENCES_EVENT, listener)
}
