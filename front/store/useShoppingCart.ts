import create, { SetState, GetState } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const addProduct = (products: any, newProduct: any) => {
    return products.length > 0 ? [...products, newProduct] : [newProduct]
};
const incrementProduct = (productId: number, products) => {
    const new_products = products.map((product) => ({
        ...product,
        quantity: product.id == productId ? product.quantity++ : product.quantity
    })) 
    return new_products
};
const decrementProduct = (productId: number, products) => {
    const new_products = products.map((product) => ({
        ...product,
        quantity: (product.id === productId && product.quantity > 1) ? product.quantity-- : (product.id === productId && product.quantity === 1) ? 0 : product.quantity
    })) 
    // console.log('products: ', new_products) product.quantity--
    return new_products
};
const removeOneProduct = (productId: number, products) => {
    return products.filter(({ id }) => productId !== id)
};
const removeAllProducts = () => {
    return []
};
const calculateProductsTotal = (products: any) => {
    const productsPrices = products.map((product: any) => product.discount > 0 ? product.quantity * product.price * product.discount : product.quantity * product.price)
    const new_total = productsPrices.reduce(
        (prev, current) => prev + current,
        0
    );
    return new_total;
};


// Shopping Cart Store
type IShoppingCart = {
    newProduct: any,
    products: any,
    total: number,
    price: number,
    isVisible: boolean,
    handleCartVisibility: (visible: boolean) => void,
    addToCart: (newProduct: any) => void,
    increment: (id: any) => void,
    decrement: (id: any) => void,
    removeOne: (id: any) => void,
    removeAll: () => void,
    computeTotal: () => number
};

let shoppingCartStore = (set: SetState<IShoppingCart>) => ({
    products: [],
    total: 0,
    price: 0,
    isVisible: false,
    handleCartVisibility: (isVisible: boolean) => {
        set({ isVisible: !isVisible })
    },
    addToCart: (newProduct: any) => {
        set((state) => ({
            ...state,
            products: addProduct(state.products, newProduct)
        }))
    },
    increment: (productId) => {
        set((state) => ({
            ...state,
            products: incrementProduct(productId, state.products)
        }))
    },
    decrement: (productId) => {
        set((state) => ({
            ...state,
            products: decrementProduct(productId, state.products)
        }))
    },
    removeOne: (productId) => {
        set((state) => ({
            ...state,
            products: removeOneProduct(productId, state.products)
        }))
    },
    removeAll: () => {
        set((state) => ({
            ...state,
            products: removeAllProducts()
        }))
    },
    computeTotal: () => {
        set((state) => ({
            ...state,
            price: calculateProductsTotal(state.products)
        }))
    }
})

shoppingCartStore = devtools(shoppingCartStore)
shoppingCartStore = persist(shoppingCartStore, { name: "shopping_cart" })

const useShoppingCart = create<IShoppingCart>(shoppingCartStore)

export default useShoppingCart;