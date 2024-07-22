'use client'
import { ROUTES } from "@constants/navigation";
import { useAuthContext } from "@context/AuthContext";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

interface AuthGuardContainerProps {
  children: ReactNode;
  
}
/**
 * This container will hide content from view until the auth state has loaded
 * from Firebase. If the user is not logged in it will redirect them to the
 * login screen.
 *
 * @param {*} { children }
 * @return {*} 
 */
const AuthGuardContainer: FC<AuthGuardContainerProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const authCxt = useAuthContext();
  const router = useRouter();
  
  useEffect(() => {
    /**
     * Gets the current auth state and redirects the user if they're logged in.
     * @returns 
     */
    async function getAuthState() {
      // Hide the child content from view until the auth has finished loading
      setLoading(true);
      // If the user is not logged in/verified, redirect to login screen.
      if (!authCxt) {
        router.push(ROUTES.LOGIN);
        return;
      }
      // Show the content if the user is logged in/verified
      setLoading(false);
    }

    getAuthState();
  }, [authCxt, router])

  return (
    <>
      { loading ? <></> : children }
    </>
  );
}

export default AuthGuardContainer;