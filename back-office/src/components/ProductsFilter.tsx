import {
  Flex,
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
import { IProduct } from '../lib/interfaces'
import { generateQuery } from '../lib/utils/functions'
import { useFilterStore } from '../store'
import { CustomAccordion, InputField, MultiSelect } from './'

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
  setFilters: React.Dispatch<React.SetStateAction<IFilters>>
  filters: any
  data: string[] | number[]
}

export default function ProductsFilter({
  setProducts
}: {
  setProducts: (products: IProduct[]) => void
}) {
  const filters = useFilterStore((state: any) => state.filters)
  const setFilters = useFilterStore((state: any) => state.setFilters)

  // load all lists once (catergories - condition -) save them inside localstorage
  const onFilter = (e: any) => {
    if (e.target == null) return

    setFilters({ ...filters, [e.target.name]: e.target.value })
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
      <InputField
        type="search"
        name="search"
        onChange={onFilter}
        value={filters.search}
        placeholder="Search..."
        bg={itemBgColor}
        w="calc(15rem + 2rem)"
        borderRadius="10px"
        mb="1rem"
      />

      <CustomAccordion
        title="Discount"
        body={<DiscountSlider filters={filters} setFilters={setFilters} data={data.discounts} />}
        w="17rem"
      />

      <CustomAccordion
        title="Rate"
        body={<RateSlider filters={filters} setFilters={setFilters} data={data.rates} />}
        w="17rem"
      />

      <CustomAccordion
        title="Price"
        body={<PriceSlider filters={filters} setFilters={setFilters} data={data.prices} />}
        w="17rem"
      />

      <CustomAccordion
        title="Categories"
        body={<CategoriesFilter filters={filters} setFilters={setFilters} data={data.categories} />}
        w="17rem"
      />

      <CustomAccordion
        title="Condition"
        body={<ConditionFilter filters={filters} setFilters={setFilters} data={data.conditions} />}
        w="17rem"
      />
    </Flex>
  )
}

function RateSlider({ filters, setFilters, data }: ISingleFilter) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <>
      <Slider
        id="slider-rate"
        defaultValue={filters.rate}
        min={0}
        max={5}
        colorScheme="green"
        name="rate"
        onChange={value => setFilters({ ...filters, rate: value })}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {[0, 1, 2, 3, 4, 5].map((el, idx) => (
          <SliderMark key={idx} value={el} mt="1" fontSize="sm">
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
    </>
  )
}
function DiscountSlider({ filters, setFilters }: ISingleFilter) {
  const [showTooltip, setShowTooltip] = useState(false)

  function round(value: number, type: string): number {
    if (type === 'up') return Number((value * 100).toFixed(2))
    return Number((value * 0.01).toFixed(2))
  }

  return (
    <>
      <Slider
        id="slider-discount"
        defaultValue={round(filters.discount, 'up')}
        min={0}
        max={100}
        colorScheme="green"
        name="discount"
        onChange={value => setFilters({ ...filters, discount: round(value, 'down') })}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {[25, 50, 75].map((el, idx) => (
          <SliderMark key={idx} value={el} mt="1" fontSize="sm">
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
    </>
  )
}
function CategoriesFilter({ filters, setFilters, data }: ISingleFilter) {
  return (
    <>
      <MultiSelect
        name="Categories"
        options={data}
        selectedOptions={filters.categories}
        setSelectedOptions={(value: any) => setFilters({ ...filters, categories: value })}
      />
    </>
  )
}
function ConditionFilter({ filters, setFilters, data }: ISingleFilter) {
  const itemBgColor = useColorModeValue('gray_8', 'gray_3')
  return (
    <>
      <Select
        onChange={(e: any) => setFilters({ ...filters, condition: e.target.value })}
        name="condition"
        value={filters.condition}
        bg={itemBgColor}
        focusBorderColor="accent_6"
        borderRadius={'10px'}
      >
        {data?.map((el, idx) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </Select>
    </>
  )
}
function PriceSlider({ filters, setFilters, data }: ISingleFilter) {
  const itemBgColor = useColorModeValue('gray_8', 'gray_3')
  return (
    <Flex flexDir={'column'} align="center" justify={'center'}>
      from:
      <InputField
        type="number"
        name="price_min"
        onChange={(e: any) => setFilters({ ...filters, price: [e.target.value, filters.price[1]] })}
        value={filters.price[0]}
        placeholder="Search..."
        bg={itemBgColor}
        w="7rem"
        borderRadius="10px"
      />
      to:
      <InputField
        type="number"
        name="price_max"
        onChange={(e: any) => setFilters({ ...filters, price: [filters.price[0], e.target.value] })}
        value={filters.price[1]}
        placeholder="Search..."
        bg={itemBgColor}
        w="7rem"
        borderRadius="10px"
      />
    </Flex>
  )
}
