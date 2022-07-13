import { Box, Flex, useColorModeValue } from '@chakra-ui/react'
import { isEmpty, loadFilters, ObjLoop } from 'lib/utils/functions'
import { useState } from 'react'
import Chart from 'react-apexcharts'

interface ICustomChart {
  type: any
  options: any
  series: any
}

export default function CustomChart({ type, options, series }: ICustomChart) {
  const bgColor = useColorModeValue('white', 'gray_2')

  const [filters, setFilters] = useState(loadFilters())

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
      {/* <Filter type={type === 'bar' ? 'stacked' : type} filters={filters} setFilters={setFilters} /> */}

      <Box mb="1rem" ml="auto" color={'gray.400'}>
        Filters:
        <Box as="span" fontStyle="oblique" textTransform="capitalize" ml=".25rem">
          {filters && isEmpty(filters) ? ObjLoop(filters) : '----'}
        </Box>
      </Box>
      <Chart type={type} options={options} series={series} height={400} />
    </Flex>
  )
}
