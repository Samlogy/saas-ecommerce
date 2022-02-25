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
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { Layout, FormTemplate, ErrorMessage } from "../components"
import { loginSchema } from "../lib/validation";


export default function Login() {
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, getValues, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    });

    const onLogin = async (data: any) => {
        console.log('login: ', data);
    };

  return (
    <Flex minH="100vh" flexDir="column" justifyContent={'center'} alignItems={'center'} bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack align={'center'} >
            <Heading fontSize={'4xl'}> Sign in to your account </Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
                to enjoy all of our cool <Box as="span" color={'blue.400'}> features </Box> ✌️
            </Text>
        </Stack>

        <FormTemplate>
            <form onSubmit={handleSubmit(onLogin)}> 
                <FormControl id="email" mb=".5rem">
                    <FormLabel> Email Address </FormLabel>
                    <Input type="email" placeholder="your-email@example.com" _placeholder={{ color: 'gray.500' }}
                            isInvalid={errors.email ? true : false}
                            errorBorderColor="error" borderColor="gray.500" borderRadius="4px" 
                            {...register("email")} />
                    {errors.email && <ErrorMessage error={errors.email.message} />}
                </FormControl>

                <FormControl id="password" mb=".5rem">
                    <FormLabel> Password </FormLabel>
                    <InputGroup>
                        <Input type={showPassword ? 'text' : 'password'} placeholder="" 
                                isInvalid={errors.password ? true : false}
                                errorBorderColor="error" borderColor="gray.500" borderRadius="4px" 
                                {...register("password")} />
                        <InputRightElement h={'full'}>
                            <Button variant={'ghost'} onClick={() => setShowPassword(showPassword => !showPassword)}>
                                {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                    {errors.password && <ErrorMessage error={errors.password.message} />}
                </FormControl>

                <Stack spacing={5}>
                    <Stack direction={{ base: 'column', sm: 'row' }} align={'start'} justify={'space-between'}>
                        <Checkbox> Remember me </Checkbox>
                        <Link href="/forgotPassword"> 
                            Forgot password?
                            {/* <Box as="span" color={'blue.400'}> Forgot password? </Box>  */}
                        </Link>
                    </Stack>
                    
                    <Button type="submit" bg={'blue.400'} color={'white'} _hover={{ bg: 'blue.500' }}>
                        Sign in
                    </Button>
                </Stack>
            </form>
        </FormTemplate>
    </Flex>
  );
}