import { useRef } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { Testimonial, TestimonialTone } from '@/data/testimonials'
import { testimonials } from '@/data/testimonials'

const toneClass: Record<TestimonialTone, string> = {
  cream: 'border border-neutral-500/15 bg-neutral-100 text-neutral-500',
  indigo: 'bg-brand-100 text-brand-500',
  mustard: 'bg-complementary-200 text-neutral-500',
  navy: 'bg-neutral-500 text-neutral-100',
  lilac: 'bg-brand-200/80 text-brand-500',
  soft: 'border border-complementary-300/50 bg-complementary-100 text-neutral-500',
}

const badgeClass: Record<TestimonialTone, string> = {
  cream: 'bg-brand-100 text-brand-400',
  indigo: 'bg-white/70 text-brand-500',
  mustard: 'bg-neutral-500/10 text-neutral-500',
  navy: 'bg-complementary-300/20 text-complementary-300',
  lilac: 'bg-white/60 text-brand-500',
  soft: 'bg-complementary-200 text-complementary-500',
}

type RowItem =
  | { kind: 'quote'; item: Testimonial }
  | { kind: 'accent'; id: string; title: string; subtitle: string; className: string }

function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article
      className={`flex h-full min-h-[22rem] w-[min(22rem,78vw)] shrink-0 flex-col justify-between rounded-2xl p-5 md:w-[24rem] md:p-6 ${toneClass[item.tone]}`}
    >
      <div>
        <span
          className={`inline-flex rounded-md px-2 py-0.5 text-[0.65rem] font-bold tracking-wide uppercase ${badgeClass[item.tone]}`}
        >
          {item.category}
        </span>
        <p className="mt-4 text-[0.95rem] leading-relaxed md:text-base">
          “{item.quote}”
        </p>
      </div>
      <footer className="mt-6">
        <p className="text-sm font-black tracking-tight">{item.name}</p>
        {item.role ? (
          <p className="mt-0.5 text-xs font-semibold tracking-wide uppercase opacity-70">
            {item.role}
          </p>
        ) : null}
      </footer>
    </article>
  )
}

function AccentCard({
  title,
  subtitle,
  className,
}: {
  title: string
  subtitle: string
  className: string
}) {
  return (
    <article
      className={`flex h-full min-h-[22rem] w-[min(20rem,78vw)] shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-5 md:w-[22rem] md:p-6 ${className}`}
    >
      <p className="max-w-full text-[3rem] leading-[0.9] font-black tracking-[-0.05em] break-words md:text-6xl">
        {title}
      </p>
      <p className="mt-8 max-w-[14ch] text-sm leading-snug font-bold tracking-wide uppercase opacity-90">
        {subtitle}
      </p>
    </article>
  )
}

function RowCard({ entry }: { entry: RowItem }) {
  if (entry.kind === 'accent') {
    return (
      <AccentCard
        title={entry.title}
        subtitle={entry.subtitle}
        className={entry.className}
      />
    )
  }
  return <TestimonialCard item={entry.item} />
}

function MarqueeRow({
  items,
  reverse = false,
  duration = 95,
}: {
  items: RowItem[]
  reverse?: boolean
  duration?: number
}) {
  const loop = [...items, ...items]
  const trackRef = useRef<HTMLDivElement>(null)

  const setSpeed = (rate: number) => {
    const el = trackRef.current
    if (!el) return
    for (const animation of el.getAnimations()) {
      animation.playbackRate = rate
    }
  }

  return (
    <div
      className="testimonials-row relative overflow-hidden py-1"
      aria-hidden
      onMouseEnter={() => setSpeed(0.35)}
      onMouseLeave={() => setSpeed(1)}
    >
      <div
        ref={trackRef}
        className={`flex w-max gap-4 ${reverse ? 'testimonials-track-reverse' : 'testimonials-track'}`}
        style={{ ['--marquee-duration' as string]: `${duration}s` }}
      >
        {loop.map((entry, index) => (
          <RowCard
            key={`${entry.kind === 'quote' ? entry.item.id : entry.id}-${index}`}
            entry={entry}
          />
        ))}
      </div>
    </div>
  )
}

