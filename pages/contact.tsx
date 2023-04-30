import { cx } from 'class-variance-authority'
import { NextPage } from 'next'

const pageClasses = cx(
  'flex flex-1 items-center justify-center',
  'my-10 sm:my-20 lg:my-48',
  'page-container',
)

const titleClasses = cx(
  'text-white tracking-wider font-medium',
  'theme-font--heading text-xl',
)

const Contact: NextPage = () => {
  return (
    <div id="contact-page" className={pageClasses}>
      <h1 className={titleClasses}>Coming soon...</h1>
    </div>
  )
}

export default Contact
