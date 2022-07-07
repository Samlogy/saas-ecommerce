import { Box, Divider, Flex, IconButton, Image, Text, useColorModeValue } from '@chakra-ui/react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { FaTrash } from 'react-icons/fa'
import { IProduct } from '../lib/interfaces'
import { formatCurrency, isProductFavourite, onAddFavouriteProduct } from '../lib/utils/fonctions'
import { useShoppingCartStore } from '../store'

export default function CartItem({ data }: { data: IProduct }) {
  const increaseQuantity = useShoppingCartStore((state: any) => state.increaseQuantity)
  const decreaseQuantity = useShoppingCartStore((state: any) => state.decreaseQuantity)
  const removeItem = useShoppingCartStore((state: any) => state.removeItem)
  const setIsFavourite = useShoppingCartStore((state: any) => state.setIsFavourite)

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
          src={data?.images[0]}
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
