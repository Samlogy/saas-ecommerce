import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { loadFilters } from '../lib/utils/functions'
import { useState } from 'react'
import Chart from 'react-apexcharts'

interface ICustomChart {
  chartType: any
  filterType: string
  options: any
  series: any
}

export default function CustomChart({ chartType, filterType, options, series }: ICustomChart) {
  const bgColor = useColorModeValue('white', 'gray_2')

  const data = loadFilters()
  const [filters, setFilters] = useState(data)

  return (
    <Flex
      flexDir="column"
      borderColor="gray.400"
      p=".5rem 1rem"
      borderRadius={'10px'}
      boxShadow="lg"
      zIndex="100"
      mb="1.5rem"
      w={'25rem'}
      bg={bgColor}
    >
      <Box
        fontStyle="oblique"
        textTransform="capitalize"
        ml=".25rem"
        textAlign="left"
        mb="1rem"
        color={'gray_4'}
      >
        Filters:{' '}
        {Object.values(data[filterType]).length > 0
          ? Object.values(data[filterType]).map(el => el)
          : '----'}
      </Box>
      <Chart type={chartType} options={options} series={series} height={400} />
    </Flex>
  )
}
