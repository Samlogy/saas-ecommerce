import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IMessage } from 'lib/interfaces'

import img from '../assets/images/home.png'

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
  title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit',
  img: img,
  text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repudiandae omnis molestiae non sequi laborum vel excepturi explicabo, ipsum sunt doloribus laudantium eum aperiam molestias modi veniam unde, laboriosam ex!',
  createdAt: new Date().toUTCString(),
  editedAt: new Date().toUTCString()
}

let messageStore = (set: SetState<IMessages>) => ({
  isVisible: false,
  message: {},
  messages: [testMsg],
  setVisible: (isVisible: boolean) => {
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
