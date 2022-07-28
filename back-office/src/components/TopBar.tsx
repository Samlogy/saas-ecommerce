import {
  Avatar,
  Box,
  IconButton,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList
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
} from 'components'

interface ITopBar {
  isFixedNav?: boolean
}

export default function TopBar({ isFixedNav }: ITopBar) {
  const [isVisible, setIsVisible] = useState(false)

  const user = { name: '' }
  const logo = ''
  const avatar = ''

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p=".5rem"
        boxShadow="md"
        width="100%"
        pos={isFixedNav ? 'fixed' : 'inherit'}
        zIndex="999"
      >
        <IconButton
          aria-label="side-bar-button"
          icon={<BiMenu size="24" onClick={() => setIsVisible(true)} />}
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
      </Box>

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
      <MenuList>{children}</MenuList>
    </Menu>
  )
}
