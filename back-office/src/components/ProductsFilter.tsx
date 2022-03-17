import { Box, Flex, Select, Input } from '@chakra-ui/react'
import React from 'react'

interface IProductFilter {
  setQuery: any
  // Dispatch<React.SetStateAction<string>>,
  query: string
}
const ProductsFilter = ({ setQuery, query }: IProductFilter) => {
  const keys = ['image', 'name', 'description', 'qunatity', 'price']

  const onSort = (e: any) => {
    const selected = e.target.value
    console.log('selected: ', selected)
  }
  const onFilter = (e: any) => {
    const filters = e.target.value.toLowerCase()
    // console.log('filters: ', filters)
    setQuery(filters)
    // call api --> filtering according to (name, description)
  }
  return (
    <Flex
      flexDir="row"
      flexWrap={'wrap'}
      justifyContent={['space-between', '', 'space-evenly', '']}
      my="3rem"
    >
      <Flex alignItems={'center'} mb={['1rem', '0', '', '']}>
        <Box as="span" fontSize="1rem" mr=".5rem" w="3rem">
          {' '}
          Filter:{' '}
        </Box>
        <Input
          type="search"
          placeholder="Search..."
          w={['80%', '', '20rem', '']}
          onChange={onFilter}
        />
      </Flex>

      <Flex alignItems={'center'}>
        <Box as="span" fontSize="1rem" mr=".5rem" w="3rem">
          {' '}
          Sort:{' '}
        </Box>
        <Select onChange={onSort} placeholder="Order" w={['80%', '', '6rem', '']}>
          <option value="asc"> ASC </option>
          <option value="desc"> DESC </option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default ProductsFilter
