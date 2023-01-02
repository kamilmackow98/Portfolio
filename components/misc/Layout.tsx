import { AnimatePresence, motion } from 'framer-motion'
import { pageMotion } from '@utils/motionVariants'
import { useRouter } from 'next/router'
import Navigation from './Navigation'
import Footer from './Footer'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  const { asPath } = useRouter()

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait" onExitComplete={scrollToTop}>
        <motion.main
          className="container mx-auto"
          variants={pageMotion}
          initial="initial"
          animate="animate"
          exit="exit"
          key={asPath}
        >
          {children}
          {/* <span className="mt-24 block" />
          <Footer /> */}
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default Layout
