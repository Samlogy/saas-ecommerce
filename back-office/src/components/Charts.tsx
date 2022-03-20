import React, { useEffect, useState } from 'react'
import { Flex, useColorMode } from '@chakra-ui/react'
import ReactApexChart from 'react-apexcharts'

interface IChart {
  type: string
  options: any
}
function Charts({ type = 'area', options }: IChart) {
  const { colorMode: mode } = useColorMode()
  // const mode = 'dark'
  console.log('mode: ', mode)

  const [optionsChart, setOptionsCart] = useState(options)

  const Chart =
    type === 'area' ? (
      <ReactApexChart
        type={'area'}
        options={{ ...optionsChart.options, theme: { mode: mode } }}
        series={optionsChart.series}
        height={350}
      />
    ) : type === 'line' ? (
      <ReactApexChart
        type={'line'}
        options={{ ...optionsChart.options, theme: { mode: mode } }}
        series={optionsChart.series}
        height={350}
        width={400}
      />
    ) : type === 'bar' ? (
      <ReactApexChart
        type={'bar'}
        options={{ ...optionsChart.options, theme: { mode: mode } }}
        series={optionsChart.series}
        height={350}
        width={400}
      />
    ) : type === 'donut' ? (
      <ReactApexChart
        type={'donut'}
        options={{ ...optionsChart.options, theme: { mode: mode } }}
        series={optionsChart.series}
        height={350}
        width={400}
      />
    ) : type === 'pie' ? (
      <ReactApexChart
        type={'pie'}
        options={{ ...optionsChart.options, theme: { mode: mode } }}
        series={optionsChart.series}
        height={350}
        width={400}
      />
    ) : (
      ''
    )

  // useEffect(() => {
  //   console.log('mode -->: ', mode)
  //   setOptionsCart({
  //     options: {
  //       ...options,
  //       theme: { mode: mode }
  //     }
  //   })
  // }, [mode])

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
