import {
  Flex,
  Text,
  CircularProgress,
  CircularProgressLabel,
  Box,
  useColorModeValue
} from '@chakra-ui/react'

export default function TotalRevenue({ data }: { data: any }) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const textColor = useColorModeValue('gray_3', 'gray_7')
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
      <Text textAlign={'left'} fontWeight="600" color={textColor}>
        Total Revenue
      </Text>

      <Flex flexDir={'column'} justifyContent={'space-between'} alignItems="center">
        <CircularProgress value={data?.percent} color="accent_5" size="5rem" thickness="10px">
          <CircularProgressLabel color={textColor} fontSize=".9rem">
            {data?.percent}%{' '}
          </CircularProgressLabel>
        </CircularProgress>

        <Text color={textColor}>Total Sales made today</Text>
        <Text fontSize="1.5rem" fontWeight={'600'}>
          $ {data?.price}{' '}
        </Text>
        <Text color={textColor} fontSize=".9rem" fontWeight={'400'}>
          Summary of today's transactions
        </Text>

        <Box></Box>
      </Flex>
    </Flex>
  )
}
