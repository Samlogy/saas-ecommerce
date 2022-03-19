import React from 'react'
import { Flex } from '@chakra-ui/react'

function Chart() {
  return (
    <Flex
      flexDir="row"
      justifyContent={'space-between'}
      alignItems="center"
      borderColor="gray.400"
      p=".5rem 1rem"
      w="15em"
      borderRadius={'25px'}
      boxShadow="md"
    >
      Chart
    </Flex>
  )
}

export default Chart
