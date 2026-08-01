import { GuiaAreasSection } from '@/components/guia/GuiaAreasSection'
import { GuiaHero } from '@/components/guia/GuiaHero'
import {
  GuiaContinueSection,
  GuiaPopularSection,
} from '@/components/guia/GuiaPopularSection'
import { GuiaPathGrid } from '@/components/guia/GuiaPathGrid'
import { GuiaTrailsSection } from '@/components/guia/GuiaTrailsSection'

export function GuiaPage() {
  return (
    <main className="guia-page">
      <GuiaHero />
      <GuiaPathGrid />
      <GuiaTrailsSection />
      <GuiaAreasSection />
      <GuiaPopularSection />
      <GuiaContinueSection />
    </main>
  )
}
