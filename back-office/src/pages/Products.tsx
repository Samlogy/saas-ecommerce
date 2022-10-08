import {
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
  Box,
  useColorModeValue
} from '@chakra-ui/react'
import { useState, useRef, useCallback } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { BsFilterLeft } from 'react-icons/bs'

import {
  AddEditProduct,
  CustomDrawer,
  CustomTable,
  Layout,
  ProductBox,
  ProductDetails,
  ProductsFilter,
  SelectField,
  View
} from 'components'
import { useProductStore, useFilterStore } from 'store'
import heroImage from '../assets/images/home.png'
import productImage from '../assets/images/product.png'

const allProducts = [
  {
    id: 1,
    name: 'Automatic Watch',
    images: [heroImage, productImage, heroImage, productImage],
    quantity: 5,
    price: 350,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    delivery: '2-3 business days',
    reviews: 34,
    rate: 4,
    discount: 0.5
  },
  {
    id: 2,
    name: 'Automatic Watch',
    images: [heroImage, productImage, heroImage, productImage],
    quantity: 10,
    price: 350,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    delivery: '2-3 business days',
    reviews: 34,
    rate: 4,
    discount: 0.2
  },
  {
    id: 3,
    name: 'Automatic Watch',
    images: [heroImage, productImage, heroImage, productImage],
    quantity: 15,
    price: 350,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    delivery: '2-3 business days',
    reviews: 34,
    rate: 4,
    discount: null
  },
  {
    id: 4,
    name: 'Automatic Watch',
    images: [heroImage, productImage, heroImage, productImage],
    quantity: 23,
    price: 350,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    delivery: '2-3 business days',
    reviews: 34,
    rate: 4,
    discount: 0.1
  }
]
const headers = ['', 'image', 'name', 'quantity', 'price', 'discount', 'actions']

export default function Products() {
  const [products, setProducts] = useState<any>(allProducts)

  const action = useProductStore((state: any) => state.action)
  const setAction = useProductStore((state: any) => state.setAction)

  const filters = useFilterStore((state: any) => state.filters)
  const setFilters = useFilterStore((state: any) => state.setFilters)

  const isMobile = useBreakpointValue({ base: true, md: false })

  const [isVisible, setIsVisible] = useState(false)

  const btnRef = useRef<any>()

  const itemBgColor = useColorModeValue('gray_8', 'gray_2')

  function getFilters(filters: any): string[] | [] {
    if (!filters) return []

    let list: string[] = []
    for (let i in filters) {
      if (filters[i]) list.push(`${i}: ${filters[i]}`)
    }

    return list
  }
  const filterData = useCallback(() => getFilters(filters), [filters])

  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        Products List
      </Heading>

      <Button
        bg={'accent_3'}
        color={'white'}
        _hover={{ bg: 'accent_4' }}
        border="1px solid"
        borderColor={'accent_3'}
        ml="auto"
        display={'flex'}
        leftIcon={<AiOutlinePlus size={22} />}
        onClick={() => setAction({ ...action, add: true })}
      >
        Add Product
      </Button>

      <Flex flexDir={'column'}>
        <Text fontSize="1.3rem" fontWeight="600" mb=".75rem">
          Filter By
        </Text>

        <Flex justify="space-between">
          <Box mb=".75rem">
            <IconButton
              aria-label="trigger-filter"
              bg={itemBgColor}
              icon={<BsFilterLeft size={22} />}
              ref={btnRef}
              onClick={() => setIsVisible(true)}
            />
            <CustomDrawer
              title="Filter"
              isOpen={isVisible}
              onClose={() => setIsVisible(false)}
              body={<ProductsFilter setProducts={setProducts} />}
            />
          </Box>

          <SelectField
            name="sort"
            onChange={(e: any) => setFilters({ ...filters, sort: e.target.value })}
            value={filters.sort}
            placeholder="Sort"
            bg={itemBgColor}
            w={['10rem', '15rem']}
            borderRadius="10px"
          >
            <option value="recommended"> Recommended </option>
            <option value="newest"> Newest </option>
          </SelectField>
        </Flex>

        <Flex
          flexDir="row"
          flexWrap="wrap"
          justify="flex-start"
          mb="1rem"
          ml={isMobile ? '1rem' : '0'}
        >
          {filterData.map((el, idx) => (
            <Box
              key={idx}
              as="span"
              bg="accent_3"
              color="white"
              borderRadius="10px"
              p=".2rem"
              fontSize=".9rem"
              mb=".5rem"
              mr=".25rem"
            >
              {el}
            </Box>
          ))}
        </Flex>
        <Text textAlign={isMobile ? 'center' : 'left'} mb="1rem">
          Products result: {allProducts?.length}
        </Text>
      </Flex>

      <Flex flexDir={'column'}>
        <View cond={products?.length > 0}>
          <CustomTable headers={headers} data={products} />
        </View>

        <View cond={products?.length === 0}>
          <Text p="2rem 1rem" borderRadius="5px" bg={itemBgColor}>
            There is no product with thoes filters{' '}
          </Text>
        </View>
      </Flex>

      <View cond={action.delete}>
        <ProductBox
          isOpen={action.delete}
          setAction={setAction}
          onClose={() => setAction({ ...action, delete: false })}
          mode="delete"
        />
      </View>

      <View cond={action.disable}>
        <ProductBox
          isOpen={action.disable}
          setAction={setAction}
          onClose={() => setAction({ ...action, disable: false })}
          mode="disable"
        />
      </View>

      <View cond={action.add}>
        <AddEditProduct
          isOpen={action.add}
          onClose={() => setAction({ ...action, add: false })}
          mode="add"
        />
      </View>

      <View cond={action.edit}>
        <AddEditProduct
          isOpen={action.edit}
          onClose={() => setAction({ ...action, edit: false })}
          mode="edit"
        />
      </View>

      <View cond={action.details}>
        <ProductDetails
          isOpen={action.details}
          onClose={() => setAction({ ...action, details: false })}
        />
      </View>
    </Layout>
  )
}
