import { CheckCircle } from '@phosphor-icons/react'
import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export type AvailableMentor = {
  id: string
  name: string
}

const areas = [
  'UX/UI',
  'Product Design',
  'UX Research',
  'Service Design',
  'Conteúdo/UX Writing',
  'Outro',
] as const

const topics = [
  'Carreira',
  'Portfólio',
  'Processo seletivo',
  'Produto',
  'Pesquisa',
  'UI/Design System',
  'Outro',
] as const

const availabilityOptions = [
  'Manhã',
  'Tarde',
  'Noite',
  'Fim de semana',
  'Flexível',
] as const

export function MentorshipRequestForm({ mentors }: { mentors: AvailableMentor[] }) {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const proof = data.get('proof')
    const nextErrors: Record<string, string> = {}

    for (const field of ['mentorId', 'name', 'contact', 'linkedin', 'area', 'experience', 'availability', 'motivation', 'need']) {
      if (!String(data.get(field) ?? '').trim()) nextErrors[field] = 'Este campo é obrigatório.'
    }
    if (data.getAll('topics').length === 0) nextErrors.topics = 'Selecione pelo menos um tema.'
    if (!(proof instanceof File) || proof.size === 0) nextErrors.proof = 'Envie o comprovante da contribuição.'
    if (proof instanceof File && proof.size > 5 * 1024 * 1024) nextErrors.proof = 'O comprovante deve ter no máximo 5 MB.'
    if (proof instanceof File && !['image/jpeg', 'image/png', 'image/webp', 'application/pdf'].includes(proof.type)) {
      nextErrors.proof = 'Envie uma imagem JPG, PNG, WebP ou um PDF.'
    }
    if (data.get('consent') !== 'on') nextErrors.consent = 'Você precisa concordar com os Termos e Políticas.'

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setState('sending')
    try {
      const proofFile = proof as File
      const proofData = await fileToBase64(proofFile)
      const response = await fetch('/api/mentorship-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mentorId: data.get('mentorId'),
          name: data.get('name'),
          contact: data.get('contact'),
          linkedin: data.get('linkedin'),
          area: data.get('area'),
          experience: data.get('experience'),
          topics: data.getAll('topics'),
          availability: data.get('availability'),
          motivation: data.get('motivation'),
          need: data.get('need'),
          proof: {
            name: proofFile.name,
            type: proofFile.type,
            data: proofData,
          },
        }),
      })
      if (!response.ok) throw new Error('Request failed')
      setState('success')
    } catch {
      setState('error')
    }
  }

  if (state === 'success') {
    return (
      <div className="rounded-3xl border border-brand-200/50 bg-brand-100/35 p-8">
        <CheckCircle size={36} weight="duotone" className="text-brand-400" aria-hidden />
        <h2 className="mt-4 text-2xl font-black tracking-[-0.04em] text-neutral-500">Solicitação recebida</h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-400">
          Obrigada! Vamos revisar sua solicitação e o comprovante antes de confirmar a mentoria.
        </p>
      </div>
    )
  }

  return (
    <form className="mt-7 grid gap-5" onSubmit={handleSubmit} noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <Field label="Com quem você quer conversar?" error={errors.mentorId}>
          <select name="mentorId" className={fieldClass(Boolean(errors.mentorId))} defaultValue="">
            <option value="">Selecione uma pessoa mentora</option>
            {mentors.map((mentor) => <option key={mentor.id} value={mentor.id}>{mentor.name}</option>)}
          </select>
        </Field>
        <Field label="Como podemos falar com você?" hint="e-mail, WhatsApp ou Telegram" error={errors.contact}>
          <Input name="contact" aria-invalid={Boolean(errors.contact)} className={inputClass(Boolean(errors.contact))} />
        </Field>
        <Field label="Seu nome" error={errors.name}>
          <Input name="name" aria-invalid={Boolean(errors.name)} className={inputClass(Boolean(errors.name))} />
        </Field>
        <Field label="LinkedIn" error={errors.linkedin}>
          <Input name="linkedin" type="url" placeholder="https://linkedin.com/in/..." aria-invalid={Boolean(errors.linkedin)} className={inputClass(Boolean(errors.linkedin))} />
        </Field>
        <Field label="Área" error={errors.area}>
          <select name="area" className={fieldClass(Boolean(errors.area))} defaultValue="">
            <option value="">Selecione</option>
            {areas.map((area) => <option key={area}>{area}</option>)}
          </select>
        </Field>
        <Field label="Disponibilidade" error={errors.availability}>
          <select name="availability" className={fieldClass(Boolean(errors.availability))} defaultValue="">
            <option value="">Selecione</option>
            {availabilityOptions.map((option) => <option key={option}>{option}</option>)}
          </select>
        </Field>
      </div>

      <Field label="Sua experiência hoje" hint="nível, trajetória ou contexto" error={errors.experience}>
        <Textarea name="experience" rows={3} aria-invalid={Boolean(errors.experience)} className={inputClass(Boolean(errors.experience))} />
      </Field>

      <fieldset>
        <legend className="text-sm font-bold text-neutral-500">Temas para a conversa <b className="text-brand-500">*</b></legend>
        <div className="mt-3 flex flex-wrap gap-2">
          {topics.map((topic) => (
            <label key={topic} className="cursor-pointer rounded-full border border-neutral-500/15 bg-neutral-100 px-3 py-1.5 text-sm font-semibold text-neutral-500 has-[:checked]:border-brand-400 has-[:checked]:bg-brand-100">
              <input name="topics" type="checkbox" value={topic} className="sr-only" />
              {topic}
            </label>
          ))}
        </div>
        <FieldError message={errors.topics} />
      </fieldset>

      <Field label="Por que você quer esta mentoria?" error={errors.motivation}>
        <Textarea name="motivation" rows={3} aria-invalid={Boolean(errors.motivation)} className={inputClass(Boolean(errors.motivation))} />
      </Field>
      <Field label="O que você gostaria de conversar?" hint="quanto mais contexto, melhor" error={errors.need}>
        <Textarea name="need" rows={5} aria-invalid={Boolean(errors.need)} className={inputClass(Boolean(errors.need))} />
      </Field>
      <Field label="Comprovante da contribuição" hint="JPG, PNG, WebP ou PDF · até 5 MB" error={errors.proof}>
        <Input name="proof" type="file" accept="image/jpeg,image/png,image/webp,application/pdf" aria-invalid={Boolean(errors.proof)} className={inputClass(Boolean(errors.proof))} />
      </Field>

      <label className="flex gap-3 text-sm leading-relaxed text-neutral-500">
        <input name="consent" type="checkbox" className="mt-1" />
        <span>Li e concordo com os Termos e Políticas. <b className="text-brand-500">*</b></span>
      </label>
      <FieldError message={errors.consent} />
      {state === 'error' ? <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">Não foi possível enviar agora. Tente novamente em alguns minutos.</p> : null}
      <Button type="submit" variant="guia" disabled={state === 'sending'}>{state === 'sending' ? 'Enviando...' : 'Enviar solicitação'}</Button>
    </form>
  )
}

function Field({ label, hint, error, children }: { label: string; hint?: string; error?: string; children: ReactNode }) {
  return <label className="grid gap-2 text-sm font-bold text-neutral-500"><span>{label} <b className="text-brand-500">*</b> {hint ? <span className="font-normal text-neutral-400">({hint})</span> : null}</span>{children}<FieldError message={error} /></label>
}

function FieldError({ message }: { message?: string }) {
  return <span role={message ? 'alert' : undefined} className="block min-h-5 text-xs font-semibold text-red-700">{message}</span>
}

function inputClass(invalid: boolean) {
  return `bg-neutral-100 ${invalid ? 'border-red-600' : ''}`
}

function fieldClass(invalid: boolean) {
  return `h-10 rounded-xl border border-neutral-500/15 bg-neutral-100 px-3 py-2.5 font-normal ${invalid ? 'border-red-600' : ''}`
}

function fileToBase64(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result).split(',')[1] ?? '')
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}
