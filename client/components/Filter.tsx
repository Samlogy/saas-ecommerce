import {
  Box,
  Checkbox,
  Flex,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Select,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { generateQuery, loadFavouriteProducts } from '../lib/utils/fonctions'
import { TemplateFilter } from './'

const CATEGORY_LIST = ['technology', 'food', 'tools', 'sport', 'teaching']
const data = {
  categories: CATEGORY_LIST,
  conditions: CATEGORY_LIST,
  prices: [700, 1500, 10000],
  discounts: [25, 50, 75],
  rates: [1, 2, 3, 4, 5]
}

type IFilters = {
  search: string
  rate: number
  categories: string[]
  discount: string
  price: number[]
  condition: string
}
interface ISingleFilter {
  label: string
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>
  filters: any
  data: string[] | number[]
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
  const onFilter = () => {
    const query = generateQuery(filters)
    // call api --> filter
    console.log(query)
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

      <RateSlider label="Rate" filters={filters} setFilters={setFilters} data={data.rates} />
      <DiscountSlider
        label="Discount"
        filters={filters}
        setFilters={setFilters}
        data={data.discounts}
      />
      <CategoriesFilter
        label="Categories"
        filters={filters}
        setFilters={setFilters}
        data={data.categories}
      />
      <ConditionFilter
        label="Condition"
        filters={filters}
        setFilters={setFilters}
        data={data.conditions}
      />
      <PriceSlider label="Price" filters={filters} setFilters={setFilters} data={data.prices} />
    </Flex>
  )
}

function FavouriteFilter({ setProducts }) {
  const [showFavouriteProducts, setShowFavouriteProducts] = useState('no')

  const itemBgColor = useColorModeValue('gray_8', 'gray_2')

  const handleCheckbox = e => {
    const value = e.target.value
    if (value === 'yes') {
      setShowFavouriteProducts('no')
      return
    }
    setShowFavouriteProducts('yes')
    setProducts(loadFavouriteProducts())
  }

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
function RateSlider({ label, filters, setFilters, data }: ISingleFilter) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <TemplateFilter label={label}>
      <Slider
        id="slider"
        defaultValue={filters.rate}
        min={0}
        max={5}
        colorScheme="green"
        onChange={value => setFilters({ ...filters, rate: value })}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {[0, 1, 2, 3, 4, 5].map(el => (
          <SliderMark value={el} mt="1" fontSize="sm">
            {el}
          </SliderMark>
        ))}

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
    </TemplateFilter>
  )
}
function DiscountSlider({ label, filters, setFilters, data }: ISingleFilter) {
  const [showTooltip, setShowTooltip] = useState(false)

  function round(value: number, type: string): number {
    if (type === 'up') return Number((value * 100).toFixed(2))
    return Number((value * 0.01).toFixed(2))
  }

  return (
    <TemplateFilter label={label}>
      <Slider
        id="slider"
        defaultValue={5}
        min={0}
        max={100}
        colorScheme="green"
        onChange={value => setFilters({ ...filters, discount: round(value, 'down') })}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {[25, 50, 75].map(el => (
          <SliderMark value={el} mt="1" fontSize="sm">
            {el}%
          </SliderMark>
        ))}

        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="green.500"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${round(filters.discount, 'up')}%`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </TemplateFilter>
  )
}
function CategoriesFilter({ label, filters, setFilters, data }: ISingleFilter) {
  const inputColor = useColorModeValue('white', 'gray_2')
  const handleCategories = e => {
    if (filters.categories.length > 0) {
      setFilters({ ...filters, categories: [...filters.categories, e.target.value] })
      return
    }
    setFilters({ ...filters, categories: [e.target.value] })
  }
  return (
    <TemplateFilter label={label}>
      <Select onChange={handleCategories} bg={inputColor} focusBorderColor="accent_6">
        {data?.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </Select>
    </TemplateFilter>
  )
}
function ConditionFilter({ label, setFilters, filters, data }: ISingleFilter) {
  const inputColor = useColorModeValue('white', 'gray_2')
  return (
    <TemplateFilter label={label}>
      <Select
        onChange={e => setFilters({ ...filters, condition: e.target.value })}
        bg={inputColor}
        focusBorderColor="accent_6"
      >
        {data?.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </Select>
    </TemplateFilter>
  )
}
function PriceSlider({ label, filters, setFilters, data }: ISingleFilter) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <TemplateFilter label={label}>
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
    </TemplateFilter>
  )
}
