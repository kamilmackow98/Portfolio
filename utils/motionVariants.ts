import { Variants } from 'framer-motion'

export const pageMotion: Variants = {
  initial: { opacity: 0, y: -50 },
  animate: {
    transition: {
      duration: 0.4,
      ease: 'circOut',
      opacity: {
        duration: 0.3,
        ease: 'linear',
      },
    },
    opacity: 1,
    y: 0,
  },
  exit: {
    transition: {
      duration: 0.4,
      ease: 'backIn',
    },
    opacity: 0,
    y: 50,
  },
}

export const backdropMotion: Variants = {
  initial: { opacity: 0 },
  animate: {
    transition: { duration: 0.2 },
    opacity: 1,
  },
  exit: {
    transition: { duration: 0.4 },
    opacity: 0,
  },
}

export const dialogMotion: Variants = {
  initial: { opacity: 0, y: -100 },
  animate: {
    transition: { duration: 0.4, ease: 'circOut' },
    opacity: 1,
    y: 0,
  },
  exit: {
    transition: { duration: 0.3, ease: 'backIn' },
    opacity: 0,
    y: -100,
  },
}

export const navMotion: Variants = {
  initial: {
    opacity: 0,
    x: '20%',
  },
  animate: {
    transition: { duration: 0.3, ease: 'circOut' },
    opacity: 1,
    x: '0%',
  },
  exit: {
    transition: { duration: 0.5, ease: 'anticipate' },
    opacity: 0,
    x: '20%',
  },
}

export const inViewContainer: Variants = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

export const inViewItem: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    transition: {
      duration: 0.4,
      ease: 'circOut',
      opacity: { ease: 'linear', duration: 0.3 },
    },
    opacity: 1,
    y: 0,
  },
}

export const inViewNavItem: Variants = {
  initial: {
    opacity: 0,
    y: -40,
  },
  animate: {
    transition: {
      duration: 0.4,
      ease: 'circOut',
      opacity: {
        ease: 'linear',
        duration: 0.3,
      },
    },
    opacity: 1,
    y: 0,
  },
}

export const inViewCircle: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    transition: { duration: 1, ease: 'easeOut' },
    opacity: 1,
  },
}

export const loaderMotion: Variants = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    transition: {
      duration: 0.4,
      ease: 'linear',
      delay: 2,
    },
    opacity: 0,
  },
}

export const eventMotion: Variants = {
  animate: {
    transition: {
      staggerChildren: 0.125,
      delayChildren: 0.25,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.125,
    },
  },
}

export const eventItemMotion: Variants = {
  initial: { opacity: 0, x: -20 },
  animate: {
    transition: {
      duration: 0.4,
      ease: 'circOut',
      opacity: {
        duration: 0.25,
        ease: 'linear',
      },
    },
    opacity: 1,
    x: 0,
  },
  exit: {
    transition: {
      duration: 0.25,
      ease: 'easeIn',
      opacity: {
        duration: 0.25,
        ease: 'linear',
      },
    },
    opacity: 0,
    y: -15,
  },
}

export const mobileNavMotion: Variants = {
  initial: {
    clipPath: 'inset(0% 0% 100% 0%)',
  },
  animate: {
    transition: { duration: 0.4, ease: 'easeOut' },
    clipPath: 'inset(0% 0% 0% 0%)',
  },
  exit: {
    transition: { duration: 0.6, ease: 'anticipate' },
    clipPath: 'inset(100% 0% 0% 0%)', // Or 0% 0% 100% 0%
  },
}
