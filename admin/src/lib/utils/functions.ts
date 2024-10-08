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
  let query: any = []
  for (const key in obj) {
    if (obj[key]) {
      query = [...query, `${key}=${obj[key]}`]
    }
  }
  return query.join('&')
}

export const ObjLoop: any = (obj: any): string => {
  return Object.values(obj)
    .filter(el => el !== '')
    .join(', ')
}

export const isEmpty = (data: any): boolean => {
  if (Array.isArray(data) && data.length === 0) return true
  if (Object.entries(data).length === 0) return true
  if (!data) return true
  return false
}

export function loadFilters() {
  const data = loadState('ecommerce-filters')
  if (data) return data
  return saveState('ecommerce-filters', {
    line: {},
    pie: {},
    stacked: {}
  })
}
