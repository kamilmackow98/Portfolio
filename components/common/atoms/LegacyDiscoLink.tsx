import { cva, VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import { ReactNode, useRef } from 'react'

interface Props extends LinkProps, VariantProps<typeof linkStyles> {
  children?: ReactNode
  backwards?: boolean
  className?: string
}

const linkStyles = cva(['tracking-wider', 'disco-link'], {
  variants: {
    variant: {
      blue: 'blue',
      default: '',
    },
    size: {
      xs: 'px-6 py-3',
      sm: 'px-6 py-3.5',
      md: 'px-6 py-4',
      zero: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'sm',
  },
})

const linkBackground = (
  backwards: boolean = false,
  color: string = '#ffcc66',
) => {
  if (backwards) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        viewBox="0 0 35 10"
      >
        <g>
          <path
            d="M 30.05126,0.12579455 H 0.12805072 V 7.0952359 L 4.9487577,9.7541902 H 34.751968 V 2.9047488 Z"
            strokeOpacity="0.8"
            strokeWidth="0.3"
            fill="#0000"
            stroke={color}
          />
        </g>
      </svg>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 35 10"
    >
      <g>
        <path
          d="M 4.9487583,0.12579455 H 34.751968 V 7.0952359 L 30.051261,9.7541902 H 0.25805072 V 2.9047488 Z"
          strokeOpacity="0.8"
          strokeWidth="0.3"
          fill="#0000"
          stroke={color}
        />
      </g>
    </svg>
  )
}

const LegacyDiscoLink = (props: Props) => {
  const { children, className, variant, backwards, size, scroll, ...rest } =
    props
  const colorRef = useRef<string>(variant === 'blue' ? '#80d4ff' : '#ffcc66')
  const scrollToTop = scroll ? scroll : false

  const renderBackground = linkBackground(backwards, colorRef.current)

  return (
    <Link
      className={linkStyles({ className, variant, size })}
      scroll={scrollToTop}
      {...rest}
    >
      {renderBackground}
      {children}
    </Link>
  )
}

export default LegacyDiscoLink
