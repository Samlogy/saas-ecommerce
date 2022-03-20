import React from 'react'
import { Flex, useColorMode } from '@chakra-ui/react'
import ReactApexChart from 'react-apexcharts'

const options = {
  chart: {
    height: 350,
    zoom: {
      enabled: true
    }
  }
}

const series = [
  {
    name: 'All Tasks',
    data: [31, 40, 28, 51, 42, 109, 100]
  },
  {
    name: 'My Tasks',
    data: [11, 32, 45, 32, 34, 52, 41]
  }
]

function Charts() {
  const { colorMode: mode } = useColorMode()
  console.log('mode: ', mode)
  return (
    <Flex
      flexDir="row"
      justifyContent={'space-between'}
      alignItems="center"
      borderColor="gray.400"
      p=".5rem 1rem"
      w="30em"
      borderRadius={'25px'}
      boxShadow="md"
    >
      <ReactApexChart type="line" options={options} series={series} height={350} />
    </Flex>
  )
}

export default Charts
