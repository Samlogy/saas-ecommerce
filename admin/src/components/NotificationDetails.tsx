import { Details } from './'
import { useNotificationStore } from '../store'

export default function NotificationDetails() {
  const setVisible = useNotificationStore((state: any) => state.setVisible)
  const notification = useNotificationStore((state: any) => state.notification)
  const isVisible = useNotificationStore((state: any) => state.isVisible)

  return (
    <Details
      title="Notification"
      data={notification}
      isOpen={isVisible}
      onClose={() => setVisible(false)}
    />
  )
}
