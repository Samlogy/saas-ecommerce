// import { useUser } from '@auth0/nextjs-auth0'
import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Stack,
  useColorModeValue,
  useDisclosure
} from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { FiSettings } from 'react-icons/fi'
import { DarkModeToggle, Logout, SelectLanguage, ShoppingCartIcon } from '../components'
import { Logo } from '../public/icons'
import { useShoppingCart } from '../store'

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

  const textColor = useColorModeValue('black', 'gray.100')

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
          bg: useColorModeValue('gray.200', 'gray.700')
        }}
      >
        {children}
      </Box>
    </Link>
  )
}

export default function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // const isLogged = useAuth((state: any) => state.isLogged);
  // const user = useAuth((state: any) => state.user);

  const products = useShoppingCart((state: any) => state.products)

  const bgColor = useColorModeValue('gray.100', 'gray.700')

  const user = {}

  return (
    <Box bg={bgColor} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          aria-label={'Toggle Menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />

        <HStack spacing={8} alignItems={'center'}>
          <Box>
            {' '}
            <Logo />{' '}
          </Box>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((link: any) => (
              <NavLink key={link.link} link={link.link}>
                {' '}
                {link.name}{' '}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex alignItems={'center'}>
          <SelectLanguage />
          <DarkModeToggle />
          <ShoppingCartIcon value={products.length} />
          {user ? <NavMenuConnected avatar={user?.picture} /> : <NavMenuUnConnected />}
        </Flex>
      </Flex>

      {isOpen ? (
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
      ) : null}
    </Box>
  )
}

const NavMenuConnected = ({ avatar }: { avatar: string }) => {
  const textColor = useColorModeValue('black', 'gray.100')
  const textHoverColor = useColorModeValue('gray.100', 'white')
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const bgHoverColor = useColorModeValue('gray.700', 'gray.500')

  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        <Avatar size={'sm'} src={avatar} />
      </MenuButton>
      <MenuList bg={bgColor}>
        <MenuItem
          bg={bgColor}
          _hover={{ bg: bgHoverColor, color: textHoverColor }}
          icon={<FiSettings />}
        >
          <Link href="/profile"> My Account </Link>
        </MenuItem>
        <MenuDivider />
        <MenuItem _hover={{ bg: bgHoverColor, color: textHoverColor }}>
          {' '}
          <Logout />{' '}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

const NavMenuUnConnected = () => {
  const textColor = useColorModeValue('black', 'gray.100')

  return (
    <Flex>
      {/* <Box as="span" color={textColor} _hover={{ textDecor: 'underline' }}> <a href="/register"> Sign Up </a> </Box>
      <Box w=".5rem"> </Box> */}
      <Box as="span" color={textColor} _hover={{ textDecor: 'underline' }}>
        {' '}
        <a href="/api/auth/login"> Sign In </a>{' '}
      </Box>
    </Flex>
  )
}
