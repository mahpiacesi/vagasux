import { HeartHandshake, Sprout, Sparkles } from 'lucide-react'
import { CurationHeroIllustration } from '@/components/CurationHeroIllustration'
import { Button } from '@/components/ui/button'
import { HeroBackdrop } from '@/components/jobs/HeroBackdrop'
import { PageHighlights } from '@/components/jobs/PageHighlights'

const levelPills = ['Estágio', 'Trainee', 'Júnior'] as const

const highlights = [
  {
    icon: HeartHandshake,
    title: 'Curadoria humana',
    text: 'Cada vaga passa pelo olhar de um voluntário antes de entrar na lista.',
  },
  {
    icon: Sprout,
    title: 'Apenas vagas iniciantes',
    text: 'Estágio, trainee e júnior. Aqui, "sênior master blaster" fica de fora.',
  },
  {
    icon: Sparkles,
    title: 'Sempre atualizada',
    text: 'Novas oportunidades entram na curadoria para você perder menos tempo procurando.',
  },
] as const

export function IniciantesHero() {
  return (
    <section className="relative overflow-hidden bg-brand-100/40 px-5 pt-14 pb-10 md:px-6 md:pt-20 md:pb-14">
      <HeroBackdrop variant="curated" />

      <div className="mx-auto max-w-3xl md:max-w-5xl">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-center md:justify-center md:gap-12 lg:gap-14">
          <div className="w-full md:max-w-md lg:max-w-lg">
            <p className="mural-fade text-xs font-bold tracking-[0.18em] text-brand-400 uppercase md:text-sm">
              Curadoria VagasUX
            </p>
            <h1 className="mural-fade mural-fade-delay-1 mt-4 max-w-xl text-[2.35rem] leading-[1.05] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl lg:text-[3.25rem]">
              Vagas de verdade para quem está{' '}
              <span className="text-mark">começando</span>
            </h1>
            <p className="mural-fade mural-fade-delay-2 mt-5 max-w-md text-base leading-relaxed text-neutral-400 md:text-lg">
              Cansada de ver só vaga sênior no feed? Aqui a seleção é humana e feita para
              quem está começando. Porque acreditamos que toda carreira merece uma{' '}
              <span className="font-bold text-neutral-500">primeira</span>{' '}
              oportunidade.
            </p>

            <div className="mural-fade mural-fade-delay-2 mt-5 flex flex-wrap gap-2">
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
                className="h-12 rounded-xl px-8 text-base font-black shadow-md shadow-brand-500/15"
              >
                <a href="#vagas">Ver vagas</a>
              </Button>
            </div>
          </div>

          <div className="w-full max-w-[20rem] shrink-0 md:max-w-[24rem] lg:max-w-[26rem]">
            <CurationHeroIllustration className="curation-hero h-auto w-full overflow-visible" />
          </div>
        </div>

        <PageHighlights items={highlights} />
      </div>
    </section>
  )
}
