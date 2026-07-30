import { ArrowDown } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { GuildaHeroIllustration } from '@/components/GuildaHeroIllustration'
import { guildaJoinUrl } from '@/data/guilda'
import { guildaHashes } from '@/lib/siteLinks'

export function GuildaHero() {
  return (
    <section className="guilda-hero relative overflow-hidden border-b border-neutral-500/10 bg-neutral-100 px-5 pt-16 pb-12 md:px-6 md:pt-24 md:pb-16">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div
          className="absolute inset-0 opacity-[0.45]"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(7 0 58 / 0.08) 1px, transparent 0)',
            backgroundSize: '22px 22px',
          }}
        />
        <div className="absolute top-[-10%] right-[-5%] h-72 w-72 rounded-full bg-brand-200/35 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-8%] h-64 w-64 rounded-full bg-complementary-200/40 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:gap-10">
        <div className="max-w-xl lg:max-w-none">
          <p className="mural-fade text-xs font-bold tracking-[0.22em] text-brand-400 uppercase md:text-sm">
            Comunidade exclusiva
          </p>

          <h1 className="mural-fade mural-fade-delay-1 mt-7 text-[2.55rem] leading-[0.98] font-black tracking-[-0.05em] text-neutral-500 uppercase md:text-[3.4rem] lg:text-[3.75rem]">
            <span className="text-mark">Guilda</span> do
            <br />
            Vaguiner
          </h1>

          <p className="mural-fade mural-fade-delay-2 mt-6 max-w-lg text-base leading-relaxed text-neutral-400 md:text-lg">
            Pra quem está migrando pra UX/UI e quer aprender na prática com
            mentorias de profissionais do mercado e muita troca. Conteúdos,
            seletivas e descontos exclusivos para membros.
          </p>

          <div className="mural-fade mural-fade-delay-3 mt-9 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-complementary-300 px-7 text-base font-black text-neutral-500 shadow-md shadow-brand-500/10 hover:bg-complementary-200"
            >
              <a
                href={guildaJoinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vem pra Guilda
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-xl border-neutral-500/15 px-7 text-base font-bold"
            >
              <a href={`#${guildaHashes.planos}`}>
                Ver planos
                <ArrowDown size={16} weight="bold" className="ml-1.5" aria-hidden />
              </a>
            </Button>
          </div>
        </div>

        <div className="mural-fade mural-fade-delay-2 relative mx-auto w-full max-w-[22rem] md:max-w-[26rem] lg:max-w-none lg:justify-self-end">
          <GuildaHeroIllustration className="guilda-hero-art relative z-[1] h-auto w-full overflow-visible" />
        </div>
      </div>
    </section>
  )
}
