'use client'
import { ROUTES } from "@constants/navigation";
import { auth } from "@lib/firebase/app";
import { useRouter } from "next/navigation";
import { FC, ReactNode, useEffect, useState } from "react";

interface AuthGuardContainerProps {
  children: ReactNode;
  hideVerified?: boolean;
}
/**
 * This container will hide content from view until the auth state has loaded
 * from Firebase. If the user is not logged in it will redirect them to the
 * login screen. If the user IS logged in, but we want to hide the content
 * from a verified user... it will redirect them to the admin screen
 *
 * @param {*} { children }
 * @return {*} 
 */
const AuthGuardContainer: FC<AuthGuardContainerProps> = ({ 
  children, hideVerified = false
}: AuthGuardContainerProps): ReactNode => {
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  
  useEffect(() => {
    // Hide the content from view...
    setLoading(true);

    /**
     * Gets the current auth state and redirects the user if they're logged in.
     * @returns 
     */
    const unsubscribe = auth.onAuthStateChanged((state) => {
      // If not logged in, redirect to login
      if (!hideVerified && !state) {
        router.push(ROUTES.LOGIN);
        return;
      }

      if (hideVerified && state) {
        router.push(ROUTES.ADMIN)
        return;
      }
      // Show the content in the view...
      setLoading(false);
    })
    
    // Will unsubscribe when the component unmounts.
    return unsubscribe;

  }, [router, hideVerified])

  return (
    <>
      { loading ? <></> : children }
    </>
  );
}

export default AuthGuardContainer;