import {
  ArrowUpRight,
  CalendarCheck,
  ChatCircleDots,
  CheckCircle,
  ClipboardText,
  Heart,
  NotePencil,
  Umbrella,
} from '@phosphor-icons/react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import learningIllustration from '@/assets/illustrations/illustration-learning.svg'
import { MentorProfileDialog } from '@/components/MentorProfileDialog'
import { Button } from '@/components/ui/button'
import { findMentorFallback, mentors as fallbackMentors, type Mentor } from '@/data/mentorship'
import { routes } from '@/lib/siteLinks'
import { fetchActiveMentors, type PublicMentor } from '@/lib/supabase'

const mentoringPaymentUrl = 'https://nas.com/vagasux/zerolink/mentoria'

const steps = [
  {
    number: '01',
    title: 'Escolha uma pessoa mentora',
    description:
      'Encontre uma pessoa disponível para conversar e entre em contato pelo LinkedIn para combinar o horário.',
    detail: 'O agendamento é manual e a resposta pode levar até cinco dias úteis.',
    Icon: CalendarCheck,
  },
  {
    number: '02',
    title: 'Faça sua contribuição',
    description:
      'Cada apoio a partir de R$ 15 equivale a uma mentoria. Para marcar mais conversas, faça uma nova contribuição para cada encontro.',
    detail: 'Salve o comprovante para enviar à pessoa mentora escolhida.',
    Icon: Heart,
  },
  {
    number: '03',
    title: 'Prepare suas dúvidas',
    description:
      'Envie um resumo do que você quer conversar. Quanto mais contexto compartilhar, melhor a pessoa mentora poderá te ajudar.',
    detail: 'Pronto: agora é só aguardar a confirmação da mentoria.',
    Icon: NotePencil,
  },
] as const

