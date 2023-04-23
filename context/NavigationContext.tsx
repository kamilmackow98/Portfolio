import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { Route } from 'types'

interface Props {
  routes: Route[]
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const NavigationContext = createContext<Props | null>(null)

export function useNavigationContext() {
  const context = useContext(NavigationContext)

  if (!context) {
    throw new Error(
      'useNavigationContext must be used within a NavigationContext.Provider',
    )
  }

  return context
}

export default NavigationContext
