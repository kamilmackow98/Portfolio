import { cva, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

interface Props
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof tagStyles> {}

const tagStyles = cva(
  [
    'font-text--xxs theme-font--reading font-medium',
    'leading-3 tracking-wide text-white',
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

const Tag = (props: Props) => {
  const { children, className, gutter, ...rest } = props

  return (
    <div className={tagStyles({ className, gutter })} {...rest}>
      {children}
    </div>
  )
}

export default Tag
