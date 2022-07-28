import { Details } from 'components'
import { useNotificationStore } from 'store'

export default function MessageDetails() {
  const setVisibile = useNotificationStore((state: any) => state.setVisibile)
  const notification = useNotificationStore((state: any) => state.notification)
  const isVisible = useNotificationStore((state: any) => state.isVisible)

  return (
    <Details
      title="Notification"
      data={notification}
      isOpen={isVisible}
      onClose={() => setVisibile(false)}
    />
  )
}
