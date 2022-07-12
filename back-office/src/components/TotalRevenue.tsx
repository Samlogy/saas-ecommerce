import {
  Flex,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Box,
  useColorModeValue
} from '@chakra-ui/react'

export default function TotalRevenue({ data }: { data: any }) {
  const bgColor = useColorModeValue('white', 'gray_2')
  return (
    <Flex
      flexDir={'column'}
      borderColor="gray_5"
      p=".75rem 1rem"
      w={['auto', '30rem', '', '']}
      borderRadius={'25px'}
      boxShadow="md"
      mb="1.5rem"
      bg={bgColor}
    >
      <Text textAlign={'left'} fontWeight="600" color={'gray_4'}>
        Total Revenue
      </Text>

      <Flex flexDir={'column'} justifyContent={'space-between'} alignItems="center">
        <CircularProgress value={data?.percent} color="accent_5" size="5rem" thickness="10px">
          <CircularProgressLabel color={'gray_4'} fontSize=".9rem">
            {data?.percent}%{' '}
          </CircularProgressLabel>
        </CircularProgress>

        <Text color={'gray_5'}>Total Sales made today</Text>
        <Text fontSize="1.5rem" fontWeight={'600'}>
          $ {data?.price}{' '}
        </Text>
        <Text color={'gray_5'} fontSize=".9rem" fontWeight={'400'}>
          Summary of today's transactions
        </Text>

        <Box></Box>
      </Flex>
    </Flex>
  )
}
