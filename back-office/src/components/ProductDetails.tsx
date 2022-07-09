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
import { IProduct } from '../lib/interfaces'
import { useProductStore } from 'store'

interface IProductDetails {
  isOpen: boolean
  onClose: () => void
}
export default function ProductDetails({ isOpen, onClose }: IProductDetails) {
  const product = useProductStore((state: any) => state.product)
  const setProduct = useProductStore((state: any) => state.setProduct)
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader> Product Details </ModalHeader>
        <ModalCloseButton />

        <ModalBody>
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
            <Display label="Name" data={product.name} />
            <Display label="Quantity" data={product.quantity} />
            <Display label="Description" data={product.description} />
            <Display label="Discount" data={product.discount} />
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button bg="gray_3" color="white" _hover={{ bg: 'gray_4' }} onClick={onClose}>
            Close
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

const Display = ({ label, data }: { label: string; data: any }) => {
  const isDataExist = (data: any) => {
    if (Array.isArray(data) && data.length === 0) return false
    if (Object.keys(data).length === 0) return false
    if (!data) return false
    return true
  }

  return (
    <Flex mb=".5rem">
      <Box as="span" w="6.25rem" textAlign={'left'} fontWeight={'600'}>
        {label}:
      </Box>

      {!isDataExist(data) ? (
        <Box as="span" fontSize="1rem" fontWeight="400" ml=".5rem" color="gray_4">
          ---
        </Box>
      ) : Array.isArray(data) ? (
        <UnorderedList textAlign={'left'}>
          {data.map((item, idx) => (
            <ListItem key={idx} fontSize="1rem" fontWeight="400" ml=".5rem" color="gray_4">
              {item}
            </ListItem>
          ))}
        </UnorderedList>
      ) : (
        <Text
          textAlign={'left'}
          w="auto"
          fontSize="1rem"
          fontWeight="400"
          ml=".5rem"
          color="gray_4"
        >
          {data}
        </Text>
      )}
    </Flex>
  )
}
