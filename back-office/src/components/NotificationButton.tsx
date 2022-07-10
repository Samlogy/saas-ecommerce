import { Button, Badge, Box, MenuItem, Text } from '@chakra-ui/react'
import { MdNotificationsActive } from 'react-icons/md'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown, View } from 'components'
import { useNotificationStore } from '../store'

const NotificationButton = () => {
  const notifications = useNotificationStore((state: any) => state.notifications)
  const setVisible = useNotificationStore((state: any) => state.setVisible)
  const setNotification = useNotificationStore((state: any) => state.setNotification)

  const notifs = notifications.length

  const handleClickNotification = (data: any) => {
    setVisible(true)
    setNotification(data)
  }

  return (
    <Dropdown icon={<CustomButton notifs={notifs} />}>
      <View cond={notifications.length > 0}>
        {notifications?.map((item: any) => (
          <MenuItem
            key={item.id}
            flexDir={'row'}
            justifyContent="space-between"
            onClick={() => handleClickNotification(item)}
          >
            <Text> {item.title} </Text>
            <Text> {item.text} </Text>
          </MenuItem>
        ))}
        <Box textAlign="center" color="accent_4">
          <Link to="/notifications"> View All </Link>
        </Box>
      </View>

      <View cond={notifications.length === 0}>
        <Text textAlign={'center'} color="gray_4">
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
    <Button variant="ghost" _hover={{ bg: 'transparent' }} className="hover-icon" ref={btnRef}>
      {notifs > 0 ? (
        <Badge variant="solid" colorScheme="red" borderRadius="2xl">
          {notifs > 99 ? '99+' : notifs}
        </Badge>
      ) : (
        ''
      )}
      <MdNotificationsActive size="20" color={'#ccc'} />
    </Button>
  )
}
export default NotificationButton
