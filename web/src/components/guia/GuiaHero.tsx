import { GuiaHeroIllustration } from '@/components/GuiaHeroIllustration'
import { GuiaSearch } from '@/components/guia/GuiaSearch'

export function GuiaHero() {
  return (
    <section className="relative border-b border-neutral-500/10 bg-brand-100/40 px-5 pt-14 pb-16 md:px-6 md:pt-20 md:pb-20">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              'radial-gradient(circle at 1px 1px, rgb(7 0 58 / 0.06) 1px, transparent 0)',
            backgroundSize: '20px 20px',
          }}
        />
        <div className="absolute top-[-8%] right-[-6%] h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
        <div className="absolute bottom-[-12%] left-[-8%] h-56 w-56 rounded-full bg-complementary-200/35 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-12">
        <div className="max-w-xl">
          <p className="mural-fade text-xs font-bold tracking-[0.22em] text-brand-400 uppercase md:text-sm">
            Curadoria gratuita desde 2020
          </p>

          <h1 className="mural-fade mural-fade-delay-1 mt-6 text-[2.35rem] leading-[0.98] font-black tracking-[-0.05em] text-neutral-500 md:text-[3.25rem] lg:text-[3.5rem]">
            Guia do
            <br />
            <span className="text-mark">Product Designer</span>
          </h1>

          <p className="mural-fade mural-fade-delay-2 mt-5 max-w-lg text-base leading-relaxed text-neutral-400 md:text-lg">
            Centenas de conteúdos curados para você aprender no seu ritmo, com
            trilhas, busca e caminhos pensados para quem está começando.
          </p>

          <div className="mural-fade mural-fade-delay-3 mt-10">
            <p id="guia-search-label" className="text-center text-sm font-bold text-neutral-500 md:text-left md:text-base">
              O que você quer aprender hoje?
            </p>
            <div className="relative mt-4 md:max-w-xl" aria-labelledby="guia-search-label">
              <GuiaSearch />
            </div>
          </div>
        </div>

        <div className="mural-fade mural-fade-delay-2 mx-auto w-full max-w-[20rem] md:max-w-[24rem] lg:max-w-none lg:justify-self-end">
          <GuiaHeroIllustration className="guia-hero h-auto w-full overflow-visible" />
        </div>
      </div>
    </section>
  )
}
