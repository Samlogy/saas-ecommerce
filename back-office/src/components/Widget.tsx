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
  const bgColor = useColorModeValue('white', 'gray_2')
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
        <Text color={'gray_5'} fontSize=".85rem">
          {data.description}{' '}
        </Text>
        <Text fontSize="1.5rem" fontWeight="600">
          ${data.revenue}{' '}
        </Text>
      </Flex>

      <CircularProgress value={data?.percent} color="accent_5" size="5rem" thickness="10px">
        <CircularProgressLabel color={'gray_5'} fontSize=".9rem">
          {data?.percent}%{' '}
        </CircularProgressLabel>
      </CircularProgress>
    </Flex>
  )
}
