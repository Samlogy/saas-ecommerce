import { Button, Badge, Box } from '@chakra-ui/react'
import { MdNotificationsActive } from 'react-icons/md'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Dropdown } from '../components'

const NotificationButton = () => {
  const [notifications, setNotifications] = useState<any>([])

  const notifs = notifications.length

  useEffect(() => {
    // load notification data (useQuery)
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
    setNotifications(data)
  }, [])

  return (
    <Dropdown data={notifications} icon={<CustomButton notifs={notifs} />}>
      <Box textAlign="center" color="blue.500">
        <Link to="/notifications"> View All </Link>
      </Box>
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
