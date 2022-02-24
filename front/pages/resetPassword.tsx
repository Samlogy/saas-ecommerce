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
// import Link from 'next/link'

import { Layout, FormTemplate } from "../components"


export default function ResetPassword() {
    const [showPassword, setShowPassword] = useState({ password: false, confirm_password: false });

  return (
    <Flex minH="100vh" flexDir="column" justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <FormTemplate>
            <Heading lineHeight={1.1} fontSize={{ base: '2xl', md: '3xl' }}>
            Enter new password
            </Heading>

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

            <Stack spacing={6}>
                <Button bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                    Reset Password
                </Button>
            </Stack>
        </FormTemplate>
    </Flex>
  );
}