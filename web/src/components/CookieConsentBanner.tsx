import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  applyAnalyticsIfConsented,
  getCookieConsent,
  setCookieConsent,
  subscribeCookiePreferencesOpen,
  type CookieConsentChoice,
} from '@/lib/cookieConsent'
import { routes } from '@/lib/siteLinks'
import { cn } from '@/lib/utils'

export function CookieConsentBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const stored = getCookieConsent()
    if (stored) {
      applyAnalyticsIfConsented(stored)
      return
    }
    setVisible(true)
  }, [])

  useEffect(
    () =>
      subscribeCookiePreferencesOpen(() => {
        setVisible(true)
      }),
    [],
  )

  function choose(choice: CookieConsentChoice) {
    setCookieConsent(choice)
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
      className="fixed inset-x-0 bottom-0 z-[100] p-4 md:p-5"
    >
      <div
        className={cn(
          'mx-auto max-w-3xl rounded-2xl border border-brand-200/80 bg-neutral-100/95 p-5 shadow-xl backdrop-blur-md md:max-w-4xl md:p-6',
          'mural-fade',
        )}
      >
        <div className="flex flex-col gap-4 md:gap-5">
          <div className="space-y-2">
            <h2
              id="cookie-consent-title"
              className="text-base font-black tracking-tight text-neutral-500 md:text-lg"
            >
              🍪 Design também se faz com dados. Aceita um biscoito?
            </h2>
            <p
              id="cookie-consent-description"
              className="text-sm leading-relaxed text-neutral-400 md:text-[15px]"
            >
              Ao aceitar, usamos Microsoft Clarity e Google Analytics para
              entender como a comunidade utiliza a VagasUX e melhorar
              continuamente a experiência de quem passa por aqui.
            </p>
            <Link
              to={routes.termosEPoliticas}
              className="inline-block text-sm font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-400 hover:decoration-brand-300"
              onClick={() => setVisible(false)}
            >
              Saiba mais
            </Link>
          </div>

          <div className="flex flex-col-reverse gap-2 sm:flex-row sm:items-center sm:justify-end">
            <Button
              type="button"
              variant="outline"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => choose('essential')}
            >
              Apenas o necessário
            </Button>
            <Button
              type="button"
              size="lg"
              className="w-full sm:w-auto"
              onClick={() => choose('analytics')}
            >
              Aceitar
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
