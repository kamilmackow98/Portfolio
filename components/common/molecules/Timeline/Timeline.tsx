import Event, { Event as EventType } from '@atoms/Timeline/Event'
import clsx from 'clsx'
import styles from './Timeline.module.css'

interface Props {
  events: EventType[]
}

const Timeline = (props: Props) => {
  const { events } = props

  const renderEvents = events.map((event) => (
    <Event key={event.id} {...event} />
  ))

  return (
    <div
      className={clsx(styles.container, 'mt-8 space-y-12 py-12')}
      id="timeline-wrapper"
    >
      {renderEvents}
    </div>
  )
}

export default Timeline
