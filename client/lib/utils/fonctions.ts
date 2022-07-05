// export function getURL (mode: string) {
//     const {href, origin, hostname, port, pathname, protocol} = window.location

//     if (mode === 'current') return href
//     if (mode === 'origin') return origin
//     if (mode === 'protocol') return protocol
//     if (mode === 'hostname') return hostname
//     // if (mode === 'host') return host
//     if (mode === 'port') return port
//     if (mode === 'pathname') return pathname
// }

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

export function onAddFavouriteProduct(product: any) {
  let data = loadState('favourite-products')
  if (!data) {
    saveState('favourite-products', [product])
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

export function isProductFavourite(product: any) {
  const data = loadState('favourite-products')
  if (!data) return false
  const isExist = data.find((item: any) => item.id === product?.id)
  if (isExist) return true
  return false
}
