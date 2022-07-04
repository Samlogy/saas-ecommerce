import {
  Flex,
  Heading,
  Text,
  IconButton,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { BsFilterLeft } from 'react-icons/bs'

import { Filter, Layout, Pagination, ProductCard, View } from '../components'
import { useWindowDimensions } from '../lib/hooks'
import { IProduct } from '../lib/interfaces'
import productImage from '../public/images/product.png'

export default function Products({ products }: { products: IProduct[] }) {
  const [page, setPage] = useState<number>(1)
  const data = { info: { pages: 10 } }

  const { width } = useWindowDimensions()

  const [isVisible, setIsVisible] = useState(false)
  const btnRef = React.useRef()
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
        Products
      </Heading>

      <Flex flexDir={'row'} justifyContent="space-between">
        <View cond={width >= 700}>
          <Filter />
        </View>

        <View cond={width < 700}>
          <IconButton
            aria-label="trigger filter"
            icon={<BsFilterLeft size={18} />}
            ref={btnRef}
            onClick={() => setIsVisible(true)}
          />
          <Drawer
            isOpen={isVisible}
            placement="right"
            onClose={() => setIsVisible(false)}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader> Filter </DrawerHeader>

              <DrawerBody>
                <Filter />
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </View>

        <Flex flexDir={'column'}>
          <View cond={products?.length > 0}>
            <Text mb="1rem" ml="3rem">
              Products result: {products?.length}{' '}
            </Text>

            <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
              {products?.map((product: IProduct) => (
                <ProductCard key={product.id} data={product} readOnly />
              ))}
            </Flex>
          </View>

          <View cond={products?.length === 0}>
            <Text> There is no product with thoes filters </Text>
          </View>
        </Flex>
      </Flex>

      <Pagination
        page={page}
        pages={[page, page + 1, page + 2, page + 3]}
        changePage={setPage}
        nextPage={() => setPage(prev => prev + 1)}
        prevPage={() => setPage(prev => prev - 1)}
        startPage={() => setPage(1)}
        endPage={() => setPage(data.info.pages)}
        lastPage={data.info.pages}
        isMobile={width < 700 ? true : false}
      />
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const products = [
    {
      id: 1,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 6,
      rate: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: null,
      isFavourite: false
    },
    {
      id: 2,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 4,
      rate: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2,
      isFavourite: true
    },
    {
      id: 3,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 2,
      rate: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2,
      isFavourite: false
    },
    {
      id: 4,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 20,
      rate: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2,
      isFavourite: true
    }
  ]

  return {
    props: {
      products
    }
  }
}
