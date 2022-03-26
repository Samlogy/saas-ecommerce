import { ThirdPartyEmailPasswordAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
// import { withAuthenticationRequired } from '@auth0/auth0-react'
import { loadState } from '../utils/localStorage'

const ProtectedRoute = ({ children }: { children: any }) => {
  const auth = loadState('auth-admin')
  // autho --> for redireection
  return <ThirdPartyEmailPasswordAuth>{children}</ThirdPartyEmailPasswordAuth>
}
// export default withAuthenticationRequired(ProtectedRoute, {
//   // Show a message while the user waits to be redirected to the login page.
//   onRedirecting: () => <div>Redirecting you to the login page...</div>
// })

export default ProtectedRoute
