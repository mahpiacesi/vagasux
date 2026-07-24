import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { SiteLayout } from '@/components/SiteLayout'
import { routes } from '@/lib/siteLinks'
import { AComunidadePage } from '@/pages/AComunidadePage'
import { ApoiePage } from '@/pages/ApoiePage'
import { CodigoDeCondutaPage } from '@/pages/CodigoDeCondutaPage'
import { HomePage } from '@/pages/HomePage'
import { OportunidadesPage } from '@/pages/OportunidadesPage'
import { ParceriasPage } from '@/pages/ParceriasPage'
import { QuemOrganizaPage } from '@/pages/QuemOrganizaPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route path={routes.oportunidades} element={<OportunidadesPage />} />
          <Route path={routes.comunidade} element={<AComunidadePage />} />
          <Route path={routes.quemOrganiza} element={<QuemOrganizaPage />} />
          <Route path={routes.parcerias} element={<ParceriasPage />} />
          <Route path={routes.apoie} element={<ApoiePage />} />
          <Route
            path={routes.codigoDeConduta}
            element={<CodigoDeCondutaPage />}
          />
          <Route path="*" element={<Navigate to={routes.home} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
