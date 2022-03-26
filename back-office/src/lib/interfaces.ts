export interface IAction {
  delete: boolean
  disable: boolean
  add: boolean
  edit: boolean
  details: boolean
}

export interface IProduct {
  id: number
  name: string
  price: number | string
  description: string
  discount: number // ]0,1[
  image: string
  quantity: number | string
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
}
export interface IMessage {
  id: number
  title: string
  text: string
  createdAt: string
}
