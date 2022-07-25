import { Button, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

import { useAuthStore } from '../store'

export default function Logout() {
  const [logOut, setLogOut] = useState(false)

  const router = useRouter()

  const textColor = useColorModeValue('black', 'gray.100')

  const logout = useAuthStore((state: any) => state.logout)

  if (logOut) {
    logout()
    router.push('/login')
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
