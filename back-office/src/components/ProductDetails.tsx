import {
  Box,
  Text,
  Button,
  Image,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  ModalFooter,
  ListItem,
  UnorderedList
} from '@chakra-ui/react'
import { IProduct } from 'lib/interfaces'

interface IProductDetails {
  isOpen: boolean
  onClose: () => void
  product: IProduct
}
const ProductDetails = ({ isOpen, onClose, product }: IProductDetails) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Product Details </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
          <Flex flexDir="column">
            <Image
              src={product?.image}
              alt="product iamge"
              borderRadius={'5px'}
              w="5rem"
              h="5rem"
              mb=".5rem"
            />
            <Display label="Name" data={product.name} />
            <Display label="Quantity" data={product.description} />
            <Display label="Description" data={product.name} />
            <Display label="Discount" data={product.discount} />
          </Flex>
        </ModalBody>
        <ModalFooter>
          {' '}
          <Button bg={'disable'} color="white" _hover={{ bg: 'gray_3' }} onClick={onClose}>
            {' '}
            Close{' '}
          </Button>{' '}
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ProductDetails

const Display = ({ label, data }: { label: string; data: any }) => {
  return (
    <Flex mb=".5rem">
      <Box as="span" w="10rem" textAlign={'left'} fontWeight={'600'}>
        {' '}
        {label}:{' '}
      </Box>

      {Array.isArray(data) ? (
        <UnorderedList textAlign={'left'}>
          {' '}
          {data.map(el => (
            <ListItem key={el.id}> {el} </ListItem>
          ))}{' '}
        </UnorderedList>
      ) : (
        <Text ml=".5rem" textAlign={'left'} w="auto">
          {' '}
          {data}{' '}
        </Text>
      )}
    </Flex>
  )
}
