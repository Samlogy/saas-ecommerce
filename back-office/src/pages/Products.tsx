import {
  Heading,
  Button,
  Tr,
  Th,
  Td,
  Image,
  useColorModeValue,
  useColorMode
} from '@chakra-ui/react'
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
import { IAction, IProduct } from 'lib/interfaces'
import { useProductStore } from 'store'

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

export default function Products() {
  const action = useProductStore((state: any) => state.action)
  const setAction = useProductStore((state: any) => state.setAction)

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
          src={product.image}
          fallbackSrc="https://via.placeholder.com/100"
          alt={product.name}
        />
      </Td>
      <Td p="15px 10px" maxW="2rem">
        {product.name}
      </Td>
      <Td p="15px 10px" maxW="2rem">
        {product.images[0]}
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
