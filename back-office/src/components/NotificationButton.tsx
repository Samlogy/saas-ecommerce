import { IconButton, useColorMode, useColorModeValue, Button, Badge } from '@chakra-ui/react'
import { MdNotificationsActive } from 'react-icons/md'

const NotificationButton = ({ notifs }: { notifs: number }) => {
  //   const bgColor = useColorModeValue('gray.100', 'gray.700')
  //   const bgHoverColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <Button variant="ghost">
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
