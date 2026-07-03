import { MessageCircle, Search, Share2, TrendingUp } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: MessageCircle,
    title: 'Entre na comunidade',
    description:
      'Faça parte do espaço onde pessoas de UX, Produto e Design se encontram para trocar experiências e se apoiar.',
  },
  {
    step: '02',
    icon: Search,
    title: 'Acesse vagas e conteúdo curado',
    description:
      'Encontre oportunidades selecionadas e materiais que ajudam você a entender o mercado com clareza.',
  },
  {
    step: '03',
    icon: Share2,
    title: 'Compartilhe e aprenda junto',
    description:
      'Troque conhecimento, tire dúvidas e contribua. Colaboração acima de competição — sempre.',
  },
  {
    step: '04',
    icon: TrendingUp,
    title: 'Cresça com apoio real',
    description:
      'Avance na carreira com networking, orientação e uma rede que torce pelo seu progresso.',
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-brand-100 px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-400">
            Como funciona
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-500 md:text-4xl">
            Simples, direto e feito para você não ficar perdido
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-400">
            O projeto existe para facilitar seu caminho: da descoberta de oportunidades até
            a construção de uma rede de apoio na área.
          </p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-2">
          {steps.map((item) => (
            <li
              key={item.step}
              className="flex gap-5 rounded-2xl border border-brand-200/60 bg-neutral-100 p-6"
            >
              <div className="flex shrink-0 flex-col items-center gap-3">
                <span className="text-xs font-black text-complementary-400">{item.step}</span>
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-complementary-100 text-complementary-500">
                  <item.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-brand-500">{item.title}</h3>
                <p className="mt-2 leading-relaxed text-neutral-400">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
