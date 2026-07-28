import { GuiaHeroIllustration } from '@/components/GuiaHeroIllustration'

/**
 * Isolated QA surface for the beginners illustration.
 * No header/footer/home scroll — open /dev/guia-illustration directly.
 */
export function GuiaIllustrationDevPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f3f2f8] p-8">
      <div className="w-full max-w-xl">
        <p className="mb-4 text-center text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
          Dev · ilustração guia
        </p>
        <GuiaHeroIllustration className="guia-hero h-auto w-full overflow-visible" />
      </div>
    </main>
  )
}
