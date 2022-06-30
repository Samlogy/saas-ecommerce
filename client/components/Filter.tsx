import {
  Box,
  Flex,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  useColorModeValue
} from '@chakra-ui/react'
import { useState } from 'react'

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

interface IFilter {
  isOpen: boolean
  close: any
  open: any
}

// { isVisible }: { isVisible: boolean }
const Filter = ({ isOpen, close, open }: IFilter) => {
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
  }

  const inputColor = useColorModeValue('white', 'gray_2')
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')

  return (
    <Flex
      flexDir={'column'}
      justifyContent={'flex-start'}
      alignItems={'center'}
      borderRadius="10px"
      p="1.5rem .5rem"
    >
      <Input
        type="search"
        placeholder="Search..."
        w="15rem"
        onChange={e => setQuery(e.target.value)}
        value={query}
        bg={itemBgColor}
        focusBorderColor="accent_6"
      />
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
        bg={itemBgColor}
        p="1rem"
      >
        <Box as="span" color="gray_5" mb=".3rem" mr="auto">
          {'Category'}
        </Box>
        <Select
          onChange={e => onFilter({ ...filters, category: [...filters.category, e.target.value] })}
          bg={inputColor}
          maxW="10rem"
          focusBorderColor="accent_6"
        >
          {CATEGORY_LIST?.map((el, idx) => (
            <option key={idx} value={el}>
              {' '}
              {el}{' '}
            </option>
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
  const inputColor = useColorModeValue('white', 'gray_2')
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
  const [range, setRange] = useState([])
  // console.log(range)
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
      <Box as="span" color="gray_5" m="0 auto .3rem 2rem">
        {label}
      </Box>
      <Select
        onChange={e => onSort([...sorts, e.target.value])}
        bg={inputColor}
        maxW="10rem"
        mb=".75rem"
        focusBorderColor="accent_6"
      >
        {selectList?.map((item, idx) => (
          <option key={idx} value={item}>
            {item}
          </option>
        ))}
      </Select>

      <Box fontSize=".9rem" color="gray_5">
        <Box as="span" mx=".2rem">
          min: {range[0]}
        </Box>
        <Box as="span" mx=".2rem">
          max: {range[1]}
        </Box>
      </Box>

      <RangeSlider
        colorScheme="green"
        aria-label={['min', 'max']}
        defaultValue={defaultValue}
        onChange={val => setRange(val)}
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
  const inputColor = useColorModeValue('white', 'gray_2')
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
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
      <Box as="span" color="gray_5" m="0 auto .3rem 2rem">
        {label}
      </Box>
      <Select
        onChange={e => onSort([...sorts, e.target.value])}
        bg={inputColor}
        maxW="10rem"
        focusBorderColor="accent_6"
      >
        {selectList?.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </Select>
    </Flex>
  )
}
