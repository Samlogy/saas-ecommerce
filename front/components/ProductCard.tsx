import { Badge, Box, Button, Circle, Flex, Image, useColorModeValue } from '@chakra-ui/react'
import { Rating } from '../components'
import { useShoppingCart } from '../store'

const ProductCard = ({ id, data }: { id: string | number; data: any }) => {
  const addToCart = useShoppingCart((state: any) => state.addToCart)

  const newProduct = {
    id: 1,
    image: 'https://bit.ly/dan-abramov',
    name: 'Throwback Hip Ba',
    quantity: 1,
    price: 90.0,
    discount: 0.2
  }

  return (
    <Flex key={id} m=".5rem" w="18rem" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        w="full"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />}

        <Image
          src={data.image}
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
              <Rating initRate={data.rate} />
              <Reviews data={data?.reviews} />
            </Flex>

            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                {data?.currency}
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>

          <Button
            bg={'accent_3'}
            _hover={{ bg: 'accent_2' }}
            color={'white'}
            borderRadius="20px"
            w="full"
            mt=".75rem"
            onClick={() => addToCart(newProduct)}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Flex>
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
