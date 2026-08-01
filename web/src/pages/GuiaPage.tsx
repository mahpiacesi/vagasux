import { GuiaHero } from '@/components/guia/GuiaHero'
import { GuiaPopularSection } from '@/components/guia/GuiaPopularSection'
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
      <GuiaPopularSection />
    </main>
  )
}
