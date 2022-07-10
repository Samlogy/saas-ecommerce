import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'

// Auth Store
type INotification = {
  notifications: any
  notification: any
  isVisible: boolean
  handleNotificationVisibility: (visible: boolean) => void
  setNotification: (data: any) => void
  setNotifications: (data: any) => void
}

const testMsg = {
  id: 1,
  title: 'message title',
  text: 'message text ...',
  createdAt: 'new Date()',
  editedAt: 'new Date()'
}

let notificationStore = (set: SetState<INotification>) => ({
  isVisible: false,
  notification: {},
  notifications: [testMsg],
  handleNotificationVisibility: (isVisible: boolean) => {
    set({ isVisible: isVisible })
  },
  setNotification: (notification: any) => {
    set(state => ({
      ...state,
      notification: notification
    }))
  },
  setNotifications: (notifications: any) => {
    set(state => ({
      ...state,
      notifications: [...notifications, ...state.notifications]
    }))
  }
})

// @ts-ignore
notificationStore = devtools(notificationStore)
// notificationStore = persist(notificationStore, { name: 'notifications' })

const useNotification = create<INotification>(notificationStore)

export default useNotification
