import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { CustomLoader } from './components'

import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import './lib/lang/i18'

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN as string
const CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID as string

ReactDOM.render(
  <Auth0Provider domain={DOMAIN} clientId={CLIENT_ID} redirectUri={window.location.origin}>
    <React.StrictMode>
      <ChakraProvider>
        <Suspense fallback={<CustomLoader />}>
          <App />
        </Suspense>
      </ChakraProvider>
    </React.StrictMode>
  </Auth0Provider>,
  document.getElementById('root')
)
