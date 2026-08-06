import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  guiaCursosComoFunciona,
  guiaCursosHero,
} from '@/data/guiaCursosCopy'
import { guiaCursos } from '@/data/guiaCursos'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes } from '@/lib/siteLinks'
import { getGuiaCursoStats } from '@/lib/guiaCursoFilters'
import { cn } from '@/lib/utils'

type GuiaCursosHeroProps = {
  className?: string
}

export function GuiaCursosHeroSection({ className }: GuiaCursosHeroProps) {
  const stats = getGuiaCursoStats(guiaCursos)

  return (
    <section className={cn('overflow-hidden rounded-3xl border border-brand-200/40 bg-brand-100/40', className)}>
      <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-center lg:gap-10">
        <div>
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            {guiaCursosHero.eyebrow}
          </p>
          <h1 className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl lg:text-[2.5rem]">
            {guiaCursosHero.title}
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
            {guiaCursosHero.description}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild variant="guia-outline">
              <Link to={guiaRoutes.cursosPublicarRelato}>
                {guiaCursosHero.ctaPublicarRelato}
              </Link>
            </Button>
          </div>

          <dl className="mt-6 flex flex-wrap gap-3 text-sm font-semibold text-neutral-400">
            <div className="rounded-full border border-neutral-500/10 bg-neutral-100/80 px-3 py-1.5">
              <dd>{stats.total} cursos mapeados</dd>
            </div>
            <div className="rounded-full border border-neutral-500/10 bg-neutral-100/80 px-3 py-1.5">
              <dd>{stats.withFeedback} com relatos</dd>
            </div>
            <div className="rounded-full border border-neutral-500/10 bg-neutral-100/80 px-3 py-1.5">
              <dd>{stats.partners} parceiros VagasUX</dd>
            </div>
          </dl>
        </div>

        <div
          className="relative mx-auto flex aspect-[4/3] w-full max-w-md items-end justify-center rounded-2xl bg-gradient-to-br from-brand-100 to-brand-100/20 p-6 lg:max-w-none"
          aria-hidden
        >
          <div className="absolute top-6 right-6 size-24 rounded-full bg-brand-200/40 blur-2xl" />
          <div className="relative text-center">
            <span className="text-6xl">🎓</span>
            <p className="mt-3 text-sm font-bold text-brand-500">
              Mapeamento coletivo desde 2020
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-px border-t border-brand-200/40 bg-brand-200/20 md:grid-cols-3">
        {guiaCursosComoFunciona.map((item) => (
            <div
              key={item.title}
              className="bg-brand-100/30 px-6 py-5 md:px-8 md:py-6"
            >
              <span className="text-xl" aria-hidden>
                {item.emoji}
              </span>
              <h2 className="mt-2 text-sm font-black tracking-wide text-neutral-500 uppercase">
                {item.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {item.description}
              </p>
            </div>
          ))}
      </div>

      <p className="border-t border-brand-200/40 px-6 py-4 text-xs leading-relaxed text-neutral-400 md:px-8">
        Cada curso será relevante de acordo com seu contexto. No fim,{' '}
        <strong className="font-bold text-neutral-500">escolha por você</strong>.
        Consulte também nossos{' '}
        <Link to={routes.termosEPoliticas} className="font-bold text-brand-500 hover:underline">
          Termos e Políticas
        </Link>
        .
      </p>
    </section>
  )
}
