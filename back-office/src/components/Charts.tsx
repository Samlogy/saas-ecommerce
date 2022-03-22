import React, { useEffect, useState } from 'react'
import { Flex, useColorMode, Box } from '@chakra-ui/react'
import ReactApexChart from 'react-apexcharts'

interface IChart {
  type: string
  options: any
  series: any
  sorted: string
}
function Charts({ type = 'area', options, series, sorted }: IChart) {
  const { colorMode: mode } = useColorMode()

  const Chart =
    type === 'area' ? (
      <ReactApexChart
        type={'area'}
        options={{ ...options, theme: { mode: mode } }}
        series={series}
        height={350}
      />
    ) : type === 'line' ? (
      <ReactApexChart
        type={'line'}
        options={{ ...options, theme: { mode: mode } }}
        series={series}
        height={350}
      />
    ) : type === 'bar' ? (
      <ReactApexChart
        type={'bar'}
        options={{ ...options, theme: { mode: mode } }}
        series={series}
        height={350}
      />
    ) : type === 'donut' ? (
      <ReactApexChart
        type={'donut'}
        options={{ ...options, theme: { mode: mode } }}
        series={series}
        height={350}
      />
    ) : type === 'pie' ? (
      <ReactApexChart
        type={'pie'}
        options={{ ...options, theme: { mode: mode } }}
        series={series}
        height={350}
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
      flexDir="column"
      borderColor="gray.400"
      p=".5rem 1rem"
      maxW="30em"
      borderRadius={'25px'}
      boxShadow="md"
      mb="1.5rem"
      flexBasis="20rem"
    >
      <Box mb="1rem" ml="auto" color={'gray.400'}>
        sorted:{' '}
        <Box as="span" textTransform={'uppercase'}>
          {' '}
          {sorted}{' '}
        </Box>
      </Box>
      {Chart}
    </Flex>
  )
}

export default Charts
