import {
  Flex,
  Heading,
  IconButton,
  Text,
  Box,
  useBreakpointValue,
  useColorModeValue
} from '@chakra-ui/react'
import { useRef, useState, useMemo } from 'react'
import { BsFilterLeft } from 'react-icons/bs'

import {
  CustomDrawer,
  Filter,
  Layout,
  Pagination,
  ProductCard,
  View,
  SelectField
} from '../components'
import { IProduct } from '../lib/interfaces'
import { useFilterStore } from '../store'

import heroImage from '../public/images/home.png'
import productImage from '../public/images/product.png'

export default function Products({ products }: { products: IProduct[] }) {
  const [currentPage, setCurrentPage] = useState(1)
  let PageSize = 1
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize
    const lastPageIndex = firstPageIndex + PageSize
    return products.slice(firstPageIndex, lastPageIndex)
  }, [currentPage])

  const [allProducts, setProducts] = useState<IProduct[]>(products)

  const filters = useFilterStore((state: any) => state.filters)
  const setFilters = useFilterStore((state: any) => state.setFilters)

  const isMobile = useBreakpointValue({ base: true, md: false })

  const [isVisible, setIsVisible] = useState(false)
  const btnRef = useRef()

  const itemBgColor = useColorModeValue('gray_8', 'gray_2')

  function getFilters(filters: any): string[] {
    if (!filters) return

    let list: string[] = []
    for (let i in filters) {
      if (filters[i]) list.push(`${i}: ${filters[i]}`)
    }

    return list
  }
  const filterData = getFilters(filters)

  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
        Products
      </Heading>

      <Flex flexDir={'row'} justifyContent="space-between">
        <Flex flexDir={'column'}>
          <Text
            ml=".75rem"
            fontSize="1.3rem"
            fontWeight="600"
            display={isMobile ? 'none' : 'block'}
          >
            Filter By
          </Text>
          <View cond={!isMobile}>
            <Filter setProducts={setProducts} />
          </View>

          <View cond={isMobile}>
            <IconButton
              aria-label="trigger filter"
              icon={<BsFilterLeft size={18} />}
              ref={btnRef}
              onClick={() => setIsVisible(true)}
            />
            <CustomDrawer
              title="Filter"
              isOpen={isVisible}
              onClose={() => setIsVisible(false)}
              body={<Filter setProducts={setProducts} />}
            />
          </View>
        </Flex>

        <Flex flexDir={'column'}>
          <View cond={allProducts?.length > 0}>
            <Flex
              flexDir="row"
              flexWrap="wrap"
              justify="space-between"
              mb="1rem"
              ml={isMobile ? '1rem' : '0'}
            >
              {filterData.map((el, idx) => (
                <Box
                  key={idx}
                  as="span"
                  bg="accent_4"
                  color="white"
                  borderRadius="10px"
                  p=".2rem"
                  fontSize=".9rem"
                  mb=".5rem"
                >
                  {el}
                </Box>
              ))}
            </Flex>
            <Flex justify="space-between">
              <Text mb="1rem" textAlign={isMobile ? 'center' : 'left'} ml=".5rem">
                Products result: {allProducts?.length}
              </Text>

              <SelectField
                name="sort"
                onChange={e => setFilters({ ...filters, sort: e.target.value })}
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

            <Flex flexDir="row" flexWrap="wrap" justifyContent={['center', '', 'space-between']}>
              {allProducts?.map((product: IProduct) => (
                <ProductCard key={product.id} data={product} readOnly />
              ))}
            </Flex>
          </View>

          <View cond={allProducts?.length === 0}>
            <Text> There is no product with these filters </Text>
          </View>
        </Flex>
      </Flex>

      <View cond={allProducts.length > PageSize}>
        <Pagination
          currentPage={currentPage}
          totalCount={allProducts.length}
          pageSize={PageSize}
          onPageChange={page => setCurrentPage(page)}
          isMobile={isMobile ? true : false}
        />
      </View>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const products = [
    {
      id: 1,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    },
    {
      id: 2,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    },
    {
      id: 3,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    },
    {
      id: 4,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    }
  ]

  return {
    props: {
      products
    }
  }
}
