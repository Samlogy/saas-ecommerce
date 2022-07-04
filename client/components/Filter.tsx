import {
  Box,
  Flex,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  useColorModeValue,
  Checkbox,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Tooltip
} from '@chakra-ui/react'
import { useState } from 'react'
import { loadState } from '../lib/utils/localStorage'

const CATEGORY_LIST = ['technology', 'food', 'tools', 'sport', 'teaching']

interface ITemplateSort {
  onFilter: any
  filters: any
  label: string
  selectList: any
}

interface ITamplateSortSlider {
  onFilter: any
  filters: any
  label: string
  defaultValue: any
  selectList: any
  onRange: any
}

export default function Filter() {
  const [filters, setFilters] = useState({
    search: '',
    rate: 1,
    categories: [],
    discount: '',
    price: [10, 30],
    condition: ''
  })
  const [products, setProducts] = useState([])

  // load all lists once (catergories - condition -) save them inside localstorage

  function generateQuery(obj: any): string {
    let query = ''
    for (const key in obj) {
      if (obj[key]) {
        query += `${key}=${obj[key]}&`
      }
    }

    return query
  }
  // console.log()

  const onFilter = () => {
    generateQuery(filters)
    // call api --> filter
    console.log(filters)
  }

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
        onChange={e => setFilters({ ...filters, search: e.target.value })}
        value={filters.search}
        bg={itemBgColor}
        focusBorderColor="accent_6"
      />

      <FavouriteFilter setProducts={setProducts} />

      <RateSlider label="Rate" filters={filters} setFilters={setFilters} />
      <DiscountSlider label="Discount" filters={filters} setFilters={setFilters} />
      <CategoriesFilter
        label="Categories"
        filters={filters}
        setFilters={setFilters}
        data={CATEGORY_LIST}
      />
      <ConditionFilter
        label="Condition"
        filters={filters}
        setFilters={setFilters}
        data={CATEGORY_LIST}
      />
      <PriceSlider label="Price" filters={filters} setFilters={setFilters} />
    </Flex>
  )
}

function FavouriteFilter({ setProducts }) {
  const [showFavouriteProducts, setShowFavouriteProducts] = useState('no')

  const inputColor = useColorModeValue('white', 'gray_2')
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')

  const handleCheckbox = e => {
    const value = e.target.value
    if (value === 'yes') {
      setShowFavouriteProducts('no')
      return
    }
    setShowFavouriteProducts('yes')
    // laod favouite products --> local storage
    const data = loadState('favourite-products')
    console.log(data)
    if (data) setProducts(data)
    // load products by id
  }
  console.log(showFavouriteProducts)

  return (
    <Box w="full" my="1rem" borderRadius={'10px'} bg={itemBgColor} p="1rem">
      <Checkbox
        defaultValue={['yes']}
        colorScheme={'green'}
        onChange={handleCheckbox}
        value={showFavouriteProducts}
      >
        Favourite Products
      </Checkbox>
    </Box>
  )
}
function RateSlider({ label, filters, setFilters }: any) {
  const [showTooltip, setShowTooltip] = useState(false)

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
      <Box as="span" color="gray_3" m="0 auto .3rem 0">
        {label}
      </Box>
      <Slider
        id="slider"
        defaultValue={filters.rate}
        min={1}
        max={5}
        colorScheme="green"
        onChange={value => setFilters({ ...filters, rate: value })}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={1} mt="1" fontSize="sm">
          1
        </SliderMark>
        <SliderMark value={2} mt="1" fontSize="sm">
          2
        </SliderMark>
        <SliderMark value={3} mt="1" fontSize="sm">
          3
        </SliderMark>
        <SliderMark value={4} mt="1" fontSize="sm">
          4
        </SliderMark>
        <SliderMark value={5} mt="1" fontSize="sm">
          5
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="green.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${filters.rate}`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Flex>
  )
}
function DiscountSlider({ label, filters, setFilters }: any) {
  const [showTooltip, setShowTooltip] = useState(false)

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
      <Box as="span" color="gray_3" m="0 auto .3rem 0">
        {label}
      </Box>
      <Slider
        id="slider"
        defaultValue={5}
        min={0}
        max={100}
        colorScheme="green"
        onChange={value => setFilters({ ...filters, discount: value * 0.01 })}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderMark value={25} mt="1" ml="-2.5" fontSize="sm">
          25%
        </SliderMark>
        <SliderMark value={50} mt="1" ml="-2.5" fontSize="sm">
          50%
        </SliderMark>
        <SliderMark value={75} mt="1" ml="-2.5" fontSize="sm">
          75%
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="green.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${filters.discount * 100}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </Flex>
  )
}
function CategoriesFilter({ label, filters, setFilters, data }: any) {
  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
  const inputColor = useColorModeValue('white', 'gray_2')
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
      <Box as="span" color="gray_3" mb=".3rem" mr="auto">
        {label}
      </Box>
      <Select
        onChange={e => setFilters({ ...filters, categories: [e.target.value] })}
        bg={inputColor}
        maxW="10rem"
        focusBorderColor="accent_6"
      >
        {data?.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </Select>
    </Flex>
  )
}
function ConditionFilter({ label, setFilters, filters, data }: any) {
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
      <Box as="span" color="gray_3" m="0 auto .3rem 0">
        {label}
      </Box>
      <Select
        onChange={e => setFilters({ ...filters, condition: e.target.value })}
        bg={inputColor}
        maxW="10rem"
        focusBorderColor="accent_6"
      >
        {data?.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </Select>
    </Flex>
  )
}
function PriceSlider({ label, filters, setFilters }: any) {
  const [showTooltip, setShowTooltip] = useState(false)

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
      <Box as="span" color="gray_3" m="0 auto .3rem 0">
        {label}
      </Box>
      <RangeSlider
        defaultValue={filters.price}
        colorScheme="green"
        aria-label={['min', 'max']}
        onChangeEnd={value => setFilters({ ...filters, price: value })}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>

        <Tooltip
          hasArrow
          bg="green.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${filters.price[0]}`}
        >
          <RangeSliderThumb index={0} />
        </Tooltip>

        <Tooltip
          hasArrow
          bg="green.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${filters.price[1]}`}
        >
          <RangeSliderThumb index={1} />
        </Tooltip>
      </RangeSlider>
    </Flex>
  )
}
