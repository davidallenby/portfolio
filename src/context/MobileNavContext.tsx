import { createContext, useCallback, useContext, useState } from 'react'

interface MobileNavContextInterface {
  open: boolean
  toggleOpen: (bool: boolean) => void
}

const MobileNavContext = createContext<MobileNavContextInterface | null>(null)

const MobileNavContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}: any) => {
  const [open, setOpen] = useState(false)

  const toggleOpen = useCallback((bool: boolean) => {
    if (bool) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
    setOpen(bool)
  }, [])

  return (
    <MobileNavContext.Provider value={{ open, toggleOpen }}>
      {children}
    </MobileNavContext.Provider>
  )
}

const useMobileNavContext = () => {
  return useContext(MobileNavContext) as MobileNavContextInterface
}

export { MobileNavContextProvider, useMobileNavContext }
