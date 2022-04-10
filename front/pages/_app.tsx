import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import '../styles/global.css'
import theme from '../theme'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import React from 'react'

const client = () => {
  // init apollo client
  const client = new ApolloClient({
    uri: 'http://localhost:5000',
    cache: new InMemoryCache()
  })

  return client
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
