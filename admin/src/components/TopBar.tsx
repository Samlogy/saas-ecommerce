import {
  Avatar,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'
import { BiMenu } from 'react-icons/bi'

import {
  DarkModeToggle,
  LanguageSwitcher,
  LogoutButton,
  MessageButton,
  MessageDetails,
  NotificationButton,
  NotificationDetails,
  SideBar
} from './'

interface ITopBar {
  isFixedNav?: boolean
}

export default function TopBar({ isFixedNav }: ITopBar) {
  const [isVisible, setIsVisible] = useState(false)

  const user = { name: '' }
  const logo = ''
  const avatar = ''

  const bgColor = useColorModeValue('white', 'gray_2')

  return (
    <>
      <Flex
        flexDir="row"
        justify="space-between"
        align="center"
        p=".5rem"
        boxShadow="md"
        w="100%"
        pos={isFixedNav ? 'fixed' : 'inherit'}
        zIndex={999}
        bg={bgColor}
      >
        <IconButton
          aria-label="side-bar-button"
          icon={<BiMenu size="24" onClick={() => setIsVisible(true)} />}
          bg={useColorModeValue('gray_7', 'gray_3')}
        />

        <Text fontSize="lg" fontWeight="500" display={['none', '', 'flex', '']}>
          ADMIN Dashboard
        </Text>

        <Flex alignItems={['flex-end', 'center']}>
          <LanguageSwitcher />
          <DarkModeToggle />
          <NotificationButton />
          <MessageButton />
          <CustomMenuList icon={<Avatar name="admin" src={''} size="sm" />}>
            <LogoutButton />
          </CustomMenuList>
        </Flex>
      </Flex>

      <SideBar isOpen={isVisible} onClose={() => setIsVisible(false)} />
      <NotificationDetails />
      <MessageDetails />
    </>
  )
}

function CustomMenuList({ children, icon }: { children: React.ReactNode; icon?: any }) {
  return (
    <Menu>
      <MenuButton as={Button} rounded={'full'} variant={'link'} cursor={'pointer'} minW={0}>
        {icon && icon}
      </MenuButton>
      <MenuList display="flex" justifyContent="center">
        {children}
      </MenuList>
    </Menu>
  )
}
