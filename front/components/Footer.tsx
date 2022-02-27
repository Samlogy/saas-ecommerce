import Head from 'next/head'
import Link from 'next/link'
import {
    Box,
    Flex,
    chakra,
    Container,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { ReactNode } from 'react';
 
  import { Logo } from "../public/icons"
  
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  export default function Footer() {
    return (
      <Box bg={useColorModeValue('gray.50', 'gray.900')} color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Flex} maxW={'6xl'} py={4} spacing={4} justify={["center", "space-evenly", "space-between", ""]} align={'center'} flexWrap="wrap">
          <Logo />

          <Stack direction={'row'} spacing={6} my=".5rem">
            <Link href={'/'}> Home </Link>
            <Link href={'/products'}> Products </Link>
            <Link href={'/contact'}> Contact Us </Link>
          </Stack>

          <Stack direction={'row'} spacing={6} my=".5rem">
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>

            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>

            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
  
        <Box borderTopWidth={1} borderStyle={'solid'} borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
            <Text> © 2022 Ecommerce. All rights reserved </Text>         
            <Flex>
              <Box color="blue.500"> <Link href="/conditions"> Conditions and terms </Link>  </Box>
              <Text mx=".5rem"> | </Text>
              <Box color="blue.500"> <Link href="/privacy"> Privacy </Link>  </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    );
  }
