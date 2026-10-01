import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  getCookieConsent,
  setCookieConsent,
  subscribeCookieConsent,
  type CookieConsentChoice,
} from '@/lib/cookieConsent'

const choiceLabel: Record<CookieConsentChoice, string> = {
  essential: 'Você está usando apenas o necessário.',
  analytics: 'Você aceitou os cookies de análise.',
}

export function CookiePreferenceControls() {
  const [choice, setChoice] = useState<CookieConsentChoice | null>(null)

  useEffect(() => {
    setChoice(getCookieConsent())
    return subscribeCookieConsent(() => {
      setChoice(getCookieConsent())
    })
  }, [])

  function choose(next: CookieConsentChoice) {
    setCookieConsent(next)
    setChoice(next)
  }

  return (
    <div className="rounded-2xl border border-neutral-500/10 bg-neutral-100 px-5 py-4">
      <p className="text-sm leading-relaxed text-neutral-500">
        {choice ? choiceLabel[choice] : 'Você ainda não escolheu.'}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button
          type="button"
          variant="outline"
          onClick={() => choose('essential')}
          aria-pressed={choice === 'essential'}
        >
          Apenas o necessário
        </Button>
        <Button
          type="button"
          onClick={() => choose('analytics')}
          aria-pressed={choice === 'analytics'}
        >
          Aceitar cookies de análise
        </Button>
      </div>
    </div>
  )
}
