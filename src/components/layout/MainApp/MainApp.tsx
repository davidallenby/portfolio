'use client'
import { AuthContextProvider } from "@context/AuthContext";
import { FC, ReactNode } from "react"

interface MainAppProps {
  children: ReactNode;
}

const MainApp: FC<MainAppProps> = ({ children }) => {
  return (
    <AuthContextProvider>
      {children}
    </AuthContextProvider>
  );
}

export default MainApp;