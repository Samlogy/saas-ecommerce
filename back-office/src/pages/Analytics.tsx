import { Heading, Flex } from '@chakra-ui/react'
// import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { Layout, Widget, TotalRevenue, Charts } from 'components'

// chart options
const chartOptions = {
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      height: 350,
      zoom: {
        enabled: true
      }
    }
  },
  series: [
    {
      name: 'All Tasks',
      data: [31, 40, 28, 51, 42, 109, 100]
    },
    {
      name: 'My Tasks',
      data: [11, 32, 45, 32, 34, 52, 41]
    }
  ]
}
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

  const { t } = useTranslation()

  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Analytics
      </Heading>
      <Flex flexWrap="wrap" justifyContent={'space-between'}>
        {data?.map((el: any) => (
          <Widget data={el} />
        ))}

        <TotalRevenue />
        <Charts type={'line'} options={chartOptions} />
        <Charts type={'bar'} options={chartOptions} />
        <Charts type={'area'} options={chartOptions} />
      </Flex>

      {/* {t('greeting')} */}
    </Layout>
  )
}
