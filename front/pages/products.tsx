import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react'
// import Link from 'next/link'

import { Layout, ProductCard, View, Filter } from '../components'

const data = [
  {
    id: 1,
    isNew: true,
    img: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
    name: 'Wayfarer Classic',
    price: 4.5,
    rating: 4.2,
    quantity: 11,
    reviews: 34,
    currency: '£',
    discount: 0.2
  }
]

export default function Products() {
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading as="h2"> Products </Heading>

      <Filter />

      <View cond={data.length > 0}>
        <Text> Product result are: {data.length} </Text>

        <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
          {data.map((el: any) => (
            <ProductCard data={el} />
          ))}
        </Flex>
      </View>

      <View cond={data.length === 0}>
        <Text> There is no product with thoes filters </Text>
      </View>
    </Layout>
  )
}
