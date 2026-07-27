import { Button } from '@/components/ui/button'
import { superSite } from '@/lib/siteLinks'

export function PartnershipsSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-brand-100/60" />
        <div className="absolute -top-20 -right-10 h-80 w-80 rounded-full bg-complementary-200/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
          Parcerias
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-[1.08] font-black tracking-[-0.03em] text-neutral-500 md:text-5xl">
          Sua marca perto de quem está{' '}
          <span className="text-mark">construindo carreira</span> em UX.
        </h2>
        <div className="mt-8">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl px-8 text-base font-black"
          >
            <a
              href={superSite.parcerias}
              target="_blank"
              rel="noopener noreferrer"
            >
              Seja um parceiro
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
