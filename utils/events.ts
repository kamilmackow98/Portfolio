import { Event } from '@components/pages/about/Event'
import events from '@data/json/events.json'

export const getEvents = (): Event[] => {
  return events
}
