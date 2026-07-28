import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { routes } from '@/lib/siteLinks'

type JobsCrossLinkProps = {
  variant: 'oportunidades' | 'curadoria'
}

const copy = {
  oportunidades: {
    to: routes.curadoria,
    eyebrow: 'Curadoria humana',
    title: 'Procurando estágio, trainee ou júnior?',
    description: 'A curadoria VagasUX separa oportunidades reais para quem está começando.',
    cta: 'Ver curadoria',
  },
  curadoria: {
    to: routes.oportunidades,
    eyebrow: 'Mural completo',
    title: 'Quer ver vagas de todos os níveis?',
    description: 'No mural de oportunidades entram pleno, sênior, lead e mais — de várias fontes.',
    cta: 'Ver oportunidades',
  },
} as const

export function JobsCrossLink({ variant }: JobsCrossLinkProps) {
  const item = copy[variant]

  return (
    <div className="mx-auto max-w-3xl md:max-w-4xl">
      <Link
        to={item.to}
        className="group mural-fade mural-fade-delay-2 flex items-center justify-between gap-4 rounded-2xl border border-complementary-200/80 bg-gradient-to-r from-complementary-100/90 to-brand-100/50 px-5 py-4 shadow-[0_12px_36px_-24px_rgb(7_0_58_/_0.3)] transition-all hover:border-brand-200/70 hover:shadow-[0_16px_40px_-24px_rgb(36_46_144_/_0.25)] md:px-6 md:py-5"
      >
        <div className="min-w-0">
          <p className="text-[0.68rem] font-bold tracking-[0.16em] text-brand-400 uppercase md:text-xs">
            {item.eyebrow}
          </p>
          <p className="mt-1 text-base font-black text-neutral-500 md:text-lg">
            {item.title}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-neutral-400">
            {item.description}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-500 px-4 py-2 text-sm font-bold text-neutral-100 transition-colors group-hover:bg-brand-500">
          {item.cta}
          <ArrowUpRight
            className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </span>
      </Link>
    </div>
  )
}
