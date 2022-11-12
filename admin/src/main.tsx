// import React, { Suspense } from 'react'
// import ReactDOM from 'react-dom/client'
// import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
// import App from './App'
// import './index.css'

// import { ChakraProvider, ColorModeScript, theme } from '@chakra-ui/react'

// const client = new ApolloClient({
//   uri: 'http://localhost:5000',
//   cache: new InMemoryCache()
// })

import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import './index.css'
import App from './App'
import { CustomPreLoader } from './components'
import './lib/lang/i18'
import theme from './theme'

// init apollo client
const client = new ApolloClient({
  uri: 'http://localhost:5000',
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<p> Loading... </p>}>
          <ColorModeScript />
          <App />
        </Suspense>
      </ChakraProvider>
    </ApolloProvider> */}
    <ApolloProvider client={client}>
      <ChakraProvider theme={theme}>
        <Suspense fallback={<CustomPreLoader />}>
          <ColorModeScript />
          <App />
        </Suspense>
      </ChakraProvider>
    </ApolloProvider>
  </React.StrictMode>
)
