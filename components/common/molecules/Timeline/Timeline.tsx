import Event, { Event as EventType } from '@atoms/Timeline/Event'
import clsx from 'clsx'
import { useState } from 'react'
import styles from './Timeline.module.css'

interface Props {
  events: EventType[]
}

const Timeline = (props: Props) => {
  const { events } = props
  const [currentEventIdx, setCurrentEventIdx] = useState<number>(0)
  const [activeDateTopDistance, setActiveDateTopDistance] = useState<number>(0)

  const handleClickDate = (idx: number) => {
    setCurrentEventIdx(idx)
    setActiveDateTopDistance(idx * 3)
  }

  const renderDates = events.map((event, idx) => (
    <button
      onClick={() => handleClickDate(idx)}
      className={clsx(
        styles['event-date'],
        'peer peer-first:mt-6',
        'theme-font--heading',
        'whitespace-nowrap',
        'tracking-wide',
        'text-right',
        idx === currentEventIdx ? 'text-white' : 'text-default',
      )}
      key={event.id}
      type="button"
    >
      {event.eventDate}
    </button>
  ))

  const renderCurrentEvent = <Event {...events[currentEventIdx]} />

  return (
    <div
      className={clsx(styles.container, 'flex', 'xl:pl-8 2xl:pl-12')}
      id="timeline-wrapper"
    >
      <div
        className={clsx(
          styles['dates-container'],
          'flex flex-col',
          'py-8 pl-8 pr-12',
        )}
      >
        {renderDates}
        <span
          className={styles['active-event']}
          style={{
            transform: `translate3d(0, ${activeDateTopDistance}rem, 0)`,
          }}
        />
      </div>
      <div className="pl-12">{renderCurrentEvent}</div>
    </div>
  )
}

export default Timeline
