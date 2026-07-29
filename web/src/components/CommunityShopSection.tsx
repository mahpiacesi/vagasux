import { ShoppingBag } from '@phosphor-icons/react'
import { Button } from '@/components/ui/button'
import { communityShops } from '@/lib/siteLinks'
import bolsaGuia from '@/assets/shop/bolsa-guia.png'
import camisetaJuniorNovato from '@/assets/shop/camiseta-junior-novato.png'
import camisetaLuteJuniorPreta from '@/assets/shop/camiseta-lute-junior-preta.png'
import canecaChuvaDeVagas from '@/assets/shop/caneca-chuva-de-vagas.png'

const products = [
  {
    name: 'Caneca Chuva de Vagas',
    href: communityShops.products.canecaChuvaDeVagas,
    image: canecaChuvaDeVagas,
    alt: 'Caneca branca com padrão de guarda-chuvas amarelos e logo VagasUX',
  },
  {
    name: 'Camiseta Lute como um júnior',
    href: communityShops.products.camisetaLuteJuniorPreta,
    image: camisetaLuteJuniorPreta,
    alt: 'Camiseta preta com a frase Lute como um júnior e logo VagasUX',
  },
  {
    name: 'Camiseta Júnior & Iniciante',
    href: communityShops.products.camisetaJuniorIniciante,
    image: camisetaJuniorNovato,
    alt: 'Camiseta branca com Júnior, Novato, Iniciante e Aprendiz e logo VagasUX',
  },
  {
    name: 'Bolsa Guia do Product Designer',
    href: communityShops.products.bolsaGuia,
    image: bolsaGuia,
    alt: 'Ecobag amarela com ilustração e logo VagasUX',
  },
] as const

export function CommunityShopSection() {
  return (
    <section
      id="lojinha"
      className="relative overflow-hidden scroll-mt-24 border-t border-neutral-500/10 bg-neutral-500 px-5 py-20 text-neutral-100 md:px-6 md:py-28"
    >
      <div className="pointer-events-none absolute inset-0 -z-0 bg-[radial-gradient(circle_at_top_right,rgba(255,214,0,0.14),transparent_55%)]" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mural-fade max-w-3xl">
          <p className="text-xs font-bold tracking-[0.2em] text-complementary-300 uppercase">
            Contribuição opcional
          </p>
          <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] md:text-5xl">
            Lojinha da comunidade
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-300 md:text-lg">
            Você também pode apoiar a gente comprando produtinhos da iniciativa.
            Estamos na{' '}
            <a
              href={communityShops.colab55}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-complementary-300 underline decoration-complementary-300/40 underline-offset-4 hover:text-complementary-200"
            >
              Colab55
            </a>{' '}
            e na{' '}
            <a
              href={communityShops.umapenca}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-complementary-300 underline decoration-complementary-300/40 underline-offset-4 hover:text-complementary-200"
            >
              UmaPenca
            </a>
            . Eles cuidam de toda a produção. Ganhamos uma comissão passiva por
            cada venda e você sai mais estiloso(a) como todo{' '}
            <span className="font-bold text-complementary-300">Vaguiner</span>{' '}
            deve ser.
          </p>
        </div>

        <div className="mural-fade mural-fade-delay-1 mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {products.map((product) => (
            <a
              key={product.name}
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="comunidade-card group block overflow-hidden rounded-3xl bg-neutral-100 shadow-[0_24px_60px_-32px_rgb(0_0_0_/_0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-complementary-300"
            >
              <img
                src={product.image}
                alt={product.alt}
                className="block aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
                decoding="async"
              />
              <div className="px-5 py-4">
                <p className="text-sm font-bold leading-snug text-neutral-500">
                  {product.name}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="mural-fade mural-fade-delay-2 mt-10 flex flex-wrap gap-3">
          <Button
            asChild
            size="lg"
            className="h-12 rounded-xl bg-complementary-300 px-7 text-base font-black text-neutral-500 hover:bg-complementary-200"
          >
            <a
              href={communityShops.colab55}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver loja na Colab55
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 rounded-xl border-white/20 bg-white/5 px-7 text-base font-bold text-neutral-100 hover:bg-white/10 hover:text-neutral-100"
          >
            <a
              href={communityShops.umapenca}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver loja na UmaPenca
            </a>
          </Button>
        </div>

        <p className="mural-fade mural-fade-delay-3 mt-6 flex items-center gap-2 text-sm text-neutral-400">
          <ShoppingBag size={18} weight="bold" aria-hidden />
          Compra opcional. Mais uma forma de ajudar o projeto a continuar no ar.
        </p>
      </div>
    </section>
  )
}
