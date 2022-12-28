import clsx from 'clsx'

const year = new Date().getFullYear()

const Footer = () => {
  return (
    <footer
      className={clsx(
        'theme-font--reading font-text--sm font-medium',
        'text-center text-white',
        'mt-auto py-4',
      )}
      id="footer"
    >
      <span className="font-normal">&copy;</span> {year} - Kamil Mackow. All
      rights reserved.
    </footer>
  )
}

export default Footer