export function TestimonialsMarquee() {
  const byCategory = (category: Testimonial['category']) =>
    testimonials.filter((item) => item.category === category)

  const mentorias = byCategory('Mentorias')
  const vagas = byCategory('Vagas')
  const outros = testimonials.filter(
    (item) => item.category !== 'Mentorias' && item.category !== 'Vagas',
  )

  const quote = (item: Testimonial): RowItem => ({ kind: 'quote', item })

  // +100 mentorias sits beside Mentoria cards; +50 contratados beside Vagas cards
  const rowA: RowItem[] = [
    quote(mentorias[0]),
    {
      kind: 'accent',
      id: 'accent-mentorias',
      title: '+100',
      subtitle: 'mentorias realizadas',
      className: 'bg-brand-500 text-neutral-100',
    },
    quote(mentorias[1]),
    quote(outros[0]),
    quote(outros[1]),
    quote(vagas[0]),
    quote(outros[2]),
    quote(mentorias[2]),
  ]

  const rowB: RowItem[] = [
    quote(vagas[1]),
    {
      kind: 'accent',
      id: 'accent-contratados',
      title: '+50',
      subtitle: 'vaguiners contratados',
      className: 'bg-complementary-300 text-neutral-500',
    },
    quote(vagas[2]),
    quote(outros[3]),
    quote(mentorias[3]),
    quote(outros[4]),
    quote(vagas[3]),
    quote(outros[5]),
  ]

  const rowC: RowItem[] = [
    quote(mentorias[4]),
    quote(outros[6]),
    quote(vagas[0]),
    quote(outros[7]),
    quote(mentorias[1]),
    quote(outros[0]),
    quote(vagas[1]),
    quote(outros[2]),
  ].filter((entry) => entry.kind === 'quote' && entry.item)

  return (
    <section className="overflow-hidden bg-white py-16 md:py-24">
      <div className="mx-auto max-w-3xl px-5 md:max-w-4xl md:px-6">
        <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
          Wall of Vaguiners
        </p>
        <h2 className="mt-4 max-w-2xl text-3xl leading-[1.1] font-black tracking-[-0.03em] text-neutral-500 md:text-5xl">
          Quem já viveu a{' '}
          <span className="text-mark">comunidade</span> deixa um recado.
        </h2>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
          Veja como a VagasUX impactou a trajetória de profissionais por meio de
          vagas, mentorias, eventos e iniciativas dentro da comunidade.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2">
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-neutral-500/20 px-7 text-base font-bold"
          >
            <a
              href="https://testimonial.to/vagasux"
              target="_blank"
              rel="noopener noreferrer"
            >
              Compartilhe um relato
              <ArrowUpRight className="size-4" aria-hidden />
            </a>
          </Button>
          <Button
            asChild
            variant="link"
            className="h-auto px-0 text-base font-bold text-brand-500"
          >
            <a
              href="https://testimonial.to/vagasux/all"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver todos os relatos
              <span aria-hidden>→</span>
            </a>
          </Button>
        </div>
      </div>

      <div className="mt-12 flex flex-col gap-4 md:mt-14 md:gap-5">
        <MarqueeRow items={rowA} duration={95} />
        <MarqueeRow items={rowB} reverse duration={105} />
        <MarqueeRow items={rowC} duration={88} />
      </div>

      <div className="mx-auto mt-10 flex max-w-3xl flex-wrap items-center gap-x-4 gap-y-2 px-5 md:mt-12 md:max-w-4xl md:px-6">
        <Button
          asChild
          size="lg"
          variant="outline"
          className="h-12 rounded-xl border-neutral-500/20 px-7 text-base font-bold"
        >
          <a
            href="https://testimonial.to/vagasux"
            target="_blank"
            rel="noopener noreferrer"
          >
            Compartilhe um relato
            <ArrowUpRight className="size-4" aria-hidden />
          </a>
        </Button>
        <Button
          asChild
          variant="link"
          className="h-auto px-0 text-base font-bold text-brand-500"
        >
          <a
            href="https://testimonial.to/vagasux/all"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver todos os relatos
            <span aria-hidden>→</span>
          </a>
        </Button>
      </div>
    </section>
  )
}
