import { ProtectedRoute } from 'components'
import { Analytics, Messages, NotFound, Notifications, Products } from 'pages'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import SuperTokens, { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react'
import Session from 'supertokens-auth-react/recipe/session'
import ThirdPartyEmailPassword, {
  Apple,
  Google
} from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

SuperTokens.init({
  appInfo: {
    appName: 'demo app', // saas-ecommerce-web-app
    apiDomain: 'http://localhost:3001',
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
        <Route
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
        />

        {/* <Route path="/" element={<Analytics />} /> */}
        {/* <Route path="products" element={<Products />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages" element={<Messages />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routing
