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
  useColorModeValue
} from '@chakra-ui/react'
import { MdLocalShipping } from 'react-icons/md'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { useEffect, useState } from 'react'

import { Layout, Carousel, View, ListingComments } from '../../components'
import { useShoppingCart } from '../../store'
import { IComment, IProduct } from '../../lib/interfaces'

import productImage from '../../public/images/product.png'
import heroImage from '../../public/images/home.png'

export default function Product({ product, comments }: { product: any; comments: IComment[] }) {
  const increment = useShoppingCart((state: any) => state.increment)
  const decrement = useShoppingCart((state: any) => state.decrement)
  const addToCart = useShoppingCart((state: any) => state.addToCart)

  const handleQuantity = (type: string) => {
    if (type === 'dec') decrement(product.id)
    else increment(product.id)
  }

  const [image, setImage] = useState<string>('')
  const [images, setImages] = useState<string[]>(product.image)

  // useEffect(() => {
  //   if (image !== '') {
  //     console.log(image)
  //     setImages((prev: any) => {
  //       let newList = prev.filter(img => img !== img)
  //       return newList.push(image)
  //     })
  //   }
  // }, [image])

  return (
    <Layout isHeaderVisible isFooterVisible>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <View cond={product.image.length === 0}>
          <Text> No Images </Text>
        </View>

        <View cond={product.image.length === 1}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={image || product.image[0]}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
          <CarouselPreview images={product.image} setImage={setImage} />
        </View>

        <View cond={product.image.length > 1}>
          <Carousel slides={product.image} />
          <CarouselPreview images={product.image} setImage={setImage} />
        </View>

        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}
            >
              {product.name}
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}
            >
              $ {product.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray.500', 'gray.400')}
                fontSize={'2xl'}
                fontWeight={'300'}
              >
                {product.description}
              </Text>
            </VStack>
          </Stack>

          <Flex flexDir="row-reverse" justifyContent={'space-between'}>
            <Flex justifyContent={'space-evenly'} alignItems="center" w="150px" mt={8}>
              <IconButton
                icon={<AiOutlineMinus />}
                aria-label="descrement"
                onClick={() => handleQuantity('dec')}
              />
              <Text my="auto"> {product.quantity} </Text>
              {console.log('quantity: ', product.id)}
              <IconButton
                icon={<AiOutlinePlus />}
                aria-label="increment"
                onClick={() => handleQuantity('inc')}
              />
            </Flex>

            <Button
              w="200px"
              mt={8}
              size={'lg'}
              bg={'green.500'}
              color={'white'}
              borderRadius="20px"
              fontSize={'1rem'}
              textTransform={'uppercase'}
              _hover={{ transform: 'translateY(2px)', boxShadow: 'lg' }}
              onClick={() => addToCart(product)}
            >
              Add to cart
            </Button>
          </Flex>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping size={20} />
            <Text> {product.delivery} delivery </Text>
          </Stack>
        </Stack>
      </SimpleGrid>

      <ListingComments comments={comments} />
    </Layout>
  )
}

const CarouselPreview = ({ images, setImage }: { images: string[]; setImage: any }) => {
  return (
    <Flex
      flexWrap={'wrap'}
      justifyContent="space-evenly"
      p={['.25rem', '', '.5rem', '']}
      bg="green.100"
      borderRadius={'10px'}
      my="1.5rem"
      w={['15rem', '', '70%', '']}
      mx={['auto', '', '', '']}
    >
      {images.map(img => (
        <Image
          rounded={'md'}
          alt={'product image'}
          src={img}
          border="1px solid white"
          bg="white"
          borderRadius={'10px'}
          boxSize={['50px', '', '75px', '']}
          boxShadow="md"
          _hover={{
            cursor: 'pointer',
            border: '2px solid',
            borderColor: 'accent_3',
            transition: 'border .25s'
          }}
          onClick={() => setImage(img)}
        />
      ))}
    </Flex>
  )
}

export const getServerSideProps = async context => {
  // api call (context.params.id) --> productId
  const product = {
    id: 1,
    name: 'Automatic Watch',
    image: [productImage.src, heroImage.src, productImage.src],
    quantity: 1,
    price: 350,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    delivery: '2-3 business days'
  }
  const comments = [
    {
      id: 1,
      name: 'Sam',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      createdAt: '15/03/2022'
    },
    {
      id: 2,
      name: 'ghiles',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      createdAt: '15/03/2022'
    },
    {
      id: 3,
      name: 'sadek',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      createdAt: '15/03/2022'
    }
  ]
  return {
    props: {
      product,
      comments
    }
  }
}
