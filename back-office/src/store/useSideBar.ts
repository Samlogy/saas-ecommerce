import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'

// Auth Store
type ISideBar = {
  isVisible: boolean
  handleSideBarVisibility: (visible: boolean) => void
}

let sideBarStore = (set: SetState<ISideBar>) => ({
  isVisible: false,
  handleSideBarVisibility: (isVisible: boolean) => {
    set({ isVisible: isVisible })
  }
})

// @ts-ignore
sideBarStore = devtools(sideBarStore)

const useSideBar = create<ISideBar>(sideBarStore)

export default useSideBar
