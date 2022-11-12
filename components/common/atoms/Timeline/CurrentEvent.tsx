import { HTMLAttributes } from 'react'
import { Event } from './Event'
import styles from './CurrentEvent.module.css'
import clsx from 'clsx'

interface Props extends HTMLAttributes<HTMLDivElement> {
  event: Event
}

const CurrentEvent = (props: Props) => {
  const {
    event: { title, description, dates },
    className,
    ...rest
  } = props

  return (
    <div className={clsx(styles.wrapper, className)} {...rest}>
      <div
        className={clsx(
          'theme-font--heading font-text--lg font-semibold',
          'tracking-wide text-white',
          'mb-2',
        )}
      >
        {title}
      </div>
      <div className="theme-font--reading font-medium">{description}</div>
    </div>
  )
}

export default CurrentEvent
