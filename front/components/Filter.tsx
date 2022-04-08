import { Box, Flex, Input, Select, useColorModeValue } from '@chakra-ui/react'
import React, { useState } from 'react'

const Filter = () => {
  const [query, setQuery] = useState('')
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

  const inputColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Flex
      flexDir="row"
      flexWrap={'wrap'}
      justifyContent={['space-between', '', 'space-evenly', '']}
      my="3rem"
    >
      <Flex alignItems={'center'} mb={['1rem', '0', '', '']}>
        <Input
          type="search"
          placeholder="Search..."
          w={['80%', '', '20rem', '']}
          onChange={onFilter}
          value={query}
          bg={inputColor}
        />
      </Flex>

      <Flex alignItems={'center'}>
        <Select onChange={onSort} placeholder="Order" w={['80%', '', '6rem', '']} bg={inputColor}>
          <option value="asc"> ASC </option>
          <option value="desc"> DESC </option>
        </Select>
        <Select onChange={onSort} placeholder="Price" w={['80%', '', '6rem', '']} bg={inputColor}>
          <option value="asc"> Plus chere </option>
          <option value="desc"> Moin chere </option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default Filter
