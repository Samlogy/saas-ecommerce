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
  import { useState } from 'react';
import Link from 'next/link'

import { Layout, FormTemplate } from "../components"


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

  return (
    <Flex h="100vh" flexDir="column" justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack align={'center'} >
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool <Box as="span" color={'blue.400'}> features </Box> ✌️
            </Text>
        </Stack>

        <FormTemplate>
            <FormControl id="email">
                <FormLabel> Email Address </FormLabel>
                <Input type="email" placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel> Password </FormLabel>
                <InputGroup>
                    <Input type={showPassword ? 'text' : 'password'} placeholder="At least 8 characters long" />
                    <InputRightElement h={'full'}>
                        <Button variant={'ghost'} onClick={() => setShowPassword(showPassword => !showPassword)}>
                            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </FormControl>

            <Stack spacing={10}>
                <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                    <Checkbox> Remember me </Checkbox>
                    <Link href="/forgotPassword"> 
                        Forgot password?
                        {/* <Box as="span" color={'blue.400'}> Forgot password? </Box>  */}
                    </Link>
                </Stack>
                
                <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                    Sign in
                </Button>
            </Stack>
        </FormTemplate>
    </Flex>
  );
}