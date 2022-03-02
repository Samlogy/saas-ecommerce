import create, { SetState, GetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


// Shopping Cart Store
type IShoppingCart = {
    data: any,
    total: number,
    increment: (id: any) => void,
    decrement: (id: any) => void,
    removeOne: (id: any) => void,
    removeAll: () => void,
};

let shoppingCartStore = (set: SetState<IShoppingCart>, get: GetState<IShoppingCart>) => ({
    data: [],
    total: 0,
    increment: (id: any): void =>  {
        const { data } = get();
        const price = data.map((el: any, idx: number) => {
            if (el.id === id) return el.price
        })
        set({ data: price * 2 });
    },
    decrement: (id: any): void =>  {
        const { data } = get();
        const price = data.map((el: any, idx: number) => {
            if (el.id === id) return el.price
        })
        set({ data: price - price });
    },
    removeOne: (id: any): void =>  {
        const { total, data } = get();
        const price = data.forEach((el, idx) => {
            if (el.id === id) return el.price
        })
        set({ data: data.filter((el: any) => el.id !== id) , total: total - price });
    },
    removeAll: () => set((state: any) => ({ data: [], total: 0 })),
}) 

shoppingCartStore = devtools(shoppingCartStore)
shoppingCartStore = persist(shoppingCartStore, { name: "shopping_cart" })

const useShoppingCart = create<IShoppingCart>(shoppingCartStore)

export default useShoppingCart;