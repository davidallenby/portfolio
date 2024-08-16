'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { FC, ReactNode } from "react"

interface ReactQueryProviderProps {
  children: ReactNode;
}
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 0,
    },
    mutations: {
      retry: 0
    }
  }
});
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
      {children}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;