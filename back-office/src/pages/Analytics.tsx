import { Heading, Flex, Select } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'
import { useState } from 'react'

import { Layout, Widget, TotalRevenue, Charts } from 'components'
import { IOptions } from 'lib/interfaces'

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

export default function Analytics() {
  const [options, setOptions] = useState<IOptions>(chartOptions.options)
  const [series, setSeries] = useState(chartOptions.series)
  const [sorted, setSorted] = useState('daily')

  const { t } = useTranslation()

  const handleClick = (e: any) => {
    const category = e.target.value.toLowerCase()
    // console.log('category: ', category)
    let min = 2
    // use certain formula according to the case
    if (category === 'daily') {
      min = 10
      setSorted(category)
    } else if (category === 'weekly') {
      min = 1
      setSorted(category)
    } else if (category === 'monthly') {
      min = -1
      setSorted(category)
    } else if (category === 'yearly') {
      min = 0
      setSorted(category)
    }

    setSeries(prev =>
      series.map(s => {
        const data = s.data.map(() => {
          return Math.floor(Math.random() * (180 - min + 1)) + min
        })
        return { data, name: s.name }
      })
    )
  }

  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Analytics
      </Heading>

      <Flex flexWrap="wrap" justifyContent={'space-evenly'}>
        {widgetsData?.map((el: any) => (
          <Widget data={el} />
        ))}

        <TotalRevenue data={totalRevenueData} />

        <Flex flexDir="column">
          <Select
            onChange={handleClick}
            defaultValue={sorted}
            w="6.5rem"
            p="0"
            ml="auto"
            focusBorderColor="accent_6"
          >
            <option value="daily"> Daily </option>
            <option value="weekly"> Weekly </option>
            <option value="monthly"> Monthly </option>
            <option value="yearly"> yearly </option>
          </Select>

          <Flex justifyContent={'space-evenly'} flexWrap="wrap">
            <Charts
              type={'line'}
              options={options}
              series={series}
              sorted={sorted}
              setOptions={setOptions}
            />
            <Charts
              type={'area'}
              options={options}
              series={series}
              sorted={sorted}
              setOptions={setOptions}
            />
            <Charts
              type={'bar'}
              options={options}
              series={series}
              sorted={sorted}
              setOptions={setOptions}
            />
          </Flex>
        </Flex>
      </Flex>

      {t('greeting')}
    </Layout>
  )
}
