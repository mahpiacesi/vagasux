import { useEffect, useState } from 'react'
import {
  getCookieConsent,
  subscribeCookieConsent,
  type CookieConsentChoice,
} from '@/lib/cookieConsent'

const choiceLabel: Record<CookieConsentChoice, string> = {
  essential: 'Você está usando apenas o necessário.',
  analytics: 'Você aceitou os cookies de análise.',
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
