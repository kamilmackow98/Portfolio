import clsx from 'clsx'
import { Fragment } from 'react'

export type Event = {
  id: string
  title: string
  description: string[]
  dates: string[]
  eventDate: string
}

interface Props extends Event {}

const Event = (props: Props) => {
  const { title, description, dates } = props

  const renderDates = dates.map((date, i) => (
    <Fragment key={i}>
      <span>{date.replaceAll('/', ` ${String.fromCharCode(8901)} `)}</span>
      {i < dates.length - 1 ? <span className="mx-2">&#8259;</span> : null}
    </Fragment>
  ))

  return (
    <div className={clsx('flex flex-col', 'pt-8')}>
      <span
        className={clsx(
          'theme-font--heading font-light',
          'tracking-wide',
          'text-primary',
        )}
      >
        {renderDates}
      </span>
      <div
        className={clsx(
          'theme-font--heading font-text--xl font-bold',
          'leading-snug tracking-wide text-white',
        )}
      >
        {title}
      </div>
      <div className="mt-2">
        {description.map((desc, i) => (
          <div className="theme-font--reading font-medium" key={i}>
            {desc}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Event
