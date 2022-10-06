import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  StackDivider,
  Text,
  useColorModeValue,
  VStack
} from '@chakra-ui/react'
import Link from 'next/link'
import { useState } from 'react'
import { AiFillHeart, AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdLocalShipping } from 'react-icons/md'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import Slider from 'react-slick'

import { Layout, ListingComments, ProductCard, Rating, View } from '../../components'
import { IComment, IProduct } from '../../lib/interfaces'
import { useAuthStore, useShoppingCartStore } from '../../store'
//import { GET_PRODUCT_DETAILS, GET_RELATED_PRODUCTS } from '../../lib/services'

import {
  formatCurrency,
  isProductFavourite,
  onAddFavouriteProduct
} from '../../lib/utils/fonctions'

import heroImage from '../../public/images/home.png'
import productImage from '../../public/images/product.png'

// Import css files
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

interface IProductPage {
  product: IProduct
  comments: IComment[]
  relatedProducts: IProduct[]
}
interface ICarousel {
  data: string[]
  setImage: (image: string) => void
}
export default function Product({ product, comments, relatedProducts }: IProductPage) {
  const increaseQuantity = useShoppingCartStore((state: any) => state.increaseQuantity)
  const decreaseQuantity = useShoppingCartStore((state: any) => state.decreaseQuantity)
  const setIsFavourite = useShoppingCartStore((state: any) => state.setIsFavourite)
  const products = useShoppingCartStore((state: any) => state.products)

  const isLogged = useAuthStore((state: any) => state.isLogged)

  // load prouct details (apollo --> API) GET_PRODUCT_DETAILS

  const quantity = products.find((item: any) => item.id === product?.id)?.quantity || 0

  const [image, setImage] = useState<string>(product.images[0])

  const handleFavourite = e => {
    e.preventDefault()
    setIsFavourite(product?.id)
    onAddFavouriteProduct(product)
  }

  const isFavourite = isProductFavourite(product) ? <AiFillHeart /> : <AiOutlineHeart />

  return (
    <Layout isHeaderVisible isFooterVisible>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        px="1.5rem"
      >
        <View cond={product.images.length === 0}>
          <Text> No Images </Text>
        </View>

        <View cond={product.images.length > 1}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
            borderRadius=".5rem"
          />

          <Carousel data={product?.images} setImage={setImage} />
        </View>

        <Stack spacing={{ base: 6, md: 10 }} mt={['10rem', '0rem']}>
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
              {formatCurrency(product.price)}
            </Text>
          </Box>

          <Flex>
            <Rating initRate={product.rate} readOnly={!isLogged} />
            <Reviews data={product?.reviews} />
          </Flex>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={<StackDivider borderColor={useColorModeValue('gray.200', 'gray.600')} />}
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
                color={useColorModeValue('gray_2', 'gray_8')}
                fontSize={'1rem'}
                fontWeight={'300'}
              >
                {product.description}
              </Text>
            </VStack>
          </Stack>

          <Flex
            flexDir="row-reverse"
            flexWrap="wrap"
            justify={['space-around', '', '', '']}
            align="center"
          >
            <Button
              leftIcon={isFavourite}
              bg={useColorModeValue('white', 'gray_3')}
              color={useColorModeValue('accent_3', 'accent_6')}
              border="1px solid"
              borderColor="accent_3"
              borderRadius=".5rem"
              transition={'.35s all'}
              _hover={{ bg: 'accent_3', color: 'white' }}
              mt=".75rem"
              mb={{ base: '1em', md: '0' }}
              w="10rem"
              onClick={handleFavourite}
            >
              Favourite
            </Button>
            <View cond={quantity === 0}>
              <Button
                bg={'accent_3'}
                color={'white'}
                transition={'.35s all'}
                _hover={{
                  bg: 'white',
                  color: 'accent_3',
                  border: '1px solid',
                  borderColor: 'accent_3'
                }}
                borderRadius=".5rem"
                w="10rem"
                mt=".75rem"
                onClick={() => increaseQuantity(product)}
              >
                Add to Cart
              </Button>
            </View>

            <View cond={quantity > 0}>
              <Flex alignItems={'center'} justify="center">
                <IconButton
                  aria-label="decrease-quantity"
                  onClick={() => decreaseQuantity(product?.id)}
                  icon={<AiOutlineMinus />}
                />
                <Box as="span" p=".5rem 1.5rem">
                  {quantity}
                </Box>

                <IconButton
                  aria-label="increase-quantity"
                  onClick={() => increaseQuantity(product)}
                  icon={<AiOutlinePlus />}
                />
              </Flex>
            </View>
          </Flex>

          <DeliveryDetails data={product} />
        </Stack>
      </SimpleGrid>

      <RelatedProducts data={relatedProducts} />
      <ListingComments comments={comments} />
    </Layout>
  )
}

