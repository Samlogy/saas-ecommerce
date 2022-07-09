import React, { useEffect } from 'react'
import { Heading, Flex, Box, Text, useColorModeValue } from '@chakra-ui/react'

import { Layout, View } from 'components'
import { useMessageStore } from 'store'
import { IMessage } from '../lib/interfaces'

export default function Messages() {
  const messages = useMessageStore((state: any) => state.messages)
  return <Listing title="Messages" data={messages} />
}

interface IListing {
  title: string
  data: any
}
function Listing({ title, data }: IListing) {
  const bgColor = useColorModeValue('white', 'gray_2')
  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        {title}
      </Heading>

      <Flex flexDir="column" justifyContent={'center'} mt="2rem">
        <View cond={data.length > 0}>
          {data?.map((message: IMessage) => (
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
                {message.title}{' '}
              </Text>
              <Text mb=".5rem" color="gray_2">
                {message.text}{' '}
              </Text>
              <Text fontSize=".8rem" fontStyle="italic" textAlign={'right'} color="gray_4">
                {message?.editedAt || message?.createdAt}
              </Text>
            </Box>
          ))}
        </View>

        <View cond={data.length === 0}>
          <Text color="gray_4"> There's no Messages </Text>
        </View>
      </Flex>
    </Layout>
  )
}
