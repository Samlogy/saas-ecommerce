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
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Layout, FormTemplate, ErrorMessage } from "../components"
import { registerSchema } from "../lib/validation";


export default function Register() {
    const [showPassword, setShowPassword] = useState({ password: false, confirm_password: false });

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(registerSchema)
    });

    const onRegister = async (data: any) => {
        console.log('register: ', data);
    };

  return (
    <Flex minH="100vh" flexDir="column" justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack align={'center'} >
            <Heading fontSize={'4xl'}> Create account </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool <Box as="span" color={'blue.400'}> features </Box> ✌️
            </Text>
        </Stack>

        <FormTemplate>
            <form onSubmit={handleSubmit(onRegister)}> 
                <FormControl id="name" mb=".5rem">
                    <FormLabel> Your Name </FormLabel>
                    <Input type="text" placeholder="" _placeholder={{ color: 'gray.500' }} 
                            isInvalid={errors.fullName ? true : false}
                            errorBorderColor="error" borderColor="gray.500" borderRadius="4px" 
                            {...register("fullName")} />
                    {errors.fullName && <ErrorMessage error={errors.fullName.message} />}
                </FormControl>

                <FormControl id="mobile_email"  mb=".5rem">
                    <FormLabel> Mobile number or email </FormLabel>
                    <Input type="text" placeholder="" _placeholder={{ color: 'gray.500' }} 
                            isInvalid={errors.email ? true : false}
                            errorBorderColor="error" borderColor="gray.500" borderRadius="4px" 
                            {...register("email")} />
                    {errors.email && <ErrorMessage error={errors.email.message} />}
                </FormControl>

                <FormControl id="password" mb=".5rem">
                    <FormLabel> Password </FormLabel>
                    <InputGroup>
                        <Input type={showPassword.password ? 'text' : 'password'} placeholder="At least 8 characters long" 
                                isInvalid={errors.password ? true : false}
                                errorBorderColor="error" borderColor="gray.500" borderRadius="4px" 
                                {...register("password")} />
                        <InputRightElement h={'full'}>
                            <Button variant={'ghost'} onClick={() => setShowPassword({...showPassword, password: !showPassword.password})}>
                                {showPassword.password ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {errors.password && <ErrorMessage error={errors.password.message} />}
                </FormControl>

                <FormControl id="confirm_password" mb=".5rem">
                    <FormLabel> Re-enter Password </FormLabel>
                    <InputGroup>
                        <Input type={showPassword.confirm_password ? 'text' : 'password'} placeholder="" 
                                isInvalid={errors.confirm_password ? true : false}
                                errorBorderColor="error" borderColor="gray.500" borderRadius="4px" 
                                {...register("confirm_password")} />
                        <InputRightElement h={'full'}>
                            <Button variant={'ghost'} onClick={() => setShowPassword({...showPassword, confirm_password: !showPassword.confirm_password})}>
                                {showPassword.confirm_password ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {errors.confirm_password && <ErrorMessage error={errors.confirm_password.message} />}
                </FormControl>
                
                <Text fontSize="14px" mb=".75rem"> By creating an account, you agree to Amazon's 
                    <Link href="/conditions"> Box Conditions of Use </Link>
                        and 
                    <Link href="/privacy"> Privacy Notice. </Link>
                </Text>

                <Button type="submit" w="full" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                    Sign up
                </Button>
            </form>

            {/* <Divider my=".5rem" borderColor="gray.400" /> */}
            <Text> Already have an account? <Link href="/login"> Sign-In </Link> </Text>
        </FormTemplate>
    </Flex>
  );
}