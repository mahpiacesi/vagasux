import { ArrowDown, Heart } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { volunteers } from '@/data/volunteers'
import { superSite } from '@/lib/siteLinks'

const heroMosaic = [
  {
    name: 'Marianna Piacesi',
    emoji: '☂️',
    className: 'col-start-1 col-span-2 row-start-1 row-span-2',
    large: true,
  },
  {
    name: 'Gabriela Peron',
    emoji: '🐝',
    className: 'col-start-3 row-start-1',
  },
  {
    name: 'Fernando Lima',
    emoji: '👾',
    className: 'col-start-4 row-start-1',
  },
  {
    name: 'Bruna David',
    emoji: '🐈‍⬛',
    className: 'col-start-3 row-start-2 row-span-2',
    large: true,
  },
  {
    name: 'Andre Hiro',
    emoji: '⚡',
    className: 'col-start-4 row-start-2',
  },
  {
    name: 'Jade Simões',
    emoji: '🥑',
    className: 'col-start-1 col-span-2 row-start-3',
  },
  {
    name: 'Tatiana Barbosa',
    emoji: '🐳',
    className: 'col-start-1 row-start-4',
  },
  {
    name: 'Natalia Feitosa',
    emoji: '🦄',
    className: 'col-start-2 row-start-4',
  },
] as const

const frontCount = new Set(volunteers.flatMap((person) => person.roles)).size

const heroStats = [
  { value: String(volunteers.length), label: 'pessoas no time' },
  { value: String(frontCount), label: 'frentes de atuação' },
  { value: '100%', label: 'voluntário' },
] as const

function firstName(name: string) {
  return name.split(' ')[0] ?? name
}

export function VoluntariadoHero() {
  return (
    <section className="relative overflow-hidden border-b border-neutral-500/10 bg-gradient-to-b from-brand-100/70 via-neutral-100 to-complementary-100/30 px-5 pt-16 pb-14 md:px-6 md:pt-24 md:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute top-0 right-[8%] h-72 w-72 rounded-full bg-complementary-200/35 blur-3xl" />
        <div className="absolute -bottom-16 left-[4%] h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:items-center lg:gap-14">
        <div className="flex flex-col">
          <div className="mural-fade flex items-center gap-3">
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-neutral-500 text-xl text-complementary-300">
              💪
            </span>
            <p className="text-xs font-bold tracking-[0.22em] text-brand-500 uppercase md:text-sm">
              Time voluntário
            </p>
          </div>

          <h1 className="mural-fade mural-fade-delay-1 mt-8 max-w-xl text-[2.35rem] leading-[1.04] font-black tracking-[-0.045em] text-neutral-500 md:text-5xl lg:text-[3.4rem]">
            Quem faz a{' '}
            <span className="text-mark">VagasUX</span> acontecer
          </h1>

          <p className="mural-fade mural-fade-delay-2 mt-5 max-w-lg text-base leading-relaxed text-neutral-400 md:text-lg">
            Por trás da VagasUX existe um time de pessoas voluntárias que
            dedica um tempinho toda semana para transformar ideias em projetos,
            organizar iniciativas e fortalecer a comunidade de UX Design.
          </p>

          <dl className="mural-fade mural-fade-delay-2 mt-8 grid grid-cols-3 gap-3 max-w-lg">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-neutral-500/10 bg-neutral-100/80 px-3 py-3 text-center shadow-[0_12px_32px_-24px_rgb(7_0_58_/_0.35)]"
              >
                <dt className="text-xl font-black tracking-tight text-neutral-500 md:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-[0.65rem] font-bold tracking-[0.12em] text-neutral-400 uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mural-fade mural-fade-delay-3 mt-8 flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-7 text-base font-black shadow-md shadow-brand-500/15"
            >
              <a href="#time">
                Conheça o time
                <ArrowDown size={16} weight="bold" className="ml-1.5" aria-hidden />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-neutral-500/15 px-7 text-base font-bold"
            >
              <a
                href={superSite.apoie}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Heart size={18} weight="bold" className="mr-1.5" aria-hidden />
                Quero apoiar
              </a>
            </Button>
          </div>
        </div>

        <div className="mural-fade mural-fade-delay-1 mx-auto w-full max-w-md lg:max-w-none">
          <div className="grid grid-cols-4 grid-rows-4 gap-2 md:gap-3">
            {heroMosaic.map((tile, index) => (
              <div
                key={tile.name}
                className={`group flex min-h-[4.5rem] flex-col items-center justify-center rounded-2xl border border-neutral-500/10 bg-neutral-100/90 p-2 shadow-[0_16px_40px_-28px_rgb(7_0_58_/_0.4)] transition-transform duration-500 hover:-translate-y-1 ${tile.className}`}
                style={{ animationDelay: `${120 + index * 50}ms` }}
              >
                <span
                  className={`leading-none ${'large' in tile && tile.large ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}
                  aria-hidden
                >
                  {tile.emoji}
                </span>
                <span className="mt-1 max-w-full truncate text-[0.62rem] font-bold tracking-wide text-neutral-400 uppercase opacity-80 transition-opacity group-hover:opacity-100 md:text-[0.65rem]">
                  {firstName(tile.name)}
                </span>
              </div>
            ))}

            <div className="col-start-4 row-start-3 row-span-2 flex min-h-0 flex-col items-center justify-center rounded-2xl border border-complementary-300/50 bg-complementary-300 p-2 text-center shadow-lg shadow-black/10">
              <p className="max-w-full text-[0.62rem] font-bold tracking-[0.12em] text-neutral-500 uppercase md:text-[0.65rem]">
                Projeto coletivo
              </p>
              <p className="mt-1 max-w-full text-[0.62rem] font-bold leading-tight text-neutral-500 md:text-[0.65rem]">
                Galerinha gente boa demais
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
