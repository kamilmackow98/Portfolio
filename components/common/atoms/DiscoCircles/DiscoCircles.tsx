import styles from './DiscoCircles.module.css'
import { motion } from 'framer-motion'
import { pageMotion } from '@utils/motionVariants'

const Circle = () => {
  return (
    <div className={styles.circle}>
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
      className={styles.wrapper}
      variants={pageMotion}
      initial="initial"
      animate="animate"
      exit="exit"
      key="disco-circles"
    >
      <div className={styles['circles-container']}>
        {Array.from(Array(11).keys()).map((_, idx) => (
          <Circle key={idx} />
        ))}
      </div>
    </motion.div>
  )
}

export default DiscoCircles
