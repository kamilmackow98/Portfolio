import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef, useRef } from 'react'

interface Props
  extends ComponentPropsWithoutRef<'button'>,
    VariantProps<typeof buttonStyles> {
  backwards?: boolean
}

const buttonStyles = cva(['tracking-wider', 'disco-button'], {
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

const buttonBackground = (
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
            d="M 30.05126,0.12579455 H 0.12805072 V 7.0952359 L 4.9487577,9.8741902 H 34.751968 V 2.9047488 Z"
            strokeOpacity="0.8"
            fillOpacity="0.05"
            strokeWidth="0.3"
            stroke={color}
            fill="#a0afcc"
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
          d="M 4.9487583,0.12579455 H 34.751968 V 7.0952359 L 30.051261,9.8741902 H 0.25805072 V 2.9047488 Z"
          strokeOpacity="0.8"
          fillOpacity="0.05"
          strokeWidth="0.3"
          fill="#a0afcc"
          stroke={color}
        />
      </g>
    </svg>
  )
}

const DiscoButton = (props: Props) => {
  const { children, className, variant, backwards, size, ...rest } = props
  const colorRef = useRef<string>(variant === 'blue' ? '#80d4ff' : '#ffcc66')

  const renderBackground = buttonBackground(backwards, colorRef.current)

  return (
    <button className={buttonStyles({ className, variant, size })} {...rest}>
      {renderBackground}
      {children}
    </button>
  )
}

export default DiscoButton
