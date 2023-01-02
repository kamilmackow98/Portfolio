import { cx } from 'class-variance-authority'

const year = new Date().getFullYear()

const footerClasses = cx(
  'theme-font--reading font-text--sm font-medium',
  'text-center text-white',
  'mt-auto py-4',
)

const Footer = () => {
  return (
    <footer id="footer" className={footerClasses}>
      <span className="font-normal">&copy;</span> {year} - Kamil Mackow. All
      rights reserved.
    </footer>
  )
}

export default Footer
