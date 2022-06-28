import { Flex, Stack, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

export default function FormTemplate({ children }: { children: React.ReactNode }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Flex align={'center'} justify={'center'} w="400px">
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={bgColor}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
      >
        {children}
      </Stack>
    </Flex>
  )
}
