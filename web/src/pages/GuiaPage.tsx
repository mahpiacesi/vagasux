import { GuiaHero } from '@/components/guia/GuiaHero'
import { GuiaAjudaSection } from '@/components/guia/GuiaAjudaSection'
import { GuiaTemasSection } from '@/components/guia/GuiaTemasSection'
import { GuiaTiposSection } from '@/components/guia/GuiaTiposSection'
import { GuiaTrilhasGrid } from '@/components/guia/GuiaTrilhasGrid'

export function GuiaPage() {
  return (
    <main className="guia-page">
      <GuiaHero />
      <GuiaTrilhasGrid />
      <GuiaTemasSection />
      <GuiaTiposSection />
      <GuiaAjudaSection />
    </main>
  )
}
