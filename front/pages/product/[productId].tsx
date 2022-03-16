import {
  Box,
  IconButton,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  List,
  ListItem,
} from '@chakra-ui/react';
import { MdLocalShipping } from 'react-icons/md';
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { Layout, Carousel, View, ListingComments } from "../../components"
import { useShoppingCart } from '../../store';


export default function Product({ product }) {
  // const [quantity, setQuantity] = useState(1);
  const increment = useShoppingCart((state: any) => state.increment)
  const decrement = useShoppingCart((state: any) => state.decrement)
  const addToCart = useShoppingCart((state: any) => state.addToCart)

  // laod data from db (all product data) + delete useRouter logic

  const handleQuantity = (type: string) => {
    if (type === "dec") decrement(product.id)
    else increment(product.id)
  };

  const newProduct = {
    id: 1,
    img: 'https://bit.ly/dan-abramov',
    name: "Throwback Hip Ba",
    quantity: 1,
    price: 90.00,
    discount: .2
  }

  return (
  <Layout isHeaderVisible isFooterVisible>
      <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={{ base: 8, md: 10 }} py={{ base: 18, md: 24 }}>
        {/* <Flex> */}
          <View cond={product.img.length === 0}>
            <Text> No Images </Text>
          </View>

          <View cond={product.img.length === 1}>
            <Image rounded={'md'} alt={'product image'} src={product.img[0]} fit={'cover'} align={'center'} w={'100%'} h={{ base: '100%', sm: '400px', lg: '500px' }} />
          </View>

          <View cond={product.img.length > 1}>
            <Carousel slides={product.img} />  
          </View>
        {/* </Flex> */}
        
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading lineHeight={1.1} fontWeight={600} fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              {product.name}
            </Heading>
            <Text color={useColorModeValue('gray.900', 'gray.400')} fontWeight={300} fontSize={'2xl'}>
              $ {product.price} 
            </Text>
          </Box>

          <Stack spacing={{ base: 4, sm: 6 }} direction={'column'}
            divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}>

            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text color={useColorModeValue('gray.500', 'gray.400')} fontSize={'2xl'} fontWeight={'300'}>
                {product.description}
              </Text>
              {/* <Text fontSize={'lg'}>
              {product.description2} 
              </Text> */}
            </VStack>

            {/* <Box>
              <Text fontSize={{ base: '16px', lg: '18px' }} color="blue.500" fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  { product.features.map((el: any) => <ListItem> {el} </ListItem>) }
                </List>
              </SimpleGrid>
            </Box> */}

            {/* <Box>
              <Text fontSize={{ base: '16px', lg: '18px' }} color="blue.500" fontWeight={'500'} textTransform={'uppercase'} mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                { product.details.map((el: any) =>
                    <ListItem>
                      <Text as={'span'} fontWeight={'bold'}>
                        {el.key}:
                      </Text>{' '}
                      {el.value}
                    </ListItem>
                  )
                }
              </List>
            </Box> */}
          </Stack>

          <Flex flexDir="row-reverse" justifyContent={'space-between'}>
            <Flex justifyContent={'space-evenly'} alignItems='center' w="150px" mt={8}>
              <IconButton icon={<AiOutlineMinus />} aria-label='descrement' onClick={() => handleQuantity('dec')} />
              <Text my="auto"> {product.quantity} </Text>
              {console.log('quantity: ', product.id)}
              <IconButton icon={<AiOutlinePlus />} aria-label='increment' onClick={() => handleQuantity('inc')} />
            </Flex>
  
            <Button w="200px" mt={8} size={'lg'} py={'7'} bg={"blue.500"} color={"white"} textTransform={'uppercase'}
              _hover={{ transform: 'translateY(2px)', boxShadow: 'lg' }}
              onClick={() => addToCart(newProduct)}>
              Add to cart
            </Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping size={20} />
            <Text> {product.delivery} delivery </Text>
          </Stack>

        </Stack>
      </SimpleGrid>

      <ListingComments productId={product.id} />
    </Layout>
  );
}

export const getServerSideProps = async (context) => {
  // api call (context.params.id)
  const data = {
    id: 1,
    name: "Automatic Watch",
    img: [
      'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
      'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
      'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    ],
    quantity: 1,
    price: 350,
    description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore",
    delivery: "2-3 business days"
  }
  return {
    props: {
      product: data
    }
  }
}