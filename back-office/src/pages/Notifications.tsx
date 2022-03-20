import React, { useState, useEffect } from 'react'
import { Heading, Flex } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'

import { Layout } from '../components'

function Notifications() {
  const [notifications, setNotifications] = useState([])
  useEffect(() => {
    // load notification by id (useQuery) --> delete useEffect / state related to it / add notification into store
    // setNotification({})
  }, [])
  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Notifications
      </Heading>
      <Flex flexWrap="wrap" justifyContent={'space-evenly'}></Flex>
    </Layout>
  )
}

export default Notifications
