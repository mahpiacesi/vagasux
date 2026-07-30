import { ArrowUpRight, UsersThree, Umbrella } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'
import { ScrollReveal } from '@/components/guilda/ScrollReveal'
import { Button } from '@/components/ui/button'
import { guildaJoinUrl } from '@/data/guilda'
import { communityHashes, routes } from '@/lib/siteLinks'

export function GuildaClosingSection() {
  return (
    <section className="border-t border-neutral-500/10 bg-neutral-100 px-5 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="max-w-2xl">
          <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
            Próximo passo
          </p>
          <h2 className="mt-4 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
            Escolha por onde{' '}
            <span className="text-mark">começar</span>
          </h2>
          <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
            A Guilda é a experiência completa, mas você também pode conhecer a
            VagasUX de graça antes de decidir entrar.
          </p>
        </ScrollReveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 md:gap-5">
          <ScrollReveal as="article" delayMs={80}>
            <div className="flex h-full flex-col rounded-3xl border border-neutral-500/10 bg-neutral-100 p-7 md:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-500">
                <UsersThree size={22} weight="bold" aria-hidden />
              </span>
              <p className="mt-5 text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
                Gratuito
              </p>
              <h3 className="mt-2 text-xl font-black tracking-tight text-neutral-500">
                Comunidade aberta
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                Canais públicos, newsletter e curadoria para conhecer a VagasUX
                sem compromisso.
              </p>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="mt-8 h-11 w-full rounded-xl border-neutral-500/15 font-bold"
              >
                <Link to={`${routes.comunidade}#${communityHashes.canaisAbertos}`}>
                  Entrar nos canais abertos
                </Link>
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal as="article" delayMs={160}>
            <div className="flex h-full flex-col rounded-3xl border border-complementary-300/60 bg-gradient-to-b from-complementary-100 via-neutral-100 to-brand-100/40 p-7 shadow-[0_24px_60px_-36px_rgb(7_0_58_/_0.35)] md:p-8">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-neutral-500 text-complementary-300">
                <Umbrella size={22} weight="bold" aria-hidden />
              </span>
              <p className="mt-5 text-xs font-bold tracking-[0.18em] text-neutral-400 uppercase">
                Membro
              </p>
              <h3 className="mt-2 text-xl font-black tracking-tight text-neutral-500">
                Guilda do Vaguiner
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                Mentorias, grupo fechado, encontros e benefícios exclusivos para
                quem quer migrar para UX com apoio de verdade.
              </p>
              <Button
                asChild
                size="lg"
                className="mt-8 h-11 w-full rounded-xl bg-complementary-300 font-black text-neutral-500 hover:bg-complementary-200"
              >
                <a
                  href={guildaJoinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vem pra Guilda
                  <ArrowUpRight className="ml-1 size-4" aria-hidden />
                </a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
