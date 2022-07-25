import create, { SetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

let filterStore = (set: SetState<any>) => ({
  filters: {
    search: '',
    rate: 1,
    categories: [],
    discount: '',
    price: [10, 30],
    condition: '',
    sort: ''
  },
  setFilters: (data: any) => set(() => ({ filters: { ...data } }))
})

// @ts-ignore
filterStore = devtools(filterStore)

const useFilterStore = create<any>(filterStore)

export default useFilterStore
