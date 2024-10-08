import {
  Text,
  Flex,
  CircularProgress,
  CircularProgressLabel,
  useColorModeValue
} from '@chakra-ui/react'

interface IWidget {
  data?: any
}

export default function Widget({ data }: IWidget) {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const textColor = useColorModeValue('gray_3', 'gray_7')
  return (
    <Flex
      key={data.name}
      flexDir="row"
      justifyContent={'space-between'}
      alignItems="center"
      borderColor="gray_5"
      p=".75rem 1rem"
      w={['30rem', '15rem', '', '']}
      borderRadius={'25px'}
      boxShadow="md"
      mb="1.5rem"
      bg={bgColor}
    >
      <Flex flexDir="column">
        <Text> {data.name} </Text>
        <Text color={textColor} fontSize=".85rem">
          {data.description}{' '}
        </Text>
        <Text fontSize="1.5rem" fontWeight="600">
          ${data.revenue}{' '}
        </Text>
      </Flex>

      <CircularProgress value={data?.percent} color="accent_5" size="5rem" thickness="10px">
        <CircularProgressLabel color={textColor} fontSize=".9rem">
          {data?.percent}%{' '}
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  )
}
