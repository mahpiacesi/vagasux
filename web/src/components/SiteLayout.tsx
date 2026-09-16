import { Outlet } from 'react-router-dom'
import { CookieConsentBanner } from './CookieConsentBanner'
import { SeoHead } from './SeoHead'
import { Footer } from './Footer'
import { Header } from './Header'
import { ScrollToTop } from './ScrollToTop'
import { GuiaTrailNavigator } from './guia/GuiaTrailNavigator'

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <ScrollToTop />
      <SeoHead />
      <Header />
      <Outlet />
      <Footer />
      <GuiaTrailNavigator />
      <CookieConsentBanner />
    </div>
  )
}
