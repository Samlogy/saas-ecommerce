import { Heading, Button, Tr, Th, Td } from '@chakra-ui/react'
import { AiOutlinePlus } from 'react-icons/ai'
import React, { useEffect, useState } from 'react'

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
const productList = [
  {
    id: 1,
    // image: '',
    name: 'Brittan Rois',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
    discount: 0.1,
    quantity: 10,
    price: 24011
  },
  {
    id: 2,
    // image: '',
    name: 'Brittan Rois',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
    discount: 0.1,
    quantity: 10,
    price: 24011
  },
  {
    id: 3,
    // image: '',
    name: 'Brittan Rois',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
    discount: 0.1,
    quantity: 10,
    price: 24011
  },
  {
    id: 4,
    // image: '',
    name: 'Brittan Rois',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
    discount: 0.1,
    quantity: 10,
    price: 24011
  },
  {
    id: 5,
    // image: '',
    name: 'Brittan Rois',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
    discount: 0.1,
    quantity: 10,
    price: 24011
  }
]
interface IProduct {
  id: number | string
  name: string
  price: number | string
  description: string
  discount: number // ]0,1[
  image: string
  quantity: number | string
}
interface IAction {
  delete: boolean
  disable: boolean
  add: boolean
  edit: boolean
  details: boolean
}

export default function Products() {
  const [action, setAction] = useState({
    delete: false,
    disable: false,
    add: false,
    edit: false,
    details: false
  })
  const [products, setProducts] = useState<IProduct[]>()
  const [query, setQuery] = useState('')
  const [product, setProduct] = useState({
    id: 0,
    name: '',
    image: '',
    discount: 0,
    description: '',
    quantity: 0,
    price: ''
  })

  useEffect(() => {
    // load products data
    // setProducts(data)
  }, [])

  // products list
  const productTableHead = [
    '',
    'name',
    // 'image',
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
      <Td p="15px 10px" maxW="2rem">
        {product.name}
      </Td>
      <Td p="15px 10px" maxW="2rem">
        {product.image}
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
        <ActionsMenu
          productId={product.id}
          setAction={setAction}
          setProduct={setProduct}
          product={product}
        />
      </Td>
    </Tr>
  )

  return (
    <Layout isHeaderVisible>
      <Heading as="h2" fontSize="24px">
        Products List
      </Heading>

      <Button
        colorScheme="blue"
        variant="outline"
        ml="auto"
        display={'flex'}
        leftIcon={<AiOutlinePlus />}
        onClick={() => setAction({ ...action, add: true })}
      >
        {' '}
        Add Product{' '}
      </Button>

      <View cond={action.delete}>
        <ProductBox
          isOpen={action.delete}
          setAction={setAction}
          onClose={() => setAction({ ...action, delete: false })}
          productId={product.id}
          setProduct={setProduct}
          mode="delete"
        />
      </View>

      <View cond={action.disable}>
        <ProductBox
          isOpen={action.disable}
          setAction={setAction}
          onClose={() => setAction({ ...action, disable: false })}
          productId={product.id}
          setProduct={setProduct}
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
          product={product}
          mode="edit"
        />
      </View>

      <View cond={action.details}>
        <ProductDetails
          isOpen={action.details}
          onClose={() => setAction({ ...action, details: false })}
          product={product}
        />
      </View>

      <ProductsFilter setQuery={setQuery} query={query} />

      <CustomTable
        limit="4"
        headData={productTableHead}
        renderHead={(product: any, idx: any) => renderHead(product, idx)}
        bodyData={productList}
        renderBody={(product: any, idx: any) => renderBody(product, idx)}
      />
    </Layout>
  )
}
