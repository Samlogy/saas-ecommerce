import {
  Box,
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  IconButton,
  Image,
  Text
} from '@chakra-ui/react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { View } from '../components'
import { useShoppingCart } from '../store'

const ShoppingCart = () => {
  const isVisible = useShoppingCart((state: any) => state.isVisible)
  const price = useShoppingCart((state: any) => state.price)
  const handleCartVisibility = useShoppingCart((state: any) => state.handleCartVisibility)
  const removeAll = useShoppingCart((state: any) => state.removeAll)
  const products = useShoppingCart((state: any) => state.products)

  const computeTotal = useShoppingCart((state: any) => state.computeTotal)

  console.log('total: ', price)

  return (
    <Drawer
      isOpen={isVisible}
      placement="right"
      size="sm"
      onClose={() => handleCartVisibility(isVisible)}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader> Shopping Cart </DrawerHeader>

        <DrawerBody>
          <View cond={products.length > 0}>
            <Text
              textAlign={'right'}
              color="accent_4"
              fontSize=".9rem"
              mb="1rem"
              _hover={{ cursor: 'pointer', textDecor: 'underline' }}
              onClick={() => removeAll()}
            >
              Remove all{' '}
            </Text>
            {products.map((product: any, idx: number) => (
              <CartItem key={idx} data={product} />
            ))}
            <Divider />

            <Flex justifyContent={'space-between'} mt="1rem">
              <Text fontWeight="600"> Total </Text>
              <Text fontWeight="600"> ${price} </Text>
            </Flex>
          </View>

          <View cond={products.length === 0}>
            <Text fontSize="1rem" color="gray.500">
              There is not product in your shopping cart{' '}
            </Text>
          </View>
        </DrawerBody>

        <DrawerFooter display="flex" flexDir="column">
          <Divider my="1rem" />
          <Text mb="1rem" fontSize=".9rem" color="gray.500">
            Shipping and taxes calculated at checkout.{' '}
          </Text>
          <Button w="full" bg={'accent_3'} _hover={{ bg: 'accent_2' }} color={'white'}>
            Checkout{' '}
          </Button>
          <Text display="flex" mt="1rem">
            or
            <Text textColor="accent_3" ml="1rem" fontSize=".9rem" _hover={{ cursor: 'pointer' }}>
              Continue Shopping →{' '}
            </Text>
          </Text>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default ShoppingCart

const CartItem = ({ key, data }: { key: any; data: any }) => {
  const increment = useShoppingCart((state: any) => state.increment)
  const decrement = useShoppingCart((state: any) => state.decrement)
  const removeOne = useShoppingCart((state: any) => state.removeOne)

  const handleQuantity = (type: string) => {
    if (type === 'dec') decrement(data.id)
    else increment(data.id)
  }

  return (
    <Box key={key}>
      <Flex justifyContent="space-between" mt="1rem">
        <Image boxSize="100px" src={data.img} borderRadius="5px" borderColor="gray" alt="Product" />

        <Flex flexDir="column">
          <Text fontSize="1rem" fontWeight="600" textAlign={'center'} mb=".5rem">
            {data.name}{' '}
          </Text>

          <Flex justifyContent={'space-evenly'} alignItems="center" mb=".5rem">
            <IconButton
              icon={<AiOutlinePlus />}
              aria-label="increment"
              onClick={() => handleQuantity('inc')}
            />
            <Text my="auto"> {data.quantity} </Text>
            <IconButton
              icon={<AiOutlineMinus />}
              aria-label="descrement"
              onClick={() => handleQuantity('dec')}
            />
          </Flex>

          <Flex justifyContent={'space-evenly'} alignItems="center">
            <Box as="span" fontStyle="italic" fontSize=".9rem">
              Discount:{' '}
            </Box>
            <Box as="span" fontStyle="italic" fontSize=".9rem">
              {data.discount * 100} %{' '}
            </Box>
          </Flex>
        </Flex>

        <Flex flexDir="column" justifyContent="space-between">
          <Text fontSize="1rem" fontWeight="600">
            ${data.price}{' '}
          </Text>
          <Box as="span" _hover={{ cursor: 'pointer' }}>
            <FaTrash size={16} color="#60666f" onClick={() => removeOne(data.id)} />{' '}
          </Box>
        </Flex>
      </Flex>

      <Divider mt="1rem" mx="auto" w="95%" />
    </Box>
  )
}
