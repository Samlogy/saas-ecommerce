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
import { AiOutlineHeart, AiFillHeart, AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { MdLocalShipping } from 'react-icons/md'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'

import { Layout, ListingComments, ProductCard, View, Rating } from '../../components'
import { IComment, IProduct } from '../../lib/interfaces'
import { useShoppingCart, useAuth } from '../../store'
import { GET_PRODUCT_DETAILS, GET_RELATED_PRODUCTS } from '../../lib/services'
import { isProductFavourite, onAddFavouriteProduct } from '../../lib/utils/fonctions'

import heroImage from '../../public/images/home.png'
import productImage from '../../public/images/product.png'

interface IProductPage {
  product: IProduct
  comments: IComment[]
  relatedProducts: IProduct[]
}
interface ICarouselPreview {
  images: string[]
  setImage: (images: string) => void
}

export default function Product({ product, comments, relatedProducts }: IProductPage) {
  const increaseQuantity = useShoppingCart((state: any) => state.increaseQuantity)
  const decreaseQuantity = useShoppingCart((state: any) => state.decreaseQuantity)
  const setIsFavourite = useShoppingCart((state: any) => state.setIsFavourite)
  const products = useShoppingCart((state: any) => state.products)

  const isLogged = useAuth((state: any) => state.isLogged)

  // load prouct details (apollo --> API) GET_PRODUCT_DETAILS

  const quantity = products.find((item: any) => item.id === product?.id)?.quantity || 0

  const [image, setImage] = useState<string>(product.image[0])

  const handleFavourite = e => {
    e.preventDefault()
    setIsFavourite(product?.id)
    onAddFavouriteProduct(product?.id)
  }

  const isFavourite = isProductFavourite(product?.id) ? <AiFillHeart /> : <AiOutlineHeart />

  return (
    <Layout isHeaderVisible isFooterVisible>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        px="1.5rem"
      >
        <View cond={product.image.length === 0}>
          <Text> No Images </Text>
        </View>

        <View cond={product.image.length > 1}>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={image}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
            borderRadius=".5rem"
            border="1px solid"
            borderColor="black"
          />
          <CarouselPreview
            images={[heroImage.src, productImage.src, heroImage.src, productImage.src]}
            setImage={setImage}
          />
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

          <Flex flexDir="row-reverse" justifyContent={['space-around', '', '', '']} align="center">
            <Button
              leftIcon={isFavourite}
              bg={'white'}
              color={'accent_3'}
              border="1px solid"
              borderColor="accent_3"
              borderRadius=".5rem"
              transition={'.35s all'}
              _hover={{ bg: 'accent_3', color: 'white' }}
              mt=".75rem"
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

const CarouselPreview = ({ images, setImage }: ICarouselPreview) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const SLIDES_COUNT = images.length // number of images in carousel
  const IMAGES_TO_DISPLAY = 3 // number of images to display in carousel (preview)

  // select images to loop on
  const imagesSlides: string[] = []

  function generateImagesSlides(initImage: number) {
    let cpt = 0
    for (let i = initImage; i < IMAGES_TO_DISPLAY; i++) {
      if (i <= IMAGES_TO_DISPLAY - 1) {
        imagesSlides.push(images[i])
      }
      cpt = i + 1
    }
    if (cpt == IMAGES_TO_DISPLAY) {
      for (let i = 0; i < IMAGES_TO_DISPLAY; i++) {
        if (cpt <= IMAGES_TO_DISPLAY) {
          imagesSlides.push(images[i])
        }
      }
    }
  }

  // generateImagesSlides(currentSlide)
  const prevSlide = () => {
    setCurrentSlide(s => (s === 0 ? SLIDES_COUNT - 1 : s - 1))
  }
  const nextSlide = () => {
    setCurrentSlide(s => (s === SLIDES_COUNT - 1 ? 0 : s + 1))
  }

  const arrowStyles = {
    transition: '0.6s ease',
    borderRadius: '50%',
    bg: 'transparent',
    color: 'gray_2',
    _hover: {
      bg: 'transparent',
      color: 'accent_3'
    }
  }
  return (
    <Flex
      flexWrap={'wrap'}
      align="center"
      justify="space-evenly"
      p={['.25rem', '', '.5rem', '']}
      borderRadius={'10px'}
      mt="1.5rem"
      w={['15rem', '', '70%', '']}
      mx={['auto', '', '', '']}
    >
      <IconButton
        {...arrowStyles}
        aria-label="previous-slide"
        icon={<RiArrowLeftSLine size={24} />}
        onClick={prevSlide}
      />

      {imagesSlides.map((img: string, idx: number) => (
        <Image
          key={idx}
          src={img}
          rounded={'md'}
          alt={'product-image'}
          border="1px solid white"
          bg="white"
          borderRadius={'10px'}
          boxSize={['50px', '', '75px', '']}
          boxShadow="md"
          filter={currentSlide !== idx + 1 && 'grayscale(80%)'}
          _hover={{
            cursor: 'pointer',
            border: '2px solid',
            borderColor: 'accent_3',
            transition: 'border .25s'
          }}
          onClick={() => setImage(img)}
        />
      ))}

      <IconButton
        {...arrowStyles}
        aria-label="next-slide"
        icon={<RiArrowRightSLine size={24} />}
        onClick={nextSlide}
      />
    </Flex>
  )
}

const RelatedProducts = ({ data }: { data: IProduct[] }) => {
  // load related products (apollo --> API) GET_RELATED_PRODUCTS
  return (
    <Flex flexDir={'column'} px="1.5rem" mt="5rem" mb="4rem">
      <Flex justifyContent={'space-between'} alignItems="center" mb="1.5rem">
        <Heading fontSize="1.2rem" textTransform={'uppercase'} fontWeight={'700'}>
          Related Products
        </Heading>
        <Link href="/">View All</Link>
      </Flex>

      <View cond={data?.length > 0}>
        <Flex flexWrap="wrap" justifyContent={['center', '', 'space-between']}>
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
        {data}{' '}
      </Box>
      <Box as="span" ml=".2rem">
        reviews{' '}
      </Box>
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
    delivery: '2-3 business days',
    reviews: 34,
    rate: 4.5
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
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 6,
      rating: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2
    },
    {
      id: 2,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 4,
      rating: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2
    },
    {
      id: 3,
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 2,
      rating: 4.2,
      quantity: 11,
      reviews: 34,
      currency: '£',
      discount: 0.2
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
