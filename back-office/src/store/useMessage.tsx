import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'

// Auth Store
type IMessages = {
  message: any
  messages: any
  isVisible: boolean
  handleMessageVisibility: (visible: boolean) => void
  setMessage: (data: any) => void
  setMessages: (data: any) => void
}

let messageStore = (set: SetState<IMessages>) => ({
  isVisible: false,
  message: {},
  messages: [
    {
      id: 1,
      title: 'title',
      text: 'text...',
      createdAt: '19/03/2022'
    },
    {
      id: 2,
      title: 'title 2',
      text: 'text 2...',
      createdAt: '20/03/2022'
    }
  ],
  handleMessageVisibility: (isVisible: boolean) => {
    set({ isVisible: isVisible })
  },
  setMessage: (message: any) => {
    set(state => ({
      ...state,
      message: message
    }))
  },
  setMessages: (messages: any) => {
    set(state => ({
      ...state,
      messages: [...messages, ...state.messages]
    }))
  }
})

// @ts-ignore
messageStore = devtools(messageStore)
// notificationStore = persist(notificationStore, { name: 'notifications' })

const useMessage = create<IMessages>(messageStore)

export default useMessage
