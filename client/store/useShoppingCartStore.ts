import create from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { IProduct } from '../lib/interfaces'

interface IShoppingCart {
  isOpen: boolean
  quantityTotal: number
  products: IProduct[]

  setIsFavourite: (id: number) => void
  setOpen: (isOpen: boolean) => void
  removeItems: () => void
  removeItem: (products: IProduct[], id: number) => void
  increaseQuantity: (products: IProduct[], id: number) => void
  decreaseQuantity: (products: IProduct[], id: number) => void
}

function increase(products: IProduct[], product: IProduct) {
  if (products.find((item: IProduct) => item.id === product.id) == null) {
    const items = [...products, { ...product, quantity: 1 }]
    return {
      products: items,
      quantityTotal: getQuantity(items)
    }
  } else {
    const items = products.map((item: IProduct) => {
      if (item.id === product.id) {
        return { ...item, quantity: item.quantity + 1 }
      } else {
        return item
      }
    })
    return {
      products: items,
      quantityTotal: getQuantity(items)
    }
  }
}
function decrease(products: IProduct[], id: number) {
  if (products.find((item: IProduct) => item.id === id)?.quantity === 1) {
    const items = products.filter((item: IProduct) => item.id !== id)
    return {
      products: items,
      quantityTotal: getQuantity(items)
    }
  } else {
    const items = products.map((item: IProduct) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity - 1 }
      } else {
        return item
      }
    })
    return {
      products: items,
      quantityTotal: getQuantity(items)
    }
  }
}

function removeOne(products: IProduct[], id: number) {
  const items = products.filter((item: IProduct) => item.id !== id)
  return {
    products: items,
    quantityTotal: getQuantity(items)
  }
}
function removeAll() {
  return {
    products: [],
    quantityTotal: 0
  }
}
function getQuantity(products: IProduct[]) {
  return products.reduce((quantity: number, proudct: IProduct) => proudct.quantity + quantity, 0)
}

function setFavourite(products: IProduct[], id: number) {
  return products.map((item: IProduct) => {
    if (item.id === id) return { ...item, isFavourite: !item.isFavourite }
    return item
  })
}

let shoppingCartStore = (set: any) => ({
  isOpen: false, // open / close --> shopping cart
  products: [], // all proudctq inside the cart
  quantityTotal: 0, // products qunatity

  setIsFavourite: (id: number) =>
    set((state: any) => ({ products: setFavourite(state.products, id) })),
  setOpen: (val: boolean) => set(() => ({ isOpen: !val })),
  removeItems: () => set(() => ({ ...removeAll() })),
  removeItem: (id: number) =>
    set((state: any) => ({
      ...removeOne(state.products, id)
    })),
  increaseQuantity: (product: IProduct) =>
    set((state: any) => ({
      ...increase(state.products, product)
    })),
  decreaseQuantity: (id: number) =>
    set((state: any) => ({
      ...decrease(state.products, id)
    }))
})

// @ts-ignore
shoppingCartStore = devtools(shoppingCartStore)
// @ts-ignore
shoppingCartStore = persist(shoppingCartStore, { name: 'shopping_cart' })
// @ts-ignore
const useShoppingCartStore = create<IShoppingCart>(shoppingCartStore)

export default useShoppingCartStore
