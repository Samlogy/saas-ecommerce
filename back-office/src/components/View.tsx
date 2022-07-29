import React from 'react'
import { Box } from '@chakra-ui/react'

interface IView {
  children: React.ReactNode
  cond: any
  [restProps: string]: any
}

export default function Viex({ children, cond, ...restProps }: IView) {
  if (cond) return <Box {...restProps}>{children}</Box>
  else return null
}
