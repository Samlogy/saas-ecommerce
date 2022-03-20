import React from 'react'
import { Flex, useColorMode } from '@chakra-ui/react'
import ReactApexChart from 'react-apexcharts'

interface IChart {
  type: string
  options: any
}
function Charts({ type = 'area', options }: IChart) {
  // const { colorMode: mode } = useColorMode()

  const Chart =
    type === 'area' ? (
      <ReactApexChart
        type={'area'}
        options={options.options}
        series={options.series}
        height={350}
      />
    ) : type === 'line' ? (
      <ReactApexChart
        type={'line'}
        options={options.options}
        series={options.series}
        height={350}
      />
    ) : type === 'bar' ? (
      <ReactApexChart type={'bar'} options={options.options} series={options.series} height={350} />
    ) : type === 'donut' ? (
      <ReactApexChart
        type={'donut'}
        options={options.options}
        series={options.series}
        height={350}
      />
    ) : type === 'pie' ? (
      <ReactApexChart type={'pie'} options={options.options} series={options.series} height={350} />
    ) : (
      ''
    )

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
      {Chart}
    </Flex>
  )
}

export default Charts
