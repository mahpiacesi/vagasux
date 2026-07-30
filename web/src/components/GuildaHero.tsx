import { ArrowDown } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { UmbrellaHeroIllustration } from '@/components/UmbrellaHeroIllustration'
import { guildaJoinUrl } from '@/data/guilda'
import { guildaHashes } from '@/lib/siteLinks'

export function GuildaHero() {
  return (
    <section className="relative overflow-hidden bg-neutral-500 px-5 pt-20 pb-0 text-neutral-100 md:px-6 md:pt-28">
      <div className="pointer-events-none absolute inset-0 -z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_20%_-5%,rgba(246,209,110,0.22),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_90%_20%,rgba(93,107,246,0.28),transparent_55%)]" />
        <div className="absolute right-[-5%] bottom-[10%] h-80 w-80 rounded-full bg-complementary-300/12 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-6">
        <div className="max-w-xl lg:max-w-none">
          <p className="mural-fade text-xs font-bold tracking-[0.24em] text-complementary-300 uppercase md:text-sm">
            Comunidade exclusiva
          </p>

          <h1 className="mural-fade mural-fade-delay-1 mt-6 text-[2.65rem] leading-[1.02] font-black tracking-[-0.05em] md:text-6xl lg:text-[3.65rem]">
            Guilda do{' '}
            <span className="text-mark-on-dark">Vaguiner</span>
          </h1>

          <p className="mural-fade mural-fade-delay-2 mt-6 text-base leading-relaxed text-neutral-300 md:text-xl">
            Para quem está migrando para UX/UI e quer aprender na prática, com
            mentorias, troca de verdade, seletivas e descontos exclusivos para
            membros.
          </p>

          <div className="mural-fade mural-fade-delay-3 mt-10 flex flex-wrap items-center gap-3">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl bg-complementary-300 px-7 text-base font-black text-neutral-500 shadow-lg shadow-black/20 hover:bg-complementary-200"
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
              className="h-12 rounded-xl border-white/20 bg-white/5 px-7 text-base font-bold text-neutral-100 hover:bg-white/10 hover:text-neutral-100"
            >
              <a href={`#${guildaHashes.planos}`}>
                Ver planos
                <ArrowDown size={16} weight="bold" className="ml-1.5" aria-hidden />
              </a>
            </Button>
          </div>

          <p className="mural-fade mural-fade-delay-3 mt-6 text-sm text-neutral-400">
            A partir de{' '}
            <span className="font-bold text-complementary-300">R$ 19,90/mês</span>
            . Quer só conhecer a VagasUX antes?{' '}
            <a
              href="/comunidade#canais-abertos"
              className="font-semibold text-neutral-200 underline decoration-white/20 underline-offset-4 transition-colors hover:text-complementary-200"
            >
              A comunidade aberta é gratuita
            </a>
            .
          </p>
        </div>

        <div className="mural-fade mural-fade-delay-2 relative mx-auto w-full max-w-md lg:max-w-none lg:justify-self-end">
          <div className="pointer-events-none absolute inset-0 rounded-full bg-complementary-300/10 blur-3xl" />
          <UmbrellaHeroIllustration className="relative w-full max-w-[28rem] lg:ml-auto lg:max-w-none" />
        </div>
      </div>

      <div
        className="pointer-events-none relative mx-auto mt-10 max-w-6xl pb-8 md:mt-12 md:pb-10"
        aria-hidden
      >
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </div>
    </section>
  )
}
