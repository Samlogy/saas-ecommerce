import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'

import img from '../assets/images/home.png'

// Auth Store
type INotification = {
  notifications: any
  notification: any
  isVisible: boolean
  setVisible: (visible: boolean) => void
  setNotification: (data: any) => void
  setNotifications: (data: any) => void
}

const testMsg = {
  id: 1,
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  img: img,
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae omnis molestiae non sequi laborum vel excepturi explicabo, ipsum sunt doloribus laudantium eum aperiam molestias modi veniam unde, laboriosam ex!',
  createdAt: new Date().toUTCString(),
  editedAt: new Date().toUTCString()
}

let notificationStore = (set: SetState<INotification>) => ({
  isVisible: false,
  notification: {},
  notifications: [testMsg],
  setVisible: (isVisible: boolean) => {
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
