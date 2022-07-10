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
