import { Flex, Heading, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Filter, Layout, Pagination, ProductCard, View } from '../components'
import { IProduct } from '../lib/interfaces'
import productImage from '../public/images/product.png'

export default function Products({ products }: { products: IProduct[] }) {
  const [page, setPage] = useState<number>(1)
  const data = { info: { pages: 10 } }
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
        {' '}
        Products{' '}
      </Heading>

      <Filter />

      <View cond={products?.length > 0}>
        <Text mb="1rem"> Products result: {products?.length} </Text>

        <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
          {products?.map((product: IProduct) => (
            <ProductCard id={product.id} data={product} />
          ))}
        </Flex>
      </View>

      <View cond={products?.length === 0}>
        <Text> There is no product with thoes filters </Text>
      </View>

      <Pagination
        page={page}
        pages={[page, page + 1, page + 2, page + 3]}
        changePage={setPage}
        nextPage={() => setPage(prev => prev + 1)}
        prevPage={() => setPage(prev => prev - 1)}
        startPage={() => setPage(1)}
        endPage={() => setPage(data.info.pages)}
        lastPage={data.info.pages}
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
      rating: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2
    },
    {
      id: 2,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 4,
      rating: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2
    },
    {
      id: 3,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 2,
      rating: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2
    },
    {
      id: 4,
      isNew: true,
      img: productImage.src,
      name: 'Wayfarer Classic',
      price: 20,
      rating: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2
    }
  ]

  return {
    props: {
      products
    }
  }
}
