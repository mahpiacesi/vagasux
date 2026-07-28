import { HeartHandshake, Sprout, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'
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
    <section className="iniciantes-hero relative overflow-hidden px-5 pt-10 pb-8 md:px-6 md:pt-14 md:pb-10">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-brand-300/25 blur-3xl" />
        <div className="absolute top-8 -right-10 h-72 w-72 rounded-full bg-complementary-300/40 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 h-48 w-48 rounded-full bg-highlight-200/10 blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.4]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(36 46 144 / 0.12) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
      </div>

      <div className="mx-auto max-w-3xl md:max-w-4xl">
        <div className="iniciantes-hero-card mural-fade rounded-2xl border border-brand-200/50 bg-gradient-to-br from-brand-100/90 via-neutral-100/95 to-complementary-100/80 p-6 shadow-[0_24px_60px_-24px_rgb(36_46_144_/_0.35)] md:p-8">
          <p className="text-xs font-bold tracking-[0.14em] text-brand-400 uppercase md:text-sm">
            Curadoria VagasUX
          </p>
          <h1 className="mural-fade mural-fade-delay-1 mt-3 max-w-2xl text-3xl font-black tracking-tight text-neutral-500 md:text-[2.65rem] md:leading-[1.08]">
            Vagas de verdade para quem está{' '}
            <span className="bg-gradient-to-r from-brand-500 to-brand-300 bg-clip-text text-transparent">
              começando
            </span>
          </h1>
          <p className="mural-fade mural-fade-delay-2 mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
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

          <div className="mural-fade mural-fade-delay-2 mt-6">
            <Button asChild size="lg" className="px-6 font-bold shadow-md shadow-brand-500/15">
              <a href={superSite.publicar} target="_blank" rel="noopener noreferrer">
                Indicar uma vaga
              </a>
            </Button>
          </div>
        </div>

        <ul className="mural-fade mural-fade-delay-2 mt-8 grid gap-4 sm:grid-cols-3">
          {highlights.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="rounded-xl border border-neutral-200/80 bg-neutral-100/60 px-4 py-4 backdrop-blur-sm"
            >
              <Icon className="size-5 text-brand-400" aria-hidden />
              <p className="mt-2 text-sm font-black text-neutral-500">{title}</p>
              <p className="mt-1 text-sm leading-relaxed text-neutral-400">{text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
