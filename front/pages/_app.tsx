import '../styles/global.css'
import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactQueryDevtools } from 'react-query/devtools'
import { QueryClient, QueryClientProvider } from 'react-query'
import { UserProvider } from '@auth0/nextjs-auth0'

import theme from '../theme'

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <ChakraProvider theme={theme}>
      <UserProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </UserProvider>
    </ChakraProvider>
  )
}
