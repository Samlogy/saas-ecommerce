import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './index.css'
import App from './App'
import { CustomPreLoader } from 'components'
import './lib/lang/i18'
import theme from './theme'

// init apollo client
const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache()
})

const container = document.getElementById('root')
// @ts-ignore
const root = ReactDOM.createRoot(container)
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<CustomPreLoader />}>
          <App />
        </Suspense>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
)
