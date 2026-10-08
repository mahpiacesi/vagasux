import { useEffect, useRef, useState } from 'react'
import { ADSENSE_CLIENT_ID, loadAdSense, pushAdSenseUnit } from '@/lib/adsense'
import {
  getCookieConsent,
  subscribeCookieConsent,
  type CookieConsentChoice,
} from '@/lib/cookieConsent'

const AD_SLOT = import.meta.env.VITE_ADSENSE_AD_SLOT as string | undefined

function AdUnit({ personalized }: { personalized: boolean }) {
  const insRef = useRef<HTMLModElement>(null)

  useEffect(() => {
    const ins = insRef.current
    if (!ins || ins.dataset.adsPushed === 'true') return

    loadAdSense(personalized)
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
  }, [personalized])

  return (
    <ins
      ref={insRef}
      className="adsbygoogle mt-2 block min-h-24 w-full md:mt-3"
      style={{ display: 'block' }}
      data-ad-client={ADSENSE_CLIENT_ID}
      {...(AD_SLOT ? { 'data-ad-slot': AD_SLOT } : {})}
      {...(personalized ? {} : { 'data-npa': '1' })}
      {...(import.meta.env.DEV
        ? { 'data-adtest': 'on', 'data-page-url': 'https://vagasux.com.br/oportunidades' }
        : {})}
      data-ad-format="auto"
      data-full-width-responsive="true"
    />
  )
}

export function JobAdSlot() {
  const asideRef = useRef<HTMLElement>(null)
  const [consent, setConsent] = useState<CookieConsentChoice | null>(getCookieConsent)
  const personalized = consent === 'analytics'

  useEffect(() => subscribeCookieConsent(() => setConsent(getCookieConsent())), [])

  useEffect(() => {
    asideRef.current?.removeAttribute('hidden')
  }, [personalized])

  return (
    <aside
      ref={asideRef}
      aria-label="Publicidade"
      className="max-md:-mx-5 max-md:w-[calc(100%+2.5rem)] md:rounded-2xl md:border md:border-neutral-200/80 md:bg-neutral-100 md:px-6 md:py-4"
    >
      <p className="px-10 text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-400 md:px-0">
        Publicidade
      </p>
      <AdUnit key={personalized ? 'personalized' : 'plain'} personalized={personalized} />
    </aside>
  )
}
