import { Outlet } from 'react-router-dom'
import { CookieConsentBanner } from './CookieConsentBanner'
import { DocumentTitle } from './DocumentTitle'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'
import { GuiaTrailNavigator } from './guia/GuiaTrailNavigator'

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <ScrollToTop />
      <DocumentTitle />
      <Header />
      <Outlet />
      <Footer />
      <GuiaTrailNavigator />
      <CookieConsentBanner />
    </div>
  )
}
