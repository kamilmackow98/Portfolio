import { pageMotion } from '@utils/motionVariants'
import { motion } from 'framer-motion'

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
      id="disco-circles-wrapper"
      variants={pageMotion}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {/* CSS defined up to 11 circles - but performance gets rekt  */}
      <div className="disco-circles">
        {Array.from(Array(9).keys()).map((_, idx) => (
          <Circle key={idx} />
        ))}
      </div>
    </motion.div>
  )
}

export default DiscoCircles
