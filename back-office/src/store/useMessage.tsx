import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IMessage } from 'lib/interfaces'

// Auth Store
type IMessages = {
  message: IMessage
  messages: IMessage[]
  isVisible: boolean
  setVisibile: (isVisible: boolean) => void
  setMessage: (data: IMessage) => void
  setMessages: (data: IMessage[]) => void
}

const testMsg = {
  id: 1,
  title: 'message title',
  text: 'message text ...',
  createdAt: 'new Date()',
  editedAt: 'new Date()'
}

let messageStore = (set: SetState<IMessages>) => ({
  isVisible: false,
  message: {},
  messages: [testMsg],
  setVisibile: (isVisible: boolean) => {
    set({ isVisible: isVisible })
  },
  setMessage: (message: IMessage) => {
    set({ message: message })
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
// @ts-ignore
const useMessage = create<IMessages>(messageStore)
export default useMessage
