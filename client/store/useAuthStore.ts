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

const user = {
  isVendor: true,
  isCustomer: true,
  avatar: '/images/profile.jpg',
  fullName: 'sam',
  email: 'sam@gmail.com',
  mobile: '0540498180',
  address: 'tizi-york',
  createdAt: '',
  editedAt: ''
}
const customer = {
  shippingMethod: 'express',
  shippingAddress:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus libero magni nam eveniet, exercitationem',
  shippingAddress_2:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus libero magni nam eveniet, exercitationem',
  cityCustomer: 'tizi-york',
  countryCustomer: 'algeria',
  stateCustomer: 'tizi-yotk',
  zipCodeCustomer: '15007'
}
const vendor = {
  companyName: 'sam solutions',
  companyAddress:
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci accusamus libero magni nam eveniet, exercitationem',
  companyCity: 'tizi-york',
  companyCountry: 'algeria',
  companyState: 'tizi-york',
  companyZipCode: '15007',
  companyLogo: '/images/profile.jpg'
}

const userTest = {
  ...user,
  ...customer,
  ...vendor
}

let authStore = (set: SetState<IAuth>) => ({
  isLogged: true,
  user: userTest,
  login: (data: IUser) => set(() => ({ isLogged: true, user: data })),
  logout: () => set(() => ({ isLogged: false, user: {} }))
})

// @ts-ignore
authStore = devtools(authStore)
// @ts-ignore
//authStore = persist(authStore, { name: 'auth-data' })

const useAuthStore = create<IAuth>(authStore)

export default useAuthStore
