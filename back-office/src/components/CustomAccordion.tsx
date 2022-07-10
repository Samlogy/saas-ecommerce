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
  title: string
  body: React.ReactNode
}

export default function CustomAccordion({ title, body }: ICustomAccordion) {
  return (
    <Accordion allowToggle mb="1.5rem">
      <AccordionItem>
        <h2>
          <AccordionButton _expanded={{ bg: 'accent_4', color: 'white' }}>
            <Box flex="1" textAlign="left" textTransform={'uppercase'}>
              {title && title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel>{body && body}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