const DeliveryDetails = ({ data }: any) => {
  return (
    <Flex
      flexDir={'column'}
      justify="center"
      align={'center'}
      border="1px solid"
      borderColor={useColorModeValue('gray_9', 'gray_5')}
      p=".75rem"
      borderRadius={'.5rem'}
      bg={useColorModeValue('gray_8', 'gray_3')}
      color={useColorModeValue('gray_3', 'gray_8')}
    >
      <Flex w="95%">
        <MdLocalShipping size={20} />
        <Text w="90%" ml=".5rem">
          {data.delivery} delivery
        </Text>
      </Flex>

      <Flex w="95%">
        <MdLocalShipping size={20} />
        <Text w="90%" ml=".5rem">
          2 year extended warranty
        </Text>
      </Flex>

      <Flex w="95%">
        <MdLocalShipping size={20} />
        <Text w="90%" ml=".5rem">
          We’re here for you 24/7
        </Text>
      </Flex>
    </Flex>
  )
}

const RelatedProducts = ({ data }: { data: IProduct[] }) => {
  // load related products (apollo --> API) GET_RELATED_PRODUCTS
  return (
    <Flex flexDir={'column'} px="1.5rem" mt="5rem" mb="4rem">
      <Flex justify={'space-between'} alignItems="center" mb="1.5rem">
        <Heading fontSize="1.2rem" textTransform={'uppercase'} fontWeight={'700'}>
          Related Products
        </Heading>
        <Link href="/">View All</Link>
      </Flex>

      <View cond={data?.length > 0}>
        <Flex flexWrap="wrap" justify={['center', '', 'space-between']}>
          {data?.map((product, idx) => (
            <ProductCard key={idx} data={product} />
          ))}
        </Flex>
      </View>
    </Flex>
  )
}

const Reviews = ({ data }: { data: number }) => {
  return (
    <Flex mt=".2rem" fontSize=".85rem" fontStyle={'italic'} textTransform={'lowercase'}>
      <Box as="span" ml=".5rem">
        {data}
      </Box>
      <Box as="span" ml=".2rem">
        reviews
      </Box>
    </Flex>
  )
}

const SlickArrowLeft = props => {
  const { onClick } = props
  const arrowColor = useColorModeValue('gray_8', 'gray_5')
  const arrowColorHover = useColorModeValue('gray_7', 'gray_4')
  return (
    <IconButton
      aria-label="previous-slide"
      icon={<RiArrowLeftSLine size={24} />}
      onClick={onClick}
      pos="absolute"
      left="0"
      top="4rem"
      zIndex="100"
      borderRadius="50%"
      bg={arrowColor}
      _hover={{ bg: arrowColorHover }}
    />
  )
}

const SlickArrowRight = props => {
  const { onClick } = props
  const arrowColor = useColorModeValue('gray_8', 'gray_5')
  const arrowColorHover = useColorModeValue('gray_7', 'gray_4')
  return (
    <IconButton
      aria-label="next-slide"
      icon={<RiArrowRightSLine size={24} />}
      onClick={onClick}
      pos="absolute"
      right="0"
      top="4rem"
      zIndex="100"
      borderRadius="50%"
      bg={arrowColor}
      _hover={{ bg: arrowColorHover }}
    />
  )
}

function Carousel({ data, setImage }: ICarousel) {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 3,
    initialSlide: 0,
    nextArrow: <SlickArrowRight />,
    prevArrow: <SlickArrowLeft />,
    appendDots: dots => (
      <Box>
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </Box>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  }
  return (
    <Flex flexDir="column">
      <Slider {...settings}>
        {data.map((img, idx) => (
          <Box key={idx} borderRadius=".5rem" h="10rem">
            <Image
              src={img}
              alt={`img-${idx}`}
              h="fit-content"
              maxH="10rem"
              mx="auto"
              _hover={{ cursor: 'pointer' }}
              onClick={() => setImage(img)}
            />
          </Box>
        ))}
      </Slider>
    </Flex>
  )
}

export const getServerSideProps = async context => {
  // api call (context.params.id) --> productId
  const product = {
    id: 1,
    name: 'Automatic Watch',
    images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
    quantity: 1,
    price: 350,
    description:
      'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
    delivery: '2-3 business days',
    reviews: 34,
    rate: 4
  }
  const comments = [
    {
      id: 1,
      name: 'Sam',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 4,
      createdAt: JSON.parse(JSON.stringify(new Date()))
    },
    {
      id: 2,
      name: 'ghiles',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 2,
      createdAt: JSON.parse(JSON.stringify(new Date()))
    },
    {
      id: 3,
      name: 'sadek',
      comment:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 3,
      createdAt: JSON.parse(JSON.stringify(new Date()))
    }
  ]
  const relatedProducts = [
    {
      id: 1,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    },
    {
      id: 2,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    },
    {
      id: 3,
      name: 'Automatic Watch',
      images: [heroImage.src, productImage.src, heroImage.src, productImage.src],
      quantity: 1,
      price: 350,
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore',
      delivery: '2-3 business days',
      reviews: 34,
      rate: 4
    }
  ]
  return {
    props: {
      product,
      relatedProducts,
      comments
    }
  }
}
