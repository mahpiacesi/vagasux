import { Quotes } from '@phosphor-icons/react'

export function GuiaLearningQuote() {
  return (
    <section className="overflow-hidden border-b border-neutral-500/10 bg-neutral-500 px-5 py-16 md:px-6 md:py-20">
      <div className="relative mx-auto max-w-6xl">
        <Quotes
          size={160}
          weight="fill"
          className="pointer-events-none absolute -top-12 -left-10 text-brand-400/35"
          aria-hidden
        />
        <div className="relative max-w-4xl">
          <p className="text-xs font-bold tracking-[0.2em] text-complementary-300 uppercase">
            Aprender é começar
          </p>
          <blockquote className="mt-5 text-3xl leading-[1.05] font-black tracking-[-0.05em] text-neutral-100 md:text-5xl lg:text-6xl">
            <span className="block">“Meri, você sabe nadar?”</span>
            <span className="mt-2 block text-brand-200">
              “Não, mas eu sei aprender.”
            </span>
          </blockquote>
          <footer className="mt-6 text-sm font-semibold text-neutral-200">
            Meri, 2 anos · @frasesdecrianças
          </footer>
        </div>
      </div>
    </section>
  )
}
