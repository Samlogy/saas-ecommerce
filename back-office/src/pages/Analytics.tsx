import { Flex, Heading, Text, useColorModeValue } from '@chakra-ui/react'
import { useState } from 'react'

import { CustomChart, Layout, TotalRevenue, View, Widget } from 'components'
import { useChart, useTable } from 'lib/hooks'
import { isEmpty, loadFilters } from 'lib/utils/functions'

// chart options
const chartOptions = {
  options: {
    color: ['#6ab04c', '#2980b9'],
    chart: {
      height: 350,
      width: 450,
      fontFamily: 'Poppins, sans-serif',
      zoom: {
        enabled: true
      }
    }
  },
  theme: {
    palette: 'palette',
    monochrome: { enabled: false },
    shadeIntensity: 0.5
  },
  series: [
    {
      name: 'Online Customers',
      data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },
    {
      name: 'Store Customers',
      data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }
  ]
}
const widgetsData = [
  {
    name: 'name...',
    description: 'description...',
    revenue: 1000,
    percent: 40
  },
  {
    name: 'name...',
    description: 'description...',
    revenue: 1000,
    percent: 35
  },
  {
    name: 'name...',
    description: 'description...',
    revenue: 1000,
    percent: 55
  }
]
const totalRevenueData = {
  percent: 50,
  price: 5000
}
const data: any = [
  {
    id: 12,
    name: 'mobile dev app',
    price: 500,
    quantity: 15,
    date: '2022-05-18',
    nature: 'service',
    paymentMethod: 'paysera',
    description: 'description'
  }
]

export default function Analytics() {
  const bgColor = useColorModeValue('white', 'gray_2')

  // load chart data
  const pieOptions = useChart('pie')
  const stackedOptions = useChart('stacked')

  // load table data
  const { isLoading, error, data: d } = useTable('income')

  // sort state --> table
  const [filters, setFilters] = useState(loadFilters())

  // show chart if visible or not
  const [show, setShow] = useState({
    line: isEmpty(stackedOptions.options) && isEmpty(stackedOptions.series),
    pie: isEmpty(pieOptions.options) && isEmpty(pieOptions.series),
    table: isEmpty(data)
  })

  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        Analytics
      </Heading>

      <Flex flexDir={'column'} my="1rem">
        <Heading as="h2" fontSize="1.5rem" textTransform="uppercase" my="1rem">
          Widgets Analytics
        </Heading>

        <Flex justify={['center', 'space-between']} flexWrap="wrap">
          {widgetsData.map((item: any, idx: number) => (
            <Widget key={idx} data={item} />
          ))}
        </Flex>

        <TotalRevenue data={totalRevenueData} />
      </Flex>

      <Flex flexDir="column" my="1rem">
        <Heading as="h2" fontSize="1.5rem" textTransform="uppercase" my="1rem">
          Chart Analytics
        </Heading>

        <Flex flexWrap="wrap" justify={['center', '', 'space-between']}>
          <View cond={show.line}>
            <CustomChart
              type={'line'}
              options={stackedOptions.options}
              series={stackedOptions.series}
            />
          </View>
          <View cond={show.pie}>
            <CustomChart type={'pie'} options={pieOptions.options} series={pieOptions.series} />
          </View>

          <View cond={show.line}>
            <CustomChart
              type={'bar'}
              options={stackedOptions.options}
              series={stackedOptions.series}
            />
          </View>

          <View cond={!show.line}>
            <Text color="gray_4" fontStyle="italic" textAlign="center" m="2rem auto">
              Error occured while loading Incomes chart (line bars)
            </Text>
          </View>

          <View cond={!show.pie}>
            <Text color="gray_4" fontStyle="italic" textAlign="center" m="2rem auto">
              Error occured while loading Incomes chart (pie bars)
            </Text>
          </View>

          <View cond={!show.line}>
            <Text color="gray_4" fontStyle="italic" textAlign="center" m="2rem auto">
              Error occured while loading Incomes chart (stacked bars)
            </Text>
          </View>
        </Flex>
      </Flex>
    </Layout>
  )
}
