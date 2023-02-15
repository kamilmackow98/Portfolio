import { pageMotion } from '@utils/motionVariants'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import Navigation from './Navigation'

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
          className="container mx-auto mt-20"
          variants={pageMotion}
          initial="initial"
          animate="animate"
          exit="exit"
          key={asPath}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  )
}

export default Layout
