import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue
} from '@chakra-ui/react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import { BackTop, Layout, ProductCard, Rating, Countdown } from '../components'
import { IconReview } from '../public/icons'
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
      image: heroImage.src,
      title: 'Fiability',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: heroImage.src,
      title: 'Speed',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
    },
    {
      image: heroImage.src,
      title: 'Quality',
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

  return (
    <Layout isHeaderVisible isFooterVisible>
      <BackTop />

      <Hero />
      <About data={aboutData} />
      <Services data={servicesData} />
      <ProductsOnTrend data={productsData} />
      <Promotion />
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
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <SectionWrapper title="Some Services We Offer">
      <Flex flexDir="row" flexWrap="wrap" justifyContent="space-evenly">
        {data.length > 0 &&
          data.map((service: any) => (
            <Flex
              key={service.title}
              flexDir={'column'}
              justifyContent="center"
              alignItems={'center'}
              boxShadow={'md'}
              w="15rem"
              borderRadius={'10px'}
              p="2rem 1.5rem"
              m={'.5rem'}
              bg={bgColor}
            >
              <Text fontWeight={'600'} fontSize="1.3rem" textAlign="center" mb=".75rem">
                {' '}
                {service.title}{' '}
              </Text>
              <Image src={service.image} boxSize={['135px', '', '', '']} />
              <Text fontSize=".9rem" mb=".75rem">
                {' '}
                {service.text}{' '}
              </Text>
              <Text fontWeight={'bold'} color={'accent_4'}>
                {' '}
                Learn More{' '}
              </Text>
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
            w="100px"
            borderRadius={'10px'}
            mt="1rem"
            fontSize=".9rem"
            transition={'.25s'}
            _hover={{ bg: 'transparent', border: '2px solid', borerColor: 'accent_4' }}
          >
            Shop Now
          </Button>
        </Flex>
      </Flex>
    </SectionWrapper>
  )
}

const QuestionsAnswers = ({ data }: { data: any }) => {
  const bgColor = useColorModeValue('gray_9', 'gray_2')
  return (
    <SectionWrapper title="Some common questions were often asked">
      <Box p="1.5rem 1rem">
        <Accordion defaultIndex={[0]} allowMultiple border="none">
          {data.map((item: any) => (
            <AccordionItem mb="1rem" border="none" boxShadow={'md'} borderRadius="5px" bg={bgColor}>
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
  const bgColor = useColorModeValue('gray_9', 'gray_2')
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
              bg={bgColor}
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

const Promotion = () => {
  return (
    <Flex
      flexDir={['column', '', 'row', '']}
      justifyContent={['center', '', 'space-evenly', '']}
      mt="1.5rem"
      p="2.5rem 1.5rem"
    >
      <Flex flexDir={'column'} justifyContent="center" alignItems="flex-start">
        <Heading
          fontSize="24px"
          mb="1rem"
          textTransform="uppercase"
          w={['15rem', '', '24rem', '']}
          wordBreak={'keep-all'}
          textAlign={'left'}
        >
          Deal of The Day
        </Heading>
        <Text mb="1rem" textAlign={'left'} w={['15rem', '', '24rem', '']} fontSize={'.9rem'}>
          With our app you can view the route of your order, from our local headquarters to the
          place where you are. Look for the app now!{' '}
        </Text>

        <Countdown initYear={new Date().getFullYear()} dueDay={new Date('2022-05-04')} />

        <Button
          bg={'accent_3'}
          _hover={{ bg: 'accent_2' }}
          color={'white'}
          borderRadius="20px"
          fontSize=".9rem"
        >
          Get The Deal
        </Button>
      </Flex>

      <Image
        src={heroImage.src}
        boxSize={['180px', '', '', '']}
        mx={['auto', '', '0', '0']}
        mt={['2rem', '', '0', '']}
      />
    </Flex>
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
          w={['15rem', '20rem', '', '']}
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
