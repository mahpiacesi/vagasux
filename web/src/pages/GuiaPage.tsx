import { GuiaHero } from '@/components/guia/GuiaHero'
import { GuiaAjudaSection } from '@/components/guia/GuiaAjudaSection'
import { GuiaCursosSection } from '@/components/guia/GuiaCursosSection'
import { GuiaTemasSection } from '@/components/guia/GuiaTemasSection'
import { GuiaTiposSection } from '@/components/guia/GuiaTiposSection'
import { GuiaTrilhasGrid } from '@/components/guia/GuiaTrilhasGrid'

export function GuiaPage() {
  return (
    <main className="guia-page">
      <GuiaHero />
      <GuiaTrilhasGrid />
      <GuiaTemasSection />
      <GuiaCursosSection />
      <GuiaTiposSection />
      <GuiaAjudaSection />
    </main>
  )
}
