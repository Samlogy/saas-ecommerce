import Head from 'next/head'
import Link from 'next/link'
import {
  Box,
  Heading,
  chakra,
  Container,
  Radio,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  SimpleGrid,
  Image,
  Flex,
  StackDivider,
  Select,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Divider,
  Avatar,
  FormControl,
  FormLabel,
  Input,
  useColorMode
} from '@chakra-ui/react'

import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5'
import {
  ReactElement,
  useRef,
  useEffect,
  useState,
  useCallback,
  useMemo,
  createContext,
  useContext,
  useReducer
} from 'react'

import {
  ShoppingCart,
  Layout,
  CookieBox,
  ModalPopUp,
  SocialMediaButton,
  ErrorMessage,
  Carousel,
  ProductCard,
  Rating,
  BackTop,
  DarkModeToggle,
  Pagination,
  StepForm,
  Comment,
  AddComment,
  ListingComments,
  Filter
} from '../components'
import { useLocale } from '../lib/hooks'
import { useShoppingCart } from '../store'
import { IconReview } from '../public/icons'

import { yupResolver } from '@hookform/resolvers/yup'
import { useForm } from 'react-hook-form'
import { useQuery, useMutation, useQueryClient } from 'react-query'
import { FiPlus, FiMinus } from 'react-icons/fi'

import { getAllUsers, getOneUser, createUser, updateUser, deleteUser } from '../services'
import { testSchema } from '../lib/validation'

import heroImage from '../public/images/home.png'
import productImage from '../public/images/product.png'

export default function Home() {
  const questionsanswersdata = [
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo'
    },
    {
      question: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo'
    }
  ]
  const productsData = [
    {
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 45,
      rate: 4.2,
      reviews: 34,
      currency: '£'
    },
    {
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 45,
      rate: 4.2,
      reviews: 34,
      currency: '£'
    },
    {
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 45,
      rate: 4.2,
      reviews: 34,
      currency: '£'
    },
    {
      isNew: true,
      image: productImage.src,
      name: 'Wayfarer Classic',
      price: 45,
      rate: 4.2,
      reviews: 34,
      currency: '£'
    }
  ]
  const servicesData = [
    {
      icon: <IoAnalyticsSharp size={24} />,
      title: 'Fiability',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      icon: <IoAnalyticsSharp size={24} />,
      title: 'Fiability',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      icon: <IoAnalyticsSharp size={24} />,
      title: 'Fiability',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    }
  ]
  const reviewsData = [
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 2.5,
      name: 'jane',
      avatar: productImage.src
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 4,
      name: 'bob',
      avatar: productImage.src
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 5,
      name: 'jone',
      avatar: productImage.src
    }
  ]
  const aboutData = {
    image: heroImage.src,
    title: 'Best Food In The Country',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi facilis, minus earum labore vero animi necessitatibus tempora? Assumenda, itaque ad eveniet explicabo quia vero porro quos voluptatum ipsum velit.'
  }

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(testSchema)
  })

  const onTest = data => {
    console.log('step form: ', data)
  }

  const form_1 = (
    <Flex
      flexDir="column"
      alignItems={'center'}
      m="2rem auto"
      p={4}
      w="400px"
      rounded={'xl'}
      boxShadow={'lg'}
    >
      <FormControl id="username" mb=".5rem">
        <FormLabel> username </FormLabel>
        <Input
          type="text"
          placeholder=""
          _placeholder={{ color: 'gray.500' }}
          isInvalid={errors.username ? true : false}
          errorBorderColor="error"
          borderColor="gray.300"
          borderRadius="4px"
          {...register('username')}
        />
        {errors.username && <ErrorMessage error={errors.username.message} />}
      </FormControl>

      <FormControl id="email" mb=".5rem">
        <FormLabel> Email Address </FormLabel>
        <Input
          type="email"
          placeholder="your-email@example.com"
          _placeholder={{ color: 'gray.500' }}
          isInvalid={errors.email ? true : false}
          errorBorderColor="error"
          borderColor="gray.300"
          borderRadius="4px"
          {...register('email')}
        />
        {errors.email && <ErrorMessage error={errors.email.message} />}
      </FormControl>
    </Flex>
  )

  const form_2 = (
    <Flex
      flexDir="column"
      alignItems={'center'}
      m="2rem auto"
      p={4}
      w="400px"
      rounded={'xl'}
      boxShadow={'lg'}
    >
      <FormControl id="fullName" mb=".5rem">
        <FormLabel> fullName </FormLabel>
        <Input
          type="text"
          placeholder=""
          _placeholder={{ color: 'gray.500' }}
          isInvalid={errors.fullName ? true : false}
          errorBorderColor="error"
          borderColor="gray.300"
          borderRadius="4px"
          {...register('fullName')}
        />
        {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
      </FormControl>

      <FormControl id="email" mb=".5rem">
        <FormLabel> address </FormLabel>
        <Input
          type="text"
          placeholder=""
          _placeholder={{ color: 'gray.500' }}
          isInvalid={errors.address ? true : false}
          errorBorderColor="error"
          borderColor="gray.300"
          borderRadius="4px"
          {...register('address')}
        />
        {errors.address && <ErrorMessage error={errors.address.message} />}
      </FormControl>
    </Flex>
  )

  const form_3 = (
    <Flex
      flexDir="column"
      alignItems={'center'}
      m="2rem auto"
      p={4}
      w="400px"
      rounded={'xl'}
      boxShadow={'lg'}
    >
      <FormControl id="age" mb=".5rem">
        <FormLabel> age </FormLabel>
        <Input
          type="text"
          placeholder=""
          _placeholder={{ color: 'gray.500' }}
          isInvalid={errors.age ? true : false}
          errorBorderColor="error"
          borderColor="gray.300"
          borderRadius="4px"
          {...register('age')}
        />
        {errors.age && <ErrorMessage error={errors.age.message} />}
      </FormControl>
    </Flex>
  )

  const steps = [
    { label: 'Form 1', content: form_1, icon: IoAnalyticsSharp, description: 'desc 1' },
    { label: 'Form 2', content: form_2, icon: IoLogoBitcoin, description: 'desc 2' },
    { label: 'Form 3', content: form_3, icon: IoSearchSharp, description: 'desc 3' }
  ]

  return (
    <Layout isHeaderVisible isFooterVisible>
      <BackTop />

      <StepForm steps={steps} handleForm={handleSubmit(onTest)} />

      {/* <Button onClick={() => setShow(true)}> show </Button>
        <ModalPopUp open={show} close={setShow} text={text} mode="warning" /> */}

      <Hero />
      <About data={aboutData} />
      <Services data={servicesData} />
      <ProductsOnTrend data={productsData} />
      <CustomerReviews data={reviewsData} />
      <QuestionsAnswers data={questionsanswersdata} />
      <AppStore />
    </Layout>
  )
}

