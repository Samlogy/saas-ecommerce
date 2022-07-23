import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

interface ITemplateFilter {
  children: React.ReactNode
}

export default function TemplateFilter({ children }: ITemplateFilter) {
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
  const textColor = useColorModeValue('gray_4', 'gray_8')
  return (
    <Flex
      flexDir={'column'}
      justifyContent="center"
      alignItems={'center'}
      w="full"
      my="1rem"
      borderRadius={'10px'}
      bg={itemBgColor}
      p="1rem"
    >
      <>{children}</>
      <Box p=".5rem"></Box>
    </Flex>
  )
}
