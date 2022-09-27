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
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { ReactNode, useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { DarkModeToggle, Logout, SelectLanguage, ShoppingCartIcon, View } from '../components'
import { Logo } from '../public/icons'

import { useAuthStore, useShoppingCartStore } from '../store'

const Links = [
  {
    link: '/#home',
    label: 'Home'
  },
  {
    link: '/#about',
    label: 'About'
  },
  {
    link: '/#services',
    label: 'Services'
  },
  {
    link: '/#projects',
    label: 'Projects'
  },
  {
    link: '/blog',
    label: 'Blog'
  }
]
interface INavLink {
  children: ReactNode
  link: string
  [restProps: string]: any
}

function NavLink({ children, link, ...restProps }: INavLink) {
  const linkColor = useColorModeValue('gray_2', 'gray_7')

  return (
    <Link href={`${link}`} passHref>
      <Box
        p=".5em"
        rounded={'md'}
        color={linkColor}
        w="auto"
        textTransform="capitalize"
        _hover={{ textDecor: 'none', cursor: 'pointer' }}
        {...restProps}
      >
        <a className="link-effect center after">{children}</a>
      </Box>
    </Link>
  )
}

export default function NavBar() {
  const [isOpen, setOpen] = useState(false)

  const login = useAuthStore((state: any) => state.login)
  const user = useAuthStore((state: any) => state.user)

  const quantityTotal = useShoppingCartStore((state: any) => state.quantityTotal)

  const bgColor = useColorModeValue('white', 'gray_2')

  const menuIcon = (
    <Flex justify="center" align="center">
      {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
    </Flex>
  )

  return (
    <Box bg={bgColor} px="2rem" pos="fixed" w="full" boxShadow={'md'} zIndex={200}>
      <Flex h="9vh" align="center" justify="space-between">
        <IconButton
          size={'md'}
          icon={menuIcon}
          aria-label={'toggle-menu'}
          display={{ md: 'none' }}
          onClick={isOpen ? () => setOpen(false) : () => setOpen(true)}
          _focus={{ outline: 'none' }}
        />

        <Link href="/" passHref>
          <Logo />
        </Link>

        <HStack spacing={8} align={'center'}>
          <HStack as={'nav'} spacing={4} display={{ base: 'none', md: 'flex' }}>
            {Links.map((el: any, idx: number) => (
              <NavLink key={idx} link={el?.link}>
                {el?.label}
              </NavLink>
            ))}
          </HStack>
        </HStack>

        <Flex align={'center'}>
          <SelectLanguage />
          <DarkModeToggle />
          <ShoppingCartIcon value={quantityTotal} />
          {user ? <NavMenuConnected avatar={user?.avatar} /> : <NavMenuUnConnected />}
        </Flex>
      </Flex>

      <View cond={isOpen} pb={4} display={{ md: 'none' }}>
        <Stack as={'nav'} spacing={4} align="center">
          {Links.map((el: any, idx: number) => (
            <NavLink key={idx} link={el?.link}>
              {el?.label}
            </NavLink>
          ))}
        </Stack>
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
      <MenuList bg={bgColor}>
        <Flex display="flex" flexDir={'column'} justify="center" align="center">
          <Link href="/profile"> My Account </Link>
          <Logout />
        </Flex>
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
