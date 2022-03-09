import Link from 'next/link'

import { Logo } from "../public/icons"


import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  Stack,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure, useColorModeValue, 
} from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useRouter } from 'next/router';

import { Logout, SelectLanguage, DarkModeToggle, ShoppingCartIcon } from "../components"
import { useAuth, useShoppingCart } from "../store";

const Links = [
  {
    link: "/",
    name: "Home"
  },
  {
    link: "/products",
    name: "Products"
  },
  {
    link: "/contact",
    name: "Contact Us"
  },
];

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => {
  const { pathname } = useRouter();
  const isActive = pathname === `${link}` 

  const textColor = useColorModeValue('black', 'gray.100')

  return(
    <Link href={`${link}`}>
      <Box px={2} py={1} rounded={'md'} color={isActive ? 'blue.600' : textColor} 
          _hover={{ textDecoration: 'none', cursor: 'pointer', bg: useColorModeValue('gray.200', 'gray.700') }}> 
        {children}
      </Box>
    </Link>
  )
};

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isLogged = useAuth((state: any) => state.isLogged);
  const user = useAuth((state: any) => state.user);

  const total = useShoppingCart((state: any) => state.total)

  const bgColor = useColorModeValue('gray.100', 'gray.700')
  

  return (
      <Box bg={bgColor} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton size={'md'} icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            aria-label={'Toggle Menu'} display={{ md: 'none' }} onClick={isOpen ? onClose : onOpen}
          />

          <HStack spacing={8} alignItems={'center'}>
            <Box> <Logo /> </Box>
            <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
              {Links.map((link: any) => (
                <NavLink key={link.link} link={link.link}> {link.name} </NavLink>
              ))}
            </HStack>
          </HStack>

          <Flex alignItems={'center'}>
            <SelectLanguage />
            <DarkModeToggle />
            <ShoppingCartIcon value={700} />
            { isLogged ? <NavMenuConnected avatar={user.avatar} /> : <NavMenuUnConnected /> }
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link: any) => (
                <NavLink key={link.link} link={link.link}> {link.name} </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
  );
}


const NavMenuConnected = ({ avatar }: { avatar: string }) => {
  const textColor = useColorModeValue('black', 'gray.100')
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const bgHoverColor = useColorModeValue('gray.700', 'gray.500')

  return(
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} src={avatar} />
      </MenuButton>
      <MenuList bg={bgColor}>
        <MenuItem color={textColor} bg={bgColor} _hover={{ bg: bgHoverColor }}> <Link href="/profile"> My Account </Link> </MenuItem>
        <MenuDivider />
        <MenuItem _hover={{ bg: bgHoverColor }}> <Logout /> </MenuItem>
      </MenuList>
    </Menu>
  )
}

const NavMenuUnConnected = () => {
  const textColor = useColorModeValue('black', 'gray.100')

  return(
    <Flex>
      <Box as="span" color={textColor} _hover={{ textDecor: 'underline' }}> <Link href="/register"> Sign Up </Link> </Box>
      <Box w=".5rem"> </Box>
      <Box as="span" color={textColor} _hover={{ textDecor: 'underline' }}> <Link href="/login"> Sign In </Link> </Box>
    </Flex>
  )
}
