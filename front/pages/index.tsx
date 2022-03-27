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

export default function Home() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo'

  const slides = [
    'https://images.pexels.com/photos/2599537/pexels-photo-2599537.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    ,
    'https://images.pexels.com/photos/2714581/pexels-photo-2714581.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/2878019/pexels-photo-2878019.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/1142950/pexels-photo-1142950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    'https://images.pexels.com/photos/3124111/pexels-photo-3124111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
  ]
  const qna = [
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
  const testimonials = [
    {
      name: 'Brandon P.',
      role: 'Chief Marketing Officer',
      content:
        'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
      avatar:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      name: 'Krysta B.',
      role: 'Entrepreneur',
      content:
        "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
      avatar:
        'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    },
    {
      name: 'Darcy L.',
      role: 'Movie star',
      content:
        "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80'
    },
    {
      name: 'Daniel T.',
      role: 'Musician',
      content:
        'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
      avatar:
        'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80'
    }
  ]
  const products = [
    {
      isNew: true,
      imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
      name: 'Wayfarer Classic',
      price: 4.5,
      rating: 4.2,
      numReviews: 34,
      currency: '£'
    },
    {
      isNew: true,
      imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
      name: 'Wayfarer Classic',
      price: 4.5,
      rating: 4.2,
      numReviews: 34,
      currency: '£'
    },
    {
      isNew: true,
      imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
      name: 'Wayfarer Classic',
      price: 4.5,
      rating: 4.2,
      numReviews: 34,
      currency: '£'
    },
    {
      isNew: true,
      imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
      name: 'Wayfarer Classic',
      price: 4.5,
      rating: 4.2,
      numReviews: 34,
      currency: '£'
    },
    {
      isNew: true,
      imageURL:
        'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=4600&q=80',
      name: 'Wayfarer Classic',
      price: 4.5,
      rating: 4.2,
      numReviews: 34,
      currency: '£'
    }
  ]
  const services = [
    {
      title: 'Fiability',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      icon: ''
    }
  ]
  const reviewsData = [
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 2.5,
      name: 'jane',
      avatar: 'https://bit.ly/dan-abramov'
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 4,
      name: 'bob',
      avatar: 'https://bit.ly/dan-abramov'
    },
    {
      review:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo',
      rate: 5,
      name: 'jone',
      avatar: 'https://bit.ly/dan-abramov'
    }
  ]

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
      {/* <Filter /> */}

      {/* <Pagination page={page} 
                  pages={[page, page+1, page+2, page+3]} 
                  changePage={setPage}
                  nextPage={() => setPage((prev) => prev + 1)} 
                  prevPage={() => setPage((prev) => prev - 1)} 
                  startPage={() => setPage(1)}
                  endPage={() => setPage(data.info.pages)}
                  /> */}

      {/* <BackTop /> */}

      {/* <StepForm steps={steps} handleForm={handleSubmit(onTest)} /> */}

      {/* <Pagination /> */}

      {/* <Button onClick={() => setShow(true)}> show </Button>
        <ModalPopUp open={show} close={setShow} text={text} mode="warning" /> */}

      {/* <Hero /> */}
      {/* <Services data={services} /> */}
      {/* <About /> */}
      {/* <ProductsOnTrend data={products} /> */}
      {/* <CustomerReviews data={testimonials} /> */}
      {/* <QuestionsAnswers data={qna} /> */}
      <CustomerReviews data={reviewsData} />
    </Layout>
  )
}

const Services = ({ data }: { data: any }) => {
  return <Heading>Services</Heading>
}

const Hero = () => {
  return <Heading>Hero</Heading>
}

