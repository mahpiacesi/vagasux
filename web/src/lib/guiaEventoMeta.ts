import {
  CalendarBlank,
  Code,
  MicrophoneStage,
  UsersThree,
  type Icon,
} from '@phosphor-icons/react'
import type { GuiaEvento, GuiaEventoType } from '@/data/guiaEventos'

export function eventTypeLabel(eventType: GuiaEventoType | string): string {
  return eventType
}

export function eventTypeEmoji(eventType: GuiaEventoType | string): string {
  switch (eventType) {
    case 'Hackathon':
      return '💻'
    case 'Meetup':
      return '👩🏻‍💻'
    case 'Conferência':
      return '🎤'
    default:
      return '📅'
  }
}

export function eventTypeIcon(eventType: GuiaEventoType | string): Icon {
  switch (eventType) {
    case 'Hackathon':
      return Code
    case 'Meetup':
      return UsersThree
    case 'Conferência':
      return MicrophoneStage
    default:
      return CalendarBlank
  }
}

export function eventLocationLabel(location: GuiaEvento['location']): string {
  return location
}

export function eventCostLabel(cost: GuiaEvento['cost']): string {
  return cost
}

export function eventMetaLine(evento: GuiaEvento): string {
  return [evento.location, evento.cost].filter(Boolean).join(' · ')
}
