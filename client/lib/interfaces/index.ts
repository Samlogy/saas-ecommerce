export interface ICategory {
  id: number
  name: string
  createdAt: string
  editedAt: string | null
}

export interface IComment {
  id: number
  name: string
  rate: number
  comment: string
  createdAt: string
  editedAt: string | null
}
export interface IProduct {
  id?: number
  name: string
  images: string[]
  description: string
  price: number
  quantity: number
  discount: number
  rate: number
  reviews: number
  comments?: IComment[]
  categoryId?: string
  isFavourite?: boolean
  createdAt: string
  editedAt: string | null
}

export interface IUser {
  id: number
  fullName: string
  email: string
  username: string
  phone: string
  avatar?: string
  createdAt?: Date
  editedAt: string | null
}

export interface IUserVendor extends IUser {}
export interface IUserCustomer extends IUser {}

export interface IContact {
  id: number
  name: string
  email: string
  message: string
  createdAt: string
  editedAt: string | null
}

export interface ISubscribe {
  id: number
  email: string
  createdAt: string
  editedAt: string | null
}

export interface ICustomerTestimonial {
  id: number
  name: string
  position: string
  business: string
  testimonial: string
  avatar?: string
  createdAt: string
  editedAt: string | null
}
export interface IQuestionAnswer {
  id: number
  question: string
  anwser: string
  createdAt: string
  editedAt: string | null
}
export interface IService {
  id: number
  title: string
  description: string
  image: string
  createdAt: string
  editedAt: string | null
}
export interface IDeal {
  id: number
  dueDate: string
  description: string
  image: string
  createdAt: string
  editedAt: string | null
}
