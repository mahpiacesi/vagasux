import { Outlet } from 'react-router-dom'
import { DocumentTitle } from './DocumentTitle'
import { Footer } from './Footer'
import { Header } from './Header'

export function SiteLayout() {
  return (
    <div className="min-h-screen bg-neutral-100">
      <DocumentTitle />
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
