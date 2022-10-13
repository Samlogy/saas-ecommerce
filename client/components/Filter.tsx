import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  Flex,
  Slider,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip,
  useColorModeValue
} from '@chakra-ui/react'
import React, { useCallback, useState } from 'react'
import { IProduct } from '../lib/interfaces'
import { generateQuery, loadFavouriteProducts } from '../lib/utils/fonctions'
import { useFilterStore } from '../store'
import { InputField, MultiSelect, SelectField, TemplateFilter } from './'

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
    const query = useCallback(() => generateQuery(filters), [filters])
    // call api --> filter
    console.log(query)
  }

  return (
    <Flex flexDir={'column'} justifyContent={'flex-start'} alignItems={'center'} p="1.5em .5em">
      <InputField
        type="search"
        name="search"
        onChange={onFilter}
        value={filters.search}
        placeholder="Search..."
      />

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

  const textColor = useColorModeValue('gray_3', 'gray_8')

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
    <>
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
    </>
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
  return (
    <>
      <MultiSelect
        label="Categories"
        options={data}
        name="categories"
        selectedOptions={filters.categories}
        setSelectedOptions={value => setFilters({ ...filters, categories: value })}
      />
    </>
  )
}
function ConditionFilter({ filters, setFilters, data }: ISingleFilter) {
  return (
    <>
      <SelectField
        onChange={e => setFilters({ ...filters, condition: e.target.value })}
        name="condition"
        value={filters.condition}
        w="100%"
      >
        {data?.map((el, idx: number) => (
          <option key={idx} value={el}>
            {el}
          </option>
        ))}
      </SelectField>
    </>
  )
}
function PriceSlider({ filters, setFilters, data }: ISingleFilter) {
  return (
    <Flex flexDir={'column'} align="center" justify={'center'}>
      from:
      <InputField
        type="number"
        name="price_min"
        onChange={e => setFilters({ ...filters, price: [e.target.value, filters.price[1]] })}
        value={filters.price[0]}
        placeholder="Search..."
        w="7em"
      />
      to:
      <InputField
        type="number"
        name="price_max"
        onChange={e => setFilters({ ...filters, price: [filters.price[0], e.target.value] })}
        value={filters.price[1]}
        placeholder="Search..."
        w="7em"
      />
    </Flex>
  )
}

function AccordionCustom({ title, body }: IAccordionCustom) {
  const itemColor = useColorModeValue('gray_2', 'gray_8')
  return (
    <Accordion defaultIndex={[0]} allowMultiple w="20em" mb="1em">
      <AccordionItem>
        <AccordionButton
          color={itemColor}
          _focus={{ outline: 'none' }}
          _expanded={{ bg: 'accent_2', color: 'white' }}
        >
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
