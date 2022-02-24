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
    Divider,
    useColorModeValue,
    InputRightElement, InputGroup
  } from '@chakra-ui/react';
  import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"
  import { useState } from 'react';
import Link from 'next/link'

import { Layout, FormTemplate } from "../components"


export default function Register() {
    const [showPassword, setShowPassword] = useState({ password: false, confirm_password: false });

  return (
    <Flex minH="100vh" flexDir="column" justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack align={'center'} >
            <Heading fontSize={'4xl'}> Create account </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool <Box as="span" color={'blue.400'}> features </Box> ✌️
            </Text>
        </Stack>

        <FormTemplate>
            <FormControl id="name">
                <FormLabel> Your Name </FormLabel>
                <Input type="text" placeholder="" _placeholder={{ color: 'gray.500' }} />
            </FormControl>

            <FormControl id="mobile_email">
                <FormLabel> Mobile number or email </FormLabel>
                <Input type="text" placeholder="" _placeholder={{ color: 'gray.500' }} />
            </FormControl>

            <FormControl id="password" isRequired>
                <FormLabel> Password </FormLabel>
                <InputGroup>
                <Input type={showPassword.password ? 'text' : 'password'} placeholder="At least 8 characters long" />
                <InputRightElement h={'full'}>
                    <Button variant={'ghost'} onClick={() => setShowPassword({...showPassword, password: !showPassword.password})}>
                        {showPassword.password ? <AiFillEye /> : <AiFillEyeInvisible />}
                    </Button>
                </InputRightElement>
                </InputGroup>
            </FormControl>

        <FormControl id="confirm_password" isRequired>
            <FormLabel> Re-enter Password </FormLabel>
            <InputGroup>
            <Input type={showPassword.confirm_password ? 'text' : 'password'} placeholder="" />
            <InputRightElement h={'full'}>
                <Button variant={'ghost'} onClick={() => setShowPassword({...showPassword, confirm_password: !showPassword.confirm_password})}>
                    {showPassword.confirm_password ? <AiFillEye /> : <AiFillEyeInvisible />}
                </Button>
            </InputRightElement>
            </InputGroup>
        </FormControl>
            
             <Text fontSize="14px"> By creating an account, you agree to Amazon's 
                <Link href="/conditions"> Box Conditions of Use </Link>
                and 
                <Link href="/privacy"> Privacy Notice. </Link>
            </Text>

            <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                Sign up
            </Button>

            {/* <Divider my=".5rem" borderColor="gray.400" /> */}
            <Text> Already have an account? <Link href="/login"> Sign-In </Link> </Text>
        </FormTemplate>
    </Flex>
  );
}