import { useContext, createContext, useCallback, useState } from "react";

interface MobileNavContextInterface {
  open: boolean;
  toggleOpen: (bool: boolean) => void;
}

const MobileNavContext = createContext<MobileNavContextInterface|null>(null);

const MobileNavContextProvider: React.FC<{children: React.ReactNode}> = 
({ children }: any) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = useCallback((bool: boolean) => {
    if (bool) {
      document.body.classList.add('scroll-lock');
    } else {
      document.body.classList.remove('scroll-lock');
    }
    setOpen(bool);
  }, [setOpen]);

  return (
    <MobileNavContext.Provider value={{ open, toggleOpen}}>
      {children} 
    </MobileNavContext.Provider>
  );
}

const useMobileNavContext = () => {
  return useContext(MobileNavContext) as MobileNavContextInterface;
}

export { MobileNavContextProvider, useMobileNavContext};