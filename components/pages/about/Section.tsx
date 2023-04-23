import { cva, cx, VariantProps } from 'class-variance-authority'
import { ComponentPropsWithoutRef } from 'react'

interface SectionProps
  extends ComponentPropsWithoutRef<'section'>,
    VariantProps<typeof sectionStyles> {}
interface MiscProps extends ComponentPropsWithoutRef<'div'> {}
interface TitleProps extends ComponentPropsWithoutRef<'h3'> {}
interface ContentProps
  extends ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof contentStyles> {}
interface ParagraphProps extends ComponentPropsWithoutRef<'p'> {}

const sectionStyles = cva(['about-section', 'grid'], {
  variants: {
    align: {
      center: 'items-center',
      top: 'items-start',
    },
  },
  defaultVariants: {
    align: 'center',
  },
})

const miscStyles = cva(['about-section__misc'])

const titleStyles = cva([
  'theme-font--heading font-text--fat font-bold',
  'tracking-wider text-white',
])

const contentStyles = cva([], {
  variants: {
    variant: {
      timeline: '',
      default: cx(
        'mt-12 lg:mt-0 xl:px-8 2xl:px-12',
        'sm:max-w-[480px] lg:max-w-none',
        'ml-auto mr-auto',
      ),
    },
  },
  defaultVariants: {
    variant: 'default',
  },
})

const paragraphStyles = cva([
  'text-justify font-medium leading-relaxed',
  'mt-3 lg:px-8',
])

const Section = (props: SectionProps) => {
  const { className, align, children, ...rest } = props

  return (
    <section className={sectionStyles({ className, align })} {...rest}>
      {children}
    </section>
  )
}

const Misc = (props: MiscProps) => {
  const { className, ...rest } = props

  return <div className={miscStyles({ className })} {...rest} />
}

const Title = (props: TitleProps) => {
  const { className, children, ...rest } = props

  return (
    <h3 className={titleStyles({ className })} {...rest}>
      {children}
    </h3>
  )
}

const Content = (props: ContentProps) => {
  const { className, variant, children, ...rest } = props

  return (
    <div className={contentStyles({ className, variant })} {...rest}>
      {children}
    </div>
  )
}

const Paragraph = (props: ParagraphProps) => {
  const { className, children, ...rest } = props

  return (
    <p className={paragraphStyles({ className })} {...rest}>
      {children}
    </p>
  )
}

Section.Misc = Misc
Section.Title = Title
Section.Content = Content
Section.Paragraph = Paragraph

export default Section
