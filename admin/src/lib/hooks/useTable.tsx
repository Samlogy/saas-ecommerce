import React from 'react'
//import { useQuery } from 'react-query'
//import { GET_INCOMES, GET_ESTIMATES, GET_EXPENSES, GET_INVOICES } from 'lib/services'

export default function useTable(type: string) {
  let service: any

  /*if (type === 'income') service = GET_INCOMES
  if (type === 'expense') service = GET_EXPENSES
  if (type === 'invoice') service = GET_INVOICES
  if (type === 'estimate') service = GET_ESTIMATES*/

  const { isLoading, error, data } = { isLoading: false, error: null, data: {} } // useQuery(type, service)
  return { isLoading, error, data }
}
