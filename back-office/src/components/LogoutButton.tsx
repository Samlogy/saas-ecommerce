import { Button } from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'
// import { useNavigate } from 'react-router-dom'
import { redirectToAuth, signOut } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

function LogoutButton() {
  // const { isLoading, isAuthenticated, error, logout } = useAuth0<{ name: string }>()
  // const navigate = useNavigate()

  const onLogout = async () => {
    // isAuthenticated && removeState('auth-admin')
    // logout({ returnTo: window.location.origin })
    await signOut()
    redirectToAuth()
    // navigate('/auth')
  }

  // if (isLoading) {
  //   return <div>Loading...</div>
  // }
  // if (error) {
  //   return <div>Oops... {error.message}</div>
  // }

  return (
    <Button rightIcon={<FiLogOut />} onClick={() => onLogout()}>
      {' '}
      Log Out{' '}
    </Button>
  )
}

export default LogoutButton
