import { ProtectedRoute } from 'components'
import { Analytics, Messages, NotFound, Notifications, Products } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react'
import Session from 'supertokens-auth-react/recipe/session'
import ThirdPartyEmailPassword, {
  Apple,
  Google
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

// import SessionExpiredPopup from './SessionExpiredPopup'

// export function getApiDomain() {
//   const apiPort = process.env.REACT_APP_API_PORT || 3001
//   const apiUrl = process.env.REACT_APP_API_URL || `http://localhost:${apiPort}`
//   return apiUrl
// }

// export function getWebsiteDomain() {
//   const websitePort = process.env.REACT_APP_WEBSITE_PORT || 3000
//   const websiteUrl = process.env.REACT_APP_WEBSITE_URL || `http://localhost:${websitePort}`
//   return websiteUrl
// }

SuperTokens.init({
  appInfo: {
    appName: 'saas-ecommerce-web-app', // TODO: Your app name
    apiDomain: 'http://localhost:5000/',
    websiteDomain: 'http://localhost:3000'
  },
  recipeList: [
    ThirdPartyEmailPassword.init({
      signInAndUpFeature: {
        providers: [Google.init(), Apple.init()]
      },
      emailVerificationFeature: {
        mode: 'REQUIRED'
      }
    }),
    Session.init()
  ]
})

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        {getSuperTokensRoutesForReactRouterDom(require('react-router-dom'))}
        {/* <Route
          path="/"
          element={
            <ProtectedRoute>
              <Analytics />
            </ProtectedRoute>
          }
        />
        <Route
          path="products"
          element={
            <ProtectedRoute>
              <Products />
            </ProtectedRoute>
          }
        />
        <Route
          path="notifications"
          element={
            <ProtectedRoute>
              <Notifications />
            </ProtectedRoute>
          }
        />

        <Route
          path="messages"
          element={
            <ProtectedRoute>
              <Messages />
            </ProtectedRoute>
          }
        /> */}

        <Route path="/" element={<Analytics />} />
        <Route path="products" element={<Products />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages" element={<Messages />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