const Hero = () => {
  return (
    <Flex
      flexDir="row"
      flexWrap={'wrap-reverse'}
      justifyContent={['center', '', 'space-between', '']}
      my="2rem"
    >
      <Flex
        flexDir={'column'}
        alignItems="center"
        justifyContent={'center'}
        w={['30rem', '', '25rem', '']}
      >
        <Heading mb="1.5rem"> Plants will make your life better </Heading>
        <Text mb="1.5rem">
          {' '}
          Create incredible plant design for your offices or apastaments. Add fresness to your new
          ideas.{' '}
        </Text>
        <Button
          w="120px"
          mr={['0', '', 'auto', '']}
          mx={['auto', '', '0', '']}
          bg={'accent_3'}
          _hover={{ bg: 'accent_2' }}
          color={'white'}
        >
          {' '}
          Explore{' '}
        </Button>
      </Flex>
      <Image
        src={heroImage.src}
        boxSize={['18rem', '', '20rem', '']}
        mx={['auto', '', '0', '']}
        mb={['1rem', '', '0', '']}
      />
    </Flex>
  )
}
const Services = ({ data }: { data: any }) => {
  return (
    <SectionWrapper title="Some Services We Offer">
      <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
        {data.length > 0 &&
          data.map((el: any) => (
            <Flex
              flexDir={'column'}
              justifyContent="center"
              alignItems={'center'}
              boxShadow={'md'}
              w="15rem"
              borderRadius={'10px'}
              p="2rem 1.5rem"
              m={'.5rem'}
            >
              <Text fontWeight={'600'} fontSize="1.3rem" textAlign="center" mb=".75rem">
                {' '}
                {el.title}{' '}
              </Text>
              <Image src={heroImage.src} boxSize={['135px', '', '', '']} />
              <Text fontSize=".9rem" mb=".75rem">
                {' '}
                {el.text}{' '}
              </Text>
              <Text fontWeight={'bold'}> Learn More </Text>
            </Flex>
          ))}
      </Flex>
    </SectionWrapper>
  )
}
const About = ({ data }: { data: any }) => {
  return (
    <SectionWrapper title="WHY CHOOSE US ?">
      <Flex flexWrap="wrap" justifyContent={'space-evenly'}>
        <Image src={data?.image} alt="about image" boxSize="250px" borderRadius={'5px'} />

        <Flex flexDir="column" w={['80%', '', '40%', '']} mt={['1.5rem', '', '0rem', '']}>
          <Heading fontSize="1.8rem" fontWeight="700" mb="1rem" color="accent_4">
            {data?.title}
          </Heading>
          <Text fontSize=".9rem" color="gray.500">
            {data?.text}
          </Text>
          <Button
            color="accent_4"
            bg="transparent"
            border="1px solid"
            borderColor={'accent_4'}
            w="100px"
            borderRadius={'10px'}
            mt="1rem"
            fontSize=".9rem"
            _hover={{ bg: 'transparent' }}
          >
            Shop Now
          </Button>
        </Flex>
      </Flex>
    </SectionWrapper>
  )
}

