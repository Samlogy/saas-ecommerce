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
import { generateQuery, formatCurrency } from 'lib/utils/functions'
import { TemplateFilter, InputField } from './'
import { useFilterStore } from 'store'

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
  isFavourite: string
}
interface ISingleFilter {
  label: string
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>
  filters: any
  data: string[] | number[]
}

export default function ProductsFilter() {
  const filters = useFilterStore((state: any) => state.filters)
  const setFilters = useFilterStore((state: any) => state.setFilters)

  const setProducts = useFilterStore((state: any) => state.setProducts)

  // load all lists once (catergories - condition -) save them inside localstorage
  const onFilter = () => {
    const query = generateQuery(filters)
    // call api --> filter
    console.log(query)
  }

  console.log(filters)

  const itemBgColor = useColorModeValue('gray_8', 'gray_2')

  return (
    <Flex
      flexDir={'column'}
      justifyContent="flex-start"
      alignItems={'center'}
      borderRadius="10px"
      p="1.5rem .5rem"
    >
      <InputField
        type="search"
        name="email"
        onChange={(e: any) => setFilters({ ...filters, search: e.target.value })}
        value={filters.search}
        placeholder="Search..."
        bg={itemBgColor}
        w="15rem"
      />

      <RateSlider label="Rate" filters={filters} setFilters={setFilters} data={data.rates} />
      <DiscountSlider
        label="Discount"
        filters={filters}
        setFilters={setFilters}
        data={data.discounts}
      />
      <PriceSlider label="Price" filters={filters} setFilters={setFilters} data={data.prices} />
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
    </Flex>
  )
}

function RateSlider({ label, filters, setFilters, data }: ISingleFilter) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <TemplateFilter label={label}>
      <Slider
        id="slider-rate"
        defaultValue={filters.rate}
        min={0}
        max={5}
        colorScheme="green"
        onChange={(value: any) => setFilters({ ...filters, rate: value })}
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
        id="slider-discount"
        defaultValue={round(filters.discount, 'up')}
        min={0}
        max={100}
        colorScheme="green"
        onChange={(value: any) => setFilters({ ...filters, discount: round(value, 'down') })}
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
  const handleCategories = (e: any) => {
    if (filters.categories.length > 0) {
      setFilters({ ...filters, categories: [...filters.categories, e.target.value] })
      return
    }
    setFilters({ ...filters, categories: [e.target.value] })
  }
  return (
    <TemplateFilter label={label}>
      <Select
        onChange={handleCategories}
        value={filters.categories[0]}
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
function ConditionFilter({ label, filters, setFilters, data }: ISingleFilter) {
  const inputColor = useColorModeValue('white', 'gray_2')
  return (
    <TemplateFilter label={label}>
      <Select
        onChange={(e: any) => setFilters({ ...filters, condition: e.target.value })}
        value={filters.condition}
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
  return (
    <TemplateFilter label={label}>
      <Box as="span"> from: {formatCurrency(filters.price[0])} </Box>
      <Box as="span"> to: {formatCurrency(filters.price[1])} </Box>

      <RangeSlider
        defaultValue={filters.price}
        colorScheme="green"
        aria-label={['min', 'max']}
        onChangeEnd={(value: any) => setFilters({ ...filters, price: value })}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>

        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
    </TemplateFilter>
  )
}
