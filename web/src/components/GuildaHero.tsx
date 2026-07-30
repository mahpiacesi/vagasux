import { ArrowRight } from '@phosphor-icons/react'
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
          <p className="guilda-hero-badge mural-fade inline-flex items-center rounded-lg border-2 border-neutral-500 bg-complementary-200 px-3.5 py-1.5 text-[0.68rem] font-black tracking-[0.22em] text-neutral-500 uppercase shadow-[3px_3px_0_0_var(--color-neutral-500)] md:text-xs">
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

          <div className="mural-fade mural-fade-delay-3 mt-9 flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="guilda-hero-cta h-12 rounded-xl border-2 border-neutral-500 bg-complementary-300 px-7 text-base font-black text-neutral-500 shadow-[4px_4px_0_0_var(--color-neutral-500)] transition-[transform,box-shadow,background-color] duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-complementary-200 hover:shadow-[2px_2px_0_0_var(--color-neutral-500)] active:translate-x-1 active:translate-y-1 active:shadow-none"
            >
              <a
                href={guildaJoinUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Vem pra Guilda
              </a>
            </Button>

            <a
              href={`#${guildaHashes.planos}`}
              className="group inline-flex items-center gap-1.5 text-base font-bold text-neutral-500 transition-colors hover:text-brand-500"
            >
              Veja os planos
              <ArrowRight
                size={18}
                weight="bold"
                className="transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden
              />
            </a>
          </div>
        </div>

        <div className="mural-fade mural-fade-delay-2 relative mx-auto w-full max-w-[22rem] md:max-w-[26rem] lg:max-w-none lg:justify-self-end">
          <GuildaHeroIllustration className="guilda-hero-art relative z-[1] h-auto w-full overflow-visible" />
        </div>
      </div>
    </section>
  )
}
