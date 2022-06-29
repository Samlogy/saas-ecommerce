import {
  Badge,
  Box,
  Button,
  Circle,
  Flex,
  IconButton,
  Image,
  useColorModeValue
} from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineHeart, AiFillHeart } from 'react-icons/ai'

import { Rating, View } from '../components'
import { useShoppingCart } from '../store'

interface IProduct {
  data: any
  readOnly?: boolean
}

const ProductCard = ({ data, readOnly = false }: IProduct) => {
  const increaseQuantity = useShoppingCart((state: any) => state.increaseQuantity)
  const decreaseQuantity = useShoppingCart((state: any) => state.decreaseQuantity)
  const products = useShoppingCart((state: any) => state.products)

  const quantity = products.find((item: any) => item.id === data?.id)?.quantity || 0

  const handleQuantity = (e, type: string) => {
    e.preventDefault()
    if (type === 'inc') {
      increaseQuantity({ id: data?.id, ...data })
      return
    }
    decreaseQuantity(data?.id)
  }

  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <Link href={`http://localhost:3000/product/${data?.id}`}>
      <Flex
        key={data?.id}
        m=".5rem"
        w="18rem"
        alignItems="center"
        justifyContent="center"
        cursor={'pointer'}
      >
        <Box bg={bgColor} w="full" rounded="lg" shadow="lg" position="relative">
          <FavouriteButton position="absolute" top="4" right="4" />

          <Image
            src={data?.image}
            alt={`Picture of ${data.name}`}
            roundedTop="lg"
            boxSize={'154px'}
            m="1.5rem auto 0 auto"
          />

          <Box p="1rem">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>

            <Flex justifyContent="space-between" alignContent="center">
              <Box fontSize="1.2rem" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {data.name}
              </Box>
            </Flex>

            <Flex flexDir={'column'} justifyContent="space-between" alignContent="center">
              <Flex>
                <Rating initRate={data.rate} readOnly={readOnly} />
                <Reviews data={data?.reviews} />
              </Flex>

              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  {data?.currency}
                </Box>
                {data.price.toFixed(2)}
              </Box>
            </Flex>

            <View cond={quantity === 0}>
              <Button
                bg={'accent_3'}
                _hover={{ bg: 'accent_2' }}
                color={'white'}
                borderRadius="20px"
                w="full"
                mt=".75rem"
                onClick={e => handleQuantity(e, 'inc')}
              >
                Add to Cart
              </Button>
            </View>
            <View cond={quantity > 0}>
              <Flex
                alignItems={'center'}
                justify="center"
                p=".5rem"
                borderRadius={'.5rem'}
                border="1px solid"
                borderColor={useColorModeValue('gray_3', 'gray_5')}
              >
                <IconButton
                  aria-label="decrease-quantity"
                  onClick={e => handleQuantity(e, 'dec')}
                  icon={<AiOutlineMinus />}
                />
                <Box as="span" p=".5rem 1.5rem">
                  {quantity}
                </Box>

                <IconButton
                  aria-label="increase-quantity"
                  onClick={e => handleQuantity(e, 'inc')}
                  icon={<AiOutlinePlus />}
                />
              </Flex>
            </View>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}

export default ProductCard

const Reviews = ({ data }: { data: number }) => {
  return (
    <Flex mt=".2rem" fontSize=".85rem" fontStyle={'italic'} textTransform={'lowercase'}>
      <Box as="span" ml=".5rem">
        {' '}
        {data}{' '}
      </Box>
      <Box as="span" ml=".2rem">
        {' '}
        reviews{' '}
      </Box>
    </Flex>
  )
}

const FavouriteButton = (props: any) => {
  return (
    <IconButton
      isRound
      bg="white"
      color="gray.900"
      size="sm"
      aria-label="favourite-button"
      _hover={{ transform: 'scale(1.1)' }}
      sx={{ ':hover > svg': { transform: 'scale(1.1)' } }}
      transition="all 0.15s ease"
      icon={<AiOutlineHeart />}
      boxShadow="md"
      onClick={e => e.preventDefault()}
      {...props}
    />
  )
}
