import { eventItemMotion, eventMotion } from '@utils/motionVariants'
import { cx } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { Fragment } from 'react'

export type Event = {
  id: string
  title: string
  description: string[]
  dates: string[]
  eventDate: string
}

type Props = {} & Event & {
    className?: string
  }

const datesClasses = cx(
  'theme-font--heading font-light',
  'font-text--md tracking-wider',
  'text-primary',
)

const titleClasses = cx(
  'theme-font--heading font-text--xl font-bold',
  'leading-snug tracking-wider text-white',
  'mt-1',
)

const descWrapperClasses = cx(
  'min-h-[150px] sm:min-h-0',
  'text-justify',
  'mt-1.5',
)

const descContentClasses = cx('theme-font--reading font-medium leading-relaxed')

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
      <motion.div variants={eventItemMotion} className={datesClasses}>
        {renderDates}
      </motion.div>

      <motion.div variants={eventItemMotion} className={titleClasses}>
        {title}
      </motion.div>

      <motion.div variants={eventItemMotion} className={descWrapperClasses}>
        {description.map((desc, i) => (
          <div key={i} className={descContentClasses}>
            {desc}
          </div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Event
