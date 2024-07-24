'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react"
import { AuthContextProvider } from "./AuthContext";

interface ReactQueryProviderProps {
  children: ReactNode;
}
export const queryClient = new QueryClient();
/**
 * This component is required for providing react query. If we use it in the 
 * root layout. It throws an error because it is a server component. 
 * This component is a client component
 *
 * @param {*} { children }
 * @return {*} 
 */
const ReactQueryProvider: FC<ReactQueryProviderProps> =
({ children }: { children: React.ReactNode }): ReactNode => {
  // React Query Client. Enables caching and state management
  
  
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        {children}
      </AuthContextProvider>
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;