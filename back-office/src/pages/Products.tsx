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
} from '../components'

interface ICurrentProduct {
  id: number | string
  name: string
  price: number | string
  description: string
  coupon: number // ]0,1[
  img: string
  quantity: number | string
  // features: string[]
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
  const [currentProduct, setCurrentProduct] = useState({
    id: '',
    name: '',
    price: '',
    description: '',
    discount: 0,
    img: '',
    quantity: '',
    features: []
  })
  const [products, setProducts] = useState<ICurrentProduct[]>()

  const [query, setQuery] = useState('')

  const product = {
    id: 1,
    name: 'name',
    description: 'desc',
    img: '',
    price: 0,
    coupon: 0.2,
    quantity: 11
  }

  // const headers = ['Image', 'Name', 'Description', 'Quantity', 'Price', 'Coupon', 'Actions']

  useEffect(() => {
    // load products data
    const data = [
      {
        id: 1,
        img: 'https://bit.ly/dan-abramov',
        name: 'Throwback Hip Ba',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
        quantity: 1,
        price: 90.0,
        coupon: 0.2
      },
      {
        id: 2,
        img: 'https://bit.ly/dan-abramov',
        name: 'Throwback Hip Ba',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quos omnis accusamus, debitis ducimus eveniet ex, ut aspernatur dolorum velit, consequatur eius amet et molestias non quae veritatis nostrum doloribus.',
        quantity: 1,
        price: 50.0,
        coupon: 0.2
      }
    ]
    setProducts(data)
  }, [])

  // products list
  const productList = [
    {
      id: 1,
      image: '',
      name: 'Brittan Rois',
      quantity: 10,
      price: 24011
    },
    {
      id: 2,
      image: '',
      name: 'Brittan Rois',
      quantity: 10,
      price: 24011
    },
    {
      id: 3,
      image: '',
      name: 'Brittan Rois',
      quantity: 10,
      price: 24011
    },
    {
      id: 4,
      image: '',
      name: 'Brittan Rois',
      quantity: 10,
      price: 24011
    },
    {
      id: 5,
      image: '',
      name: 'Brittan Rois',
      quantity: 10,
      price: 24011
    }
  ]
  const productTableHead = ['name', 'quantity', 'price', 'actions']

  const renderHead = (product: any, idx: any) => (
    <Th key={idx} p="15px 10px" textAlign={'left'}>
      {product}
    </Th>
  )

  const renderBody = (product: any, idx: any) => (
    <Tr key={idx} textAlign="left">
      <Td p="15px 10px">{product.name}</Td>
      <Td p="15px 10px">{product.quantity}</Td>
      <Td p="15px 10px">{product.price}</Td>
      <Td>
        <ActionsMenu productId={product.id} setAction={setAction} />
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
          productId={1}
          mode="delete"
        />
      </View>

      <View cond={action.disable}>
        <ProductBox
          isOpen={action.disable}
          setAction={setAction}
          onClose={() => setAction({ ...action, disable: false })}
          productId={1}
          mode="disable"
        />
      </View>

      <View cond={action.add}>
        <AddEditProduct
          isOpen={action.add}
          currentProduct={currentProduct}
          onClose={() => setAction({ ...action, add: false })}
          mode="add"
        />
      </View>

      <View cond={action.edit}>
        <AddEditProduct
          isOpen={action.edit}
          currentProduct={currentProduct}
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
