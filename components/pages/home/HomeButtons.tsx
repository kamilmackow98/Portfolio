import DiscoLink from '@atoms/DiscoLink'
import { cx } from 'class-variance-authority'

const wrapperClasses = cx(
  'xs:flex-row xs:items-center',
  'flex flex-col gap-4',
  'mt-6 xs:mt-10',
  'w-full',
)

const buttonClasses = cx(
  'text-xs xs:text-margot',
  'xs:px-6 xs:py-3.5',
  'px-6.5 py-4',
)

const orClasses = cx(
  'theme-font--heading text-md font-bold',
  'text-white uppercase',
  'hidden xs:block',
  'mx-2',
)

const HomeButtons = () => (
  <>
    <div className={wrapperClasses}>
      <DiscoLink
        className={buttonClasses}
        variant="primary"
        href="/portfolio"
        rounded="tl-br"
        size="zero"
        font="none"
      >
        Check my work
      </DiscoLink>

      <div className={orClasses}>Or</div>

      <DiscoLink
        className={buttonClasses}
        variant="secondary"
        rounded="tr-bl"
        href="/about"
        size="zero"
        font="none"
      >
        Learn about me
      </DiscoLink>
    </div>
  </>
)

export default HomeButtons
