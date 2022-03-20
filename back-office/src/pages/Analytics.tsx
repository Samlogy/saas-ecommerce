import { Heading, Flex } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'

import { Layout, Widget, TotalRevenue, Chart } from '../components'

export default function Analytics() {
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
