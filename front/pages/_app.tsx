import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'
import React from 'react'
import '../styles/global.css'
import theme from '../theme'

const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache()
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </ApolloProvider>
  )
}
