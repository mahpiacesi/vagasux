import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  loadActivePartners,
  pickHomeFeaturedPartners,
  type HomeFeaturedPartnerDisplay,
} from '@/lib/partners'
import { routes } from '@/lib/siteLinks'

function FeaturedPartnerCard({ partner }: { partner: HomeFeaturedPartnerDisplay }) {
  const content = (
    <img
      src={partner.logo}
      alt={partner.name}
      className={`object-contain ${partner.logoClass}`}
      loading="lazy"
      decoding="async"
    />
  )

  return (
    <div
      className={`flex items-center justify-center rounded-2xl px-4 py-5 ${partner.className}`}
      style={{ backgroundColor: partner.bg }}
    >
      {content}
    </div>
  )
}

function MorePartnersCard({ count }: { count: number }) {
  if (count <= 0) return null

  return (
    <div className="col-span-3 flex min-h-[5.5rem] flex-row items-center justify-center gap-3 rounded-2xl border border-dashed border-neutral-500/20 bg-neutral-100/80 px-4 py-5 text-center md:min-h-[6rem]">
      <p className="text-3xl font-black tracking-tight text-neutral-500 md:text-4xl">
        +{count}
      </p>
      <p className="text-xs font-bold tracking-wide text-neutral-400 uppercase">
        parceiros ativos
      </p>
    </div>
  )
}

function FeaturedPartnersSkeleton() {
  return (
    <>
      <div className="col-span-2 min-h-[7.5rem] animate-pulse rounded-2xl bg-neutral-500/10 md:min-h-[8.5rem]" />
      <div className="min-h-[7.5rem] animate-pulse rounded-2xl bg-neutral-500/10 md:min-h-[8.5rem]" />
      <div className="min-h-[6.5rem] animate-pulse rounded-2xl bg-neutral-500/10 md:min-h-[7.5rem]" />
      <div className="min-h-[6.5rem] animate-pulse rounded-2xl bg-neutral-500/10 md:min-h-[7.5rem]" />
      <div className="min-h-[6.5rem] animate-pulse rounded-2xl bg-neutral-500/10 md:min-h-[7.5rem]" />
      <div className="col-span-3 min-h-[5.5rem] animate-pulse rounded-2xl bg-neutral-500/10 md:min-h-[6rem]" />
    </>
  )
}

export function PartnershipsSection() {
  const [featuredPartners, setFeaturedPartners] = useState<
    HomeFeaturedPartnerDisplay[]
  >([])
  const [totalPartners, setTotalPartners] = useState(0)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false

    async function load() {
      const partners = await loadActivePartners()
      if (cancelled) return

      setFeaturedPartners(pickHomeFeaturedPartners(partners))
      setTotalPartners(partners.length)
      setLoading(false)
    }

    void load()
    return () => {
      cancelled = true
    }
  }, [])

  const remainingPartners = Math.max(0, totalPartners - featuredPartners.length)

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
              <Link to={routes.parcerias}>Seja um parceiro</Link>
            </Button>
          </div>
        </div>

        <div
          className="grid grid-cols-3 gap-3 md:gap-3.5"
          aria-label="Principais parceiros"
          aria-busy={loading}
        >
          {loading ? (
            <FeaturedPartnersSkeleton />
          ) : (
            <>
              {featuredPartners.map((partner) => (
                <FeaturedPartnerCard key={partner.slug} partner={partner} />
              ))}
              <MorePartnersCard count={remainingPartners} />
            </>
          )}
        </div>
      </div>
    </section>
  )
}
