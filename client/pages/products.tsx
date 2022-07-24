import { Flex, Heading, IconButton, Text, useBreakpointValue } from '@chakra-ui/react'
import { useRef, useState, useMemo } from 'react'
import { BsFilterLeft } from 'react-icons/bs'

import { CustomDrawer, Filter, Layout, Pagination, ProductCard, View } from '../components'
import { IProduct } from '../lib/interfaces'

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

  const isMobile = useBreakpointValue({ base: true, md: false })

  const [isVisible, setIsVisible] = useState(false)
  const btnRef = useRef()
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
            <Text mb="1rem" textAlign={!isMobile ? 'center' : 'left'} ml=".5rem">
              Products result: {allProducts?.length}
            </Text>

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
