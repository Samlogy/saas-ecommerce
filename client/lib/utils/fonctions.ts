import { IProduct } from '../interfaces'
import { loadState, saveState } from './localStorage'

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency'
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}

export function dateFormat(date: any): string {
  return date.substr(0, 10)
}

export function generateQuery(obj: any): any {
  let query = []
  for (const key in obj) {
    if (obj[key]) {
      query = [...query, `${key}=${obj[key]}`]
    }
  }
  return query.join('&')
}

export function onAddFavouriteProduct(product: IProduct) {
  let data = loadState('favourite-products')
  if (!data) {
    saveState('favourite-products', [{ ...product, isFavourite: true }])
    return
  }
  const isExist = data.find((item: any) => item.id === product?.id)
  if (isExist) {
    data = data.filter((item: any) => item.id !== product?.id)
    saveState('favourite-products', [...data])
    return
  }
  saveState('favourite-products', [...data, product])
}

export function isProductFavourite(product: IProduct) {
  const data = loadState('favourite-products')
  if (!data) return false
  const isExist = data.find((item: any) => item.id === product?.id)
  if (isExist) return true
  return false
}

export function loadFavouriteProducts(): IProduct[] {
  const products = loadState('favourite-products')
  if (!products || products.length === 0) return
  console.log(products)
  return products
}
