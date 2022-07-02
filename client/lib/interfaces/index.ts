export interface IComment {
  id: number
  name: string
  createdAt: string
  comment: string
}

export interface IProduct {
  id?: number
  isFavourite?: boolean
  rate: number
  reviews: number
  name: string
  image: string
  description: string
  price: number
  quantity: number
  discount: number
  createdAt?: Date
  editedAt?: Date
}
