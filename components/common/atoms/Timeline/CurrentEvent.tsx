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

  const classes = clsx(styles.wrapper, className)

  return (
    <div className={classes} {...rest}>
      <div className="mb-2 text-white theme-font--heading font-semibold font-text--lg tracking-wide">
        {title}
      </div>
      <div className="theme-font--reading font-medium">{description}</div>
    </div>
  )
}

export default CurrentEvent
