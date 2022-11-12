import Link, { LinkProps } from 'next/link'
import { ReactNode, useRef } from 'react'
import clsx from 'clsx'

interface Props extends LinkProps {
  children?: ReactNode
  backwards?: boolean
  className?: string
  variant?: 'blue'
}

const DiscoLink = (props: Props) => {
  const { children, className, backwards, variant, ...rest } = props
  const variantColorRef = useRef<string>(
    variant === 'blue' ? '#80d4ff' : '#ffcc66',
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
    <Link {...rest}>
      <a
        className={clsx(
          'disco-link tracking-wide',
          variant === 'blue' && 'blue',
          className,
        )}
      >
        {children}
        {renderBackwards}
      </a>
    </Link>
  )
}

export default DiscoLink
