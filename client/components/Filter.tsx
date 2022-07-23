import {
  Box,
  Checkbox,
  Flex,
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
  useColorModeValue,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { IProduct } from '../lib/interfaces'
import { generateQuery, loadFavouriteProducts, formatCurrency } from '../lib/utils/fonctions'
import { TemplateFilter, InputField, MultiSelect, SelectField } from './'
import { useFilterStore } from '../store'

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

interface IFavouriteFilter {
  filters: IFilters
  setFilters: any
  setProducts: (products: IProduct[]) => void
}
interface IAccordionCustom {
  title: string
  body: React.ReactNode
}

export default function Filter({ setProducts }: { setProducts: (products: IProduct[]) => void }) {
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

  console.log(filters)

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
      />
      <SelectField
        name="sort"
        onChange={onFilter}
        value={filters.sort}
        placeholder="Sort"
        bg={itemBgColor}
        w="calc(15rem + 2rem)"
        borderRadius="10px"
      >
        <option value="recommended"> Recommended </option>
        <option value="newest"> Newest </option>
      </SelectField>

      <AccordionCustom
        title="Favourite Products"
        body={
          <FavouriteFilter filters={filters} setFilters={setFilters} setProducts={setProducts} />
        }
      />

      <AccordionCustom
        title="Discount"
        body={<DiscountSlider filters={filters} setFilters={setFilters} data={data.discounts} />}
      />

      <AccordionCustom
        title="Rate"
        body={<RateSlider filters={filters} setFilters={setFilters} data={data.rates} />}
      />

      <AccordionCustom
        title="Price"
        body={<PriceSlider filters={filters} setFilters={setFilters} data={data.prices} />}
      />

      <AccordionCustom
        title="Categories"
        body={<CategoriesFilter filters={filters} setFilters={setFilters} data={data.categories} />}
      />

      <AccordionCustom
        title="Condition"
        body={<ConditionFilter filters={filters} setFilters={setFilters} data={data.conditions} />}
      />
    </Flex>
  )
}

function FavouriteFilter({ filters, setFilters, setProducts }: IFavouriteFilter) {
  const [showFavouriteProducts, setShowFavouriteProducts] = useState(filters.isFavourite)

  const itemBgColor = useColorModeValue('gray_8', 'gray_2')
  const textColor = useColorModeValue('gray_4', 'gray_8')

  const handleCheckbox = e => {
    const value = e.target.value
    if (value === 'yes') {
      setShowFavouriteProducts('no')
      setFilters({ ...filters, isFavourite: 'no' })
      return
    }
    setShowFavouriteProducts('yes')
    setFilters({ ...filters, isFavourite: 'yes' })
    setProducts(loadFavouriteProducts())
  }
  const isFavourite = filters.isFavourite === 'yes' ? true : false

  return (
    <Box w="full" my="1rem" borderRadius={'10px'} bg={itemBgColor} p="1rem">
      <Checkbox
        defaultChecked={isFavourite}
        defaultValue={['yes']}
        colorScheme={'green'}
        onChange={handleCheckbox}
        value={showFavouriteProducts}
        color={textColor}
      >
        Favourite Products
      </Checkbox>
    </Box>
  )
}
function RateSlider({ filters, setFilters, data }: ISingleFilter) {
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <TemplateFilter>
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
    </TemplateFilter>
  )
}
function DiscountSlider({ filters, setFilters, data }: ISingleFilter) {
  const [showTooltip, setShowTooltip] = useState(false)

  function round(value: number, type: string): number {
    if (type === 'up') return Number((value * 100).toFixed(2))
    return Number((value * 0.01).toFixed(2))
  }

  return (
    <TemplateFilter>
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
    </TemplateFilter>
  )
}
function CategoriesFilter({ filters, setFilters, data }: ISingleFilter) {
  const inputColor = useColorModeValue('white', 'gray_2')

  // const [categories, setCategories] = useState([])

  return (
    <TemplateFilter>
      <MultiSelect
        label="Categories"
        options={data}
        name="categories"
        selectedOptions={filters.categories}
        setSelectedOptions={value => setFilters({ ...filters, categories: value })}
      />
    </TemplateFilter>
  )
}
function ConditionFilter({ filters, setFilters, data }: ISingleFilter) {
  const inputColor = useColorModeValue('white', 'gray_3')
  return (
    <TemplateFilter>
      <Select
        onChange={e => setFilters({ ...filters, condition: e.target.value })}
        name="condition"
        value={filters.condition}
        bg={inputColor}
        focusBorderColor="accent_6"
        borderRadius={'10px'}
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
function PriceSlider({ filters, setFilters, data }: ISingleFilter) {
  const itemBgColor = useColorModeValue('gray_8', 'gray_3')
  return (
    <TemplateFilter>
      from:
      <InputField
        type="number"
        name="price_min"
        onChange={e => setFilters({ ...filters, price: [e.target.value, filters.price[1]] })}
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
        onChange={e => setFilters({ ...filters, price: [filters.price[0], e.target.value] })}
        value={filters.price[1]}
        placeholder="Search..."
        bg={itemBgColor}
        w="7rem"
        borderRadius="10px"
      />
    </TemplateFilter>
  )
}

function AccordionCustom({ title, body }: IAccordionCustom) {
  return (
    <Accordion defaultIndex={[0]} allowMultiple w="17rem">
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left">
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>{body}</AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
