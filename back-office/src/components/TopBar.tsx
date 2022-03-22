import React, { useState } from 'react'
import { Box, Image, Stack, Text, Avatar, IconButton, MenuItem } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
import { useAuth0 } from '@auth0/auth0-react'

import {
  SideBar,
  LogoutButton,
  DarkModeToggle,
  NotificationButton,
  Dropdown,
  NotificationDetails,
  LanguageSelector,
  MessageButton,
  MessageDetails
} from 'components'

interface ITopBar {
  isFixedNav?: boolean
}

const TopBar = ({ isFixedNav }: ITopBar) => {
  const [isVisible, setIsVisible] = useState(false)

  // load user data --> auth0 hook
  const { isLoading, isAuthenticated, error, user } = useAuth0<{ name: string }>()
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

        <Stack display="flex" flexDirection="row" alignItems="center">
          <Image
            boxSize="45px"
            borderRadius="md"
            mr=".5rem"
            src={logo}
            fallbackSrc="https://via.placeholder.com/150"
          />

          <Text fontSize="lg" fontWeight="500">
            ADMIN Panel
          </Text>
        </Stack>

        <Stack direction={['column', 'row']} alignItems={['flex-end', 'center']}>
          <LanguageSelector />
          <DarkModeToggle />
          <NotificationButton />
          <MessageButton />

          <Dropdown icon={<Avatar name="admin" src={user?.name} size="sm" />}>
            <MenuItem flexDir={'column'}>
              {' '}
              <LogoutButton />{' '}
            </MenuItem>
          </Dropdown>
        </Stack>
      </Box>

      <SideBar isOpen={isVisible} onClose={() => setIsVisible(false)} />
      <NotificationDetails />
      <MessageDetails />
    </>
  )
}

export default TopBar
