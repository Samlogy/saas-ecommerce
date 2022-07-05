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
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { AiOutlineMinus, AiOutlinePlus, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { View } from '../components'
import { formatCurrency, isProductFavourite, onAddFavouriteProduct } from '../lib/utils/fonctions'
import { loadState, saveState } from '../lib/utils/localStorage'
import { useShoppingCart } from '../store'

const ShoppingCart = () => {
  const isOpen = useShoppingCart((state: any) => state.isOpen)
  const setOpen = useShoppingCart((state: any) => state.setOpen)
  const removeItems = useShoppingCart((state: any) => state.removeItems)
  const products = useShoppingCart((state: any) => state.products)

  return (
    <Drawer isOpen={isOpen} placement="right" size="sm" onClose={() => setOpen(isOpen)}>
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
              onClick={() => removeItems()}
            >
              Remove all{' '}
            </Text>
            {products.map((product: any, idx: number) => (
              <CartItem key={idx} data={product} />
            ))}
            <Divider />

            <Flex justifyContent={'space-between'} mt="1rem">
              <Text fontWeight="600"> Total </Text>

              {products?.length > 0 &&
                formatCurrency(
                  products.reduce((total: number, product: any) => {
                    const price = total + product?.price * product.quantity
                    return product.discount ? price * product?.discount : price
                  }, 0)
                )}
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

const CartItem = ({ data }: { data: any }) => {
  const increaseQuantity = useShoppingCart((state: any) => state.increaseQuantity)
  const decreaseQuantity = useShoppingCart((state: any) => state.decreaseQuantity)
  const removeItem = useShoppingCart((state: any) => state.removeItem)
  const setIsFavourite = useShoppingCart((state: any) => state.setIsFavourite)

  const price = data.quantity * data.price
  const priceDiscount = data.quantity * data.price * data?.discount
  const isDiscount = data.discount ? true : false

  const handleFavourite = e => {
    e.preventDefault()
    setIsFavourite(data?.id)
    onAddFavouriteProduct(data)
  }
  const handleQuantity = (type: string) => {
    if (type === 'dec') decreaseQuantity(data.id)
    else increaseQuantity(data)
  }

  const isFavourite = isProductFavourite(data) ? <AiFillHeart /> : <AiOutlineHeart />

  return (
    <Box>
      <Flex justifyContent="space-between" mt="1rem">
        <Image
          boxSize="100px"
          src={data?.image}
          borderRadius="5px"
          borderColor="gray"
          alt="Product"
        />

        <Flex flexDir="column">
          <Text fontSize="1rem" fontWeight="600" textAlign={'center'} mb=".5rem">
            {data.name}
          </Text>

          <Flex
            justifyContent={'space-evenly'}
            p=".5rem"
            borderRadius={'.5rem'}
            border="1px solid"
            borderColor={useColorModeValue('gray_3', 'gray_5')}
            alignItems="center"
            mb=".5rem"
          >
            <IconButton
              icon={<AiOutlinePlus />}
              aria-label="increment"
              onClick={() => handleQuantity('inc')}
            />
            <Text my="auto" p=".5rem">
              {data?.quantity}
            </Text>
            <IconButton
              icon={<AiOutlineMinus />}
              aria-label="descrement"
              onClick={() => handleQuantity('dec')}
            />
          </Flex>

          <Flex justifyContent={'space-evenly'} alignItems="center">
            <Box as="span" fontStyle="italic" fontSize=".9rem">
              Discount:{''}
            </Box>
            <Box as="span" fontStyle="italic" fontSize=".9rem">
              {data?.discount * 100} %{' '}
            </Box>
          </Flex>
        </Flex>

        <Flex flexDir="column" justifyContent="space-between" align={'center'}>
          <Box as="span" _hover={{ cursor: 'pointer' }}>
            <FaTrash size={16} color="#60666f" onClick={() => removeItem(data?.id)} />{' '}
          </Box>
          <Box _hover={{ cursor: 'pointer' }} onClick={handleFavourite}>
            {isFavourite}
          </Box>
          <Box>
            <Text fontSize=".9rem" textDecor={isDiscount ? 'line-through' : 'none'}>
              ${formatCurrency(price)}
            </Text>
            {isDiscount && (
              <Text fontSize="1rem" fontWeight="600">
                ${formatCurrency(priceDiscount)}
              </Text>
            )}
          </Box>
        </Flex>
      </Flex>

      <Divider mt="1rem" mx="auto" w="95%" />
    </Box>
  )
}
