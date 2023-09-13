'use client'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

export default function QueryProvider({children}) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,    // default: true
      },
    }
  });
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}