const QuestionsAnswers = ({ data }: { data: any }) => {
  return (
    <SectionWrapper title="Some common questions were often asked">
      <Box p="1.5rem 1rem">
        <Accordion defaultIndex={[0]} allowMultiple border="none">
          {data.map((item: any) => (
            <AccordionItem mb="1rem" border="none" boxShadow={'md'} borderRadius="5px">
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'accent_2', color: 'white' }}
                      borderRadius="5px"
                      fontSize={'.9rem'}
                    >
                      <Box flex="1" textAlign="left" fontWeight="500">
                        {item.question}
                      </Box>
                      {isExpanded ? <FiMinus size={18} /> : <FiPlus size={18} />}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    pb={4}
                    fontSize={'.9rem'}
                    bg={isExpanded ? 'accent_2' : 'white'}
                    color={isExpanded ? 'white' : 'black'}
                    borderRadius="5px"
                  >
                    {item.answer}
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </SectionWrapper>
  )
}

const ProductsOnTrend = ({ data }: { data: any }) => {
  return (
    <SectionWrapper title="Check out our products">
      <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
        {data.length > 0 && data.map((el: any) => <ProductCard data={el} />)}
      </Flex>
    </SectionWrapper>
  )
}

const CustomerReviews = ({ data }: { data: any }) => {
  return (
    <SectionWrapper title="Customer Reviews">
      <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
        {data.length > 0 &&
          data.map((el: any) => (
            <Flex
              flexDir={'column'}
              justifyContent="center"
              alignItems={'center'}
              boxShadow={'md'}
              w="15rem"
              borderRadius={'10px'}
              p="1.5rem"
              m={'1rem .5rem'}
            >
              <Box mr="auto">
                <IconReview color="#38a169" />
              </Box>
              <Text my=".75rem" fontStyle={'italic'} textAlign="center" fontSize=".9rem">
                {' '}
                {el.review}{' '}
              </Text>
              <Rating initRate={el?.rate} />
              <Image
                src={productImage.src}
                alt={el.name}
                boxSize="100px"
                fallbackSrc="https://via.placeholder.com/100"
                borderRadius={'full'}
                my=".75rem"
              />
              <Text fontSize=".9rem" textTransform={'uppercase'}>
                {' '}
                {el.name}{' '}
              </Text>
            </Flex>
          ))}
      </Flex>
    </SectionWrapper>
  )
}

const AppStore = () => {
  return (
    <SectionWrapper title="Watch Your Delivery At Any Time">
      <Flex
        flexDir={['column', '', 'row-reverse', '']}
        justifyContent={['center', '', 'space-evenly', '']}
        mt="1.5rem"
      >
        <Flex flexDir={'column'} justifyContent="center" alignItems="center">
          <Text mb="1rem" textAlign={'center'} maxW="24rem" fontSize={'.9rem'}>
            {' '}
            With our app you can view the route of your order, from our local headquarters to the
            place where you are. Look for the app now!{' '}
          </Text>

          <Flex mb="2rem">
            <Button
              bg={'accent_3'}
              _hover={{ bg: 'accent_2' }}
              color={'white'}
              borderRadius="20px"
              mx=".5rem"
              fontSize=".9rem"
            >
              {' '}
              App Store{' '}
            </Button>
            <Button
              bg={'accent_3'}
              _hover={{ bg: 'accent_2' }}
              color={'white'}
              borderRadius="20px"
              mx=".5rem"
              fontSize=".9rem"
            >
              {' '}
              Google Play{' '}
            </Button>
          </Flex>
        </Flex>

        <Image src={heroImage.src} boxSize={['180px', '', '', '']} mx={['auto', '', '0', '0']} />
      </Flex>
    </SectionWrapper>
  )
}

const SectionWrapper = ({
  children,
  title,
  rest
}: {
  children: React.ReactNode
  title: string
  rest?: any
}) => {
  return (
    <Flex flexDir="column" p="2.5rem 1.5rem" {...rest}>
      <Box textAlign={'center'}>
        <Heading
          fontSize="24px"
          mb="1rem"
          textTransform="uppercase"
          w="20rem"
          mx="auto"
          wordBreak={'keep-all'}
        >
          {title}
        </Heading>
        <Divider
          w="10rem"
          borderColor="accent_4"
          borderWidth="2px"
          bg="accent_4"
          borderRadius={'10px'}
          m="0 auto 1rem auto"
        />
      </Box>
      {children}
    </Flex>
  )
}
