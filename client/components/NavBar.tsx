import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { DarkModeToggle, Logout, SelectLanguage, ShoppingCartIcon, View } from '../components'
import { Logo } from '../public/icons'
import { useAuthStore, useShoppingCartStore } from '../store'

const Links = [
  {
    link: '/',
    name: 'Home'
  },
  {
    link: '/products',
    name: 'Products'
  },
  {
    link: '/contact',
    name: 'Contact Us'
  }
]

const NavLink = ({ children, link }: { children: ReactNode; link: string }) => {
  const { pathname } = useRouter()
  const isActive = pathname === `${link}`

  const textColor = useColorModeValue('black', '#edf2f7')

  return (
    <Link href={`${link}`}>
      <Box
        px={2}
        py={1}
        rounded={'md'}
        color={isActive ? 'accent_3' : textColor}
        _hover={{
          textDecoration: 'none',
          cursor: 'pointer',
          bg: useColorModeValue('gray.200', '#2D3748')
        }}
      >
        {children}
      </Box>
    </Link>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const login = useAuthStore((state: any) => state.login)
  const user = useAuthStore((state: any) => state.user)

  const quantityTotal = useShoppingCartStore((state: any) => state.quantityTotal)

  const bgColor = useColorModeValue('white', 'gray_3')

  return (
    <Box bg={bgColor} px={4} pos="fixed" w="full" boxShadow={'md'} zIndex="100">
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={
            isOpen ? (
              <Flex justifyContent={'center'} alignItems="center">
                <AiOutlineClose />
              </Flex>
            ) : (
              <Flex justifyContent={'center'} alignItems="center">
                <AiOutlineMenu />
              </Flex>
            )
          }
          aria-label={'Toggle Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={'center'}>
          <Box>
            <Logo />
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link: any) => (
              <NavLink key={link.link} link={link.link}>
                {link.name}{' '}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems={'center'}>
          <SelectLanguage />
          <DarkModeToggle />
          <ShoppingCartIcon value={quantityTotal} />
          {user ? <NavMenuConnected avatar={user?.avatar} /> : <NavMenuUnConnected />}
        </Flex>
      </Flex>

      <View cond={isOpen}>
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link: any) => (
              <NavLink key={link.link} link={link.link}>
                {' '}
                {link.name}{' '}
              </NavLink>
            ))}
          </Stack>
        </Box>
      </View>
    </Box>
  )
}

const NavMenuConnected = ({ avatar }: { avatar: string }) => {
  const textHoverColor = useColorModeValue('#edf2f7', 'white')
  const bgColor = useColorModeValue('#edf2f7', '#2D3748')
  const bgHoverColor = useColorModeValue('#2D3748', '#718096')

  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} src={avatar} />
      </MenuButton>
      <MenuList bg={bgColor} display="flex" flexDir={'column'} justify="center" align="center">
        <Link href="/profile"> My Account </Link>
        <Logout />
      </MenuList>
    </Menu>
  )
}

const NavMenuUnConnected = () => {
  const textColor = useColorModeValue('black', '#edf2f7')

  return (
    <Flex>
      {/* <Box as="span" color={textColor} _hover={{ textDecor: 'underline' }}> <a href="/register"> Sign Up </a> </Box>
      <Box w=".5rem"> </Box> */}
      <Box as="span" color={textColor} _hover={{ textDecor: 'underline' }}>
        <a href="/api/auth/login"> Sign In </a>
      </Box>
    </Flex>
  )
}
