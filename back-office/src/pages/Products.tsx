import {
  Button,
  Flex,
  Heading,
  IconButton,
  Text,
  useBreakpointValue,
  useColorMode
} from '@chakra-ui/react'
import { useState } from 'react'
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
  View
} from 'components'
import { useProductStore } from 'store'
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
  const action = useProductStore((state: any) => state.action)
  const setAction = useProductStore((state: any) => state.setAction)

  const isMobile = useBreakpointValue({ base: true, md: false })

  const [isVisible, setIsVisible] = useState(false)

  const { colorMode: mode } = useColorMode()

  return (
    <Layout isHeaderVisible>
      <Heading fontSize="1.5rem" textTransform={'uppercase'} mr="auto" w="full" mb="2rem">
        Products List
      </Heading>

      <Button
        bg={mode === 'light' ? 'white' : 'accent_3'}
        color={mode === 'light' ? 'accent_3' : 'white'}
        _hover={{
          bg: mode === 'light' ? 'white' : 'accent_4'
        }}
        border="1px solid"
        borderColor={'accent_3'}
        ml="auto"
        display={'flex'}
        leftIcon={<AiOutlinePlus size={16} />}
        onClick={() => setAction({ ...action, add: true })}
      >
        Add Product
      </Button>

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

      <View cond={!isMobile}>
        <ProductsFilter />
      </View>

      <View cond={isMobile}>
        <IconButton
          aria-label="trigger filter"
          icon={<BsFilterLeft size={18} />}
          onClick={() => setIsVisible(true)}
        />
        <CustomDrawer
          isOpen={isVisible}
          title="Filter"
          body={<ProductsFilter />}
          onClose={() => setIsVisible(false)}
        />
      </View>

      <Flex flexDir={'column'}>
        <View cond={allProducts?.length > 0}>
          <Text mb="1rem" ml="3rem">
            Products result: {allProducts?.length}{' '}
          </Text>

          {/* display table full of products + options for each row */}
          <CustomTable headers={headers} data={allProducts} />
        </View>

        <View cond={allProducts?.length === 0}>
          <Text> There is no product with thoes filters </Text>
        </View>
      </Flex>
    </Layout>
  )
}
