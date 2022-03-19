import React from 'react'
import { Box, Text, Flex, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

interface IWidget {
  data?: any
}

function Widget({ data }: IWidget) {
  return (
    <Flex
      flexDir="row"
      justifyContent={'space-between'}
      alignItems="center"
      //   border="1px solid"
      borderColor="gray.400"
      p=".75rem 1rem"
      w="15em"
      borderRadius={'25px'}
      boxShadow="md"
    >
      <Flex flexDir="column">
        <Text> {data.name} </Text>
        <Text color={'gray.400'} fontSize=".85rem">
          {' '}
          {data.description}{' '}
        </Text>
        <Text fontSize="2rem" fontWeight="600">
          {' '}
          ${data.revenue}{' '}
        </Text>
      </Flex>

      <CircularProgress value={40} color="green.400" size="5rem" thickness="10px">
        <CircularProgressLabel color={'gray.500'} fontSize=".9rem">
          {' '}
          40%{' '}
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  )
}

export default Widget
