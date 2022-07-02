import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import { Rating } from '../components'
import { IComment } from '../lib/interfaces'
import { useAuth } from '../store'
import { dateFormat } from '../lib/utils/fonctions'

const Comment = ({ data }: { data: IComment }) => {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  const isLogged = useAuth((state: any) => state.isLogged)
  return (
    <Flex
      key={data.id}
      flexDir="column"
      alignItems="flex-start"
      my="1.5rem"
      p="1rem"
      boxShadow="md"
      borderRadius={'5px'}
      bg={bgColor}
    >
      <Flex alignItems="center" mb=".5rem">
        <Box as="span" fontWeight="600">
          {data.name}{' '}
        </Box>
        <Box as="span" fontWeight="300" fontSize=".8rem" ml=".25rem">
          on{' '}
        </Box>
        <Box as="span" fontStyle={'italic'} fontSize=".8rem" mx=".5rem">
          {dateFormat(data.createdAt)}
        </Box>
        <Rating initRate={data?.rate} readOnly={!isLogged} />
      </Flex>
      <Text fontSize={'.9rem'} fontWeight="300">
        {data.comment}{' '}
      </Text>
    </Flex>
  )
}

export default Comment
