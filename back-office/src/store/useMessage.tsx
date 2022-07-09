import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IMessage } from 'lib/interfaces'

// Auth Store
type IMessages = {
  message: any
  messages: any
  isVisible: boolean
  setVisibile: (isVisible: boolean) => void
  setMessage: (data: IMessage) => void
  setMessages: (data: IMessage[]) => void
}

let messageStore = (set: SetState<IMessages>) => ({
  isVisible: false,
  message: {},
  messages: [],
  setVisibile: (isVisible: boolean) => {
    set({ isVisible: isVisible })
  },
  setMessage: (message: IMessage) => {
    set(state => ({
      ...state,
      message: message
    }))
  },
  setMessages: (messages: IMessage[]) => {
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
