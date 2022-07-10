import { useColorModeValue } from '@chakra-ui/react'

import { Listing } from 'components'
import { useNotificationStore } from 'store'

export default function Notifications() {
  const notifications = useNotificationStore((state: any) => state.notifications)
  const bgColor = useColorModeValue('white', 'gray_2')
  return <Listing title="Notifications" data={notifications} />
}
