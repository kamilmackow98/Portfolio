import { cva, VariantProps } from 'class-variance-authority'

interface SectionProps
  extends React.ComponentPropsWithoutRef<'section'>,
    VariantProps<typeof sectionStyles> {}
interface TitleProps extends React.ComponentPropsWithoutRef<'h3'> {}
interface ContentProps
  extends React.ComponentPropsWithoutRef<'div'>,
    VariantProps<typeof contentStyles> {}
interface ParagraphProps extends React.ComponentPropsWithoutRef<'p'> {}

const sectionStyles = cva(['grid justify-center'], {
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

const titleStyles = cva([
  'theme-font--heading font-text--fat font-bold',
  'tracking-wider text-white',
])

const contentStyles = cva([], {
  variants: {
    variant: {
      timeline: '',
      default: 'mt-12 lg:mt-0 xl:px-8 2xl:px-12',
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

Section.Title = Title
Section.Content = Content
Section.Paragraph = Paragraph

export default Section
