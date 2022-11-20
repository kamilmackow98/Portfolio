import clsx from 'clsx'
import { HTMLAttributes } from 'react'
import styles from './Tag.module.css'

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Tag = (props: Props) => {
  const { children, className } = props

  return (
    <div
      className={clsx(
        styles.tag,
        'font-text--xxs theme-font--reading font-medium',
        'leading-3 text-white',
        'select-none',
        className,
      )}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 35 10"
        preserveAspectRatio="none"
      >
        <g>
          <path
            fill="#39455c"
            stroke="#7a8ba9"
            strokeOpacity="0.5"
            strokeWidth="0.25"
            d="M 32.051261,0.12579455 H 0.128051 V 7.0952359 l 2.820707,2.7789543 h 31.92321 V 2.9047488 Z"
            id="btn-bg"
          />
        </g>
      </svg>
    </div>
  )
}

export default Tag
