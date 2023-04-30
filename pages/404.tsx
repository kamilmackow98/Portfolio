import CustomHead from '@components/misc/CustomHead'
import { cx } from 'class-variance-authority'
import { NextPage } from 'next'

const pageClasses = cx(
  'flex flex-1 justify-center items-center',
  'my-10 sm:my-20 lg:my-48',
  'page-container',
)
const titleClasses = cx(
  'text-white tracking-wider font-medium',
  'theme-font--heading text-xl',
)

const Custom404: NextPage = () => {
  return (
    <>
      <CustomHead title="Page not found" />
      <div className={pageClasses}>
        <h1 className={titleClasses}>404 - Page not found.</h1>
      </div>
    </>
  )
}

export default Custom404
