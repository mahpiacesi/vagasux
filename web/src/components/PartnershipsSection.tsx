import aluraLogo from '@/assets/partners/alura.svg'
import bancoCarrefourLogo from '@/assets/partners/banco-carrefour-white.png'
import fiapLogo from '@/assets/partners/fiap.svg'
import thestarterLogo from '@/assets/partners/thestarter.png'
import uxconfLogo from '@/assets/partners/uxconf.png'
import { Button } from '@/components/ui/button'
import { superSite } from '@/lib/siteLinks'

type PartnerCard =
  | {
      kind: 'logo'
      name: string
      logo: string
      bg: string
      className: string
      logoClass: string
    }
  | {
      kind: 'more'
      name: string
      value: string
      label: string
      className: string
    }

const partners: PartnerCard[] = [
  {
    kind: 'logo',
    name: 'Alura',
    logo: aluraLogo,
    bg: '#052FD3',
    className: 'col-span-2 min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'h-8 w-auto md:h-10',
  },
  {
    kind: 'logo',
    name: 'FIAP',
    logo: fiapLogo,
    bg: '#ED145B',
    className: 'min-h-[7.5rem] md:min-h-[8.5rem]',
    logoClass: 'h-7 w-auto md:h-8',
  },
  {
    kind: 'logo',
    name: 'UXConf BR',
    logo: uxconfLogo,
    bg: '#0070C0',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-8 w-auto max-w-[10rem] md:h-9 md:max-w-[12rem]',
  },
  {
    kind: 'logo',
    name: 'Banco Carrefour',
    logo: bancoCarrefourLogo,
    bg: '#004A99',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-16 w-auto md:h-[4.5rem]',
  },
  {
    kind: 'logo',
    name: 'TheStarter',
    logo: thestarterLogo,
    bg: '#0A0707',
    className: 'min-h-[6.5rem] md:min-h-[7.5rem]',
    logoClass: 'h-6 w-auto max-w-[9rem] md:h-7',
  },
  {
    kind: 'more',
    name: 'Mais parceiros',
    value: '+25',
    label: 'parceiros ativos',
    className: 'col-span-3 min-h-[5.5rem] md:min-h-[6rem]',
  },
]

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
            Faça parte desse <span className="text-mark">impacto</span>
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400 md:text-lg">
            Junte-se às empresas e organizações que acreditam em um mercado mais
            acessível e ajudam a criar oportunidades para milhares de
            profissionais.
          </p>

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
          {partners.map((partner) =>
            partner.kind === 'more' ? (
              <div
                key={partner.name}
                className={`flex flex-row items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-500/20 bg-neutral-100/80 px-4 py-5 text-center ${partner.className}`}
              >
                <p className="text-3xl font-black tracking-tight text-neutral-500 md:text-4xl">
                  {partner.value}
                </p>
                <p className="text-xs font-bold tracking-wide text-neutral-400 uppercase">
                  {partner.label}
                </p>
              </div>
            ) : (
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
            ),
          )}
        </div>
      </div>
    </section>
  )
}
