import { Badge, Box, Button, Flex, IconButton, Image, useColorModeValue } from '@chakra-ui/react'
import Link from 'next/link'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

import { FavouriteButton, Rating, View } from '../components'
import { formatCurrency } from '../lib/utils/fonctions'
import { useShoppingCartStore } from '../store'
import { IProduct } from '../lib/interfaces'
import { motion } from 'framer-motion'

interface IProductCart {
  data: IProduct
  readOnly?: boolean
}

export default function ProductCard({ data, readOnly = false }: IProductCart) {
  const increaseQuantity = useShoppingCartStore((state: any) => state.increaseQuantity)
  const decreaseQuantity = useShoppingCartStore((state: any) => state.decreaseQuantity)
  const products = useShoppingCartStore((state: any) => state.products)

  const quantity = products.find((item: any) => item.id === data?.id)?.quantity || 0

  const bgColor = useColorModeValue('gray_9', 'gray_2')

  function increase(e: any) {
    e.preventDefault()
    increaseQuantity({ id: data?.id, ...data })
  }
  function decrease(e: any) {
    e.preventDefault()
    decreaseQuantity(data?.id)
  }

  // add a function to compute if product is new (api side)
  const isNew = true

  return (
    <Link href={`http://localhost:3000/product/${data?.id}`} passHref>
      <Flex
        m={'.5em 1em'}
        w="18rem"
        align="center"
        justify="center"
        cursor={'pointer'}
        // anim
        as={motion.div}
        layout
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.95 }}
      >
        <Box bg={bgColor} w="full" rounded="lg" shadow="lg" pos="relative">
          <FavouriteButton data={data} />

          <Image
            src={data?.images[0]}
            alt={`Picture of ${data?.name}`}
            roundedTop="lg"
            boxSize={'154px'}
            m="1.5rem auto 0 auto"
          />

          <Box p="1rem">
            <Box d="flex" alignItems="baseline">
              {isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>

            <Flex justify="space-between" alignContent="center">
              <Box fontSize="1.2rem" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
                {data?.name}
              </Box>
            </Flex>

            <Flex flexDir={'column'} justify="space-between" alignContent="center">
              <Flex>
                <Rating initRate={data?.rate} readOnly={readOnly} />
                <Reviews data={data?.reviews} />
              </Flex>

              <Box fontSize="2xl" color={useColorModeValue('gray_1', 'white')}>
                {formatCurrency(data?.price)}
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
                onClick={e => increase(e)}
              >
                Add to Cart
              </Button>
            </View>

            <View cond={quantity > 0}>
              <Flex align={'center'} justify="center">
                <IconButton
                  aria-label="decrease-quantity"
                  onClick={e => decrease(e)}
                  icon={<AiOutlineMinus />}
                  w="2.5rem!important"
                  h="2.5rem!important"
                />
                <Box as="span" px=".5rem!important">
                  {quantity}
                </Box>

                <IconButton
                  aria-label="increase-quantity"
                  onClick={e => increase(e)}
                  icon={<AiOutlinePlus />}
                  w="2.5rem!important"
                  h="2.5rem!important"
                />
              </Flex>
            </View>
          </Box>
        </Box>
      </Flex>
    </Link>
  )
}

const Reviews = ({ data }: { data: number }) => {
  return (
    <Flex mt=".2rem" fontSize=".85rem" fontStyle={'italic'} textTransform={'lowercase'}>
      <Box as="span" ml=".5rem">
        {data}{' '}
      </Box>
      <Box as="span" ml=".2rem">
        reviews{' '}
      </Box>
    </Flex>
  )
}
