import React, { useEffect } from 'react'
import { Heading, Flex, Box, Text } from '@chakra-ui/react'

import { Layout } from 'components'
import { useMessageStore } from 'store'

function Messages() {
  useEffect(() => {
    // load messages by id (useQuery) --> delete useEffect / state related to it / add messages into store
    // setNotification({})
  }, [])
  const messages = useMessageStore((state: any) => state.messages)
  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Messages
      </Heading>
      <Flex flexDir="column" justifyContent={'center'} mt="2rem">
        {messages?.map((message: any) => (
          <Box
            key={message.id}
            boxShadow="md"
            mb="1.5rem"
            borderRadius={'10px'}
            p=".75rem 1rem"
            maxW="30rem"
            minW="20rem"
          >
            <Text mb=".5rem" fontSize="1.3rem">
              {' '}
              {message.title}{' '}
            </Text>
            <Text mb=".5rem" color="gray.700">
              {' '}
              {message.text}{' '}
            </Text>
            <Text fontSize=".8rem" fontStyle="italic" textAlign={'right'} color="gray.500">
              {' '}
              {message.createdAt}{' '}
            </Text>
          </Box>
        ))}
      </Flex>
    </Layout>
  )
}

export default Messages
