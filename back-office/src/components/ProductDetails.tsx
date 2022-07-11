import { Button, Flex, Image } from '@chakra-ui/react'
import { CustomModal, DisplayRowData } from 'components'
import { useProductStore } from 'store'

interface IProductDetails {
  isOpen: boolean
  onClose: () => void
}
export default function ProductDetails({ isOpen, onClose }: IProductDetails) {
  const product = useProductStore((state: any) => state.product)

  const body = (
    <Flex flexDir="column">
      <Flex justifyContent={'space-between'} alignItems="center" mb=".5rem">
        <Image
          src={product?.images[0]}
          fallbackSrc="https://via.placeholder.com/100"
          // fallback="https://via.placeholder.com/50"
          alt="product iamge"
          borderRadius={'5px'}
          w="5rem"
          h="5rem"
          mb=".5rem"
        />
      </Flex>
      <DisplayRowData label="Name" data={product.name} />
      <DisplayRowData label="Quantity" data={product.quantity} />
      <DisplayRowData label="Description" data={product.description} />
      <DisplayRowData label="Discount" data={product.discount} />
    </Flex>
  )
  const footer = (
    <Button bg="gray_3" color="white" _hover={{ bg: 'gray_4' }} onClick={onClose}>
      Close
    </Button>
  )
  return (
    <CustomModal
      title="Product Details"
      isOpen={isOpen}
      onClose={onClose}
      body={body}
      footer={footer}
    />
  )
}
