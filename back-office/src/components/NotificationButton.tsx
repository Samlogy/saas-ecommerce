import { Button, Badge, Box, MenuItem, Text } from '@chakra-ui/react'
import { MdNotificationsActive } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown, View } from 'components'
import { useNotificationStore } from '../store'

const NotificationButton = () => {
  const notifications = useNotificationStore((state: any) => state.notifications)
  const handleNotificationVisibility = useNotificationStore(
    (state: any) => state.handleNotificationVisibility
  )
  const setNotification = useNotificationStore((state: any) => state.setNotification)

  const notifs = notifications.length

  useEffect(() => {
    // load notification data (useQuery) --> delete useEffect & state related to it
    const data = [
      {
        id: 1,
        title: 'title',
        text: 'text...',
        createdAt: '19/03/2022'
      },
      {
        id: 2,
        title: 'title',
        text: 'text...',
        createdAt: '19/03/2022'
      },
      {
        id: 3,
        title: 'title',
        text: 'text...',
        createdAt: '19/03/2022'
      }
    ]
    // setNotifications(data)
  }, [])

  const handleClickNotification = (data: any) => {
    handleNotificationVisibility(true)
    setNotification(data)
  }

  return (
    <Dropdown icon={<CustomButton notifs={notifs} />}>
      <View cond={notifications.length > 0}>
        {notifications?.map((el: any) => (
          <MenuItem
            key={el.id}
            flexDir={'row'}
            justifyContent="space-between"
            onClick={() => handleClickNotification(el)}
          >
            <Text> {el.title} </Text>
            <Text> {el.text} </Text>
          </MenuItem>
        ))}
        <Box textAlign="center" color="blue.500">
          <Link to="/notifications"> View All </Link>
        </Box>
      </View>

      <View cond={notifications.length === 0}>
        <Text textAlign={'center'} color="gray.500">
          {' '}
          There's no new Notification{' '}
        </Text>
      </View>
    </Dropdown>
  )
}

const CustomButton = ({ notifs }: { notifs: number }) => {
  const btnRef = React.useRef(null)
  return (
    <Button variant="ghost" ref={btnRef}>
      {notifs > 0 ? (
        <Badge variant="solid" colorScheme="red" borderRadius="2xl">
          {notifs > 99 ? '99+' : notifs}
        </Badge>
      ) : (
        ''
      )}
      <MdNotificationsActive size="24" color={'#ccc'} />
    </Button>
  )
}
export default NotificationButton
