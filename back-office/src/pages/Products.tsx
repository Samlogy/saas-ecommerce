import {
  Heading,
  Button,
  Tr,
  Th,
  Td,
  Image,
  Text,
  useColorModeValue,
  Flex,
  useColorMode
} from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'

import {
  Layout,
  View,
  CustomTable,
  ProductsFilter,
  ProductBox,
  ProductDetails,
  AddEditProduct,
  ActionsMenu
} from 'components'
import { IAction, IProduct } from 'lib/interfaces'
import { useProductStore } from 'store'

const allProducts = [
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

export default function Products() {
  const action = useProductStore((state: any) => state.action)
  const setAction = useProductStore((state: any) => state.setAction)

  const { colorMode: mode } = useColorMode()

  // products list
  const productTableHead = [
    '',
    'image',
    'name',
    'description',
    'quantity',
    'price',
    'discount',
    'actions'
  ]

  const renderHead = (product: any, idx: any) => (
    <Th key={idx} p="15px 10px" textAlign={'left'}>
      {product}
    </Th>
  )

  const renderBody = (product: any, idx: any) => (
    <Tr key={idx} textAlign="left">
      <Td p="15px 10px" maxW="2rem">
        {product.id}
      </Td>
      <Td p="15px 10px">
        <Image
          boxSize="100px"
          borderRadius={'5px'}
          objectFit="cover"
          src={product.images[0]}
          fallbackSrc="https://via.placeholder.com/100"
          alt={product.name}
        />
      </Td>
      <Td p="15px 10px" maxW="2rem">
        {product.name}
      </Td>
      <Td p="15px 10px" maxW="2rem" isTruncated>
        {product.description}
      </Td>
      <Td p="15px 10px" maxW="2rem">
        {product.quantity}
      </Td>
      <Td p="15px 10px" maxW="2rem">
        {product.price}
      </Td>
      <Td p="15px 10px" maxW="2rem">
        {product.discount}
      </Td>
      <Td p="15px 10px" w="2rem">
        <ActionsMenu setAction={setAction} />
      </Td>
    </Tr>
  )

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
        Add Product{' '}
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

      <ProductsFilter />
      <Flex flexDir={'column'}>
        <View cond={allProducts?.length > 0}>
          <Text mb="1rem" ml="3rem">
            Products result: {allProducts?.length}{' '}
          </Text>

          {/* display table full of products */}
        </View>

        <View cond={allProducts?.length === 0}>
          <Text> There is no product with thoes filters </Text>
        </View>
      </Flex>
    </Layout>
  )
}
