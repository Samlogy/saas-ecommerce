import Head from 'next/head'
import Link from 'next/link'
// import Image from 'next/image'

  import {
    Flex,
    Circle,
    Box,
    Image,
    Badge,
    useColorModeValue,
    Button,
  } from '@chakra-ui/react';
  import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
  
  import { useShoppingCart } from "../store";
  import { Rating } from "../components"
   
  const ProductCard = ({ idx, data }: { idx: any, data: any }) => {
    const addToCart = useShoppingCart((state: any) => state.addToCart)

    const onAdd = () => {
      const newProduct = {
        id: 1,
        img: 'https://bit.ly/dan-abramov',
        name: "Throwback Hip Ba",
        quantity: 1,
        price: 90.00,
        discount: .2
      }
      addToCart(newProduct)
    }

    return (
      <Flex key={idx} p={50} w="400px" alignItems="center" justifyContent="center">
        <Box bg={useColorModeValue('white', 'gray.800')} maxW="sm" borderWidth="1px" rounded="lg" shadow="lg" position="relative">
          {data.isNew && (
            <Circle size="10px" position="absolute" top={2} right={2} bg="red.200" />
          )}
  
          <Image src={data.imageURL} alt={`Picture of ${data.name}`} roundedTop="lg" />

          <Box p="6" mb=".3rem">
            <Box d="flex" alignItems="baseline">
              {data.isNew && (
                <Badge rounded="full" px="2" fontSize="0.8em" colorScheme="red">
                  New
                </Badge>
              )}
            </Box>

            <Flex mt="1" justifyContent="space-between" alignContent="center">
              <Box
                fontSize="2xl"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated>
                {data.name}
              </Box>
            </Flex>
  
            <Flex flexDir={'column'} justifyContent="space-between" alignContent="center" >
              <Flex my=".3rem">
                <Rating initRate={data.rating} />
                <Box as="span"> {data.numReviews} </Box>
                <Box as="span" ml=".1rem"> Reviews </Box>
              </Flex>
              
              <Box fontSize="2xl" color={useColorModeValue('gray.800', 'white')}>
                <Box as="span" color={'gray.600'} fontSize="lg">
                  {data.currency}
                </Box>
                {data.price.toFixed(2)}
              </Box>
            </Flex>

            <Button colorScheme='blue' w="full" mt="1.5rem" onClick={() => onAdd()}>
                Add to Cart
            </Button>
          </Box>
        </Box>
      </Flex>
    );
  }
  
  export default ProductCard;
