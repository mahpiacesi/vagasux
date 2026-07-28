import { Link } from 'react-router-dom'
import { Layers, RefreshCw, Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroBackdrop } from '@/components/jobs/HeroBackdrop'
import { PageHighlights } from '@/components/jobs/PageHighlights'
import { routes, superSite } from '@/lib/siteLinks'

type MuralIntroProps = {
  count: number | null
}

const highlights = [
  {
    icon: RefreshCw,
    title: 'Atualização automática',
    text: 'Novas oportunidades entram diariamente no mural a partir de diversas plataformas.',
  },
  {
    icon: Search,
    title: 'Encontre mais rápido',
    text: 'Filtre por empresa, cargo, mercado, formato e nível para encontrar as vagas ideais para você.',
  },
  {
    icon: Layers,
    title: 'Diversas fontes',
    text: 'Gupy, Remotar, Greenhouse e outras plataformas reunidas em um único lugar.',
  },
] as const

export function MuralIntro({ count }: MuralIntroProps) {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-10 md:px-6 md:pt-20 md:pb-12">
      <HeroBackdrop />

      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <p className="mural-fade text-xs font-bold tracking-[0.2em] text-brand-400 uppercase md:text-sm">
          Mural de vagas
        </p>
        <h1 className="mural-fade mural-fade-delay-1 mt-5 max-w-4xl text-[2.35rem] leading-[1.05] font-black tracking-[-0.04em] text-neutral-500 md:text-6xl">
          Oportunidades em <span className="text-mark">UX e Design</span>
        </h1>
        <p className="mural-fade mural-fade-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
          Reunimos vagas de diversas plataformas em um só lugar para facilitar sua busca.
          Filtre, explore e encontre sua próxima oportunidade.
          {count != null ? (
            <>
              {' '}
              <span className="font-semibold text-neutral-500">
                {count} {count === 1 ? 'vaga no ar' : 'vagas no ar'}.
              </span>
            </>
          ) : null}
        </p>

        <div className="mural-fade mural-fade-delay-2 mt-8 flex flex-wrap items-center gap-3">
          <Button asChild size="lg" className="h-12 rounded-xl px-7 text-base font-black">
            <a href={superSite.publicar} target="_blank" rel="noopener noreferrer">
              Indicar uma vaga
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-neutral-500/20 px-7 text-base font-bold"
          >
            <Link to={routes.curadoria}>Ver curadoria</Link>
          </Button>
        </div>

        <PageHighlights items={highlights} />
      </div>
    </section>
  )
}
