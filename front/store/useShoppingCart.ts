import create, { SetState, GetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'


// Shopping Cart Store
type IShoppingCart = {
    products: any,
    total: number,
    isVisible: boolean,
    handleVisibility: () => void,
    addToCart: (newProduct: any) => void,
    increment: (id: any) => void,
    decrement: (id: any) => void,
    removeOne: (id: any) => void,
    removeAll: () => void,
};

let shoppingCartStore = (set: SetState<IShoppingCart>, get: GetState<IShoppingCart>) => ({
    products: [],
    total: 0,
    isVisible: false,
    handleVisibility: (): void => {
        let { isVisible } = get()
        set({ isVisible: !isVisible })
    },
    addToCart: (newProduct: any): void => {
        let { products, total } = get();
        const productExist = products.find((product: any) => product.id === newProduct.id)
        if (productExist) {
            productExist.quantity++
            set({ products, total: total++ })
        } else {
            products.push({ ...newProduct, quantity: 1 })
            set({ products, total: total++ })
        }
    },
    increment: (id: any): void => {
        let { products } = get()
        const new_products = products.map((product: any) => {
            if(product.id === id) return product.quantity++
        })
        const new_total = products.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0)
        set({ products: new_products, total: new_total })
    },
    decrement: (id: any): void => {
        const { products } = get()
        const product = products.find((product: any) => product.id === id)

        if (product.quantity === 1) {
            const index = products.findIndex((item: any) => item.id === id)
            products.splice(index, 1)
            const new_total = products.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0)
            set({ products: products, total: new_total });
        } else {
            product.quantity--
            const new_total = products.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0)
            set({ products: products, total: new_total });
        }
    },
    removeOne: (id: any): void =>  {
        const { products } = get();
        const index = products.findIndex((product: any) => product.id === id);
        products.splice(index, 1);
        const new_total = products.reduce((accumulator, product) => accumulator + product.quantity * product.price, 0)
        set({ products: products, total: new_total });
    },
    removeAll: () => set({ products: [], total: 0 }),
}) 

shoppingCartStore = devtools(shoppingCartStore)
shoppingCartStore = persist(shoppingCartStore, { name: "shopping_cart" })

const useShoppingCart = create<IShoppingCart>(shoppingCartStore)

export default useShoppingCart;