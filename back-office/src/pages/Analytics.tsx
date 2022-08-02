import { Flex, Heading, Text } from '@chakra-ui/react'
import { useState } from 'react'

import { CustomChart, Layout, TotalRevenue, View, Widget } from 'components'
import { useChart } from 'lib/hooks'

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

export default function Analytics() {
  const pieOptions = useChart('pie')
  const stackedOptions = useChart('stacked')

  // show chart if visible or not
  const [show, setShow] = useState({
    line: stackedOptions.options ? stackedOptions.options : {},
    pie: pieOptions.options ? pieOptions.options : {}
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
              chartType="line"
              filterType="line"
              options={stackedOptions.options}
              series={stackedOptions.series}
            />
          </View>
          <View cond={show.pie}>
            <CustomChart
              chartType="pie"
              filterType="pie"
              options={pieOptions.options}
              series={pieOptions.series}
            />
          </View>

          <View cond={show.line}>
            <CustomChart
              chartType="bar"
              filterType="line"
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
        </Flex>
      </Flex>
    </Layout>
  )
}
