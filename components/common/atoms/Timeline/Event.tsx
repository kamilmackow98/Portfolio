import clsx from 'clsx'
import { Fragment } from 'react'
import styles from './Event.module.css'

export type Event = {
  id: string
  title: string
  description: string[]
  dates: string[]
}

interface Props extends Event {}

const Event = (props: Props) => {
  const { title, description, dates } = props

  const renderDates = dates.map((date, i) => (
    <Fragment key={i}>
      <span>{date.replaceAll('/', ` ${String.fromCharCode(8226)} `)}</span>
      {i < dates.length - 1 ? <span className="mx-2">-</span> : null}
    </Fragment>
  ))

  return (
    <div
      className={clsx(
        styles.wrapper,
        'grid lg:grid-cols-2 lg:gap-28',
        'items-center lg:justify-center',
      )}
    >
      <span
        className={clsx(
          'theme-font--heading font-normal',
          'tracking-wide text-white',
          'pl-6 lg:pl-0',
        )}
      >
        {renderDates}
      </span>
      <div
        className={clsx(
          styles.memento,
          'mt-2 px-6 py-4 lg:mt-0 lg:px-8 lg:py-5',
          'max-w-[420px] rounded',
        )}
      >
        <div
          className={clsx(
            'theme-font--heading font-semibold',
            'leading-snug tracking-wide text-white',
            'mb-2',
          )}
        >
          {title}
        </div>
        {description.map((desc, i) => (
          <div className="theme-font--reading font-medium" key={i}>
            {desc}
          </div>
        ))}
      </div>
      <span className={styles.separator} />
    </div>
  )
}

export default Event
