import { Flex, Circle, Box, Image, Badge, useColorModeValue, Button } from '@chakra-ui/react'

import { useShoppingCart } from '../store'
import { Rating } from '../components'

const ProductCard = ({ data }: { data: any }) => {
  const addToCart = useShoppingCart((state: any) => state.addToCart)

  const newProduct = {
    id: 1,
    img: 'https://bit.ly/dan-abramov',
    name: 'Throwback Hip Ba',
    quantity: 1,
    price: 90.0,
    discount: 0.2
  }

  return (
    <Flex key={data.id} p={50} w="400px" alignItems="center" justifyContent="center">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
      >
        {data.isNew && <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />}

        <Image src={data.img} alt={`Picture of ${data.name}`} roundedTop="lg" />

        <Box p="6" mb=".3rem">
          <Box d="flex" alignItems="baseline">
            {data.isNew && (
              <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                New
              </Badge>
            )}
          </Box>

          <Flex mt="1" justifyContent="space-between" alignContent="center">
            <Box fontSize="2xl" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
              {data.name}
            </Box>
          </Flex>

          <Flex flexDir={'column'} justifyContent="space-between" alignContent="center">
            <Rating initRate={data.rating} reviews={data.reviews} />

            <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                {data.currency}
              </Box>
              {data.price.toFixed(2)}
            </Box>
          </Flex>

          <Button colorScheme="blue" w="full" mt="1.5rem" onClick={() => addToCart(newProduct)}>
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Flex>
  )
}

export default ProductCard
