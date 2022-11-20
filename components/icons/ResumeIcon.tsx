import clsx from 'clsx'
import { FaChevronDown as CgChevronDown } from 'react-icons/fa'
import styles from './ResumeIcon.module.css'

const ResumeIcon = () => {
  return (
    <div className={clsx(styles.wrapper)}>
      <CgChevronDown
        className={clsx(styles.chevron)}
        color="#80d4ff"
        size={28}
      />
      <CgChevronDown
        className={clsx(styles.chevron)}
        fillOpacity={0.75}
        color="#80d4ff"
        size={22}
      />
      <CgChevronDown
        className={clsx(styles.chevron)}
        fillOpacity={0.5}
        color="#80d4ff"
        size={16}
      />
      <span className={clsx(styles.circle)}>
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
          <circle
            fill="rgba(0, 0, 0, 0)"
            strokeDasharray={40}
            strokeOpacity={0.75}
            strokeWidth={2}
            cx="40"
            cy="40"
            r="38"
          />
        </svg>
      </span>
    </div>
  )
}

export default ResumeIcon
