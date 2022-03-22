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
  messages: [],
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

const useMessage = create<IMessages>(messageStore)

export default useMessage
