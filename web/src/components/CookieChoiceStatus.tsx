import { useEffect, useState } from 'react'
import {
  getCookieConsent,
  subscribeCookieConsent,
  type CookieConsentChoice,
} from '@/lib/cookieConsent'

const choiceLabel: Record<CookieConsentChoice, string> = {
  essential: 'Você está usando apenas o necessário. O anúncio nas listas não é personalizado.',
  analytics: 'Você aceitou a personalização dos anúncios e a análise de uso.',
}

export function CookieChoiceStatus() {
  const [choice, setChoice] = useState<CookieConsentChoice | null>(null)

  useEffect(() => {
    setChoice(getCookieConsent())
    return subscribeCookieConsent(() => {
      setChoice(getCookieConsent())
    })
  }, [])

  return (
    <p>{choice ? choiceLabel[choice] : 'Você ainda não escolheu.'}</p>
  )
}
