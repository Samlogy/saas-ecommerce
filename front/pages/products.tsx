import { Heading, Text, Flex } from '@chakra-ui/react'

import { Layout, ProductCard, View, Filter, Pagination } from '../components'
import { IProduct } from '../lib/interfaces'

export default function Products({ products }: { products: any }) {
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading as="h2"> Products </Heading>

      <Filter />

      <View cond={products?.length > 0}>
        <Text> Product result are: {products?.length} </Text>

        <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
          {products?.map((el: any) => (
            <ProductCard data={el} />
          ))}
        </Flex>
      </View>

      <View cond={products?.length === 0}>
        <Text> There is no product with thoes filters </Text>
      </View>
    </Layout>
  )
}

export const getServerSideProps = async () => {
  const products = [
    {
      id: 1,
      isNew: true,
      img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
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
      img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
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
      img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
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
      img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
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
