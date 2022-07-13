import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box
} from '@chakra-ui/react'

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
