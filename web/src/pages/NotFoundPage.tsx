import { Link } from 'react-router-dom'
import notFoundIllustration from '@/assets/illustrations/404-illustration.svg'
import { Button } from '@/components/ui/button'
import { routes } from '@/lib/siteLinks'

export function NotFoundPage() {
  return (
    <main>
      <section className="relative overflow-hidden px-5 pt-16 pb-20 md:px-6 md:pt-24 md:pb-28">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-28 -left-20 h-[28rem] w-[28rem] rounded-full bg-brand-200/35 blur-3xl" />
          <div className="absolute top-32 -right-24 h-80 w-80 rounded-full bg-complementary-200/45 blur-3xl" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-14">
          <div className="max-w-xl">
            <p className="mural-fade text-xs font-bold tracking-[0.2em] text-brand-400 uppercase md:text-sm">
              Erro 404
            </p>
            <h1 className="mural-fade mural-fade-delay-1 mt-5 text-[2.35rem] leading-[1.08] font-black tracking-[-0.04em] text-neutral-500 md:text-5xl lg:text-[3.25rem]">
              ☔ Ops! Essa página pegou chuva.
            </h1>
            <p className="mural-fade mural-fade-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-neutral-400 md:text-xl">
              Parece que ela se perdeu no caminho. Calce sua galocha e volte
              para a VagasUX para continuar explorando vagas, conteúdos,
              mentorias e desafios.
            </p>
            <div className="mural-fade mural-fade-delay-3 mt-10">
              <Button asChild size="lg" className="h-12 rounded-xl px-7 text-base font-black">
                <Link to={routes.home}>Voltar para o início</Link>
              </Button>
            </div>
          </div>

          <img
            src={notFoundIllustration}
            alt=""
            width={1536}
            height={1024}
            className="mural-fade mural-fade-delay-2 mx-auto h-auto w-full max-w-xl lg:max-w-none"
          />
        </div>
      </section>
    </main>
  )
}
