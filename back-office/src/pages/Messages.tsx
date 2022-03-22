import React, { useState, useEffect } from 'react'
import { Heading, Flex } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'

import { Layout } from 'components'

function Messages() {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    // load messages by id (useQuery) --> delete useEffect / state related to it / add messages into store
    // setNotification({})
  }, [])
  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Messages
      </Heading>
      <Flex flexWrap="wrap" justifyContent={'space-evenly'}></Flex>
    </Layout>
  )
}

export default Messages
