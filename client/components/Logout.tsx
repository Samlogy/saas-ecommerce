import { Button, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

import { useAuth } from '../store'

const Logout = ({ children }: { children?: React.ReactNode }) => {
  const [logOut, setLogOut] = useState(false)

  const router = useRouter()

  const textColor = useColorModeValue('black', 'gray.100')
  const textHoverColor = useColorModeValue('gray.100', 'white')

  const logout = useAuth((state: any) => state.logout)

  if (logOut) {
    logout()
    router.push('/login')
  }

  return (
    <Button
      leftIcon={<HiOutlineLogout />}
      variant="ghost"
      color={textColor}
      h="20px"
      px="0px"
      fontWeight="400"
      mr="0rem"
      w="full"
      _hover={{ border: 'none', color: textHoverColor }}
      onClick={() => setLogOut(true)}
    >
      Logout
    </Button>
  )
}

export default Logout
