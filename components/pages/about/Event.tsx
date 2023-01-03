import { eventItemMotion, eventMotion } from '@utils/motionVariants'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import { ComponentPropsWithoutRef, Fragment } from 'react'

export type Event = {
  id: string
  title: string
  description: string[]
  dates: string[]
  eventDate: string
}

type Props = {} & Event & ComponentPropsWithoutRef<'div'>

const Event = (props: Props) => {
  const { title, className, description, dates } = props

  const renderDates = dates.map((date, i) => (
    <Fragment key={i}>
      <span>{date.replaceAll('/', ` ${String.fromCharCode(8901)} `)}</span>
      {i < dates.length - 1 ? <span className="mx-2">-</span> : null}
    </Fragment>
  ))

  return (
    <motion.div
      className={className}
      variants={eventMotion}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div
        variants={eventItemMotion}
        className={clsx(
          'theme-font--heading font-light',
          'font-text--md tracking-wider',
          'text-primary',
        )}
      >
        {renderDates}
      </motion.div>
      <motion.div
        variants={eventItemMotion}
        className={clsx(
          'theme-font--heading font-text--xl font-bold',
          'leading-snug tracking-wider text-white',
          'mt-1',
        )}
      >
        {title}
      </motion.div>
      <motion.div
        className="mt-1.5 min-h-[150px] text-justify sm:min-h-0"
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
