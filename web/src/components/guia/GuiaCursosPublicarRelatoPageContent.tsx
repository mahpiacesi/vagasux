import { CheckCircle, MagnifyingGlass } from '@phosphor-icons/react'
import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { GuiaBackToGuiaLink } from '@/components/guia/GuiaBackToGuiaLink'
import { GuiaFaqLink } from '@/components/guia/GuiaFaqLink'
import { Button } from '@/components/ui/button'
import {
  guiaCursosPublicarRelato,
} from '@/data/guiaCursosCopy'
import { guiaCursos, type GuiaCurso } from '@/data/guiaCursos'
import { guiaRoutes } from '@/lib/guiaRoutes'
import { routes } from '@/lib/siteLinks'

export function GuiaCursosPublicarRelatoPageContent() {
  const [courseQuery, setCourseQuery] = useState('')
  const [selectedCourse, setSelectedCourse] = useState<GuiaCurso | null>(null)
  const [isNewCourse, setIsNewCourse] = useState(false)
  const [submissionState, setSubmissionState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})
  const matchingCourses = useMemo(() => {
    const query = courseQuery.trim().toLocaleLowerCase('pt-BR')
    return query.length < 2 ? [] : guiaCursos
      .filter((course) => course.title.toLocaleLowerCase('pt-BR').includes(query))
      .slice(0, 6)
  }, [courseQuery])

  function selectCourse(course: GuiaCurso) {
    setSelectedCourse(course)
    setCourseQuery(course.title)
    setIsNewCourse(false)
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)

    const requiredFields = [
      ['firstName', 'primeiro nome'],
      ['email', 'e-mail'],
      ['linkedin', 'LinkedIn'],
      ['completedYear', 'ano de término'],
      ['modality', 'modalidade'],
      ['feedback', 'relato'],
    ] as const
    const errors: Record<string, string> = {}
    if (!selectedCourse && !isNewCourse) errors.course = 'Selecione um curso da lista ou informe que ele ainda não está no diretório.'
    requiredFields.forEach(([field, label]) => {
      if (!String(formData.get(field) ?? '').trim()) errors[field] = `Informe ${label}.`
    })
    if (isNewCourse) {
      if (!String(formData.get('schoolName') ?? '').trim()) errors.schoolName = 'Informe a escola ou plataforma.'
      if (!String(formData.get('suggestedCourseName') ?? '').trim()) errors.suggestedCourseName = 'Informe o nome do curso.'
      if (!String(formData.get('officialUrl') ?? '').trim()) errors.officialUrl = 'Informe o link oficial.'
    }
    if (formData.get('consent') !== 'on') errors.consent = 'Você precisa concordar com os Termos e Políticas.'
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setErrorMessage('Confira os campos destacados antes de enviar.')
      return
    }

    setSubmissionState('sending')
    setErrorMessage('')
    setFieldErrors({})

    const response = await fetch('/api/course-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        courseId: selectedCourse?.id ?? null,
        courseName: selectedCourse?.title ?? formData.get('suggestedCourseName'),
        isNewCourse,
        schoolName: formData.get('schoolName'),
        officialUrl: formData.get('officialUrl'),
        firstName: formData.get('firstName'),
        email: formData.get('email'),
        linkedin: formData.get('linkedin'),
        completedYear: formData.get('completedYear'),
        investment: formData.get('investment'),
        modality: formData.get('modality'),
        positives: formData.get('positives'),
        improvements: formData.get('improvements'),
        feedback: formData.get('feedback'),
        consent: formData.get('consent') === 'on',
      }),
    })

    if (response.ok) {
      setSubmissionState('success')
      return
    }

    setSubmissionState('error')
    setErrorMessage('Não foi possível enviar seu relato agora. Tente novamente em alguns minutos.')
  }

  if (submissionState === 'success') {
    return <div className="mt-8 w-full"><GuiaBackToGuiaLink section="cursos" /><section className="mt-8 max-w-3xl rounded-3xl border border-brand-200/50 bg-brand-100/35 p-8"><CheckCircle size={36} weight="duotone" className="text-brand-400" aria-hidden /><h1 className="mt-4 text-3xl font-black tracking-[-0.04em] text-neutral-500">Relato recebido</h1><p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-400">Obrigada por compartilhar sua experiência. Ela ficará em revisão antes de aparecer na VagasUX.</p><Button asChild variant="guia" className="mt-6"><Link to={guiaRoutes.cursos}>Voltar para cursos</Link></Button></section></div>
  }

  return (
    <div className="mt-8 w-full">
      <div className="flex flex-wrap items-center gap-3">
        <GuiaBackToGuiaLink section="cursos" />
        <GuiaFaqLink />
      </div>

      <header className="mt-8 max-w-3xl">
        <p className="text-xs font-bold tracking-[0.2em] text-brand-400 uppercase">
          Contribua com a comunidade
        </p>
        <h1 className="mt-3 text-3xl leading-[1.06] font-black tracking-[-0.04em] text-neutral-500 md:text-4xl">
          {guiaCursosPublicarRelato.title}
        </h1>
        <p className="mt-4 text-base leading-relaxed text-neutral-400 md:text-lg">
          {guiaCursosPublicarRelato.lead}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-neutral-400">
          {guiaCursosPublicarRelato.intro}
        </p>
      </header>

      <ul className="mt-10 grid gap-4 md:grid-cols-3">
        {guiaCursosPublicarRelato.steps.map((step, index) => (
          <li
            key={step.title}
            className="rounded-2xl border border-neutral-500/10 bg-brand-100/25 p-5"
          >
            <span className="text-xs font-black tracking-wide text-brand-400 uppercase">
              Passo {index + 1}
            </span>
            <h2 className="mt-2 text-base font-black text-neutral-500">{step.title}</h2>
            <p className="mt-2 text-sm leading-relaxed text-neutral-400">
              {step.description}
            </p>
          </li>
        ))}
      </ul>

      <section className="mt-10 rounded-3xl border border-brand-200/40 bg-brand-100/30 p-6 md:p-8">
        <h2 className="text-xl font-black text-neutral-500">Submeta seu relato</h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-neutral-400">
          Preencha o formulário com o máximo de detalhes possível. Ao enviar, você
          concorda com nossos{' '}
          <Link to={routes.termosEPoliticas} className="font-bold text-brand-500 hover:underline">
            Termos e Políticas
          </Link>
          .
        </p>

        <form className="mt-7 grid gap-6" onSubmit={handleSubmit} noValidate>
          <fieldset>
            <legend className="text-sm font-black text-neutral-500">Qual curso você fez? <span className="text-brand-500">*</span></legend>
            <label className="relative mt-3 block"><MagnifyingGlass className="pointer-events-none absolute top-1/2 left-4 size-4 -translate-y-1/2 text-neutral-400" aria-hidden /><input value={courseQuery} onChange={(event) => { setCourseQuery(event.target.value); setSelectedCourse(null); setIsNewCourse(false) }} placeholder="Busque pelo nome do curso ou escola" className="w-full rounded-xl border border-neutral-500/15 bg-neutral-100 py-3 pr-4 pl-10 text-sm text-neutral-500 outline-none focus:border-brand-300" /></label>
            {matchingCourses.length > 0 && !selectedCourse ? <ul className="mt-2 overflow-hidden rounded-xl border border-neutral-500/10 bg-neutral-100">{matchingCourses.map((course) => <li key={course.id}><button type="button" onClick={() => selectCourse(course)} className="w-full px-4 py-3 text-left text-sm font-semibold text-neutral-500 hover:bg-brand-100/50">{course.title}</button></li>)}</ul> : null}
            {selectedCourse ? <p className="mt-3 text-sm font-bold text-brand-500">Curso selecionado: {selectedCourse.title}</p> : null}
            <label className="mt-4 flex items-center gap-2 text-sm font-semibold text-neutral-500"><input type="checkbox" checked={isNewCourse} onChange={(event) => { setIsNewCourse(event.target.checked); if (event.target.checked) setSelectedCourse(null) }} /> Não encontrei meu curso no diretório</label>
            <FieldError message={fieldErrors.course} />
          </fieldset>

          {isNewCourse ? <div className="grid gap-4 rounded-2xl border border-brand-200/40 bg-neutral-100/70 p-5 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold text-neutral-500">Nome da escola ou plataforma<input name="schoolName" required className="rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal" /></label><label className="grid gap-2 text-sm font-bold text-neutral-500">Nome do curso<input name="suggestedCourseName" required className="rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal" /></label><label className="grid gap-2 text-sm font-bold text-neutral-500 sm:col-span-2">Link oficial do curso<input name="officialUrl" type="url" required className="rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal" /></label></div> : null}

          <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold text-neutral-500"><span>Seu primeiro nome <b className="text-brand-500">*</b></span><input name="firstName" required maxLength={60} aria-invalid={Boolean(fieldErrors.firstName)} className="rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal aria-[invalid=true]:border-red-600" /><FieldError message={fieldErrors.firstName} /></label><label className="grid gap-2 text-sm font-bold text-neutral-500"><span className="inline-flex items-center gap-1.5">E-mail <span className="font-normal text-neutral-400">(privado) <b className="text-brand-500">*</b></span></span><input name="email" type="email" required aria-invalid={Boolean(fieldErrors.email)} className="rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal aria-[invalid=true]:border-red-600" /><FieldError message={fieldErrors.email} /></label><label className="grid gap-2 text-sm font-bold text-neutral-500"><span className="inline-flex items-center gap-1.5">LinkedIn <span className="font-normal text-neutral-400">(privado) <b className="text-brand-500">*</b></span></span><input name="linkedin" type="url" required aria-invalid={Boolean(fieldErrors.linkedin)} className="rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal aria-[invalid=true]:border-red-600" /><FieldError message={fieldErrors.linkedin} /></label><label className="grid gap-2 text-sm font-bold text-neutral-500"><span>Ano de término <b className="text-brand-500">*</b></span><input name="completedYear" type="number" min="1990" max="2100" required aria-invalid={Boolean(fieldErrors.completedYear)} className="rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal aria-[invalid=true]:border-red-600" /><FieldError message={fieldErrors.completedYear} /></label></div>
          <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold text-neutral-500"><span className="inline-flex items-center gap-1.5">Valor investido <span className="font-normal text-neutral-400">(opcional)</span></span><input name="investment" className="rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal" placeholder="Ex.: R$ 1.500" /></label><label className="grid gap-2 text-sm font-bold text-neutral-500"><span>Modalidade <b className="text-brand-500">*</b></span><select name="modality" required aria-invalid={Boolean(fieldErrors.modality)} className="rounded-xl border border-neutral-500/15 bg-neutral-100 px-3 py-2.5 font-normal aria-[invalid=true]:border-red-600"><option value="">Selecione</option><option>Online</option><option>Presencial</option><option>Híbrido</option></select><FieldError message={fieldErrors.modality} /></label></div>
          <label className="grid gap-2 text-sm font-bold text-neutral-500"><span>Seu relato <b className="text-brand-500">*</b></span><textarea name="feedback" required rows={8} minLength={80} aria-invalid={Boolean(fieldErrors.feedback)} className="resize-y rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal aria-[invalid=true]:border-red-600" placeholder="Conte como foi sua experiência, o que funcionou e o que não funcionou para você." /><FieldError message={fieldErrors.feedback} /></label>
          <div className="grid gap-4 sm:grid-cols-2"><label className="grid gap-2 text-sm font-bold text-neutral-500"><span className="inline-flex items-center gap-1.5">Pontos positivos <span className="font-normal text-neutral-400">(opcional)</span></span><textarea name="positives" rows={4} className="resize-y rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal" /></label><label className="grid gap-2 text-sm font-bold text-neutral-500"><span className="inline-flex items-center gap-1.5">O que poderia melhorar <span className="font-normal text-neutral-400">(opcional)</span></span><textarea name="improvements" rows={4} className="resize-y rounded-xl border border-neutral-500/15 px-3 py-2.5 font-normal" /></label></div>
          <div><label className="flex gap-3 text-sm leading-relaxed text-neutral-500"><input name="consent" type="checkbox" required className="mt-1" aria-invalid={Boolean(fieldErrors.consent)} /><span>Li e concordo com os <Link to={routes.termosEPoliticas} className="font-bold text-brand-500 hover:underline">Termos e Políticas</Link>. Autorizo a publicação do relato com meu primeiro nome. <b className="text-brand-500">*</b></span></label><FieldError message={fieldErrors.consent} /></div>
          {errorMessage ? <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{errorMessage}</p> : null}
          <div><Button type="submit" variant="guia" disabled={submissionState === 'sending'}>{submissionState === 'sending' ? 'Enviando...' : 'Enviar relato'}</Button></div>
        </form>
      </section>

      <section className="mt-10">
        <h2 className="text-sm font-black tracking-wide text-neutral-500 uppercase">
          Sugestões do que abordar no relato
        </h2>
        <ul className="mt-4 grid gap-2 sm:grid-cols-2">
          {guiaCursosPublicarRelato.suggestions.map((item) => (
            <li
              key={item}
              className="rounded-xl border border-neutral-500/10 bg-neutral-100/80 px-4 py-3 text-sm text-neutral-500"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}

function FieldError({ message }: { message?: string }) {
  return message ? <span role="alert" className="mt-1 block text-xs font-semibold text-red-700">{message}</span> : null
}
