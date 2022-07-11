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

type IHome = {
  home: any
  actions: IAction
  setAction: (action: IAction) => void
  setHome: (data: any) => void
}

let homeStore = (set: SetState<IHome>) => ({
  actions: INIT_ACTIONS,
  home: {},
  setAction: (newAction: IAction) => {
    set({ actions: { ...newAction } })
  },
  setHome: (home: any) => {
    set({ home: home })
  }
})

// @ts-ignore
homeStore = devtools(homeStore)
// @ts-ignore
const useHomeStore = create<IHome>(homeStore)
export default useHomeStore
