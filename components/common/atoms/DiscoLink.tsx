import { cva, VariantProps } from 'class-variance-authority'
import Link, { LinkProps } from 'next/link'
import { ReactNode } from 'react'

const linkStyles = cva(['tracking-wider', 'disco-link'], {
  variants: {
    variant: {
      primary: 'primary',
      secondary: 'secondary',
      default: '',
    },
    size: {
      xxs: 'px-5 py-2.5',
      xs: 'px-6 py-3',
      sm: 'px-6 py-3.5',
      md: 'px-6.5 py-4',
      zero: '',
    },
    rounded: {
      'tl-br': 'rounded rounded-tl-2xl rounded-br-2xl',
      'tr-bl': 'rounded rounded-tr-2xl rounded-bl-2xl',
      default: 'rounded',
    },
    glowing: {
      true: 'glowing',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    rounded: 'default',
    glowing: false,
    size: 'sm',
  },
})

interface Props extends LinkProps, VariantProps<typeof linkStyles> {
  children?: ReactNode
  className?: string
}

const DiscoLink = (props: Props) => {
  const {
    children,
    className,
    scroll,
    variant,
    size,
    rounded,
    glowing,
    ...rest
  } = props
  const scrollToTop = scroll ? scroll : false

  return (
    <Link
      className={linkStyles({ className, variant, size, rounded, glowing })}
      scroll={scrollToTop}
      {...rest}
    >
      {children}
    </Link>
  )
}

export default DiscoLink
