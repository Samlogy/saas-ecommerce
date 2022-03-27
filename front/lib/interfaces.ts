export interface IComment {
    id: number
    name: string
    createdAt: string
    comment: string
}

export interface IProduct {
    id: number
    name: string
    img: string[]
    description: string
    price: number
    quantity: number
    discount: number
    createdAt: Date
}