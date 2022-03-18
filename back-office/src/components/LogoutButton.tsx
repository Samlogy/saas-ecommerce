import { useAuth0 } from '@auth0/auth0-react'
import { Button } from '@chakra-ui/react'

import { removeState } from '../utils/localStorage'

function LogoutButton() {
  const { isLoading, isAuthenticated, error, logout } = useAuth0<{ name: string }>()

  const onLogout = () => {
    isAuthenticated && removeState('auth-admin')
    logout({ returnTo: window.location.origin })
  }

  if (isLoading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Oops... {error.message}</div>
  }

  return <Button onClick={() => onLogout()}> Log Out </Button>
}

export default LogoutButton
