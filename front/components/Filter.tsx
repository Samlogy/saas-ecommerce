import React, { FC, useState } from "react";
import { Flex, Box, Select, Input } from "@chakra-ui/react"


const Filter: FC = () => {
  const [query, setQuery] = useState('');
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
    <Flex flexDir="row" flexWrap={"wrap"} justifyContent={["space-between", "", "space-evenly", ""]} my="3rem">
      <Flex alignItems={"center"} mb={["1rem", "0", "", ""]}>
        {/* <Box as="span" fontSize="1rem" mr=".5rem" w="3rem"> Filter: </Box>  */}
        <Input type="search" placeholder='Search...' w={["80%", "", "20rem", ""]}
          onChange={onFilter} value={query} />
      </Flex>

      <Flex alignItems={"center"}>
        <Box as="span" fontSize="1rem" mr=".5rem" w="3rem"> Sort: </Box>
        <Select onChange={onSort} placeholder="Order" w={["80%", "", "6rem", ""]}>
          <option value='asc'> ASC </option>
          <option value='desc'> DESC </option>
        </Select>
        <Select onChange={onSort} placeholder="Price" w={["80%", "", "6rem", ""]}>
          <option value='asc'> Plus chere </option>
          <option value='desc'> Moin chere </option>
        </Select>
      </Flex>
    </Flex>
  )
}

export default Filter;