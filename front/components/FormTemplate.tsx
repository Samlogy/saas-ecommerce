import {
    Button,
    FormControl,
    FormLabel,
    Flex,
    Heading,
    Input,
    Stack,
    Text,
    Box,
    Checkbox,
    useColorModeValue,
    InputRightElement, InputGroup
  } from '@chakra-ui/react';
  import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
// import Link from 'next/link'

import { Layout, View } from "../components"


export default function FormTemplate({ children }: { children: React.ReactNode }) {
  return (
      <Flex align={'center'} justify={'center'} bg={useColorModeValue('gray.50', 'gray.800')}  w="400px">
        <Stack spacing={4} w={'full'} maxW={'md'} bg={useColorModeValue('white', 'gray.700')} rounded={'xl'} boxShadow={'lg'} p={6} my={12}>
            { children }
        </Stack>
      </Flex>
  );
}