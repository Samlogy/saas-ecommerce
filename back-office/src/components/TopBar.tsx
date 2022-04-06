import React, { useState } from 'react'
import { Box, Image, Stack, Text, Avatar, IconButton, MenuItem } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'
// import { useAuth0 } from '@auth0/auth0-react'

import {
  SideBar,
  LogoutButton,
  DarkModeToggle,
  NotificationButton,
  Dropdown,
  NotificationDetails,
  LanguageSwitcher,
  MessageButton,
  MessageDetails
} from 'components'

interface ITopBar {
  isFixedNav?: boolean
}

const TopBar = ({ isFixedNav }: ITopBar) => {
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

        <Stack direction={['row']} alignItems={['flex-end', 'center']}>
          <LanguageSwitcher />
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
