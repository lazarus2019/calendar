import { ReactNode } from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import RouterDOMProvider from '@/routers'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1_000 * 10,
      staleTime: 1_000 * 5,
    },
  },
})

interface AppProviderProps {
  children: ReactNode
}

function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterDOMProvider />
      {children}
      {import.meta.env.MODE === 'development' && <ReactQueryDevtools initialIsOpen />}
    </QueryClientProvider>
  )
}

export default AppProvider
