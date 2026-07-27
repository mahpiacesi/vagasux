import { Button } from '@/components/ui/button'
import { superSite } from '@/lib/siteLinks'

const highlights = [
  { value: '+40 mil', label: 'pessoas engajadas' },
  { value: '+230', label: 'bolsas' },
  { value: '+30', label: 'iniciantes contratados' },
] as const

export function PartnershipsSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-6 md:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-brand-100/60" />
        <div className="absolute -top-20 -right-10 h-80 w-80 rounded-full bg-complementary-200/50 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-56 w-56 rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
          Parcerias
        </p>
        <h2 className="mt-5 max-w-3xl text-3xl leading-[1.05] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl lg:text-6xl">
          Sua marca perto de quem está{' '}
          <span className="text-mark">construindo carreira</span> em UX.
        </h2>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-neutral-400">
          Apoie uma comunidade que abre portas de verdade — e ainda tem espaço
          pra sua marca.
        </p>

        <div className="mt-12 flex flex-wrap gap-x-12 gap-y-6">
          {highlights.map((item) => (
            <div key={item.label}>
              <p className="text-3xl font-black tracking-tight text-brand-500 md:text-4xl">
                {item.value}
              </p>
              <p className="mt-1 text-sm font-semibold text-neutral-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12">
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
