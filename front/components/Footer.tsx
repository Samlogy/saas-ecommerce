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
    const textColor = useColorModeValue('black', 'gray.100')
    const bgColor = useColorModeValue('gray.100', 'gray.700')
    const borderColor = useColorModeValue('gray.300', 'gray.600')

    return (
      <Box bg={bgColor} color={textColor}>
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
  
        <Box borderTopWidth={1} borderStyle={'solid'} borderColor={borderColor}>
          <Container as={Stack} maxW={'6xl'} py={4} direction={{ base: 'column', md: 'row' }} spacing={4} justify={{ base: 'center', md: 'space-between' }} align={{ base: 'center', md: 'center' }}>
            <Text fontSize=".8rem"> © 2022 Ecommerce. All rights reserved </Text>         
            <Flex>
              <Box color="blue.500" fontSize=".8rem"> <Link href="/conditions"> Conditions and terms </Link>  </Box>
              <Text mx=".5rem" fontSize=".8rem"> | </Text>
              <Box color="blue.500" fontSize=".8rem"> <Link href="/privacy"> Privacy </Link>  </Box>
            </Flex>
          </Container>
        </Box>
      </Box>
    );
  }
