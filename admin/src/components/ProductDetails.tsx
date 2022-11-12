import { Button, Flex, Image } from '@chakra-ui/react'
import { CustomModal, DisplayRowData } from './'
import { useProductStore } from '../store'

interface IProductDetails {
  isOpen: boolean
  onClose: () => void
}
export default function ProductDetails({ isOpen, onClose }: IProductDetails) {
  const product = useProductStore((state: any) => state.product)

  const body = (
    <Flex flexDir="column">
      <Flex justifyContent={'space-between'} alignItems="center" mb=".5rem">
        <Flex justify="flex-start" align="center">
          {product?.images.map((img: string, idx: number) => (
            <Image
              key={idx}
              boxSize="70px"
              objectFit="cover"
              src={img}
              alt={`image-${idx}`}
              m="0 .25rem .5rem 0"
              borderRadius="5px"
            />
          ))}
        </Flex>
      </Flex>
      <DisplayRowData label="Name" data={product.name} />
      <DisplayRowData label="Quantity" data={product.quantity} />
      <DisplayRowData label="Price" data={product.price} />
      <DisplayRowData label="Description" data={product.description} />
      <DisplayRowData label="Rate" data={product.rate} />
      <DisplayRowData label="Reviews" data={product.reviews} />
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
