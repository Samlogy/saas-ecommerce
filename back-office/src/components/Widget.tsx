import React from 'react'
import { Text, Flex, CircularProgress, CircularProgressLabel } from '@chakra-ui/react'

interface IWidget {
  data?: any
}

function Widget({ data }: IWidget) {
  return (
    <Flex
      key={data.name}
      flexDir="row"
      justifyContent={'space-between'}
      alignItems="center"
      borderColor="gray_5"
      p=".75rem 1rem"
      w="15em"
      borderRadius={'25px'}
      boxShadow="md"
      mb="1.5rem"
    >
      <Flex flexDir="column">
        <Text> {data.name} </Text>
        <Text color={'gray_5'} fontSize=".85rem">
          {' '}
          {data.description}{' '}
        </Text>
        <Text fontSize="1.5rem" fontWeight="600">
          {' '}
          ${data.revenue}{' '}
        </Text>
      </Flex>

      <CircularProgress value={data?.percent} color="accent_5" size="5rem" thickness="10px">
        <CircularProgressLabel color={'gray_5'} fontSize=".9rem">
          {' '}
          {data?.percent}%{' '}
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  )
}

export default Widget
