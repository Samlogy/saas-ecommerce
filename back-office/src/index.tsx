import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'

import './index.css'
import App from './App'
import { CustomPreLoader } from 'components'
import './lib/lang/i18'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Suspense fallback={<CustomPreLoader />}>
        <App />
      </Suspense>
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
