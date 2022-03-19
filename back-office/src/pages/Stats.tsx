import { Heading, Box } from '@chakra-ui/react'
// import { AiOutlinePlus } from 'react-icons/ai'
// import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { Layout, Dropdown, NotificationButton } from '../components'

export default function Stats() {
  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Analytics
      </Heading>
    </Layout>
  )
}
