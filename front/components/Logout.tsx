import React, { FC, useState } from 'react'
import { Button, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { HiOutlineLogout } from 'react-icons/hi'

// import { useAuth } from "../store";

const Logout: FC = () => {
  // const [loggedOut, setLoggedOut] = useState(false);

  // const notLogged = useAuth((state: any) => state.notLogged);
  const router = useRouter()

  const textColor = useColorModeValue('black', 'gray.100')
  const textHoverColor = useColorModeValue('gray.100', 'white')

  // const logging_out = () => {
  //     // notLogged();
  //     router.push('/login')
  // };

  // if ( loggedOut ) logging_out();

  return (
    <Button
      leftIcon={<HiOutlineLogout />}
      variant="ghost"
      color={textColor}
      h="20px"
      px="0px"
      fontWeight="400"
      mr="0rem"
      _hover={{ border: 'none', color: textHoverColor }}
      // onClick={() => setLoggedOut(true)}
    >
      <a href="/api/auth/logout"> Logout </a>
    </Button>
  )
}

export default Logout
