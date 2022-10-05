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
  useBreakpointValue,
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
    link: '/',
    label: 'Home'
  },
  {
    link: '/products',
    label: 'Products'
  },
  {
    link: '/contact',
    label: 'Contact'
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
  const user = false //useAuthStore((state: any) => state.user)

  const quantityTotal = useShoppingCartStore((state: any) => state.quantityTotal)

  const bgColor = useColorModeValue('white', 'gray_2')

  const isVisible = useBreakpointValue({ base: false, md: true })

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

        {isVisible && (
          <Flex align={'center'}>
            <SelectLanguage />
            <DarkModeToggle />
            <ShoppingCartIcon value={quantityTotal} />
            {user ? <NavMenuConnected avatar={user?.avatar} /> : <NavMenuUnConnected />}
          </Flex>
        )}
      </Flex>

      <View cond={isOpen} pb={4} display={{ md: 'none' }}>
        <Stack as={'nav'} spacing={4} align="center">
          {Links.map((el: any, idx: number) => (
            <NavLink key={idx} link={el?.link}>
              {el?.label}
            </NavLink>
          ))}
        </Stack>
        {!isVisible && (
          <Flex flexDir="column" align={'center'}>
            {user ? <NavMenuConnected avatar={user?.avatar} /> : <NavMenuUnConnected />}
          </Flex>
        )}
      </View>
    </Box>
  )
}

const NavMenuConnected = ({ avatar }: { avatar: string }) => {
  const bgColor = useColorModeValue('gray_9', 'gray_3')
  return (
    <Menu>
      <MenuButton
        as={Button}
        rounded={'full'}
        variant={'link'}
        cursor={'pointer'}
        minW={0}
        _focus={{ border: 'none', outline: 'none' }}
      >
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
  return (
    <Flex flexDir={['column', 'column', 'row']}>
      <Button colorScheme="green" mt={['1em', '', '0']}>
        Sign In
      </Button>
      <Button colorScheme="green" variant="outline" ml=".2em" mt={['1em', '', '0']}>
        Sign Up
      </Button>
    </Flex>
  )
}
