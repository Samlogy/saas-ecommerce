import { Button, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

//import { useAuthStore } from '../store'
//import { redirectToAuth, signOut } from 'supertokens-auth-react/recipe/thirdpartyemailpassword'

export default function LogoutButton() {
  const [logOut, setLogOut] = useState(false)

  const textColor = useColorModeValue('black', 'gray.100')
  const navigate = useNavigate()

  //const logout = useAuthStore((state: any) => state.logout)

  if (logOut) {
    //logout()
    navigate('/login')
  }
  return (
    <Button
      leftIcon={<HiOutlineLogout />}
      variant="solid"
      colorScheme="green"
      h="2rem"
      p=".5rem 0"
      fontWeight="400"
      mr="0rem"
      w="70%"
      onClick={() => setLogOut(true)}
    >
      Logout
    </Button>
  )
}
