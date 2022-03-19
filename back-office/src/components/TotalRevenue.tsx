import React from 'react'
import { Flex, Text, CircularProgress, CircularProgressLabel, Box } from '@chakra-ui/react'

function TotalRevenue() {
  return (
    <Flex
      flexDir={'column'}
      borderColor="gray.400"
      p=".75rem 1rem"
      w="30rem"
      borderRadius={'25px'}
      boxShadow="md"
    >
      <Text textAlign={'left'} fontWeight="600" color={'gray.500'}>
        Total Revenue
      </Text>

      <Flex flexDir={'column'} justifyContent={'space-between'} alignItems="center">
        <CircularProgress value={40} color="green.400" size="5rem" thickness="10px">
          <CircularProgressLabel color={'gray.500'} fontSize=".9rem">
            {' '}
            40%{' '}
          </CircularProgressLabel>
        </CircularProgress>

        <Text color={'gray.400'}>Total Sales made today</Text>
        <Text fontSize="2rem" fontWeight={'600'}>
          {' '}
          $ 420{' '}
        </Text>
        <Text color={'gray.400'} fontSize=".9rem" fontWeight={'400'}>
          Summary of today's transactions
        </Text>

        <Box></Box>
      </Flex>
    </Flex>
  )
}

export default TotalRevenue
