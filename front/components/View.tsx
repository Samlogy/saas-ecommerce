import React, { FC } from 'react'
import { Box } from '@chakra-ui/react'

interface IView {
  children: React.ReactNode
  cond: any
  rest?: React.ReactNode
}

const View: FC = ({ children, cond, ...rest }: IView) => {
  if (cond) return <Box {...rest}>{children}</Box>
  else return null
}

export default View
