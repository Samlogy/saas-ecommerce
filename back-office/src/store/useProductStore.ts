import create, { SetState } from 'zustand'
import { devtools } from 'zustand/middleware'
import { IProduct, IAction } from 'lib/interfaces'

const INIT_ACTIONS = {
  delete: false,
  disable: false,
  add: false,
  edit: false,
  details: false
}
// Auth Store
type IProducts = {
  product: IProduct
  products: IProduct[]
  action: IAction
  setAction: (action: IAction) => void
  setProduct: (data: IProduct) => void
  setProducts: (data: IProduct[]) => void
}

let productStore = (set: SetState<IProducts>) => ({
  action: INIT_ACTIONS,
  product: {},
  products: [],
  setAction: (newAction: IAction) => {
    set({ action: { ...newAction } })
  },
  setProduct: (product: IProduct) => {
    set({
      product: product
    })
  },
  setProducts: (products: IProduct[]) => {
    set(state => ({
      products: [...products, ...state.products]
    }))
  }
})

// @ts-ignore
productStore = devtools(productStore)
// @ts-ignore
const useProductStore = create<IProducts>(productStore)
export default useProductStore
