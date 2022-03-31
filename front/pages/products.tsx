import { Heading, Text, Flex } from '@chakra-ui/react'

import { Layout, ProductCard, View, Filter, Pagination } from '../components'
import { IProduct } from '../lib/interfaces'
import productImage from '../public/images/product.png'

export default function Products({ products }: { products: IProduct[] }) {
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading as="h2"> Products </Heading>

      <Filter />

      <View cond={products?.length > 0}>
        <Text> Product result are: {products?.length} </Text>

        <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
          {products?.length > 0 && products?.map((product: any) => <ProductCard data={product} />)}
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
