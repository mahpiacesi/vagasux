import guiaHero from '@/assets/illustrations/guia-hero-avatar.png'
import { Button } from '@/components/ui/button'
import { superSite } from '@/lib/siteLinks'

export function BeginnersSection() {
  return (
    <section className="overflow-hidden bg-brand-100/50 px-5 py-20 md:px-6 md:py-24">
      <div className="mx-auto grid max-w-3xl items-center gap-12 md:max-w-6xl md:grid-cols-2 md:gap-14 lg:gap-16">
        <div>
          <p className="text-xs font-bold tracking-[0.18em] text-brand-400 uppercase">
            Para quem é iniciante
          </p>
          <h2 className="mt-4 max-w-xl text-3xl leading-[1.08] font-black tracking-[-0.03em] text-neutral-500 md:text-5xl">
            Não sabe por onde <span className="text-mark">começar</span>?
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-neutral-400 md:text-lg">
            Um guia gratuito com conteúdos selecionados para ajudar você a dar
            os primeiros passos em Product Design.
          </p>
          <div className="mt-9">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-xl px-8 text-base font-black"
            >
              <a
                href={superSite.guia}
                target="_blank"
                rel="noopener noreferrer"
              >
                Acessar o guia
              </a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md md:max-w-none">
          <div
            aria-hidden
            className="beginners-blob absolute inset-[8%] -z-0 rounded-[40%] bg-brand-200/45 blur-2xl"
          />
          <img
            src={guiaHero}
            alt="Ilustração de uma pessoa apontando para ferramentas de design como Notion, Miro e Figma"
            className="beginners-float relative z-10 mx-auto h-auto w-full max-w-lg object-contain drop-shadow-sm"
            width={800}
            height={800}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
