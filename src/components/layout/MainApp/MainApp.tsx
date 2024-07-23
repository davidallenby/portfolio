'use client'
import { AuthContextProvider } from "@context/AuthContext";
import { FC, ReactNode } from "react"

interface MainAppProps {
  children: ReactNode;
}

/**
 * This component is required for getting/setting the auth context. If we use
 * AuthContextProvider in the root layout. It throws an error because it is a
 * server component. This component (MainApp) is a client component, which 
 * allows us to access useEffect in the AuthContextProvider without any errors.
 *
 * @param {*} { children }
 * @return {*} 
 */
const MainApp: FC<MainAppProps> = ({ children }) => {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
}

export default MainApp;