import { Heading, Flex, Box } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

import { Layout, Widget, TotalRevenue, Chart } from '../components'

export default function Stats() {
  const data = [
    {
      name: 'name...',
      description: 'description...',
      revenue: 1000
    },
    {
      name: 'name...',
      description: 'description...',
      revenue: 1000
    },
    {
      name: 'name...',
      description: 'description...',
      revenue: 1000
    }
  ]
  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Analytics
      </Heading>
      <Flex flexWrap="wrap" justifyContent={'space-evenly'}>
        {data?.map((el: any) => (
          <Widget data={el} />
        ))}

        <TotalRevenue />
        <Chart />
      </Flex>
    </Layout>
  )
}
