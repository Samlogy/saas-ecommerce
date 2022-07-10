import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface ITemplateFilter {
  label: string
  children: React.ReactNode
}

export default function TemplateFilter({ label, children }: ITemplateFilter) {
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
  return (
    <Flex
      flexDir={'column'}
      justifyContent="center"
      alignItems={'center'}
      w="15rem"
      my="1rem"
      borderRadius={'10px'}
      bg={itemBgColor}
      p="1rem"
    >
      <Box as="span" color="gray_3" m="0 auto .3rem 0">
        {label}
      </Box>
      <>{children}</>
      <Box p=".5rem"></Box>
    </Flex>
  )
}
