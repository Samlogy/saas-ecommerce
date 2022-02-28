import Head from 'next/head'
import Link from 'next/link'
import {
  Box,
  Heading,
  chakra,
  Container,
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
  Avatar
} from '@chakra-ui/react';

import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import { FaLinkedinIn, FaGithub, FaTwitter, FaFacebook } from "react-icons/fa"

import { ShoppingCart, Layout, ModalPopUp, SocialMediaButton, Carousel, ProductCard } from "../components" 
import { Item } from 'framer-motion/types/components/Reorder/Item';

export default function Home() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const text = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo";

  const images = [
    'https://images.unsplash.com/photo-1516796181074-bf453fbfa3e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    'https://images.unsplash.com/photo-1438183972690-6d4658e3290e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2274&q=80',
    'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
  ];
  const qna = [
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo"
    },
    {
      question: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo, Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur provident optio debitis adipisci explicabo"
    },
  ];
  const testimonials = [
    {
      name: 'Brandon P.',
      role: 'Chief Marketing Officer',
      content:
        'It really saves me time and effort. It is exactly what our business has been lacking. EEZY is the most valuable business resource we have EVER purchased. After using EEZY my business skyrocketed!',
      avatar:
        'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'Krysta B.',
      role: 'Entrepreneur',
      content:
        "I didn't even need training. We've used EEZY for the last five years. I have gotten at least 50 times the value from EEZY. I made back the purchase price in just 48 hours!",
      avatar:
        'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'Darcy L.',
      role: 'Movie star',
      content:
        "Thank you for making it painless, pleasant and most of all, hassle free! I'm good to go. No matter where you go, EEZY is the coolest, most happening thing around! I love EEZY!",
      avatar:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
    },
    {
      name: 'Daniel T.',
      role: 'Musician',
      content:
        'I am so pleased with this product. EEZY is both attractive and highly adaptable. Without EEZY, we would have gone bankrupt by now. Thank you for creating this product!',
      avatar:
        'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
  ];
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
  },{
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
  ];

  return (
    <Layout isHeaderVisible isFooterVisible>
        <Button onClick={onOpen}> Open Modal </Button>
        {/* <ModalPopUp isOpen={isOpen} onClose={onClose} text={text} type="info" /> */}

        {/* <CustomerReviews /> */}

        {/* <SocialMediaButton type="facebook" />
        <SocialMediaButton type="twitter" />
        <SocialMediaButton type="linkedin" />
        <SocialMediaButton type="github" /> */}

        {/* <ShoppingCart isOpen={isOpen} onClose={onClose} /> */}

        {/* <Carousel data={images} /> */}

        {/* <QuestionsAnswers data={qna} /> */}

        {/* <CustomerReviews data={testimonials} /> */}

        {/* <ProductsOnTrend data={products} /> */}

        {/* <About /> */}
    </Layout>
  );
}





const About = () => {
  return(
  <Box border="1px" p="2.5rem 1.5rem" borderColor="blue.500" borderRadius="5px">
    <Box textAlign={'center'} mb="1.5rem">
      <Heading fontSize="1.2rem" fontWeight='400' color="teal.500"> About Us </Heading>
      <Heading fontSize="1.8rem" fontWeight='500' color="blue.800"> WHY CHOOSE US ? </Heading>
    </Box>

    <Flex flexWrap='wrap' justifyContent={'space-evenly'}>
      {/* <Box boxSize='sm'>
        <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
      </Box> */}
      <Image src='https://bit.ly/dan-abramov' alt='Dan Abramov' borderRadius={'5px'} />

      <Flex flexDir="column" w={["80%", "", "40%", ""]} mt={["1.5rem", "", "0rem", ""]}>
        <Heading fontSize="1.8rem" fontWeight='700' mb="1rem" color="blue.800"> Best Food In The Country </Heading>
        <Text fontSize="1rem"> 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente commodi facilis, minus earum labore vero animi necessitatibus tempora? Assumenda, itaque ad eveniet explicabo quia vero porro quos voluptatum ipsum velit. 
        </Text>
        <Button variant="solid" bg='blue.800' color='white' w="150px" mt="1rem"> Learn More </Button>
      </Flex>
    </Flex>
  </Box>
  )
}

const Services = ({ data }: { data: any}) => {
  return(
  <>
  </>
  )
}

const Hero = ({ data }: { data: any}) => {
  return(
  <>
  </>
  )
}


interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
  index: number;
}

