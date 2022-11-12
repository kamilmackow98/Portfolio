import clsx from 'clsx'
import { Fragment } from 'react'
import styles from './Event.module.css'

export type Event = {
  id: string
  title: string
  description: string[]
  dates: string[]
}

const wrapperClasses = clsx(
  styles.wrapper,
  'grid lg:grid-cols-2 lg:justify-center items-center lg:gap-28',
)

const mementoClasses = clsx(
  styles.memento,
  'px-6 py-4 mt-2 lg:px-8 lg:py-5 lg:mt-0 rounded max-w-[420px]',
)

const separatorClasses = clsx(styles.separator)

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
    <div className={wrapperClasses}>
      <span className="text-white pl-6 lg:pl-0 theme-font--heading font-normal tracking-wide">
        {renderDates}
      </span>
      <div className={mementoClasses}>
        <h3 className="text-white theme-font--heading font-semibold font-text--lg tracking-wide mb-2 leading-snug">
          {title}
        </h3>
        {description.map((desc, i) => (
          <div className="theme-font--reading font-medium" key={i}>
            {desc}
          </div>
        ))}
      </div>
      <span className={separatorClasses} />
    </div>
  )
}

export default Event
