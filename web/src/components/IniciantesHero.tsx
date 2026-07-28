import { HeartHandshake, Sprout, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { HeroBackdrop } from '@/components/jobs/HeroBackdrop'
import { PageHighlights } from '@/components/jobs/PageHighlights'
import { superSite } from '@/lib/siteLinks'

type IniciantesHeroProps = {
  count: number | null
}

const levelPills = ['Estágio', 'Trainee', 'Júnior'] as const

const highlights = [
  {
    icon: HeartHandshake,
    title: 'Curadoria humana',
    text: 'Cada vaga passa pelo olhar da comunidade — não é robô empilhando link.',
  },
  {
    icon: Sprout,
    title: 'Só quem está começando',
    text: 'Estágio, trainee e júnior em UX, Produto e Design. Sem “sênior master blaster”.',
  },
  {
    icon: Sparkles,
    title: 'Atualizado todo dia',
    text: 'Novas oportunidades entram na lista conforme a curadoria publica no Notion.',
  },
] as const

export function IniciantesHero({ count }: IniciantesHeroProps) {
  return (
    <section className="relative overflow-hidden px-5 pt-14 pb-10 md:px-6 md:pt-20 md:pb-12">
      <HeroBackdrop variant="curated" />

      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <div className="mural-fade rounded-2xl border border-brand-200/50 bg-gradient-to-br from-brand-100/90 via-neutral-100/95 to-complementary-100/80 p-6 shadow-[0_24px_60px_-24px_rgb(36_46_144_/_0.35)] md:p-8">
          <p className="text-xs font-bold tracking-[0.14em] text-brand-400 uppercase md:text-sm">
            Curadoria VagasUX
          </p>
          <h1 className="mural-fade mural-fade-delay-1 mt-4 max-w-3xl text-[2.35rem] leading-[1.05] font-black tracking-[-0.04em] text-neutral-500 md:text-6xl">
            Vagas de verdade para quem está{' '}
            <span className="text-mark">começando</span>
          </h1>
          <p className="mural-fade mural-fade-delay-2 mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            Cansada de ver só vaga sênior no feed? Aqui a seleção é humana: estagiário,
            trainee e júnior em UX, Produto e Design — oportunidades que abrem porta,
            não muro.
            {count != null ? (
              <>
                {' '}
                <span className="font-semibold text-brand-500">
                  {count} {count === 1 ? 'vaga curada no ar' : 'vagas curadas no ar'}.
                </span>
              </>
            ) : null}
          </p>

          <div className="mural-fade mural-fade-delay-2 mt-6 flex flex-wrap gap-2">
            {levelPills.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-brand-200/70 bg-neutral-100/80 px-3 py-1 text-xs font-bold tracking-wide text-brand-500 uppercase"
              >
                {pill}
              </span>
            ))}
          </div>

          <div className="mural-fade mural-fade-delay-2 mt-8">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-7 text-base font-black shadow-md shadow-brand-500/15"
            >
              <a href={superSite.publicar} target="_blank" rel="noopener noreferrer">
                Indicar uma vaga
              </a>
            </Button>
          </div>
        </div>

        <PageHighlights items={highlights} />
      </div>
    </section>
  )
}
