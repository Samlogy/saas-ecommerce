import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'

import { saveState } from '../utils/localStorage'

function LoginButton() {
  const { isLoading, isAuthenticated, error, user, loginWithRedirect } =
    useAuth0<{ name: string }>()

  const onLogin = () => {
    loginWithRedirect()
    saveState('auth-admin', user)
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return <Button onClick={() => onLogin()}> Log In </Button>
}

export default LoginButton
