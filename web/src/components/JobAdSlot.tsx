import { useEffect, useRef, useState } from 'react'
import { ADSENSE_CLIENT_ID, loadAdSense, pushAdSenseUnit } from '@/lib/adsense'
import {
  getCookieConsent,
  subscribeCookieConsent,
  type CookieConsentChoice,
} from '@/lib/cookieConsent'

const AD_SLOT = import.meta.env.VITE_ADSENSE_AD_SLOT as string | undefined

export function JobAdSlot() {
  const insRef = useRef<HTMLModElement>(null)
  const [consent, setConsent] = useState<CookieConsentChoice | null>(null)

  useEffect(() => {
    setConsent(getCookieConsent())
    return subscribeCookieConsent(() => setConsent(getCookieConsent()))
  }, [])

  useEffect(() => {
    if (consent !== 'analytics') return
    const ins = insRef.current
    if (!ins || ins.dataset.adsPushed === 'true') return

    loadAdSense()
    ins.dataset.adsPushed = 'true'
    pushAdSenseUnit()

    const hideIfUnfilled = () => {
      if (ins.dataset.adStatus === 'unfilled') {
        ins.closest('aside')?.setAttribute('hidden', '')
      }
    }
    const observer = new MutationObserver(hideIfUnfilled)
    observer.observe(ins, { attributes: true, attributeFilter: ['data-ad-status'] })
    return () => observer.disconnect()
  }, [consent])

  if (consent !== 'analytics') return null

  return (
    <aside
      aria-label="Publicidade"
      className="rounded-2xl border border-neutral-200/80 bg-neutral-100 px-5 py-4 md:px-6"
    >
      <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400">
        Publicidade
      </p>
      <ins
        ref={insRef}
        className="adsbygoogle mt-3 block min-h-24 w-full"
        style={{ display: 'block' }}
        data-ad-client={ADSENSE_CLIENT_ID}
        {...(AD_SLOT ? { 'data-ad-slot': AD_SLOT } : {})}
        {...(import.meta.env.DEV
          ? { 'data-adtest': 'on', 'data-page-url': 'https://vagasux.com.br/oportunidades' }
          : {})}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </aside>
  )
}
