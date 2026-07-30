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
import { routes, termosHashes } from '@/lib/siteLinks'
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
      className="fixed inset-x-0 bottom-0 z-[100] p-3 md:p-4"
    >
      <div
        className={cn(
          'mx-auto max-w-3xl rounded-2xl border border-brand-200/80 bg-neutral-100/95 p-4 shadow-xl backdrop-blur-md md:max-w-4xl',
          'mural-fade',
        )}
      >
        <div className="flex flex-col gap-2">
          <h2
            id="cookie-consent-title"
            className="text-sm font-black tracking-tight text-neutral-500 md:text-base"
          >
            🍪 Design também se faz com dados. Aceita um biscoito?
          </h2>
          <p
            id="cookie-consent-description"
            className="text-sm leading-snug text-neutral-400"
          >
            Ao aceitar, usamos o Microsoft Clarity para entender como a
            comunidade utiliza a VagasUX e melhorar continuamente a experiência
            de quem passa por aqui.
          </p>

          <div className="flex flex-nowrap items-center justify-between gap-2">
            <Link
              to={`${routes.termosEPoliticas}#${termosHashes.cookies}`}
              className="shrink-0 text-sm font-semibold text-brand-500 underline decoration-brand-200 underline-offset-4 transition-colors hover:text-brand-400 hover:decoration-brand-300"
              onClick={() => setVisible(false)}
            >
              Saiba mais
            </Link>
            <div className="flex shrink-0 flex-nowrap items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="xs"
                className="whitespace-nowrap sm:h-7 sm:px-2.5 sm:text-xs"
                onClick={() => choose('essential')}
              >
                Apenas o necessário
              </Button>
              <Button
                type="button"
                size="xs"
                className="whitespace-nowrap sm:h-7 sm:px-2.5 sm:text-xs"
                onClick={() => choose('analytics')}
              >
                Aceitar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
