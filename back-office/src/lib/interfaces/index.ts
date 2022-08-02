export interface IAction {
  delete: boolean
  disable: boolean
  add: boolean
  edit: boolean
  details: boolean
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
  categoryId?: string
  isFavourite?: boolean
  createdAt: Date
  editedAt: Date | null
}

export interface IOptions {
  color: string[]
  chart: { height: number; width: number; fontFamily: string; zoom: { enabled: boolean } }
}

export interface INotification {
  id: number
  title: string
  text: string
  createdAt: string
  editedAt: string
}
export interface IMessage {
  id: number
  title: string
  text: string
  createdAt: string
  editedAt: string
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

export interface IAvatar {
  isLoading: boolean
  error: string
  previews: string[]
  images: string[]
}
