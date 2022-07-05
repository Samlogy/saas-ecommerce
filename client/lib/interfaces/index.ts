export interface IComment {
  id: number
  name: string
  rate: number
  comment: string
  createdAt: Date
  editedAt: Date | null
}

export interface IProduct {
  id?: number
  name: string
  image: string
  images: string[]
  description: string
  price: number
  quantity: number
  discount: number
  rate: number
  reviews: number
  isFavourite?: boolean
  createdAt: Date
  editedAt: Date | null
}

export interface IUser {
  id: number
  fullName: string
  email: string
  username: string
  phone: string
  avatar?: string
  createdAt?: Date
  editedAt: Date | null
}

export interface IUserVendor extends IUser {}
export interface IUserCustomer extends IUser {}

export interface IContact {
  id: number
  email: string
  message: string
  createdAt: Date
  editedAt: Date | null
}

export interface ISubscribe {
  id: number
  email: string
  createdAt: Date
  editedAt: Date | null
}

export interface ICustomerTestimonial {
  id: number
  name: string
  position: string
  business: string
  testimonial: string
  avatar?: string
  createdAt: Date
  editedAt: Date | null
}
export interface IQuestionAnswer {
  id: number
  question: string
  anwser: string
  createdAt: Date
  editedAt: Date | null
}
export interface IService {
  id: number
  title: string
  description: string
  image: string
  createdAt: Date
  editedAt: Date | null
}
export interface IDeal {
  id: number
  dueDate: Date
  description: string
  image: string
  createdAt: Date
  editedAt: Date | null
}
