import { pageMotion } from '@utils/motionVariants'
import { motion } from 'framer-motion'
import { ComponentPropsWithoutRef } from 'react'

const Circle = (props: ComponentPropsWithoutRef<'div'>) => {
  return (
    <div {...props}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        version="1.1"
      >
        <circle fillOpacity={0} cx="50%" cy="50%" r="45" />
      </svg>
    </div>
  )
}

const DiscoCircles = () => {
  return (
    <motion.div
      className="hidden sm:block"
      variants={pageMotion}
      id="disco-circles"
    >
      {/* CSS defined up to 11 circles - but performance gets rekt  */}
      <div className="disco-circles__content">
        {Array.from(Array(9).keys()).map((_, idx) => (
          <Circle
            className={`disco-circle disco-circle-${idx + 1}`}
            key={idx}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default DiscoCircles
