import { Box, IconButton, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import { MdNotificationsActive, MdNotificationsNone } from 'react-icons/md'
import { Link } from 'react-router-dom'

import { View } from 'components'
import { useNotificationStore } from '../store'

export default function NotificationButton() {
  const notifications = useNotificationStore((state: any) => state.notifications)
  const setVisible = useNotificationStore((state: any) => state.setVisible)
  const setNotification = useNotificationStore((state: any) => state.setNotification)

  const handleClickNotification = (data: any) => {
    setVisible(true)
    setNotification(data)
  }

  const messageIcon =
    notifications.length > 0 ? (
      <MdNotificationsActive size={20} />
    ) : (
      <MdNotificationsNone size={20} />
    )
  return (
    <Menu>
      <MenuButton as={IconButton} icon={messageIcon} bg="transparent"></MenuButton>
      <MenuList>
        {notifications.length > 0 ? (
          notifications?.map((item: any) => (
            <MenuItem
              key={item.id}
              flexDir={'column'}
              justifyContent="space-between"
              onClick={() => handleClickNotification(item)}
            >
              <Text isTruncated> {item.title} </Text>
              <Text isTruncated> {item.text} </Text>
            </MenuItem>
          ))
        ) : (
          <Text textAlign={'center'} color="gray_4">
            There's no new Message{' '}
          </Text>
        )}

        <View cond={notifications.length > 0}>
          <MenuItem justifyContent={'center'}>
            <Box color="accent_4">
              <Link to="/notifications"> View All </Link>
            </Box>
          </MenuItem>
        </View>
      </MenuList>
    </Menu>
  )
}
