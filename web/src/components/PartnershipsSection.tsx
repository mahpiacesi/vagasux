import aluraLogo from '@/assets/partners/alura.svg'
import carrefourLogo from '@/assets/partners/carrefour.svg'
import fiapLogo from '@/assets/partners/fiap.svg'
import thestarterLogo from '@/assets/partners/thestarter.png'
import uxconfLogo from '@/assets/partners/uxconf.png'
import { Button } from '@/components/ui/button'
import { superSite } from '@/lib/siteLinks'

const highlights = [
  { value: '+40 mil', label: 'pessoas engajadas' },
  { value: '+230', label: 'bolsas' },
  { value: '+30', label: 'contratados' },
] as const

const partners = [
  {
    name: 'Alura',
    logo: aluraLogo,
    bg: '#052FD3',
    className: 'col-span-2 row-span-1 min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'h-8 w-auto md:h-10',
  },
  {
    name: 'FIAP',
    logo: fiapLogo,
    bg: '#ED145B',
    className: 'min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'h-7 w-auto md:h-8',
  },
  {
    name: 'UXConf BR',
    logo: uxconfLogo,
    bg: '#0070C0',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-8 w-auto max-w-[10rem] md:h-9 md:max-w-[12rem]',
  },
  {
    name: 'Banco Carrefour',
    logo: carrefourLogo,
    bg: '#004E9A',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-8 w-auto max-w-[9rem] md:h-9',
  },
  {
    name: 'TheStarter',
    logo: thestarterLogo,
    bg: '#0A0707',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-6 w-auto max-w-[9rem] md:h-7',
  },
] as const

export function PartnershipsSection() {
  return (
    <section className="relative overflow-hidden px-5 py-20 md:px-6 md:py-24">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-brand-100/60" />
        <div className="absolute -top-20 -right-10 h-80 w-80 rounded-full bg-complementary-200/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-3xl items-center gap-12 md:max-w-6xl md:grid-cols-2 md:gap-14 lg:gap-16">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Parcerias
          </p>
          <h2 className="mt-4 max-w-xl text-3xl leading-[1.08] font-black tracking-[-0.03em] text-neutral-500 md:text-5xl">
            Sua marca perto de quem está{' '}
            <span className="text-mark">construindo carreira</span> em UX.
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400 md:text-lg">
            Apoie uma comunidade que abre portas de verdade — e ainda tem espaço
            pra sua marca.
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {highlights.map((item) => (
              <div key={item.label}>
                <p className="text-2xl font-black tracking-tight text-brand-500">
                  {item.value}
                </p>
                <p className="mt-0.5 text-sm font-semibold text-neutral-400">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9">
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

        <div
          className="grid grid-cols-3 gap-3 md:gap-3.5"
          aria-label="Principais parceiros"
        >
          {partners.map((partner) => (
            <div
              key={partner.name}
              className={`flex items-center justify-center rounded-2xl px-4 py-5 ${partner.className}`}
              style={{ backgroundColor: partner.bg }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`object-contain ${partner.logoClass}`}
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
