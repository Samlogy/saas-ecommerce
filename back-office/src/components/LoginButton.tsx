import { Button } from '@chakra-ui/react'

import { saveState } from '../utils/localStorage'

function LoginButton() {
  const onLogin = () => {
    // loginWithRedirect()
    // saveState('auth-admin', user)
  }

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }
  // if (error) {
  //   return <div>Oops... {error.message}</div>
  // }

  return <Button onClick={() => onLogin()}> Log In </Button>
}

export default LoginButton
