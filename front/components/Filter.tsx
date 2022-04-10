import {
  Box,
  Flex,
  Input,
  Select,
  useColorModeValue,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb
} from '@chakra-ui/react'
import React, { useState } from 'react'

const CATEGORY_LIST = ['technology', 'food', 'tools', 'sport', 'teaching']

interface ITemplateSort {
  onSort: any
  sorts: string[]
  label: string
  selectList: any
}

interface ITamplateSortSlider {
  onSort: any
  sorts: string[]
  label: string
  defaultValue: any
  selectList: any
  onRange: any
}

const Filter = () => {
  const [query, setQuery] = useState('')
  const [sorts, setSorts] = useState([])
  const [filters, setFilters] = useState({ product: '', category: [] })

  const onSort = (vals: any) => {
    const new_sorts = vals.map((val: string) => val.toLowerCase())
    setSorts(new_sorts)
    // setSorts(prev => [...prev, selected])
    console.log('sorts: ', sorts)
  }
  const onFilter = (val: any) => {
    // product
    setFilters({ ...filters, product: val })
    // category
    setFilters({ ...filters, category: [...filters.category, val] })

    // if (Array.isArray(vals)) {
    //   const new_filters = vals.map((val: string) => val.toLowerCase())
    //   setFilters(new_filters)
    //   console.log(new_filters)
    // } else {
    //   const new_filters = [...filters, vals]
    //   setFilters(new_filters)
    //   console.log(new_filters)
    // }
    // setQuery(new_filters)
    // call api --> filtering according to (name, description)
  }

  const inputColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Flex flexDir="column" justifyContent={['center', 'space-between', 'flex-start', '']} my="3rem">
      <Input
        type="search"
        placeholder="Search..."
        w="15rem"
        onChange={e => onFilter({ ...filters, product: e.target.value })}
        value={query}
        bg={inputColor}
        focusBorderColor="accent_6"
      />

      <Flex
        flexDir={'column'}
        justifyContent="space-between"
        alignItems={'center'}
        borderRadius="10px"
        p="1.5rem .5rem"
        w="12rem"
      >
        <TemplateSort onSort={onSort} sorts={sorts} label="Rate" selectList={['most', 'less']} />
        <TemplateSort
          onSort={onSort}
          sorts={sorts}
          label="Creation Date"
          selectList={['new', 'old']}
        />

        <Flex
          flexDir={'column'}
          justifyContent="center"
          alignItems={'center'}
          w="full"
          my="1rem"
          borderRadius={'10px'}
          // bg={itemBgColor}
          p="1rem"
        >
          <Box as="span" color="gray_5" mb=".3rem" mr="auto">
            {'category'}
          </Box>
          <Select
            onChange={e =>
              onFilter({ ...filters, category: [...filters.category, e.target.value] })
            }
            bg={inputColor}
            maxW="10rem"
            focusBorderColor="accent_6"
          >
            {CATEGORY_LIST?.map(el => (
              <option value={el}> {el} </option>
            ))}
          </Select>
        </Flex>

        <TemplateSortSlider
          onSort={onSort}
          sorts={sorts}
          label="Discount"
          defaultValue={[10, 30]}
          selectList={['with', 'without']}
          onRange={val => console.log(val)}
        />

        <TemplateSortSlider
          onSort={onSort}
          sorts={sorts}
          label="Price"
          defaultValue={[10, 30]}
          selectList={['cheap', 'expensive']}
          onRange={val => console.log(val)}
        />
      </Flex>
    </Flex>
  )
}

export default Filter

const TemplateSortSlider = ({
  onSort,
  sorts,
  label,
  defaultValue,
  selectList,
  onRange
}: ITamplateSortSlider) => {
  const inputColor = useColorModeValue('white', 'gray_3')
  const itemBgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Flex
      flexDir={'column'}
      justifyContent="center"
      alignItems={'center'}
      w="full"
      my="1rem"
      borderRadius={'10px'}
      bg={itemBgColor}
      p="1rem"
    >
      <Box as="span" color="gray_5" mb=".3rem" mr="auto">
        {label}
      </Box>
      <Select
        onChange={e => onSort([...sorts, e.target.value])}
        bg={inputColor}
        maxW="10rem"
        mb=".75rem"
        focusBorderColor="accent_6"
      >
        {selectList?.map(item => (
          <option value={item}> {item} </option>
        ))}
      </Select>

      <RangeSlider
        colorScheme="green"
        aria-label={['min', 'max']}
        defaultValue={defaultValue}
        onChangeEnd={onRange}
      >
        <RangeSliderTrack bg="white">
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} bg="white" />
        <RangeSliderThumb index={1} bg="white" />
      </RangeSlider>
    </Flex>
  )
}

const TemplateSort = ({ label, onSort, sorts, selectList }: ITemplateSort) => {
  const inputColor = useColorModeValue('white', 'gray_3')
  const itemBgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Flex
      flexDir={'column'}
      justifyContent="center"
      alignItems={'center'}
      w="full"
      my="1rem"
      borderRadius={'10px'}
      bg={itemBgColor}
      p="1rem"
    >
      <Box as="span" color="gray_5" mb=".3rem" mr="auto">
        {label}
      </Box>
      <Select
        onChange={e => onSort([...sorts, e.target.value])}
        bg={inputColor}
        maxW="10rem"
        focusBorderColor="accent_6"
      >
        {selectList?.map(el => (
          <option value={el}> {el} </option>
        ))}
      </Select>
    </Flex>
  )
}
