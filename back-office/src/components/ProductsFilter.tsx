import {
  Box,
  Flex,
  Select,
  Input,
  InputGroup,
  InputRightElement,
  useColorModeValue
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { IProduct } from 'lib/interfaces'
import { useProductStore } from 'store'

export default function ProductsFilter() {
  const product = useProductStore((state: any) => state.product)
  const setProduct = useProductStore((state: any) => state.setProduct)
  const products = useProductStore((state: any) => state.products)
  const setProducts = useProductStore((state: any) => state.setProducts)

  const keys = ['image', 'name', 'description', 'qunatity', 'price']

  const [query, setQuery] = useState('')

  const bgColor = useColorModeValue('white', 'gray_2')
  const inputColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Flex
      flexDir="row"
      flexWrap={'wrap'}
      justifyContent={['space-between', '', 'space-evenly', '']}
      my="3rem"
    >
      <Flex alignItems={'center'} mb={['1rem', '0', '', '']}>
        <InputGroup>
          <Input
            type="search"
            placeholder="Search..."
            w={['80%', '', '20rem', '']}
            value={query}
            onChange={e => setQuery(e.target.value)}
            focusBorderColor="accent_5"
            bg={inputColor}
          />
          <InputRightElement
            children={<AiOutlineSearch size="18" />}
            cursor="pointer"
            mr=".25rem"
          />
        </InputGroup>
      </Flex>

      <Flex alignItems={'center'}>
        <Select
          // onChange={onSort}
          focusBorderColor="accent_5"
          placeholder="Order"
          w={['80%', '', '6rem', '']}
          bg={inputColor}
        >
          <option value="asc"> ASC </option>
          <option value="desc"> DESC </option>
        </Select>
      </Flex>
    </Flex>
  )
}
