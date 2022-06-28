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

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined, {
  currency: 'USD',
  style: 'currency'
})

export function formatCurrency(number: number) {
  return CURRENCY_FORMATTER.format(number)
}
