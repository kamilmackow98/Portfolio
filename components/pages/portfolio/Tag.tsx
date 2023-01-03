import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

interface Props
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof tagStyles> {}

const tagStyles = cva(
  [
    'font-text--xxs theme-font--reading font-medium',
    'leading-3 tracking-wide text-white',
    'select-none',
    'portfolio-tag',
  ],
  {
    variants: {
      gutter: {
        default: 'px-[18px] py-[7px]',
        none: '',
      },
    },
    defaultVariants: {
      gutter: 'default',
    },
  },
)

const TagBackground = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      viewBox="0 0 35 10"
    >
      <g>
        <path
          d="M 32.051261,0.12579455 H 0.128051 V 7.0952359 l 2.820707,2.7789543 h 31.92321 V 2.9047488 Z"
          strokeOpacity="0.5"
          strokeWidth="0.4"
          stroke="#7a8ba9"
          fill="#39455c"
        />
      </g>
    </svg>
  )
}

const Tag = (props: Props) => {
  const { children, className, gutter, ...rest } = props

  return (
    <div className={tagStyles({ className, gutter })} {...rest}>
      <TagBackground />
      {children}
    </div>
  )
}

export default Tag
