import Event, { Event as EventType } from '@atoms/Timeline/Event'
import classNames from 'classnames'
import styles from './Timeline.module.css'

interface Props {
  events: EventType[]
}

const containerClasses = classNames(styles.container, 'mt-8 py-12 space-y-12')

const Timeline = (props: Props) => {
  const { events } = props

  const renderEvents = events.map((event) => (
    <Event key={event.id} {...event} />
  ))

  return (
    <div id="timeline-wrapper" className={containerClasses}>
      {renderEvents}
    </div>
  )
}

export default Timeline
