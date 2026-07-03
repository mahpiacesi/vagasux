import { Heart, Users, Sparkles } from 'lucide-react'

const pillars = [
  {
    icon: Users,
    title: 'Comunidade de verdade',
    description:
      'Um espaço para quem trabalha, estuda ou quer migrar para UX, Produto e Design — sem gatekeeping e sem tom corporativo.',
  },
  {
    icon: Sparkles,
    title: 'Informação acessível',
    description:
      'Curadoria de vagas, conteúdo e orientações práticas para você entender o mercado com clareza, não com buzzword.',
  },
  {
    icon: Heart,
    title: 'Crescimento coletivo',
    description:
      'Troca de conhecimento que fortalece todo mundo. Ninguém deveria entrar no mercado sozinho.',
  },
]

export function About() {
  return (
    <section id="sobre" className="px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-brand-300">
            O que é a VagasUX
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight text-brand-500 md:text-4xl">
            Mais que vagas: um lugar para se apoiar e evoluir junto
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-neutral-400">
            Nascemos para conectar pessoas com oportunidades, conteúdo e apoio real no
            caminho profissional. Não somos uma empresa tradicional nem uma startup fria —
            somos uma comunidade brasileira, próxima e humana.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-2xl border border-neutral-200 bg-neutral-100 p-6 transition-shadow hover:shadow-lg hover:shadow-brand-100"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-300">
                <pillar.icon className="h-5 w-5" strokeWidth={2} aria-hidden="true" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-brand-500">{pillar.title}</h3>
              <p className="mt-2 leading-relaxed text-neutral-400">{pillar.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
