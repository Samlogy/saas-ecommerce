import create, { SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

interface IUser {
  id: number
  fullName: string
  email: string
  address_1: string
  address_2?: string
  avatar?: string
  mobile?: string
  username: string
  createdAt: Date
  editedAt: Date
  // add vendor details
}
// Auth Store
interface IAuth {
  user: IUser | {}
  isLogged: boolean
  login: (data: IUser) => void
  logout: () => void
}

const userTest = {
  id: 1,
  fullName: 'sam sam',
  email: 'sam@gmail.com',
  username: 'sam',
  createdAt: '12-05-2012',
  editedAt: '12-05-2012'
}

let authStore = (set: SetState<IAuth>) => ({
  isLogged: false,
  user: userTest,
  login: (data: IUser) => set(() => ({ isLogged: true, user: data })),
  logout: () => set(() => ({ isLogged: false, user: {} }))
})

// @ts-ignore
authStore = devtools(authStore)
// @ts-ignore
authStore = persist(authStore, { name: 'auth_data' })

const useAuth = create<IAuth>(authStore)

export default useAuth