const CustomerReviews = ({ data }: { data: any }) => {

  function CustomerReviewCard(props: TestimonialCardProps) {
    const { name, role, content, avatar, index } = props;
    return (
      <Flex
        boxShadow={'lg'}
        maxW={'640px'}
        direction={{ base: 'column-reverse', md: 'row' }}
        width={'full'}
        rounded={'xl'}
        p={10}
        justifyContent={'space-between'}
        position={'relative'}
        bg={useColorModeValue('white', 'gray.800')}
        _after={{
          content: '""',
          position: 'absolute',
          height: '21px',
          width: '29px',
          left: '35px',
          top: '-10px',
          backgroundSize: 'cover',
          backgroundImage: `url("data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='29' height='21' viewBox='0 0 29 21' fill='none'%3E%3Cpath d='M6.91391 21C4.56659 21 2.81678 20.2152 1.66446 18.6455C0.55482 17.0758 0 15.2515 0 13.1727C0 11.2636 0.405445 9.43939 1.21634 7.7C2.0699 5.91818 3.15821 4.3697 4.48124 3.05454C5.84695 1.69697 7.31935 0.678787 8.89845 0L13.3157 3.24545C11.5659 3.96667 9.98676 4.94242 8.57837 6.17273C7.21266 7.36061 6.25239 8.63333 5.69757 9.99091L6.01766 10.1818C6.27373 10.0121 6.55114 9.88485 6.84989 9.8C7.19132 9.71515 7.63944 9.67273 8.19426 9.67273C9.34658 9.67273 10.4776 10.097 11.5872 10.9455C12.7395 11.7939 13.3157 13.1091 13.3157 14.8909C13.3157 16.8848 12.6542 18.4121 11.3311 19.4727C10.0508 20.4909 8.57837 21 6.91391 21ZM22.5982 21C20.2509 21 18.5011 20.2152 17.3488 18.6455C16.2391 17.0758 15.6843 15.2515 15.6843 13.1727C15.6843 11.2636 16.0898 9.43939 16.9007 7.7C17.7542 5.91818 18.8425 4.3697 20.1656 3.05454C21.5313 1.69697 23.0037 0.678787 24.5828 0L29 3.24545C27.2502 3.96667 25.6711 4.94242 24.2627 6.17273C22.897 7.36061 21.9367 8.63333 21.3819 9.99091L21.702 10.1818C21.9581 10.0121 22.2355 9.88485 22.5342 9.8C22.8756 9.71515 23.3238 9.67273 23.8786 9.67273C25.0309 9.67273 26.1619 10.097 27.2715 10.9455C28.4238 11.7939 29 13.1091 29 14.8909C29 16.8848 28.3385 18.4121 27.0155 19.4727C25.7351 20.4909 24.2627 21 22.5982 21Z' fill='%239F7AEA'/%3E%3C/svg%3E")`,
        }}
        _before={{
          content: '""',
          position: 'absolute',
          zIndex: '-1',
          height: 'full',
          maxW: '640px',
          width: 'full',
          filter: 'blur(40px)',
          transform: 'scale(0.98)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          top: 0,
          left: 0,
        }}>
        <Flex
          direction={'column'}
          textAlign={'left'}
          justifyContent={'space-between'}>
          <chakra.p
            fontFamily={'Inter'}
            fontWeight={'medium'}
            fontSize={'15px'}
            pb={4}>
            {content}
          </chakra.p>
          <chakra.p fontFamily={'Work Sans'} fontWeight={'bold'} fontSize={14}>
            {name}
            <chakra.span
              fontFamily={'Inter'}
              fontWeight={'medium'}
              color={'gray.500'}>
              {' '}
              - {role}
            </chakra.span>
          </chakra.p>
        </Flex>
        <Avatar
          src={avatar}
          height={'80px'}
          width={'80px'}
          alignSelf={'center'}
          m={{ base: '0 0 35px 0', md: '0 0 0 50px' }}
        />
      </Flex>
    );
  }

  return (
    <Flex textAlign={'center'} pt={10} justifyContent={'center'} direction={'column'} width={'full'}>
      <Box width={{ base: 'full', sm: 'lg', lg: 'xl' }} margin={'auto'}>
        <chakra.h3
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          fontSize={20}
          textTransform={'uppercase'}
          color={'purple.400'}>
          People love us
        </chakra.h3>
        <chakra.h1
          py={5}
          fontSize={48}
          fontFamily={'Work Sans'}
          fontWeight={'bold'}
          color={useColorModeValue('gray.700', 'gray.50')}>
          You're in good company
        </chakra.h1>
        <chakra.h2
          margin={'auto'}
          width={'70%'}
          fontFamily={'Inter'}
          fontWeight={'medium'}
          color={useColorModeValue('gray.500', 'gray.400')}>
          See why over{' '}
          <chakra.strong color={useColorModeValue('gray.700', 'gray.50')}>
            150,000+
          </chakra.strong>{' '}
          influencers use EEZY to manage their social media content!
        </chakra.h2>
      </Box>

          <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={'10'} mt={10} mx={'auto'}>
              {data.map((cardInfo, idx) => (
                  <CustomerReviewCard {...cardInfo} index={idx} />
              ))}
          </SimpleGrid>
      <Box>
      </Box>
    </Flex>
  );
}

const QuestionsAnswers = ({ data }: { data: any }) => {
  return(
    <Flex flexDir="column">
      <Heading fontSize='24px' mb="1rem"> Questions and Answers </Heading>
      <Divider w="10rem" borderColor='blue.500' borderWidth='1px' mb="1rem" />

      <Box p="2.5rem 1.5rem" border="1px" borderColor="blue.500" borderRadius="5px">
        <Accordion defaultIndex={[0]} allowMultiple>
          { data.map((item: any) => 
            <AccordionItem>
              <h2>
                <AccordionButton _expanded={{ bg: 'blue.500', color: 'white' }} borderRadius="5px">
                  <Box flex='1' textAlign='left' fontWeight='500'>
                    {item.question}
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {item.answer}
              </AccordionPanel>
            </AccordionItem>
          )}
        </Accordion>
      </Box>
    </Flex>
  )
}

const ProductsOnTrend = ({ data }: { data: any}) => {
  return(
    <Flex flexDir="column">
      <Heading  fontSize='24px' mb="1rem"> Products On Trends </Heading>
      <Divider w="10rem" borderColor='blue.500' borderWidth='1px' mb="1rem" />

      <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly" p="2.5rem 1.5rem" border="1px" borderColor="blue.500" borderRadius="5px">
        { data.map((el: any) => <ProductCard data={el} />) }
      </Flex>
    </Flex>
  )
}

