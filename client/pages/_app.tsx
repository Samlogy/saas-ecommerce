import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import theme from '../theme'

import { ErrorBoundary } from '../components'

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache()
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <ErrorBoundary>
          <Component {...pageProps} />
        </ErrorBoundary>
      </ChakraProvider>
    </ApolloProvider>
  )
}
