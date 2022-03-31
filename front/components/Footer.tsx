import {
  Box,
  chakra,
  Container,
  Flex,
  Stack,
  Text,
  Input,
  Button,
  Heading,
  Image,
  useColorModeValue,
  VisuallyHidden
} from '@chakra-ui/react'
import React from 'react'
import Link from 'next/link'
import { ReactNode } from 'react'
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Logo } from '../public/icons'

import card1 from '../public/images/card1.png'
import card2 from '../public/images/card2.png'
import card3 from '../public/images/card3.png'
import card4 from '../public/images/card4.png'

export default function Footer() {
  const textColor = useColorModeValue('black', 'gray.100')
  const bgColor = useColorModeValue('gray.100', 'gray.700')
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  return (
    <Box bg={bgColor} color={textColor}>
      <Container
        as={Flex}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={['center', 'space-evenly', 'space-between', '']}
        align={'start'}
        flexWrap="wrap"
      >
        <Flex flexDir={'column'}>
          <Box mb="1rem">
            {' '}
            <Logo />{' '}
          </Box>
          <Subscribe />
        </Flex>

        <SocialMedia />

        <Links />

        <PaymentAccpect />
      </Container>

      <Box borderTopWidth={1} borderStyle={'solid'} borderColor={borderColor}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Text fontSize=".8rem"> © 2022 Ecommerce. All rights reserved </Text>
          <Flex>
            <Box color="blue.500" fontSize=".8rem">
              {' '}
              <Link href="/conditions"> Conditions and terms </Link>{' '}
            </Box>
            <Text mx=".5rem" fontSize=".8rem">
              {' '}
              |{' '}
            </Text>
            <Box color="blue.500" fontSize=".8rem">
              {' '}
              <Link href="/privacy"> Privacy </Link>{' '}
            </Box>
          </Flex>
        </Container>
      </Box>
    </Box>
  )
}

const Subscribe = () => {
  const [email, setEmail] = React.useState('')
  const onSubscribe = () => {
    console.log('subscribed !!')
  }
  return (
    <Flex flexDir={'column'} w="15rem">
      <Heading size="12rem" mb="1rem" color="green.700">
        {' '}
        Subscribe to our newsletter to stay update{' '}
      </Heading>
      <Flex
        justifyContent={'space-between'}
        bg="gray.200"
        p=".75rem"
        borderRadius={'10px'}
        w="18rem"
      >
        <Input
          type="text"
          value={email}
          size="md"
          bg="transparent"
          border="none"
          w="10rem"
          _focus={{ border: 'none' }}
          onChange={(e: any) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <Button
          type="submit"
          bg="green.500"
          fontSize={'.9rem'}
          color="white"
          borderRadius={'10px'}
          _hover={{ bg: 'green.600' }}
          onClick={() => onSubscribe()}
        >
          Subscribe
        </Button>
      </Flex>
    </Flex>
  )
}
const PaymentAccpect = () => {
  return (
    <Flex flexDir={'column'}>
      <Heading size="1rem" mb="1rem" color="green.700">
        {' '}
        We accept all credit cards{' '}
      </Heading>
      <Flex flexDir={'column'} justifyContent={'space-between'} alignItems="center">
        <Image src={card1.src} boxSize="30px" borderRadius={'5px'} mb=".5rem" />
        <Image src={card2.src} boxSize="30px" borderRadius={'5px'} mb=".5rem" />
        <Image src={card3.src} boxSize="30px" borderRadius={'5px'} mb=".5rem" />
        <Image src={card4.src} boxSize="30px" borderRadius={'5px'} mb=".5rem" />
      </Flex>
    </Flex>
  )
}
const SocialMedia = () => {
  return (
    <Flex flexDir={'column'}>
      <Heading size="12rem" mb="1rem" color="green.700">
        {' '}
        Follow us on{' '}
      </Heading>
      <Flex flexDir={'column'} my=".5rem" justifyContent={'center'} alignItems="center">
        <SocialButton label={'Twitter'} href={'#'}>
          <FaTwitter />
        </SocialButton>

        <SocialButton label={'YouTube'} href={'#'}>
          <FaYoutube />
        </SocialButton>

        <SocialButton label={'Instagram'} href={'#'}>
          <FaInstagram />
        </SocialButton>
      </Flex>
    </Flex>
  )
}
const Links = () => {
  return (
    <Flex flexDir={'column'} mb="1rem">
      <Heading size="12rem" mb="1rem" color="green.700">
        {' '}
        Site Map{' '}
      </Heading>
      <Flex flexDir={'column'} my=".5rem">
        <Link href={'/'}>
          <Box mb="1rem" _hover={{ cursor: 'pointer', color: 'green.600' }}>
            {' '}
            Home{' '}
          </Box>
        </Link>
        <Link href={'/products'}>
          <Box mb="1rem" _hover={{ cursor: 'pointer', color: 'green.600' }}>
            {' '}
            Products{' '}
          </Box>
        </Link>
        <Link href={'/contact'}>
          <Box mb="1rem" _hover={{ cursor: 'pointer', color: 'green.600' }}>
            {' '}
            Contact{' '}
          </Box>
        </Link>
      </Flex>
    </Flex>
  )
}

const SocialButton = ({
  children,
  label,
  href
}: {
  children: ReactNode
  label: string
  href: string
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      mb="1rem"
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200')
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}
