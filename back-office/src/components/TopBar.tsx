import React, { useState } from 'react'
import { Box, Image, Stack, Text, Avatar, IconButton } from '@chakra-ui/react'
import { BiMenu } from 'react-icons/bi'

import { SideBar, LogoutButton, DarkModeToggle, NotificationButton } from '../components'

interface ITopBar {
  isFixedNav?: boolean
}

const TopBar = ({ isFixedNav }: ITopBar) => {
  const [isVisible, setIsVisible] = useState(false)

  const logo = ''
  const notifs = 0
  const avatar = ''

  return (
    <>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        p=".5rem"
        // bg={bgClr}
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
          <DarkModeToggle />
          <NotificationButton notifs={10} />

          <IconButton
            aria-label="avatar-button"
            icon={<Avatar name="admin" src={avatar} size="sm" />}
            bg={'transparent'}
            _hover={{ bg: 'transparent' }}
          />

          <LogoutButton />
        </Stack>
      </Box>

      <SideBar isOpen={isVisible} onClose={() => setIsVisible(false)} />
    </>
  )
}

export default TopBar
