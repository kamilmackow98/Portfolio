import { ButtonHTMLAttributes, useRef } from 'react'
import classNames from 'classnames'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  backwards?: boolean
  variant?: 'blue'
}

const DiscoButton = (props: Props) => {
  const { children, className, variant, backwards, ...rest } = props
  const variantColorRef = useRef<string>(
    variant === 'blue' ? '#80d4ff' : '#ffcc66',
  )

  const classes = classNames(
    'disco-button',
    variant === 'blue' && 'blue',
    className,
  )
  const renderBackwards = backwards ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 10"
      preserveAspectRatio="none"
    >
      <g>
        <path
          fill="#a0afcc"
          fillOpacity="0.05"
          stroke={variantColorRef.current}
          strokeOpacity="0.8"
          strokeWidth="0.25"
          d="M 30.05126,0.12579455 H 0.12805072 V 7.0952359 L 4.9487577,9.8741902 H 34.871968 V 2.9047488 Z"
          id="btn-bg"
        />
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 35 10"
      preserveAspectRatio="none"
    >
      <g>
        <path
          fill="#a0afcc"
          fillOpacity="0.05"
          stroke={variantColorRef.current}
          strokeOpacity="0.8"
          strokeWidth="0.25"
          d="M 4.9487583,0.12579455 H 34.871968 V 7.0952359 L 30.051261,9.8741902 H 0.12805072 V 2.9047488 Z"
          id="btn-bg"
        />
      </g>
    </svg>
  )

  return (
    <button className={classes} {...rest}>
      {children}
      {renderBackwards}
    </button>
  )
}

export default DiscoButton
