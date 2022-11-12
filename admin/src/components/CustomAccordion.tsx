import React from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  useColorModeValue
} from '@chakra-ui/react'

interface ICustomAccordion {
  title: string
  body: React.ReactNode
  [restProps: string]: any
}

export default function CustomAccordion({ title, body, ...restProps }: ICustomAccordion) {
  const itemBgColor = useColorModeValue('gray_9', 'gray_2')
  const itemColor = useColorModeValue('gray_2', 'gray_8')
  //
  //defaultIndex={[0]}
  return (
    <Accordion allowToggle mb="1.5rem" {...restProps}>
      <AccordionItem>
        <h2>
          <AccordionButton
            bg={itemBgColor}
            color={itemColor}
            _expanded={{ bg: 'accent_2', color: 'white' }}
            borderRadius="10px"
          >
            <Box flex="1" textAlign="left" textTransform={'uppercase'}>
              {title && title}
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel bg={itemBgColor} color={itemColor}>
          {body && body}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
