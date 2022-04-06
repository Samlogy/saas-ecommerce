import React, { useEffect } from 'react'
import { Heading, Flex, Box, Text, useColorModeValue } from '@chakra-ui/react'

import { Layout, View } from 'components'
import { useMessageStore } from 'store'
import { IMessage } from 'lib/interfaces'

function Messages() {
  useEffect(() => {
    // load messages by id (useQuery) --> delete useEffect / state related to it / add messages into store
    // setNotification({})
  }, [])
  const messages = useMessageStore((state: any) => state.messages)
  const bgColor = useColorModeValue('white', 'gray_2')
  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        Messages
      </Heading>

      <Flex flexDir="column" justifyContent={'center'} mt="2rem">
        <View cond={messages.length > 0}>
          {messages?.map((message: IMessage) => (
            <Box
              key={message.id}
              boxShadow="md"
              mb="1.5rem"
              borderRadius={'10px'}
              p=".75rem 1rem"
              w={['17rem', '20rem', '30rem', '35rem']}
              bg={bgColor}
            >
              <Text mb=".5rem" fontSize="1.3rem">
                {' '}
                {message.title}{' '}
              </Text>
              <Text mb=".5rem" color="gray_2">
                {' '}
                {message.text}{' '}
              </Text>
              <Text fontSize=".8rem" fontStyle="italic" textAlign={'right'} color="gray_4">
                {' '}
                {message.createdAt}{' '}
              </Text>
            </Box>
          ))}
        </View>

        <View cond={messages.length === 0}>
          <Text color="gray_4"> There's no Messages </Text>
        </View>
      </Flex>
    </Layout>
  )
}

export default Messages
