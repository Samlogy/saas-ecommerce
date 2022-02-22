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

import { Layout, FormTemplate } from "../components"


export default function ForgotPassword() {
  return (
    <FormTemplate>
        <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Forgot your password?
        </Heading>

        <Text fontSize={{ base: 'sm', sm: 'md' }} color={useColorModeValue('gray.800', 'gray.400')}>
            You&apos;ll get an email with a reset link
        </Text>

        <FormControl id="email">
            <Input type="email" placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} />
        </FormControl>

        <Stack spacing={6}>
            <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                Request Reset
            </Button>
        </Stack>
    </FormTemplate>
  );
}