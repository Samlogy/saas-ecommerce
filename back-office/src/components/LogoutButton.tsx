import { Button, useColorMode } from '@chakra-ui/react'
import { FiLogOut } from 'react-icons/fi'
// import { useNavigate } from 'react-router-dom'
import { redirectToAuth, signOut } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

function LogoutButton() {
  // const { isLoading, isAuthenticated, error, logout } = useAuth0<{ name: string }>()
  // const navigate = useNavigate()

  const { colorMode: mode } = useColorMode()

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
    <Button
      rightIcon={<FiLogOut size={16} />}
      border="1px solid"
      borderColor={'accent_3'}
      _hover={{
        bg: mode === 'light' ? 'white' : 'accent_4'
      }}
      bg={mode === 'light' ? 'white' : 'accent_3'}
      color={mode === 'light' ? 'accent_3' : 'white'}
      onClick={() => onLogout()}
    >
      {' '}
      Log Out{' '}
    </Button>
  )
}

export default LogoutButton
