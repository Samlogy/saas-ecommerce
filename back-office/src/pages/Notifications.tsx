import { Listing } from 'components'
import { useNotificationStore } from 'store'

export default function Notifications() {
  const notifications = useNotificationStore((state: any) => state.notifications)
  return <Listing title="Notifications" data={notifications} />
}
