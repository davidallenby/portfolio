import { auth } from "@lib/firebase/app";
import { User } from "firebase/auth";
import { useContext, createContext, useState, useEffect } from "react";

const AuthContext = createContext<User|null>(null);

const AuthContextProvider: React.FC<{children: React.ReactNode}> = 
({ children }: any) => {
  // Set the user in state
  const [user, setUser] = useState<User|null>(null);
  // We only want to subscribe to the auth state change once. 
  useEffect(() => {
    const unsub = auth.onAuthStateChanged((state) => {
      setUser(state)
    })

    return () => unsub();
  }, [])

  return (
    <AuthContext.Provider value={user}>
      {children} 
    </AuthContext.Provider>
  );
}

const useAuthContext = () => {
  return useContext(AuthContext) as User;
}

export { AuthContextProvider, useAuthContext};