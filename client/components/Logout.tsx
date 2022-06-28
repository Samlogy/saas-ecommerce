import { Button, useColorModeValue } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'
import { HiOutlineLogout } from 'react-icons/hi'

// import { useAuth } from "../store";

const Logout = ({ children }: { children?: React.ReactNode }) => {
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
      w="full"
      _hover={{ border: 'none', color: textHoverColor }}
      // onClick={() => setLoggedOut(true)}
    >
      Logout
    </Button>
  )
}

export default Logout
