import Head from 'next/head'
import Link from 'next/link'

import { Logo } from "../public/icons"


import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
} from '@chakra-ui/react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineShoppingCart } from 'react-icons/ai';
import { Logout } from "../components"

const Links = [
  {
    link: "/",
    name: "Home"
  },
  {
    link: "products",
    name: "Products"
  },
  {
    link: "contact",
    name: "Contact Us"
  },
];

const NavLink = ({ children, link }: { children: ReactNode, link: string }) => (
  <Link href={`/${link}`}>
    <Box px={2} py={1} rounded={'md'} _hover={{ textDecoration: 'none', bg: useColorModeValue('gray.200', 'gray.700') }}> 
      {children}
    </Box>
  </Link>
);

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4}>
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
            <IconButton aria-label='Shopping Cart' icon={<AiOutlineShoppingCart size={24} />} mr="1rem" />
            <Menu>
              <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
                <Avatar size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
              </MenuButton>
              <MenuList>
                <MenuItem> <Link href="/profile"> My Account </Link> </MenuItem>
                <MenuDivider />
                <MenuItem> <Logout /> </MenuItem>
              </MenuList>
            </Menu>
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