function mentorSlug(name: string) {
  return name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

function mergeMentor(publicMentor: PublicMentor): Mentor {
  const fallback = findMentorFallback(publicMentor.name)
  return {
    id: publicMentor.notionPageId,
    slug: mentorSlug(publicMentor.name),
    name: publicMentor.name,
    photo: publicMentor.photo ?? fallback?.photo,
    photoFocus: fallback?.photoFocus ?? (mentorSlug(publicMentor.name) === 'jade-simoes' ? 'center top' : undefined),
    emoji: fallback?.emoji ?? '💬',
    topics: publicMentor.topics,
    contactUrl: publicMentor.contactUrl,
    status: publicMentor.status,
    available: publicMentor.status === 'Disponível',
  }
}

export function MentoriaPage() {
  const [mentors, setMentors] = useState<Mentor[]>(fallbackMentors)
  const [selectedMentor, setSelectedMentor] = useState<Mentor | null>(null)

  useEffect(() => {
    let cancelled = false
    void fetchActiveMentors()
      .then((publicMentors) => {
        if (!cancelled && publicMentors.length > 0) setMentors(publicMentors.map(mergeMentor))
      })
      .catch((error) => {
        console.warn('Failed to load mentors from Supabase, using fallback.', error)
      })
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <main>
      <section className="relative overflow-hidden border-b border-neutral-500/10 bg-brand-100/40 px-5 py-16 md:px-6 md:py-20">
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, rgb(7 0 58 / 0.06) 1px, transparent 0)',
              backgroundSize: '20px 20px',
            }}
          />
          <div className="absolute top-[-8%] right-[-6%] size-64 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute bottom-[-12%] left-[-8%] size-56 rounded-full bg-complementary-200/35 blur-3xl" />
        </div>
        <div className="relative mx-auto grid max-w-6xl gap-10 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.85fr)] md:items-center">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Mentoria VagasUX
            </p>
            <h1 className="mt-4 max-w-3xl text-4xl font-black tracking-[-0.05em] text-neutral-500 md:text-6xl">
              Que tal um papinho?
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-neutral-400 md:text-lg">
              Uma conversa individual com pessoas voluntárias da VagasUX para
              tirar dúvidas, trocar experiências e refletir sobre seu próximo
              passo em design.
            </p>
            <Button variant="guia" asChild className="mt-8">
              <a href="#como-funciona">
                Entenda como funciona
                <ChatCircleDots weight="bold" aria-hidden />
              </a>
            </Button>
          </div>
          <img
            src={learningIllustration}
            alt="Pessoa aprendendo com referências de ferramentas de design"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </section>

      <section id="como-funciona" className="scroll-mt-24 px-5 pt-16 pb-8 md:px-6 md:pt-24 md:pb-12">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
              Como participar
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Três passos para marcar sua conversa
            </h2>
          </div>
          <ol className="mt-10 grid gap-4 lg:grid-cols-3">
            {steps.map(({ number, title, description, detail, Icon }) => (
              <li key={number} className="rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-black text-brand-400">{number}</span>
                  <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-100 text-brand-500">
                    <Icon size={21} weight="bold" aria-hidden />
                  </span>
                </div>
                <h3 className="mt-8 text-xl font-black tracking-[-0.025em] text-neutral-500">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-neutral-400">{description}</p>
                <p className="mt-4 border-t border-neutral-500/10 pt-4 text-sm font-semibold leading-relaxed text-neutral-500">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-complementary-200/70 bg-complementary-100/50 px-5 py-8 md:px-6">
        <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
          {[
            'Compareça no horário combinado. Se precisar remarcar, avise com pelo menos 48 horas de antecedência.',
            'Reserve um local silencioso para aproveitar a conversa com foco e tranquilidade.',
            'Cada encontro dura 40 minutos e pode ser estendido conforme a disponibilidade da pessoa mentora.',
          ].map((note) => (
            <p key={note} className="flex gap-3 text-sm leading-relaxed text-neutral-500">
              <CheckCircle size={20} weight="fill" className="mt-0.5 shrink-0 text-complementary-300" aria-hidden />
              {note}
            </p>
          ))}
        </div>
      </section>

      <section className="px-5 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <div className="flex items-baseline gap-4">
              <p className="text-2xl font-black tracking-[-0.02em] text-brand-500">01</p>
              <p className="text-lg font-black tracking-[-0.02em] text-neutral-500">Mentores disponíveis</p>
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Escolha uma pessoa mentora
            </h2>
          </div>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {mentors.map((mentor) => (
              <li key={mentor.id} className="overflow-hidden rounded-3xl border border-neutral-500/10 bg-neutral-100">
                <button type="button" onClick={() => setSelectedMentor(mentor)} className="flex w-full gap-4 p-5 text-left transition-colors hover:bg-brand-100/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-400" aria-label={`Ver detalhes de ${mentor.name}`}>
                  {mentor.photo ? <img src={mentor.photo} alt="" className="size-16 rounded-2xl object-cover" style={{ objectPosition: mentor.photoFocus }} /> : <span className="flex size-16 items-center justify-center rounded-2xl bg-brand-100 text-3xl">{mentor.emoji}</span>}
                  <div className="min-w-0">
                    <h3 className="font-black tracking-[-0.02em] text-neutral-500">{mentor.name}</h3>
                    <p className={`mt-1 text-sm font-bold ${mentor.available ? 'text-emerald-700' : 'text-neutral-400'}`}>{mentor.status}</p>
                    <p className="mt-3 text-sm font-bold text-brand-500">Ver detalhes</p>
                  </div>
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-12 max-w-2xl">
            <div className="flex items-baseline gap-4">
              <p className="text-2xl font-black tracking-[-0.02em] text-brand-500">02</p>
              <p className="text-lg font-black tracking-[-0.02em] text-neutral-500">Comprovante</p>
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Faça sua contribuição
            </h2>
          </div>
          <div className="mt-8 flex flex-col items-start justify-between gap-4 rounded-3xl border border-brand-200/70 bg-brand-100/45 p-6 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm leading-relaxed text-neutral-400">
                Faça uma contribuição de R$ 15 e guarde seu comprovante.
              </p>
            </div>
            <Button variant="guia" asChild>
              <a href={mentoringPaymentUrl} target="_blank" rel="noopener noreferrer">
                Fazer contribuição
                <Heart weight="bold" aria-hidden />
              </a>
            </Button>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-neutral-400">
            Já faz parte da{' '}
            <Link to={routes.guilda} className="font-bold text-brand-500 hover:underline">
              Guilda do Vaguiner
            </Link>
            ? Membros tem desconto na mentoria 👀
          </p>
          <div className="mt-12 max-w-2xl">
            <div className="flex items-baseline gap-4">
              <p className="text-2xl font-black tracking-[-0.02em] text-brand-500">03</p>
              <p className="text-lg font-black tracking-[-0.02em] text-neutral-500">Formulário</p>
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.04em] text-neutral-500 md:text-5xl">
              Envie seu pedido de mentoria
            </h2>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <article className="flex min-h-full flex-col rounded-3xl border border-complementary-300/70 bg-gradient-to-b from-complementary-100 via-complementary-100/80 to-brand-100/40 p-6 shadow-[0_24px_60px_-28px_rgb(7_0_58_/_0.35)] ring-1 ring-complementary-300/40 md:p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-complementary-300 text-neutral-500">
                <ClipboardText size={22} weight="bold" aria-hidden />
              </span>
              <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] text-neutral-500">
                Já fez o pagamento?
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                Agora é só enviar sua solicitação! Preencha o formulário, escolha a pessoa mentora que deseja e envie seu comprovante de pagamento. Depois, entre em contato com a pessoa mentora e aguarde o retorno para combinar a agenda.
              </p>
              <Button asChild size="lg" className="mt-8 h-11 w-full rounded-xl bg-complementary-300 font-bold text-neutral-500 hover:bg-complementary-200">
                <Link to={routes.mentorado}>
                  Enviar solicitação
                  <ArrowUpRight weight="bold" aria-hidden />
                </Link>
              </Button>
            </article>
            <article className="flex min-h-full flex-col rounded-3xl border border-neutral-500/10 bg-neutral-100 p-6 md:p-7">
              <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-brand-100 text-brand-500">
                <ChatCircleDots size={22} weight="bold" aria-hidden />
              </span>
              <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] text-neutral-500">
                Quer fazer parte da mentoria?
              </h2>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-neutral-400">
                Conte um pouco sobre você, suas experiências e os temas em que pode contribuir. Vamos conhecer seu perfil e, quem sabe, ter você com a gente!
              </p>
              <Button variant="outline" asChild size="lg" className="mt-8 h-11 w-full rounded-xl border-neutral-500/15 font-bold">
                <Link to={routes.pessoaMentora}>
                  Quero ser pessoa mentora
                  <ArrowUpRight weight="bold" aria-hidden />
                </Link>
              </Button>
            </article>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-6 md:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-neutral-500 px-7 py-8 text-neutral-100 md:flex-row md:items-center md:px-10">
          <div>
            <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-500">
              <Umbrella size={22} weight="bold" aria-hidden />
            </span>
            <p className="mt-5 text-xs font-bold tracking-[0.2em] text-complementary-300 uppercase">
              Comunidade exclusiva
            </p>
            <p className="mt-2 text-2xl font-black tracking-[-0.035em]">
              Conheça a Guilda do Vaguiner
            </p>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-100/80">
              Participe de encontros em grupo, desafios e trocas com a comunidade. Membros da Guilda tem acesso a desconto nas mentorias.
            </p>
          </div>
          <Button asChild className="h-11 rounded-xl bg-complementary-300 px-5 font-black text-neutral-500 hover:bg-complementary-200">
            <Link to={routes.guilda}>
              Vem pra Guilda <ArrowUpRight className="ml-1 size-4" aria-hidden />
            </Link>
          </Button>
        </div>
      </section>
      <MentorProfileDialog
        mentor={selectedMentor}
        open={selectedMentor !== null}
        onOpenChange={(open) => {
          if (!open) setSelectedMentor(null)
        }}
      />
    </main>
  )
}
