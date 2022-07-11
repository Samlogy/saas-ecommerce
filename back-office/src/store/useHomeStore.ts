import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IAction } from 'lib/interfaces'

const INIT_ACTIONS = {
  delete: false,
  disable: false,
  add: false,
  edit: false,
  details: false
}
const INIT_HOME = {
  services: [],
  questionsAnswers: [],
  deals: {},
  about: {}
}

type IHome = {
  allData: any
  actions: IAction
  singleData: any
  setAction: (action: IAction) => void
  setAllData: (allData: any) => void
  setSingleData: (singleData: any) => void
}

let homeStore = (set: SetState<IHome>) => ({
  actions: INIT_ACTIONS,
  allData: INIT_HOME,
  singleData: {},
  setAction: (newAction: IAction) => {
    set({ actions: { ...newAction } })
  },
  setAllData: (allData: any) => {
    set({ allData: allData })
  },
  setSingleData: (singleData: any) => {
    set({ singleData: singleData })
  }
})

// @ts-ignore
homeStore = devtools(homeStore)
// @ts-ignore
const useHomeStore = create<IHome>(homeStore)
export default useHomeStore
