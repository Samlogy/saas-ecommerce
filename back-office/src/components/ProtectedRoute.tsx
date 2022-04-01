import { ThirdPartyEmailPasswordAuth } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'
// import { loadState } from '../utils/localStorage'

const ProtectedRoute = ({ children }: { children: any }) => {
  // const auth = loadState('auth-admin')

  // ThirdPartyEmailPasswordAuth
  return <>{children}</>
}

export default ProtectedRoute
