import { Flex, Heading, IconButton, Text } from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { BsFilterLeft } from 'react-icons/bs'

import { CustomDrawer, Filter, Layout, Pagination, ProductCard, View } from '../components'
import { useWindowDimensions } from '../lib/hooks'
import { IProduct } from '../lib/interfaces'

import heroImage from '../public/images/home.png'
import productImage from '../public/images/product.png'

export default function Products({ products }: { products: IProduct[] }) {
  const [page, setPage] = useState<number>(1)
  const data = { info: { pages: 10 } }

  const [allProducts, setProducts] = useState<IProduct[]>(products)

  const { width } = useWindowDimensions()

  const [isVisible, setIsVisible] = useState(false)
  const btnRef = useRef()
  return (
    <Layout isHeaderVisible isFooterVisible>
      <Heading fontSize="1.5rem" mb="2rem" textTransform={'uppercase'}>
        Products
      </Heading>

      <Flex flexDir={'row'} justifyContent="space-between">
        <View cond={width >= 700}>
          <Filter setProducts={setProducts} />
        </View>

        <View cond={width < 700}>
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

        <Flex flexDir={'column'}>
          <View cond={allProducts?.length > 0}>
            <Text mb="1rem" ml="3rem">
              Products result: {allProducts?.length}{' '}
            </Text>

            <Flex flexDir="row" flexWrap="wrap" justifyContent="space-between">
              {allProducts?.map((product: IProduct) => (
                <ProductCard key={product.id} data={product} readOnly />
              ))}
            </Flex>
          </View>

          <View cond={allProducts?.length === 0}>
            <Text> There is no product with thoes filters </Text>
          </View>
        </Flex>
      </Flex>

      <View cond={data.info.pages > 1}>
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
