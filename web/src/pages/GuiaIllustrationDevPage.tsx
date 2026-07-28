import { GuiaHeroIllustration } from '@/components/GuiaHeroIllustration'

/** Isolated QA — open /dev/guia-illustration */
export function GuiaIllustrationDevPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#f3f2f8] p-8">
      <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
        Dev · ilustração guia (SVG)
      </p>
      <div className="w-full max-w-lg overflow-visible">
        <GuiaHeroIllustration
          forceMotion
          className="guia-hero [&_svg]:h-auto [&_svg]:w-full [&_svg]:overflow-visible"
        />
      </div>
    </main>
  )
}
