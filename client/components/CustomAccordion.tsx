import { Accordion } from '@chakra-ui/react'
import React from 'react'

interface ICustomAccordion {
  body: React.ReactNode
  [restProps: string]: any
}

export default function CustomAccordion({ body, ...restProps }: ICustomAccordion) {
  return (
    <Accordion {...restProps} mb="1.5rem">
      <>{body && body}</>
    </Accordion>
  )
}