const About = () => {
  return (
    <Box border="1px" p="2.5rem 1.5rem" borderColor="blue.500" borderRadius="5px">
      <Box textAlign={'center'} mb="1.5rem">
        <Heading fontSize="1.2rem" fontWeight="400" color="teal.500">
          {' '}
          About Us{' '}
        </Heading>
        <Heading fontSize="1.8rem" fontWeight="500" color="blue.800">
          {' '}
          WHY CHOOSE US ?{' '}
        </Heading>
      </Box>

      <Flex flexWrap="wrap" justifyContent={'space-evenly'}>
        {/* <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box> */}
        <Image src="https://bit.ly/dan-abramov" alt="Dan Abramov" borderRadius={'5px'} />

        <Flex flexDir="column" w={['80%', '', '40%', '']} mt={['1.5rem', '', '0rem', '']}>
          <Heading fontSize="1.8rem" fontWeight="700" mb="1rem" color="blue.800">
            {' '}
            Best Food In The Country{' '}
          </Heading>
          <Text fontSize="1rem">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi facilis, minus
            earum labore vero animi necessitatibus tempora? Assumenda, itaque ad eveniet explicabo
            quia vero porro quos voluptatum ipsum velit.
          </Text>
          <Button variant="solid" bg="blue.800" color="white" w="150px" mt="1rem">
            {' '}
            Learn More{' '}
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
}
interface TestimonialCardProps {
  name: string
  role: string
  content: string
  avatar: string
  index: number
}

const QuestionsAnswers = ({ data }: { data: any }) => {
  return (
    <Flex flexDir="column">
      <Heading fontSize="24px" mb="1rem">
        {' '}
        Questions and Answers{' '}
      </Heading>
      <Divider w="10rem" borderColor="blue.500" borderWidth="1px" mb="1rem" />

      <Box p="2.5rem 1.5rem" border="1px" borderColor="blue.500" borderRadius="5px">
        <Accordion defaultIndex={[0]} allowMultiple>
          {data.map((item: any) => (
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton
                      _expanded={{ bg: 'blue.500', color: 'white' }}
                      borderRadius="5px"
                    >
                      <Box flex="1" textAlign="left" fontWeight="500">
                        {item.question}
                      </Box>
                      {isExpanded ? <FiMinus size={18} /> : <FiPlus size={18} />}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>{item.answer}</AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </Box>
    </Flex>
  )
}

const ProductsOnTrend = ({ data }: { data: any }) => {
  return (
    <Flex flexDir="column">
      <Heading fontSize="24px" mb="1rem">
        {' '}
        Products On Trends{' '}
      </Heading>
      <Divider w="10rem" borderColor="blue.500" borderWidth="1px" mb="1rem" />

      <Flex
        flexDir="row"
        flexWrap="wrap"
        justifyContent="space-evenly"
        p="2.5rem 1.5rem"
        border="1px"
        borderColor="blue.500"
        borderRadius="5px"
      >
        {data.map((el: any) => (
          <ProductCard data={el} />
        ))}
      </Flex>
    </Flex>
  )
}

const CustomerReviews = ({ data }: { data: any }) => {
  return (
    <Flex flexDir={'row'} flexWrap={'wrap'} justifyContent={'space-around'}>
      {data.length > 0 &&
        data.map((el: any) => (
          <Flex
            flexDir={'column'}
            justifyContent={'center'}
            alignItems={'center'}
            boxShadow={'lg'}
            p="1rem .75rem"
            borderRadius={'10px'}
            maxW="20rem"
            mb="1rem"
          >
            <Box mr="auto">
              <IconReview />
            </Box>
            <Text my=".75rem" fontStyle={'italic'} textAlign="center">
              {' '}
              {el.review}{' '}
            </Text>
            <Rating initRate={el?.rate} />
            <Image
              src={el.avatar}
              alt={el.name}
              boxSize="100px"
              fallbackSrc="https://via.placeholder.com/100"
              borderRadius={'full'}
              my=".75rem"
            />
            <Text fontWeight={'600'} fontSize="1.2rem" textTransform={'uppercase'}>
              {' '}
              {el.name}{' '}
            </Text>
          </Flex>
        ))}
    </Flex>
  )
}
