import React, { useEffect } from 'react'
import { Flex, useColorMode, Box } from '@chakra-ui/react'
import ReactApexChart from 'react-apexcharts'

import { IOptions } from 'lib/interfaces'

interface IChart {
  type: string
  options: any
  series: any
  sorted: string
  setOptions: React.Dispatch<React.SetStateAction<IOptions>>
}
function Charts({ type = 'area', options, series, sorted, setOptions }: IChart) {
  const { colorMode: mode } = useColorMode()

  const Chart =
    type === 'area' ? (
      <ReactApexChart type={'area'} options={{ ...options }} series={series} height={350} />
    ) : type === 'line' ? (
      <ReactApexChart type={'line'} options={{ ...options }} series={series} height={350} />
    ) : type === 'bar' ? (
      <ReactApexChart type={'bar'} options={{ ...options }} series={series} height={350} />
    ) : type === 'donut' ? (
      <ReactApexChart type={'donut'} options={{ ...options }} series={series} height={350} />
    ) : type === 'pie' ? (
      <ReactApexChart type={'pie'} options={{ ...options }} series={series} height={350} />
    ) : (
      ''
    )

  useEffect(() => {
    setOptions({
      ...options,
      theme: {
        mode: mode,
        shadeTo: mode
      }
    })
  }, [mode])

  return (
    <Flex
      flexDir="column"
      borderColor="gray.400"
      p=".5rem 1rem"
      borderRadius={'25px'}
      boxShadow="md"
      mb="1.5rem"
      w={['18rem', '20rem', '', '25rem']}
      mx=".75rem"
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
