import { motion } from 'framer-motion'
import { pageMotion } from '@utils/motionVariants'

const Circle = () => {
  return (
    <div className="disco-circles__circle">
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
      variants={pageMotion}
      initial="initial"
      animate="animate"
      exit="exit"
      key="disco-circles"
      id="disco-circles-wrapper"
    >
      <div className="disco-circles">
        {Array.from(Array(11).keys()).map((_, idx) => (
          <Circle key={idx} />
        ))}
      </div>
    </motion.div>
  )
}

export default DiscoCircles
