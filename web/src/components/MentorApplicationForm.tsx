import { CheckCircle } from '@phosphor-icons/react'
import { useState, type FormEvent, type ReactNode } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const areas = ['Product Design', 'UX Research', 'UI / Visual Design', 'Design Ops', 'Service Design', 'Content Design', 'Outra']
const experience = ['Júnior', 'Pleno', 'Sênior', 'Lead/Staff', 'Head/Gerência']
const topics = ['Portfólio', 'Carreira / transição', 'Entrevistas', 'Produto', 'UX Research', 'UI / Design System', 'Design Ops', 'Liderança', 'Freela']
const availability = ['1x/mês', '2x/mês', 'Semanal', 'Quinzenal', 'A combinar']

export function MentorApplicationForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const [error, setError] = useState('')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    if (!data.get('name') || !data.get('linkedin') || !data.get('area') || !data.get('experience') || !data.get('motivation') || !data.getAll('topics').length || !data.getAll('availability').length) {
      setError('Preencha todos os campos obrigatórios.')
      return
    }
    setState('sending'); setError('')
    try {
      const response = await fetch('/api/mentor-application', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({
        name: data.get('name'), linkedin: data.get('linkedin'), area: data.get('area'), experience: data.get('experience'), motivation: data.get('motivation'), topics: data.getAll('topics'), availability: data.getAll('availability'),
      }) })
      if (!response.ok) throw new Error()
      setState('success')
    } catch { setState('error'); setError('Não foi possível enviar agora. Tente novamente em alguns minutos.') }
  }
  if (state === 'success') return <div className="mt-7 rounded-3xl border border-brand-200/50 bg-brand-100/35 p-8"><CheckCircle size={36} weight="duotone" className="text-brand-400" /><h3 className="mt-4 text-2xl font-black text-neutral-500">Candidatura recebida</h3><p className="mt-2 text-sm text-neutral-400">Obrigada por querer apoiar a comunidade. Vamos revisar sua candidatura e entrar em contato.</p></div>
  return <form className="mt-7 grid gap-5" onSubmit={submit} noValidate>
    <div className="grid gap-4 sm:grid-cols-2"><Label text="Seu nome"><Input name="name" required className="bg-neutral-100" /></Label><Label text="LinkedIn"><Input name="linkedin" type="url" required placeholder="https://linkedin.com/in/..." className="bg-neutral-100" /></Label><Label text="Área de atuação"><Select name="area" values={areas} /></Label><Label text="Nível de experiência"><Select name="experience" values={experience} /></Label></div>
    <Choices name="topics" title="Temas em que você pode ajudar" values={topics} />
    <Choices name="availability" title="Disponibilidade para mentorias" values={availability} />
    <Label text="Por que você quer ser mentor(a) na VagasUX?"><Textarea name="motivation" rows={5} required className="bg-neutral-100" /></Label>
    {error ? <p role="alert" className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-bold text-red-700">{error}</p> : null}
    <Button type="submit" variant="guia" disabled={state === 'sending'}>{state === 'sending' ? 'Enviando...' : 'Enviar candidatura'}</Button>
  </form>
}
function Label({ text, children }: { text: string; children: ReactNode }) { return <label className="grid gap-2 text-sm font-bold text-neutral-500"><span>{text} <b className="text-brand-500">*</b></span>{children}</label> }
function Select({ name, values }: { name: string; values: string[] }) { return <select name={name} required defaultValue="" className="h-10 rounded-xl border border-neutral-500/15 bg-neutral-100 px-3 py-2.5 font-normal"><option value="">Selecione</option>{values.map((value) => <option key={value}>{value}</option>)}</select> }
function Choices({ name, title, values }: { name: string; title: string; values: string[] }) { return <fieldset><legend className="text-sm font-bold text-neutral-500">{title} <b className="text-brand-500">*</b></legend><div className="mt-3 flex flex-wrap gap-2">{values.map((value) => <label key={value} className="cursor-pointer rounded-full border border-neutral-500/15 bg-neutral-100 px-3 py-1.5 text-sm font-semibold text-neutral-500 has-[:checked]:border-brand-400 has-[:checked]:bg-brand-100"><input name={name} type="checkbox" value={value} className="sr-only" />{value}</label>)}</div></fieldset> }
