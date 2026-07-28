import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/SiteLayout'
import { routes } from '@/lib/siteLinks'
import { GuiaIllustrationDevPage } from '@/pages/GuiaIllustrationDevPage'
import { HomePage } from '@/pages/HomePage'
import { OportunidadesPage } from '@/pages/OportunidadesPage'
import { VagasParaIniciantesPage } from '@/pages/VagasParaIniciantesPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dev/guia-illustration"
          element={<GuiaIllustrationDevPage />}
        />
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.oportunidades} element={<OportunidadesPage />} />
          <Route path={routes.iniciantes} element={<VagasParaIniciantesPage />} />
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
