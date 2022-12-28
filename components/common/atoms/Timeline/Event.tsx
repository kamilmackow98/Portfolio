import clsx from 'clsx'
import { Fragment } from 'react'
import { motion } from 'framer-motion'
import { eventItemMotion, eventMotion } from '@utils/motionVariants'

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
      {i < dates.length - 1 ? <span className="mx-2">-</span> : null}
    </Fragment>
  ))

  return (
    <motion.div
      className={clsx('flex flex-col', 'pt-8')}
      variants={eventMotion}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.span
        variants={eventItemMotion}
        className={clsx(
          'theme-font--heading font-light',
          'font-text--md tracking-wider',
          'text-primary',
        )}
      >
        {renderDates}
      </motion.span>
      <motion.div
        variants={eventItemMotion}
        className={clsx(
          'theme-font--heading font-text--xl font-bold',
          'leading-snug tracking-wide text-white',
          'mt-1',
        )}
      >
        {title}
      </motion.div>
      <motion.div
        className="mt-1 min-h-[150px] sm:min-h-0 text-justify"
        variants={eventItemMotion}
      >
        {description.map((desc, i) => (
          <div className="theme-font--reading font-medium" key={i}>
            {desc}
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Event
