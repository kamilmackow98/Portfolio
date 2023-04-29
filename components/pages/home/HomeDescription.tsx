import { cx } from 'class-variance-authority'

const descriptionClasses = cx(
  'max-w-[360px] xs:max-w-[400px] xl:max-w-[460px]',
  'font-medium leading-relaxed',
  'mt-6 xs:mt-10',
)

const HomeDescription = () => (
  <p className={descriptionClasses}>
    I&#39;m a Web Developer with a passion for UI and UX. Mainly focused on
    front-end development, I like to design user interfaces, create stunning
    websites and develop cutting-edge applications.
  </p>
)

export default HomeDescription
